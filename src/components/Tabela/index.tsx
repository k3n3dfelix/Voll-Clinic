
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IConsulta from "../../types/IConsulta";

import {CelulaEstilizada, LinhaEstilizada} from './styles';


function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <CelulaEstilizada>Data</CelulaEstilizada>
                            <CelulaEstilizada>Horário</CelulaEstilizada>
                            <CelulaEstilizada>Profissional</CelulaEstilizada>
                            <CelulaEstilizada>Especialidade</CelulaEstilizada>
                            <CelulaEstilizada>Paciente</CelulaEstilizada>
                            <CelulaEstilizada>Modalidade</CelulaEstilizada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                                <LinhaEstilizada>
                                    <CelulaEstilizada component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.horario}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.profissional[0].nome}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.profissional[0].especialidade}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.paciente}</CelulaEstilizada>
                                    <CelulaEstilizada>{linha.modalidade}</CelulaEstilizada>
                                </LinhaEstilizada>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;