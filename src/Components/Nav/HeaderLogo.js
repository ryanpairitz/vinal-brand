import { animated, useSpring, useTransition } from "@react-spring/web";
import { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderLogo = ({ height, scaleStyle, scrolled, config, transitionSettings }) => {
    const [resting, setResting] = useState(false);

    const fadeInStyle = useSpring({
        config: config,
        from: {
            opacity: 0,
            y: -1 * height
        },
        to: {
            opacity: 1,
            y: 0
        },
    });

    const transition = useTransition(!scrolled, {
        ...transitionSettings,
        onDestroyed: () => setResting(scrolled)
    });

    useLayoutEffect(() => {
        if (!scrolled) {
            setResting(false);
        }
    }, [scrolled]);

    return (
        <animated.svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox={resting ? "0 0 66.6423 166.5" : "0 0 168.1 166.5"} xmlSpace="preserve"
            className="logo-container"
            style={{ ...scaleStyle, marginRight: (resting && scrolled) && 0, transformOrigin: "top left" }}>
            <NavLink to="/">
                {/* need to wrap the elements within the link in image tag, so can click link anywhere within bounding box */}
                <image x="0.5" y="49.4" fill="none" width={resting ? "66.6423" : "167.1"} height="67.8" />
                <animated.g style={fadeInStyle}>
                    <linearGradient id="Record_00000150824845469820109140000010775386160064601255_" gradientUnits="userSpaceOnUse" x1="0.45" y1="92.3852" x2="49.95" y2="92.3852">
                        <stop offset="0" style={{ stopColor: "#E65845" }} />
                        <stop offset="7.831275e-02" style={{ stopColor: "#E54C4A" }} />
                        <stop offset="0.2647" style={{ stopColor: "#E23652" }} />
                        <stop offset="0.4668" style={{ stopColor: "#E02558" }} />
                        <stop offset="0.6943" style={{ stopColor: "#DF1C5C" }} />
                        <stop offset="1" style={{ stopColor: "#DF195D" }} />
                    </linearGradient>
                    <path id="Record_00000032617695803176698980000007482402446560551863_" fill="url(#Record_00000150824845469820109140000010775386160064601255_)" d="
	M29.7,92.4c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5S29.7,89.9,29.7,92.4z M25.3,79.3c7.2,0,13,5.9,13,13.1
	c0,2.4-0.6,4.6-1.7,6.5h12.5c0.6-2.1,0.9-4.2,0.9-6.5c0-13.6-11.1-24.7-24.7-24.7c0,0-0.1,0-0.1,0c-0.2,0-0.3,0.1-0.4,0.2
	s-0.1,0.3,0,0.4c0.3,0.4,0.5,0.9,0.5,1.4c0,0.5-0.2,1-0.5,1.4c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.4,0.5,0.9,0.5,1.4c0,0.5-0.2,1-0.5,1.4
	c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.4,0.7,0.5,1.1c0.1,0.5,0,1-0.3,1.5c-0.1,0.1-0.1,0.3,0,0.4C25,79.2,25.1,79.3,25.3,79.3z
	 M41.2,110.3c-0.5-0.1-0.9-0.3-1.2-0.7c-0.4-0.4-0.5-0.9-0.5-1.4c0-0.4-0.3-0.8-0.7-0.8c-0.5-0.1-1-0.3-1.3-0.7
	c-0.4-0.4-0.5-0.9-0.5-1.4c0-0.4-0.3-0.8-0.7-0.8c-0.5-0.1-1-0.3-1.3-0.7c-0.3-0.3-0.4-0.7-0.5-1.1c0-0.2-0.1-0.3-0.3-0.3
	c-0.1-0.1-0.3,0-0.4,0.1c-2.3,2-5.2,3.1-8.5,3.1c-7.2,0-13.1-5.9-13.1-13.1c0-4.6,2.4-8.7,6-11c0.1-0.1,0.2-0.2,0.2-0.4
	c0-0.2-0.1-0.3-0.2-0.4c-0.3-0.2-0.7-0.4-0.9-0.8c-0.3-0.5-0.4-1-0.3-1.5c0.1-0.4-0.2-0.8-0.6-0.9c-0.5-0.2-0.9-0.5-1.2-0.9
	c-0.3-0.5-0.4-1-0.3-1.5c0-0.4-0.2-0.8-0.6-0.9c-0.5-0.2-0.9-0.5-1.2-0.9c-0.3-0.4-0.4-0.9-0.3-1.4c0-0.2-0.1-0.3-0.2-0.4
	c-0.1-0.1-0.3-0.1-0.4,0c-7,4.4-11.6,12.1-11.6,20.9c0,13.6,11.1,24.8,24.8,24.7c6.2,0,11.9-2.3,16.2-6.1c0.1-0.1,0.2-0.3,0.1-0.4
	S41.4,110.4,41.2,110.3z"/>
                    <linearGradient id="Arm_00000140718003978109686400000018396780751670738059_" gradientUnits="userSpaceOnUse" x1="36.5468" y1="83.5687" x2="66.1923" y2="83.5687">
                        <stop offset="0" style={{ stopColor: "#E65845" }} />
                        <stop offset="1" style={{ stopColor: "#E33A51" }} />
                    </linearGradient>
                    <polygon id="Arm_00000132057304074018041590000007271749937287155842_" fill="url(#Arm_00000140718003978109686400000018396780751670738059_)" points="
	49.8,98.9 66.2,68.3 52.9,68.3 36.5,98.9 "/>
                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="66.0436" y1="74.4335" x2="167.5896" y2="74.4335">
                        <stop offset="0" style={{ stopColor: "#E33A51" }} />
                        <stop offset="0.3023" style={{ stopColor: "#E12957" }} />
                        <stop offset="0.6529" style={{ stopColor: "#DF1D5C" }} />
                        <stop offset="1" style={{ stopColor: "#DF195D" }} />
                    </linearGradient>
                </animated.g>
                {transition((style, content) => (
                    content &&
                    <animated.path style={style} fill="url(#SVGID_1_)" d="M66.8,98.9V68.3h11.8v30.6H66.8z M72.7,50.4c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7s6.7-3,6.7-6.7
                S76.4,50.4,72.7,50.4z M103.2,98.9H115V80.7c0-7.2-5.8-13.1-13.1-13.1c-3.4,0-6.4,0.9-8.7,2.4v-1.8l-11.8,0v30.6h11.8V82.2
                c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5V98.9z M155.8,49.4v49.5h11.8V49.4H155.8z M132.6,67.6c-8.8,0-15.9,7.1-15.9,15.9
                s7.1,15.9,15.9,15.9c3.7,0,7-1.3,8.5-3.3v2.6H153V68.3l-11.9,0v1.8C138.7,68.5,135.8,67.6,132.6,67.6z M141.8,83.6
                c0,3.7-3,6.7-6.7,6.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7C138.8,76.9,141.8,79.9,141.8,83.6z"/>
                ))}
                <image />
            </NavLink>
        </animated.svg>
    );
}

export default HeaderLogo;