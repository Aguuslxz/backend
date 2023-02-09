const express = require("express");
const app = express();
const connect = require("./connect")
const port = process.env.PORT || 4000;
const Product = require("./schemas/Product")

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("conectado")
})



app.post("/products", async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });

    await product.save();

    res.status(201).send({ message: "Product created successfully" });
  } catch (error) {
    res.status(400).send({ message: "Error creating product", error });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).send({ products });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving products", error });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ product });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving product", error });
  }
});

app.listen(port,(req,res)=>{
   connect()
   console.log(`http://localhost:${port}`)
})



