import adminService from '../services/adminService';

let handleGetAllBookings = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters!',
            bookings: []
        })
    }
    let bookings = await adminService.getAllBookings(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        bookings
    })
}
let handleDeleteBooking = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await adminService.deleteBooking(req.body.id);
    return res.status(200).json(message);
}
let getAllBookingForAdmin = async (req, res) => {
    try {
        let infor = await adminService.getAllBookingForAdmin(req.query.date);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}
let adminBulkCreateSchedule = async (req, res) => {
    try {
        let infor = await adminService.bulkCreateSchedule(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
module.exports = {
    getAllBookingForAdmin: getAllBookingForAdmin,
    handleDeleteBooking: handleDeleteBooking,
    handleGetAllBookings: handleGetAllBookings
}
