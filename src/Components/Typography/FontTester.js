import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const FontTester = ({ fontName, weightOptions, weightSettings }) => {
    const [settings, setSettings] = useState({
        weight: "",
        size: ""
    });
    const [input, setInput] = useState("");
    const initPlaceholder = "Type something to see " + fontName.replace('-', ' ') + " in action.";
    const [placeholder, setPlaceholder] = useState(initPlaceholder);

    const fontFamily = settings.weight !== "" ? weightSettings[settings.weight.replace(/\s+/g, '')].fontFamily : fontName;
    const fontWeight = settings.weight !== "" ? weightSettings[settings.weight.replace(/\s+/g, '')].fontWeight : "normal";
    const fontSize = settings.size === "Medium" ? "calc(55em / 34)" 
        : settings.size === "Small" ? "calc(34em / 34" : "calc(89em / 34)";

    const handleChangeSettings = (e) => {
        e.preventDefault();
        setSettings({
            ...settings,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="font-tester">
            <div className="select-container">
                <select name="weight" id="weight" onChange={handleChangeSettings} defaultValue="Weight">
                    <option value="Weight" disabled>Weight</option>
                    {weightOptions.map((weight, index) => {
                        return <option value={weight} key={index}>{weight}</option>
                    })}
                </select>
                <select name="size" id="size" onChange={handleChangeSettings} defaultValue="Size">
                    <option value="Size" disabled>Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <TextareaAutosize
                style={{
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontSize: fontSize
                }}
                className={settings.weight.includes("Condensed") ? "condensed" : ""}
                maxRows={settings.size === "Large" || settings.size === "" ? 4 : 6}
                wrap="soft"
                value={input}
                placeholder={placeholder}
                onFocus={() => setPlaceholder("")}
                onBlur={() => setPlaceholder(initPlaceholder)}
                onChange={(e) => setInput(e.target.value)} />
        </div>
    );
};

export default FontTester;