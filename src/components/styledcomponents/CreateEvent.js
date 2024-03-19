import * as React from "react";
import styled from "styled-components";
import Banner from "./home/banner";
import Header from "./home/header";
import { useNavigate } from "react-router-dom";

function EventDashboard() {
    const navigate = useNavigate();
    return (
        <DashboardWrapper>
            <Header />
            <Banner />
            <EventsHeading>Meus eventos:</EventsHeading>
            <EventsSection onClick={() => navigate('/eventEdit')}>
                <CreateEventCard>
                    <EventPlaceholder />
                    <PlusIcon>+</PlusIcon>
                    <CreateEventText>Criar evento</CreateEventText>
                </CreateEventCard>
            </EventsSection>
            <SalesHeading>Fique por dentro de suas vendas</SalesHeading>
            <SalesSection>
                <div style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                    <SalesChartHeading>
                        Grafico de vendas:{" "}
                        <SalesChartError>
                            (error 145f = sem vendas)
                        </SalesChartError>
                    </SalesChartHeading>
                </div>
                <SalesChartWrapper>
                    {/* <SalesChart /> */}
                    <SalesAmount> Total Faturado:{" "} R$ 00,00</SalesAmount>
                </SalesChartWrapper>
            </SalesSection>
        </DashboardWrapper>
    );
}

const DashboardWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  color: #73a7b8;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: -0.32px;
  flex-grow: 1;
  margin: auto 0;
  font: 800 32px/100% Newsreader, sans-serif;
`;

const SearchBar = styled.div`
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
    flex-wrap: wrap;white-space: initial;
    padding: 0 20px;
  }
`;

const SearchIcon = styled.img`
  aspect-ratio: 2.44;
  object-fit: auto;
  object-position: center;
  width: 73px;
`;

const SearchText = styled.span`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const LocationWrapper = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 400;
  margin: auto 0;
`;

const Location = styled.span`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter, sans-serif;
  flex-grow: 1;
`;

const LocationIcon = styled.img`
  aspect-ratio: 0.72;
  object-fit: auto;
  object-position: center;
  width: 13px;
`;

const AccountButton = styled.button`
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

const HeroSection = styled.section`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #000;
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  line-height: 52px;
  justify-content: center;
  padding: 2px 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeroBackground = styled.div`
  display: flex;
  flex-direction: column;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nico Moji, sans-serif;
  position: relative;
  overflow: hidden;
  min-height: 260px;
  width: 100%;
  align-items: start;
  justify-content: center;
  padding: 32px 45px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroText = styled.h2`
  position: relative;
`;

const HeroTextHighlight = styled.span`
  font-size: 48px;
`;

const EventsHeading = styled.h2`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  font: 600 32px/130% Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const EventsSection = styled.section`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.31) 0%,
    rgba(255, 255, 255, 0.31) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-top: 6px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  color: #000;
  line-height: 130%;
  justify-content: center;
  padding: 13px 16px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const CreateEventCard = styled.div`
  border-radius: 24px;
  border: 2px solid rgba(230, 230, 230, 1);
  background-color: #fafaf5;
  display: flex;
  width: 150px;
  max-width: 100%;
  flex-direction: column;
  padding: 0 9px 18px;
`;

const EventPlaceholder = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.74) 0%,
    rgba(102, 102, 102, 0.74) 100%
  );
  border-radius: 50%;
  height: 119px;
`;

const PlusIcon = styled.span`
  font-feature-settings: "clig" off, "liga" off;
  align-self: center;
  margin-top: 22px;
  font: 400 48px Joti One, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const CreateEventText = styled.span`
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 18px;
  font: 600 20px Inter, sans-serif;
`;

const SalesHeading = styled.h2`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin-top: 6px;
  font: 600 32px/130% Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SalesSection = styled.section`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.31) 0%,
    rgba(255, 255, 255, 0.31) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: 600;
  text-align: center;
  padding: 23px 0 0 6px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SalesChartHeading = styled.h3`
  color: rgba(255, 0, 0, 0.72);
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font: 24px/31px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SalesChartError = styled.span`
  text-decoration: underline;
`;

const SalesChartWrapper = styled.div`
  display: flex;
  margin-top: 23px;
  gap: 0px;
  font-size: 32px;
  color: #000;
  line-height: 130%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const SalesChart = styled.div`
  border-radius: 35px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.3);
  width: 683px;
  max-width: 100%;
  height: 58px;
`;

const SalesAmount = styled.span`
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter, sans-serif;
  flex-grow: 1;
  flex-basis: auto;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default EventDashboard;