import * as React from "react";
import styled from "styled-components";
import Header from "./home/header";

const EventDetails = [
  {
    id: 1,
    date: "08/05/2024",
    location: "Twenty one pilots",
    mapLink: "Abrir no google maps",
  },
];

const SongDetails = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3da4ad4dd9957e40fe272c1401436d43303875be17a8adf4b1a8867a45c4d808?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&",
    title: "Stressed out",
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3da4ad4dd9957e40fe272c1401436d43303875be17a8adf4b1a8867a45c4d808?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&",
    title: "Headens",
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd68534d6658b24240705ffe4c3ce4e8acb0a59860432ccfd0d6b8f48d2ca517?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&",
    title: "Ride",
  },
];

function EventPage2() {
  return (
    <PageWrapper>
        <Header />
      <HeroSection>
        <HeroBackground src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fa82116057a5cba6a0b14c0b0a0f00a247754ad39d7ea7124014cb249d28ddc?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="Event background" />
        <ArtistDetails>
          <ArtistImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/524d321caddbe056f36bb5a75292a043f6463c6e4d7fa26b1d821bca242adfda?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="Artist" />
          <ArtistInfo>
            <ArtistName>Twenty one pilots</ArtistName>
            <ArtistFollowers>4,325,014 de seguidores</ArtistFollowers>
          </ArtistInfo>
          <TicketsIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/852006a6d3be6e90a5cb567b080884b5be556e4efa0245fb07e92802f421c043?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="Tickets icon" />
        </ArtistDetails>
        <TicketsButton>Ingressos</TicketsButton>
      </HeroSection>
      <EventAvailability>Evento Disponível</EventAvailability>
      <EventDescription>Sobre o evento:</EventDescription>
      <EventDetailsSection>
        {EventDetails.map((event) => (
          <EventDetailsWrapper key={event.id}>
            <EventDate>{event.date}</EventDate>
            <EventLocationWrapper>
              <MapLink>
                <MapLinkText>{event.mapLink}</MapLinkText>
                <MapIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bbeebbf833c3264d939236a83d042a3b96fe7d6073bfffef533ec7b39c0a33b?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&" alt="Map icon" />
              </MapLink>
              <Separator>|</Separator>
              <EventLocation>{event.location}</EventLocation>
            </EventLocationWrapper>
            <BuyTicketsButton>Comprar</BuyTicketsButton>
          </EventDetailsWrapper>
        ))}
      </EventDetailsSection>
      <SongsSection>
        <SongsTitle>Fique por dentro das músicas que irá tocar!</SongsTitle>
        <SongsWrapper>
          {SongDetails.map((song) => (
            <SongDetailsDiv key={song.id}>
              <SongImage src={song.image} alt={`${song.title} song`} />
              <SongTitle>{song.title}</SongTitle>
            </SongDetailsDiv>
          ))}
          <StreamingInfo>
            <StreamingText>
              Ouça na sua plataforma de preferência algumas músicas do Twenty
              One Pilots
            </StreamingText>
          </StreamingInfo>
        </SongsWrapper>
      </SongsSection>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 210px;
  padding: 59px 72px;
  text-align: center;
  line-height: 130%;
  gap: 20px;
  overflow: hidden;
  margin-top: 40px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const HeroBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ArtistDetails = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const ArtistImage = styled.img`
  width: 114px;
  aspect-ratio: 1.22;
  object-fit: cover;
  object-position: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 100%;
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-top: 39px;
`;

const ArtistName = styled.h2`
  font: 400 24px Nico Moji, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
`;

const ArtistFollowers = styled.p`
  font: 600 15px Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  align-self: center;
  margin-top: 11px;
`;

const TicketsIcon = styled.img`
  width: 25px;
  aspect-ratio: 0.96;
  object-fit: contain;
  object-position: center;
  margin: auto 0;
`;

const TicketsButton = styled.button`
  position: relative;
  font: 400 16px Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  color: #000;
  background-color: rgba(217, 96, 92, 0.92);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px 28px;
  white-space: nowrap;
  align-self: flex-end;
  margin-top: 32px;
  justify-content: center;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const EventAvailability = styled.h2`
  font: 700 36px/130% Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  color: #000;
  text-align: center;
  margin-top: 21px;
`;

const EventDescription = styled.h3`
  font: 700 24px/130% Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  color: #000;
  text-align: center;
  margin-top: 14px;
`;

const EventDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1029px;
  margin-top: 24px;
  padding-right: 33px;
  gap: 20px;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const EventDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  padding: 15px 0 17px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const EventDate = styled.p`
  font: 600 20px/26px Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  flex-basis: auto;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const EventLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  line-height: 130%;
  flex-grow: 1;
  flex-basis: auto;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const MapLink = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 16px;
  font-weight: 400;
`;

const MapLinkText = styled.span`
  font: italic 400 16px Arimo Hebrew Subset, -apple-system, Roboto, Helvetica, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  text-decoration: underline;
  flex-grow: 1;
`;

const MapIcon = styled.img`
  width: 13px;
  aspect-ratio: 0.72;
  object-fit: contain;
  object-position: center;
`;

const Separator = styled.span`
  font: 600 32px Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
`;

const EventLocation = styled.p`
  font: 400 20px Nico Moji, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const BuyTicketsButton = styled.button`
  font: 600 16px Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  color: #000;
  background-color: #fafaf5;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 14px 17px;
  white-space: nowrap;
  align-self: stretch;
  justify-content: center;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SongsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1029px;
  margin-top: 38px;
  padding-top: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.74);
  border-radius: 35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SongsTitle = styled.h2`
  font: 700 24px/130% Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  text-align: center;
  align-self: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SongsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 24px;
  padding: 0 49px;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const SongDetailsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  line-height: 130%;
`;

const SongImage = styled.img`
  width: 49px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
`;

const SongTitle = styled.p`
  font: 400 20px Nico Moji, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const StreamingInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  gap: 20px;
    justify-conter: center;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const StreamingText = styled.p`
  font: 700 20px/26px Inter, sans-serif;
  font-feature-settings: "clig" off, "liga" off;
  text-align: center;

`;

export default EventPage2;