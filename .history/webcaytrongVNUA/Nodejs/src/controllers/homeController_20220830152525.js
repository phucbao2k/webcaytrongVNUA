import db from '../models/index';

let getHomePage =async(req, res) => { 
    try{

    }catch(e){
        con
    }
    return res.render('homepage.ejs')
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

export default {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
};
