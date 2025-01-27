import {IUsecase} from "@core/providers/core/usecase";

export interface ISendMessageUsecaseUsecaseInput {
}

export interface ISendMessageUsecaseUsecaseOutput {
}

export abstract class ISendMessageUsecase implements IUsecase<ISendMessageUsecaseUsecaseInput, Promise<ISendMessageUsecaseUsecaseOutput>> {
    abstract execute(input: ISendMessageUsecaseUsecaseInput): Promise<ISendMessageUsecaseUsecaseOutput>;
}
