function larguraTela() {
    var largura = parseFloat(window.innerWidth)

	if (largura >= 768) {
		document.getElementById('box1').setAttribute("class", 'box box3d')
		document.getElementById('box2').setAttribute("class", 'box box3d')
	} else {
		document.getElementById('box1').setAttribute("class", 'box')
		document.getElementById('box1').style.transform = 'none'
		document.getElementById('box2').setAttribute("class", 'box')
	}

	VanillaTilt.init(document.querySelectorAll(".box3d"), {
		max: 10,
		speed: 400
	});
}

larguraTela()

function closedPersona() {
	document.getElementById('popup').style.display = 'none'
	document.getElementById('body').style.overflowY = 'auto'
}

function openPersona(persona) {
	var foto = '../imagens/' + persona + '.png'
	
	document.getElementById('popup').style.display = 'block'
	document.getElementById('body').style.overflowY = 'hidden'
	document.getElementById('personaFoto').src = foto

	if (persona === 'ricardo') {
		document.getElementById('personaCircle').style.background = '#379bf7'
		document.getElementById('divisao').style.background = '#379bf7'
		document.getElementById('personaResumo').style.background = '#379bf7'

		document.getElementById('personaName').innerHTML = 'Ricardo'
		document.getElementById('sexo').innerHTML = 'Masculino'
		document.getElementById('idade').innerHTML = '20 anos'
		document.getElementById('cidade').innerHTML = 'São Luís do Maranhão'
		document.getElementById('cursa').innerHTML = 'Engenharia da Computação na UFG'
	} else if (persona === 'nicole') {
		document.getElementById('personaCircle').style.background = '#9bdc28'
		document.getElementById('divisao').style.background = '#9bdc28'
		document.getElementById('personaResumo').style.background = '#9bdc28'

		document.getElementById('personaName').innerHTML = 'Nicole'
		document.getElementById('sexo').innerHTML = 'Feminino'
		document.getElementById('idade').innerHTML = '20 anos'
		document.getElementById('cidade').innerHTML = 'Sanclerlândia de Goiás'
		document.getElementById('cursa').innerHTML = 'Design Gráfico na UFG'
	}
}