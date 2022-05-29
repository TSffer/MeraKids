import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { derechos } from './derechos-data';


@Injectable({
  providedIn: 'root'
})
export class ServiceDerechosService {

	Derechos: any[] = [];
	loginStatusService = false;

	detailId: number = -1;
	showEdit = false;


	constructor(public http: HttpClient) {
	}

	public getDerechos(): Observable<any> {
		return of(derechos);
	}

	public addPost(bl: any) {
		this.Derechos.splice(0, 0, bl);
	}

	public deletePost(id: number) {
		this.Derechos = this.Derechos.filter(b => b.id !== id);
	}

}
