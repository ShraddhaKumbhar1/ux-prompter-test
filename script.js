// Particle Initialization (Requires tsParticles library)
document.addEventListener('DOMContentLoaded', (event) => {
    // Check if tsParticles is loaded (it won't be if the CDN link is commented out)
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("particles-js", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse", // Particles move away from cursor
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 80, // How far particles move away
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#cfe2f3", // Light pastel blue particle color
                },
                links: {
                    color: "#ffffff", // Link color
                    distance: 150,
                    enable: true,
                    opacity: 0.3, // Make links subtle
                    width: 1,
                },
                collisions: {
                    enable: false, // Keep it simple, no collisions
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out", // Particles leave the canvas edge
                    },
                    random: false,
                    speed: 1, // Slow movement speed
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800, // Adjust density
                    },
                    value: 60, // Number of particles
                },
                opacity: {
                    value: 0.4, // Particle opacity
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 }, // Particle size range
                },
            },
            detectRetina: true,
            background: {
                // Optional: Can set a background here, but we use CSS gradient
                // color: "#a1c4fd",
                // image: "",
                // position: "50% 50%",
                // repeat: "no-repeat",
                // size: "cover"
            }
        });
    } else {
        console.warn("tsParticles library not found. Please uncomment the CDN link in index.html.");
    }
});

// JavaScript for UX Prompter will go here
console.log("UX Prompter script loaded.");

// Sample Prompts Data
const prompts = {
    ux: [
        "Redesign the onboarding flow for a mobile banking app to improve user retention.",
        "Conduct user research and propose improvements for the checkout process of an e-commerce website.",
        "Design a feature for a fitness tracking app that encourages users to form healthier habits."
    ],
    ui: [
        "Create a visually appealing and consistent UI style guide for a new travel booking platform.",
        "Design the user interface for a music streaming app dashboard, focusing on clarity and ease of navigation.",
        "Develop a set of custom icons for a productivity application."
    ],
    interaction: [
        "Design the micro-interactions for adding an item to a shopping cart, providing clear feedback to the user.",
        "Prototype the transition animations for navigating between screens in a photo editing app.",
        "Define the interaction model for a voice-controlled smart home device."
    ],
    ia: [
        "Restructure the information architecture of a large university website to improve findability for prospective students.",
        "Develop a sitemap and navigation system for a complex software documentation portal.",
        "Conduct a card sorting exercise to inform the categorization of products on an online grocery store."
    ],
    service: [
        "Map the end-to-end customer journey for obtaining a driver's license and identify pain points.",
        "Design the service blueprint for a new restaurant delivery service, considering both online and offline touchpoints.",
        "Develop strategies to improve the patient experience at a hospital emergency department."
    ]
};

// DOM Elements
const categoryButtons = document.querySelectorAll('.category-btn');
const newChallengeBtn = document.getElementById('new-challenge-btn');
const downloadBtn = document.getElementById('download-btn');
const promptTextElem = document.getElementById('prompt-text');

let currentCategory = 'all';
let currentPrompts = [];

// Functions
function getAllPrompts() {
    // Ensure only the defined categories are included
    const validCategories = ['ux', 'ui', 'interaction', 'ia', 'service'];
    let allPromptsArr = [];
    validCategories.forEach(category => {
        if (prompts[category]) {
            allPromptsArr = allPromptsArr.concat(prompts[category]);
        }
    });
    return allPromptsArr;
    // Simpler version if all keys in prompts are always valid:
    // return Object.values(prompts).flat();
}

function displayRandomPrompt() {
    if (currentCategory === 'all') {
        currentPrompts = getAllPrompts();
    } else {
        currentPrompts = prompts[currentCategory] || [];
    }

    if (currentPrompts.length === 0) {
        promptTextElem.textContent = "No prompts available for this category.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * currentPrompts.length);
    promptTextElem.textContent = currentPrompts[randomIndex];
}

// Event Listeners
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
        // Update current category
        currentCategory = button.dataset.category;
        // Give feedback when category changes
        const buttonText = button.textContent.trim(); // Get full text like "UX Design"
        promptTextElem.textContent = `Selected ${buttonText}. Click 'New Challenge'.`;
    });
});

newChallengeBtn.addEventListener('click', displayRandomPrompt);

dowloadBtn.addEventListener('click', () => {
    const promptToDownload = promptTextElem.textContent;
    console.log("Download clicked. Prompt:", promptToDownload);
    // In a real application, you would implement actual file download logic here.
    alert("Download functionality not implemented yet.");
});

// Initial state
promptTextElem.textContent = "Select a category or click \"New Challenge\" to get started!"; 