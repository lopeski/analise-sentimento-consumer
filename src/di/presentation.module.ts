import { Module, Provider } from '@nestjs/common';
import { ApplicationModule } from '@di/application.module';
import { ReciveDataController } from '@presentation/amqp/v1/controller/recive.data.controller';

const presentationProviders: Provider[] = [];

@Module({
  imports: [ApplicationModule],
  providers: presentationProviders,
  controllers: [ReciveDataController],
})
export class PresentationModule {}
