import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OptionesComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: '+ 50',
      fieldText: 'Voluntarios'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: '+ 8 áreas',
      fieldText: 'Conprometidos con la construcción de un país más inclusivo'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: '+ 100',
      fieldText: 'Familias apoyadas a través de nuestros programas de orientación y consejeria, talleres socioemocionales y comunidad de padres'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
