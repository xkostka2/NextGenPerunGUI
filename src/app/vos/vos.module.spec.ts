import { VosModule } from './vos.module';

describe('VosModule', () => {
  let vosModule: VosModule;

  beforeEach(() => {
    vosModule = new VosModule();
  });

  it('should create an instance', () => {
    expect(vosModule).toBeTruthy();
  });
});
