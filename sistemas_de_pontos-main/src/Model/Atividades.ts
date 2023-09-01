import {Professor} from "./Professor";

class atividades extends Professor{

    discrição: string;
    data_entrega: Date;

    constructor(_discrição: string, _data_entrega: Date,
     _diciplina: string, _usuario: string, _senha: string){
        super(_diciplina, _usuario, _senha);

        this.discrição = _discrição;
        this.data_entrega = _data_entrega;
    }
}