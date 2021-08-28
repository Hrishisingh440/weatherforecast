const express= require('express');
const hbs= require('hbs')
const path = require('path');
const app= express();
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
console.log(__dirname)
pdy=path.join(__dirname,'../templates/partial')
pdx=path.join(__dirname,'../templates/views')
pdf=path.join(__dirname,'../public')
port=process.env.PORT||3000
app.use(express.static(pdf))
app.set('view engine','hbs')
app.set('views',pdx)
hbs.registerPartials(pdy)

app.get('',(req,res)=>{
    res.render('index')
})
app.get('/weather',(req,res)=>{
if(!req.query.address){
    return res.send({
        error: 'Provide an address'
    })
} 
geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
if(error){
    return res.send('error')
}
forecast(latitude, longitude, (error,forecastData)=>{
    if(error){
        return res.send('error')
    } 
    res.send({
        forecast: forecastData,location,
        
        address: req.query.address
    })
})
})

})

app.get('*',(req,res)=>{
    res.send('not found')
})


app.listen(port,()=>{
    
    console.log("ok");
})