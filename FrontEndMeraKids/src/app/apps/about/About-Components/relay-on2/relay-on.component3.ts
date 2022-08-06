import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on3',
  templateUrl: './relay-on.component3.html',
})
export class RelayOnComponent3 implements OnInit {
  relayOn3 = [
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Comité médico',
      fieldText: "Elaboran boletines mensuales de información médica y mini-meratips para las familias. Este mes lanzaron el boletín de gastroenterocolitis aguda y el mini-meratip de desinfección de los alimentos y lavado de manos"
    },
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Legal',
      fieldText: "Responsables del proceso de formalización de Merakids. Además, apoyan en la elaboración de alianzas y convenios vinculados a los voluntarios de Merakids. en el mes de Octubre, lograron constituir formalmente a Merakids como asociación"
    },
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Recursos Humanos',
      fieldText: 'Encargados de la selección y reclutamiento de nuevos voluntarios. Actualmente el proceso de selección para los nuevos voluntarios del área de marketing, agradecemos a los miembros de esta área muy importante para crecer'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
