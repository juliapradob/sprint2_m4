import { Database } from "../infra/Database.js"

class DatabaseMetodos {
    /**
     * Retorna uma dica randomizada
     * @returns Object
     */
    static randomizar(){
        function pegarIndice() {
            return Math.floor(Math.random() * Database.Dicas.length);
        }
        return Database.Dicas[pegarIndice()]
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

export default DatabaseMetodos