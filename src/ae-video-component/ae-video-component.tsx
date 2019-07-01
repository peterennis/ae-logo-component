import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'ae-video-component',
  styleUrl: 'ae-video-component.css',
  shadow: true
})
export class AevideoComponent {
  /**
   * The video src
   */
  @Prop() src: string;

  /**
   * The image shown while the video is loading
   */
  @Prop() poster: string;

  /**
   * Mute the video
   */
  @Prop() muted: boolean = true;

  @Element() private videoElement: HTMLVideoElement; // pointer to the created video element

  componentDidLoad() {
    // sometimes, as the component is loaded dynamically, the video starts with sound, even if muted property is set to true
    if (this.muted) {
      this.videoElement.muted = true;
    }
  }

  render() {
    return <video width="320" height="240" controls preload="auto" muted={this.muted} src={this.src} poster={this.poster}></video>
  }
}
