let butt = document.querySelectorAll(".butt")
let searchInput = document.querySelector(".searchInput")
let searchable = document.querySelector(".searchable")
butt.forEach(b => {
    b.addEventListener("click", () => {
        let id = b.getAttribute("data-id")
        fetch(`/rendezShow/delete/${id}`, {
            method: "DELETE"

        })
            .then(res => {
                if (res.ok) {
                    window.location.href = '/rendezShow/eventAd';
                } else {
                    return res.text().then(text => { throw new Error(text) });
                }
            })
    });

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


