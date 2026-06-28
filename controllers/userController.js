import User from "../models/User.js";
import bcrpt from "bcrypt"
import jwt from "jsonwebtoken"

export async function createUser(req, res) {
    try {

        const passwordHash = bcrpt.hashSync(req.body.password, 10)

        const newUser = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: passwordHash
        })

        await newUser.save()

        res.json({
            message: "User Created Successfully"
        })
    } catch (error) {

        res.json({
            message: "Error creating user"
        })

    }

}

export async function loginUser(req, res) {


    try {

        const user = await User.findOne({
            email: req.body.email
        })
        console.log(user)

        if (user == null) {
            res.status(404).json({
                message: "user not found"
            })
        } else {
            const isPasswordCorrect = bcrpt.compareSync(req.body.password, user.password)
            if (isPasswordCorrect) {

                const payload = {
                    email: user.email,
                    firstName: user.firstName,
                    lastName : user.lastName,
                    isAdmin: user.isAdmin,
                    isBlocked: user.isBlocked,
                    isEmailVerified: user.isEmailVerified,
                    image: user.iamge
                }

                const token = jwt.sign(payload, "I-Computers10Batch",{
                    expiresIn: "48h"
                })

                // console.log(token)

                res.json({
                    token :  token
                })


            } else {
                res.status(401).json({
                    message: "Invalid Password"
                })
            }
        }


    } catch (error) {
        res.status(500).json({
            message: "Error logging in"
        })
    }
}

export  function isAdmin(req) {
    if (req.user == null) {
        return false
    }
    if (req.user.isAdmin) {
        return true
    }else {
        return false
    }
}
