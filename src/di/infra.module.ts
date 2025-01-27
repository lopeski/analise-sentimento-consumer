import { Module, Provider } from '@nestjs/common';

const infraProvider: Provider[] = [];

@Module({
  imports: [],
  providers: infraProvider,
  exports: infraProvider,
})
export class InfraModule {}
