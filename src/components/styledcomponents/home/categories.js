import * as React from "react";
import styled from "styled-components";

export default function Categories() {
  return (
    <Box>
      <Div>Blues</Div>
      <Div2>Rock</Div2>
      <Div3>Pop</Div3>
      <Div4>Jazz</Div4>
      <Div5>Rap</Div5>
      <Div6>Metal</Div6>
      <Div7>Folk</Div7>
      <Div8>Indie</Div8>
      <Div9>Reggae</Div9>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  line-height: 130%;
  margin: 19px 22px 0;
  @media (max-width: 991px) {
    margin-right: 10px;
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const Div = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 14px 30px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 14px 32px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 13px 36px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div4 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 14px 33px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div5 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 13px 36px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div6 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 14px 29px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div7 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 14px 35px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div8 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 14px 32px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div9 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  flex-grow: 1;
  padding: 13px 22px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

