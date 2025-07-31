let butt = document.querySelectorAll(".book");
let box = document.querySelector(".box");
let catt = document.querySelectorAll(".catt");
let fashion = document.querySelector(".fashion")
let music = document.querySelector(".music")
let sports = document.querySelector(".sports")
let entertainment = document.querySelector(".entertainment")
let fashionButt = document.querySelector(".fashionButt")
let sportsButt = document.querySelector(".sportsButt")
let musicButt = document.querySelector(".musicButt")
let enterButt = document.querySelector(".enterButt")
let searchable = document.querySelectorAll(".searchable")
let searchInput = document.querySelector(".searchInput")
let menu_div = document.querySelector(".menu_div")
let menu_but = document.querySelector(".menu_but")






window.addEventListener("scroll", () => {
    let boxTop = box.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (boxTop < windowHeight) {
        box.classList.add("box-appear");
    }
});

window.addEventListener("scroll", () => {
    catt.forEach((cat) => {
        let catTop = cat.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (catTop < windowHeight) {
            cat.classList.add("catt-appear");
        }
    });
});

window.addEventListener("scroll", () => {
    fashionTop = fashion.getBoundingClientRect().top;
    fashionHght = window.innerHeight;

    if (fashionTop < innerHeight) {
        fashion.classList.add("fashion_animate")
    }
})

window.addEventListener("scroll", () => {
    musicTop = music.getBoundingClientRect().top;
    musicHght = window.innerHeight;

    if (musicTop < innerHeight) {
        music.classList.add("music_animate")
    }
})
window.addEventListener("scroll", () => {
    sportsTop = sports.getBoundingClientRect().top;
    sportsHght = window.innerHeight;

    if (sportsTop < innerHeight) {
        sports.classList.add("sports_animate")
    }
})

window.addEventListener("scroll", () => {
    entertainmentTop = entertainment.getBoundingClientRect().top;
    entertainmentHght = window.innerHeight;

    if (entertainmentTop < innerHeight) {
        entertainment.classList.add("entertainment_animate")
    }
})

fashionButt.addEventListener("click", () => {
    window.location.href = "/rendezShow/events?category=fashion"

})
sportsButt.addEventListener("click", () => {
    window.location.href = "/rendezShow/events?category=sports"

})
musicButt.addEventListener("click", () => {
    window.location.href = "/rendezShow/events?category=music"

})
enterButt.addEventListener("click", () => {
    window.location.href = "/rendezShow/events?category=entertainment"

})

// search input functionality
searchInput.addEventListener("keydown", (event) => {
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

//menu button
menu_but.addEventListener("click", () => {
    menu_div.classList.toggle("hidden")
})
