
import IProfissional from "../../types/IProfissional";
import Botao from "../Botao";
import Card from "./Card";

import {SecaoCard} from './styles';

function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
    return (
        <>
            <SecaoCard>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SecaoCard>
            <Botao>Ver mais</Botao>
        </>
    )
}

export default Avaliacao;