import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { green } from "@mui/material/colors";

const colunas1 =[
    { field: "Hora", headerName: "Hora", width: 90 },
    { field: "Segunda", headerName: "Segunda", width: 180 },
    { field: "Terca", headerName: "Terca", width: 180 },
    { field: "Quarta", headerName: "Quarta", width: 180 },
    { field: "Quinta", headerName: "Quinta", width: 180 },
    { field: "Sexta", headerName: "Sexta", width: 180 },
    { field: "Sabado", headerName: "Sabado", width: 180 },
];


function Tablehorario(props) {
    return (
        <>
        <div>
            <div>
                <p>1 Semestre Noturno</p>
                <DataGrid rows={props.horario1cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}  
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>2 Semestre vespertino</p>
                <DataGrid rows={props.horario2cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora}
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }} 
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>3 Semestre Noturno</p>
                <DataGrid rows={props.horario3cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>4 Semestre vespertino</p>
                <DataGrid rows={props.horario4cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>5 Semestre Noturno</p>
                <DataGrid rows={props.horario5cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>6 Semestre vespertino</p>
                <DataGrid rows={props.horario6cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>7 Semestre Noturno</p>
                <DataGrid rows={props.horario7cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>8 Semestre vespertino</p>
                <DataGrid rows={props.horario8cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>9 Semestre Noturno</p>
                <DataGrid rows={props.horario9cc} 
                columns={colunas1} 
                getRowId={(row) => row.Hora}
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }} 
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <h2>Geografia</h2>
                <p>Horário</p>
                <p>1 Semestre Noturno</p>
                <DataGrid rows={props.horario1Geo} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>3 Semestre Noturno</p>
                <DataGrid rows={props.horario2Geo} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>5 Semestre Noturno</p>
                <DataGrid rows={props.horario3Geo} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>7 Semestre Noturno</p>
                <DataGrid rows={props.horario4Geo} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 7 },},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />

            <div>
                <p>9 Semestre Noturno</p>
                <DataGrid rows={props.horario5Geo} 
                columns={colunas1} 
                getRowId={(row) => row.Hora} 
                initialState={{ 
                    pagination: {paginationModel: { page: 0, pageSize: 6},},
            }}
            pageSizeOptions={[6, 10]}
            checkboxSelection
            />
            </div> <br /> <br />
        </div>
        </>
    );
}
export default Tablehorario;

