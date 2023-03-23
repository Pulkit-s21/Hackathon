import express from 'express'
import bodyParser from 'body-parser'
import path, { dirname } from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const app = express()
const port = 4000
const apiKey = "2c56826c768c353a13e9625b7e9b6791-us9"
const audienceID = "eddc790e90"
const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
  res.sendFile(__dirName + "/index.html")
})

const url = `https:/us9.api.mailchimp.com/3.0/lists/${audienceID}`
const options = {
  method: 'POST',
  auth: `pulkit:${apiKey}`
}

app.post('/',(req,res)=>{
  const data = {
    members : [
      {
        email_address: req.body.email,
        status: "subscribed",
      }
    ]
  }
  
  
  const jsonData = JSON.stringify(data)
  
  const request = https.request(url,options,(response)=>{
    
    if(response.statusCode === 200){
      //   res.sendFile(__dirName + "/public/success.html")
        res.send("Subscribed")
    }else{
    //   res.sendFile(__dirName + "/public/failure.html")
        res.send("Failed")
    }
      response.on("data",(data)=>{
      console.log(response.statusCode)
    })
  })

  request.write(jsonData)
  request.end()
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})
