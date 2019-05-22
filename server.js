var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var customers = [
    {
        name: "Bobby",
        phoneNumber: "389-478-4832",
        email: "bobby@bobby.com",
        uniqueID: 324
        
    },
    {
        name: "Julie",
        phoneNumber: "381-485-8392",
        email: "julie@julie.com",
        uniqueID: 482
    },
    {
        name: "Alejandro",
        phoneNumber: "298-389-1839",
        uniqueID: 548
    }
];

app.get("/view.html", function(req, res) {
    res.sendFile(path.join(__dirname, "./view.html"));
});

app.get("/make.html", function(req, res) {
    res.sendFile(path.join(__dirname, "./make.html"))
});

app.get("/home.html", function(req,res) {
    res.sendFile(path.join(__dirname, "./home.html"))
});

app.get("/api/customers", function(req, res) {
    return res.json(customers);
});

app.get("api/customers/:customer", function(req, res) {
    var chosen = req.params.customer;

    console.log(chosen);

    for (var i = 0; i < customers.length; i++) {
        if (chosen === customers[i].routeName) {
            return res.json(customers[i]);
        }
    }

    return res.send("No customers found");
});

app.post("/api/customers", function (req, res) {
    var newCustomer = req.body;

    console.log(newCustomer);

    customers.push(newCustomer);

    res.json(newCustomer);

    res.send(body)
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})

