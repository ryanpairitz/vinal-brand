export const SwatchOptions = [
    "orangeToPink",
    "blueToGreen",
    "blackCarbon"
]

export const SwatchSettings = {
    orangeToPink: {
        background: "linear-gradient(90deg, var(--crazysexycool-orange) 0%, #E44C49 8%, #E23552 26%, #E02558 47%, #DF1B5B 69%, var(--blkswn-rose) 100%)",
        armStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--carbon)"
                }
            },
            {
                offset: "1",
                style: {
                    stopColor: "#1f1f1f"
                }
            },
        ],
        recordStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--black-carbon)"
                }
            },
        ],
        typeStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--carbon)"
                }
            },
            {
                offset: "0.1105",
                style: {
                    stopColor: "#232323"
                }
            },
            {
                offset: "0.4941",
                style: {
                    stopColor: "#191919"
                }
            },
            {
                offset: "1",
                style: {
                    stopColor: "var(--black-carbon)"
                }
            },
        ]
    },
    blueToGreen: {
        background: "linear-gradient(90deg, var(--awaken-my-love-blue) 0%, #35BBD5 2%, #2DB4B8 17%, #28ADA1 34%, #24A991 52%, #21A687 73%, var(--blonde-green) 100%)",
        armStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--carbon)"
                }
            },
            {
                offset: "1",
                style: {
                    stopColor: "#1f1f1f"
                }
            },
        ],
        recordStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--black-carbon)"
                }
            },
        ],
        typeStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--carbon)"
                }
            },
            {
                offset: "0.1105",
                style: {
                    stopColor: "#232323"
                }
            },
            {
                offset: "0.4941",
                style: {
                    stopColor: "#191919"
                }
            },
            {
                offset: "1",
                style: {
                    stopColor: "var(--black-carbon)"
                }
            },
        ]
    },
    blackCarbon: {
        background: "var(--black-carbon)",
        armStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--crazysexycool-orange)"
                }
            },
            {
                offset: "1",
                style: {
                    stopColor: "#E33A51"
                }
            },
        ],
        recordStops: [
            {
                offset: "0",
                style: {
                    stopColor: "var(--crazysexycool-orange)"
                }
            },
            {
                offset: "7.831275e-02",
                style: {
                    stopColor: "#E54C4A"
                }
            },
            {
                offset: "0.2647",
                style: {
                    stopColor: "#E23652"
                }
            },
            {
                offset: "0.4668",
                style: {
                    stopColor: "#E02558"
                }
            },
            {
                offset: "0.6943",
                style: {
                    stopColor: "#DF1C5C"
                }
            },
            {
                offset: "1",
                style: {
                    stopColor: "var(--blkswn-rose)"
                }
            },
        ]
    }
}