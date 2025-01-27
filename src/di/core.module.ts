import { Module, Provider } from '@nestjs/common';
import { InfraModule } from '@di/infra.module';
import { IAnaliseSentimentalUsecase } from "@core/providers/core/i.analiseSentimental.usecase";
import { AnaliseSentimentalUsecase } from "@core/use-cases/analiseSentimental.usecase";
import { ISaveDataUsecase } from "@core/providers/core/i.saveData.usecase";
import { SaveDataUsecase } from "@core/use-cases/saveData.usecase";
import { ISendMessageUsecase } from "@core/providers/core/i.sendMessage.usecase";
import { SendMessageUsecase } from "@core/use-cases/sendMessage.usecase";

const coreProviders: Provider[] = [{ provide: IAnaliseSentimentalUsecase, useClass: AnaliseSentimentalUsecase }, { provide: ISaveDataUsecase, useClass: SaveDataUsecase }, { provide: ISendMessageUsecase, useClass: SendMessageUsecase }];

@Module({
  imports: [InfraModule],
  providers: coreProviders,
  exports: coreProviders,
})
export class CoreModule {}
