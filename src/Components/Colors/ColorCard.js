import { useState, useRef } from "react";
import { animated, useTransition, useSpring } from "@react-spring/web";

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 34,
    (x - rect.left - rect.width / 2) / 34,
    1.0552,
]

const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ColorCard = ({ color }) => {
    const fontColor = color.title.includes("Neutral") || color.title === "White" ? 'var(--black-carbon)' : 'white';
    const [hovering, setHovering] = useState(false);
    const cardRef = useRef(null)
    const config = {
        mass: 3.0,
        tension: 510,
        friction: 39,
    };
    const transitions = useTransition(hovering, {
        config: {
            mass: 3.0,
            tension: 510,
            friction: 52,
        },
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

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
        <animated.div className="card color"
            ref={cardRef}
            onMouseEnter={() => setHovering(!hovering)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                backgroundColor: color.hex,
                borderWidth: color.title === "Black Carbon" ? "calc(1.89px * 0.9)" : 0,
                transform: xys.to(trans)
            }}>
            <div>
                <h3 className="condensed"
                    style={{
                        color: fontColor,
                        marginBottom: 0
                    }}>
                    {color.title}
                </h3>
                <p
                    style={{
                        color: fontColor
                    }}>
                    {color.hex}
                </p>
            </div>
            {transitions((style, item) => (
                item &&
                <animated.p
                    className="light"
                    style={{
                        ...{
                            color: fontColor,
                            lineHeight: '1em',
                        }, ...style
                    }}>
                    {color.description}
                </animated.p>
            ))}
            <div />
        </animated.div>
    );
};

export default ColorCard;