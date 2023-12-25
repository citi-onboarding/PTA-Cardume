import React from "react";
import { HomeContainer } from "./style";
import {Section1and2, Navbar, Section3, Section4 ,Footer} from "../components";

export default function Home() {
  return (
  <>
    <Navbar />
     <Section1and2/> 
      <Section3 />
      <Section4 />
    <Footer />
  </>
  )
} 