import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';



export default function SimpleContainer() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box sx={{
                backgroundColor: '#FFBF00',
                height: '40vh',
                padding: '30px 24px 0 24px',
                display: 'flex',
                justifyContent: 'flex-start',

            }} >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>

                    <Grid item xs={12} xl={3}>
                        <img src='/nike-brand.png' 
                        layout='fill' 
                        style={{ width: '60px', }} 
                        sx={{ 
                            display: { xs: 'flex', md: 'none' }, 
                            mr: 1, }} />
                        <p>Just... do it!</p>
                    </Grid>

                    <Grid item xs={12} xl={3}>
                        <h1>Links de interes</h1>
                    </Grid>

                    <Grid item xs={12} xl={3}>
                        <h1>xl3</h1>
                    </Grid>

                    <Grid item xs={12} xl={3}>
                        <h1>xl3</h1>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}