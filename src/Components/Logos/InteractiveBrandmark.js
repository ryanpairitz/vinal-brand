import { SwatchSettings } from "./Swatches";

const InteractiveBrandmark = ({ activeSwatch, className }) => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 597.5 521" enableBackground="new 0 0 597.5 521" xmlSpace="preserve" preserveAspectRatio="xMidYMid meet"
            style={{
                background: SwatchSettings[activeSwatch].background
            }}
            className={className}>
            <linearGradient id="Record_00000013915962544155604240000017118119248121686153_" gradientUnits="userSpaceOnUse" x1="144.0164" y1="260.4999" x2="377.0164" y2="260.4999">
                {SwatchSettings[activeSwatch].recordStops.map((stop, index) => {
                    return (
                        <stop key={index} offset={stop.offset} style={stop.style} />
                    );
                })}
            </linearGradient>
            <path id="Record_00000003806852627237787910000014454791411788977304_" fill="url(#Record_00000013915962544155604240000017118119248121686153_)" d="
   M281.5,260.5c0,11.6-9.4,21-21,21c-11.6,0-21-9.4-21-21c0-11.6,9.4-21,21-21C272.1,239.5,281.5,248.9,281.5,260.5z M260.8,199
   c33.8,0.1,61.3,27.7,61.3,61.5c0,11.1-3,21.5-8.1,30.5H373c2.6-9.7,4-20,4-30.5c0-64.2-52.3-116.5-116.5-116.5c-0.2,0-0.4,0-0.6,0
   c-0.8,0-1.5,0.4-1.8,1.1c-0.3,0.7-0.2,1.5,0.2,2.1c1.4,1.8,2.2,4,2.2,6.5c0,2.5-0.9,4.9-2.4,6.7c-1.2,1.5-1.2,3.6,0,5.1
   c1.5,1.8,2.4,4.1,2.4,6.7c0,2.5-0.9,4.9-2.4,6.7c-1.2,1.5-1.2,3.6,0,5.1c1.2,1.4,2,3.2,2.3,5.1c0.4,2.5-0.2,4.9-1.4,6.9
   c-0.4,0.6-0.4,1.4,0,2C259.4,198.6,260,199,260.8,199z M336,344.9c-2.2-0.5-4.3-1.6-5.8-3.4c-1.7-1.9-2.5-4.3-2.5-6.6
   c0-1.9-1.4-3.5-3.3-3.9c-2.3-0.4-4.5-1.6-6.2-3.5c-1.7-1.9-2.5-4.3-2.5-6.6c0-1.9-1.4-3.5-3.3-3.9c-2.3-0.4-4.5-1.6-6.2-3.5
   c-1.3-1.5-2.1-3.2-2.4-5c-0.1-0.7-0.6-1.3-1.3-1.5s-1.4-0.1-2,0.4c-10.7,9.2-24.7,14.7-39.9,14.7c-33.9,0-61.5-27.6-61.5-61.5
   c0-21.7,11.3-40.8,28.3-51.8c0.6-0.4,1-1.1,0.9-1.8c0-0.7-0.5-1.4-1.1-1.7c-1.6-0.8-3.1-2.1-4.1-3.7c-1.4-2.1-1.9-4.6-1.6-6.9
   c0.2-1.9-0.9-3.7-2.7-4.3c-2.2-0.7-4.3-2.2-5.6-4.4c-1.4-2.1-1.9-4.6-1.6-6.9c0.2-1.9-0.9-3.7-2.7-4.3c-2.2-0.7-4.2-2.2-5.6-4.3
   c-1.3-2-1.8-4.4-1.6-6.6c0.1-0.8-0.3-1.5-0.9-1.9c-0.6-0.4-1.5-0.4-2.1,0C165.8,182.6,144,219,144,260.5
   c0,64.2,52.3,116.5,116.5,116.5c29.2,0,55.9-10.8,76.4-28.6c0.6-0.5,0.8-1.3,0.6-2C337.3,345.6,336.7,345.1,336,344.9z"/>
            <linearGradient id="Arm_00000133516070909506254600000015711291802699635379_" gradientUnits="userSpaceOnUse" x1="313.9265" y1="218.9999" x2="453.47" y2="218.9999">
                {/* <stop offset="0" style="stop-color:#E65845" />
                <stop offset="1" style="stop-color:#E33A51" /> */}
                {SwatchSettings[activeSwatch].armStops.map((stop, index) => {
                    return (
                        <stop key={index} offset={stop.offset} style={stop.style} />
                    );
                })}
            </linearGradient>
            <polygon id="Arm_00000048490721858649253370000011640023737188445605_" fill="url(#Arm_00000133516070909506254600000015711291802699635379_)" points="
   376.3,291 453.5,147 391.1,147 313.9,291 "/>
        </svg>
    );
};

export default InteractiveBrandmark;