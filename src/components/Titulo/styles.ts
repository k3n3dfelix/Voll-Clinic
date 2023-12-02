import styled from "styled-components";


interface Props {
  imagem?: string;
  children?: React.ReactNode;
}

export const SpanEstilizado = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.imagem ? `url(${props.imagem})` : "none"};
`;

export const TituloEstilizado = styled.h2`
  color: var(--azul-claro);
`;

export const ContainerEstilizado = styled.div`
  display: flex;
  align-items: center;
`;