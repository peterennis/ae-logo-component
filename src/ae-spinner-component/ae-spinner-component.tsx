// Ref: http://samherbert.net/svg-loaders/
// Ref: https://codegeekz.com/best-css-svg-loaders-and-spinners/
// Ref: https://codepen.io/chrisgannon/post/seven-stages-of-svg
// Ref: https://codepen.io/deineko/pen/yyWgEW
// Ref: https://github.com/alexk111/SVG-Morpheus/issues/2

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ae-spinner-component',
  styleUrl: 'ae-spinner-component.scss'
})
export class AeSpinnerComponent {

  @Prop() type: string = 'android';
  @Prop() color: string = 'grey';
  @Prop() colortwo: string = 'grey';

  render() {
    switch (this.type) {
      case 'adaept':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512">
            <path fill={this.color} d="M173.887 128.991c-84.52.25-156.47 64.57-167.325 128.075l32.295-.29c21.31-63.18 89.715-108.69 158.555-96.485 34.37 8.36 34.64 33.805 35.35 61.86-20.5.39-41.66-2.1-60.58-.425-53.395 8.195-88.7 26.17-89.65 81.53 1.35 42.74 33.135 75.18 71.795 75.715 43.525-.225 73.925-19.295 98.96-48.52l9-160.15c-23.115-34.2-43.65-41.695-88.395-41.305zm56.375 123.535c.255 19.08 2.04 38.055 8.105 54.995-28.725 22.835-74.53 48.92-105.805 23.075-14.33-15.705-15.76-42.19-1.95-56.785 27.885-27.655 66.815-20.205 99.65-21.28zm-223.76 4.455c1.625 123.46 91.735 243.64 243.215 248.67 123.525 4.105 257.06-98.645 256.245-254.065l-.07.03c-22.95 145.395-165.385 219.985-255.21 219.66-119.58-.265-211.72-93.845-211.72-214.52z" />
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 0 2" to="360 0 2" dur="0.6s" repeatCount="indefinite"></animateTransform>
            <path fill={this.colortwo} d="M253.337 7.756c-114.07.06-246.76 92.475-246.775 249.31 32.5-146.995 125.02-208.175 243.65-216.43 128.355 4.245 220.595 118.22 225.085 211.905l30.665-.95C504.257 115.681 391.017 7.686 253.337 7.756zm88.44 121.05c-32.05 1.375-58.165 16.2-79.5 40.035l-9.44 161.16c27.58 28.475 66.865 43.985 101.325 44.215 78.915.005 138.355-57.405 151.73-122.595l-30.545.835c-17.74 64.255-71.275 91.645-121.96 94.2-48.985-1.84-81.805-32.435-79.855-95.45l161.48.85c.18-32.66-6.095-70.775-24.38-94.3-15.77-19.225-38.64-28.95-68.855-28.95zm.93 30.16c39.06 1.83 55.17 27.445 59.23 61.775H276.272c5.85-36.5 32.215-61.255 66.435-61.775z" />
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 0 2" to="360 0 2" dur="0.6s" repeatCount="indefinite"></animateTransform>
          </svg>
        )
      case 'circle':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xmlSpace="preserve">
            <path fill={this.color} d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(360 -4.05439e-8 -4.05439e-8)">
              <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
            </path>
          </svg>
        );
      case 'circthree':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" space="preserve">
            <path fill={this.color} d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </path>
            <path fill={this.color} d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite" />
            </path>
            <path fill={this.color} d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </path>
          </svg>
        )
      case 'bars':
        return (
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xmlSpace="preserve">
            <rect x="0" y="5.83333" width="4" height="18.3333" fill={this.color} opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="8" y="6.66667" width="4" height="16.6667" fill={this.color} opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="16" y="9.16667" width="4" height="11.6667" fill={this.color} opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
          </svg>
        );
      case 'android':
        return (
          <svg class="spinner-android" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke={this.color} stroke-width="5"></circle>
          </svg>
        )
      case 'ios':
        return (
          <svg class="spinner-ios" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill={this.color}>
            <path d="M18.696,10.5c-0.275-0.479-0.113-1.09,0.365-1.367l4.759-2.751c0.482-0.273,1.095-0.11,1.37,0.368 c0.276,0.479,0.115,1.092-0.364,1.364l-4.764,2.751C19.583,11.141,18.973,10.977,18.696,10.5z" />
            <path d="M16.133,6.938l2.75-4.765c0.276-0.478,0.889-0.643,1.367-0.366c0.479,0.276,0.641,0.886,0.365,1.366l-2.748,4.762 C17.591,8.415,16.979,8.58,16.5,8.303C16.021,8.027,15.856,7.414,16.133,6.938z" />
            <path d="M13.499,7.5c-0.552,0-1-0.448-1-1.001V1c0-0.554,0.448-1,1-1c0.554,0,1.003,0.447,1.003,1v5.499 C14.5,7.053,14.053,7.5,13.499,7.5z" />
            <path d="M8.303,10.5c-0.277,0.477-0.888,0.641-1.365,0.365L2.175,8.114C1.697,7.842,1.532,7.229,1.808,6.75 c0.277-0.479,0.89-0.642,1.367-0.368l4.762,2.751C8.416,9.41,8.58,10.021,8.303,10.5z" />
            <path d="M9.133,7.937l-2.75-4.763c-0.276-0.48-0.111-1.09,0.365-1.366c0.479-0.277,1.09-0.114,1.367,0.366l2.75,4.765 c0.274,0.476,0.112,1.088-0.367,1.364C10.021,8.581,9.409,8.415,9.133,7.937z" />
            <path d="M6.499,14.5H1c-0.554,0-1-0.448-1-1c0-0.554,0.447-1.001,1-1.001h5.499c0.552,0,1.001,0.448,1.001,1.001 C7.5,14.052,7.052,14.5,6.499,14.5z" />
            <path d="M8.303,16.502c0.277,0.478,0.113,1.088-0.365,1.366l-4.762,2.749c-0.478,0.273-1.091,0.112-1.368-0.366 c-0.276-0.479-0.111-1.089,0.367-1.368l4.762-2.748C7.415,15.856,8.026,16.021,8.303,16.502z" />
            <path d="M10.866,20.062l-2.75,4.767c-0.277,0.475-0.89,0.639-1.367,0.362c-0.477-0.277-0.642-0.886-0.365-1.365l2.75-4.764 c0.277-0.477,0.888-0.638,1.366-0.365C10.978,18.974,11.141,19.585,10.866,20.062z" />
            <path d="M13.499,19.502c0.554,0,1.003,0.448,1.003,1.002v5.498c0,0.55-0.448,0.999-1.003,0.999c-0.552,0-1-0.447-1-0.999v-5.498 C12.499,19.95,12.946,19.502,13.499,19.502z" />
            <path d="M17.867,19.062l2.748,4.764c0.275,0.479,0.113,1.088-0.365,1.365c-0.479,0.276-1.091,0.112-1.367-0.362l-2.75-4.767 c-0.276-0.477-0.111-1.088,0.367-1.365C16.979,18.424,17.591,18.585,17.867,19.062z" />
            <path d="M18.696,16.502c0.276-0.48,0.887-0.646,1.365-0.367l4.765,2.748c0.479,0.279,0.64,0.889,0.364,1.368 c-0.275,0.479-0.888,0.64-1.37,0.366l-4.759-2.749C18.583,17.59,18.421,16.979,18.696,16.502z" />
            <path d="M25.998,12.499h-5.501c-0.552,0-1.001,0.448-1.001,1.001c0,0.552,0.447,1,1.001,1h5.501c0.554,0,1.002-0.448,1.002-1 C27,12.946,26.552,12.499,25.998,12.499z" />
          </svg>
        )
      case 'hearts':
        return (
          <svg viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg" fill={this.color}>
            <path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5">
              <animate attributeName="fill-opacity"
                begin="0s" dur="1.4s"
                values="0.25;1;0.25"
                calcMode="linear"
                repeatCount="indefinite" />
            </path>
            <path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5">
              <animate attributeName="fill-opacity"
                begin="0.7s" dur="1.4s"
                values="0.15;1;0.15"
                calcMode="linear"
                repeatCount="indefinite" />
            </path>
            <path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
          </svg>
        )
      case 'rings':
        return (
          <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke={this.color}>
            <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="3">
              <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r"
                  begin="1.5s" dur="3s"
                  values="6;22"
                  calcMode="linear"
                  repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                  begin="1.5s" dur="3s"
                  values="1;0" calcMode="linear"
                  repeatCount="indefinite" />
                <animate attributeName="stroke-width"
                  begin="1.5s" dur="3s"
                  values="2;0" calcMode="linear"
                  repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r"
                  begin="3s" dur="3s"
                  values="6;22"
                  calcMode="linear"
                  repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                  begin="3s" dur="3s"
                  values="1;0" calcMode="linear"
                  repeatCount="indefinite" />
                <animate attributeName="stroke-width"
                  begin="3s" dur="3s"
                  values="2;0" calcMode="linear"
                  repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="8">
                <animate attributeName="r"
                  begin="0s" dur="1.5s"
                  values="6;1;2;3;4;5;6"
                  calcMode="linear"
                  repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        )
      case 'circlers':
        return (
          <svg width="135" height="135" viewBox="0 0 135 135" xmlns="http://www.w3.org/2000/svg" fill={this.color}>
            <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="-360 67 67"
                dur="2.5s"
                repeatCount="indefinite" />
            </path>
            <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="360 67 67"
                dur="8s"
                repeatCount="indefinite" />
            </path>
          </svg>
        )
      case 'grid':
        return (
          <svg width="105" height="105" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill={this.color}>
            <circle cx="12.5" cy="12.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="0s" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
              <animate attributeName="fill-opacity"
                begin="100ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="52.5" cy="12.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="300ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="52.5" cy="52.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="600ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="92.5" cy="12.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="800ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="92.5" cy="52.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="400ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="12.5" cy="92.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="700ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="52.5" cy="92.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="500ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
            <circle cx="92.5" cy="92.5" r="12.5">
              <animate attributeName="fill-opacity"
                begin="200ms" dur="1s"
                values="1;.2;1" calcMode="linear"
                repeatCount="indefinite" />
            </circle>
          </svg>
        )
      case 'spindot':
        return (
          <svg width="58" height="58" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(2 1)" stroke={this.color} stroke-width="1.5">
                <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="1;0;0;0;0;0;0;0" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="0;1;0;0;0;0;0;0" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="0;0;1;0;0;0;0;0" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="0;0;0;1;0;0;0;0" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="0;0;0;0;1;0;0;0" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="0;0;0;0;0;1;0;0" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="0;0;0;0;0;0;1;0" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="27" cy="5" r="5" fill-opacity="0" fill="red">
                  <animate attributeName="fill-opacity"
                    begin="0s" dur="1.3s"
                    values="0;0;0;0;0;0;0;1" calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          </svg>
        )
      case 'tridot':
        return (
          <svg width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke={this.color}>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2.5">
                <circle cx="5" cy="50" r="5">
                  <animate attributeName="cy"
                    begin="0s" dur="2.2s"
                    values="50;5;50;50"
                    calcMode="linear"
                    repeatCount="indefinite" />
                  <animate attributeName="cx"
                    begin="0s" dur="2.2s"
                    values="5;27;49;5"
                    calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="27" cy="5" r="5">
                  <animate attributeName="cy"
                    begin="0s" dur="2.2s"
                    from="5" to="5"
                    values="5;50;50;5"
                    calcMode="linear"
                    repeatCount="indefinite" />
                  <animate attributeName="cx"
                    begin="0s" dur="2.2s"
                    from="27" to="27"
                    values="27;49;5;27"
                    calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
                <circle cx="49" cy="50" r="5">
                  <animate attributeName="cy"
                    begin="0s" dur="2.2s"
                    values="50;50;5;50"
                    calcMode="linear"
                    repeatCount="indefinite" />
                  <animate attributeName="cx"
                    from="49" to="49"
                    begin="0s" dur="2.2s"
                    values="49;5;27;49"
                    calcMode="linear"
                    repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          </svg>
        )
      case 'audio':
        return (
          <svg width="55" height="80" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill={this.color}>
            <g transform="matrix(1 0 0 -1 0 80)">
              <rect width="10" height="20" rx="3">
                <animate attributeName="height"
                  begin="0s" dur="4.3s"
                  values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
                  repeatCount="indefinite" />
              </rect>
              <rect x="15" width="10" height="80" rx="3">
                <animate attributeName="height"
                  begin="0s" dur="2s"
                  values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
                  repeatCount="indefinite" />
              </rect>
              <rect x="30" width="10" height="50" rx="3">
                <animate attributeName="height"
                  begin="0s" dur="1.4s"
                  values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear"
                  repeatCount="indefinite" />
              </rect>
              <rect x="45" width="10" height="30" rx="3">
                <animate attributeName="height"
                  begin="0s" dur="2s"
                  values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
                  repeatCount="indefinite" />
              </rect>
            </g>
          </svg>
        )
      case 'spikes':
        return (
          <svg width="135" height="140" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill={this.color}>
            <rect y="10" width="15" height="120" rx="6">
              <animate attributeName="height"
                begin="0.5s" dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                repeatCount="indefinite" />
              <animate attributeName="y"
                begin="0.5s" dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                repeatCount="indefinite" />
            </rect>
            <rect x="30" y="10" width="15" height="120" rx="6">
              <animate attributeName="height"
                begin="0.25s" dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                repeatCount="indefinite" />
              <animate attributeName="y"
                begin="0.25s" dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                repeatCount="indefinite" />
            </rect>
            <rect x="60" width="15" height="140" rx="6">
              <animate attributeName="height"
                begin="0s" dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                repeatCount="indefinite" />
              <animate attributeName="y"
                begin="0s" dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                repeatCount="indefinite" />
            </rect>
            <rect x="90" y="10" width="15" height="120" rx="6">
              <animate attributeName="height"
                begin="0.25s" dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                repeatCount="indefinite" />
              <animate attributeName="y"
                begin="0.25s" dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                repeatCount="indefinite" />
            </rect>
            <rect x="120" y="10" width="15" height="120" rx="6">
              <animate attributeName="height"
                begin="0.5s" dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                repeatCount="indefinite" />
              <animate attributeName="y"
                begin="0.5s" dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                repeatCount="indefinite" />
            </rect>
          </svg>
        )
      case 'threelegs':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 50 50;" space="preserve">
            <rect x="0" y="0" width="4" height="7" fill={this.color}>
              <animateTransform attributeType="xml"
                attributeName="transform" type="scale"
                values="1,1; 1,3; 1,1"
                begin="0s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="0" width="4" height="7" fill={this.color}>
              <animateTransform attributeType="xml"
                attributeName="transform" type="scale"
                values="1,1; 1,3; 1,1"
                begin="0.2s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="20" y="0" width="4" height="7" fill={this.color}>
              <animateTransform attributeType="xml"
                attributeName="transform" type="scale"
                values="1,1; 1,3; 1,1"
                begin="0.4s" dur="0.6s" repeatCount="indefinite" />
            </rect>
          </svg>
        )
      case 'wheelie':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" space="preserve">
            <circle fill="none" stroke={this.color} stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47" >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </circle>
            <circle fill="none" stroke={this.color} stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite" />
            </circle>
            <g fill={this.color}>
              <rect x="30" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.1" />
              </rect>
              <rect x="40" y="35" width="5" height="30" >
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.2" />
              </rect>
              <rect x="50" y="35" width="5" height="30" >
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.3" />
              </rect>
              <rect x="60" y="35" width="5" height="30" >
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.4" />
              </rect>
              <rect x="70" y="35" width="5" height="30" >
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.5" />
              </rect>
            </g>
          </svg>
        )
      case 'clock':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 100 100" space="preserve">
            <circle fill="none" stroke={this.color} stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48" />
            <line fill="none" stroke-linecap="round" stroke={this.color} stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </line>
            <line fill="none" stroke-linecap="round" stroke={this.color} stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
              <animateTransform
                attributeName="transform"
                dur="15s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </line>
          </svg>
        )
      case 'propel':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" >
            <g>
              <polyline points="57,53.8 82.7,65 85.2,61.3 58.2,44.7" />
              <polyline points="53.8,40.2 52.3,13.2 47,13.2 46.3,40.3" />
              <polyline points="41.7,45.5 15.8,60.8 18,64.7 42.8,53.5" />
              <animateTransform attributeName="transform" type="rotate" dur="3s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
            </g>
          </svg>
        )
      case 'spinboxie':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 90 90" enable-background="new 0 0 100 100" space="preserve">
            <rect fill={this.color} stroke={this.color} stroke-width="4" x="25" y="25" width="50" height="50">
              <animateTransform
                attributeName="transform"
                dur="0.5s"
                from="0 50 50"
                to="180 50 50"
                type="rotate"
                id="strokeBox"
                attributeType="XML"
                begin="rectBox.end" />
            </rect>
            <rect x="27" y="27" fill={this.colortwo} width="46" height="50">
              <animate
                attributeName="height"
                dur="1.3s"
                attributeType="XML"
                from="50"
                to="0"
                id="rectBox"
                fill="freeze"
                begin="0s;strokeBox.end" />
            </rect>
          </svg>
        )
      case 'deineko':
        return (
          <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="m24preloader">
            <path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="yellow" opacity="0.85">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite"></animateTransform>
            </path>
            <path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="red" opacity="0.85">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="6s" repeatCount="indefinite"></animateTransform>
            </path>
            <path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="green" opacity="0.85">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="4s" repeatCount="indefinite"></animateTransform>
            </path>
            <path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="blue" opacity="0.85">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform>
            </path>
            <circle cx="50" cy="50" r="45"
              fill="none" stroke="#d0d2d3" stroke-width="10" />
          </svg>
        )
      case 'rallen':
        return (
<svg version="1.1" class="svg-loader" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80" space="preserve">
	<path 
		fill={this.color}
		d="M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1
		c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1
		c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1
		l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5
		c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1
		c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9
		c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9
		c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2
		c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9
		c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1
		c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7
		c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1
		c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z"
	>
		<animateTransform
			attributeType="xml"
			attributeName="transform"
			type="rotate"
			from="0 40 40"
			to="360 40 40"
			dur="0.8s"
			repeatCount="indefinite"
		/>
	</path>
	<path 
		fill={this.colortwo} 
		d="M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7
		c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1
		c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1
		c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2
		c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7
		s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8
		c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1
		c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8
		c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2
		c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z"
	>
		<animateTransform
			attributeType="xml"
			attributeName="transform"
			type="rotate"
			from="0 40 40"
			to="-360 40 40"
			dur="0.6s"
			repeatCount="indefinite"
		/>
	</path>
</svg>
        )
        case 'pberry':
        return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient-1">
      <stop offset="0" stop-color={this.color} />
      <stop offset="50%" stop-color="#108010" />
      <stop offset="100%" stop-color={this.colortwo} />
    </linearGradient>
  </defs>
  <rect style="transform-origin:50% 50%" x="0" y="0" width="100" height="100" fill="url(#gradient-1)">
    <animateTransform attributeName="transform" type="rotate" from="0" to="90" dur="3s" repeatCount="indefinite" />
  </rect>
