# UX Prompter

A web application designed to generate design challenges for UX/UI/Interaction/Product/Service designers.

**Live Demo:** [https://shraddhakumbhar1.github.io/ux-prompter-test/](https://shraddhakumbhar1.github.io/ux-prompter-test/)

## Features

*   **Categorized Challenges:** Generates random design challenges across five categories:
    *   UX Design
    *   UI Design
    *   Interaction Design
    *   Product Design
    *   Service Design
*   **Dynamic Background:** Page background color changes based on the selected category.
*   **Instant Prompts:** Displays a relevant challenge immediately upon selecting a category or clicking "New Challenge".
*   **Challenge Download:** Allows users to download the currently displayed challenge as an 800x800 PNG image.
    *   The image includes the challenge text, category name, and timestamp.
    *   The background simulates the website's particle effect using the current category's color.
*   **Interactive UI:** Features subtle hover animations on buttons.
*   **Particle Background:** Utilizes tsParticles for a dynamic node/particle animation in the bottom half of the screen.

## Project Structure

*   `index.html`: The main HTML structure, including category buttons, action buttons, and prompt display area.
*   `style.css`: Defines the visual appearance, layout, colors, fonts, and animations.
*   `script.js`: Handles all application logic:
    *   tsParticles initialization.
    *   Storing and retrieving challenge prompts.
    *   Handling button clicks (category selection, new challenge, download).
    *   Dynamically changing background color and action button text color.
    *   Generating the downloadable challenge image using Canvas API.

## How to Use

1.  Visit the [Live Demo](https://shraddhakumbhar1.github.io/ux-prompter-test/) or open `index.html` locally.
2.  The page loads with the "UX Design" category selected and a challenge displayed.
3.  Click a different category button to see a challenge from that area and change the background color.
4.  Click the "New Challenge" button to get a new random prompt within the selected category.
5.  Click the "Download" button to save the current challenge as a PNG image.

## Credits

*   Made by SK
*   Inspired by [Sharpen.design](https://sharpen.design/) and [calluxpore/ID-Prompts](https://github.com/calluxpore/ID-Prompts)