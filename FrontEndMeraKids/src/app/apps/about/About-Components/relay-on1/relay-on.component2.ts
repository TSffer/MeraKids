import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on2',
  templateUrl: './relay-on.component2.html',
})
export class RelayOnComponent2 implements OnInit {

  relayOn2 = [
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Marketing',
      fieldText: 'Encargados de planear la estrategia de marketing y diseñar el contenido que se compartirá en redes sociales. El área está conformada por el equipo de investigación y el de marketing. Han publicado su primer reel como parte de la estrategia de crecimiento orgánico, agradecemos a los miembros de esta área muy importante para crecer'
    },
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Orientación y Consejería',
      fieldText: 'Brindan orientación y consejería a madres, padres o apoderados de niños, padres con NEE, a través de 5 sesiones donde se prioriza objetivos relevantes y funcionales para la familia. Todo esto a partir de estrategias para cada caso, las cuales son elaboradas por un(a) psicólogo(a) egresado(a) y un(a) estudiante'
    },
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Comunidad Meravalientes',
      fieldText: 'Realizan dos talleres cada mes enfocados en estilos y estrategias de crianza, dirigidos a las madres Meravalientes. En noviembre, tendrán su primera intervención presencial con un taller de habilidades sociales para niños con autismo entre 3 y 6 años en alianza con la Asociación de Padres de Niños con Autismo'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
