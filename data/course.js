import config from "../course.json";

const DEFAULT_CONFIG = {
    author: {
        name: "Shafayet Sadi",
        company: "Acceleration Artificial Intelligence",
    },
    title: "Git and GitHub",
    subtitle: "That Teaches Nice Things",
    frontendMastersLink: "",
    description: "A nice course for nice people.",
    keywords: ["a nice course", "for people", "to learn", "nice things"],
    social: {
        linkedin: "shafayetsadi",
        github: "shafayetsadi",
        twitter: "shafayet_sasdi",
    },
    productionBaseUrl: "/",
};

export default function getCourseConfig() {
    return Object.assign({}, DEFAULT_CONFIG, config);
}
