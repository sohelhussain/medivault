import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'medivault',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'audit-service' });

export async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'prescription-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const data = message.value?.toString();
      console.log(`[Kafka][${topic}]:`, data);
      // You can store in DB, analytics system, etc.
    },
  });
}
