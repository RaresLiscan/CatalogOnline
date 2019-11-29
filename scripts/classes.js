function logout() {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(error => console.log(error));
}

function render(template, node) {
    node.innerHTML = template;
}

function nav (destination) {
    window.location.href = destination;
}

function getClassDetails (doc, index) {
    return "<tr onclick='nav(`register_student.html`)'>" +
            `<th scope='row'>${index}` +
            `<td>${doc.name}</td>` +
            `<td>${doc.users.length}</td>` +
        "</tr>";
}

async function tables () {
    let rows = "";
    const classes = firebase.firestore().collection('classes');
    var i = 1;
    await classes.get()
        .then(response => {
            response.docs.forEach(doc => {
                const item = doc.data();
                rows += getClassDetails(item, i);
                i ++;
            })
        })
        .catch(error => console.log(error));
    const template =
        "<div class='container'>" +
            "<div class='row'>" +
                "<div class='col-md-12'>" +
                    "<div class='table-responsive'>" +
                        "<table class='table table-bordered'>" +
                            "<thead class='thead-dark'>" +
                                "<tr>" +
                                    "<th>Nr</th>" +
                                    "<th>Numele clasei</th>" +
                                    "<th>Numar elevi</th>" +
                                "</tr>" +
                            "</thead>" +
                            "<tbody>" +
                                rows +
                            "</tbody>" +
                        "</table>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";
    render(template, document.querySelector("#classes"));
}

//https://gomakethings.com/rendering-content-with-vanilla-javascript/