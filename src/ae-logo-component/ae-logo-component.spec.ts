import { TestWindow } from '@stencil/core/testing';
import { AeLogoComponent } from './ae-logo-component';

describe('ae-logo-component', () => {
  it('should build', () => {
    expect(new AeLogoComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAeLogoComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AeLogoComponent],
        html: '<ae-logo-component></ae-logo-component>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with a first color', async () => {
      element.firstcolor = 'Red';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Red');
    });

    it('should work with a second color', async () => {
      element.secondcolor = 'Green';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Green');
    });

    it('should work with both a first color and a second color', async () => {
      element.firstcolor = 'Red';
      element.secondcolor = 'Green';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Red Green');
    });
  });
});
