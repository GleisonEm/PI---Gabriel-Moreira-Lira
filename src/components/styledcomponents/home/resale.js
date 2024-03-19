import * as React from "react";
import styled from "styled-components";

export default function ReSale() {
  return (
    <Div>
      <div style={{ flex: 1, flexDirection: 'row'}}>

        <Div2>Revenda de ingressos</Div2>
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Div2 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font: 32px/130% Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: start-end;
  margin-top: 23px;
  flex-grow: 1;
  flex-basis: auto;
  font: 15px/20px Inter, sans-serif;
`;

