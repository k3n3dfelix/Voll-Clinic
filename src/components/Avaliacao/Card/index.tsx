import IProfissional from "../../../types/IProfissional";
import { Rating } from "@mui/material";

import {
  ContainerEstilizado,
  ListaEstilizada,
  ItemEstilizado,
  ImagemEstilizada,
  ItemInformacoesEstilizado,
  ParagrafoNomeEstilizado,
  ParagrafoEstilizado,
} from "./styles";

function Card({ profissional }: { profissional: IProfissional }) {
  return (
    <ContainerEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <ImagemEstilizada
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
        </ItemEstilizado>
        <ItemInformacoesEstilizado>
          <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
          <ParagrafoEstilizado>
            {profissional.especialidade}
          </ParagrafoEstilizado>
        </ItemInformacoesEstilizado>
        <ItemEstilizado>
          <Rating name="simple-controlled" value={3.4} readOnly={true} />
        </ItemEstilizado>
      </ListaEstilizada>
    </ContainerEstilizado>
  );
}

export default Card;
