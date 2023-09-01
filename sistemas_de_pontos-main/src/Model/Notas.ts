import {Professor} from "./Professor";

class Notas extends Professor{

    Professor: string;
    Aluno: string;
    Nota: number;

    constructor(_professor: string, _aluno: string, _nota: number, 
    _diciplina: string, _usuario: string, _senha: string){
        super(_diciplina, _usuario, _senha);

        this.Professor = _professor;
        this.Aluno = _aluno;
        this.Nota = _nota;
    }
}