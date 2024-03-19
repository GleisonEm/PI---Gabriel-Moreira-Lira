import * as React from "react";
import styled from "styled-components";
import banner from "../../../assets/img/bannerClean.png";
export default function Banner() {
    return (
        <Div>
            <Div2>
                <Img
                    loading="lazy"
                    src={banner}
                />
                <DivText>
                    Os melhores <span>shows</span> você encontra
                    aqui!
                </DivText>
            </Div2>
        </Div>
    );
}

const Div = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #000;
  display: flex;
  margin-top: 19px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  line-height: 52px;
  padding: 2px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div2 = styled.div`
  disply: flex;
  flex-direction: column;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nico Moji, sans-serif;
  position: relative;
  overflow: hidden;
  min-height: 260px;
  width: 100%;
  justify-content: center;
  align-items: start;
  padding: 32px 45px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const DivText = styled.div`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #000;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  max-width: 345px;
  font: 400 40px/52px Nico Moji, sans-serif;
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
`;


