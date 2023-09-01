import {Usuario} from "./Usuario";

 class Alunos extends Usuario{
    turmas: string;

    constructor(_turmas: string, _usuario: string, _senha: string){   
        super(_usuario, _senha)

        this.turmas = _turmas;
    }
}