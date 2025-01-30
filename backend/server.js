const data = require('./data');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 5000
let cors = require('cors')
const mongoose = require('mongoose');
app.use(cors())


main().catch(err => console.log(err));


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    const EmployeeSchema = new mongoose.Schema({
        name: String,
        position: String,
        skills: [String],
        contact: {
            email: String,
            phone: String,
        },
        department: String,
        experience: Number,
    });

    const Employee = mongoose.model("Employee", EmployeeSchema);
    for (const empobj of data) {
        const employeeData = new Employee(empobj);
        employeeData.save().then((d) => {
            console.log("saved");
        });
    }


    app.get("/employees", (req, res) => {
        Employee.find({}).then((result) => {
            res.json(result);
        }).catch((err) => res.status(500).json({ error: err.message }));
    });

    app.get("/employees/:id", (req, res) => {
        const employeedIdInRequest = req.params.id;

        Employee.findById(employeedIdInRequest)
            .then(employee => {
                res.json(employee);
            })

    })

    app.post("/employees", (req, res) => {
        const newEmployee = req.body;
        newEmployee.id = Math.floor(Math.random() * 2000);
        const newEmpData = new Employee(newEmployee)
        newEmpData.save().then((newEmp) => {
            res.json(newEmp)
        })
    });
    app.put("/employees/:id", (req, res) => {
        const employeedIdInRequest = req.params.id;
        const update = req.body;

        Employee.findByIdAndUpdate(
            employeedIdInRequest,
            update,
        ).then((updatedEmployee) => {
            res.json(updatedEmployee);

        })
    });

    app.delete("/employees/:id", (req, res) => {
        const employeedIdInRequest = req.params.id;
        Employee.findByIdAndDelete(employeedIdInRequest).then((result) => {
            res.json("deleated employee successfully");
        })

    });
}

function validation(emplyName) {
    if (
        !emplyName.name ||
        typeof emplyName.name != "string" ||
        emplyName.name.trim() == ""
    ) {
        throw Error("Name is required and must be a non-empty string");
    }
}




// Middleware to parse JSON and URL-encoded data 
app.use(bodyParser.json()); // Parse application/json 
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



