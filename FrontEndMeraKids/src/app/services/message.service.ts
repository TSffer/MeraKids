import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {
    constructor(private _http: HttpClient) {}

    sendMessage(body: any, asunto: string){
        body.asunto = asunto;
        return this._http.post("https://merakidsapi.herokuapp.com/contactarse", body);
    }
}