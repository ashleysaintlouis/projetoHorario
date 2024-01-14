import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Titulo from "./Titulo";
import Tablehorario from "./TableHorario";
import ButtonComponent from "./Button";
import Cursos from "./Cursos";
import CCRs from "./CCRs";


axios.defaults.baseURL = "http://localhost:3010/";
axios.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8";

function App() {
    const [listaHorariocc, setListaHorariocc] = useState([]);
    const [listaHorarioVescc, setlistaHorarioVescc] = useState([]);
    const [listaHorario3cc, setlistaHorario3cc] = useState([]);
    const [listaHorario4cc, setlistaHorario4cc] = useState([]);
    const [listaHorario5cc, setlistaHorario5cc] = useState([]);
    const [listaHorario6cc, setlistaHorario6cc] = useState([]);
    const [listaHorario7cc, setlistaHorario7cc] = useState([]);
    const [listaHorario8cc, setlistaHorario8cc] = useState([]);
    const [listaHorario9cc, setlistaHorario9cc] = useState([]);
    const [listaHorario1Geo, setListaHorario1Geo] = useState([]);
    const [listaHorario2Geo, setListaHorario2Geo] = useState([]);
    const [listaHorario3Geo, setListaHorario3Geo] = useState([]);
    const [listaHorario4Geo, setListaHorario4Geo] = useState([]);
    const [listaHorario5Geo, setListaHorario5Geo] = useState([]);



    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario1cc");
                setListaHorariocc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario2cc");
                setlistaHorarioVescc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario3cc");
                setlistaHorario3cc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);
    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario4cc");
                setlistaHorario4cc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario5cc");
                setlistaHorario5cc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario6cc");
                setlistaHorario6cc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario7cc");
                setlistaHorario7cc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario8cc");
                setlistaHorario8cc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario9cc");
                setlistaHorario9cc(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario1Geo");
                setListaHorario1Geo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario2Geo");
                setListaHorario2Geo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario3Geo");
                setListaHorario3Geo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario4Geo");
                setListaHorario4Geo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    useEffect(() => {
        async function fetchHorario() {
            try {
                const response = await axios.get("/horario5Geo");
                setListaHorario5Geo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHorario();
    }, []);

    return (
        <div className="container-lg">
            <div className="row">
                <div className="col">
                <div className='logo'>
                 <img src="logo-uffs.jpg" alt='LOGO UFFS'/>
                </div>
                <h1>UNIVERSIDADE FEDERAL DA FRONTEIRA SUL</h1>
                </div>
            <ButtonComponent /> <br />
            <Cursos />
            <CCRs />
            <br />
            <Titulo mensagem={"Ciência da Computação"} />
            <br />
            <Titulo mensagem2={"Horário"} />
            <Tablehorario horario1cc={listaHorariocc} 
            horario2cc={listaHorarioVescc} 
            horario3cc={listaHorario3cc} 
            horario4cc={listaHorario4cc} 
            horario5cc={listaHorario5cc}
            horario6cc={listaHorario6cc} 
            horario7cc={listaHorario7cc} 
            horario8cc={listaHorario8cc} 
            horario9cc={listaHorario9cc} 
            horario1Geo={listaHorario1Geo} 
            horario2Geo={listaHorario2Geo} 
            horario3Geo={listaHorario3Geo}
            horario4Geo={listaHorario4Geo} 
            horario5Geo={listaHorario5Geo} />
        </div>
        </div>
    );
}

export default App;
