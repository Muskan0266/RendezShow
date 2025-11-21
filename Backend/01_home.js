let express = require("express")
let path = require("path")
let fs = require("fs")
let multer = require("multer")
let app = express()
let port = process.env.PORT || 3000

app.use(express.static((path.join(__dirname, "../Frontend"))))
app.use('/uploads', express.static(path.join(__dirname, './Database/uploads')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "../Frontend/views"));


// Getting  SITE data
app.get("/rendezShow", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/index.html"))
})

app.get("/rendezShow/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/08_about.html"))
})




app.get("/rendezShow/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/04_contact.html"))
})
app.get("/rendezShow/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/05_signup.html"))
})

app.get("/rendezShow/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/06_login.html"))
})

// Posting  admin data

let storage = multer.diskStorage({
    "destination": (req, file, cb) => {
        cb(null, (path.join(__dirname, "./Database/uploads")))
    },
    "filename": (req, file, cb) => {
        cb(null, file.originalname)
    }
})

let img = multer({ storage })

app.post("/eventAd", img.single("thumbnail"), (req, res) => {


    let { name, time, date, language, description, venue, duration, price, genre, age, category } = req.body
    let thumbnail = req.file ? req.file.filename : "";
    let details = { name, time, date, language, description, venue, duration, thumbnail, price, genre, age, category, id: Date.now() }

    fs.readFile((path.join(__dirname, "./Database/admin.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr
            }
            catch (err) {
                res.send(err)
            }

        }
        arr.push(details)

        fs.writeFile((path.join(__dirname, "./Database/admin.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send("done")

            }
        })
    })
})
//Setting events data using ejs
app.get("/rendezShow/events", (req, res) => {
    fs.readFile((path.join(__dirname, "./Database/admin.json")), "utf-8", (err, data) => {
        let arr = []

        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }

        res.render('02_events', { arr })
    })
})


//Posting data in database for movie details

let storage2 = multer.diskStorage({
    "destination": (req, file, cb) => {
        cb(null, path.join(__dirname, "./Database/uploads"))
    },
    "filename": (req, file, cb) => {
        cb(null, file.originalname)
    }

})
let image = multer({ storage: storage2 })

app.post("/movieAd", image.single("thumbnail"), (req, res) => {

    let { name, time, date, language, description, venue, duration, price, genre, age, category } = req.body
    let thumbnail = req.file ? req.file.filename : "";

    let details = { name, time, date, language, description, venue, duration, thumbnail, price, genre, age, category, id: Date.now() }

    fs.readFile((path.join(__dirname, "./Database/movie.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }
        arr.push(details)
        fs.writeFile((path.join(__dirname, "./Database/movie.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send(err)
            } else {
                res.send("done")
            }
        })
    })
})



//Setting movie data using ejs
app.get("/rendezShow/movie", (req, res) => {
    fs.readFile((path.join(__dirname, "./Database/movie.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }
        res.render('03_movie', { arr })
    })
})






//Setting booking details using ejs
app.get("/rendezShow/booking/:id", (req, res) => {
    let eventId = req.params.id
    fs.readFile(path.join(__dirname, "./Database/admin.json"), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }
        let event = arr.find(e => e.id == eventId);
        if (!event) {
            return res.send("no event found")
        }

        res.render("07_booking", { event })
    })
})

// signup form handle

app.post("/signup", (req, res) => {
    let { name, lastName, phone, email, password } = req.body
    let details = { name, lastName, phone, email, password }


    fs.readFile((path.join(__dirname, "./Database/signup.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }

        }
        arr.push(details)
        fs.writeFile((path.join(__dirname, "./Database/signup.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send("done")
            }
        })
    })
})

// login form handle
app.post("/login", (req, res) => {
    let { email, password } = req.body
    let details = { email, password }

    fs.readFile((path.join(__dirname, "./Database/login.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }

        }

        arr.push(details)

        fs.writeFile((path.join(__dirname, "./Database/login.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send("done")
            }
        })

    })
})

// Contact form handle
app.post("/contact", (req, res) => {
    let { name, lastName, message, email } = req.body
    let details = { name, lastName, message, email }
    fs.readFile((path.join(__dirname, "./Database/contact.json")), "utf-8", (err, data) => {
        let arr = []
        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }
        arr.push(details)

        fs.writeFile((path.join(__dirname, "./Database/contact.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send("done")
            }
        })
    })
})

//Deleting events
app.get("/rendezShow/eventAd", (req, res) => {
    fs.readFile((path.join(__dirname, "./Database/admin.json")), "utf-8", (err, data) => {
        let arr = []

        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }

        res.render('12_eventAdmin', { arr })
    })
})

app.delete("/rendezShow/delete/:id", (req, res) => {
    let id = req.params.id
    fs.readFile((path.join(__dirname, "./Database/admin.json")), "utf-8", (err, data) => {
        let arr = []

        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }
        let del_el = arr.findIndex(e => e.id == id)

        arr.splice(del_el, 1)


        fs.writeFile((path.join(__dirname, "./Database/admin.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send("Deleted")
            }
        })


    })
})

// Deleting Movies
app.get("/rendezShow/movieAd", (req, res) => {
    fs.readFile((path.join(__dirname, "./Database/movie.json")), "utf-8", (err, data) => {
        let arr = []

        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }

        res.render('11_movieAdmin', { arr })
    })
})

app.delete("/rendezShow/deleteMovie/:id", (req, res) => {
    console.log("DELETE request received for ID:", req.params.id);
    let id = req.params.id
    fs.readFile((path.join(__dirname, "./Database/movie.json")), "utf-8", (err, data) => {
        let arr = []

        if (data) {
            try {
                let parse = JSON.parse(data)
                arr = parse.arr || []
            }
            catch (err) {
                res.send(err)
            }
        }
        let del_el = arr.findIndex(e => e.id == Number(id))

        arr.splice(del_el, 1)


        fs.writeFile((path.join(__dirname, "./Database/movie.json")), JSON.stringify({ arr }), (err) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send("Deleted")
            }
            console.log("Deleting ID:", id)
        })


    })
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})





