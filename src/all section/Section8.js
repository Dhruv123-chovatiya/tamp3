import React from 'react';
import { Box, Container, Grid, TextField } from '@mui/material';
import { Fade } from 'react-reveal';

const Section8 = () => {
    return (
        <section id='eight' style={{ backgroundColor: '#f2f2f2', position: 'relative', display: 'flex' }}>
            <div id='text8'>
                <Container >
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ marginTop: '60px', marginBottom: '60px' }}>
                            <Grid container>
                                <Grid item md={6}>
                                    <Fade left delay={100}>
                                        <Box sx={{ border: '0px solid transparent', backgroundImage: 'linear-gradient(#e13690, #f97e83)' }}>
                                            <Box sx={{ padding: '30px 40px', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                                                <h2 style={{ color: 'white', fontSize: '3rem', lineHeight: '1.1', fontWeight: '600', marginTop: '0', marginBottom: '0' }}>Contact Us</h2>
                                                <h5 style={{ margin: '29px 0 0', color: 'white', fontSize: '1.25rem', lineHeight: '1.1', fontWeight: '600' }}>Any questions or remarks? Just write us a message!</h5>
                                                <Box sx={{ margin: '45px 0 0' }}>
                                                    <Box sx={{ minHeight: '425px' }}>
                                                        <Grid container>
                                                            <Grid item md={12}>
                                                                <Box sx={{ textAlign: 'left', border: 'solid', borderColor: 'white', borderLeftWidth: '0', borderBottomWidth: '0', borderRightWidth: '0', position: 'relative' }}>
                                                                    <Box sx={{ padding: '10px 10px 10px 0', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                                                        <h6 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '0', marginBottom: '0', color: 'white' }}> Sydney </h6>
                                                                        <h5 style={{ margin: '29px 0 0', color: 'white' }}> 45 Pirrama Rd, Pyrmont NSW 2022 </h5>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item md={12}>
                                                                <Box sx={{ textAlign: 'left', border: 'solid', borderColor: 'white', borderLeftWidth: '0', borderBottomWidth: '0', borderRightWidth: '0' }}>
                                                                    <Box sx={{ padding: '10px 10px 10px 0', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                                                        <h6 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '0', marginBottom: '0', color: 'white' }}> Melbourne </h6>
                                                                        <h5 style={{ margin: '29px 0 0', color: 'white' }}> 163 Collins St, Melbourne VIC 3000</h5>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item md={12}>
                                                                <Box sx={{ textAlign: 'left', border: 'solid', borderColor: 'white', borderLeftWidth: '0', borderBottomWidth: '0', borderRightWidth: '0' }}>
                                                                    <Box sx={{ padding: '10px 10px 10px 0', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                                                        <h6 style={{ fontSize: '1.25rem', fontWeight: '700', marginTop: '0', marginBottom: '0', color: 'white' }}> Los Angeles </h6>
                                                                        <h5 style={{ margin: '29px 0 0', color: 'white' }}> 340 Main St, Venice CA 902291, USA </h5>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Fade>
                                </Grid>
                                <Grid item md={6}>
                                    <Fade right delay={100}>
                                        <Box sx={{ border: '0px solid transparent', backgroundColor: 'white', textAlign: 'left', flexDirection: 'column' }}>
                                            <Box sx={{ padding: '30px 40px', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column', position: 'relative', flex: '1', transitionDuration: 'inherit' }}>
                                                <h4 style={{ fontSize: '2.25rem', margin: '0 auto 0 0', lineHeight: '1.2', fontWeight: '600' }}>Get in Touch</h4>
                                                <p style={{ fontSize: '1.25rem', fontWeight: '400', margin: '20px 0 0', lineHeight: '1.5' }}>Have an inquiry or some feedbak for us? Fill out the form below to contact our team.</p>
                                                <Box sx={{ marginTop: '33px', marginBottom: '0' }}>
                                                    <Box sx={{ marginBottom: '28px' }}>
                                                        <label htmlFor=""> Name </label>
                                                        <TextField
                                                            id="standard-required"
                                                            defaultValue=""
                                                            variant="standard"
                                                            sx={{ height: '55px', padding: '10px 12px', width: '13cm' }}
                                                        />
                                                    </Box>
                                                    <Box sx={{ marginBottom: '28px' }}>
                                                        <label htmlFor=""> Email </label>
                                                        <TextField
                                                            id="standard-required"
                                                            defaultValue=""
                                                            variant="standard"
                                                            sx={{ height: '55px', padding: '10px 12px', width: '13cm' }}
                                                        />
                                                    </Box>
                                                    <Box sx={{ marginBottom: '28px' }}>
                                                        <label htmlFor=""> How can we help? </label>
                                                        <TextField
                                                            id="standard-required"
                                                            defaultValue=""
                                                            variant="standard"
                                                            sx={{ height: '3cm', padding: '10px 12px', width: '13cm' }}
                                                        />
                                                    </Box>
                                                    <Box sx={{ backgroundColor: '#e13690', fontWeight: '700', padding: '14px 0 15px', color: 'white', borderRadius: '20px', marginTop: '20px' }}>
                                                        <a style={{ padding: '6cm', color: 'white' }} href='happy'> SUBMIT </a>
                                                    </Box>
                                                </Box>
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
}

export default Section8