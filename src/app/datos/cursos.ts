import { Curso } from '../models/curso';

export class Datos {
  static cursos: Curso[] = [
    {
        nombre : 'Angular',
        comision: '32566',
        profesor: 'Miško Hevery',
        fechaInicio: new Date(2022, 8, 9),
        fechaFin: new Date(2022, 10, 9),
        inscripcionAbierta: false,
    },
    {
      nombre : 'Desarrollo Web',
      comision: '32567',
      profesor: 'Pascar Edgardo',
      fechaInicio: new Date(2022, 10, 9),
      fechaFin: new Date(2022, 11, 9),
      inscripcionAbierta: true,
    },
    {
      nombre : 'JavaScript',
      comision: '32568',
      profesor: 'Migueles Matias',
      fechaInicio: new Date(2022, 9, 9),
      fechaFin: new Date(2022, 10, 9),
      inscripcionAbierta: false,

    },
    {
      nombre : 'Angular',
      comision: '32566',
      profesor: 'Sebastian Andrade',
      fechaInicio: new Date(2022, 9, 9),
      fechaFin: new Date(2022, 11, 9),
      inscripcionAbierta: false,
  },
  {
    nombre : 'Desarrollo Web',
    comision: '32567',
    profesor: 'Zardalevich Alejandro',
    fechaInicio: new Date(2022, 10, 9),
    fechaFin: new Date(2022, 11, 9),
    inscripcionAbierta: true,
  },
  {
    nombre : 'JavaScript',
    comision: '32568',
    profesor: 'Arellano Jhonatan',
    fechaInicio: new Date(2022, 10, 9),
    fechaFin: new Date(2022, 12, 9),
    inscripcionAbierta: false,
  },
  ];
}
