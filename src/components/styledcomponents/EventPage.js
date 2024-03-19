import * as React from "react";
import styled from "styled-components";
import Header from "./home/header";

export default function EventPage() {
    return (
        //   <DivContainer>


        //   </DivContainer>
        <DivContainer>
            <Header />
            <Div2>
                <Img
                    loading="lazy"
                    srcSet="..."
                />
                <Div3>
                    <Img2
                        loading="lazy"
                        srcSet="..."
                    />
                    <Div4>
                        <Div5>Twenty one pilots</Div5>
                        <Div6>4,325,014 de seguidores</Div6>
                    </Div4>
                    <Img3
                        loading="lazy"
                        srcSet="..."
                    />
                </Div3>
                <Div7>Ingressos</Div7>
            </Div2>
            <Div8>Evento Disponível</Div8>
            <Div9>Sobre o evento:</Div9>
            <Div10>
                <Div11>08/05/2024</Div11>
                <Div12>
                    <Div13>
                        <Div14>Abrir no google maps</Div14>
                        <Img4
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bbeebbf833c3264d939236a83d042a3b96fe7d6073bfffef533ec7b39c0a33b?"
                        />
                    </Div13>
                    <Div15>
                        <Div16>|</Div16>
                        <Div17>Twenty one pilots</Div17>
                    </Div15>
                    <Div18>Comprar</Div18>
                </Div12>
            </Div10>
            <Div19>
                <Div20>Fique por dentro das músicas que irá tocar!</Div20>
                <Div21>
                    <Div22>
                        <Img5
                            loading="lazy"
                            srcSet="..."
                        />
                        <Div23>Stressed out</Div23>
                    </Div22>
                    <Div24>
                        <Div25>
                            <Img6
                                loading="lazy"
                                srcSet="..."
                            />
                            <Div26>Headens</Div26>
                        </Div25>
                        <Div27>
                            <Div28>|</Div28>
                            <Div29>
                                Ouça na sua plataforma de preferência algumas músicas do Twenty
                                One Pilots
                            </Div29>
                        </Div27>
                    </Div24>
                    <Div30>
                        <Img7
                            loading="lazy"
                            srcSet="..."
                        />
                        <Div31>Ride</Div31>
                    </Div30>
                </Div21>
            </Div19>
        </DivContainer>
    );
}
const DivContainer = styled.div`
  display: flex;
  padding-bottom: 80px;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Div2 = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 210px;
  width: 100%;
  gap: 20px;
  text-align: center;
  line-height: 130%;
  justify-content: space-between;
  padding: 59px 72px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div3 = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  color: #fff;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1.22;
  object-fit: auto;
  object-position: center;
  width: 114px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 100%;
`;

const Div4 = styled.div`
  align-self: end;
  display: flex;
  margin-top: 39px;
  flex-direction: column;
`;

const Div5 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font: 400 24px Nico Moji, sans-serif;
`;

const Div6 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  align-self: center;
  margin-top: 11px;
  font: 600 15px Inter, sans-serif;
`;

const Img3 = styled.img`
  aspect-ratio: 0.96;
  object-fit: auto;
  object-position: center;
  width: 25px;
  margin: auto 0;
`;

const Div7 = styled.div`
  position: relative;
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(217, 96, 92, 0.92);
  align-self: end;
  margin-top: 32px;
  color: #000;
  white-space: nowrap;
  padding: 16px 28px;
  font: 400 16px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div8 = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 21px;
  font: 700 36px/130% Inter, sans-serif;
`;

const Div9 = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 14px;
  font: 700 24px/130% Inter, sans-serif;
`;

const Div10 = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  margin-top: 24px;
  width: 1029px;
  max-width: 100%;
  gap: 20px;
  color: #fff;
  text-align: center;
  padding: 0 33px 17px 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const Div11 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  flex-basis: auto;
  font: 600 20px/26px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div12 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 15px;
  align-items: center;
  gap: 17px;
  line-height: 130%;
  justify-content: space-between;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div13 = styled.div`
  align-self: stretch;
  display: flex;
  gap: 7px;
  font-size: 16px;
  font-weight: 400;
  margin: auto 0;
`;

const Div14 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Arimo Hebrew Subset Italic, -apple-system, Roboto, Helvetica,
    sans-serif;
  font-style: italic;
  text-decoration-line: underline;
  flex-grow: 1;
`;

const Img4 = styled.img`
  aspect-ratio: 0.72;
  object-fit: auto;
  object-position: center;
  width: 13px;
`;

const Div15 = styled.div`
  align-self: stretch;
  display: flex;
  gap: 7px;
  margin: auto 0;
`;

const Div16 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font: 600 32px Inter, sans-serif;
`;

const Div17 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 400 20px Nico Moji, sans-serif;
`;

const Div18 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fafaf5;
  align-self: stretch;
  color: #000;
  white-space: nowrap;
  padding: 14px 17px;
  font: 600 16px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  border-radius: 35px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.74);
  display: flex;
  margin-top: 38px;
  width: 100%;
  max-width: 1029px;
  padding-top: 30px;
  flex-direction: column;
  color: #fff;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div20 = styled.div`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: center;
  font: 700 24px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div21 = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  align-items: start;
  padding: 0 49px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div22 = styled.div`
  display: flex;
  gap: 6px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  line-height: 130%;
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 49px;
`;

const Div23 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nico Moji, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Div24 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 20px;
  width: 100%;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div25 = styled.div`
  display: flex;
  margin-top: 9px;
  gap: 8px;
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  line-height: 130%;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 49px;
`;

const Div26 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nico Moji, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Div27 = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div28 = styled.div`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin: auto 0;
  font: 600 32px/130% Inter, sans-serif;
`;

const Div29 = styled.div`
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  flex-grow: 1;
  flex-basis: auto;
  font: 700 20px/26px Inter, sans-serif;
`;

const Div30 = styled.div`
  display: flex;
  margin-top: 29px;
  gap: 8px;
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 130%;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img7 = styled.img`
  aspect-ratio: 1.22;
  object-fit: auto;
  object-position: center;
  width: 49px;
`;

const Div31 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nico Moji, sans-serif;
  align-self: start;
  margin-top: 19px;
`;
