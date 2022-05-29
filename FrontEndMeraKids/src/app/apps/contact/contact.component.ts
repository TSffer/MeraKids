import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    imagePathServicio1 = '../assets/images/innerpage/servicio1.jpeg';
    imagePathServicio2 = '../assets/images/innerpage/servicio2.png';
    constructor(
        public router: Router,
        public http: HttpClient,
    ){

    }
    ngOnInit(): void {
        
    }
}