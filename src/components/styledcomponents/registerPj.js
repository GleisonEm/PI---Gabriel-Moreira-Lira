import * as React from "react";
import styled from "styled-components";
import Header from "./home/header";
import { useNavigate } from 'react-router-dom';

export default function RegisterCnpj() {
    const navigate = useNavigate();
    return (
        <Div>
            <Header />
            <Div10>
                <Div11>Preencha os campos a seguir para cadastrar-se</Div11>
                <Div12>
                    <Div13>
                        <Column>
                            <Div14>
                                <Div15>
                                    Nome da empresa:<span style={{ color: '#ff5555' }}>*</span>
                                </Div15>
                                <Div16 />
                                <Div17>
                                    E-mail:<span style={{ color: '#ff5555' }}>*</span>
                                </Div17>
                                <Div18 />
                                <Div19>
                                    Senha:<span style={{ color: '#ff5555' }}>*</span>
                                </Div19>
                                <Div20>
                                    Sua senha deve possuir pelo menos oito caracteres, incluindo
                                    letras maiúsculas e minúsculas, números e caracteres
                                    especiais.
                                </Div20>
                                <Div21>
                                    Confirme sua senha:
                                    <span style={{ color: '#ff5555' }}>*</span>
                                </Div21>
                                <Div22 />
                            </Div14>

                            <Div29 onClick={() => navigate('/createEvent')}>Cadastre-se</Div29>
                        </Column>
                        <Column2>
                            <Div23>
                                <Div24>
                                    CNPJ:<span style={{ color: '#ff5555' }}>*</span>
                                </Div24>
                                <Div22 />
                                <Div25>
                                    Bem-vindo à plataforma &quot;Begs&quot; - seu parceiro ideal
                                    para promover eventos de forma eficiente e acessível! Nossa
                                    missão é simplificar o processo de organização de eventos para
                                    empresas como a sua.
                                </Div25>
                            </Div23>
                        </Column2>
                    </Div13>
                </Div12>
            </Div10>
        </Div>
    );
}

const Div29 = styled.div`
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

const Div = styled.div`
  display: flex;
  padding-bottom: 80px;
  flex-direction: column;
`;

const Div2 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  gap: 20px;
  font-size: 16px;
  color: #000;
  line-height: 130%;
  padding: 17px 61px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  color: #73a7b8;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: -0.32px;
  flex-grow: 1;
  margin: auto 0;
  font: 800 32px/100% Newsreader, sans-serif;
`;

const Div4 = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div5 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  display: flex;
  align-items: start;
  gap: 20px;
  font-weight: 600;
  white-space: nowrap;
  flex-grow: 1;
  flex-basis: auto;
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
  display: flex;
  gap: 10px;
  font-weight: 400;
  margin: auto 0;
`;

const Div8 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  flex-grow: 1;
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
  white-space: nowrap;
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
  margin-top: 43px;
  width: 100%;
  max-width: 897px;
  flex-direction: column;
  padding: 15px 24px 45px 59px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div11 = styled.div`
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font: 600 32px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div12 = styled.div`
  margin-top: 17px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div13 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div14 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #f00;
  font-weight: 600;
  text-align: center;
  line-height: 130%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 8px;
  }
`;

const Div15 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div16 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  margin-top: 15px;
  height: 48px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  margin-top: 17px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div18 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  margin-top: 18px;
  height: 48px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div19 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  margin-top: 17px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div20 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  margin-top: 18px;
  color: #000;
  padding: 11px 21px;
  font: 12px/16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div21 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  margin-top: 17px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div22 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #73a7b8;
  margin-top: 18px;
  height: 48px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div23 = styled.div`
  display: flex;
  margin-top: 5px;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 13px;
  }
`;

const Div24 = styled.div`
  color: #f00;
  text-align: start;
  font-feature-settings: "clig" off, "liga" off;
  align-self: start;
  margin-left: 53px;
  font: 600 16px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div25 = styled.div`
  color: #fff;
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 33px;
  font: 400 23px/30px Nico Moji, sans-serif;
`;
