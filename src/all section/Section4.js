import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Fade, Flip } from 'react-reveal';

const Section4 = () => {
    return (
        <section id='four' style={{ color: 'black', backgroundColor: 'white', position: 'relative' }}>
            <div id='text4'>
                <Container>
                    <Box sx={{ minHeight: '586px' }}>
                        <Box sx={{ marginTop: '3cm', marginBottom: '0' }}>
                            <Box sx={{ boxSizing: 'border-box' }}>
                                <Grid container>
                                    <Grid item md={7}>
                                        <Box sx={{ minHeight: '586px', position: 'relative', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                            <Box sx={{ flexDirection: 'column', color: '#e13690 ' }}>
                                                <Flip bottom duration={2000}>
                                                    <h2 style={{ fontSize: '3rem' }}> For every student, <br />every classroom. <br />Real results </h2>
                                                </Flip>
                                                <Fade left delay={800}>
                                                    <p style={{ lineHeight: '1.8', fontSize: '1.125rem', fontStyle: 'normal', margin: '30px 0 0', color: 'black' }}> <b>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</b> </p>
                                                </Fade>
                                                <Fade left delay={800}>
                                                    <Box sx={{ color: 'black', fontSize: '1.125rem', margin: '30px auto 0 0 ' }}>
                                                        image from <a style={{ color: 'black' }} href="https://www.freepik.com/photos/woman"> Freepik</a>
                                                    </Box>
                                                </Fade>
                                                <Box sx={{ margin: '30px auto 0 0', minHeight: '98px' }}>
                                                    <Flip bottom duration={2000}>
                                                        <Grid item md={4} >
                                                            <Box sx={{ padding: '10px 10px 10px 0' }}>
                                                                <Box sx={{
                                                                    letterSpacing: '1px',
                                                                    fontWeight: 600,
                                                                    backgroundImage: 'linear-gradient(to right, #f97e83, #e13690)',
                                                                    padding: '16px 42px 16px 66px',
                                                                    textAlign: 'left',
                                                                    borderRadius: '50px',
                                                                    margin: '0 auto 0 0'
                                                                }}> <a style={{ color: 'white', fontStyle: 'none' }} href='happy'> Learners </a> </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Flip>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={5} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Box sx={{ padding: '30px' }}>
                                                <Box sx={{ background: `url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/499374d6f5295d4a8f9d3947/jhjhjh.jpg)`, width: '415px', height: '415px', objectFit: 'cover', display: 'block', verticalAlign: 'middle', backgroundSize: "cover", borderRadius: '50%' }}>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>

        </section>
    )
}

export default Section4