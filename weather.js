const request = require('request');

var x = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b6e592e66c4cc7e294dd4080f8c5a314"



const temp = request(x,(error,response,body)=>{
    
    var data = body
    var json = JSON.parse(data)
    return("Temperature of "+city+ " is :"+json.main.temp +" K")
})

module.exports = temp
