import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "src/app/services/message.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    imagePathContactenos = '../assets/images/contactenos/contactenos.png';
    form1: FormGroup;
    form2: FormGroup;
    form3: FormGroup;
    loading = false;
    submitted1 = false;
    submitted2 = false;
    submitted3 = false;
    get f1() { return this.form1.controls; }
    get f2() { return this.form2.controls; }
    get f3() { return this.form3.controls; }
    constructor(
        public router: Router,
        public http: HttpClient,
        public _MessageService: MessageService,
        private formBuilder: FormBuilder,
    ){
        this.form1 = this.formBuilder.group({
            nombre: ['', Validators.required],
            email: ['', Validators.required],
            mensaje: ['', Validators.required]
        });
        this.form2 = this.formBuilder.group({
            nombre: ['', Validators.required],
            email: ['', Validators.required],
            mensaje: ['', Validators.required]
        });
        this.form3 = this.formBuilder.group({
            nombre: ['', Validators.required],
            email: ['', Validators.required],
            mensaje: ['', Validators.required]
        });
    }
    ngOnInit(): void {

    }

    contactForm1(form: any, asunto: string) {
        this.submitted1 = true;
        if(this.form1.valid) {
            this._MessageService.sendMessage(form, asunto).subscribe(
                () => {
                    this.form1.reset();
                    this.submitted1 = false;
                    return Swal.fire({ title: 'Mensaje Enviado', icon: 'success',  showCancelButton: false});
                },
                error => {
                    return Swal.fire({ title: 'Error al enviar el mensaje', icon: 'error',  showCancelButton: false});
                }
            );
        }
    }

    contactForm2(form: any, asunto: string) {
        this.submitted2 = true;
        if(this.form2.valid) {
            this._MessageService.sendMessage(form, asunto).subscribe(
                () => {
                    this.form2.reset();
                    this.submitted2 = false;
                    return Swal.fire({ title: 'Mensaje Enviado', icon: 'success',  showCancelButton: false});
                },
                error => {
                    return Swal.fire({ title: 'Error al enviar el mensaje', icon: 'error',  showCancelButton: false});
                }
            );
        }
    }

    contactForm3(form: any, asunto: string) {
        this.submitted3 = true;
        if(this.form3.valid) {
            this._MessageService.sendMessage(form, asunto).subscribe(
                () => {
                    this.form3.reset();
                    this.submitted3 = false;
                    return Swal.fire({ title: 'Mensaje Enviado', icon: 'success',  showCancelButton: false});
                },
                error => {
                    return Swal.fire({ title: 'Error al enviar el mensaje', icon: 'error',  showCancelButton: false});
                }
            );
        }
    }
}