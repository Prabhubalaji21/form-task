
      const form = document.querySelector("form");
      const dataTable = document.querySelector("#dataTable tbody");

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = form.elements.firstName.value;
        const lastName = form.elements.lastName.value;
        const address = form.elements.address.value;
        const pincode = form.elements.pincode.value;
        const gender = form.elements.gender.value;
        const food = [...form.elements.food]
          .filter((input) => input.checked)
          .map((input) => input.value)
          .join(", ");
        const state = form.elements.state.value;
        const country = form.elements.country.value;

        const newRow = dataTable.insertRow(-1);
        const firstNameCell = newRow.insertCell(0);
        const lastNameCell = newRow.insertCell(1);
        const addressCell = newRow.insertCell(2);
        const pincodeCell = newRow.insertCell(3);
        const genderCell = newRow.insertCell(4);
        const foodCell = newRow.insertCell(5);
        const stateCell = newRow.insertCell(6);
        const countryCell = newRow.insertCell(7);

        firstNameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        addressCell.textContent = address;
        pincodeCell.textContent = pincode;
        genderCell.textContent = gender;
        foodCell.textContent = food;
        stateCell.textContent = state;
        countryCell.textContent = country;

        form.reset();
      });