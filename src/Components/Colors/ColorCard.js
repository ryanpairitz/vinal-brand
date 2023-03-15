import { useState } from "react";

const ColorCard = ({ color }) => {
    const fontColor = color.title.includes("Neutral") || color.title === "White" ? 'var(--black-carbon)' : 'white';
    const [hovering, setHovering] = useState(false);

    return (
        <div className="card color"
            onMouseEnter={() => setHovering(!hovering)}
            onMouseLeave={() => setHovering(false)}
            style={{
                backgroundColor: color.hex
            }}>
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
            {hovering &&
                <p
                    className="light"
                    style={{
                        color: fontColor,
                        lineHeight: '1em',
                    }}>
                    {color.description}
                </p>
            }
        </div>
    );
};

export default ColorCard;