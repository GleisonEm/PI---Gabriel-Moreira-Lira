import * as React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Header from "./home/header";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Div>
      <Header />
      <Div10>
        <Div11>
          <Div12>Entrar com o Google</Div12>
          <Div13>
            Digite seu E-mail no campo abaixo:
            <span style={{ color: '#ff5555' }}>*</span>
          </Div13>
          <Div14 />
          <Div15>Esqueci meu E-mail</Div15>
          <Div16>
            Digite sua senha no campo abaixo:
            <span style={{ color: '#ff5555' }}>*</span>
          </Div16>
          <Div17 />
          <Div18>Esqueci minha senha</Div18>
          <Div19>Entrar</Div19>
        </Div11>
        <Div20>OU</Div20>
        <Div21>Crie sua conta gratuitamente!</Div21>
        <Div22 onClick={() => navigate('/register')}>Cadastre-se</Div22>
        <Div23>
          Ao se cadastrar, você concorda com nossos Termos , Política de dados e
          Política de cookies.
        </Div23>
      </Div10>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  padding-bottom: 32px;
  flex-direction: column;
  line-height: 130%;
`;

const Div2 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  color: #000;
  white-space: nowrap;
  padding: 17px 61px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const Div4 = styled.div`
  color: #73a7b8;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: -0.32px;
  align-self: stretch;
  flex-grow: 1;
  margin: auto 0;
  font: 800 32px/100% Newsreader, sans-serif;
`;

const Div5 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  align-self: stretch;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  font-weight: 600;
  text-align: center;
  padding: 17px 22px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 2.44;
  object-fit: auto;
  object-position: center;
  width: 73px;
`;

const Div6 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div7 = styled.div`
  align-self: stretch;
  display: flex;
  gap: 10px;
  font-weight: 400;
  text-align: center;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  flex-grow: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 0.72;
  object-fit: auto;
  object-position: center;
  width: 13px;
`;

const Div9 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  align-self: start;
  font-weight: 400;
  text-align: center;
  padding: 17px 43px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div10 = styled.div`
  border-radius: 35px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.3);
  align-self: center;
  display: flex;
  margin-top: 32px;
  width: 642px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding: 29px 20px;
`;

const Div11 = styled.div`
  display: flex;
  width: 436px;
  max-width: 100%;
  flex-direction: column;
  color: #000;
`;

const Div12 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  font-weight: 400;
  white-space: nowrap;
  padding: 16px 60px;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div13 = styled.div`
  color: #f00;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 45px;
  font: 16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div14 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(115, 167, 184, 0.5);
  height: 48px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  align-self: end;
  margin-top: 10px;
  white-space: nowrap;
  font: 12px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div16 = styled.div`
  color: #f00;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 13px;
  font: 16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(115, 167, 184, 0.5);
  margin-top: 4px;
  height: 48px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div18 = styled.div`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  align-self: end;
  margin-top: 8px;
  white-space: nowrap;
  font: 12px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  margin-top: 19px;
  font-weight: 400;
  white-space: nowrap;
  padding: 18px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div20 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter, sans-serif;
  line-height: 26px;
  align-self: stretch;
  margin-top: 15px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div21 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: stretch;
  margin-top: 25px;
  font: 32px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div22 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  margin-top: 39px;
  width: 434px;
  max-width: 100%;
  color: #000;
  font-weight: 400;
  white-space: nowrap;
  padding: 18px 60px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div23 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 32px;
  font: 12px/16px Inter, sans-serif;
`;


