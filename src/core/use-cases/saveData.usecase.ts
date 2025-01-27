import { Injectable } from '@nestjs/common';
import { ISaveDataUsecase } from '@core/providers/core/i.saveData.usecase';

@Injectable()
export class SaveDataUsecase implements ISaveDataUsecase {
  constructor() {}

  async execute(input: any): Promise<any> {
    // Salva dados ou conta em alguma tabela
  }
}
