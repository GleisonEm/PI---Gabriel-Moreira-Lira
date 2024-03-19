import React from "react";
import styled from "styled-components";

const EventCard = ({ imageUrl, eventName, eventLocation, eventPrice }) => {
  return (
    <EventCardWrapper>
      <EventImage src={imageUrl} alt={eventName} loading="lazy" />
      <EventName>{eventName}</EventName>
      <EventLocation>{eventLocation}</EventLocation>
      <EventPrice>{eventPrice}</EventPrice>
    </EventCardWrapper>
  );
};

const EventCardWrapper = styled.article`
  border-radius: 24px;
  border: 2px solid rgba(230, 230, 230, 1);
  background-color: #fafaf5;
  display: flex;
  max-width: 150px;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  line-height: 130%;
  padding: 0 9px 22px;
`;

const EventImage = styled.img`
  aspect-ratio: 1.01;
  object-fit: cover;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const EventName = styled.h3`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 13px Inter, sans-serif;
`;

const EventLocation = styled.p`
  color: #6d6d6d;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 7px;
  font: 400 10px/150% Inter, sans-serif;
`;

const EventPrice = styled.span`
  color: #426b1f;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 6px;
  font: 20px Inter, sans-serif;
`;

const EventList = () => {
  const events = [
    {
      imageUrl: "https://example.com/image1.jpg",
      eventName: "Twenty one pilots",
      eventLocation: "SESC, Campinas",
      eventPrice: "R$850,00",
    },
    {
      imageUrl: "https://example.com/image2.jpg",
      eventName: "Foo Fighters",
      eventLocation: "Madison Square Garden, NYC",
      eventPrice: "$120.00",
    },
    // Add more event objects as needed
  ];

  return (
    <main>
      {events.map((event, index) => (
        <EventCard
          key={index}
          imageUrl={event.imageUrl}
          eventName={event.eventName}
          eventLocation={event.eventLocation}
          eventPrice={event.eventPrice}
        />
      ))}
    </main>
  );
};

export default EventList;