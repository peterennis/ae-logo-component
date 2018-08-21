import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ae-svgcss-component',
  styleUrl: 'ae-svgcss-component.scss'
})
export class AeSvgcssComponent {

  @Prop() type: string = 'android';
  @Prop() color: string = 'grey';
  @Prop() colortwo: string = 'grey';

  render() {
    switch (this.type) {
      case 'rallen':
        return (
          <svg version="1.1" class="svg-loader" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80" space="preserve">
	<path 
		fill={this.color} d="M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1
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
		c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z"	>
		<animateTransform attributeName="transform"	type="rotate"	from="0 40 40" to="360 40 40"	dur="0.8s" repeatCount="indefinite" ></animateTransform>
	</path>
	<path fill={this.colortwo} d="M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7
		c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1
		c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1
		c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2
		c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7
		s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8
		c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1
		c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8
		c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2
		c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z" >
		<animateTransform	attributeName="transform"	type="rotate"	from="0 40 40" to="-360 40 40" dur="0.6s" repeatCount="indefinite" ></animateTransform>
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
        case 'kcosta':
        return (
<svg id="kcosta" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
<svg id="bdehaan" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 100" space="preserve">
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
        )
      default:
        return (null);
    }

  }
}
