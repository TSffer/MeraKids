import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
    constructor(
        public router: Router,
        public http: HttpClient
    ){

    }
    ngOnInit(): void {
        
    }
}