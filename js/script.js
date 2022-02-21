document.querySelector("form[name='save_data']").addEventListener('submit',function(event){

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;


let contactSection = document.getElementsByClassName("contacts-section");



//Escribir
localStorage.setItem(
    "user",
    JSON.stringify({
      "nameKey": name,
      "emailKey": email,
      "messageKey": message
    })
  );

  //Leer
    
    contactSection.innerHTML = `<h1>Estos son los contactos guardados:</h1><p>Usuario: ${user.nameKey}, E-mail: ${user.emailKey}, Mensaje: ${messageKey}</p>`

})


const showContacts = () => {
    
}
var user = JSON.parse(localStorage.getItem("user"));