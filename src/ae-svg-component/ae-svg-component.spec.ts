import { TestWindow } from '@stencil/core/testing';
import { AeSvgComponent } from './ae-svg-component';

describe('ae-svg-component', () => {
  it('should build', () => {
    expect(new AeSvgComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAeSvgComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AeSvgComponent],
        html: '<ae-svg-component></ae-svg-component>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('adaept');
    });

    it('should work with only a first color', async () => {
      element.aered = '#c83200';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('adaept Red');
    });

    it('should work with only a second color', async () => {
      element.aegreen = '#329600';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('adaept  Green');
    });

    it('should work with both a first color and a second color', async () => {
      element.aered = '#c83200';
      element.aegreen = '#329600';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('adaept Red Green');
    });
  });
});
