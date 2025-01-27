import { Injectable } from '@nestjs/common';
import { ISendMessageUsecase } from '@core/providers/core/i.sendMessage.usecase';

@Injectable()
export class SendMessageUsecase implements ISendMessageUsecase {
  constructor() {}

  async execute(input: any): Promise<any> {
    // Envia os dados para o cliente ou para um consumidor
  }
}
