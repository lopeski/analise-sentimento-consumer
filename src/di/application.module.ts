import { Module, Provider } from '@nestjs/common';
import { CoreModule } from '@di/core.module';
import { IReciveMessageApplication } from '@core/providers/application/i.reciveMessage.application';
import { ReciveMessageApplication } from '../application/reciveMessage.application';

const applicationProviders: Provider[] = [
  { provide: IReciveMessageApplication, useClass: ReciveMessageApplication },
];

@Module({
  imports: [CoreModule],
  providers: applicationProviders,
  exports: applicationProviders,
})
export class ApplicationModule {}
