//# sourceMappingURL=app.js.map
// IIFE (Immediately Invoked Function Expression): This function is executed immediately after it's defined.
(function () {

    // Function to check if a user is logged in and update the UI accordingly.
    function checkLogin() {
        // If user data exists in sessionStorage, display logout button.
        if (sessionStorage.getItem("user")) {
            $("#login").html(`<a id="logout" class="nav-link" href="#"><i class="fa-solid fa-sign-out-alt"></i> Logout</a>`);
        }

        // Event listener for logout button click.
        $("#logout").on("click", function () {
            // Clear user data from sessionStorage and redirect to login page.
            sessionStorage.clear();
            location.href = "login.html";
        });
    }

    // Function to load header content dynamically from an external HTML file.
    function loadHeader(htmlData) {
        $("header").html(htmlData);
        // Add 'active' class to the navigation item corresponding to the current page.
        $(`li>a:contains(${document.title})`).addClass("active").attr("aria-current", "page");
        // Check login status after header is loaded.
        checkLogin();
    }

    // Function to make AJAX requests.
    function ajaxRequest(method, url, callback) {
        $.ajax({
            method: method,
            url: url,
            success: function (data) {
                // Call the specified callback function with the retrieved data.
                callback(data);
            },
            error: function (xhr, status, error) {
                // Log any errors encountered during the AJAX request.
                console.error("Error:", error);
            }
        });
    }

    // Wait for the DOM content to be fully loaded before executing the code inside.
    document.addEventListener("DOMContentLoaded", function() {
        // Initialize the map with Leaflet.js.
        var map = L.map('map').setView([51.505, -0.09], 13);

        // Add a tile layer (using OpenStreetMap) to the map.
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker to the map.
        var marker = L.marker([51.5, -0.09]).addTo(map);
    });

    // Function to handle functionality on the Home page.
    function displayHomePage() {
        // Log that the function has been called.
        console.log("Called displayHomePage()");

        // Event listener for the "About Us" button to navigate to the team page.
        let teamButton = document.getElementById("TeamBtn");
        teamButton.addEventListener("click", function () {
            location.href = "../views/content/team.html";
        });

        // Wait for the DOM content to be fully loaded before accessing elements.
        document.addEventListener('DOMContentLoaded', function () {
            // Access the video element by its ID.
            let video = document.getElementById('backgroundVideo');
        });
    }

    // Function to handle functionality on the Portfolio page.
    function displayPortfolioPage() {
        // Log that the function has been called.
        console.log("Called displayPortfolioPage()");
        // Add functionality specific to the Portfolio page here.
    }

    // Function to handle functionality on the Service page.
    function displayServicePage() {
        // Log that the function has been called.
        console.log("Called displayServicePage()");
        // Add functionality specific to the Service page here.
    }

    // Function to handle functionality on the Team page.
    function displayTeamPage() {
        // Log that the function has been called.
        console.log("Called displayTeamPage()");
        // Add functionality specific to the Team page here.
    }

    // Function to handle functionality on the Blog page.
    function displayBlogPage() {
        // Log that the function has been called.
        console.log("Called displayBlogPage()");
        // Add functionality specific to the Blog page here.
    }

    // Function to handle functionality on the Event page.
    function displayEventPage() {
        // Log that the function has been called.
        console.log("Called displayEventPage()");
        // Add functionality specific to the Event page here.
    }

    // Function to handle functionality on the Privacy Policy page.
    function displayPrivacyPolicyPage() {
        // Log that the function has been called.
        console.log("Called displayPrivacyPolicyPage()");
        // Add functionality specific to the Privacy Policy page here.
    }

    // Function to handle functionality on the Terms Of Service page.
    function displayTermsOfServicePage() {
        // Log that the function has been called.
        console.log("Called displayTermsOfServicePage()");
        // Add functionality specific to the Terms Of Service page here.
    }

    // Function to handle functionality on the Contact Us page.
    function displayContactUsPage() {
        // Log that the function has been called.
        console.log("Called displayContactUsPage()");
        // Add functionality specific to the Contact Us page here.
    }

    // Function to handle functionality on the Gallery page.
    function displayGallerypage() {
        // Log that the function has been called.
        console.log("Called displayGallerypage()");
        // Add functionality specific to the Gallery page here.
    }

    // Function to start the application.
    function start() {
        // Log that the application has started.
        console.log("App Started...");
        // Load the header content dynamically from an external HTML file.
        ajaxRequest("GET", "../components/header.html", loadHeader);

        // Perform actions based on the current page title.
        switch (document.title) {
            case "Home":
                displayHomePage();
                break;
            case "Portfolio":
                displayPortfolioPage();
                break;
            case "Service":
                displayServicePage();
                break;
            case "Team":
                displayTeamPage();
                break;
            case "Blog":
                displayBlogPage();
                break;
            case "Event":
                displayEventPage();
                break;
            case "Gallery":
                displayGallerypage();
                break;
            case "Privacy Policy":
                displayPrivacyPolicyPage();
                break;
            case "Terms Of Service":
                displayTermsOfServicePage();
                break;
            case "Contact":
                displayContactUsPage();
                break;
            default:
                // Log an error message if the page title is unknown.
                console.error("Unknown page:", document.title);
        }
    }

    function start2() {
        // Log that the application has started.
        console.log("App Started...");
        // Load the header content dynamically from an external HTML file.
        ajaxRequest("GET", "../components/header.html", loadHeader);

        // Perform actions based on the current page title.
        switch (document.title) {
            case "Home":
                displayHomePage();
                break;
            default:
                // Log an error message if the page title is unknown.
                console.error("Unknown page:", document.title);
        }
    }
    // Final event listener to start the application when the window is fully loaded.
    $(window).on("load", start);

})();
