const mysql = require("mysql")
const express = require("express")
const bodyparser = require("body-parser")

let app = express()

app.use(bodyparser.urlencoded({extended: true}))

let mysqlConnection = mysql.createConnection({
    user: "myDBuser",
    password: "123",
    host: "127.0.0.1",
    database: "mydb"
})

mysqlConnection.connect((err) => {
    if (err) console.log(err)
    else console.log("Connected")
})

app.get("/install", (req, res) => {

    let createProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
    )`

    let createProductDescription = `CREATE TABLE if not exists ProductDescription(
        description_id int auto_increment,
        product_id int(11) not null,
        product_brief_description Text not null,
        product_description TEXT not null,
        product_img varchar(255) not null,
        PRIMARY KEY (description_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`

    let createProductPrice = `CREATE TABLE if not exists ProductPrice(
        price_id int auto_increment,
        product_id int(11) not null,
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY (price_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`

    mysqlConnection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err)
    else console.log("Product Table is Created.")
    })

    mysqlConnection.query(createProductDescription, (err, results, fields) => {
        if (err) console.log(err)
        else {
            console.log("Product Description Table is Created.")
            // console.log(results)
            // console.log(fields)
        }
    })

    mysqlConnection.query(createProductPrice, (err, results, fields) => {
        if (err) console.log(err)
        else console.log("Product Price Table is created.")
    })

    res.end("Products, Product Description, and Product Price Tables are created.")
})

app.post("/addproducts", (req, res) => {
    // console.log(req.body)
    let productUrl = req.body.producturl
    let productname = req.body.productname

    let addProduct = "INSERT INTO Products (product_url, product_name) VALUES ('" + productUrl + "', '" + productname + "')"
    
    mysqlConnection.query(addProduct, (err, results) => {
        if (err) console.log(err)
        else console.log("1 record inserted in Products table.")
    })

    res.end("1 record inserted in Products table.")
})

app.get("/products", (req, res) => {
    let showProducts = "SELECT * FROM Products"
    mysqlConnection.query(showProducts, (err, rows, fields) => {
        console.log(rows)
        res.end(JSON.stringify(rows))
        // res.render("Products")
    })
    
})

app.listen(3001, () => {
    console.log("Listening to port: 3001")
})