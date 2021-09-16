const express = require("express");
const productsMock = require("./products-mock.json");
const commentsMock = require("./comments-mock.json");
const app = express();
const port = 3030;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials",  "true");
    next();
});
app.get(`/products`, (req,res) => {
    res.send(productsMock.map((product) => {
        return {
           ...product,
           comments: commentsMock.filter((comment) => product.comments.includes(comment.id))
        }
    }));
});
app.post('/products', (req,res) => {

    res.send('Something')


});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);

});