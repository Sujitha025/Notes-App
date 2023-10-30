// GET HOMEPAGE

exports.homepage = async (req,res) => {
    const locals = {
        title:"Nodejs Notes",
        description:"Free Nodejs app",
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    });
         // render index.ejs files;
} 

//GET about
exports.about = async (req,res) => {
    const locals = {
        title:"About - Nodejs Notes",
        description:"Free Nodejs app",
    }
    res.render('about',locals); // render index.ejs files;
} 