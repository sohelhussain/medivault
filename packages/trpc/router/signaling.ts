import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

type SignalStore = {
  [roomId: string]: {
    offer?: any;
    answer?: any;
    candidates: any[];
  };
};

const signals: SignalStore = {};

export const signalingRouter = router({
  createOffer: publicProcedure
    .input(z.object({ roomId: z.string(), offer: z.any() }))
    .mutation(({ input }) => {
      signals[input.roomId] = { ...signals[input.roomId], offer: input.offer, candidates: [] };
      return { success: true };
    }),

  getOffer: publicProcedure
    .input(z.object({ roomId: z.string() }))
    .query(({ input }) => {
      return { offer: signals[input.roomId]?.offer };
    }),

  createAnswer: publicProcedure
    .input(z.object({ roomId: z.string(), answer: z.any() }))
    .mutation(({ input }) => {
      signals[input.roomId] = { ...signals[input.roomId], answer: input.answer };
      return { success: true };
    }),

  getAnswer: publicProcedure
    .input(z.object({ roomId: z.string() }))
    .query(({ input }) => {
      return { answer: signals[input.roomId]?.answer };
    }),

  addCandidate: publicProcedure
    .input(z.object({ roomId: z.string(), candidate: z.any() }))
    .mutation(({ input }) => {
      signals[input.roomId]?.candidates.push(input.candidate);
      return { success: true };
    }),

  getCandidates: publicProcedure
    .input(z.object({ roomId: z.string() }))
    .query(({ input }) => {
      const candidates = signals[input.roomId]?.candidates || [];
      signals[input.roomId]!.candidates = []; // Clear after sending
      return { candidates };
    }),
});
