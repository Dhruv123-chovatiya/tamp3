import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import { Fade, Flip } from 'react-reveal';
import { Tilt } from 'react-tilt';

const Section1 = () => {

    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 500,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    return (
        <section style={{ backgroundColor: 'black', color: 'white', top: 0, left: 0, right: 0, textAlign: 'center', display: 'flex', zIndex: 1000 }}>
            <Container>
                <Box sx={{ minHeight: '739px', position: 'relative' }}>
                    <Box sx={{ marginTop: '60px', marginBottom: '0' }}>
                        <Grid container spacing={5}>
                            <Grid item md={6}>
                                <Box sx={{ border: '0px solid transparent ', minHeight: '679px', position: 'relative', display: 'flex' }}>
                                    <Box sx={{ padding: '130px 50px 30px 30px', justifyContent: 'flex-start', position: 'relative', transitionDuration: 'inherit' }}>
                                        <Fade left delay={800}>
                                            <Typography sx={{ fontSize: '3.75rem', margin: '0 auto 0 0', textAlign: 'left', lineHeight: '1.1', fontWeight: '600', color: '#e13690' }}>Online School</Typography>
                                        </Fade>
                                        <Fade left delay={1400}>
                                            <Typography sx={{ lineHeight: '1.8', fontSize: '1.125rem', fontStyle: 'none', margin: '30px 0 0', fontFamily: 'sans-serif', textAlign: 'left' }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</Typography>
                                        </Fade>
                                        <Fade left delay={1800}>
                                            <Typography sx={{ textAlign: 'left', margin: '30px auto 0 0' }}> Images from </Typography>
                                        </Fade>
                                        <Flip bottom duration={2000}>
                                            <Box sx={{ display: 'flex' }}>
                                                <a style={{ letterSpacing: '1px', fontWeight: '600', backgroundImage: 'linear-gradient(to right, #f97e83, #e13690)', margin: '41px auto 0 0', padding: '18px 57px 19px', borderRadius: '50px', color: 'white', textAlign: 'left' }} href='link' > Learn more </a>
                                            </Box>
                                        </Flip>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Tilt op tions={defaultOptions}>
                                    <Box sx={{ border: '0px solid transparent', minHeight: '679px', textAlign: 'center', position: 'relative', display: 'flex' }}>
                                        <Box sx={{ padding: '0', justifyContent: 'center', position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                            <Box sx={{ background: `url("https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/22e81c593339560aa8499637/jj.jpg")`, width: 'inherit', height: '525px', backgroundPosition: '50% 50%', margin: '0 auto', borderRadius: '70%', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover', overflow: 'hidden' }}>
                                                <Box sx={{ padding: '0', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', position: 'relative', flex: '1', maxWidth: '100%', transitionDuration: 'inherit' }}>
                                                    <img src="	https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/40e8e9c179ff526591487090/5555-min.png" alt="happy" style={{ height: '610px', width: 'inherit', margin: '-85px auto 0', overflow: 'hidden', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', display: 'flex', position: 'relative' }} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Tilt>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </section>
    )
};

export default Section1