/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import { JSXElements } from '@stencil/core';




export namespace StencilComponents {

  interface AeDevlistComponent {}
  interface AeDevlistComponentAttributes extends JSXElements.HTMLAttributes {
    'onOnToggle'?: (event: CustomEvent) => void;
  }

  interface AeIconsComponent {
    'color': string;
    'name': string;
    'size': string;
  }
  interface AeIconsComponentAttributes extends JSXElements.HTMLAttributes {
    'color'?: string;
    'name'?: string;
    'size'?: string;
  }

  interface AeLogoComponent {
    'firstcolor': string;
    'secondcolor': string;
  }
  interface AeLogoComponentAttributes extends JSXElements.HTMLAttributes {
    'firstcolor'?: string;
    'secondcolor'?: string;
  }

  interface AeSpinnerComponent {
    'color': string;
    'colortwo': string;
    'type': string;
  }
  interface AeSpinnerComponentAttributes extends JSXElements.HTMLAttributes {
    'color'?: string;
    'colortwo'?: string;
    'type'?: string;
  }

  interface AeSvgComponent {
    'id': string;
    'url': string;
    'wide': string;
  }
  interface AeSvgComponentAttributes extends JSXElements.HTMLAttributes {
    'id'?: string;
    'url'?: string;
    'wide'?: string;
  }

  interface AeSvgcssComponent {
    'color': string;
    'colortwo': string;
    'type': string;
  }
  interface AeSvgcssComponentAttributes extends JSXElements.HTMLAttributes {
    'color'?: string;
    'colortwo'?: string;
    'type'?: string;
  }
}

export interface LocalIntrinsicElements {
  'ae-devlist-component': StencilComponents.AeDevlistComponentAttributes;
  'ae-icons-component': StencilComponents.AeIconsComponentAttributes;
  'ae-logo-component': StencilComponents.AeLogoComponentAttributes;
  'ae-spinner-component': StencilComponents.AeSpinnerComponentAttributes;
  'ae-svg-component': StencilComponents.AeSvgComponentAttributes;
  'ae-svgcss-component': StencilComponents.AeSvgcssComponentAttributes;
}

declare global {

  interface HTMLAeDevlistComponentElement extends StencilComponents.AeDevlistComponent, HTMLStencilElement {}
  var HTMLAeDevlistComponentElement: {
    prototype: HTMLAeDevlistComponentElement;
    new (): HTMLAeDevlistComponentElement;
  };

  interface HTMLAeIconsComponentElement extends StencilComponents.AeIconsComponent, HTMLStencilElement {}
  var HTMLAeIconsComponentElement: {
    prototype: HTMLAeIconsComponentElement;
    new (): HTMLAeIconsComponentElement;
  };

  interface HTMLAeLogoComponentElement extends StencilComponents.AeLogoComponent, HTMLStencilElement {}
  var HTMLAeLogoComponentElement: {
    prototype: HTMLAeLogoComponentElement;
    new (): HTMLAeLogoComponentElement;
  };

  interface HTMLAeSpinnerComponentElement extends StencilComponents.AeSpinnerComponent, HTMLStencilElement {}
  var HTMLAeSpinnerComponentElement: {
    prototype: HTMLAeSpinnerComponentElement;
    new (): HTMLAeSpinnerComponentElement;
  };

  interface HTMLAeSvgComponentElement extends StencilComponents.AeSvgComponent, HTMLStencilElement {}
  var HTMLAeSvgComponentElement: {
    prototype: HTMLAeSvgComponentElement;
    new (): HTMLAeSvgComponentElement;
  };

  interface HTMLAeSvgcssComponentElement extends StencilComponents.AeSvgcssComponent, HTMLStencilElement {}
  var HTMLAeSvgcssComponentElement: {
    prototype: HTMLAeSvgcssComponentElement;
    new (): HTMLAeSvgcssComponentElement;
  };

  interface HTMLElementTagNameMap {
    'ae-devlist-component': HTMLAeDevlistComponentElement
    'ae-icons-component': HTMLAeIconsComponentElement
    'ae-logo-component': HTMLAeLogoComponentElement
    'ae-spinner-component': HTMLAeSpinnerComponentElement
    'ae-svg-component': HTMLAeSvgComponentElement
    'ae-svgcss-component': HTMLAeSvgcssComponentElement
  }

  interface ElementTagNameMap {
    'ae-devlist-component': HTMLAeDevlistComponentElement;
    'ae-icons-component': HTMLAeIconsComponentElement;
    'ae-logo-component': HTMLAeLogoComponentElement;
    'ae-spinner-component': HTMLAeSpinnerComponentElement;
    'ae-svg-component': HTMLAeSvgComponentElement;
    'ae-svgcss-component': HTMLAeSvgcssComponentElement;
  }
}


import { DefaultIntrinsicElements } from '@stencil/core';

declare global {
  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends LocalIntrinsicElements, DefaultIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends JSXElements.HTMLAttributes {}
}

