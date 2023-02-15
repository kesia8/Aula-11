const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Rota ativada com GET e valores de usuarios devem ser retornados');
})

app.get('/', (req, res) => {
    res.send('Rota ativada com GET e valores de tarefas devem ser retornados');
})

app.listen(port, () => {
    console.log(`porta ${port}`);
})








