import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';

const Section3 = () => {
    return (
        <section id='three' style={{ color: 'white', backgroundColor: 'black', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div id='text3' style={{ justifyContent: 'center' }}>
                <Container >
                    <Box sx={{ justifyContent: 'center', flexDirection: 'column', position: 'relative', margin: '0 auto', marginTop: '3cm' }}>
                        <Zoom>
                            <h2 style={{ fontSize: '3.75rem', fontWeight: '700', margin: '60px auto 0', textAlign: 'center' }}>Pathways for your advancement</h2>
                        </Zoom>
                        <Box sx={{ marginTop: '48px', marginBottom: '0', marginLeft: '0 !important', marginRight: '0 !important' }}>
                            <Grid container spacing={3}>
                                <Grid item md={4} >
                                    <Fade bottom delay={600}>
                                        <Box sx={{ background: `url('https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6a30d53b14a551b9a027229a/sdsd.jpg')`, borderRadius: '20px', textAlign: 'left', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                            <Box sx={{ padding: '34px 22px', justifyContent: 'flex-end' }}>
                                                <h4 style={{ fontWeight: '700', fontSize: '1.875rem', margin: '0', color: 'black', lineHeight: '1.2' }}> <b> Executive <br /> Education</b></h4>
                                                <Box sx={{ transformOrigin: 'left center', margin: '24px auto 0 0', borderWidth: '0.5px', borderStyle: 'solid', color: 'black' }}></Box>
                                                <p style={{ lineHeight: '2', fontWeight: '500', margin: '172px 0 0', color: 'black' }}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                            </Box>
                                        </Box>
                                    </Fade>
                                </Grid>
                                <Grid item md={4}>
                                    <Fade bottom delay={800}>
                                        <Box sx={{ background: `url('https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/d3dbe8176ae2547f93db7651/ww.jpg')`, borderRadius: '20px', textAlign: 'left', objectFit: 'cover', verticalAlign: 'middle', height: 'inherit', backgroundSize: 'cover' }}>
                                            <Box sx={{ padding: '34px 22px', justifyContent: 'flex-end' }}>
                                                <h4 style={{ fontWeight: '700', fontSize: '1.875rem', margin: '0', color: 'black', lineHeight: '1.2' }}> <b> Executive <br /> Education</b></h4>
                                                <Box sx={{ transformOrigin: 'left center', margin: '24px auto 0 0', borderWidth: '0.5px', borderStyle: 'solid', color: 'black' }}></Box>
                                                <p style={{ lineHeight: '2', fontWeight: '500', margin: '172px 0 0', color: 'black' }}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                            </Box>
                                        </Box>
                                    </Fade>
                                </Grid>
                                <Grid item md={4} >
                                    <Fade bottom delay={1000}>
                                        <Box sx={{ background: `url('https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8ed7181ea87f5edfabf0776a/qq.jpg')`, borderRadius: '20px', textAlign: 'left', objectFit: 'cover', verticalAlign: 'middle', height: 'inherit', backgroundSize: 'cover' }}>
                                            <Box sx={{ padding: '34px 22px', justifyContent: 'flex-end' }}>
                                                <h4 style={{ fontWeight: '700', fontSize: '1.875rem', margin: '0', color: 'black', lineHeight: '1.2' }}> <b> Executive <br /> Education</b></h4>
                                                <Box sx={{ transformOrigin: 'left center', margin: '24px auto 0 0', borderWidth: '0.5px', borderStyle: 'solid', color: 'black' }}></Box>
                                                <p style={{ lineHeight: '2', fontWeight: '500', margin: '172px 0 0', color: 'black' }}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                            </Box>
                                        </Box>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>

        </section>

    )
};

export default Section3