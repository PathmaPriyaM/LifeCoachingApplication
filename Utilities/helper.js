const {userModel,coachmodel,bookingModel}=require('../Model/lifeSchema');

exports.generateUserId=async ()=>{
    const user=await userModel.find({});
    const id="UI-00"+user.length;
    return id;
}

exports.generateCoachId=async ()=>{
    const coach=await coachmodel.find({});
    const id="CI-00"+coach.length;
    return id;
}

exports.generateBookingId=async ()=>{
    const booking=await bookingModel.find({});
    const id="BI-00"+booking.length;
    return id;
}