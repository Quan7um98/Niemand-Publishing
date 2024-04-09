   const express = require('express')
const mongoose = require('mongoose')
const Product = require('./components/Product')
const Category = require('./components/Category')
const Order = require('./components/Order')
const User = require('./components/User')
const app = express()

app.use(express.json ())

app.get('/', (req, res) => {
    res.send('ye')
})

app.get('/Product', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

app.get('/Product/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(Product)   
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

app.get('/Category', async(req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json(Category)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})
app.get('/Category/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.status(200).json(Category)   
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

app.get('/Order', async(req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(Order) 
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})
app.get('/Order/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findById(id);
        res.status(200).json(Order)   
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

app.get('/User', async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(User)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

app.get('/User/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(User)   
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

app.post('/Product', async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(Product)

  } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
  }
})

app.put('/Products:id', async(req, res) => {
   try {
    const {id} = req.params;
    const product = await Product.findByIdandUpdate(id, req.body);
    if(!product){
        return res.status(404).json({message: 'Product ID Not Found ${id}'})
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(product)

   } catch (error) {
        res.status(500).json({message: error.message})
   } 
})

app.post('/Order', async(req, res) => {
    try {
      const order = await Post.create(req.body)
      res.status(200).json(Order);

    } catch (error) {
          console.log(error.message)
          res.status(500).json({message: error.message})
    }
  })

  app.put('/Orders:id', async(req, res) => {
    try {
     const {id} = req.params;
     const order = await Order.findByIdandUpdate(id, req.body);
     if(!Order){
         return res.status(404).json({message: 'Order ID Not Found ${id}'})
        }
        const updatedOrder = await Order.findById(id);
        res.status(200).json(Order)
     
    } catch (error) {
         res.status(500).json({message: error.message})
    } 
 })

app.post('/Category', async(req, res) => {
    try {
      const Category =  await Category.create(req.body)
      res.status(200).json(Category);

    } catch (error) {
          console.log(error.message)
          res.status(500).json({message: error.message})
    }
  })

  app.put('/Category:id', async(req, res) => {
    try {
     const {id} = req.params;
     const category = await Category.findByIdandUpdate(id, req.body);
     if(!Category){
         return res.status(404).json({message: 'Category ID Not Found ${id}'})
     }
     const updatedCategory = await Category.findById(id);
     res.status(200).json(category)
     
    } catch (error) {
         res.status(500).json({message: error.message})
    } 
 })

app.post('/User', async(req, res) => {
    try {
      const User = await User.create(req.body)
      res.status(200).json(User);

    } catch (error) {
          console.log(error.message)
          res.status(500).json({message: error.message})
    }
  })

  app.put('/User:id', async(req, res) => {
    try {
     const {id} = req.params;
     const user = await User.findByIdandUpdate(id, req.body);
     if(!user){
         return res.status(404).json({message: 'User ID Not Found ${id}'})
     }
     const updatedUser = await User.findById(id);
     res.status(200).json(user)
     
    } catch (error) {
         res.status(500).json({message: error.message})
    } 
 })

 app.delete('/Products/: id', async(req, res) =>{
    try {
        const{id} = req.params;
        const product = await Product.findById(id),
        if(!product){
            return res.status(404).json({message: 'cannot find product by id ${id}'})
        }
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message})
    }

 })

 app.delete('/Order/: id', async(req, res) =>{
    try {
        const{id} = req.params;
        const order = await Order.findById(id),
        if(!Order){
            return res.status(404).json({message: 'cannot find Order by id ${id}'})
        }
        res.status(200).json(order)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

 })

 app.delete('/Category/: id', async(req, res) =>{
    try {
        const{id} = req.params;
        const category = await Category.findById(id),
        if(!Category){
            return res.status(404).json({message: 'cannot find category by id ${id}'})
        }
        res.status(200).json(category)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

 })

 app.delete('/User/: id', async(req, res) =>{
    try {
        const{id} = req.params;
        const user = await User.findById(id),
        if(!User){
            return res.status(404).json({message: 'cannot find User by id ${id}'})
        }
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

 })

mongoose.
connect('//add database here')
.then(() => {
    console.log('connected to Mongoose')
    app.listen(1066, () => {
        console.log('Connected')
    })
    
}).catch(() => {
    console.log(error)
})
