import { IUsecase } from '@core/providers/core/usecase';

export interface IAnaliseSentimentalUsecaseUsecaseInput {}

export type IAnaliseSentimentalUsecaseUsecaseOutput = void;

export abstract class IAnaliseSentimentalUsecase
  implements
    IUsecase<
      IAnaliseSentimentalUsecaseUsecaseInput,
      Promise<IAnaliseSentimentalUsecaseUsecaseOutput>
    >
{
  abstract execute(
    input: IAnaliseSentimentalUsecaseUsecaseInput,
  ): Promise<IAnaliseSentimentalUsecaseUsecaseOutput>;
}
