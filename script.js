// color: cor do texto

// font-size: tamanho da fonte

// font-family: tipo da fonte

// font-weight: peso da fonte (normal, bold, 100–900)

// text-align: alinhamento do texto (left, center, right)

// text-decoration: decoração (none, underline, line-through)

// line-height: altura da linha

// 2️⃣ Fundo e cor

// background-color: cor de fundo

// background-image: imagem de fundo

// background-size: tamanho da imagem de fundo

// background-position: posição da imagem de fundo

// background-repeat: repetição da imagem (no-repeat)

// 3️⃣ Tamanho e espaço

// width: largura

// height: altura

// max-width / max-height: largura/altura máxima

// min-width / min-height: largura/altura mínima

// padding: espaço interno (dentro do elemento)

// margin: espaço externo (fora do elemento)

// 4️⃣ Bordas

// border: borda (ex: 1px solid black)

// border-radius: arredondar cantos

// border-width, border-style, border-color: controlar borda separadamente

// 5️⃣ Posicionamento

// position: tipo de posicionamento (static, relative, absolute, fixed, sticky)

// top, right, bottom, left: posição quando não é static

// z-index: define a “camada” do elemento (sobreposição)

// display: como o elemento é exibido (block, inline, inline-block, flex, grid)

// float: flutuar elemento (left, right)

// overflow: controlar o que acontece quando o conteúdo extrapola (hidden, scroll, auto)

// 6️⃣ Flexbox (muito usado)

// display: flex: ativa flexbox

// justify-content: alinhamento horizontal (flex-start, center, space-between)

// align-items: alinhamento vertical (flex-start, center, stretch)

// flex-wrap: quebra linha (wrap, nowrap)

// 7️⃣ Efeitos e transições

// hover: estado quando o mouse passa

// opacity: transparência (0 a 1)

// transition: animação suave

// box-shadow: sombra de caixa

// text-shadow: sombra do texto

//Menu de Hamburguer
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let body = document.getElementsByTagName("body")
let sombra = document.getElementById("sombra")


function abreFechaMenu() {
    //Se o menu está fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir menu
        menu.style.right = "0"
        
        //Mostrar icone x
        iconeX.style.display = "inline"
        
        //Esconder icone barras 
        iconeBarras.style.display = "none"
        
        sombra.style.right = "0"
    } else {
        //Fechar o menu
        menu.style.right = "-210px"
        
        // Esconder icone X
        iconeX.style.display = "none"
        
        // Mostrar icone barras
        iconeBarras.style.display = "inline"
        
        sombra.style.right = "-101vw"
    }
}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        // Mostrar icone X
        iconeX.style.display = "inline"
    }
    else{
        // Esconder icone barras
        iconeBarras.style.display = "none"
    }
}
