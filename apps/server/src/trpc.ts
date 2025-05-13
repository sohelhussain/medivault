import { connectKafkaProducer } from '@repo/kafka/producer';

(async () => {
  await connectKafkaProducer();
})();