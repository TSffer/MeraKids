import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {
    constructor(private _http: HttpClient) {}

    sendMessage(body: any){
        console.log(body);
        return this._http.post("http://localhost:3000/contactarse", body);
    }
}