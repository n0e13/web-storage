document.querySelector("form[name='save_data']").addEventListener('submit', function (event) {

  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  const image = event.target.img.value;

  saveUser(name, email, message, image);

})

function saveUser(name, email, message, image) {
  // Primero leemos si hay algo almacenado y si no creamos un array vacío
  let aUsers = JSON.parse(localStorage.getItem("user") || "[]");

  // creo el nuevo objeto usuario
    let oNewUser = {
      name: name,
      email: email,
      message: message,
      image: image
    };

    // añado el objeto al array
    aUsers.push(oNewUser);

    //Escribir
    localStorage.setItem(
      "user",
      JSON.stringify(aUsers)
    );

    // Llamamos a la función escribir para que lo muestre en pantalla
    writeUser();
}

function writeUser() {
  let contactSection = document.getElementById("contacts-section");

  //Leer
  if(localStorage.length > 0) {
    let user = JSON.parse(localStorage.getItem("user"));
    contactSection.innerHTML = `<h1>Estos son los contactos guardados:</h1>`;
    for(let i = 0; i < user.length; i++){
      contactSection.innerHTML += `<p>Usuario: ${user[i].name}, E-mail: ${user[i].email}, Foto: ${user[i].image}, Mensaje: ${user[i].message}</p>`
    }
  }
}
