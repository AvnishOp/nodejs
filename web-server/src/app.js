const path= require('path')
const express=require('express')
const hbs=require('hbs');

const app=express();
const publicDirectoryPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname, '../templetes/views')
const partialsPath=path.join(__dirname,'../templetes/partial')
console.log(publicDirectoryPath);
console.log(viewsPath);
console.log(partialsPath);

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath));

app.get('',(req,res) =>{
    res.render('index',{
        title:'ExpressApp',
        name:'MyName'
    })
})

app.get('/about',(req,res)=>
{
    res.render('about',{
        title:'About Me',
        name:'MyName'
    })
})

app.get('/help',(req,res)=>
{
    res.render('help',{
        helpText:'This is some Help text',
        title:'Help Me',
        name:'MyHelp'
    })
})

app.listen(3001,()=>{
    console.log('Server is up to port 3001')
})

app.get('/ExpressApp',(req,res)=>
{
    res.send({
       forecast:'It is snowing',
       location:'Banglore'  
    })
})

app.get('/help/*',(req,res)=>
{
    res.render('404',{
        title:'404',
        name:'404',
        errorMessage:'Help artical not found',

    })
})
app.get('*',(req,res)=>
{
    res.render('404',{
        title:'404',
        name:'404',
        errorMessage:'Page not found',

    })
})