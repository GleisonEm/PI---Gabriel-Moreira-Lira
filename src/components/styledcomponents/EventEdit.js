import * as React from "react";
import styled from "styled-components";
import Header from "./home/header";
import { useNavigate } from "react-router-dom";

export default function EventEdit() {
const navigate = useNavigate();
    return (
        <Div>
            <Header />
            <Div2>
                <Div3>
                    <Div4>
                        <Column>
                            <Div5 />
                        </Column>
                        <Column2>
                            <Div6>
                                <Div7>Clique nos campos em branco para editar!</Div7>
                                <Div8>(Nome da banda)</Div8>
                                <Div9>0 de seguidores</Div9>
                            </Div6>
                        </Column2>
                    </Div4>
                </Div3>
                <Div10 onClick={() => navigate('/')}>Ingressos</Div10>
            </Div2>
            <Div11>Evento Disponível</Div11>
            <Div12>Sobre o evento:</Div12>
            <Div13>
                <div style={{ marginTop: 10, flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                    <Div14>(Dia)</Div14>
                    <Div14>(Horário)</Div14>

                </div>


                <Div15>
                    <Div17>|</Div17>
                    <Div14>(Local)</Div14>
                    <Div16>(Adicionar local no mapa)</Div16>
                    <Img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bbeebbf833c3264d939236a83d042a3b96fe7d6073bfffef533ec7b39c0a33b?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
                    />
                    <Div17>|</Div17>
                    <Div18>(Nome da banda)</Div18>
                </Div15>
                <Div19 onClick={() => navigate('/paymentInstructions')}>Comprar</Div19>
            </Div13>
            <Div20>
                <Div21>
                    <Column3>
                        <Div22>Adicionar imagem</Div22>
                    </Column3>
                    <Column4>
                        <Div23>
                            <Div24>Adicionar descrição</Div24>
                            <Div25></Div25>
                        </Div23>
                    </Column4>
                    <Column5>
                        <Div26>Importar modelo</Div26>
                    </Column5>
                </Div21>
            </Div20>
        </Div>
    );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div2 = styled.div`
margin-top: 40px;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.74);
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 23px 72px 58px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
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
  width: 15%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  border-radius: 200px;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 114px;
  height: 93px;
  margin: 36px auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 85%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #fff;
  text-align: center;
  line-height: 130%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 31px;
  }
`;

const Div7 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  font-weight: 700;
  align-self: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nico Moji, sans-serif;
  font-weight: 400;
  align-self: start;
  text-decoration-line: underline;
  margin-top: 48px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div9 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  align-self: start;
  margin: 11px 0 0 78px;
  font: 600 15px Inter, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div10 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-decoration-line: underline;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #e6e6e6;
  align-self: end;
  margin-top: 68px;
  white-space: nowrap;
  text-align: center;
  padding: 15px 27px;
  font: 400 16px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div11 = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 21px;
  font: 700 36px/130% Inter, sans-serif;
`;

const Div12 = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 14px;
  font: 700 24px/130% Inter, sans-serif;
`;

const Div13 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  margin-top: 24px;
  width: 1029px;
  max-width: 100%;
  gap: 20px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 130%;
  padding: 0 33px 17px 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const Div14 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration-line: underline;
  flex-grow: 1;
  font: 20px/26px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 400;
  margin: auto 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div16 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-decoration-line: underline;
  align-self: stretch;
  flex-grow: 1;
  margin: auto 0;
  font: italic 16px Arimo Hebrew Subset Italic, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 0.72;
  object-fit: auto;
  object-position: center;
  width: 13px;
  align-self: stretch;
  margin: auto 0;
`;

const Div17 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 600 32px Inter, sans-serif;
`;

const Div18 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-decoration-line: underline;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 20px Nico Moji, sans-serif;
`;

const Div19 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fafaf5;
  align-self: start;
  margin-top: 15px;
  color: #000;
  white-space: nowrap;
  padding: 14px 17px;
  font: 16px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div20 = styled.div`
  border-radius: 35px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.74);
  margin-top: 38px;
  width: 100%;
  max-width: 1029px;
  padding: 42px 78px 5px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div21 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 37%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div22 = styled.div`
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  text-decoration-line: underline;
  font: 600 20px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 43%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div23 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #fff;
  text-align: center;
  line-height: 130%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div24 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-decoration-line: underline;
  align-self: start;
  margin-left: 11px;
  font: 600 20px Inter, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div25 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-decoration-line: underline;
  margin-top: 169px;
  font: 700 36px Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 21%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div26 = styled.div`
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  text-decoration-line: underline;
  font: 600 20px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;


