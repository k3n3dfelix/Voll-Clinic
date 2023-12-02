import styled from "@emotion/styled";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const CelulaEstilizada = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
      color: "var(--azul-escuro)",
      fontSize: 18,
      fontWeight: 700,
      fontFamily: "var(--fonte-principal)"
  },
  [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontFamily: "var(--fonte-principal)"
  }
}))

export const LinhaEstilizada = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
      backgroundColor: "var(--cinza-claro)",
      align: "right"
  }
}))