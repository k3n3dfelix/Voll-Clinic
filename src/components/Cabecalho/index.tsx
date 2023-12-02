import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";

import { CabecalhoEstilizado, Container, LinkEstilizado } from "./styles";

function Cabecalho() {
  return (
    <CabecalhoEstilizado>
      <img src={logo} alt="logo da empresa Voll" />
      <Container>
        <img src={perfil} alt="imagem de perfil do usuário" />
        <LinkEstilizado href="#">Sair</LinkEstilizado>
      </Container>
    </CabecalhoEstilizado>
  );
}

export default Cabecalho;
