import avaliacao from "./assets/avaliacao.png";
import grafico from "./assets/grafico.png";
import consulta from "./assets/consulta.png";


import { ContainerEstilizado, SpanEstilizado, TituloEstilizado} from './styles';

interface Props {
  imagem?: string;
  children?: React.ReactNode;
}

interface IImagens {
  avaliacao: string;
  grafico: string;
  consulta: string;
}

function Titulo({ imagem, children }: Props) {
  const listaDeImagens: IImagens = {
    avaliacao: avaliacao,
    grafico: grafico,
    consulta: consulta,
  };

  return (
    <ContainerEstilizado>
      {imagem && (
        <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />
      )}
      <TituloEstilizado>{children}</TituloEstilizado>
    </ContainerEstilizado>
  );
}

export default Titulo;
