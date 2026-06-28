import Student from "../models/student.js"

export function createStudent(req, res) {

    if (req.user == null) {
        res.status(403).json({
            message: "Unauthorized Access: You need to login before creating a student"
        })
        return
    }

    if (!req.user.isAdmin) {
        res.status(403).json({
            message: "Unauthorized Access: Only Admins can create students"
        })
        return
    }

    const newStudent = new Student(
        {
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        }
    )

    newStudent.save().then(
        () => {
            res.json({
                message: "Student Created Successfully"
            })
        }
    )
}

export async function createStudentAsync(req, res) {
    try {
        const newStudent = newStudent({
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        });

        await newStudent.save()
        res.json({
            message: "Student created successfully",
        });

    } catch (error) {
        console.log("Error creating student: ", error);
    }



}

export function getStudents(req, res) {

    Student.find().then(

        (students) => {

            res.json(students)

        }
    )
}