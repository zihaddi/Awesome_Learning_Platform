const express = require('express');
const app  =  express();
const port = process.env.PORT || 5000
var cors = require('cors')
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())


app.get('/',(req , res)=>{
  res.send("News API running...")
})

app.get('/news-categories',(req , res)=>{
  res.send(categories);
})

app.get('/category/:id',(req , res)=>{
  // if(req.params.id == '07')
  // {
  //  
  // }
  // else
  // {
    const id = req.params.id;
    const filteredCategory = news.filter(n => n.category_id === id)
    res.send(filteredCategory)
  // }
})

app.get('/news/:id',(req , res )=>{
  const id = req.params.id
  const filteredNews = news.find(n => n._id === id)
  res.send(filteredNews)
})

app.get('/news',(req , res )=>{
  res.send(news)
})

app.listen(port , ()=>{
  console.log("News server running on port ",port)
})