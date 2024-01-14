const express = require("express");
const cors = require("cors");

const pgp = require("pg-promise")({});

const usuario = "postgres";
const senha = "15021989";
const hc = pgp(`postgres://${usuario}:${senha}@localhost:5432/hc`);

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

const database = {

    horario1cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Introdução a Filosofia", Terca: "Informática Básica", Quarta: "Matemática C", Quinta: "Algoritmos e programação", Sexta: "Estatística Básica", Sabado: "" },
        { Hora: "21:00", Segunda: "Introdução a Filosofia", Terca: "Informática Básica", Quarta: "Matemática C", Quinta: "Algoritmos e programação", Sexta: "Estatística Básica", Sabado: "" },
    ],

    horario2cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "Cálculo I", Terca: "Circuitos Digitais", Quarta: "Geometria de dados", Quinta: "Estruturas de dados", Sexta: "Probabilidade e estatística", Sabado: "" },
        { Hora: "16:00", Segunda: "Circuitos Digitais", Terca: "Estruturas de dados", Quarta: "Cálculo I", Quinta: "Probabilidade e estatística", Sexta: "Geometria analitica", Sabado: "" },
        { Hora: "19:10", Segunda: "Estruturas de dados", Terca: "", Quarta: "Produção textual acadêmica", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "21:00", Segunda: "Estruturas de dados", Terca: "", Quarta: "Produção textual acadêmica", Quinta: "", Sexta: "", Sabado: "" },
    ],

    horario3cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Programação I", Terca: "Cáculo II", Quarta: "Matemática discreta", Quinta: "Sistemas digitais", Sexta: "Pesquisa e ordenação de dados", Sabado: "" },
        { Hora: "21:00", Segunda: "Programação I", Terca: "Cáculo II", Quarta: "Matemática discreta", Quinta: "Sistemas digitais", Sexta: "Pesquisa e ordenação de dados", Sabado: "" },
    ],

    horario4cc: [ 
    { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
    { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
    { Hora: "13:30", Segunda: "Organização de Compuradores", Terca: "Grafos", Quarta: "Banco de dados", Quinta: "Engenharia de software I", Sexta: "Programação II", Sabado: "" },
    { Hora: "16:00", Segunda: "Programação II", Terca: "Engenharia de software I", Quarta: "Organização de Compuradores", Quinta: "Grafos", Sexta: "Banco de dados", Sabado: "" },
    { Hora: "19:10", Segunda: "Estruturas de dados", Terca: "", Quarta: "Iniciação à prática científica", Quinta: "", Sexta: "", Sabado: "" },
    { Hora: "21:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
    ],

    horario5cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Linguaggens formais e autômatos", Terca: "Banco de dados II", Quarta: "Álgebra linear", Quinta: "Sistemas operacionais", Sexta: "Engenharia de Software", Sabado: "" },
        { Hora: "21:00", Segunda: "Linguaggens formais e autômatos", Terca: "Banco de dados II", Quarta: "Álgebra linear", Quinta: "Sistemas operacionais", Sexta: "Engenharia de Software", Sabado: "" },
    ],

    horario6cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "Construção de Compuradores", Terca: "Planejamento e gestão de projetos", Quarta: "História da fronteira sul", Quinta: "Redes de Compuradores", Sexta: "Teoria da computação", Sabado: "" },
        { Hora: "16:00", Segunda: "Redes de Compuradores", Terca: "Teoria da computação", Quarta: "História da fronteira sul", Quinta: "Planejamento e gestão de projetos", Sexta: "Construção de Compuradores", Sabado: "" },
        { Hora: "19:10", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "21:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
    ],

    horario7cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Cálculo numérico", Terca: "Meio ambiente e diversidade", Quarta: "Inteligência artificial", Quinta: " Computação gráfica", Sexta: "Linguagens de programação", Sabado: "" },
        { Hora: "21:00", Segunda: "Cálculo numérico", Terca: "Meio ambiente e diversidade", Quarta: "Inteligência artificial", Quinta: "Computação gráfica", Sexta: "Linguagens de programação", Sabado: "" },
    ],

    horario8cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "TCC II" },
        { Hora: "13:30", Segunda: "Direito e cidadania", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "Direito e cidadania", Terca: "", Quarta: "", Quinta: "Tópicos especiais em computação XXXII", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "(Curso de ADM) Gestão da inovação", Sabado: "" },
        { Hora: "21:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "(Curso de ADM) Gestão da inovação", Sabado: "" },
    ],

    horario9cc: [ 
        { Hora: "7:30", Segunda: "", Terca: "(Curso de ADM) Empreendedorismo e criação de negócios", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "Curso de ADM) Empreendedorismo e criação de negócios", Quarta: "", Quinta: "", Sexta: "", Sabado: "TCC I" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Tópicos especiais em computação XXXIII", Terca: "", Quarta: "", Quinta: "", Sexta: "Tópicos especiais em computação XXXIII 40", Sabado: "" },
        { Hora: "21:00", Segunda: "Tópicos especiais em computação XXXIII", Terca: "", Quarta: "", Quinta: "", Sexta: "Tópicos especiais em computação XXXIII 40", Sabado: "" },
    ],


    horario1Geo: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "História do pensamento geográfica", Terca: "Geologia geral", Quarta: "Matemática B", Quinta: "Produção Textual acadêmica", Sexta: "Geografia da população", Sabado: "" },
        { Hora: "21:00", Segunda: "História do pensamento geográfica", Terca: "Geologia geral", Quarta: "Matemática B", Quinta: "Produção Textual acadêmica", Sexta: "Geografia da população", Sabado: "" },
    ],

    horario2Geo: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Geomorfologia", Terca: "Cartografia temática", Quarta: "Introdução ao pensamento social", Quinta: "Fundamentos da educação", Sexta: "Geografia política", Sabado: "" },
        { Hora: "21:00", Segunda: "Geomorfologia", Terca: "Cartografia temática", Quarta: "Introdução ao pensamento social", Quinta: "Fundamentos da educação", Sexta: "Geografia política", Sabado: "" },
    ],

    horario3Geo: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Hidrogeogra", Terca: "Didática geral", Quarta: "Espitemologia da geografia", Quinta: "Sensoriamento remoto", Sexta: "Geografia urbana", Sabado: "" },
        { Hora: "21:00", Segunda: "Hidrogeogra", Terca: "Didática geral", Quarta: "Espitemologia da geografia", Quinta: "Sensoriamento remoto", Sexta: "Geografia urbana", Sabado: "" },
    ],

    horario4Geo: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "Geografia do Brasil", Terca: "Estágio curricular supervisionado: práticade ensino em geografia II", Quarta: "Língua brasileira de Sinais(Libras)", Quinta: "Organização do espaço mundial", Sexta: "", Sabado: "" },
        { Hora: "21:00", Segunda: "Geografia do Brasil", Terca: "Estágio curricular supervisionado: práticade ensino em geografia II", Quarta: "Língua brasileira de Sinais(Libras)", Quinta: "Organização do espaço mundial", Sexta: "", Sabado: "" },
    ],

    horario5Geo: [ 
        { Hora: "7:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "10:20", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "13:30", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "16:00", Segunda: "", Terca: "", Quarta: "", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "19:10", Segunda: "", Terca: "Geografia socioambiental", Quarta: "Estágio curricular supervisionado: práticade ensino em geografia IV", Quinta: "", Sexta: "", Sabado: "" },
        { Hora: "21:00", Segunda: "", Terca: "Geografia socioambiental", Quarta: "Estágio curricular supervisionado: práticade ensino em geografia IV", Quinta: "", Sexta: "", Sabado: "" },
    ],

};


