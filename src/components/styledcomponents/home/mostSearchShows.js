import * as React from "react";
import styled from "styled-components";

export default function MostSearchShows() {
  return (
    <Div>
      <Div2>
        <Img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
        />
        <Div3>Twenty one pilots</Div3>
        <Div4>SESC, Campinas</Div4>
        <Div5>R$850,00</Div5>
      </Div2>
      <Div6>
        <Img2
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
        />
        <Div7>Espaço Taal, Campinas</Div7>
        <Div8>R$700,00</Div8>
      </Div6>
      <Div9>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
        />
        <Div10>Tyler, the creator</Div10>
        <Div11>Multi Arena, Campinas</Div11>
        <Div12>R$450,00</Div12>
      </Div9>
      <Div13>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
        />
        <Div14>Beyoncé</Div14>
        <Div15>Laroc Club, Campinas</Div15>
        <Div16>R$900,00</Div16>
      </Div13>
      <Div17>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
        />
        <Div18>Lana Del Rey</Div18>
        <Div19>SESC, Campinas</Div19>
        <Div20>R$670,00</Div20>
      </Div17>
    </Div>
  );
}

const Div = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.31) 0%,
    rgba(255, 255, 255, 0.31) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
  padding: 13px 34px 13px 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    white-space: initial;
  }
`;

const Div2 = styled.div`
  border-radius: 24px;
  border-color: rgba(230, 230, 230, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fafaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  line-height: 130%;
  flex-grow: 1;
  flex-basis: 0%;
  flex: 1;
  padding: 0 9px 22px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.01;
  object-fit: auto;
  object-position: center;
  width: 134px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Div3 = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 13px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div4 = styled.div`
  color: #6d6d6d;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 7px;
  font: 400 10px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div5 = styled.div`
  color: #426b1f;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 6px;
  font: 20px Inter, sans-serif;
`;

const Div6 = styled.div`
  border-radius: 24px;
  border-color: rgba(230, 230, 230, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fafaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0%;
  flex: 1;
  padding: 0 4px 22px 9px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 0.92;
  object-fit: auto;
  object-position: center;
  width: 137px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Div7 = styled.div`
  color: #6d6d6d;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 6px;
  font: 400 10px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  color: #426b1f;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 6px;
  font: 600 20px/130% Inter, sans-serif;
`;

const Div9 = styled.div`
  border-radius: 24px;
  border-color: rgba(230, 230, 230, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fafaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  line-height: 130%;
  flex-grow: 1;
  flex-basis: 0%;
  flex: 1;
  padding: 0 9px 22px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 4px;
  font: 13px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  color: #6d6d6d;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 7px;
  font: 400 10px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div12 = styled.div`
  color: #426b1f;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 6px;
  font: 20px Inter, sans-serif;
`;

const Div13 = styled.div`
  border-radius: 24px;
  border-color: rgba(230, 230, 230, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fafaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  line-height: 130%;
  flex-grow: 1;
  flex-basis: 0%;
  flex: 1;
  padding: 0 9px 22px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div14 = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font: 13px Inter, sans-serif;
`;

const Div15 = styled.div`
  color: #6d6d6d;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 7px;
  font: 400 10px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div16 = styled.div`
  color: #426b1f;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 6px;
  font: 20px Inter, sans-serif;
`;

const Div17 = styled.div`
  border-radius: 24px;
  border-color: rgba(230, 230, 230, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fafaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  line-height: 130%;
  flex-grow: 1;
  flex-basis: 0%;
  flex: 1;
  padding: 0 9px 22px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div18 = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 4px;
  font: 13px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  color: #6d6d6d;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 7px;
  font: 400 10px/150% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div20 = styled.div`
  color: #426b1f;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 6px;
  font: 20px Inter, sans-serif;
`;


