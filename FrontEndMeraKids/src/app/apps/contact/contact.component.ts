import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "src/app/services/message.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    constructor(
        public router: Router,
        public http: HttpClient,
        public _MessageService: MessageService,
        private formBuilder: FormBuilder,
    ){

    }
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    contactForm(form: any) {
        this._MessageService.sendMessage(form).subscribe(() => {
            //Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
        });
    }
}