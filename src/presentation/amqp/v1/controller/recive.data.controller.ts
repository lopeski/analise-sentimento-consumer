import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ConsumeMessage } from 'amqplib';
import { IReciveMessageApplication } from '@core/providers/application/i.reciveMessage.application';

@Controller()
export class ReciveDataController {
  constructor(
    private readonly _reciveMessageDataApplication: IReciveMessageApplication,
  ) {}

  @MessagePattern('X')
  async handleXMessage(msg: ConsumeMessage): Promise<void> {
    const dados = JSON.parse(msg.content.toString());
    await this._reciveMessageDataApplication.execute(dados);
  }

  @MessagePattern('Instagram')
  async handleInstagramMessage(msg: ConsumeMessage): Promise<void> {
    const dados = JSON.parse(msg.content.toString());
    await this._reciveMessageDataApplication.execute(dados);
  }

  @MessagePattern('Tiktok')
  async handleTiktokMessage(msg: ConsumeMessage): Promise<void> {
    const dados = JSON.parse(msg.content.toString());
    await this._reciveMessageDataApplication.execute(dados);
  }
}
