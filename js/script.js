document.querySelector("form[name='save_data']").addEventListener('submit', function (event) {

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  saveUser(name, email, message);

})

function saveUser(name, email, message) {
  // Primero leemos si hay algo almacenado y si no creamos un array vacío
  let aUsers = JSON.parse(localStorage.getItem("user") || "[]");

  // creo el nuevo objeto usuario
    let oNewUser = {
      "nameKey": name,
      "emailKey": email,
      "messageKey": message
    };

    // añado el objeto al array
    aUsers.push(oNewUser);

    //Escribir
    localStorage.setItem(
      "user",
      JSON.stringify(aUsers)
    );

    // Llamamos a la función escribir para que lo muestre en pantalla
    writeUser()
}

function writeUser() {
  let contactSection = document.getElementsByClassName("contacts-section");

  //Leer
  let user = JSON.parse(localStorage.getItem("user") || "[]");
  contactSection.innerHTML = `<h1>Estos son los contactos guardados:</h1><p>Usuario: ${user.nameKey}, E-mail: ${user.emailKey}, Mensaje: ${messageKey}</p>`

}