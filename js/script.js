document.querySelector("form[name='save_data']").addEventListener('submit',function(event){

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;


    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    
})











/* console.log(`Hola, mi nombre es ${firstName} ${lastName}`); */