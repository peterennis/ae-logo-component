import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ae-logo-component',
  styleUrl: 'ae-logo-component.css',
  shadow: true
})
export class AeLogoComponent {

  @Prop() firstcolor: string;
  @Prop() secondcolor: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.firstcolor} {this.secondcolor}
      </div>
    );
  }
}
