/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AeDevlistComponent {}
  interface AeIconsComponent {
    'aesize': string;
    'color': string;
    'name': string;
  }
  interface AeLogoComponent {
    'firstcolor': string;
    'secondcolor': string;
  }
  interface AeSpinnerComponent {
    'color': string;
    'colortwo': string;
    'type': string;
  }
  interface AeSvgComponent {
    'aeid': string;
    'url': string;
    'wide': string;
  }
  interface AeSvgcssComponent {
    'color': string;
    'colortwo': string;
    'type': string;
  }
  interface AeVideoComponent {
    /**
    * Mute the video
    */
    'muted': boolean;
    /**
    * The image shown while the video is loading
    */
    'poster': string;
    /**
    * The video src
    */
    'src': string;
  }
}

declare global {


  interface HTMLAeDevlistComponentElement extends Components.AeDevlistComponent, HTMLStencilElement {}
  var HTMLAeDevlistComponentElement: {
    prototype: HTMLAeDevlistComponentElement;
    new (): HTMLAeDevlistComponentElement;
  };

  interface HTMLAeIconsComponentElement extends Components.AeIconsComponent, HTMLStencilElement {}
  var HTMLAeIconsComponentElement: {
    prototype: HTMLAeIconsComponentElement;
    new (): HTMLAeIconsComponentElement;
  };

  interface HTMLAeLogoComponentElement extends Components.AeLogoComponent, HTMLStencilElement {}
  var HTMLAeLogoComponentElement: {
    prototype: HTMLAeLogoComponentElement;
    new (): HTMLAeLogoComponentElement;
  };

  interface HTMLAeSpinnerComponentElement extends Components.AeSpinnerComponent, HTMLStencilElement {}
  var HTMLAeSpinnerComponentElement: {
    prototype: HTMLAeSpinnerComponentElement;
    new (): HTMLAeSpinnerComponentElement;
  };

  interface HTMLAeSvgComponentElement extends Components.AeSvgComponent, HTMLStencilElement {}
  var HTMLAeSvgComponentElement: {
    prototype: HTMLAeSvgComponentElement;
    new (): HTMLAeSvgComponentElement;
  };

  interface HTMLAeSvgcssComponentElement extends Components.AeSvgcssComponent, HTMLStencilElement {}
  var HTMLAeSvgcssComponentElement: {
    prototype: HTMLAeSvgcssComponentElement;
    new (): HTMLAeSvgcssComponentElement;
  };

  interface HTMLAeVideoComponentElement extends Components.AeVideoComponent, HTMLStencilElement {}
  var HTMLAeVideoComponentElement: {
    prototype: HTMLAeVideoComponentElement;
    new (): HTMLAeVideoComponentElement;
  };
  interface HTMLElementTagNameMap {
    'ae-devlist-component': HTMLAeDevlistComponentElement;
    'ae-icons-component': HTMLAeIconsComponentElement;
    'ae-logo-component': HTMLAeLogoComponentElement;
    'ae-spinner-component': HTMLAeSpinnerComponentElement;
    'ae-svg-component': HTMLAeSvgComponentElement;
    'ae-svgcss-component': HTMLAeSvgcssComponentElement;
    'ae-video-component': HTMLAeVideoComponentElement;
  }
}

declare namespace LocalJSX {
  interface AeDevlistComponent extends JSXBase.HTMLAttributes<HTMLAeDevlistComponentElement> {
    'onOnToggle'?: (event: CustomEvent<any>) => void;
  }
  interface AeIconsComponent extends JSXBase.HTMLAttributes<HTMLAeIconsComponentElement> {
    'aesize'?: string;
    'color'?: string;
    'name'?: string;
  }
  interface AeLogoComponent extends JSXBase.HTMLAttributes<HTMLAeLogoComponentElement> {
    'firstcolor'?: string;
    'secondcolor'?: string;
  }
  interface AeSpinnerComponent extends JSXBase.HTMLAttributes<HTMLAeSpinnerComponentElement> {
    'color'?: string;
    'colortwo'?: string;
    'type'?: string;
  }
  interface AeSvgComponent extends JSXBase.HTMLAttributes<HTMLAeSvgComponentElement> {
    'aeid'?: string;
    'url'?: string;
    'wide'?: string;
  }
  interface AeSvgcssComponent extends JSXBase.HTMLAttributes<HTMLAeSvgcssComponentElement> {
    'color'?: string;
    'colortwo'?: string;
    'type'?: string;
  }
  interface AeVideoComponent extends JSXBase.HTMLAttributes<HTMLAeVideoComponentElement> {
    /**
    * Mute the video
    */
    'muted'?: boolean;
    /**
    * The image shown while the video is loading
    */
    'poster'?: string;
    /**
    * The video src
    */
    'src'?: string;
  }

  interface IntrinsicElements {
    'ae-devlist-component': AeDevlistComponent;
    'ae-icons-component': AeIconsComponent;
    'ae-logo-component': AeLogoComponent;
    'ae-spinner-component': AeSpinnerComponent;
    'ae-svg-component': AeSvgComponent;
    'ae-svgcss-component': AeSvgcssComponent;
    'ae-video-component': AeVideoComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


