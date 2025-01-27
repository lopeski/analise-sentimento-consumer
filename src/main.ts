import { NestFactory } from '@nestjs/core';
import { RootModules } from '@di/root.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RabbitMqServerTransport } from './tranporter/amqp/amqp.transport';

(async () => {
  const app = await NestFactory.create(RootModules);

  app.connectMicroservice<MicroserviceOptions>({
    strategy: new RabbitMqServerTransport({
      amqpUrl: process.env.URL_AMQP || '123',
      rootPath: process.env.AMQP_ROOT_NAME || '123',
      prefetch: 100,
      retries: {
        limit: 10,
        timeBetweenRetries: 50,
      },
      bindToExchange: {
        exchange: process.env.EXCHANGE_NAME || 'rc-alastro-productor',
      },
    }),
  });

  await app.startAllMicroservices();
})();
