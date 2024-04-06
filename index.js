
let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let montagne1 = document.getElementById("montagne1")
let montagne2 = document.getElementById("montagne2")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let montagne3 = document.getElementById("montagne3")
let Nadir = document.getElementById("Nadir")


window.onscroll = () => {
    let value = scrollY;
    if (scrollY >= 0) {

        stars.style.left = value + "px"
        montagne1.style.top = value * 1.5 + "px"
        montagne2.style.top = value * 1.2 + "px"
        river.style.top = value + "px"
        boat.style.left = value * 2 + "px"
        boat.style.top = value + "px"
        Nadir.style.fontSize = value + "px"
        if (scrollY >= 100) {
            Nadir.style.fontSize = 100 + "px"
            Nadir.style.position = "fixed"
        }

        moon.style.top = value * 3 + "px"


    }
}