import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NoSsr from "@mui/base/NoSsr";

export default function Contact() {
  return (
    <NoSsr>
      <Box
        sx={{
          height: "100vh",
          padding: "0 24px",
          display: "flex",
          justifyContent: "center",
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.8169189275986!2d-68.53094858500387!3d-31.52918798136661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9681402627b47aa5%3A0x476cc0c541ab5e40!2sFolcode!5e0!3m2!1ses!2sar!4v1655217908049!5m2!1ses!2sar"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={12} xl={6}>
            <Grid
              container
              direction="row"
              justifyContent="start-flex"
              alignItems="center"
              spacing={2}
            >
              <h1>Permanezcamos en contacto!</h1>
              <Grid item xs={12} xl={8}>
                <TextField
                  fullWidth
                  id="outlined-textarea"
                  label="Nombre y Apellido"
                  placeholder="Nombre y Apellido"
                  multiline
                />
              </Grid>
              <Grid item xs={12} xl={8}>
                <TextField
                  fullWidth
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Email"
                  multiline
                />
              </Grid>
              <Grid item xs={12} xl={8}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Mensaje"
                  placeholder="Dejenos su mensaje"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} xl={8}>
                <Button variant="outlined">Enviar mensaje</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </NoSsr>
  );
}
