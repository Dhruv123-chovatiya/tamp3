import React, { useEffect, useRef, useState } from 'react';

const ScrollButton = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [autoScroll, setAutoScroll] = useState(true);

    const handleTogglePlayPause = () => {
        setIsPlaying(!isPlaying);
        setAutoScroll(!autoScroll);
    };

    const calcScrollValue = () => {
        const scrollProgress = document.getElementById('progress');
        const pos = document.documentElement.scrollTop;
        const calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrollValue = Math.round((pos * 100) / calcHeight);

        if (pos > 100) {
            scrollProgress.style.display = 'grid';
        } else {
            scrollProgress.style.display = 'none';
        }
        scrollProgress.style.background = `conic-gradient( #F77884 ${scrollValue}%, #9ca3af ${scrollValue}%)`;
        scrollProgress.style.zIndex = 1000;
    };

    const handleScrollTop = () => {
        const scrollToTop = () => {
            const currentPosition = window.scrollY;
            if (currentPosition > 0) {
                window.scrollTo(0, currentPosition - 80);
                requestAnimationFrame(scrollToTop);
            }
        };

        scrollToTop();
    };

    const handleScroll = () => {
        const elements = [
            { text: 'text1', section: 'one' },
            { text: 'text2', section: 'two' },
            { text: 'text3', section: 'three' },
            { text: 'text4', section: 'four' },
            { text: 'text5', section: 'five' },
            { text: 'text6', section: 'six' },
            { text: 'text7', section: 'seven' },
            { text: 'text8', section: 'eight' }
        ];

        elements.forEach(({ text, section }) => {
            const element = document.getElementById(text);
            const anchor = document.getElementById(section);

            if (element && anchor) {
                element.style.position = window.pageYOffset > anchor.offsetTop ? 'fixed' : 'absolute';
            }
        });
    };

    const sectionsRef = useRef([
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'
    ]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        const delay = 3000;
        let index = 0;
        let autoScrollInterval;

        const autoScrollFunction = () => {
            const targetSection = document.getElementById(sectionsRef.current[index]);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth',
                });
            }

            index++;

            if (index === sectionsRef.current.length) {
                index = 0;
            }
        };

        if (autoScroll) {
            autoScrollInterval = setInterval(autoScrollFunction, delay);
        }

        setTimeout(() => {
            document.body.classList.remove('no-scroll-temp');
        }, delay);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(autoScrollInterval);
        };
    }, [autoScroll]);


    useEffect(() => {
        window.addEventListener('scroll', calcScrollValue);
        window.addEventListener('load', calcScrollValue);

        return () => {
            window.removeEventListener('scroll', calcScrollValue);
            window.removeEventListener('load', calcScrollValue);
        };
    }, []);

    return (
        <>
            <div id="progress" onClick={handleTogglePlayPause}>
                <div className="progress-value">
                    {isPlaying ? (
                        <i className="fa-solid fa-pause" style={{ color: 'white' }} onClick={handleTogglePlayPause}></i>
                    ) : (
                        <i className="fa-solid fa-play" style={{ color: 'white' }} onClick={handleTogglePlayPause}></i>
                    )}
                </div>
            </div>
        </>
    );
};

export default ScrollButton;