app.get("/", (req, res) => {
    res.send("SAIDA!");
});
app.get("/ccrs", async (req, res) => {
    try {
        const ccrs = await hc.any("SELECT * FROM ccrs;");
        console.log(ccrss);
        console.log('Retornando todos ccrs.');
        res.json(ccrss).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/ccr", async (req, res) => {
    try {
        const ccrsId = parseInt(req.query.id);
        console.log(`Retornando ID: ${ccrsId}.`);
        const ccrs = await hc.one(
            "SELECT id, nome, descricao FROM ccrs WHERE id = $1;",
            ccrsId
        );
        res.json(ccrs).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.post("/ccr", async (req, res) => {
    try {
        const ccrNome = req.body.nome;
        const ccrDescricao = req.body.descricao;
        console.log(`Nome CCR: ${ccrNome} - Descrição CCR: ${ccrDescricao}`);
        hc.none(
            "INSERT INTO ccrs (nome, descricao) VALUES ($1, $2);",
            [ccrNome, ccrDescricao]
        );
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/cursos", async (req, res) => {
    try {
        const cursos = await hc.any("SELECT * FROM cursos;");
        console.log(cursos);
        console.log('Retornando todos cursos.');
        res.json(cursos).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/curso", async (req, res) => {
    try {
        const cursosId = parseInt(req.query.id);
        console.log(`Retornando ID: ${cursosId}.`);
        const cursos = await hc.one(
            "SELECT id,nome, descricao FROM cursos WHERE id = $1;",
            cursosId
        );
        res.json(cursos).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.post("/curso", async (req, res) => {
    try {
        const cursoNome = req.body.nome;
        const cursoDescricao = req.body.descricao;
        console.log(`Nome Curso: ${cursoNome} - Descrição Curso: ${cursoDescricao}`);
        hc.none(
            "INSERT INTO cursos (nome, descricao) VALUES ($1, $2);",
            [cursoNome, cursoDescricao]
        );
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario1cc", (req, res) => {
    try {
        res.json(database.horario1cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario1_1cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario1cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario2cc", (req, res) => {
    try {
        res.json(database.horario2cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario2_2cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario2cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});


app.get("/horario3cc", (req, res) => {
    try {
        res.json(database.horario3cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario3_3cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario3cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});


app.get("/horario4cc", (req, res) => {
    try {
        res.json(database.horario4cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario4_4cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario4cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});


app.get("/horario5cc", (req, res) => {
    try {
        res.json(database.horario5cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario5_5cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario5cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});



app.get("/horario6cc", (req, res) => {
    try {
        res.json(database.horario6cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario6_6cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario6cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario7cc", (req, res) => {
    try {
        res.json(database.horario7cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario7_7cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario7cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});


app.get("/horario8cc", (req, res) => {
    try {
        res.json(database.horario8cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario8_8cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario8cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});


app.get("/horario9cc", (req, res) => {
    try {
        res.json(database.horario9cc).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario9_9cc", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario9cc[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario1Geo", (req, res) => {
    try {
        res.json(database.horario1Geo).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horarioGeo_1", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario1Geo[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario2Geo", (req, res) => {
    try {
        res.json(database.horario2Geo).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horarioGeo_2", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario2Geo[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario3Geo", (req, res) => {
    try {
        res.json(database.horario3Geo).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horarioGeo_3", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario3Geo[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario4Geo", (req, res) => {
    try {
        res.json(database.horario4Geo).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horarioGeo_4", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario4Geo[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horario5Geo", (req, res) => {
    try {
        res.json(database.horario5Geo).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horarioGeo_5", (req, res) => {
    try {
        const index = parseInt(req.query.index);
        console.log(`Retornando horário de índice: ${index}`);
        res.json(database.horario5Geo[index - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.post ("/follow", (req, res) => {
    console.log("Recebi um follow");
    res.status(200).json({ message: "Você está seguindo agora." });
});
  
app.post ("/unfollow", (req, res) => {
    console.log("Recebi unfollow");
    res.status(200).json({ message: "Você não está mais seguindo." });
});
