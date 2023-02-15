const Usuario = require('./src/models/usuario');
const Tarefa = require('./models/tarefa');
const banco = require('./src/infra/bd');

const usuario = new Usuario('João', 'joaosouza9@email.com', '13478656');
console.log(usuario);

const tarefa = new Tarefa('Comprar leite', 'Comprar leite na loja', 'pendente', new Date());
console.log(tarefa);