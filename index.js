const  geocode = require('./utils/geo')
const forecast = require('./forecast/forecast')


if(!process.argv[2]){
    console.log('please argv')
}
else{
    geocode(process.argv[2],(error,{lat,long,location})=>{
        if (error){
         return   console.log(error)
        }
        forecast(lat,long,(error,foreCastData)=>{
         if(error){
             return console.log(error)
         }
    
    
         console.log(location)
         console.log(foreCastData)
        })
    })
}



