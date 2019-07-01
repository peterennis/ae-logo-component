import { newE2EPage } from '@stencil/core/testing';

describe('ae-video-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-video-component></ae-video-component>');
    const element = await page.find('ae-video-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-video-component></ae-video-component>');
    const component = await page.find('ae-video-component');
    const element = await page.find('ae-video-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'Adelina');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Fortune`);

    component.setProperty('last', 'Fortune');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Adelina Fortune`);

    component.setProperty('middle', 'Hope');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Adelina Hope Fortune`);
  });
});
