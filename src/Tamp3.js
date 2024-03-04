import React from 'react';
import Section1 from './all section/Section1';
import Section2 from './all section/Section2';
import Section3 from './all section/Section3';
import Section4 from './all section/Section4';
import Section5 from './all section/Section5';
import Section6 from './all section/Section6';
import Section7 from './all section/Section7';
import Section8 from './all section/Section8';

const Tamp3 = () => {

    return (
        <div onScroll={(e) => {
            console.log(e);
            window.alert('test')
        }}
            style={{ width: '100%', height: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
            {/* <div style={{ height: window.innerHeight, width: window.innerWidth, position: 'fixed' }}> */}
            <Section1 />
            {/* </div> */}
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
        </div>
    )
}

export default Tamp3