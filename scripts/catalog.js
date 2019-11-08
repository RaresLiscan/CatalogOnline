let grades = [];
let absences = [];


function logout() {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => console.log(error));
}


function getGrades () {
    const userID = firebase.auth().currentUser.uid;
    const ref = firebase.firestore().collection('grades');
    ref.get()
        .then((response) => {
            response.forEach(doc => {
                const item = doc.data();
                console.log(item);
                if (item.id.localeCompare(userID) === 0) {
                    grades = item;
                    renderGrades(item.romana, "Limba si literatura romana");
                }
            })
        })
        .catch(error => console.log(error));
}

function getAbsences() {
    const userID = firebase.auth().currentUser.uid;
    const ref = firebase.firestore().collection('absences');
    ref.get()
        .then(response => {
            response.forEach(doc => {
                const item = doc.data();
                if (item.id.localeCompare(userID) === 0) {
                    absences = item;
                    renderAbsences(item.romana);
                }
            })
        })
        .catch(error => console.log(error));
}

function renderGrades (classGrades, className) {
    const item = document.getElementById("catalog");
    let p = document.createElement("p");
    let name = document.createElement("div");
    p.textContent = className;
    name.appendChild(p);
    item.appendChild(name);
    let note = document.createElement("p");
    note.textContent = "Note";
    item.appendChild(note);
    classGrades.forEach(element => {
        var grade = document.createElement("p");
        grade.textContent = element.grade + " " + element.date;
        item.appendChild(grade);
    })
}

function renderAbsences (classAbsences) {
    const item = document.getElementById("catalog");
    let p = document.createElement("p");
    p.textContent = "Absente";
    item.appendChild(p);
    classAbsences.forEach(element => {
        var absence = document.createElement("p");
        absence.textContent = element;
        item.appendChild(absence);
    })
}