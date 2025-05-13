'use client';
import React, { useRef, useState, useEffect } from 'react';
import { trpc } from '../utils/trpc';

const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

export default function WebRTCPage() {
  const localRef = useRef<HTMLVideoElement>(null);
  const remoteRef = useRef<HTMLVideoElement>(null);
  const peer = useRef<RTCPeerConnection | null>(null);
  const [roomId] = useState('room-123'); // could be dynamic

  const utils = trpc.useUtils();

  useEffect(() => {
    const setup = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (localRef.current) localRef.current.srcObject = stream;

      peer.current = new RTCPeerConnection(configuration);
      stream.getTracks().forEach(track => peer.current!.addTrack(track, stream));

      peer.current.onicecandidate = (event) => {
        if (event.candidate) {
          utils.signaling.addCandidate.mutate({ roomId, candidate: event.candidate });
        }
      };

      peer.current.ontrack = (event) => {
        if (remoteRef.current) remoteRef.current.srcObject = event.streams[0];
      };
    };

    setup();
  }, []);

  const startCall = async () => {
    const offer = await peer.current!.createOffer();
    await peer.current!.setLocalDescription(offer);
    await utils.signaling.createOffer.mutate({ roomId, offer });
  };

  const joinCall = async () => {
    const { offer } = await utils.signaling.getOffer.query({ roomId });
    await peer.current!.setRemoteDescription(offer);
    const answer = await peer.current!.createAnswer();
    await peer.current!.setLocalDescription(answer);
    await utils.signaling.createAnswer.mutate({ roomId, answer });
  };

  const receiveAnswer = async () => {
    const { answer } = await utils.signaling.getAnswer.query({ roomId });
    if (answer) {
      await peer.current!.setRemoteDescription(answer);
    }
  };

  const fetchCandidates = async () => {
    const { candidates } = await utils.signaling.getCandidates.query({ roomId });
    for (const c of candidates) {
      await peer.current!.addIceCandidate(c);
    }
  };

  return (
    <div>
      <h2>WebRTC Call</h2>
      <video ref={localRef} autoPlay muted style={{ width: '45%' }} />
      <video ref={remoteRef} autoPlay style={{ width: '45%' }} />
      <div className="mt-4">
        <button onClick={startCall}>Start Call (Doctor)</button>
        <button onClick={joinCall}>Join Call (Patient)</button>
        <button onClick={receiveAnswer}>Receive Answer</button>
        <button onClick={fetchCandidates}>Fetch Candidates</button>
      </div>
    </div>
  );
}
