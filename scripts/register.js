function registerStudent() {
    let name = document.getElementById("name").value;
    let grade = document.getElementById("grade").value;
    let username = document.getElementById("userID").value;
    let password = document.getElementById("password").value;
    username += "@cnmv.com";
    const users = firebase.firestore().collection("users");

    firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(response => {
            console.log(response);
            const obj = {
                name: name,
                startYear: grade,
                userID: response.user.uid
            };
            users.add(obj)
                .then(() => {
                    window.location.href = "students.html";
                })
                .catch(error => console.log(error));
        })
        .catch(error => console.log(error))
}

function logout() {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => console.log(error));
}
