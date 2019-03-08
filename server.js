const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 5000;

app.use(morgan('combined'));

app.get("/post", (req, res) => {
    res.send("POST");
});

app.get("/post/:slug", (req, res) => {
    return app.render(req, res, "/post", { slug: req.params.slug })
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}!!!`);
});