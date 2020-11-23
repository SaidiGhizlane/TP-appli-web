window.onload = function () {
  
  document.querySelector("#gps").addEventListener("click", function (event) {
    event.preventDefault();
    getLocation();
  });

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    contactStore.add(
      document.querySelector("#name").value,
      document.querySelector("#firstname").value,
      document.querySelector("#birth").value,
      document.querySelector("#adresse").value,
      document.querySelector("#mail").value
    );

    const contactList = contactStore.getList();

    document.querySelector("table tbody").innerHTML = "";

    for (var contact of contactList) {
      document.querySelector("table tbody").innerHTML += `
        <tr>
            <td> ${contact.name}</td>
            <td> ${contact.firstname}</td>
            <td> ${contact.date}</td>
            <td> <a href="https://maps.google.com/?q=${contact.adress}">${contact.adress}</a></td>
            <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
        <tr>`;
    }
  });
};
