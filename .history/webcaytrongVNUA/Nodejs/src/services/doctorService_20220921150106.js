import db from '../models/index';
let getTopDoctorHome =(limitInput)=>{
    return new Promise(async (resolve, reject)=>{
try{
let users = await db.User.findAll({
     limit: limitInput,
    where: {roleId: 'R2'},

attributes:{
    exclude:['password']
},
include:[
    {model: db.Allcode, as:'positionData', attributes:['valueEn', 'valueVi']},
    {model: db.Allcode, as:'genderData', attributes:['valueEn', 'valueVi']}
],
raw: true,
nest: true
})
resolve({
    errCode: 0,
    data: users
})
}catch(e){
  reject(e);
}
    })
}
let getAllDoctors = ()=>{
    return new Promise(async(resolve, reject)=>{
        try{
let doctors = await db.User.findAll({
where:{roleId: 'R2'},
attributes:{
    exclude:['password', 'image']
},
})
resolve({
    errCode: 0,
    data: doctors
})
        }catch(e){
            reject(e);
        }
    })
}
let saveDetailInforDoctor =(inputData)=>{
    return new Promise(async(resolve,reject)=>{
        try{
if(!inputData.id || !inputData.contentHTML || !inputData.contentMarkdown){
resolve({
    errCode: 1,
    errMessage: 'Missing parameters'
})
}else{
await db.Markdown.save({
    contentHTML: inputData.contentHTML,
    contentMarkdown: inputData.contentMarkdown,
    descr
})
}
        }catch(e){

        }
    })
}
module.exports ={
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    saveDetailInforDoctor: saveDetailInforDoctor,
}