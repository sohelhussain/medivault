import { router } from '../trpc';
import { doctorRouter } from './doctor';

export const appRouter = router({
  doctor: doctorRouter,
});

export type AppRouter = typeof appRouter;
