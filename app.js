//server side

var express = require('express');
var app = express();
var cors = require('cors');
var mysql = require("mysql");
var bodyParser = require("body-parser");

var id = 1;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//veritabanını tanımladık olusturduk
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"saliha",
    database:"sakila"
});

//mysql e baglandığı yer baglanamazsa hata olusturur
con.connect(function(er){
    if (er) 
    console.log(err);
    console.log("connected");
});

app.get("/getPicture",function(req,res){
    
    query = "SELECT * FROM pictures";
    con.query(query,function(err,result){
        result.forEach(function(data) {
            data.pictures="C:\\Users\\AYBU\\Desktop\\Carosel\\"+data.pictures;
            console.log(data.pictures); //konsolda goruruz server tarafında
        });



       
        res.json(result);//web konsol da goruruz
    });
});


app.get('/qetInfo',function(req,res){
    query = "SELECT information FROM information where informationid="+id;
    con.query(query,function(err,result){
        console.log(result);
        id=id+1;
        res.json(result);
});
});

//server ı hangi porttn dinliyorsak
var server = app.listen(3000,function(){
    console.log('Node server is running');
});
