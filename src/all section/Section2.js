import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';

const Section2 = () => {


    return (
        <section id='two' style={{ backgroundImage: 'linear-gradient(to right, #e13690, #f97e83)', textAlign: 'center', position: 'relative' }}>
            <div id='text2'>
                <Container>
                    <Box sx={{ flexDirection: 'column', position: 'relative', margin: '0 auto' }}>
                        <Grid container>
                            <Grid item md={12} sm={12}>
                                <Zoom>
                                    <Typography variant='h1' sx={{ margin: '60px auto 0', fontSize: '3rem', lineHeight: '1.1', fontWeight: '600', color: 'white' }}>Start learning from <br />the world’s best institutions</Typography>
                                </Zoom>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={4} sm={12} sx={{ gap: '15px', display: 'grid' }}>
                                <Box sx={{ pointerEvents: 'initial', marginTop: '54px', marginBottom: '0', display: 'flex', flexDirection: 'column', width: '100% !important', marginLeft: '0 !important', marginRight: '0 !important' }}>
                                    <Box sx={{ display: 'flex', position: 'relative', textAlign: 'left', boxSizing: 'border-box' }}>
                                        <Fade left delay={100}>
                                            <Box sx={{ padding: '30px 10px', position: 'relative', flex: '1', maxWidth: '100%', transitionDuration: 'inherit' }}>
                                                <h3 style={{ fontSize: '3.75rem', fontWeight: '700', margin: '0 auto 0 0', color: 'white', wordWrap: 'break-word', position: 'relative' }}>01</h3>
                                                <h5 style={{ fontWeight: '700', fontSize: '1.25rem', margin: '-48px 0 0 107px', color: 'white' }}>Marketing</h5>
                                                <p style={{ fontStyle: 'italic', fontWeight: '500', margin: '48px 0 0', color: 'white', lineHeight: '1.5rem' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                                            </Box>
                                        </Fade>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} sx={{ gap: '15px', display: 'grid' }}>
                                <Box sx={{ pointerEvents: 'initial', marginTop: '54px', marginBottom: '0', display: 'flex', flexDirection: 'column', width: '100% !important', marginLeft: '0 !important', marginRight: '0 !important' }}>
                                    <Box sx={{ display: 'flex', position: 'relative', textAlign: 'left', boxSizing: 'border-box' }}>
                                        <Fade left delay={400}>
                                            <Box sx={{ padding: '30px 10px', position: 'relative', flex: '1', maxWidth: '100%', transitionDuration: 'inherit' }}>
                                                <h3 style={{ fontSize: '3.75rem', fontWeight: '700', margin: '0 auto 0 0', color: 'white', wordWrap: 'break-word', position: 'relative' }}>02</h3>
                                                <h5 style={{ fontWeight: '700', fontSize: '1.25rem', margin: '-48px 0 0 107px', color: 'white' }}>
                                                    Web Design</h5>
                                                <p style={{ fontStyle: 'italic', fontWeight: '500', margin: '48px 0 0', color: 'white', lineHeight: '1.5rem' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                                            </Box>
                                        </Fade>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} sx={{ gap: '15px', display: 'grid' }}>
                                <Box sx={{ pointerEvents: 'initial', marginTop: '54px', marginBottom: '0', display: 'flex', flexDirection: 'column', width: '100% !important', marginLeft: '0 !important', marginRight: '0 !important' }}>
                                    <Box sx={{ display: 'flex', position: 'relative', textAlign: 'left', boxSizing: 'border-box' }}>
                                        <Fade left delay={700}>
                                            <Box sx={{ padding: '30px 10px', position: 'relative', flex: '1', maxWidth: '100%', transitionDuration: 'inherit' }}>
                                                <h3 style={{ fontSize: '3.75rem', fontWeight: '700', margin: '0 auto 0 0', color: 'white', wordWrap: 'break-word', position: 'relative' }}>03</h3>
                                                <h5 style={{ fontWeight: '700', fontSize: '1.25rem', margin: '-48px 0 0 107px', color: 'white' }}>
                                                    Exel Course</h5>
                                                <p style={{ fontStyle: 'italic', fontWeight: '500', margin: '48px 0 0', color: 'white', lineHeight: '1.5rem' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                                            </Box>
                                        </Fade>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} sx={{ gap: 'px', display: 'grid' }}>
                                <Box sx={{ pointerEvents: 'initial', marginTop: '54px', marginBottom: '0', display: 'flex', flexDirection: 'column', width: '100% !important', marginLeft: '0 !important', marginRight: '0 !important' }}>
                                    <Box sx={{ display: 'flex', position: 'relative', textAlign: 'left', boxSizing: 'border-box' }}>
                                        <Fade right delay={100}>
                                            <Box sx={{ padding: '30px 10px', position: 'relative', flex: '1', maxWidth: '100%', transitionDuration: 'inherit' }}>
                                                <h3 style={{ fontSize: '3.75rem', fontWeight: '700', margin: '0 auto 0 0', color: 'white', wordWrap: 'break-word', position: 'relative' }}>04</h3>
                                                <h5 style={{ fontWeight: '700', fontSize: '1.25rem', margin: '-48px 0 0 107px', color: 'white' }}>
                                                    Branding</h5>
                                                <p style={{ fontStyle: 'italic', fontWeight: '500', margin: '48px 0 0', color: 'white', lineHeight: '1.5rem' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                                            </Box>
                                        </Fade>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} sx={{ gap: '15px', display: 'grid' }}>
                                <Box sx={{ pointerEvents: 'initial', marginTop: '54px', marginBottom: '0', flexDirection: 'column', width: '100% !important', marginLeft: '0 !important', marginRight: '0 !important' }}>
                                    <Box sx={{ display: 'flex', position: 'relative', textAlign: 'left', boxSizing: 'border-box' }}>
                                        <Fade right delay={400}>
                                            <Box sx={{ padding: '30px 10px', position: 'relative', flex: '1', maxWidth: '100%', transitionDuration: 'inherit' }}>
                                                <h3 style={{ fontSize: '3.75rem', fontWeight: '700', margin: '0 auto 0 0', color: 'white', wordWrap: 'break-word', position: 'relative' }}>05</h3>
                                                <h5 style={{ fontWeight: '700', fontSize: '1.25rem', margin: '-48px 0 0 107px', color: 'white' }}>
                                                    Leadership</h5>
                                                <p style={{ fontStyle: 'italic', fontWeight: '500', margin: '48px 0 0', color: 'white', lineHeight: '1.5rem' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                                            </Box>
                                        </Fade>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} sx={{ gap: '15px', display: 'grid' }}>
                                <Box sx={{ pointerEvents: 'initial', marginTop: '54px', marginBottom: '0', flexDirection: 'column', width: '100% !important', marginLeft: '0 !important', marginRight: '0 !important' }}>
                                    <Box sx={{ display: 'flex', position: 'relative', textAlign: 'left', boxSizing: 'border-box' }}>
                                        <Fade right delay={700}>
                                            <Box sx={{ padding: '30px 10px', position: 'relative', flex: '1', maxWidth: '100%', transitionDuration: 'inherit' }}>
                                                <h3 style={{ fontSize: '3.75rem', fontWeight: '700', margin: '0 auto 0 0', color: 'white', wordWrap: 'break-word', position: 'relative' }}>06</h3>
                                                <h5 style={{ fontWeight: '700', fontSize: '1.25rem', margin: '-48px 0 0 107px', color: 'white' }}>
                                                    Python Basics</h5>
                                                <p style={{ fontStyle: 'italic', fontWeight: '500', margin: '48px 0 0', color: 'white', lineHeight: '1.5rem' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                                            </Box>
                                        </Fade>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ color: 'white', fontSize: '1.125rem', width: '465px', margin: '45px auto 60px' }}>
                        image from <a style={{ color: 'white' }} href="https://www.freepik.com/photos/woman"> Freepik</a>
                    </Box>
                </Container>

            </div>
        </section>

    );
};

export default Section2