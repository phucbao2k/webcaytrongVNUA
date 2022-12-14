import { response } from 'express';
import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => { 
    try{
let data = await db.User.findAll();
return res.render('homepage.ejs',{
    data: JSON.stringify(data)
});
    }catch(e){
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
 let message=  await CRUDService.createNewUser(req.body);
 console.log(message);
    return res.send('post');
   
}
let displayGetCRUD = async (req, res) => { 
    let data = await CRUDService.getAllUsers();
    console.log('--------------------------------');
    console.log(data);
    console.log('--------------------------------');
    return res.render('displayCRUD.ejs',{
        dataTable: data,
    });}
let getEditCRUD = async (req, res) =>{
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);
       return res.render('editCRUD.ejs',{
        user: userData
       });
        
    }else{
        return res.send('ERROR_NAME_NOT_FOUND');
    }
    


}
let putCRUD
export default {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,   
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
};
