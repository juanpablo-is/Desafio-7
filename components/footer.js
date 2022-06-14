import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import logoWeb from "../public/nike-brand.png";

export default function SimpleContainer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundColor: "#FFBF00",
          height: "40vh",
          padding: "30px 24px 0 24px",
          display: "flex",
          alignContent: "flex-start",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} xl={3}>
            <Image
              src={logoWeb}
              width={60}
              height={24}
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <p>Just... do it!</p>
          </Grid>

          <Grid item xs={12} xl={3}>
            <h1>Acceso rapido</h1>
            <ul className="quick-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/acerca">Acerca</a></li>
                <li>Productos</li>
                <li>Servicios</li>
            </ul>
          </Grid>

          <Grid item xs={12} xl={3}>
          <h1>Acceso rapido</h1>
            <ul className="account-links">
                <li>Mi cuenta</li>
                <li>Mis pedidos</li>
                <li>Mis pagos</li>
                <li>Salir</li>
            </ul>
          </Grid>

          <Grid item xs={12} xl={3}>
          <h1>Acceso rapido</h1>
            <ul className="social-links">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
                <li>LinkedIn</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
