import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceDerechosService } from "./derechos-service.service";
import { Derechos } from "./derechos-type";

@Component({
    selector: 'app-rightslaw',
    templateUrl: './rightslaw.component.html',
    styleUrls: ['./rightslaw.component.css'],
})
export class RightslawComponent implements OnInit {
    imagePathServicio1 = '../assets/images/innerpage/servicio1.jpeg';
    imagePathServicio2 = '../assets/images/innerpage/servicio2.png';
    derechosDetail: Derechos[] = [];
    constructor(
        public service: ServiceDerechosService,
        public router: Router,
        public http: HttpClient,
    ){
        this.service.showEdit = false;
    }
    ngOnInit(): void {
        if(this.service.Derechos.length === 0)
        this.service.getDerechos().subscribe((d: any) => (this.service.Derechos = d));

        console.log(this.service.Derechos);
        
    }
    view(item: any) {
		window.open(item.link, '_blank');
	}
}