

    export default function getHomePage (req, res){
        return res.render('homepage.ejs');
        }
        let getAboutPage =(req, res)=>{
            return res.render('test/about.ejs');
            }

moduleexports ={
    getHomePage:getHomePage,
    getAboutPage:getAboutPage,
   
}
