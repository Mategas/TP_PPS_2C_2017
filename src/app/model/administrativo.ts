import { Usuario } from "./usuario";
import { Rol } from "./rol.enum";

export class Administrativo extends Usuario {
    constructor(){
        super();
        this.rol = Rol.Administrativo;
    }
}