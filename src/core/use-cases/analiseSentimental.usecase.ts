import { Injectable } from '@nestjs/common';
import {
  IAnaliseSentimentalUsecase,
  IAnaliseSentimentalUsecaseUsecaseInput,
  IAnaliseSentimentalUsecaseUsecaseOutput,
} from '@core/providers/core/i.analiseSentimental.usecase';

@Injectable()
export class AnaliseSentimentalUsecase implements IAnaliseSentimentalUsecase {
  constructor() {}

  async execute(
    input: IAnaliseSentimentalUsecaseUsecaseInput,
  ): Promise<IAnaliseSentimentalUsecaseUsecaseOutput> {
    // Envia dados para IA
  }
}
