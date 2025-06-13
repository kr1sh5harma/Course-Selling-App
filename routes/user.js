const { Router } = require("express");
const {userModel, purchaseModel} = require("../db");
const bcrypt = require("bcrypt");
const userRouter = Router();    
const z = require('zod');
const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = require("../config");


//post router for user to signup
userRouter.post("/signup", async function (req, res) {
    //input validation by zod
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(6).max(100),
        fistName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30)
    })

    //parse the requireBody using the requireBody.safeParse() method to validate the data format
    const parsedDataSuccess = requireBody.safeParse(req.body);

    //If data is not correct then return this error
    if(!parsedDataSuccess.success){
        return res.json({
            message: "incorrect format",
            error: parsedDataSuccess.error
        })
    }

    //extracting validated email, password, firstName and lastName from the request body
    const {email, password, firstName, lastName} =req.body;

    //hash the users password using the bcrypt with a salt rounds of 5
    const hashedPassword = await bcrypt.hash(password, 5);

    //creating a new user in the database
    try{
        await userModel.create({
            email,
            password: hashedPassword,
            firstName, 
            lastName,
        });
    }
    catch(e){
        //if there is an error during in user creation, return an error message
        return res.status(400).json({
            message: "you are already signed up"
        })
    }

    //send a success message to user if everything worked fine
    res.json({
        message:"sign up successfull"
    });
})

//POST router for user signin 
userRouter.post("/signin",async function (req, res) {
    //define the schema for validating the request body data using zod
    const requireBody = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    //parse and validate the incoming request body data
    const parsedDataSuccess = requireBody.safeParse(req.body);

    //if validation fails throw an error with validation error details
    if(!parsedDataSuccess.success){
        return res.json({
            message:"Incorrect Data Format",
            error: parsedDataSuccess.error
        });
    }

    //extract validated email and password
    const {email, password} = req.body;

    // find the user in the database 
    const user = await userModel.findOne({
        email: email,
    });

    //if the user is not found return a error indicating incorrect credentials 
    if(!user){
        return res.status(403).json({
            message: "Incorrect Credentials !",
        });
    }

    //compare the provided password with the stored hashed password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    //if password matched, create a jwt token and send it to the client 
    if(passwordMatch){
        //create a jwt token using the jwt.sign() method
        const token = jwt.sign({
            id: user._id,
        },JWT_USER_PASSWORD)

        //send the generated token to the client
        res.json({
            token: token,
        })
    }
    else{
        // if password doesn't match 
        res.status(403).json({
            //error message for failed password credentials
            message: "invalid credentials!"
        })
    }
});


//GET route for purchases of user
userRouter.get("/purchases",userMiddleware,async function (req, res) {
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId: userId,
    })

    if(!purchases){
        return res.status(404).json({
            message: "No purchases found",
        });
    }

    //if purchases are found, extract the courseIds from the found purchases
    const purchasesCourseIds = purchases.map((purchase) => purchase.courseId);

    //find all course details associated with the courseIds 
    const courseData = await courseModel.find({
        _id: {$in:purchasesCourseIds},
    });

    //send the purchases and corresponding course details back to the client 
    res.status(200).json({
        purchases,
        courseData,
    });
});



module.exports = {
    userRouter: userRouter
}
