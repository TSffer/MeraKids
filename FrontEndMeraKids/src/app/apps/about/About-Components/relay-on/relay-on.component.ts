import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
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
      fieldText: 'Familias apoyadas a través de nuestros programas de orientación y consejería, talleres socioemocionales y comunidad de padres'
    }
  ];

  relayOn2 = [
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Recursos Humanos',
      fieldText: 'Encargados de la selección y reclutamiento de nuevos voluntarios. Actualmente el proceso de selección para los nuevos voluntarios del área de marketing'
    },
    {
      icon: '../assets/images/logros/areas.png',
      field: 'Legal',
      fieldText: 'Responsables del proceso de formalización de Merakids. Además, apoyan en la elaboración de alianzas y convenios vinculados a los voluntarios de Merakids. en el mes de Octubre, lograron constituir formalmente a Merakids como asociación'
    },
    {
      icon: '../assets/images/logros/familias.png',
      field: 'Marketing',
      fieldText: 'Encargados de planear la estrategia de marketing y diseñar el contenido que se compartirá en redes sociales. El área está conformada por el equipo de investigación y el de marketing. Han publicado su primer reel como parte de la estrategia de crecimiento orgánico'
    }
  ];

  relayOn3 = [
    {
      icon: '../assets/images/logros/voluntarios.png',
      field: 'Comunidad Meravalientes',
      fieldText: 'Realizan dos talleres cada mes enfocados en estilos y estrategias de crianza, dirigidos a las madres Meravalientes. En noviembre, tendrán su primer intervención presencial con un taller de habilidades sociales para niños con autismo entre 3 y 6 años en alianza con la Asociación de Padres de Niños con Autismo'
    },
    {
      icon: '../assets/images/logros/areas.png',
      field: 'Orientación y Consejería',
      fieldText: 'Brindan orientación y consejeria a madres, padres o apoderados de niños, padres con NEE, a través de 5 sesiones donde se prioriza objetivos relevantes y funcionales para la familia. Todo esto a partir de estrategias para cada caso, las cuales son elaboradas por un(a) psicólogo(a) egresado(a) y un(a) estudiante'
    },
    {
      icon: '../assets/images/logros/familias.png',
      field: 'Comité médico',
      fieldText: 'Elaboran boletines mensuales de información médica y mini-meratips para las familias. Este mes lanzaron el boletin de gastroenterocolitis aguda y el mini-meratip de desinfección de los alimentos y lavado de manos'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
