import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Bounce, Fade } from 'react-reveal';

const Section5 = () => {
    return (
        <section style={{ backgroundImage: 'linear-gradient(to right, #e13690, #f97e83)', textAlign: "center", position: 'relative', display: 'block' }}>
            <Container>
                <Grid container>
                    <Grid item md={12}>
                        <Bounce>
                            <h1 style={{ margin: '60px auto 0', fontSize: '3rem', lineHeight: '1.1', fontWeight: '600', color: 'white' }}>Free Online Courses</h1>
                            <p style={{ fontSize: '1.125rem', fontWeight: '500', margin: '20px auto 0', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Bounce>
                    </Grid>
                </Grid>
                <Box sx={{ minHeight: '843px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <Box sx={{ margin: '61px 0 0' }}>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <Fade left delay={100}>
                                    <Box sx={{ boxShadow: '5px 5px 20px 0 rgba(0,0,0,0.2)', borderRadius: '20px', display: 'flex', position: 'relative', backgroundColor: 'white' }}>
                                        <Box sx={{ padding: '20px 20px 30px', display: 'flex', flexDirection: 'column', transitionDuration: 'inherit' }}>
                                            <img style={{ height: '335px', marginTop: '0', marginBottom: '0', overflow: 'hidden', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', borderRadius: '20px' }} src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/430ed8cbf8605a37b2976928/fg.jpg" alt="" />
                                            <h5 style={{ fontSize: '1.5rem', margin: '20px 0 0', lineHeight: '1.1' }}>Arts & Humanities</h5>
                                            <p style={{ fontStyle: 'italic', margin: '20px 0 0', wordWrap: 'break-word' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            <a style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', margin: '20px auto 0', padding: '0' }} href="link"> MORE </a>
                                        </Box>
                                    </Box>
                                </Fade>
                            </Grid>
                            <Grid item md={4}>
                                <Fade bottom delay={400}>
                                    <Box sx={{ boxShadow: '5px 5px 20px 0 rgba(0,0,0,0.2)', borderRadius: '20px', display: 'flex', position: 'relative', backgroundColor: 'white' }}>
                                        <Box sx={{ padding: '20px 20px 30px', display: 'flex', flexDirection: 'column', transitionDuration: 'inherit' }}>
                                            <img style={{ height: '335px', marginTop: '0', marginBottom: '0', overflow: 'hidden', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', borderRadius: '20px' }} src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c9b01d014b6b5dbd9110f30f/22.jpg" alt="" />
                                            <h5 style={{ fontSize: '1.5rem', margin: '20px 0 0', lineHeight: '1.1' }}>Health & Medicine</h5>
                                            <p style={{ fontStyle: 'italic', margin: '20px 0 0', wordWrap: 'break-word' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            <a style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', margin: '20px auto 0', padding: '0' }} href="link"> MORE </a>
                                        </Box>
                                    </Box>
                                </Fade>
                            </Grid>
                            <Grid item md={4}>
                                <Fade right delay={100}>
                                    <Box sx={{ boxShadow: '5px 5px 20px 0 rgba(0,0,0,0.2)', borderRadius: '20px', display: 'flex', position: 'relative', backgroundColor: 'white' }}>
                                        <Box sx={{ padding: '20px 20px 30px', display: 'flex', flexDirection: 'column', transitionDuration: 'inherit' }}>
                                            <img style={{ height: '335px', marginTop: '0', marginBottom: '0', overflow: 'hidden', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', borderRadius: '20px' }} src="	https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/41806e7233ed50d093b9b44b/fgfgg.jpg" alt="" />
                                            <h5 style={{ fontSize: '1.5rem', margin: '20px 0 0', lineHeight: '1.1' }}>Engineering</h5>
                                            <p style={{ fontStyle: 'italic', margin: '20px 0 0', wordWrap: 'break-word' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            <a style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', margin: '20px auto 0', padding: '0' }} href="link"> MORE </a>
                                        </Box>
                                    </Box>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </section>
    )
}

export default Section5