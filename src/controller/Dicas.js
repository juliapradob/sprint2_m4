import { Database } from "../infra/Database.js";
import DicaModel from "../models/DicaModel.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Dicas {
    static rotas(app) {
        app.get("/tips", (req, res) => {
            const response = DatabaseMetodos.randomizar()
            res.status(200).json(response)
        });

        app.post("/create", (req, res) => {
            try {
                const dica = new DicaModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirDica(dica)
                res.status(201).json(response)
            } catch (error) {
                res.status(400).send("Erro")                
            }
        });
    };
};

export default Dicas;