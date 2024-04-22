const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/lifecoach',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("DB Connection Successfully"));

const userSchema=new mongoose.Schema({
    userId:{type:String,unique:true,required:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    email:{type:String,required:true},
    mobileNumber:{type:Number,required:true},
    pincode:{type:Number,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true}
},{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
});
const userModel=mongoose.model('user',userSchema);

const coachSchema=new mongoose.Schema({
    coachId:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    speciality:{type:String,required:true},
    mobileNumber:{type:Number,required:true},
},
{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
});
const coachmodel=mongoose.model('coach',coachSchema);

const bookingSchema=new mongoose.Schema({
    bookingId:{type:String,required:true},
    userId:{type:String,required:true},
    coachId:{type:String,required:true},
    appointmentDate:{type:Date,required:true},
    slot:{type:String,required:true}
},{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
});
const bookingModel=mongoose.model('booking',bookingSchema);

module.exports={userModel,coachmodel,bookingModel};