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
