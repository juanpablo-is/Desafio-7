import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import HeroImg from "../public/hero_img.webp";

export default function SimpleContainer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundImage: 'url("nike-logo.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
          padding: "0 24px",
          display: "flex",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} xl={6}>
            <h1>xs6</h1>
          </Grid>
          <Grid item xs={12} xl={6}>
            <Image src={HeroImg} width="640" height="300" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
