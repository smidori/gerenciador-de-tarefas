export class Tarefa{

    //o ? indica que o atributo é opcional
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ){}
}