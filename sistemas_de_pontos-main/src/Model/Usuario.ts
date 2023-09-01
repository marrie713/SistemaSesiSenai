export abstract class Usuario{

    usuario: string;
    senha: string;
    constructor(_usuario: string, _senha: string){
        this.senha = _senha;
        this.usuario = _usuario;
    }

    login(){}
}