</svg>
        )
{/*<!--
        case 'kcosta':
        return (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<defs>
    <style type="text/css">
        @import url("/assets/svg-kcosta.css");
    </style>
</defs>
			<circle class="odd" cx="50" cy="50" r="5" />
			<circle class="pair" cx="50" cy="50" r="10" />
			<circle class="odd" cx="50" cy="50" r="15" />
			<circle class="pair" cx="50" cy="50" r="20" />
			<circle class="odd" cx="50" cy="50" r="25" />
			<circle class="pair" cx="50" cy="50" r="30" />
			<circle class="odd" cx="50" cy="50" r="35" />
			<circle class="pair" cx="50" cy="50" r="40" />
			<circle class="odd" cx="50" cy="50" r="45" />
			<circle class="pair" cx="50" cy="50" r="52" />
			<circle class="center" cx="50" cy="50" r="2" />
		</svg>
        )
        case 'bdehaan':
        return (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 100" space="preserve">
<defs>
    <style type="text/css">
        @import url("/assets/svg-bdehaan.css");
    </style>
</defs>
<g id="svg-background">
	<rect width="70" height="100"/>
</g>
<g id="svg-spinner">
	<g>
		<polygon class="sp-segment sp-segm-1" fill="#0D1A00" points="29,44 25,44 10,19 10,10 13.903,10 29,35.104"/>
		<polygon class="sp-segment sp-segm-2" fill="#0D1A00" points="10,89 14,89 29,64 29,55 25.097,55 10,80.104"/>
		<polygon class="sp-segment sp-segm-3" fill="#0D1A00" points="59,89 55,89 40,64 40,55 43.903,55 59,80.104"/>
		<polygon class="sp-segment sp-segm-4" fill="#0D1A00" points="40,44 44,44 59,19 59,10 55.097,10 40,35.104"/>
		<polygon class="sp-segment sp-segm-5" fill="#0D1A00" points="3,4 0,7 0,45.5 3,48.5 9,42.5 9,10"/>
		<polygon class="sp-segment sp-segm-6" fill="#0D1A00" points="3,50.5 0,53.5 0,92 3,95 9,89 9,56.5"/>
		<polygon class="sp-segment sp-segm-7" fill="#0D1A00" points="34.5,50.5 30,55 30,90.5 34.5,95 39,90.5 39,55"/>
		<polygon class="sp-segment sp-segm-8" fill="#0D1A00" points="34.5,4 30,8.5 30,44 34.5,48.5 39,44 39,8.5"/>
		<polygon class="sp-segment sp-segm-9" fill="#0D1A00" points="66,4 60,10 60,42.5 66,48.5 69,45.5 69,7"/>
		<polygon class="sp-segment sp-segm-10" fill="#0D1A00" points="66,50.5 60,56.5 60,89 66,95 69,92 69,53.5"/>
		<polygon class="sp-segment sp-segm-11" fill="#0D1A00" points="30.5,0 7,0 4,3 10,9 27.5,9 33.5,3"/>
		<polygon class="sp-segment sp-segm-12" fill="#0D1A00" points="60.5,45 40,45 35.5,49.5 40,54 60.5,54 65,49.5"/>
		<polygon class="sp-segment sp-segm-13" fill="#0D1A00" points="29,45 8.5,45 4,49.5 8.5,54 29,54 33.5,49.5"/>
		<polygon class="sp-segment sp-segm-14" fill="#0D1A00" points="62,0 38.5,0 35.5,3 41.5,9 59,9 65,3"/>
		<polygon class="sp-segment sp-segm-15" fill="#0D1A00" points="27.5,90 10,90 4,96 7,99 30.5,99 33.5,96"/>
		<polygon class="sp-segment sp-segm-16" fill="#0D1A00" points="59,90 41.5,90 35.5,96 38.5,99 62,99 65,96"/>
	</g>
</g>
</svg>
-->*/}
      default:
        return (null);
    }

  }
}
