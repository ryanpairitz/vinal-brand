const ColorDetails = ({ color }) => {
    return (
        <div>
            <h3 className="condensed"
                style={{
                    color: "inherit",
                    marginBottom: 0
                }}>
                {color.title}
            </h3>
            <p
                className="hex"
                style={{
                    color: "inherit",
                }}>
                {color.hex}
            </p>
        </div>
    );
};

export default ColorDetails;