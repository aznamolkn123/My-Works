
// name should be present
// experience is required
// Email is also required
// Position should be valid

const data = {
    "id": 9,
    "name": "Isabel Scott",
    "position": "Customer Success",
    "skills": ["Communication", "Problem Solving", "CRM Tools"],
    "contact": {
        "email": "isabel.scott@example.com",
        "phone": "555-9012"
    },
    "department": "Customer Service",
    "experience": 4
}
function Validation(data) {
    if (!data.name) {
        throw new Error('name is not found')
    }
    if (!data.experience) {
        throw new Error('experience is not found')
    }
    if (!data.contact.email) {
        throw new Error('email is not found')
    }
    if (data.position === "") {
        throw new Error('position is not valid')
    }
}

try {
    Validation(data)
} catch (error) {
    console.log(error)
}

