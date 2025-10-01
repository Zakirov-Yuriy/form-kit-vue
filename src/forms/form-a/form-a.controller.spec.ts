import { Test, TestingModule } from '@nestjs/testing';
import { FormAController } from './form-a.controller';

describe('FormAController', () => {
  let controller: FormAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormAController],
    }).compile();

    controller = module.get<FormAController>(FormAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
