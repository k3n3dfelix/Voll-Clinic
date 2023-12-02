import whatsapp from "./assets/whatsapp.png";
import instagram from "./assets/instagram.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";

import { RodapeEstilizado, ListaEstilizada, ItemEstilizado } from "./styles";

function Rodape() {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="#">
            <img src={facebook} alt="logo do facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={whatsapp} alt="logo do whatsapp" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={google} alt="logo do google" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={instagram} alt="logo do instagram" />
          </a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>
        2023 © Desenvolvido por Kened Felix.
      </p>
    </RodapeEstilizado>
  );
}

export default Rodape;
