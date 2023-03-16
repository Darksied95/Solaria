import { AiFillCheckCircle } from "react-icons/ai";
import { FaDna } from "react-icons/fa";
import { BsVirus } from "react-icons/bs";
import { GiHumanTarget, GiTripleScratches } from "react-icons/gi";

export const pinnedCardDetails = [
    {
        heading: "Multispecific liquids analysis",
        subHeading: "Next-gen immuno",
        time: "5d",
        backgroundColor: "#f3d9c3",
        color: "#000",
        Icon: "1",
        text: "New feedback",
    },
    {
        heading: "Protein characterization during childhood and pregnancy",
        subHeading: "Harmony",
        time: "1h",
        backgroundColor: "#3d3d3d",
        color: "white",
        Icon: "!",
        text: "Deadline is today",
    },
    {
        heading: "Quick element dissolution testing",
        subHeading: "Pharmaceutical",
        time: "7h",
        backgroundColor: "#b7c9cc",
        color: "white",
        Icon: AiFillCheckCircle,
        text: "Accepted",
    },
];


export const medicalLecturesProgress = [
    {
        heading: "Viruses",
        progress: "96",
        Icon: BsVirus,
        color: (alpha) => `rgba(92, 113, 143, ${alpha || 255})`,
    },
    {
        heading: "Bacterial cells",
        progress: "33",
        Icon: FaDna,
        color: (alpha) => `rgba(245, 191, 146, ${alpha || 255})`,
    },
    {
        heading: "Med Science",
        progress: "7",
        Icon: GiTripleScratches,
        color: (alpha) => `rgba(223, 172, 176, ${alpha || 255})`,
    },
    {
        heading: "Human gens",
        progress: "58",
        Icon: GiHumanTarget,
        color: (alpha) => `rgba(167, 182, 186, ${alpha || 255})`,
    },
];