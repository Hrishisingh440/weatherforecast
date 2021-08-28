const request= require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaHJpc2hpc2luZ2g0NDAiLCJhIjoiY2tydHE1ZmpsMTMxejJ1bWpnOXN0cjYxNyJ9.xFtWFN5PWpXtBJyPe1QYKw'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('connect to internet',undefined)
        }else if(response.body.features.length === 0){
            callback('provide location',undefined)
        }else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }
    })

}
module.exports=geocode