import axios from '../axios';//import để gửi dữ liệu từ client lên server
const handleLoginApi =(userEmail, userPassword)=>{
    return axios.post('/api/login',{email: userEmail, password: userPassword});
    //return mục đích để axios lấy thông tin ta muốn gửi từ phía client về server

}
const getAllUsers = (inputId)=>{
    //Đây là Template string
    // $ dùng để access hoặc truy cập vào 1 biến, và hiển thị ra
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data)=>{
    console.log('data from server: ', data);
    return axios.post('/api/create-new-user', data);
}
const deleteUserService =(userId)=>{
    return axios.delete('/api/delete-user',{
        data:{
            id:userId
        }
    })
}
const editUserService =(inputData) =>{
    return axios.put('/api/edit-user', inputData
    );
}
const getAllCodeService = (inputType)=>{
    return axios.get(`/api/allcode?type=${inputType}`)
}
const getTopDoctorHomeService =(limit)=>{
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors =()=>{
    return axios.get(`/api/get-all-doctors`)
}
const saveDetailDoctor =(data)=>{
return axios.post('/api/save-infor-doctors', data)
}
export{handleLoginApi, getAllUsers,
     createNewUserService,deleteUserService,
     editUserService,getAllCodeService,getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctorService}//đối với ReactJs, khi export function để nơi khác truy cập, 
//ta không cần export default hay module.export