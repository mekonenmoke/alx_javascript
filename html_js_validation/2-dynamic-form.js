// Retrieve the selected value from the dropdown menu
const dropdown = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');

// Event listener to detect changes in the dropdown menu selection
dropdown.addEventListener('change', function() {
  const selectedValue = parseInt(this.value);
  generateInputFields(selectedValue);
});

// Function to generate the specified number of text input fields dynamically
function generateInputFields(numFields) {
  inputContainer.innerHTML = ''; // Clear the input container

  for (let i = 1; i <= numFields; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'field' + i;
    input.required = true;

    inputContainer.appendChild(input);
  }
}

// Function to validate the form before submission
function validateForm(event) {
  const inputs = inputContainer.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      event.preventDefault(); // Prevent form submission
      alert('Please fill in all fields');
      break;
    }
  }
}

// Event listener to handle form submission
const form = document.getElementById('dynamicForm');
form.addEventListener('submit', validateForm);