const express=require('express');
const routing=express.Router();
const lifeController=require('../Controller/lifeController');

routing.post('/users',lifeController.userRegistration);
routing.get('/users/login',lifeController.userLogin);
routing.post('/coaches',lifeController.coachRegistration);
routing.get('/coaches/login',lifeController.coachLogin);
routing.get('/coaches/all',lifeController.getAllCoaches);
routing.get('/coaches/:coachId',lifeController.getSpecificCoaches);
routing.get('/users/:userId',lifeController.getSpecificUser);
routing.post('/users/booking/:userId/:coachId',lifeController.bookingAppointment);
routing.put('/booking/:bookingId',lifeController.reschedulingAppointment);
routing.delete('/booking/:bookingId',lifeController.cancelAppointment);
routing.get('/coaches/booking/:coachId',lifeController.getAppointmentDetailsByCoach);
routing.get('/users/booking/:userId',lifeController.getAppointmentDetailsByUser);
routing.all('*',lifeController.invalidPath);
module.exports=routing;