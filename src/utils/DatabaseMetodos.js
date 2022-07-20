import { Database } from "../infra/Database.js"

class DatabaseMetodos {
    /**
     * Retorna uma dica randomizada
     * @returns Object
     */
    static randomizar() {
        function pegarIndice(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return Database.Dicas[pegarIndice(0, Database.Dicas.length)]
    }

    /**
     * Insere uma dica no banco de dados
     * @param {Object} dica 
     * @returns Object
     */
    static inserirDica(dica) {
        Database.Dicas = [...Database.Dicas, dica];
        return Database.Dicas
    }
}