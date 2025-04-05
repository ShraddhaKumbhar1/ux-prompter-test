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
                    value: 40, // Reduced number of particles
                },
                opacity: {
                    value: 1.0, // Particle opacity (fully opaque)
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

    // --- UX Prompter Logic Moved Inside DOMContentLoaded ---
    console.log("UX Prompter script loaded and DOM ready.");

    // Sample Prompts Data (can stay outside if preferred, but fine here too)
    const prompts = {
        ux: [
            "Redesign the onboarding flow for a mobile banking app to improve user retention.",
            "Conduct user research and propose improvements for the checkout process of an e-commerce website.",
            "Design a feature for a fitness tracking app that encourages users to form healthier habits.",
            // --- 20 New UX Challenges ---
            "Analyze user feedback and propose changes to improve the search functionality of a documentation website.",
            "Create user personas based on research for a new e-learning platform.",
            "Design the wireframes for a mobile app feature that allows users to split bills with friends.",
            "Conduct a heuristic evaluation of a competitor's popular productivity app.",
            "Map the user journey for booking a vacation package online and identify areas for improvement.",
            "Develop a usability testing plan for a redesigned online forum.",
            "Design an A/B test to compare two different layouts for a product landing page.",
            "Improve the accessibility of a government service website based on WCAG guidelines.",
            "Create a low-fidelity prototype for a tablet application aimed at restaurant inventory management.",
            "Define the information architecture for a non-profit organization's website.",
            "Redesign the settings page of a complex software application for better clarity.",
            "Research and design a solution for reducing cart abandonment on an e-commerce site.",
            "Create user flows for password recovery and account security management.",
            "Design a preference center for a subscription-based news service.",
            "Improve the user experience of filling out complex forms for insurance applications.",
            "Conduct interviews to understand user needs for a potential neighborhood carpooling app.",
            "Design the information layout for a data-heavy analytics dashboard.",
            "Propose UX improvements for a video conferencing tool based on common user complaints.",
            "Create wireframes for a feature that helps users track their personal carbon footprint.",
            "Evaluate the effectiveness of a chatbot in handling customer support queries and suggest improvements."
        ],
        ui: [
            "Create a visually appealing and consistent UI style guide for a new travel booking platform.",
            "Design the user interface for a music streaming app dashboard, focusing on clarity and ease of navigation.",
            "Develop a set of custom icons for a productivity application.",
            // --- 20 New UI Challenges ---
            "Design a dark mode theme for an existing mobile weather application.",
            "Create a set of illustrations for onboarding screens in a meditation app.",
            "Develop a responsive UI design for a recipe sharing website, considering mobile, tablet, and desktop.",
            "Design the visual elements of a gamification system within a language learning app.",
            "Create a component library in Figma/Sketch for a new design system.",
            "Design the UI for a smart home control panel, focusing on touch interactions.",
            "Develop a color palette and typography system for a fintech startup brand.",
            "Design visually engaging data visualizations (charts, graphs) for a financial dashboard.",
            "Create high-fidelity mockups for a podcast listening application.",
            "Design the UI for user profiles and social connection features in a fitness app.",
            "Improve the visual hierarchy and readability of a content-heavy blog layout.",
            "Design custom form elements (dropdowns, checkboxes, radio buttons) consistent with a brand's style.",
            "Create UI mockups for an admin dashboard managing e-commerce orders.",
            "Design the visual appearance of notification banners and modals.",
            "Develop UI guidelines for image usage and iconography within an application.",
            "Design the interface for a music composition tool, balancing complexity and usability.",
            "Create UI variations for different user roles within a collaborative platform.",
            "Design the visual theme for an online portfolio website.",
            "Develop a loading animation sequence that reflects a brand's identity.",
            "Ensure UI consistency across different sections of a large web application."
        ],
        interaction: [
            "Design the micro-interactions for adding an item to a shopping cart, providing clear feedback to the user.",
            "Prototype the transition animations for navigating between screens in a photo editing app.",
            "Define the interaction model for a voice-controlled smart home device.",
            // --- 20 New Interaction Challenges ---
            "Prototype the drag-and-drop interaction for organizing tasks in a project management tool.",
            "Design the micro-interactions for a 'like' or 'favorite' button, showing state changes.",
            "Define the swipe gestures and transitions for a mobile photo gallery.",
            "Prototype the interaction flow for customizing an avatar in a game or virtual world.",
            "Design the error feedback interactions when a user enters incorrect data in a form.",
            "Prototype the loading state transitions for asynchronously loaded content.",
            "Design the interaction for expanding and collapsing sections of content (accordions).",
            "Define how users interact with interactive charts and graphs (hover states, drill-downs).",
            "Prototype the animations for opening and closing a modal window or dialog.",
            "Design the interaction model for navigating a map interface, including zoom and pan.",
            "Create smooth page transition animations for a single-page application.",
            "Define the hover states and click feedback for navigation menu items.",
            "Prototype the interaction for selecting multiple items in a list.",
            "Design the feedback mechanism when a user successfully completes a complex action.",
            "Define the interaction patterns for using filters and sorting options on a data table.",
            "Prototype the parallax scrolling effects for a promotional landing page.",
            "Design the interaction for adjusting settings using sliders and toggles.",
            "Define the interaction flow for a multi-step wizard or setup process.",
            "Prototype the undo/redo functionality interaction within an editor.",
            "Design the haptic feedback patterns (if applicable) for key interactions on a mobile device."
        ],
        product: [
            "Develop a product roadmap for a new mobile app focused on sustainable living.",
            "Define the minimum viable product (MVP) for a platform connecting local artisans with buyers.",
            "Analyze competitor products and propose unique selling propositions for a new project management tool.",
            "Design the monetization strategy for a freemium language learning application.",
            // --- 20 New Product Challenges ---
            "Conduct market research to identify opportunities for a new app in the pet care industry.",
            "Define the key performance indicators (KPIs) for a newly launched feature.",
            "Create user stories and acceptance criteria for a 'user profile settings' feature.",
            "Prioritize a backlog of feature requests based on user value and business goals.",
            "Develop a go-to-market strategy for a B2B SaaS product.",
            "Outline the core features for an MVP of a mental wellness chatbot.",
            "Perform a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for an existing product.",
            "Design an A/B test plan to validate a hypothesis about user engagement.",
            "Create a lean canvas for a potential new product idea.",
            "Define the target audience and value proposition for a sustainable fashion marketplace.",
            "Develop a strategy for collecting and analyzing user feedback post-launch.",
            "Outline a phased rollout plan for a major product update.",
            "Analyze churn data and propose product improvements to increase retention.",
            "Define the product requirements for integrating a third-party payment system.",
            "Create a competitive landscape analysis for online collaboration tools.",
            "Develop a pricing strategy for a tiered subscription service.",
            "Define the success metrics for an onboarding flow.",
            "Write a press release announcement for a new product launch.",
            "Facilitate a brainstorming session to generate ideas for product growth.",
            "Create a product vision document for a long-term strategic initiative."
        ],
        service: [
            "Map the end-to-end customer journey for obtaining a driver's license and identify pain points.",
            "Design the service blueprint for a new restaurant delivery service, considering both online and offline touchpoints.",
            "Develop strategies to improve the patient experience at a hospital emergency department.",
            // --- 20 New Service Challenges ---
            "Design the service blueprint for a bicycle repair shop, including customer and staff actions.",
            "Identify key touchpoints in the experience of applying for a university course.",
            "Develop strategies to reduce wait times in a busy walk-in clinic.",
            "Map the customer journey for returning an item purchased online.",
            "Design the onboarding process for new employees joining a remote company.",
            "Improve the communication flow between different departments involved in fulfilling an online order.",
            "Create a service recovery plan for handling flight cancellations by an airline.",
            "Design the physical layout and digital interactions for a self-service kiosk at a library.",
            "Map the ecosystem of actors involved in providing home healthcare services.",
            "Identify pain points and opportunities in the experience of using public transportation.",
            "Design the process for handling customer complaints effectively in a call center.",
            "Develop a service concept for a subscription box focused on local artisans.",
            "Map the internal processes required to support a personalized financial advisory service.",
            "Improve the experience of booking and attending a virtual fitness class.",
            "Design the check-in and check-out process for a boutique hotel.",
            "Identify opportunities to improve the volunteer experience at a large charity event.",
            "Create a service blueprint for a co-working space.",
            "Design the communication strategy for informing customers about service outages.",
            "Map the end-to-end journey for a student using university career services.",
            "Develop service standards and training materials for frontline staff at a museum."
        ]
    };

    // DOM Elements
    const categoryButtons = document.querySelectorAll('.category-btn');
    const promptTextElem = document.getElementById('prompt-text');

    // Ensure button references are accessible
    const newChallengeBtnRef = document.getElementById('new-challenge-btn');
    const downloadBtnRef = document.getElementById('download-btn');

    let currentCategory = 'ux'; // Default to 'ux' initially
    let currentPrompts = [];

    // Functions
    function displayRandomPrompt() {
        // --- Simplified: Always use the current category --- 
        currentPrompts = prompts[currentCategory] || [];

        if (!promptTextElem) { // Add a check for the element
            console.error("Prompt text element not found!");
            return;
        }

        if (currentPrompts.length === 0) {
            promptTextElem.textContent = "No prompts available for this category.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * currentPrompts.length);
        promptTextElem.textContent = currentPrompts[randomIndex];
    }

    // Restore category colors map (Updated with latest palette)
    const categoryColors = {
        'ux':        '#fd7e14', // Standard Orange (Restored)
        'ui':        '#6f42c1', // Standard Purple (New)
        'interaction': '#C20A7E', // Red-Violet
        'product':   '#198754', // Standard Green (New)
        'service':   '#0047E0'  // Palatinate blue
    };

    // Event Listeners
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Update current category
            currentCategory = button.dataset.category;

            const newColor = categoryColors[currentCategory] || categoryColors['ux']; 
            document.body.style.background = newColor;

            // --- Remove dynamic styling for action buttons ---
            /*
            if (newChallengeBtnRef) {
                newChallengeBtnRef.style.color = newColor; 
            }
            if (downloadBtnRef) {
                downloadBtnRef.style.color = newColor; 
            }
            */

            displayRandomPrompt(); 
        });
    });

    if (newChallengeBtnRef) { // Use the reference
        newChallengeBtnRef.addEventListener('click', displayRandomPrompt);
    } else {
        console.error("New Challenge button not found!");
    }

    if (downloadBtnRef) { // Use the reference
      downloadBtnRef.addEventListener('click', () => {
          const promptToDownload = promptTextElem.textContent;
          console.log("Download clicked. Prompt:", promptToDownload);
          // In a real application, you would implement actual file download logic here.
          alert("Download functionality not implemented yet.");
      });
    } else {
       console.error("Download button not found!");
    }

    // Initial state - Display the first prompt and set initial background
    const initialColor = categoryColors[currentCategory];
    document.body.style.background = initialColor;
    // --- Remove initial dynamic styling for action buttons ---
    /*
    if (newChallengeBtnRef) {
        newChallengeBtnRef.style.color = initialColor; 
    }
    if (downloadBtnRef) {
        downloadBtnRef.style.color = initialColor; 
    }
    */

    const initialActiveButton = document.querySelector(`.category-btn[data-category='${currentCategory}']`);
    if (initialActiveButton) {
        initialActiveButton.classList.add('active');
    } else {
        console.warn(`Initial category button '${currentCategory}' not found.`);
    }
    displayRandomPrompt();

    // --- End of Moved Logic ---
});

// Comment out or remove logic outside DOMContentLoaded if it's fully moved
// console.log("UX Prompter script loaded."); // Moved inside
// const prompts = { ... }; // Moved inside
// const categoryButtons = ...; // Moved inside
// ... etc ...
// displayRandomPrompt(); // Moved inside 