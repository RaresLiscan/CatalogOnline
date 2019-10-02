function login () {
    let email = document.getElementById("userID").value;
    let password = document.getElementById("userPassword").value;
    email += "@cnmv.com";
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    if (email.substring(0, 4).localeCompare("CNMV") === 0) window.location.href = "catalog.html";
                    else window.location.href = "classes.html";
                })
                .catch(error => {
                    console.log(error);
                    alert("Numele de utilizator sau parola sunt incorecte");
                    document.getElementById("userPassword").value = "";
                });
        })
        .catch(error => console.log(error));
}