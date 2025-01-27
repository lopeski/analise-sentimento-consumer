import {IUsecase} from "@core/providers/core/usecase";

export interface ISaveDataUsecaseUsecaseInput {
}

export interface ISaveDataUsecaseUsecaseOutput {
}

export abstract class ISaveDataUsecase implements IUsecase<ISaveDataUsecaseUsecaseInput, Promise<ISaveDataUsecaseUsecaseOutput>> {
    abstract execute(input: ISaveDataUsecaseUsecaseInput): Promise<ISaveDataUsecaseUsecaseOutput>;
}
