import React from "react";
import axios from "axios";
import Titulo from "./Titulo";

import { DataGrid } from "@mui/x-data-grid";
import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";


const colunas = [
    { field: "id", headerName: "Id", width: 90 },
    { field: "nome", headerName: "Nome", width: 280 },
    { field: "descricao", headerName: "Descricao", width: 280 },
];

function Cursos (){
        const [nome, setNome] = React.useState("");
        const [descricao, setDescricao] = React.useState("");

        const [openMessage, setOpenMessage] = React.useState(false);
        const [messageText, setMessageText] = React.useState("");
        const [messageSeverity, setMessageSeverity] = React.useState("success");

        const [listaCursos, setListaCursos] = React.useState([]);

        React.useEffect(() => {
            getData();
        }, []);

        async function getData() {
            try {
                const res = await axios.get("/cursos");
                setListaCursos(res.data);
                console.log(res.data);
            } catch (error) {
                setListaCursos([]);
            }
        }

        function clearForm() {
            setNome("");
            setDescricao("");
        }

        function handleCancelClick() {
            if (nome !== "" || descricao !== "") {
                setMessageText("Cadastro do curso está cancelado!");
                setMessageSeverity("warning");
                setOpenMessage(true);
            }
            clearForm();
        }

        async function handleSubmit() {
            if (nome !== "" && descricao !== "") {
                try {
                    await axios.post("/curso", {
                        nome: nome,
                        descricao: descricao,
                    });
                    console.log(`Nome curso: ${nome} - Descrição curso: ${descricao}`);
                    setMessageText("Curso cadastrado com sucesso!");
                    setMessageSeverity("success");
                    clearForm(); // limpa o formulário apenas se cadastrado com sucesso
                } catch (error) {
                    console.log(error);
                    setMessageText("Falha no cadastro do curso!");
                    setMessageSeverity("error");
                } finally {
                    setOpenMessage(true);
                    await getData();
                }
            } else {
                setMessageText("Dados de curso inválidos!");
                setMessageSeverity("warning");
                setOpenMessage(true);
            }
        }

        function handleCloseMessage(_, reason) {
            if (reason === "clickaway") {
                return;
            }
            setOpenMessage(false);
        }

    return (
        <>
        <div>
        <Titulo mensagem="Cursos" />
        <Box>
                <Stack spacing={2}>
                    <Stack spacing={2}>
                    <br />
                        <TextField
                            required
                            id="nome-input"
                            label="Nome"
                            size="small"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <br />

                        <TextField
                            required
                            id="descricao-input"
                            label="Descrição"
                            size="small"
                            onChange={(e) => setDescricao(e.target.value)}
                            value={descricao}
                        />
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <br />

                        <Button
                            variant="contained"
                            style={{
                                maxWidth: "100px",
                                minWidth: "100px",
                            }}
                            onClick={handleSubmit}
                            type="submit"
                            color="primary"
                        >
                            Enviar
                        </Button>
                        <Button
                            variant="outlined"
                            style={{
                                maxWidth: "100px",
                                minWidth: "100px",
                            }}
                            onClick={handleCancelClick}
                            color="error"
                        >
                            Cancelar
                        </Button>
                    </Stack>

                    <Snackbar
                        open={openMessage}
                        autoHideDuration={6000}
                        onClose={handleCloseMessage}
                    >
                        <Alert
                            severity={messageSeverity}
                            onClose={handleCloseMessage}
                        >
                            {messageText}
                        </Alert>
                    </Snackbar>
                    <br /> <br />

                    <Box style={{ height: "300px" }}>
                        <Titulo mensagem2={"Lista de cursos"} />
                        <DataGrid rows={listaCursos} columns={colunas} />
                    </Box>
                    <br />

                </Stack>
            </Box>

        </div>
        </>
    );
}
export default Cursos;
