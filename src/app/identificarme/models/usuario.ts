import { Alumno } from "src/app/alumnos/models/alumno";

export interface Usuario{
  id: number;
  usuario: string;
  contrasena: string;
  admin: boolean;
  alumno?: Alumno;
}
