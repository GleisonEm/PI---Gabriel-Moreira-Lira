import * as React from "react";
import styled from "styled-components";
import Header from "./header";
import Categories from "./categories";
import Banner from "./banner";
import DivisionMostSearch from "./divisionMostSearch";
import MostSearchShows from "./mostSearchShows";
import Events from "./EventCard";
import EventList from "./EventList";
import ReSale from "./resale";

export default function Home() {
    return (<>
        <Header />
        <Categories />
        <Banner />
        <DivisionMostSearch/>
        <Events/>
        <ReSale/>
        <Events/>

        {/* <EventList/> */}
    </>);
}