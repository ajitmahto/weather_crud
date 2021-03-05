
const express = require('express')
require('./mongoose')
const City = require('./city')
const request = require('request')



const app = express()
const port = 3000

app.use(express.json())

app.post('/city',(req,res)=>{
    const city = new City(req.body)
    city.save().then(()=>{
        res.send(city)
    })
})
// app.get('/city',(req,res)=>{
//     City.find({}).then((city)=>{
//         res.send(city)
//     })
// })

// app.get('/city',(req,res)=>{
//     City.find({}).then((city)=>{
//         for(let i = 0; i < city.length ; i++){
//             let x = "https://api.openweathermap.org/data/2.5/weather?q="+city[i].name+"&appid=b6e592e66c4cc7e294dd4080f8c5a314"
//             res.send(
//                 request(x,(error,response,body)=>{
//                     let data = body
//                     let json = JSON.parse(data)
//                     // console.log(json)
//                     console.log("Temperature of "+city+ " is :"+json.main.temp +" K")
//                 })    
//             )
//         }
//     })
// })

app.get('/city',(req,res)=>{
    City.find({}).then((city)=>{
        var arr = []
        for(let i = 0; i < city.length ; i++){
            let x = "https://api.openweathermap.org/data/2.5/weather?q="+city[i].name+"&appid=b6e592e66c4cc7e294dd4080f8c5a314"
            //console.log(x)
            arr.push(x)
            console.log(arr)
            // request(x,(error,response,body)=>{
            //     let data = body
            //     let json = JSON.parse(data)
            //     // console.log(json)
            //     console.log("Temperature of "+city+ " is :"+json.main.temp +" K")
            // })                 
        }res.send()
    })
})

app.listen(port,()=>{
    console.log("Server is up at "+port)
})