const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Servidor en ejecución");
});

app.listen(5000, () => console.log("Servidor en ejecución por el puerto 5000"));
