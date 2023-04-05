import { forwardRef } from "react";
import SectionDivider from "../SectionDivider";
import DownloadBrandmark from "./DownloadBrandmark";
import DownloadLight from "./vinal-brandmark_light.svg";
import DownloadDark from "./vinal-brandmark_dark.svg";

const Downloads = forwardRef((props, downloadsRef) => {
    const Downloads = [
        {
            id: "light",
            fill: "var(--white)",
            description: "For dark-colored backgrounds",
            file: DownloadLight
        },
        {
            id: "dark",
            fill: "var(--black-carbon)",
            description: "For light-colored backgrounds",
            file: DownloadDark
        }
    ]

    return (
        <section
            ref={downloadsRef}
            id="downloads">
            <div className="container sub">
                <SectionDivider>
                    Downloads
                </SectionDivider>
                <p>
                    Below are official downloads for you to include the simplified Vinal brandmark on your own webpage, app, or link-in-bio tool, alongside other social icons.
                </p>
                <div className="card-container">
                    {Downloads.map((download, index) => (
                        <a href={download.file} download={`vinal-brandmark_${download.id}.svg`}
                            className="download-container" key={index}>
                            <DownloadBrandmark className="interactive-logo download" fill={download.fill} />
                            <p>
                                {download.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Downloads;