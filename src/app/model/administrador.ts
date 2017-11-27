import { Usuario } from "./usuario";
import { Rol } from "./rol.enum";

export class Administrador extends Usuario {
    constructor(){
        super();
        this.rol = Rol.Administrador;
    }
}