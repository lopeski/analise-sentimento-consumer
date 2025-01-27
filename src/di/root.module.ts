import { Module } from '@nestjs/common';
import { ApplicationModule } from '@di/application.module';

@Module({
  imports: [ApplicationModule],
})
export class RootModules {}
