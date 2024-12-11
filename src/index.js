const init = () => {

    // Add event listeners to capture form data and override a form's default behavior
   
    const inputForm = document.querySelector("form");
    
    // Fetch data based on what the user types into that form
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // The event object actually contains the value we need
        // We can select the specific DOM element and get its value
        const input = document.querySelector("input#searchByID");
        console.log(input.value);
    
        // Display that data on the page
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    
    });
}
document.addEventListener('DOMContentLoaded', init);
