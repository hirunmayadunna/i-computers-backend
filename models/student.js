import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        city : String
    }
)


//one that complety can haddle one collection in a data base [ mongoose.model("Student, studentSchema") ]
const Student = mongoose.model("Student", studentSchema) 

export default Student