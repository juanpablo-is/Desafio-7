import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';



export default function SimpleContainer() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box sx={{
                backgroundImage: 'url("nike-logo.png")',
                layout: 'fill',
                objectFit: 'contain',
                height: '90vh',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'center',

            }} >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Grid item xs={12} xl={6}>
                        <h1>xs6</h1>
                    </Grid>
                    <Grid item xs={12} xl={6}>
                        <img src="hero_img.webp" className='img-responsive' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}