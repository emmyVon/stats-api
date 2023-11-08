const express = require('express')
const app = express()
const mongoose = require('mongoose')
const portfolio = require('./Data')
require('dotenv').config()



const DataSchema = mongoose.Schema({
     Tolerance:{type:Number,reqiured:true},
        NigerianStocks:{type:Number,reqiured:true},
        ForeignStocks:{type:Number,reqiured:true},
        TechStocks:{type:Number,reqiured:true},
        EmergingStocks:{type:Number,reqiured:true},
        NigerianBonds:{type:Number,reqiured:true},
        ForiegnBonds:{type:Number,reqiured:true},
        Commodities:{type:Number,reqiured:true},
        RealEstate:{type:Number,reqiured:true},
        TBills:{type:Number,reqiured:true},
        Alternative:{type:Number,reqiured:true}
})

const DataModel = mongoose.model('portfolios', DataSchema)



app.use(express.json())

app.get('/',async(req,res)=>{
    try {
      const port = await DataModel.find({})
    res.json(port)  
    } catch (error) {
       console.log(error) 
    }
    
})


const Start = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(3000, console.log('server is listening on port 3000...'))
        await DataModel.create(portfolio)
    }
    catch(error){
        console.log(error)
    }
}

Start()
