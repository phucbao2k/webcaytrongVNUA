import express from "express";
import homeController from "../controllers/homeController.js";
import userController from "../controllers/userController.js";
import doctorController from "../controllers/doctorController.js";
import patientController from "../controllers/patientController.js";
import specialtyController from "../controllers/specialtyController.js";
import clinicController from "../controllers/clinicController.js";
import adminController from "../controllers/adminController.js";
import handbookController from "../controllers/handbookController.js";
let router = express.Router();
export function initWebRoutes(app) {
    router.get('/', homeController.getHomePage);
    //basic nodejs
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    //login
    router.post('/api/login', userController.handleLogin);
    //user
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcode', userController.getAllCode);
//clinic
    router.get('/api/get-clinic', clinicController.getAllClinic);
    router.get('/api/get-all-clinics', clinicController.handleGetAllClinics);
    router.put('/api/edit-clinic', clinicController.handleEditClinic);
    router.delete('/api/delete-clinic', clinicController.handleDeleteClinic);
    router.post('/api/create-new-clinic', clinicController.createClinic);
    router.get('/api/get-detail-clinic-by-id', clinicController.getDetailClinicById);
    //specialty
    router.get('/api/get-specialty', specialtyController.getAllSpecialty);
    router.get('/api/get-all-specialties', specialtyController.handleGetAllSpecialties);
    router.put('/api/edit-specialty', specialtyController.handleEditSpecialty);
    router.delete('/api/delete-specialty', specialtyController.handleDeleteSpecialty);
    router.post('/api/create-new-specialty', specialtyController.createSpecialty);
    router.get('/api/get-detail-specialty-by-id', specialtyController.getDetailSpecialtyById);
   //doctor
    router.post('/api/send-remedy', doctorController.sendRemedy);
    router.post('/api/cancel-remedy', doctorController.cancelRemedy);
    router.get('/api/get-all-doctors', doctorController.getAllDoctors);
    router.post('/api/save-infor-doctors', doctorController.postInforDoctor);
    router.get('/api/get-detail-doctor-by-id', doctorController.getDetailDoctorById);
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
    router.get('/api/get-list-patient-for-doctor', doctorController.getListPatientForDoctor);
    router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule);

    router.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate);
    router.get('/api/get-extra-infor-doctor-by-id', doctorController.getExtraInforDoctorById);
    router.get('/api/get-profile-doctor-by-id', doctorController.getProfileDoctorById);
    router.get('/api/get-history-booking-for-doctor', doctorController.getHistoryBookingForDoctor);
  
    //patient
    router.get('/api/get-all-booking-for-patient', patientController.getListBookingForPatient);
    router.post('/api/patient-book-appointment', patientController.postBookAppointment);
    router.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment);
    router.post('/api/cancel-patient-remedy', patientController.cancelPatientRemedy);
    router.get('/api/get-history-booking-for-patient', patientController.getHistoryBookingForPatient);
    //admin
    router.get('/api/get-all-booking-for-admin', adminController.getAllBookingForAdmin);
    router.get('/api/get-all-bookings', adminController.handleGetAllBookings);
    router.delete('/api/delete-booking', adminController.handleDeleteBooking);
 
  //handbook
    router.post('/api/create-new-handbook', handbookController.createHandbook);
    router.get('/api/get-handbook', handbookController.getAllHandbook);
    router.get('/api/get-all-handbooks', handbookController.handleGetAllHandbooks);
    router.put('/api/edit-handbook', handbookController.handleEditHandbook);
    router.delete('/api/delete-handbook', handbookController.handleDeleteHandbook);
    router.get('/api/get-detail-handbook-by-id', handbookController.getDetailHandbookById);
    
    router.get('/', (req, res) => {
        return res.send('HELU WORLD');
    });
    return app.use("/", router);
}
//resolve trong promise tương tự return trong hàm thông thường
//class allcode trong nodejs sẽ biến priceId, provinceId, paymentId, positionId, roleId, gender thành
// dữ liệu kiểu valueEn, valueVi qua các class doctorService qua nodeJ