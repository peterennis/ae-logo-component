import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'ae-svg-component',
  styleUrl: 'ae-svg-component.css',
  shadow: true
})
export class AeSvgComponent {

  @Prop() aeid: string;
  @Prop() wide: string;
  @Prop() url: string;

  /**
   * The component is about to load and has not rendered yet.
   * This is the best place to make any data updates
   * before the first render.
   * componentWillLoad will only be called once.
   */
  componentWillLoad() {
    console.log('Component ae-svg-component is about to be rendered');
    console.log('this.aeid=' + this.aeid);

    //let theClass = document.querySelector("#aesvg");
    //theClass.classList.remove("#ae2");
  }

  render() {
    return (
      <div>
        <img id={this.aeid} class="aesvg" src={this.url} width={this.wide} />
      </div>
    );
  }
}
