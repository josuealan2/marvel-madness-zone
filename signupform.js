// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    
    // Simulated user login information
    const userLoginInfo = {
        username: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    // Convert the user login info to a JSON string
    const userInfoJSON = JSON.stringify(userLoginInfo);

    // Check if the user info is already saved in localStorage
    if (localStorage.getItem("userInfo")) {
        const savedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
        // Check if the entered email matches the saved email
        if (userLoginInfo.email === savedUserInfo.email) {
            // Display a popup alert for returning users
            $("#msg").text("You have already signed up for Marvel updates.");
        } else {
            // Save the new user login info to localStorage
            localStorage.setItem("userInfo", userInfoJSON);
            // Display a popup alert for first-time users
            $("#msg").text("Thank you for signing up for more Marvel updates!");
        }
    } else {
        // Save the user login info to localStorage
        localStorage.setItem("userInfo", userInfoJSON);
        // Display a popup alert for first-time users
        $("#msg").text("Thank you for signing up for more Marvel updates!");
    }
}

// Add a submit event listener to the form
const form = document.getElementById("signup-form");
form.addEventListener("submit", handleFormSubmission);