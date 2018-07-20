import { Component, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ae-devlist-component',
  styleUrl: 'ae-devlist-component.css',
  shadow: true
})
export class AeDevlistComponent {

  public list: Array<any> = [
    {
      name: 'Udemy',
      description: 'Udemy is an online learning platform where anyone can create and upload courses. There are over 50,000 courses on the platform covering all trending topics for web developers. ',
      url: 'https://codingthesmartway.com/udemy',
      imageUrl: '/assets/udemy.jpg'
    },
    {
      name: 'Treehouse',
      description: 'Treehouse is focusing mainly on web design & coding. Here you can choose from 1,000s of hours of content from JavaScript to Python to iOS.',
      url: 'https://codingthesmartway.com/treehouse',
      imageUrl: '/assets/treehouse.png'
    },
    {
      name: 'Coursera',
      description: 'Coursera offers online courses taught by actual college professors from Stanford, University of Michigan, Yale University and many more. Here you can earn your master`s degree fully online',
      url: 'https://codingthesmartway.com/coursera',
      imageUrl: '/assets/coursera.png'
    },
    {
      name: 'Pluralsight',
      description: 'Pluralsight offers thousands of courses authored by leading experts. Every course contains in-depth content that goes beond the fundamentals and teaches you practical skills you can apply immediately.',
      url: 'https://codingthesmartway.com/pluralsight',
      imageUrl: '/assets/pluralsight.png'
    }
  ];

  @State() toggle: boolean = false;
  @Event() onToggle: EventEmitter;

  toggleComponent(): void {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle })
  }

  render() {
    return (
      <div>
        <ion-card>
          <ion-card-header>
            <h1><ion-icon name="pin" slot="start" size="large"></ion-icon>Ionic Card</h1>
            <h2>
              {/*<!-- Default Spinner -->*/}
              <ion-spinner></ion-spinner>
              {/*<!-- Lines -->*/}
              <ion-spinner name="lines" color="primary"></ion-spinner>
              {/*<!-- Lines Small -->*/}
              <ion-spinner name="lines-small"></ion-spinner>
              {/*<!-- Dots -->*/}
              <ion-spinner name="dots"></ion-spinner>
              {/*<!-- Bubbles -->*/}
              <ion-spinner name="bubbles"></ion-spinner>
              {/*<!-- Circles -->*/}
              <ion-spinner name="circles"></ion-spinner>
              {/*<!-- Crescent -->*/}
              <ion-spinner name="crescent"></ion-spinner>
              {/*<!-- Paused Default Spinner -->*/}
              <ion-spinner paused></ion-spinner>
            </h2>
          </ion-card-header>
        </ion-card>

        <ion-list>
          <ion-item>
            <ion-avatar slot='start'>
              <img src='/assets/Giant-Panda.jpg'></img>
            </ion-avatar>
            <ion-label>
              <h2>Giant Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    );
  }
}
