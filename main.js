window.addEventListener("load", (e) => {
    if(Math.random() > 0.95) {
        document.getElementsByTagName("h1")[0].innerText = "dobry pomysł"
        document.body.style.backgroundColor = "green"
        document.getElementsByTagName("h2")[0].style.visibility = "visible"
        let time = 1200;
        let int = setInterval(() => {
            document.getElementsByTagName("h2")[0].innerText = `Masz ${time} sekund`
            time--
            if (time < 0) {
                document.getElementsByTagName("h2")[0].innerText = `Koniec czasu!`
                document.body.style.backgroundColor = "#bf6224"
                clearInterval(int)
            }
        }, 1000)
    } else {
        document.getElementsByTagName("h1")[0].innerText = "Absolutnie NIE"
        document.body.style.backgroundColor = "#b82a6c"
    }
})