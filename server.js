const express=require("express");
const hbs=require("express-handlebars");
const server=express();

server.engine('hbs',hbs({

    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+'/views/partials'
}));

server.set("view engine","hbs");

server.use(express.static(__dirname+"/public"));
server.get('/',(req,res)=>{
    res.status(200).render('index',{
        name: "Gyunseo Lee"
    });

});

server.listen(3000,()=>{
    console.log("Thre server is running on Port 3000");
});