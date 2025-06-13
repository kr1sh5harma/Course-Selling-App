const {mongoose} = require("mongoose");
console.log("connected to db");
mongoose.connect("mongodb+srv://krish9515274:K_5h4rm417dec@cluster0.6mwwk9o.mongodb.net/coursera-app");


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
    email: {type:String, unique:true},
    password: String,
    firstName: String,
    lastname: String

});


const adminSchema = new Schema({
    email: {type: String, unique:true},
    password: String,
    firstName: String,
    lastName: String
});



const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId

});


const purchaseSchema = new Schema({
    userId:ObjectId,
    courseId:ObjectId
});


const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}