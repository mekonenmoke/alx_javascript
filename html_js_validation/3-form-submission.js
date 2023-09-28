// Function to handle form submission
function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Retrieve form field values
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
  
    // Get the values entered by the user
    const name = nameField.value.trim();
    const email = emailField.value.trim();
  
    // Perform validation
    if (name === "" || email === "") {
      // Display an error message if any required fields are empty
      alert("Please fill in all required fields.");
    } else {
      // Display a success message and optionally submit the form
      alert("Form submitted successfully!");
      // Uncomment the line below to submit the form
      // document.getElementById("submitForm").submit();
    }
  }
  
  // Add an event listener to the form element
  const form = document.getElementById("submitForm");
  form.addEventListener("submit", handleFormSubmit);
  