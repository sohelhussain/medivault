import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { prismaClient } from '@repo/db/prisma';

export const doctorRouter = router({
  signup: publicProcedure
    .input(z.object({ name: z.string(), password: z.string() }))
    .mutation(async ({ input }) => {
      const existing = await prismaClient.doctor.findUnique({
        where: { name: input.name },
      });
      if (existing) throw new Error('Doctor already exists');

      const passwordHash = await bcrypt.hash(input.password, 10);
      await prismaClient.doctor.create({
        data: { name: input.name, passwordHash },
      });

      return { success: true };
    }),

  login: publicProcedure
    .input(z.object({ name: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const doctor = await prismaClient.doctor.findUnique({
        where: { name: input.name },
      });
      if (!doctor || !(await bcrypt.compare(input.password, doctor.passwordHash))) {
        throw new Error('Invalid credentials');
      }

      ctx.req.session.doctor = doctor.name;
      return { success: true };
    }),

  logout: publicProcedure.mutation(({ ctx }) => {
    return new Promise((resolve, reject) => {
      ctx.req.session.destroy((err) => {
        if (err) return reject(new Error('Logout failed'));
        resolve({ success: true });
      });
    });
  }),

  me: publicProcedure.query(({ ctx }) => {
    if (!ctx.req.session.doctor) {
      throw new Error('Not authenticated');
    }

    return { loggedInAs: ctx.req.session.doctor };
  }),
});
