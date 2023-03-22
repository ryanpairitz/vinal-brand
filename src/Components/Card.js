import { useState, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 34,
    (x - rect.left - rect.width / 2) / 34,
    1.0552,
]

const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({children}) => {
    const [hovering, setHovering] = useState(false);
    const cardRef = useRef(null)
    const config = {
        mass: 3.0,
        tension: 510,
        friction: 39,
    };

    const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1], config }), [config])

    const handleMouseLeave = () => {
        setHovering(false);
        api.start({
            xys: [0, 0, 1],
        })
    }

    const handleMouseMove = e => {
        const rect = cardRef.current.getBoundingClientRect()
        api.start({
            xys: calc(e.clientX, e.clientY, rect),
        })
    }
    
    return (
        <animated.div
        ref={cardRef}
        onMouseEnter={() => setHovering(!hovering)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
            transform: xys.to(trans)
        }}>
            {children}
        </animated.div>
    );
};

export default Card;