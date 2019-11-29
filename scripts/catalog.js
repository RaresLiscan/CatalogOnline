//Logout from the app and navigate to Login screen
function logout() {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => console.log(error));
}


//Get data from Firebase and call "renderTable" function for each class that we get
async function getData() {
    //Get the user ID
    const userID = firebase.auth().currentUser.uid;

    //Get all the grades from firebase for the current user
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

    //Get all absences from firebase for the current user
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

    //Render the tables with the data that we got
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

//Render a table for a specific class
function renderTable (classGrades, classAbsences, className, id) {
    //The big div that we are going to insert the tables in
    const item = document.getElementById(id);
    //The column to responsive design
    const I = document.createElement("div");
    I.className = "col-md-6 col-xl-4 col-lg-4 col-sm-12";
    //The big table
    const tableBig = document.createElement("table");
    tableBig.className = "table table-bordered";
    //Big table head with the title
    const thead1 = document.createElement("thead");
    const tr1 = document.createElement("tr");
    //Class title
    const th1 = document.createElement("th");
    th1.className = "text-center";
    th1.textContent = className;
    tr1.appendChild(th1);
    thead1.appendChild(tr1);
    tableBig.appendChild(thead1);

    //The body of the table with the other dynamic table
    const tbody1 = document.createElement("tbody");
    const table2 = document.createElement("table");
    table2.className = "table table-bordered";

    //The table header with the headings for grades and absences
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

    //The dynamic content with the grades and absences from firebase
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

    //Teza si media
    const table3 = document.createElement("table");
    table3.className = "table table-bordered";
    const tbody3 = document.createElement("tbody");
    const tr3 = document.createElement("tr");
    const td4 = document.createElement("td");
    td4.textContent = "Teza";
    const td5 = document.createElement("td");
    // td5.textContent = "10";
    tr3.appendChild(td4);
    tr3.appendChild(td5);
    const tr4 = document.createElement("tr");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    td6.textContent = "Medie";
    // td7.textContent = "10";
    tr4.appendChild(td6);
    tr4.appendChild(td7);
    tbody3.appendChild(tr3);
    tbody3.appendChild(tr4);
    table3.appendChild(tbody3);


    //Final adds
    table2.appendChild(tbody2);
    tbody1.appendChild(table2);
    tbody1.appendChild(table3);
    tableBig.appendChild(tbody1);
    I.appendChild(tableBig);
    item.appendChild(I);
}