import express from 'express';
import session from 'express-session';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '@repo/trpc/router/_app';
import { createContext } from '@repo/trpc/context';
import { sendKafkaMessage } from '@repo/kafka/producer';

const app = express();
const PORT = 4000;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
  })
);
export const createPrescription = publicProcedure.mutation(async ({ ctx }) => {
  const prescriptionId = 'abc123'; // replace with actual logic

  // Send Kafka message
  await sendKafkaMessage('prescription-events', {
    type: 'prescription_created',
    doctor: ctx.session?.doctor,
    timestamp: Date.now(),
    data: {
      prescriptionId,
    },
  });

  return { success: true };
});

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get('/', (_, res) => res.send('Server is healthy'));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
