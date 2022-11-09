import db from '../models/index';
require('dotenv').config();
let getAllBookingForAdmin = ( date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if ( !date) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter'
                })
            } else {
                let data = await db.Booking.findAll({
                    where: {
                        date: date
                    },
                    attributes: {
                        exclude: ['id']
                    },
                    include: [
                        {
                            model: db.User, as: 'patientData',
                            attributes: ['email', 'firstName', 'address'],
                            // include: [
                            //     {
                            //         model: db.Allcode, as: 'genderData', attributes:['valueEn', 'valueVi']
                            //     }
                            // ]
                        },
                        {
                            model: db.Allcode, as: 'timeTypeDataPatient', attributes: ['valueEn', 'valueVi']

                        }
                    ],
                    raw: false,
                    nest: true
                })
               
                if (data && data.image) {
                    data.image = new Buffer(data.image, 'base64').toString('binary');
                }
                if (!data) data = {};
                resolve({
                    errCode: 0,
                    data: data
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}
let deleteBooking = (bookingI) => {
    return new Promise(async (resolve, reject) => {
        let foundBooking = await db.Booking.findOne({
            where: { id: bookingI }
        })
        if (!foundBooking) {
            resolve({
                errCode: 2,
                errMessage: `The user isn't exist`
            })
        }
        await db.Booking.destroy({
            where: { id: bookingI }
        })
        resolve({
            errCode: 0,
            message: `The user is deleted`
        })
    })
}
module.exports = {
    getAllBookingForAdmin: getAllBookingForAdmin
}