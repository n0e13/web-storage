/* document.querySelector("form[name='save_data']").addEventListener('submit', function (event) {

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
} */

/*________FIREBASE________*/

// Your web app's Firebase configuration
let firebaseConfig = {
  // Tu objeto de configuración aquí

  apiKey: "AIzaSyAHux0KxiIDribUeMa470F86W5P5uTKB4g",
  authDomain: "pruebaweb-cf4a9.firebaseapp.com",
  projectId: "pruebaweb-cf4a9",
  storageBucket: "pruebaweb-cf4a9.appspot.com",
  messagingSenderId: "95460811666",
  appId: "1:95460811666:web:a13a5d9fa53b494612174b"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const createUser = (user) => {
  db.collection("usuarios-firebase")
    .add(user)
    .then((docRef) => console.log("Document written with ID: ", docRef.id))
    .catch((error) => console.error("Error adding document: ", error));
};

document.querySelector("form[name='save_data']").addEventListener('submit', function (event) {

  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  const image = event.target.img.value;

  createUser({
    email: email,
    foto: image,
    mensaje: message,
    nombre: name
  });

  readAllUsers();


})

const readAllUsers = () => {
  let contactSection = document.getElementById("contacts-section");
  contactSection.innerHTML = `<h1>Estos son los contactos guardados:</h1>`;

  db.collection("usuarios-firebase").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //Leer

          contactSection.innerHTML += `<p>Usuario: ${doc.data().nombre}, E-mail: ${doc.data().email}, Foto: ${doc.data().foto}, Mensaje: ${doc.data().mensaje}</p>`
console.log(doc)
      });
  });
}




/* const readAllUsers = (born) => {
  db.collection("usuarios-firebase")
    .where("born", "==", born)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
};
readAllUsers(4) */








/*
// Read ONE
//busca por id y cuando lo tengas dime lo que hay.
function readOne(id) {
  db.collection("users")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
//readOne("690WYQfTZUoEFnq5q1Ov"); */