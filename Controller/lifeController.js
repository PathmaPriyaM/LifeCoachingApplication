const {userModel,coachmodel,bookingModel}=require('../Model/lifeSchema');
const validator=require('../Utilities/validator');
const dbvalidator=require('../Utilities/helper');
const { json } = require('body-parser');

exports.userRegistration=async (req,res)=>{
    try{
        if(validator.validateName(req.body.name) && validator.validatePassword(req.body.password) &&
        validator.validateAge(new Date(req.body.dateOfBirth)) && validator.validateGender(req.body.gender) &&
        validator.ValidatePhoneNo(req.body.mobileNumber) && validator.ValidateEmail(req.body.email) &&
        validator.validatePincode(req.body.pincode)  && validator.validateCity(req.body.city) &&
        validator.validateState(req.body.state) && validator.validateCountry(req.body.country)
        ){
            const user=await userModel.find({email:req.body.email});
            if(user.length>0){
                res.status(400).json({
                    "message": "User exists with this email id"
                });
            }else{
                const id=await dbvalidator.generateUserId();
                const user=await userModel.create({
                    userId:id,
                    name:req.body.name,
                    password:req.body.password,
                    gender:req.body.gender,
                    dateOfBirth:req.body.dateOfBirth,
                    email:req.body.email,
                    mobileNumber:req.body.mobileNumber,
                    pincode:req.body.pincode,
                    city:req.body.city,
                    state:req.body.state,
                    country:req.body.country
                });
                res.status(201).json({
                    "message": `${id}`
                });
            }
        }else if(!validator.validateName(req.body.name)){
            res.status(400).json({
                "message": "Name should have minimum 3 and maximum 50 characters"
            });
        }else if(!validator.validatePassword(req.body.password)){
            res.status(400).json({
                "message": "Password should have minimum 5 and maximum 10 characters"
            });
        }else if(!validator.validateAge(new Date(req.body.dateOfBirth))){
            res.status(400).json({
                "message": "Age should be greater than 20 and less than 100"
            });
        }else if(!validator.validateGender(req.body.gender)){
            res.status(400).json({
                "message": "Gender should be either M or F"
            });
        }else if(!validator.ValidatePhoneNo(req.body.mobileNumber)){
            res.status(400).json({
                "message": "Mobile Number should have 10 digits"
            });
        }else if(!validator.ValidateEmail(req.body.email)){
            res.status(400).json({
                "message": "Email should be a valid one"
            });
        }else if(!validator.validatePincode(req.body.pincode)){
            res.status(400).json({
                "message": "Pincode should have 6 digits"
            });
        }else if(!validator.validateCity(req.body.city)){
            res.status(400).json({
                "message": "City should have minimum 3 and maximum 20 characters"
            });
        }else if(!validator.validateState(req.body.state)){
            res.status(400).json({
                "message": "State should have minimum 3 and maximum 20 characters"
            });
        }else if(!validator.validateCountry(req.body.country)){
            res.status(400).json({
                "message": "Country should have minimum 3 and maximum 20 characters"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.userLogin=async (req,res)=>{
    try{
        const user=await userModel.find({userId:req.body.userId});
        if(user.length>0 && user[0].password==req.body.password){
            res.send(true);
        }else{
            res.status(400).json({
                "message": "Incorrect user id or password"
            });
        }

    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.coachRegistration=async (req,res)=>{
    try{
        if(validator.validateName(req.body.name) && validator.validatePassword(req.body.password) &&
        validator.validateAge(new Date(req.body.dateOfBirth)) && validator.validateGender(req.body.gender) &&
        validator.ValidatePhoneNo(req.body.mobileNumber) && validator.validateSpeciality(req.body.speciality)
        ){
            const coach=await coachmodel.find({name:req.body.name});
            if(coach.length>0){
                res.status(400).json({
                    "message": "Coach exists with this name"
                });
            }else{
                const id=await dbvalidator.generateCoachId();
                const coach=await coachmodel.create({
                    coachId:id,
                    name:req.body.name,
                    password:req.body.password,
                    gender:req.body.gender,
                    dateOfBirth:req.body.dateOfBirth,
                    speciality:req.body.speciality,
                    mobileNumber:req.body.mobileNumber
                });
                res.status(201).json({
                    "message": `${id}`
                });
            }
        }else if(!validator.validateName(req.body.name)){
            res.status(400).json({
                "message": "Name should have minimum 3 and maximum 50 characters"
            });
        }else if(!validator.validatePassword(req.body.password)){
            res.status(400).json({
                "message": "Password should have minimum 5 and maximum 10 characters"
            });
        }else if(!validator.validateAge(new Date(req.body.dateOfBirth))){
            res.status(400).json({
                "message": "Age should be greater than 20 and less than 100"
            });
        }else if(!validator.validateGender(req.body.gender)){
            res.status(400).json({
                "message": "Gender should be either M or F"
            });
        }else if(!validator.ValidatePhoneNo(req.body.mobileNumber)){
            res.status(400).json({
                "message": "Mobile Number should have 10 digits"
            });
        }else if(!validator.validateSpeciality(req.body.speciality)){
            res.status(400).json({
                "message": "Specialty should have 10 to 50 characters"
            });
        }

    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.coachLogin=async (req,res)=>{
    try{
        const coach=await coachmodel.find({coachId:req.body.coachId});
        if(coach.length>0 && coach[0].password==req.body.password){
            res.send(true);
        }else{
            res.status(400).json({
                "message": "Incorrect user id or password"
            });
        }

    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.getAllCoaches=async (req,res)=>{
    try{
        const coach=await coachmodel.find({});
        res.json({
            coach
        });
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.getSpecificCoaches=async (req,res)=>{
    try{
        const coach=await coachmodel.find({coachId:req.params.coachId});
        if(coach.length>0){
            res.status(201).json({
                coach
            });
        }else{
            res.status(400).json({
                "message": "Coach Id does not exist"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.getSpecificUser=async (req,res)=>{
    try{
        const user=await userModel.find({userId:req.params.userId});
        if(user.length>0){
            res.status(201).json({
                user
            });
        }else{
            res.status(400).json({
                "message": "User Id does not exist"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.bookingAppointment=async (req,res)=>{
    try{
        const user=await userModel.find({userId:req.params.userId});
        const coach=await coachmodel.find({coachId:req.params.coachId});
        if(user.length>0 && coach.length>0){
            if(validator.validateSlot(req.body.slot) && validator.validateAppointment(new Date(req.body.appointmentDate))){
                const booking=await bookingModel.find({appointmentDate:req.body.appointmentDate,slot:req.body.slot});
                //console.log(booking);
                if(booking.length>0){
                    res.status(400).json({
                        "message": "There is an appointment in this slot already"
                    });
                }else{
                    const id=await dbvalidator.generateBookingId();
                    const booking=await bookingModel.create({
                        bookingId:id,
                        userId:req.params.userId,
                        coachId:req.params.coachId,
                        appointmentDate:req.body.appointmentDate,
                        slot:req.body.slot
                    });
                    res.send(true);
                }
            }else if(!validator.validateSlot(req.body.slot)){
                res.status(400).json({
                    "message": "Slot should be a valid one"
                });
            }else if(!validator.validateAppointment(new Date(req.body.appointmentDate))){
                res.status(400).json({
                    "message": "Date should be any upcoming 7 days"
                });
            }
        }else if(user.length==0){
            res.status(400).json({
                "message": "User Id does not exist"
            });
        }else if(coach.length==0){
            res.status(400).json({
                "message": "Coach Id does not exist"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.reschedulingAppointment=async (req,res)=>{
    try{
        const booking=await bookingModel.find({bookingId:req.params.bookingId});
        if(booking.length>0){
            if(validator.validateSlot(req.body.slot) && validator.validateAppointment(new Date(req.body.appointmentDate))){
                const booking=await bookingModel.findOneAndUpdate(
                    {bookingId:req.params.bookingId},
                    req.body,
                    {
                        new:true,
                        runValidators:true
                    }
                );
                res.send(true);
            }else if(!validator.validateSlot(req.body.slot)){
                res.status(400).json({
                    "message": "Slot should be a valid one"
                });
            }else if(!validator.validateAppointment(new Date(req.body.appointmentDate))){
                res.status(400).json({
                    "message": "Date should be any upcoming 7 days"
                });
            }
        }else{
            res.status(400).json({
                "message": "Booking Id does not exist"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.cancelAppointment=async (req,res)=>{
    try{
        const booking=await bookingModel.find({bookingId:req.params.bookingId});
        //console.log(booking);
        if(booking.length>0){
            const delBooking=await bookingModel.deleteOne({bookingId:req.params.bookingId});
            //console.log(delBooking);
            if(delBooking.deletedCount>0){
                    res.send(true);
            }
        }
        else{
            res.status(400).json({
                "message": "Could not delete this appointment"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.getAppointmentDetailsByCoach=async (req,res)=>{
    try{
        const booking=await bookingModel.find({coachId:req.params.coachId});
        if(booking.length>0){
            res.json({
                booking
            });
        }else{
            res.status(400).json({
                "message": "Could not find any bookings"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.getAppointmentDetailsByUser=async (req,res)=>{
    try{
        const booking=await bookingModel.find({userId:req.params.userId});
        if(booking.length>0){
            res.json({
                booking
            });
        }else{
            res.status(400).json({
                "message": "Could not find any appointment details"
            });
        }
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.invalidPath=async(req,res)=>{
    res.status(404).json({
        "message": "Invalid path"
    });
}