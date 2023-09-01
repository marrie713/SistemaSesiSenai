import {Usuario} from "./Usuario";

export class Professor extends Usuario{

    diciplina: string;
    
    constructor(_diciplina: string, _usuario: string, _senha: string){
        super(_usuario, _senha);

        this.diciplina = _diciplina;
    }

    add_ativid(){}
    editar_ativid(){}
    remover_ativid(){}

    add_nota(){}
    editar_nota(){}
    remover_nota(){}
}