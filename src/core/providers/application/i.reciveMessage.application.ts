import { IBaseApplication } from '@core/providers/application/base.application';

export interface IReciveMessageApplicationInput {}

export type IReciveMessageApplicationOutput = void;

export abstract class IReciveMessageApplication
  implements
    IBaseApplication<
      IReciveMessageApplicationInput,
      Promise<IReciveMessageApplicationOutput>
    >
{
  abstract execute(
    input: IReciveMessageApplicationInput,
  ): Promise<IReciveMessageApplicationOutput>;
}
