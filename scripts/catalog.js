let grades = [];
let absences = [];


function logout() {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => console.log(error));
}

async function getData() {
    const userID = firebase.auth().currentUser.uid;
    const gradesRef = firebase.firestore().collection("grades");
    let gradesObj = {};
    await gradesRef.get()
        .then(response => {
            response.docs.forEach(doc => {
                const item = doc.data();
                if (item.id.localeCompare(userID) === 0) {
                    gradesObj = item;
                }
            })
        })
        .catch(error => console.log(error));
    const absencesRef = firebase.firestore().collection("absences");
    let absencesObj = {};
    await absencesRef.get()
        .then(response => {
            response.docs.forEach(doc => {
                const item = doc.data();
                if (item.id.localeCompare(userID) === 0) {
                    absencesObj = item;
                }
            })
        })
        .catch(error => console.log(error));
    renderTable(gradesObj.romana, absencesObj.romana, "LIMBA SI LIERATURA ROMANA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");
    renderTable(gradesObj.mate, absencesObj.mate, "MATEMATICA", "sem1");

}


// function getGrades () {
//     const userID = firebase.auth().currentUser.uid;
//     const ref = firebase.firestore().collection('grades');
//     ref.get()
//         .then((response) => {
//             response.forEach(doc => {
//                 const item = doc.data();
//                 console.log(item);
//                 if (item.id.localeCompare(userID) === 0) {
//                     grades = item;
//                     renderGrades(item.romana, "Limba si literatura romana", "sem1");
//                 }
//             })
//         })
//         .catch(error => console.log(error));
// }

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

function renderTable (classGrades, classAbsences, className, id) {
    const item = document.getElementById(id);
    const I = document.createElement("div");
    I.className = "col-md-6 col-xl-4 col-lg-4 col-sm-12";
    const tableBig = document.createElement("table");
    tableBig.className = "table table-bordered";
    const thead1 = document.createElement("thead");
    const tr1 = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.textContent = className;
    tr1.appendChild(th1);
    thead1.appendChild(tr1);
    tableBig.appendChild(thead1);
    const tbody1 = document.createElement("tbody");
    const table2 = document.createElement("table");
    table2.className = "table table-bordered";
    const thead2 = document.createElement("thead");
    const tr2 =  document.createElement("tr");
    const th2 = document.createElement("th");
    th2.textContent = "Note";
    const th3 = document.createElement("th");
    th3.textContent = "Absente";
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    thead2.appendChild(tr2);
    table2.appendChild(thead2);
    const tbody2 = document.createElement("tbody");
    var n = classGrades.length, m = classAbsences.length, M = n > m ? n : m;
    for (var i = 0; i < M; i ++) {
        const tr3 = document.createElement("tr");
        const tdGrades = document.createElement("td");
        const tdAbsences = document.createElement("td");
        console.log(i);
        console.log(classGrades[i]);
        if (i >= n) {
            tdGrades.textContent = "";
            tdAbsences.textContent = classAbsences[i].toString();
        }
        else if (i >= m) {
            tdGrades.textContent = classGrades[i].grade.toString() + " / " + classGrades[i].date.toString();
            tdAbsences.textContent = "";
        }
        else {
            tdGrades.textContent = classGrades[i].grade.toString() + " / " + classGrades[i].date.toString();
            tdAbsences.textContent = classAbsences[i].toString();
        }
        tr3.appendChild(tdGrades);
        tr3.appendChild(tdAbsences);
        tbody2.appendChild(tr3);
    }
    table2.appendChild(tbody2);
    tbody1.appendChild(table2);
    tableBig.appendChild(tbody1);
    I.appendChild(tableBig);
    item.appendChild(I);
    // let p = document.createElement("p");
    // let name = document.createElement("div");
    // p.textContent = className;
    // name.appendChild(p);
    // item.appendChild(name);
    // let note = document.createElement("p");
    // note.textContent = "Note";
    // item.appendChild(note);
    // classGrades.forEach(element => {
    //     var grade = document.createElement("p");
    //     grade.textContent = element.grade + " " + element.date;
    //     item.appendChild(grade);
    // })
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