const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Product = require("./dataSchema.js");
app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use("./images", express.static("images"));

mongoose.connect("mongodb://127.0.0.1:27017/reactdata", {
  dbName: "reactdata",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = process.env.PORT || 4000;
const host = "localhost";

app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await Product.find(query);
  console.log(allProducts);
  resp.send(allProducts);
});
app.get("/:id", async (req, resp) => {
  const id = req.params.id;
  const query = { _id: id };
  const oneProduct = await Product.findOne(query);
  console.log(oneProduct);
  resp.send(oneProduct);
});

app.post("/add", async (req, res) => {
  console.log(req.body);
  const p_id = Number(req.body._id); // Convert to Number
  const productExists = await Product.findById(p_id);
  if (productExists) {
    return res.status(400).json({ message: `Product ${p_id} already exists` });
  }
  const ptitle = req.body.title;
  const pprice = req.body.price;
  const pdescription = req.body.description;
  const pcategory = req.body.category;
  const pimage = req.body.image;
  const prate = req.body.rating.rate;
  const pcount = req.body.rating.count;

  const formData = new Product({
    _id: p_id,
    title: ptitle,
    price: pprice,
    description: pdescription,
    category: pcategory,
    image: pimage,
    rating: { rate: prate, count: pcount },
  });

  try {
    await Product.create(formData);
    const messageResponse = { message: `Product ${p_id} added correctly` };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while adding a new product:" + err);
  }
});



app.put("/update/:id", async (req, resp) => {
  const id = req.params.id;
  const query = { _id: id };
  const update = { 
    $set: req.body
  };
  const options = {
    new: true,
    useFindAndModify: false
  };
  const updatedProduct = await Product.findOneAndUpdate(query, update, options);
  console.log(updatedProduct);
  if (updatedProduct) {
    resp.send(updatedProduct);
  } else {
    resp.status(404).send({ message: `Product with id ${id} not found` });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});


app.delete("/remove/:id", async (req, res) => {
  const id = req.params.id;
  const productExists = await Product.findById(id);
  if (!productExists) {
    return res.status(404).json({ message: `Product ${id} does not exist` });
  }
  try {
    const removedProduct = await Product.findByIdAndDelete(id);
    if (!removedProduct) {
      return res.status(404).json({ message: `Product ${id} not found` });
    }
    res.json({ message: `Product ${id} removed` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
