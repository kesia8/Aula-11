class usuarioController {
    static rotas(app){
        app.get('/', usuarioController.listar)
        app.post('/', usuarioController.inserir)
    }

    static listar(req, res){
        res.send('Rota ativada com Get e recurso tarefa: litar ')
    }
    static inserir(req, res){
        res.send('Rota Post de tarefa ativada: tarefa adicionada')
    }
}

module.exports = (app, banco) => {
    const Usuario = require('../models/usuario');

    app.post('/usuarios', (req, res) => {
        const novoUsuario = new Usuario(req.body.nome, req.body.email, req.body.senha);
        banco.usuarios.push(novoUsuario);
        res.send(novoUsuario);
    });

    app.get('/usuarios', (req, res) => {
        res.send(banco.usuarios);
    });
};
export default usuarioController