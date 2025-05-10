import { AnchorProvider, Program, Idl } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import idl from './idl.json';

const network = 'http://127.0.0.1:8899'; // or your preferred cluster
const connection = new Connection(network);
const provider = AnchorProvider.local(); // or configure with your wallet
const programId = new PublicKey((idl as any).metadata.address); // Ensure 'address' exists in metadata

const program = new Program(idl as Idl, programId, provider);

export default program;
