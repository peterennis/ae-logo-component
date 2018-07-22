import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ae-icons-component',
  styleUrl: 'ae-icons-component.css',
  shadow: true
})
export class AeIconsComponent {

  @Prop() name: string;
  @Prop() size: string;
  @Prop() color: string;

  /**
   * The component is about to load and has not rendered yet.
   * This is the best place to make any data updates
   * before the first render.
   * componentWillLoad will only be called once.
   */
  componentWillLoad() {
    //console.log('Component ae-icons-component is about to be rendered');
    console.log ('name=' + this.name + ' size=' + this.size + ' color=' + this.color)
    this.setMyVars;
  }

  setMyVars() {
    var bodyStyles = document.body.style;
    console.log('Component ae-icons-component setMyVars');
    bodyStyles.setProperty('--text-color', 'white');
    bodyStyles.setProperty('--background-color', 'black');
  }

  render() {
    return (
      <ion-icon name={this.name} size={this.size} color={this.color}></ion-icon>
    );
  }
}
