const request=require('request')


const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=132df2fc208136d440f841c902c8c170&query='+latitude +','+ longitude

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Couldnot connect to datatbase',undefined)
        }else if(response.body.error) {
            callback('couldnot find location',undefined)
        } else{
            callback(undefined,'It is' +response.body.current.temperature+'C and '+response.body.current.weather_descriptions)
        }
    })
}
module.exports=forecast;