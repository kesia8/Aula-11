import db from "./db.js";

const Usuarios_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGRAR PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
);`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (ID, NOME, EMAIL, SENHA)
VALUES
  (1,'João', 'joaosouza9@email.com', '13478656')
  (2, 'Olivia Ribeiro', 'olivia.ribeiro@gmail.com', '96580684')
  (3, 'Cha Eunwoo', 'chaeunwoooficial@.com.br', '874395765')
  `

  function criaTabelaUsr(){
      db.run(USUARIOS_SCHEMA, (error)=>{
          if (error) console.log("Erro ao criar tabela de usuarios")

      });
    
  }

  const TABELA_SCHEMA = `
  CREATE TABLE IF NOT EXISTS TAREFAS (
      ID INTEGER PRIMARY KEY ATOINCREMENT,
      TITULO VARCHAR(64),
      DESCRICAO TEXT,
      STATUS VARCHAR(32),
      DATACRIACAO VARCHAR(32),
      ID_USUARIO INTEGER,
      FOREING KEY (ID_USUARIO) REFERENCES USUARIO(ID)
  );`

const ADD_TAREFAS_DATA = ` INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
    VALUES
       ('Yoga', 'Fazer yoga segunda e quarta', 'Contido', '2021-01-10', 2),
       ('Médico', 'Consulta com Dr. Ayrton sexta', 'Todo', '2021-01-13', 1),
       ('Pagar contas', 'Pagar boletos de água e luz', 'Doing', '2021-01-02', 2),
       ('Mercado', 'Pegar lista na geladeira e fazer compras', 'Todo', '2021-01-08', 2),
       ('Dentista', 'Consulta com Dra.Adreia sexta', 'Todo', '2021-01-11', 1),
       ('pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Continuo', '2021-01-05', 1)
    `

    function criarTabelaTarefas() {
        db.run(TAREFAS_SCHEMA, (error)=> {
            if(error) console.log("Erro ao criar tabela de Tarefas")
        });
    
    }
    function populaTabelaTarefas() {
        db.run(TAREFAS_DATA, (error)=> {
            if(error) console.log("Erro ao ppopular tabela de Tarefas")
        });
    }

    db.seriaLize( ()=> {
        criaTabelaUsr();
        populaTabelaUsr();
        criarTabelaTarefas();
        populaTabelaTarefas();
    });