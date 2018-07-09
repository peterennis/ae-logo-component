import { TestWindow } from '@stencil/core/testing';
import { AeSpinnerComponent } from './ae-spinner-component';

describe('ae-spinner-component', () => {
  it('should build', () => {
    expect(new AeSpinnerComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAeLogoComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AeSpinnerComponent],
        html: '<ae-spinner-component></ae-spinner-component>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('adaept');
    });

    it('should work with only a first color', async () => {
      element.firstcolor = 'Red';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('adaept Red');
    });

    // There are two spaces in this test as the first color is not provided
    it('should work with only a second color', async () => {
      element.secondcolor = 'Green';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('adaept  Green');
    });

    it('should work with both a first color and a second color', async () => {
      element.firstcolor = 'Red';
      element.secondcolor = 'Green';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('adaept Red Green');
    });
  });
});
