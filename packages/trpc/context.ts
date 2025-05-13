import { CreateExpressContextOptions } from '@trpc/server/adapters/express';

export function createContext({ req, res }: CreateExpressContextOptions) {
  return {
    req,
    res,
    session: req.session,
  };
}

export type Context = ReturnType<typeof createContext>;
