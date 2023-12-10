import express from "express"
const app = express()
const server = app.listen(8080, () => console.log("Listen on 8080"))

app.get("/", (req,res) => {
    const htmlRespose = `
    <html>
    <head>
        <title> NODEJS </title>
    </head>
    <body>
        <h1> SOY UN PROYECTO BACK </h1>
    </body>

    </html>
    `
    res.send(htmlRespose)
})
