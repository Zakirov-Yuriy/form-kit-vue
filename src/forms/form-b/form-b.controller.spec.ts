import { Test, TestingModule } from '@nestjs/testing';
import { FormBController } from './form-b.controller';

describe('FormBController', () => {
  let controller: FormBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormBController],
    }).compile();

    controller = module.get<FormBController>(FormBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
