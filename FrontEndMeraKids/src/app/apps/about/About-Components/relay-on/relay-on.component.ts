import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: '+50 Voluntarios',
      fieldText: 'No podríamos estar más orgullosos de todos quienes son parte de esta gran familia, y de aquellos que se sumarán a cumplir nuestra meta'
    },
    {
      icon: '../assets/images/logros/areas.png',
      field: '+8 áreas',
      fieldText: 'Comprometidos con la construcción de un país más inclusivo, buscando generar un cambio positivo en los niños y sus familias'
    },
    {
      icon: '../assets/images/logros/familias.png',
      field: '+100',
      fieldText: 'Familias apoyadas a través de nuestros programas de orientación y consejeria, talleres socioemocionales y comunidad de padres'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
