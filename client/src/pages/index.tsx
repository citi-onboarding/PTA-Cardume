import React from "react";
import { HomeContainer } from "./style";
import { LogoCITi } from "../assets";
import { Section1, Navbar } from "../components"

export default function Home() {
  return (
    <HomeContainer>
     <Navbar />
     <Section1/>
    </HomeContainer>
  
  );
}