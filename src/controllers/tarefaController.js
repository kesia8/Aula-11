class tarefaController {
    static rotas(app){
        app.get('/', tarefaController.listar)
        app.post('/', tarefaController.inserir)
    }

    static listar(req, res){
        res.send('Rota ativada com Get e recurso tarefa: litar ')
    }
    static inserir(req, res){
        res.send('Rota Post de tarefa ativada: tarefa adicionada')
    }
}

module.exports = (app, banco) => {
    const Tarefa = require('../models/tarefa');

    app.post('/tarefas', (req, res) => {
        const novaTarefa = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, new Date());
        banco.tarefas.push(novaTarefa);
        res.send(novaTarefa);
    });

    app.get('/tarefas', (req, res) => {
        res.send(banco.tarefas);
    });
};
export default tarefaController

