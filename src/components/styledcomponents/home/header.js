import * as React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box>
      <Div>
        <Div2>Begs</Div2>
        <Div3>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/478dd149f3c93b3e12037f16b022ec021b0bcf26adcce825f78e799e8883fd28?"
          />
          <Div4>Pesquise</Div4>
        </Div3>
        <Div5>
          <Div6>Campinas, BR</Div6>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ab497a538a9d8dd790a2c83595e737163ece636d0dc462604845ae0f7fbf95?"
          />
        </Div5>
      </Div>
      <Div7 onClick={() => navigate('/login')}>Conta</Div7>
    </Box>
  );
}

const Box = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(115, 167, 184, 0.25);
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  color: #000;
  white-space: nowrap;
  line-height: 130%;
  padding: 17px 61px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div = styled.div`
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

const Div2 = styled.div`
  color: #73a7b8;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: -0.32px;
  align-self: stretch;
  flex-grow: 1;
  margin: auto 0;
  font: 800 32px/100% Newsreader, sans-serif;
`;

const Div3 = styled.div`
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

const Div4 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div5 = styled.div`
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

const Div6 = styled.div`
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

const Div7 = styled.div`
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


