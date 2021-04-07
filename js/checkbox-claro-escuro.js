function check() {
    var checkBox = document.getElementById('check')

    var sun_moon = document.getElementById('sun_moon')

    if (checkBox.checked == true) {
        document.getElementById('sun_moon').setAttribute('class', 'fas fa-moon moon')
        document.getElementById('body').setAttribute('class', 'body_moon')
        document.getElementById('span').setAttribute('class', 'span_moon')
        document.getElementById('i').setAttribute('class', 'indicador i_moon')
    } else {
        document.getElementById('sun_moon').setAttribute('class', 'fas fa-sun sun')
        document.getElementById('body').setAttribute('class', '')
        document.getElementById('span').setAttribute('class', '')
        document.getElementById('i').setAttribute('class', 'indicador')
    }
}