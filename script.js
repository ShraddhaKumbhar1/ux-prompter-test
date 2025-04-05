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
            "Redesign the onboarding flow for a mobile banking app to improve user retention and trust.",
            "Conduct user research (e.g., usability testing, surveys) and propose UX improvements for the checkout process of an e-commerce website.",
            "Design a feature for a fitness tracking mobile app or wearable that encourages users to form healthier habits through personalized feedback.",
            "Analyze user feedback and propose changes to improve the search functionality of a technical documentation website or developer portal.",
            "Create user personas based on research for a new collaborative VR workspace application.",
            "Design the wireframes for a mobile app feature that allows users to split bills using a linked crypto wallet.",
            "Conduct a heuristic evaluation of a competitor's popular AR furniture placement app.",
            "Map the user journey for setting up a decentralized identity (DID) wallet and identify areas for simplification.",
            "Develop a usability testing plan for a redesigned DeFi staking dashboard website.",
            "Design an A/B test to compare two different navigation patterns for a content-heavy mobile news app.",
            "Improve the accessibility (WCAG compliance) of a government services web portal.",
            "Create a low-fidelity prototype for a tablet application aimed at managing NFT collections.",
            "Define the information architecture for a decentralized social media platform's mobile app.",
            "Redesign the settings page of a complex web application (e.g., CRM, project management) for better clarity and customization.",
            "Research and design a solution for reducing friction in a multi-step KYC process for a blockchain service website.",
            "Create user flows for passwordless authentication (e.g., WebAuthn, magic links) on a web platform.",
            "Design a preference center for managing notification settings within a mobile messaging app.",
            "Improve the user experience of completing complex data entry forms on a mobile device (e.g., insurance application).",
            "Conduct interviews to understand user needs for a potential AR wayfinding app for large indoor spaces.",
            "Design the information layout for a data-heavy crypto portfolio tracking dashboard website.",
            "Propose UX improvements for a VR collaboration tool based on common user complaints about navigation or interaction.",
            "Create wireframes for a feature within a mobile wallet that helps users track their digital asset portfolio's environmental impact.",
            "Evaluate the effectiveness of an AI chatbot in assisting users with troubleshooting a complex web application.",
            "Design the user flow for setting up recurring crypto payments in a DeFi mobile app.",
            "Conduct competitor analysis on the onboarding experience of 3 popular Web3 browser extensions.",
            "Create wireframes for a mobile dashboard visualizing real-time IoT sensor data.",
            "Develop user scenarios for interacting with persistent AR elements overlaid in a real-world environment.",
            "Improve the information scent for finding specific smart contracts or transactions on a blockchain explorer website.",
            "Design a system for users to provide verifiable feedback (e.g., signed messages) within a decentralized application (dApp).",
            "Plan and conduct remote moderated usability tests for a VR training simulation prototype.",
            "Redesign the filtering and sorting options for a large NFT marketplace website.",
            "Analyze usage data (e.g., heatmaps, session recordings) to identify drop-off points in a dApp's connection flow.",
            "Create an empathy map for a user struggling with understanding gas fees on a decentralized exchange website.",
            "Design the UX for managing privacy settings and data permissions within a user-controlled data vault or decentralized storage app.",
            "Develop a content strategy for the help documentation of a complex DeFi protocol website.",
            "Prototype interactions for selecting and interacting with virtual objects in a VR environment.",
            "Improve the UX of comparing different yield farming strategies on a DeFi dashboard website.",
            "Conduct stakeholder interviews to gather requirements for an internal developer tool web portal.",
            "Design the experience for customizing personalized data feeds within a mobile news aggregator app.",
            "Evaluate the accessibility of a VR social platform for users with visual impairments.",
            "Create user journey maps for both novice and crypto-native users of a decentralized exchange (DEX) website.",
            "Redesign the file upload and management interface for a decentralized cloud storage web application.",
            "Propose UX improvements for finding and participating in DAOs (Decentralized Autonomous Organizations) via a web platform."
        ],
        ui: [
            "Create a visually appealing and consistent UI style guide (including components, typography, color) for a new travel booking website.",
            "Design the user interface for a music streaming mobile app dashboard, focusing on clarity, ease of navigation, and brand expression.",
            "Develop a set of custom, scalable icons for a productivity web application, ensuring consistency with its design system.",
            "Design a dark mode theme for an existing mobile weather application, ensuring sufficient contrast and readability.",
            "Create a set of engaging illustrations for onboarding screens in a mobile meditation app.",
            "Develop a responsive UI design for a recipe sharing website, optimizing layout and interactions for mobile, tablet, and desktop viewports.",
            "Design the visual elements of a gamification system (e.g., progress bars, badges, points) within a language learning mobile app.",
            "Create a component library in Figma/Sketch for a new design system intended for a suite of web applications.",
            "Design the UI for a smart home control panel app (tablet or mobile), focusing on intuitive touch interactions and clear status indicators.",
            "Develop a color palette and typography system for a fintech mobile app brand, considering accessibility and brand personality.",
            "Design visually engaging and interactive data visualizations (charts, graphs) for a crypto analytics web dashboard.",
            "Create high-fidelity mockups for a podcast listening mobile application, including player controls and episode lists.",
            "Design the UI for user profiles and connection features within a professional networking web application.",
            "Improve the visual hierarchy and readability of a content-heavy documentation website using typography and spacing.",
            "Design custom, accessible form elements (dropdowns, checkboxes, sliders) consistent with a web application's unique style.",
            "Create UI mockups for an admin dashboard website managing NFT marketplace listings and user accounts.",
            "Design the visual appearance and animations of notification banners and confirmation modals for a web application.",
            "Develop UI guidelines for image usage, iconography, and spacing within a mobile application's design system.",
            "Design the interface for a web-based music composition tool, balancing visual complexity with usability for creative tasks.",
            "Create UI variations (e.g., themes, density) for different user preferences within a web-based CRM.",
            "Design the visual theme and layout for an online portfolio website showcasing digital design work.",
            "Develop a loading animation sequence for a mobile app that reflects the brand's identity and provides feedback on progress.",
            "Ensure UI consistency and scalability across different modules of a large enterprise web application.",
            "Design the visual elements for error states and inline validation messages in a complex web form.",
            "Create a set of branded social media image templates optimized for various platforms (e.g., Twitter, Instagram).",
            "Develop the UI for a customizable watch face for a smartwatch, considering screen size and glanceability.",
            "Design the visual style for interactive help overlays or tutorials within a web application.",
            "Create unique data visualization styles (e.g., node graphs for blockchain data, spatial data maps) for a specialized web app.",
            "Design the UI for a video conferencing web application interface, including participant views and controls.",
            "Develop a visual system for user-generated content tags and badges within a mobile community app.",
            "Create responsive HTML email templates for transactional notifications from a web service.",
            "Design the UI for selecting and previewing different themes or skins within a mobile game interface.",
            "Develop a visual language for representing different states of blockchain transactions (pending, confirmed, failed) in a wallet app.",
            "Design the UI for a complex settings panel in a web application, using accordions, tabs, or other organizational patterns.",
            "Create animated UI elements (e.g., button feedback, loading spinners) for a mobile application using Lottie or similar.",
            "Design the look and feel of embeddable web widgets displaying real-time crypto prices.",
            "Develop UI mockups for a progressive web application (PWA) ensuring a native-app-like feel.",
            "Design the visual hierarchy and interaction states for a complex filtering sidebar on an e-commerce website.",
            "Create print-specific stylesheets (`@media print`) for crucial pages of a web application (e.g., invoices, reports).",
            "Design the UI for a real-time chat interface within a collaborative web application, including message styling and read receipts.",
            "Develop visual guidelines for responsive grid layouts and spacing tokens in a design system for web and mobile.",
            "Create UI elements for indicating live data updates or connection status in a real-time web dashboard.",
            "Design the visual presentation of search results on a mobile app, including rich snippets and action buttons."
        ],
        interaction: [
            "Design the micro-interactions (e.g., animations, feedback) for adding an item to a shopping cart on a mobile e-commerce app.",
            "Prototype the screen transition animations (e.g., slide, fade, modal) for navigating between views in a mobile photo editing app.",
            "Define the interaction model (voice commands, responses, feedback) for a voice-controlled interface within a smart home mobile app.",
            "Prototype the drag-and-drop interaction for organizing tasks or cards on a web-based project management board (e.g., Kanban).",
            "Design the micro-interactions for a 'like' or 'upvote' button on a web platform, clearly showing state changes and providing feedback.",
            "Define the swipe gestures (horizontal, vertical) and associated transitions for browsing content in a mobile news feed app.",
            "Prototype the interaction flow for customizing a 3D avatar within a VR application menu.",
            "Design the error feedback interactions (e.g., inline messages, modal dialogs, field highlighting) when a user submits an invalid web form.",
            "Prototype the loading state transitions (e.g., skeleton screens, spinners, progress bars) for asynchronously loaded content on a web dashboard.",
            "Design the interaction for expanding and collapsing sections of content (accordions) on a mobile settings screen.",
            "Define how users interact with interactive charts and graphs (hover states, tooltips, drill-downs) on a web analytics dashboard.",
            "Prototype the opening and closing animations for a modal window overlaying a web application.",
            "Design the interaction model for navigating an AR map interface using device movement and touch gestures.",
            "Create smooth page transition animations (e.g., using shared elements, fading) for a single-page web application.",
            "Define the hover states, focus states (for accessibility), and click feedback for navigation links in a website header.",
            "Prototype the interaction for selecting multiple items (e.g., photos, files) in a list within a mobile application.",
            "Design the feedback mechanism (e.g., toast notification, confirmation screen) when a user successfully completes a complex action in a web app.",
            "Define the interaction patterns for applying multiple filters and sorting options to a data table on a web interface.",
            "Prototype subtle parallax scrolling effects for a promotional landing page website.",
            "Design the interaction for adjusting settings using sliders, toggles, and steppers within a mobile app interface.",
            "Define the interaction flow, including validation and feedback, for a multi-step sign-up wizard on a website.",
            "Prototype the undo/redo functionality interaction within a web-based collaborative document editor.",
            "Design the haptic feedback patterns (for iOS/Android) to correspond with key interactions (e.g., confirmation, error) in a mobile app.",
            "Prototype the interaction for editing text directly within a diagramming tool or collaborative whiteboard web application.",
            "Design the feedback loop and progress indication for a long-running background process (e.g., video encoding, data export) in a web app.",
            "Define the interaction model for navigating a complex information hierarchy using breadcrumbs and side navigation on a website.",
            "Prototype the animations associated with completing a level or achieving a milestone in a mobile educational game.",
            "Design the interaction for selecting a date and time range using a calendar widget within a web booking form.",
            "Define how users interact with 'pull-to-refresh' and infinite scroll functionality on a mobile social media app.",
            "Prototype the state changes (e.g., loading, selected, error) and transitions for an interactive element on a web map.",
            "Design the interaction for searching and filtering a list in real-time as the user types in a mobile app search bar.",
            "Define the keyboard navigation patterns (tab order, focus indicators, shortcuts) for a complex web application form, ensuring accessibility.",
            "Prototype the animation for revealing contextual actions or options (e.g., on long-press) within a mobile app.",
            "Design the interaction for resizing and docking panels or windows within a customizable web dashboard interface.",
            "Define the gestures (e.g., taps, swipes, pinch) for controlling media playback in a mobile video player.",
            "Prototype the interaction for reviewing and accepting/rejecting AI-generated suggestions within a writing assistant web app.",
            "Design the micro-interactions involved in confirming a potentially destructive action (e.g., deleting a wallet) in a crypto app.",
            "Define how users switch between different data visualization types (e.g., bar chart, line chart, table) on a web dashboard.",
            "Prototype the interaction for adding and managing tags or labels on items within a web application.",
            "Design the feedback (visual, auditory, haptic) when a user successfully connects a hardware wallet to a web application.",
            "Define the transition animations between different states of a UI component (e.g., button loading state) on a website.",
            "Prototype the scroll-triggered animations or interactions for storytelling on a long-form content website.",
            "Design the interaction for setting precise values using a combination of input fields and sliders in a mobile creative tool."
        ],
        product: [
            "Develop a product roadmap for a new mobile app focused on sustainable e-commerce, outlining key features and release phases.",
            "Define the minimum viable product (MVP) features for a decentralized platform connecting freelance designers with clients using smart contracts.",
            "Analyze competitor web-based project management tools and propose unique selling propositions (USPs) for a new entrant targeting remote teams.",
            "Design the monetization strategy (e.g., subscription tiers, in-app purchases) for a freemium language learning mobile application.",
            "Conduct market research to identify opportunities for a new AR mobile app in the home renovation or interior design space.",
            "Define the key performance indicators (KPIs) for measuring user engagement and retention in a newly launched mobile game.",
            "Create user stories and detailed acceptance criteria for a 'user profile customization' feature within a social VR application.",
            "Prioritize a backlog of feature requests for a mobile banking app based on user value, business goals, and development effort.",
            "Develop a go-to-market strategy (including target audience, channels, messaging) for a B2B SaaS web application.",
            "Outline the core features for an MVP of a mental wellness chatbot mobile app, focusing on a specific user need.",
            "Perform a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for an existing e-commerce website.",
            "Design an A/B test plan to validate a hypothesis about the effectiveness of a new call-to-action button on a website landing page.",
            "Create a lean canvas for a potential new product idea involving a decentralized autonomous organization (DAO) management web platform.",
            "Define the target audience personas and value proposition for a mobile marketplace connecting users with local service providers.",
            "Develop a strategy for collecting, analyzing, and acting on user feedback (e.g., NPS, surveys, reviews) for a mobile app post-launch.",
            "Outline a phased rollout plan (e.g., beta testing, regional launch) for a major redesign of a popular web application.",
            "Analyze churn data for a subscription-based mobile app and propose product improvements to increase user retention.",
            "Define the product requirements document (PRD) for integrating a third-party payment gateway into an e-commerce website.",
            "Create a competitive landscape analysis focusing on the UI/UX and feature sets of leading VR fitness applications.",
            "Develop a pricing strategy (including tiers and feature differentiation) for a SaaS web application offering AI-powered analytics.",
            "Define the success metrics (e.g., completion rate, time-on-task) for a mobile app's user onboarding flow.",
            "Write a press release announcement highlighting the key features and benefits of a new AR mobile game launch.",
            "Facilitate a product brainstorming session using design thinking methods to generate innovative ideas for a mobile travel app.",
            "Create a product vision document outlining the long-term strategic goals for a decentralized finance (DeFi) web platform.",
            "Define the key metrics to track for measuring the success of a mobile app's user acquisition strategy (e.g., CPA, LTV).",
            "Conduct user interviews to validate the core value proposition of a potential VR educational tool.",
            "Develop a framework for prioritizing accessibility improvements within an existing web application's backlog.",
            "Create a communication plan detailing how a significant API change will be announced to developers using a web platform.",
            "Analyze the competitive advantages and disadvantages of a leading decentralized storage solution (e.g., IPFS, Arweave) compared to traditional cloud storage.",
            "Define the user onboarding flow and key activation events for a complex data visualization web application.",
            "Write a Product Requirements Document (PRD) for adding NFT minting capabilities to a mobile creative application.",
            "Develop a strategy for sunsetting an old version of a mobile app while encouraging users to upgrade.",
            "Outline the A/B testing roadmap for optimizing the sign-up conversion rate on a SaaS website.",
            "Create a presentation summarizing market research findings and recommending a product direction for a new wearable device.",
            "Define the different user roles (e.g., admin, editor, viewer) and their associated permissions within a collaborative web platform.",
            "Analyze emerging technology trends (e.g., AI, metaverse) to identify potential new product opportunities for a mobile app company.",
            "Develop a strategy for gathering qualitative user feedback on a VR application prototype using in-world surveys or interviews.",
            "Create a feature brief outlining the goals, non-goals, and scope of adding offline capabilities to a mobile app.",
            "Define the integration points and API requirements for connecting a mobile health app with third-party fitness trackers.",
            "Conduct a post-mortem analysis of a failed A/B test on a website, identifying reasons and learnings.",
            "Develop a plan for implementing a design system across multiple web and mobile products within a company.",
            "Create a high-level estimate of the resources (design, engineering) required to build an MVP for an AR try-on mobile feature.",
            "Define the criteria and process for graduating a feature from a private beta program to a public launch for a web application.",
            "Analyze the potential impact of introducing a 'freemium' model to a previously paid mobile application."
        ],
        service: [
            "Map the end-to-end customer journey for applying for a digital nomad visa via a government web portal, identifying pain points and opportunities.",
            "Design the service blueprint for a new hyperlocal grocery delivery mobile app, detailing customer actions, frontend/backend systems, and support processes.",
            "Develop strategies to improve the patient experience when booking appointments and accessing records through a hospital's mobile app or web portal.",
            "Design the service blueprint for a peer-to-peer electric scooter rental mobile app, considering user interactions, scooter maintenance, and charging logistics.",
            "Identify key digital and physical touchpoints in the experience of attending a hybrid (online and in-person) conference booked via a website.",
            "Develop strategies using a mobile app or website to reduce perceived wait times for customer support interactions (chat, call).",
            "Map the customer journey for returning an item purchased online via a mobile app, including initiation, shipping, and refund confirmation.",
            "Design the digital onboarding process (web and mobile) for new freelancers joining a decentralized gig economy platform.",
            "Improve the communication flow between customers, restaurants, and delivery drivers within a food delivery mobile app.",
            "Create a service recovery plan communicated via a web platform or mobile app for handling data breaches or major service outages.",
            "Design the physical kiosk interface and accompanying mobile app integration for a self-service luggage check-in system at an airport.",
            "Map the ecosystem of actors (users, validators, developers, exchanges) involved in a specific proof-of-stake blockchain network, visualizing interactions via web tools.",
            "Identify pain points and digital opportunities in the experience of using a city's public transport mobile ticketing app.",
            "Design the process for handling disputes between buyers and sellers on an NFT marketplace website, including moderation tools.",
            "Develop a service concept for a subscription box service curated via a mobile app that connects users with local artisans.",
            "Map the internal digital workflows required to support a personalized financial advisory service delivered via a web application.",
            "Improve the experience of booking, attending, and providing feedback for a virtual fitness class hosted on a web platform.",
            "Design the mobile app check-in/check-out process and room service ordering for a tech-focused boutique hotel.",
            "Identify opportunities using a web platform to improve the recruitment, training, and management of volunteers for a large online event.",
            "Create a service blueprint for a co-working space focusing on the digital booking system, access control app, and community platform.",
            "Design the multi-channel communication strategy (email, in-app, status page) for informing users about planned maintenance on a web service.",
            "Map the end-to-end journey for a student accessing university career services through their online portal and mobile app.",
            "Develop digital service standards and online training materials for remote customer support agents using a web-based CRM.",
            "Design the end-to-end service for securely donating cryptocurrency to a charity via their website.",
            "Map the stakeholder ecosystem (drivers, riders, platform, regulators) for a ride-sharing service accessed via a mobile app.",
            "Identify backstage digital processes (e.g., inventory management, order routing) that impact the customer experience of ordering coffee via a mobile app.",
            "Develop service recovery protocols communicated via a mobile app for when a DeFi platform experiences a smart contract exploit.",
            "Design the digital touchpoints (website, app, email) for a museum membership program.",
            "Map the user journey for reporting a bug or vulnerability in an open-source software project via GitHub or a similar web platform.",
            "Improve the service experience for remote participants collaborating in a VR meeting or workshop.",
            "Create a service blueprint for a web-based language exchange platform, connecting learners and native speakers.",
            "Design the process for securely verifying identity (KYC) for a regulated crypto exchange website.",
            "Identify opportunities to enhance the digital experience of ordering custom merchandise through a web-based print-on-demand service.",
            "Develop communication strategies delivered via a mobile app for managing user expectations during a flash sale on an e-commerce site.",
            "Map the service experience for setting up and managing a decentralized domain name (e.g., ENS, Handshake) via a web interface.",
            "Design the process for onboarding new contributors to a decentralized content creation platform (web or mobile).",
            "Improve the flow and reduce friction in the process of staking tokens within a DeFi mobile application.",
            "Create service principles focused on transparency and user control for a decentralized social media mobile app.",
            "Map the different communication channels (Discord, forum, in-app support) used throughout a user support journey for a mobile game.",
            "Design the service for providing personalized investment advice through a robo-advisor web application.",
            "Identify key metrics for measuring the success and user satisfaction of a telehealth service delivered via a mobile app.",
            "Develop a plan for using a web platform to co-create service improvements with users of a public utility service.",
            "Design the service blueprint for a subscription-based VR meditation service, including content delivery and user support."
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
    let currentBgColor = '#fd7e14'; // Initialize with default category color

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

    // Map for category display names
    const categoryDisplayNames = {
        'ux':        'UX Design',
        'ui':        'UI Design',
        'interaction': 'Interaction Design',
        'product':   'Product Design',
        'service':   'Service Design'
    };

    // Helper function to wrap text on canvas
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = context.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
        return y; // Return the y position of the last line
    }

    // --- Remove geometric shape drawing functions ---
    // function drawRandomTriangle(...) { ... }
    // function drawRandomCircle(...) { ... } // Keep this one for particles
    // function drawRandomSquare(...) { ... }
    // function drawRandomPlus(...) { ... }

    // Helper function to draw particle circle
    function drawParticle(ctx, x, y, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fill();
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

            const newColor = categoryColors[currentCategory] || categoryColors['ux']; 
            document.body.style.background = newColor;
            currentBgColor = newColor; // Update the tracked background color

            // --- Color styling for action buttons handled by hover listeners --- 

            displayRandomPrompt(); 
        });
    });

    // Function to handle hover effect
    const handleActionBtnHover = (event) => {
        event.target.style.color = currentBgColor;
    };
    const handleActionBtnMouseOut = (event) => {
        event.target.style.color = '#212529'; // Reset to default dark color
    };

    if (newChallengeBtnRef) { // Use the reference
        newChallengeBtnRef.addEventListener('click', displayRandomPrompt);
        // Add hover listeners
        newChallengeBtnRef.addEventListener('mouseenter', handleActionBtnHover);
        newChallengeBtnRef.addEventListener('mouseleave', handleActionBtnMouseOut);
    } else {
        console.error("New Challenge button not found!");
    }

    if (downloadBtnRef) { // Use the reference
      downloadBtnRef.addEventListener('click', () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const canvasSize = 800;
          const padding = 50; 
          const contentWidth = canvasSize - (padding * 2);
          const contentHeight = canvasSize - (padding * 2); 

          canvas.width = canvasSize;
          canvas.height = canvasSize;

          // 1. Background Color
          const bgColor = categoryColors[currentCategory] || '#fd7e14'; 
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, canvasSize, canvasSize);

          // 1.5 Simulate Particle Network Background (Reduced Opacity)
          const particleColor = "rgba(207, 226, 243, 0.6)"; // #cfe2f3 at 60% opacity
          const linkColor = "rgba(255, 255, 255, 0.18)"; // 60% of original 0.3 opacity
          const particleSize = 3; 
          const numParticles = 60; 
          const linkDistance = 150; 
          const particles = [];

          // Draw particles and store positions
          for (let i = 0; i < numParticles; i++) {
              const x = Math.random() * canvasSize;
              const y = Math.random() * canvasSize;
              drawParticle(ctx, x, y, particleSize, particleColor);
              particles.push({ x, y });
          }

          // Draw links
          ctx.strokeStyle = linkColor;
          ctx.lineWidth = 1;
          for (let i = 0; i < particles.length; i++) {
              for (let j = i + 1; j < particles.length; j++) {
                  const dx = particles[i].x - particles[j].x;
                  const dy = particles[i].y - particles[j].y;
                  const distance = Math.sqrt(dx * dx + dy * dy);

                  if (distance < linkDistance) {
                      ctx.beginPath();
                      ctx.moveTo(particles[i].x, particles[i].y);
                      ctx.lineTo(particles[j].x, particles[j].y);
                      ctx.stroke();
                  }
              }
          }
          // --- Remove geometric shape drawing loop ---
          /*
          const shapeFunctions = [drawRandomTriangle, drawRandomCircle, drawRandomSquare, drawRandomPlus];
          for (let i = 0; i < numShapes; i++) { ... }
          */

          // 2. Outline Box
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 3;
          ctx.strokeRect(padding, padding, contentWidth, contentHeight);

          // 3. Get Content
          const challengeText = promptTextElem.textContent || "No challenge selected";
          const categoryName = categoryDisplayNames[currentCategory] || currentCategory;
          const now = new Date();
          const dateTimeStamp = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + ' at ' + now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

          // 4. Draw Content (Left Aligned)
          ctx.fillStyle = '#FFFFFF';
          ctx.textBaseline = 'bottom'; 
          const timeStampFontSize = 18;
          const categoryFontSize = 20;
          const bottomTextMargin = 20;
          const textX = padding + bottomTextMargin; // X position for left-alignment
          const timeStampY = canvasSize - padding - bottomTextMargin;
          const categoryY = timeStampY - timeStampFontSize - 5; 
          
          ctx.textAlign = 'left'; // Set alignment for bottom text
          // --- Draw Timestamp ---
          ctx.font = `${timeStampFontSize}px Inter, sans-serif`;
          ctx.fillText(dateTimeStamp, textX, timeStampY);
          // --- Draw Category Name ---
          ctx.font = `${categoryFontSize}px Inter, sans-serif`;
          ctx.fillText(categoryName, textX, categoryY);

          // --- Draw Challenge Text (Wrapped and Left Aligned) ---
          const challengeFontSize = 40; 
          const challengeLineHeight = challengeFontSize * 1.3;
          ctx.font = `bold ${challengeFontSize}px Inter, sans-serif`;
          ctx.textAlign = 'left'; // Ensure left alignment for wrapText function
          ctx.textBaseline = 'middle'; 
          const challengeAvailableHeight = categoryY - timeStampFontSize - padding - (bottomTextMargin * 2); 
          
          // Calculate text block height *before* calculating starting Y
          const approxLines = Math.max(1, Math.ceil(ctx.measureText(challengeText).width / (contentWidth - bottomTextMargin * 2))); // Estimate lines needed
          const textBlockHeight = approxLines * challengeLineHeight;
          
          // Adjust Y for vertical centering based on calculated block height
          let currentY = padding + bottomTextMargin + (challengeAvailableHeight / 2) - (textBlockHeight / 2);
          // Ensure text doesn't start too high if content is short
          currentY = Math.max(currentY, padding + bottomTextMargin + challengeLineHeight / 2); 

          wrapText(ctx, challengeText, textX, currentY, contentWidth - (bottomTextMargin * 2), challengeLineHeight);

          // 5. Trigger Download
          const dataURL = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = dataURL;
          const filename = `${categoryName.replace(/\s+/g, '_')}_Challenge_${now.toISOString().split('T')[0]}.png`;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      });
      // Add hover listeners
      downloadBtnRef.addEventListener('mouseenter', handleActionBtnHover);
      downloadBtnRef.addEventListener('mouseleave', handleActionBtnMouseOut);
    } else {
       console.error("Download button not found!");
    }

    // Initial state - Display the first prompt and set initial background
    const initialColor = categoryColors[currentCategory];
    document.body.style.background = initialColor;
    currentBgColor = initialColor; // Set initial tracked background color
    
    // --- Remove initial dynamic color styling for action buttons ---
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