import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ae-logo-component',
  styleUrl: 'ae-logo-component.css',
  shadow: true
})
export class AeLogoComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
