import { Profesor } from "./profesor";
import { Turno } from "./turno.enum";
import { Alumno } from "./alumno";
import { Dia } from "./dia.enum";

export class Materia{

    //Nombre de la materia
    nombre: string;
    // Profesores de la materia (mínimo uno)
    profesores: Array<Profesor>;
    // Ayudantes de la materia (mínimo cero)
    ayudantes: Array<Alumno>;
    // El turno en el que se dicta la materia
    turno: Turno;
    // Aula en la que se dicta
    aula: string;
    // Días que se dicta
    dias: Array<Dia>;

    constructor()
    {
        this.profesores = new Array<Profesor>();
        this.ayudantes = new Array<Alumno>();
        this.dias = new Array<Dia>();
    }

    
}

/* 'Matemática',
'Sistema de Procesamiento de Datos',
'Inglés',
'Programación I',
'Laboratorio de Computación I',
'Arquitectura y Sistemas Operativos',
'Estadística',
'Inglés II',
'Programación II',
'Laboratorio de Computación II',
'Metodología de La Investigación',
'Elementos de Investigación Operativa',
'Programación III',
'Laboratorio de Computación III',
'Organización Contable de la Empresa',
'Organización Empresarial',
'Diseño y Administración de Bases de Datos',
'Laboratorio de Computación IV',
'Legislación',
'Metodología de Sistemas I'

*/