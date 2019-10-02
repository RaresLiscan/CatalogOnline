function test() {
    document.getElementById("id").innerHTML = "Salut!";
}

const obj = [
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
    {
        name: "Bucurul",
        email: "Boy",
    },
];

function createList (parent) {
    var array = obj;
    array.forEach(function (o) {
        var li = document.createElement("li");
        li.textContent = o.name;
        parent.appendChild(li);
    })
}

function navigate() {
    window.location.href = "catalog.html";
}