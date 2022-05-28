import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	irInstagram() {
		window.open('https://www.instagram.com/merakidslearning/', '_blank');
	}
	irLinkedin() {
		window.open('https://www.linkedin.com/company/merakids-learning/', '_blank');
	}
	irFacebook() {
		window.open('	https://www.facebook.com/Merakids-Learning-109111497474512/', '_blank');
	}


}
