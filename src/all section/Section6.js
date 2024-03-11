import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Section6 = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    return (
        <section id='six' style={{ color: 'white', backgroundColor: '#1a1a1a' }}>
            <div id='text6'>
                <Container>
                    <Box sx={{ position: 'relative', margin: '0 auto', marginTop: '4.5cm' }}>
                        <Box sx={{ marginTop: '60px' }}>
                            <Grid container>
                                <Grid item md={6}>
                                    <Box sx={{ padding: '30px 30px 29px', position: 'relative', transitionDuration: 'inherit' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                <Grid item xs={6}>
                                                    <Box sx={{ background: `url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/7c81ccf9e85057f6be185aaf/46c4bb3d-c46b-8792-6fa7-a8099501f9e4.jpg)`, borderRadius: '20px', textAlign: 'center', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover' }}>
                                                        <Box sx={{ padding: '30px 10px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                            <ScrollTrigger onEnter={() => setCount1(50)}>
                                                                <CountUp start={0} end={count1} duration={2}>
                                                                    {({ countUpRef }) => (
                                                                        <h3 ref={countUpRef} style={{ fontSize: '4.5rem', fontWeight: '700', textShadow: '2px 2px 23px rgba(0,0,0,0.35)', margin: '0' }}>50k</h3>
                                                                    )}
                                                                </CountUp>
                                                            </ScrollTrigger>
                                                            <h6 style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)', margin: '20px 0 0', fontWeight: '600', fontSize: '1.2rem' }}> happy customers </h6>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Box sx={{ background: `url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/016b9503eb2156eb9d5b7512/867d5c5e-264f-ba2a-9890-d0e837b58c8b.jpg)`, borderRadius: '20px', textAlign: 'center', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover' }}>
                                                        <Box sx={{ padding: '30px 10px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                            <ScrollTrigger onEnter={() => setCount2(60)}>
                                                                <CountUp start={0} end={count2} duration={2}>
                                                                    {({ countUpRef }) => (
                                                                        <h3 ref={countUpRef} style={{ fontSize: '4.5rem', fontWeight: '700', textShadow: '2px 2px 23px rgba(0,0,0,0.35)', margin: '0' }}>60%</h3>
                                                                    )}
                                                                </CountUp>
                                                            </ScrollTrigger>
                                                            <h6 style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)', margin: '20px 0 0', fontWeight: '600', fontSize: '1.2rem' }}> Sample Headline </h6>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Box sx={{ background: `url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/2aa5df4a7eab57e198607637/66.jpg)`, borderRadius: '20px', textAlign: 'center', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover' }}>
                                                        <Box sx={{ padding: '30px 10px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                            <ScrollTrigger onEnter={() => setCount3(100)}>
                                                                <CountUp start={0} end={count3} duration={2}>
                                                                    {({ countUpRef }) => (
                                                                        <h3 ref={countUpRef} style={{ fontSize: '4.5rem', fontWeight: '700', textShadow: '2px 2px 23px rgba(0,0,0,0.35)', margin: '0' }}>100</h3>
                                                                    )}
                                                                </CountUp>
                                                            </ScrollTrigger>
                                                            <h6 style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)', margin: '20px 0 0', fontWeight: '600', fontSize: '1.2rem' }}> our courses </h6>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Box sx={{ background: `url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0a0ffea732c55ae8aae86c89/fa697d4c-bbff-e31e-390c-05d828d2138f.jpg)`, borderRadius: '20px', textAlign: 'center', objectFit: 'cover', verticalAlign: 'middle', backgroundSize: 'cover' }}>
                                                        <Box sx={{ padding: '30px 10px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                            <ScrollTrigger onEnter={() => setCount4(1200)}>
                                                                <CountUp start={0} end={count4} duration={2}>
                                                                    {({ countUpRef }) => (
                                                                        <h3 ref={countUpRef} style={{ fontSize: '4.5rem', fontWeight: '700', textShadow: '2px 2px 23px rgba(0,0,0,0.35)', margin: '0' }}>1230</h3>
                                                                    )}
                                                                </CountUp>
                                                            </ScrollTrigger>
                                                            <h6 style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)', margin: '20px 0 0', fontWeight: '600', fontSize: '1.2rem' }}> learners worldwide </h6>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sx={{ minHeight: '446px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box sx={{ textAlign: 'left', minHeight: '446px', display: 'flex' }}>

                                        <Box sx={{ padding: '30px', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                                            <h3 style={{ fontWeight: '400', marginBottom: '0', marginTop: '0', fontSize: '2.25rem' }}>The highest quality online courses from institutions</h3>
                                            <p style={{ margin: '20px 0 0 ' }}>Sample text. Click to select the Text Element.</p>
                                            <a style={{ letterSpacing: '1px', fontWeight: '600', backgroundImage: 'linear-gradient(to right, #f97e83, #e13690)', margin: '41px auto 0 0', padding: '18px 57px 19px', borderRadius: '50px', color: 'white' }} href='happy'> Learn more </a>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>

        </section>
    )
}

export default Section6