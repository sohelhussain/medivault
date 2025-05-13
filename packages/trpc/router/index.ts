import { router } from './trpc';
import { signalingRouter } from './signaling';

export const appRouter = router({
  signaling: signalingRouter,
});

export type AppRouter = typeof appRouter;
