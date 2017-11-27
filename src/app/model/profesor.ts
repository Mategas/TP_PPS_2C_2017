import { Usuario } from "./usuario";
import { Materia } from "./materia";
import { Rol } from "./rol.enum";

export class Profesor extends Usuario
{
    materias: Array<Materia>;

    constructor()
    {
        super();
        this.materias = new Array<Materia>();
        this.rol = Rol.Profesor;
    }

}