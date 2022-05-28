import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-content',
	templateUrl: './top-content.component.html',
	styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {

	imagePath='../assets/images/innerpage/image.png';
	fundador1='../assets/images/blog/fundador1.jpeg';
	fundador2='../assets/images/blog/fundador2.jpeg';
	fundador3='../assets/images/blog/fundador3.jpeg';
	constructor() { }

	ngOnInit(): void {
	}

}
