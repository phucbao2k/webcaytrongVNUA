import doctorService from '../services/doctorService';
let getTopDoctorHome = async(req, res)=>{
    let limit = req.query.limit;
    if(!limit) limit = 10;
    try{
        let response = await doctorService.getTopDoctorHome(+limit);
        return res.status(200).json(response);
    }catch(e){
console.log(e);
return res.status(200).json({
    errCode: -1,
    message: 'Error from server...'
})
    }
}
let getAllDoctors = async (req, res)=>{
try{
let doctors = await doctorService.getAllDoctors();
return res.status(200).json(doctors)
}catch(e){
    console.log(e)
    return res.status(200).json
}
}
let postInforDoctor =async(req,res)=>{
    try{
let response = await doctorService.saveDetailInforDoctor(req.body);
return response.status(200).json(response);
    }catch(e){
console.log(e)
return res.status(200).json({
    errCode: -1,
    errMes
})
    }
}
module.exports={
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    postInforDoctor: postInforDoctor,
}