//# sourceMappingURL=portfolio.js.map
$(document).ready(function() {
    let projectIndex = 0; // Keeps track of the current project being displayed

    // Arrays containing project details: names, descriptions, and image paths
    const projectNames = ["Quiz", "Climate Forecast App"];
    const descriptions = ["A quiz game where users answer multiple-choice questions and get instant feedback. It's ideal for beginners to learn event handling, data management, and scoring systems in JavaScript.", "A straightforward weather app that retrieves weather data from an API and presents it to users. This project introduces newcomers to APIs, asynchronous JavaScript, and dynamic content manipulation on web pages."];
    const imagePaths = ["../../client/scripts/quiz.jpg", ""]; // Paths to images for each project

    // Function to generate HTML markup for a project card
    function generateProjectCard() {
        // Obtain project details based on the current index
        const projectName = projectNames[projectIndex % projectNames.length];
        const description = descriptions[projectIndex % descriptions.length];
        const imagePath = imagePaths[projectIndex % imagePaths.length];

        // Construct HTML for the project card using obtained details
        const projectCardHTML = `
            <div class="col-md-4">
                <div class="project-card">
                    <h3>${projectName}</h3>
                    <p>${description}</p>
                    <img src="${imagePath}" alt="${projectName}">
                </div>
            </div>
        `;
        projectIndex++; // Move to the next project for the next call
        return projectCardHTML;
    }

    // Function to load projects into the DOM
    function loadProjects() {
        const projectContainer = $('#projectContainer'); // Container to hold project cards
        const projectsPerLoad = 1; // Number of projects to load each time

        // Append new project cards to the container
        for (let i = 0; i < projectsPerLoad; i++) {
            const projectCardHTML = generateProjectCard();
            projectContainer.append(projectCardHTML);
        }
    }

    // Load initial projects when the page loads
    loadProjects();

    // Load more projects when the "Load More" button is clicked
    $('#loadMoreBtn').on('click', function() {
        loadProjects();
    });
});
