import { HttpException, Injectable } from '@nestjs/common';
import {
  IReciveMessageApplication,
  IReciveMessageApplicationInput,
  IReciveMessageApplicationOutput,
} from '@core/providers/application/i.reciveMessage.application';
import { IAnaliseSentimentalUsecase } from '@core/providers/core/i.analiseSentimental.usecase';
import { ISaveDataUsecase } from '@core/providers/core/i.saveData.usecase';
import { ISendMessageUsecase } from '@core/providers/core/i.sendMessage.usecase';

@Injectable()
export class ReciveMessageApplication implements IReciveMessageApplication {
  constructor(
    private readonly _IAnaliseSentimentalUsecase: IAnaliseSentimentalUsecase,
    private readonly _saveDataUsecase: ISaveDataUsecase,
    private readonly _sendMessageUsecase: ISendMessageUsecase,
  ) {}

  async execute(
    input: IReciveMessageApplicationInput,
  ): Promise<IReciveMessageApplicationOutput> {
    try {
      const sentimental = await this._IAnaliseSentimentalUsecase.execute(input);
      await this._saveDataUsecase.execute(sentimental);
      await this._sendMessageUsecase.execute(sentimental);
    } catch (e) {
      throw new HttpException(e.message, e.status || 412);
    }
  }
}
