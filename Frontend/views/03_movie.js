let book = document.querySelectorAll(".book");
let slider = document.querySelector(".slider");
let leftArr = document.querySelector(".leftArr")
let rightArr = document.querySelector(".rightArr")
let searchable = document.querySelectorAll(".searchable")
let searchInput = document.querySelector(".searchInput")
let allBut = document.querySelector(".allBut")
let engBut = document.querySelector(".engBut")
let hinBut = document.querySelector(".hinBut")
let hin4dBut = document.querySelector(".hin4dBut")
let eng4dBut = document.querySelector(".eng4dBut")
let korBut = document.querySelector(".korBut")
let tamBut = document.querySelector(".tamBut")
let telBut = document.querySelector(".telBut")
let punBut = document.querySelector(".punBut")
let msg = document.getElementById("msg");
let movieSection = document.querySelectorAll(".movieSection")
let menu_div = document.querySelector(".menu_div")
let menu_but = document.querySelector(".menu_but")

engBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre == "english") {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }
    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})

hinBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre.includes("hindi")) {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }


    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})

hin4dBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre.includes("hindi4d")) {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }


    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})

eng4dBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre == "english4d") {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }


    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})

korBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre == "korean") {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }


    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})
tamBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre == "tamil") {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }


    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})

telBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre == "telegu") {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }


    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})

punBut.addEventListener("click", () => {
    let count = 0
    movieSection.forEach(e => {
        let genre = e.dataset.genre.toLowerCase().split(',').map(g => g.trim())
        if (genre == "punjabi") {
            e.classList.remove("hidden")
            count++
        } else {
            e.classList.add("hidden")
        }


    });
    if (count == 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }
})

allBut.addEventListener("click", () => {
    movieSection.forEach(e => {
        e.classList.remove("hidden")

    })
    msg.classList.add("hidden")
})
// search input functionality
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let srchVal = searchInput.value.toLowerCase();
        let found = false;

        searchable.forEach(e1 => {
            // Clear previous highlights
            e1.style.backgroundColor = "";
        })
        searchable.forEach(e1 => {
            if (e1.textContent.toLowerCase().includes(srchVal)) {
                e1.scrollIntoView({ behavior: "smooth" });
                e1.style.backgroundColor = "#d8abc2";
                found = true;
            }
        });
        if (!found) {
            alert("No results")
        }
    }
})

function resetButton() {
    let buttons = [allBut, hinBut, engBut, hin4dBut, eng4dBut, korBut, tamBut, telBut, punBut];
    buttons.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = ""
    });
}

allBut.addEventListener("click", () => {
    resetButton();
    allBut.style.backgroundColor = "#ec4899";
    allBut.style.color = "white"
})
hinBut.addEventListener("click", () => {
    resetButton();
    hinBut.style.backgroundColor = "#ec4899";
    hinBut.style.color = "white"
})
engBut.addEventListener("click", () => {
    resetButton();
    engBut.style.backgroundColor = "#ec4899";
    engBut.style.color = "white"
})
hin4dBut.addEventListener("click", () => {
    resetButton();
    hin4dBut.style.backgroundColor = "#ec4899";
    hin4dBut.style.color = "white"
})
eng4dBut.addEventListener("click", () => {
    resetButton();
    eng4dBut.style.backgroundColor = "#ec4899";
    eng4dBut.style.color = "white"
})
tamBut.addEventListener("click", () => {
    resetButton();
    tamBut.style.backgroundColor = "#ec4899";
    tamBut.style.color = "white"
})
telBut.addEventListener("click", () => {
    resetButton();
    telBut.style.backgroundColor = "#ec4899";
    telBut.style.color = "white"
})
punBut.addEventListener("click", () => {
    resetButton();
    punBut.style.backgroundColor = "#ec4899";
    punBut.style.color = "white"
})
korBut.addEventListener("click", () => {
    resetButton();
    korBut.style.backgroundColor = "#ec4899";
    korBut.style.color = "white"
})
//menu button
menu_but.addEventListener("click", () => {
    menu_div.classList.toggle("hidden")
})

let img1 = "https://assets-in.bmscdn.com/discovery-catalog/events/et00420723-ntpwjgrfmu-landscape.jpg"
let img2 = "https://www.acmodasi.in/amdb/images/movie/6/w/fantastic-four-2005-73768.jpg"
let img3 = "https://img.englishcinemaparis.com/8MXOEdljVPCjbffmw_Bk3DGSslb9tHxexMgUbeODZVM/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy8xYTYyNGE5MS1kNzg0LTQ5ZGEtYTk4OC1jY2IwMWM0ZjFkNzAuanBn.jpg"
let img4 = "https://i.ebayimg.com/images/g/-xEAAOSwN-lnaXUB/s-l1200.jpg"
let img5 = "https://assets-in.bmscdn.com/discovery-catalog/events/et00403839-eafwvrajqc-landscape.jpg"
let arr = [img1, img2, img3, img4, img5]
let current = 0
slider.src = arr[current]
rightArr.addEventListener("click", () => {
    current = (current + 1) % arr.length
    slider.src = arr[current]


})
leftArr.addEventListener("click", () => {
    current = (current - 1 + arr.length) % arr.length;
    slider.src = arr[current]


})
