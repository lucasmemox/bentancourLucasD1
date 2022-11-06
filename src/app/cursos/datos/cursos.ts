import { Curso } from '../models/curso';

export class Datos {
  static cursos: Curso[] = [
    {
        id: 1,
        nombre : 'Angular',
        comision: '32566',
        profesor: 'Miško Hevery',
        fechaInicio: new Date(2022, 8, 9),
        fechaFin: new Date(2022, 10, 9),
        inscripcionAbierta: false,
        imagen: './assets/imagenes/angular-curso.png',
    },
    {
      id: 2,
      nombre : 'Desarrollo Web',
      comision: '32567',
      profesor: 'Pascar Edgardo',
      fechaInicio: new Date(2022, 10, 9),
      fechaFin: new Date(2022, 11, 9),
      inscripcionAbierta: true,
      imagen: './assets/imagenes/desWeb-curso.png',
    },
    {
      id: 3,
      nombre : 'JavaScript',
      comision: '32568',
      profesor: 'Migueles Matias',
      fechaInicio: new Date(2022, 9, 9),
      fechaFin: new Date(2022, 10, 9),
      inscripcionAbierta: false,
      imagen: './assets/imagenes/javascr-curso.png',
    },
    {
      id: 4,
      nombre : 'Angular',
      comision: '32566',
      profesor: 'Sebastian Andrade',
      fechaInicio: new Date(2022, 9, 9),
      fechaFin: new Date(2022, 11, 9),
      inscripcionAbierta: false,
      imagen: './assets/imagenes/angular-curso.png',
  },
  {
    id: 5,
    nombre : 'Desarrollo Web',
    comision: '32567',
    profesor: 'Zardalevich Alejandro',
    fechaInicio: new Date(2022, 10, 9),
    fechaFin: new Date(2022, 11, 9),
    inscripcionAbierta: true,
    imagen: './assets/imagenes/desWeb-curso.png',
  },
  {
    id: 6,
    nombre : 'JavaScript',
    comision: '32568',
    profesor: 'Arellano Jhonatan',
    fechaInicio: new Date(2022, 10, 9),
    fechaFin: new Date(2022, 12, 9),
    inscripcionAbierta: false,
    imagen: './assets/imagenes/javascr-curso.png',
  },
  ];
}