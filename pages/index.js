import Link from "next/link";
import React, { Component } from "react";
import "../static/semantic/dist/semantic.css";
import { Container, Header } from "semantic-ui-react";
import NavBar from "../components/navbar";
import ServiceBookings from "../components/booking-form";
const Index = () => (
  <div>
    <NavBar />

    <Container>
      <Header as="h1">Let Us Do Your Dirty Work</Header>
      <Header sub>Cleaning Services in London</Header>
      <Header as="h2" />
      <ServiceBookings />
    </Container>
  </div>
);

export default Index;
