import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'medivault',
  brokers: ['localhost:9092'], // Update if you're using Docker or cloud Kafka
});

export const producer = kafka.producer();

export async function connectProducer() {
  await producer.connect();
}

export async function sendKafkaMessage(topic: string, message: object) {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
}
