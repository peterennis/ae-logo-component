import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'ae-spinner-component',
	styleUrl: 'ae-spinner-component.scss'
})
export class AeSpinnerComponent {

	@Prop() type: string = 'android';
	@Prop() color: string = 'grey';

	render() {
		switch (this.type) {
			case 'circle':
				return (
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xmlSpace="preserve">
						<path fill={this.color} d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(360 -4.05439e-8 -4.05439e-8)">
							<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
						</path>
					</svg>
				);
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
					<svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml: space="preserve">
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
			default:
				return (null);
		}

	}
}
