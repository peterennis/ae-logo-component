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

  /*  <ion-card>
    <ion-item>
      
      <ion-label><ion-icon name="pin" slot="start" size="small"></ion-icon>ion-item in a card, icon left, button right</ion-label>
      <ion-button fill="outline" slot="end">View</ion-button>
    </ion-item>
  </ion-card>
  <ion-card> */

  render() {
    return (

      <div>
        <ion-card>
          <ion-card-header>
            <p><ion-icon name="pin" slot="start" size="large"></ion-icon></p>
            <ion-spinner name=""></ion-spinner>
            <ion-spinner name="lines" color="danger"></ion-spinner>
            <ion-spinner name="ios-small"></ion-spinner>
            <ion-spinner name="dots"></ion-spinner>
            <ion-spinner name="circles" class="spinner-energized"></ion-spinner>

            <img src='/assets/treehouse.png' />


          </ion-card-header>
        </ion-card>
      </div>



      /*
                <ion-card>
                  <ion-card-content>
                    <a href={this.list[0].url}><img src={this.list[0].imageUrl} /></a>
                  </ion-card-content>
                </ion-card>
              </div> */

      /*        <div class={this.toggle ? 'active' : 'inactive'}>
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                      <ion-card-title>Card Title</ion-card-title>
                  </ion-card-header>
      
                  <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                  </ion-card-content>
                </ion-card>
              </div> */

    );
  }
}


/*
            <ion-buttons>
              <ion-button fill='clear' color='primary' onClick={() => this.navigateToTrack(track)}>
                Play
                </ion-button>
            </ion-buttons> */

/*
        <div class="jumbotron">
          <center>
            <h1 class="display-3">Welcome!</h1>
            <p class="lead">This is a test for Stencil web components.</p>
            <button class="btn btn-primary" onClick={() => this.toggleComponent()}>Coding Resources for Web Developers</button>
          </center>
        </div>

          <div class="row">
            {
              this.list.map(entry =>
                <div class="col-lg-3 col-md-6 col-sd-12">
                  <div class="card">
                    <a href={entry.url}><img class="card-img-top" src={entry.imageUrl} /></a>
                    <div class="card-body">
                      <h4 class="card-title">{entry.name}</h4>
                      <p class="card-text">{entry.description}</p>
                      <a href={entry.url} class="btn btn-primmary">Go to {entry.name}</a>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
*/
