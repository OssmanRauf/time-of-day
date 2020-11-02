function load() {
    var img = document.getElementById('image')
    var msg = document.getElementById('msg')
    var date = new Date()
    var hour = date.getHours()
    if (hour >= 0 && hour < 12) {
        msg.innerHTML = `Now its ${hour} am`
        img.src = 'img/morning.jpg'
        document.body.style.backgroundColor = '#FDF179'
    } else
    if (hour >= 12 && hour <= 18) {
        msg.innerHTML = `Now its ${hour} pm`
        img.src = 'img/sunset.jpg'
        document.body.style.backgroundColor = '#AA6D42'
    } else {
        msg.innerHTML = `Now its ${hour} pm`
        img.src = 'img/night.jpg'
        document.body.style.backgroundColor = '#0F0F10'
    }
}