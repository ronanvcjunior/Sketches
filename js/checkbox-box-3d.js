function larguraTela() {
    var larguraTelevisao = document.getElementById('tv').offsetWidth

    var alturaTelevisao = (larguraTelevisao * 0.695).toString()
    document.getElementById('tv').style.height = alturaTelevisao + 'px'

    // Superior
    var m = 0
    for(var cont = 1; cont <= 6; cont++){
        var id = 'superior' + cont.toString()
        var  rotationX = (m).toString()


        var larguraSuperior = (larguraTelevisao * 0.833).toString()
        document.getElementById(id).style.width = larguraSuperior + 'px'

        var alturaSuperior = (larguraTelevisao * 0.0833).toString()
        document.getElementById(id).style.height = alturaSuperior + 'px'

        var zSuperior = (alturaSuperior * 0.5).toString()

        if (cont === 3) {
            document.getElementById(id).style.transform = 'rotateY(' + rotationX + 'deg) translateX(50%) translateZ(' + zSuperior + 'px)'
        } else if (cont === 5) {
            var larguraSuperior = (larguraTelevisao * 0.0833).toString()
            document.getElementById(id).style.width = larguraSuperior + 'px'

            var z = (larguraTelevisao * 0.0833 + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ(-'+ z +'px) translateZ(' + zSuperior + 'px)'
        } else if (cont === 6) {
            var larguraSuperior = (larguraTelevisao * 0.0833).toString()
            document.getElementById(id).style.width = larguraSuperior + 'px'

            var z = ((- larguraTelevisao * 0.0833) + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ('+ z +'px) translateZ(' + zSuperior + 'px)'
        } else {
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zSuperior + 'px)'
        }

        //Logo
        let logoTV = document.getElementById('logoTV')
        logoTV.style.height = `${larguraTelevisao * 0.0833 * 0.5}px`

        let logoTV2 = document.getElementById('logoTV2')
        logoTV2.style.height = `${larguraTelevisao * 0.0833 * 0.5}px`

        m = m + 90
    }

    // Monitor
    var m = 0
    for(var cont = 1; cont <= 6; cont++){
        var id = 'monitor' + cont.toString()
        var  rotationX = (m).toString()

        document.getElementById(id).style.top = (larguraTelevisao * 0.0832).toString() + 'px'

        var larguraMonitor = (larguraTelevisao * 0.694).toString()
        document.getElementById(id).style.width = larguraMonitor + 'px'

        var alturaMonitor = (larguraTelevisao * 0.392).toString()
        document.getElementById(id).style.height = alturaMonitor + 'px'

        var zMonitor = (alturaMonitor * 0.5).toString()

        if (cont === 3) {
            zMonitor = (alturaMonitor * 0.025).toString()
            document.getElementById(id).style.transform = 'rotateY(' + rotationX + 'deg) translateX(50%) translateZ(' + zMonitor + 'px)'

        } else if (cont === 2) {
            alturaMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.height = alturaMonitor + 'px'

            zMonitor = (alturaMonitor / 2).toString()
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zMonitor + 'px)'
        } else if (cont === 4) {
            alturaMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.height = alturaMonitor + 'px'

            zMonitor = (larguraTelevisao * 0.392 - alturaMonitor / 2).toString()
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zMonitor + 'px)'
        }else if (cont === 5) {
            var larguraMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.width = larguraMonitor + 'px'

            var z = (larguraTelevisao * 0.392 * 0.5 + larguraTelevisao *  0.694 / 2 + larguraMonitor * 0.5).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ(-'+ z +'px) translateZ(' + zMonitor + 'px)'
        }  else if (cont === 6) {
            var larguraMonitor = (alturaMonitor * 0.05).toString()
            document.getElementById(id).style.width = larguraMonitor + 'px'

            var z = ((- larguraTelevisao * 0.392) * 0.5 + larguraTelevisao *  0.694 / 2 - larguraMonitor * 0.5).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ('+ z +'px) translateZ(' + zMonitor + 'px)'
        } else if (cont === 1) {
            zMonitor = (alturaMonitor * 0.025).toString()
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zMonitor + 'px)'
        }

        m = m + 90
    }
        
    // Inferior
    var m = 0
    for(var cont = 1; cont <= 6; cont++){
        var id = 'inferior' + cont.toString()
        var  rotationX = (m).toString()


        var larguraInferior = (larguraTelevisao * 0.833).toString()
        document.getElementById(id).style.width = larguraInferior + 'px'

        var alturaInferior = (larguraTelevisao * 0.222).toString()
        document.getElementById(id).style.height = alturaInferior + 'px'

        var zInferior = (alturaInferior * 0.5).toString()

        if (cont === 3) {
            document.getElementById(id).style.transform = 'rotateY(' + rotationX + 'deg) translateX(50%) translateZ(' + zInferior + 'px)'
        } else if (cont === 5) {
            var larguraInferior = (larguraTelevisao * 0.222).toString()
            document.getElementById(id).style.width = larguraInferior + 'px'

            var z = (larguraTelevisao * 0.222 + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ(-'+ z +'px) translateZ(' + zInferior + 'px)'
        } else if (cont === 6) {
            var larguraInferior = (larguraTelevisao * 0.222).toString()
            document.getElementById(id).style.width = larguraInferior + 'px'

            var z = ((- larguraTelevisao * 0.222) + larguraTelevisao * 0.833 / 2).toString()
            document.getElementById(id).style.transform = 'rotateY(90deg) translateZ('+ z +'px) translateZ(' + zInferior + 'px)'
        } else if (cont === 4) {
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zInferior + 'px)'

            var sombraInferior = alturaInferior * 0.2
            document.getElementById(id).style.boxShadow = '0px 0px 50px ' + sombraInferior +'px rgba(0, 0, 0, 0.5)'
        } else {
            document.getElementById(id).style.transform = 'rotateX(' + rotationX + 'deg) translateX(-50%) translateZ(' + zInferior + 'px)'
        }

        m = m + 90
    }
    
}

larguraTela()

for (var i = 1; i <= 3; i = i + 2) {
    let canvas = document.getElementById(`monitor${i}`)

    let ctx = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight



    let str = 'デジモンアグモングレイモンメタルグレイモンウォーグレイモン'
    let matrix = str.split('')
    let font = 12
    let col = width / font
    let arr = []

    for(let i = 0; i < col; i++) {
        arr[i] = 1
    }

    var draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, width, height)
        ctx.fillStyle = '#0f0'
        ctx.font = `${font}px system-ui`

        for(let i = 0; i < arr.length; i++) {
            let txt = matrix[Math.floor(Math.random() *matrix.length)]
            ctx.fillText(txt, i * font, arr[i] * font)

            if(arr[i] * font > height && Math.random() > 0.975) {
                arr[i] = 0
            }
            arr[i]++
        }
    }

    setInterval(draw, 30)
}