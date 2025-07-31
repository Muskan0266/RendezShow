let butt = document.querySelectorAll(".butt");
let fashBut = document.querySelector(".fashBut")
let sportsBut = document.querySelector(".sportsBut")
let musicBut = document.querySelector(".musicBut")
let enterBut = document.querySelector(".enterBut")
let allBut = document.querySelector(".allBut")
let content = document.querySelector(".content")
let searchable = document.querySelectorAll(".searchable")
let searchInput = document.querySelector(".searchInput")
let msg = document.getElementById("msg");
let menu_div = document.querySelector(".menu_div")
let menu_but = document.querySelector(".menu_but")





butt.forEach(b => {
    b.addEventListener("click", () => {
        let id = b.getAttribute("data-id");
        window.location.href = `/rendezShow/booking/${id}`;

    })

});


let event_div = document.querySelector(".event_div")
const eventSection = document.querySelectorAll(".eventSection");
let params = new URLSearchParams(window.location.search)
let category = params.get('category')


if (category) {
    category = category.toLowerCase();

    let count = 0;

    eventSection.forEach(e => {
        const eventCategory = e.dataset.category.toLowerCase();

        if (eventCategory === category) {
            e.classList.remove("hidden");
            count++;
        } else {
            e.classList.add("hidden");
        }
    });

    if (count === 0) {
        msg.classList.remove("hidden");
    } else {
        msg.classList.add("hidden");
    }
}





// if (category == "music") {

//     sports1.forEach(e1 => e1.classList.add("hidden"))
//     fashion1.forEach(e1 => e1.classList.add("hidden"))
//     entertainment1.forEach(e1 => e1.classList.add("hidden"))
// }
// if (category == "sports") {
//     fashion1.forEach(e1 => e1.classList.add("hidden"))
//     music1.forEach(e1 => e1.classList.add("hidden"))
//     entertainment1.forEach(e1 => e1.classList.add("hidden"))
// }
// if (category == "entertainment") {
//     sports1.forEach(e1 => e1.classList.add("hidden"))
//     music1.forEach(e1 => e1.classList.add("hidden"))
//     fashion1.forEach(e1 => e1.classList.add("hidden"))
// }

// fashBut.addEventListener("click", () => {


//     let count = 0;

//     fashion1.forEach(e1 => {
//         e1.classList.remove("hidden");
//         count++;
//     });

//     sports1.forEach(e1 => e1.classList.add("hidden"));
//     music1.forEach(e1 => e1.classList.add("hidden"));
//     entertainment1.forEach(e1 => e1.classList.add("hidden"));

//     if (count === 0) {
//         msg.classList.remove("hidden");
//     } else {
//         msg.classList.add("hidden");
//     }
// });




fashBut.addEventListener("click", () => {
    let count = 0;

    eventSection.forEach(e => {
        const category = e.dataset.category.toLowerCase();
        if (category === "fashion") {
            e.classList.remove("hidden");
            count++;
        } else {
            e.classList.add("hidden");
        }
    });

    if (count === 0) {
        msg.classList.remove("hidden");
    } else {
        msg.classList.add("hidden");

        // sports1.forEach(e1 => e1.classList.add("hidden"));
        // music1.forEach(e1 => e1.classList.add("hidden"));
        // entertainment1.forEach(e1 => e1.classList.add("hidden"));
    }
});



sportsBut.addEventListener("click", () => {
    let count = 0;

    eventSection.forEach(e => {
        const category = e.dataset.category.toLowerCase();
        if (category === "sports") {
            e.classList.remove("hidden");
            count++;
        } else {
            e.classList.add("hidden");
        }
    });

    if (count === 0) {
        msg.classList.remove("hidden");
    } else {
        msg.classList.add("hidden");

        // sports1.forEach(e1 => e1.classList.add("hidden"));
        // music1.forEach(e1 => e1.classList.add("hidden"));
        // entertainment1.forEach(e1 => e1.classList.add("hidden"));
    }
});

musicBut.addEventListener("click", () => {
    let count = 0;

    eventSection.forEach(e => {
        const category = e.dataset.category.toLowerCase();
        if (category === "music") {
            e.classList.remove("hidden");
            count++;
        } else {
            e.classList.add("hidden");
        }
    });

    if (count === 0) {
        msg.classList.remove("hidden");
    } else {
        msg.classList.add("hidden");

    }
});

enterBut.addEventListener("click", () => {
    let count = 0;

    eventSection.forEach(e => {
        let category = e.dataset.category.toLowerCase()
        if (category == "entertainment") {
            e.classList.remove("hidden")
            count++
        }
        else {
            e.classList.add("hidden")

        }

    });

    if (count === 0) {
        msg.classList.remove("hidden")
    } else {
        msg.classList.add("hidden")
    }

});

allBut.addEventListener("click", () => {
    eventSection.forEach(e => {
        e.classList.remove("hidden");
    });

    msg.classList.add("hidden");
});




function resetButton() {
    let buttons = [fashBut, sportsBut, musicBut, enterBut, allBut];
    buttons.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = ""

    });


}

fashBut.addEventListener("click", () => {
    resetButton();
    fashBut.style.backgroundColor = "#ec4899";
    fashBut.style.color = "white"
})

musicBut.addEventListener("click", () => {
    resetButton();
    musicBut.style.backgroundColor = "#ec4899";
    musicBut.style.color = "white"
})
sportsBut.addEventListener("click", () => {
    resetButton();
    sportsBut.style.backgroundColor = "#ec4899";
    sportsBut.style.color = "white"
})
enterBut.addEventListener("click", () => {
    resetButton();
    enterBut.style.backgroundColor = "#ec4899";
    enterBut.style.color = "white"
})
allBut.addEventListener("click", () => {
    resetButton();
    allBut.style.backgroundColor = "#ec4899";
    allBut.style.color = "white"
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
//menu button
menu_but.addEventListener("click", () => {
    menu_div.classList.toggle("hidden")
})

