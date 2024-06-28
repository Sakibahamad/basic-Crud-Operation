document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".add-button");
    const tableBody = document.querySelector("tbody");

    addButton.addEventListener("click", function() {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="text" class="input-field" placeholder="Enter Name"></td>
            <td>
                <select class="input-field">
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                    <option value="1st year">1st Year</option>
                    <option value="2nd year">2nd Year</option>
                    <option value="3rd year">3rd Year</option>
                    <option value="4th year">4th Year</option>
                </select>
            </td>
            <td><input type="email" class="input-field" placeholder="Enter Email"></td>
            <td>
                <select class="input-field">
                    <option value="Cricket">Cricket</option>
                    <option value="Singing">Singing</option>
                    <option value="Dancing">Dancing</option>
                </select>
            </td>
            <td>
                <select class="input-field">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </td>
            <td class="action-icons">
                <img src="image.png" alt="Save" class="action-icon save-icon">
                <img src="delete.jpeg" alt="Delete" class="action-icon delete-icon">
                <img src="update.png" alt="Update" class="action-icon update-icon">
            </td>
        `;
        tableBody.appendChild(newRow);

        const actionIcons = newRow.querySelector(".action-icons");

        actionIcons.addEventListener("click", function(event) {
            const target = event.target;
            if (target.classList.contains("delete-icon")) {
                const confirmation = confirm("You Want to delete this row?");
                if (confirmation) {
                    const row = this.closest("tr");
                    row.remove();
                }
            } else if (target.classList.contains("save-icon")) {
                const confirmation = confirm("You Want to save this row?");
                if (confirmation) {
                
                }
            } else if (target.classList.contains("update-icon")) {
                const confirmation = confirm("You Want to Update this row?");
                if (confirmation) {
            
                }
            }
        });
    });
});
