import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Hero from "../Hero/Hero";
import PricesGrid from "../PricesGrid/PricesGrid";
// import Plan from "../Plan/Plan";


function PricingContent() {
  return (
    <React.Fragment>
      
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      
      {/* HERO */}
      <Hero/>
      
      {/* PRICES GRID */}
      <PricesGrid/>

    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
