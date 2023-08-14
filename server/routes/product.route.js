const Productcontroller = require("../controllers/product.controller")



module.exports = (app)=> {
    app.get("/api/test", Productcontroller.apiTest)
    app.get("/api/products", Productcontroller.allProducts)
    app.get("/api/products/:id", Productcontroller.oneProduct)
    app.post("/api/products", Productcontroller.addProduct)
    app.patch("/api/products/:id", Productcontroller.updateProduct)
    app.delete("/api/products/:id", Productcontroller.deleteProduct)
}