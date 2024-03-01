const button = document.querySelector("button")
const select = document.querySelector(".seletor-moeda-a-converter")
const result = document.querySelector(".result")
const oselect = document.querySelector(".oselect")
const oconvert = document.querySelector(".convert")
function convert() {
    const input = document.querySelector(".input-valor-a-converter").value
    const dolar = 5
    const euro = 5.4
    const real = 1
    const euroDolar = 0.9231905
    const dolarEuro = 1.0832
    const euroReal = 0.18539
    const dolarReal = 0.2006702


    if (oselect.value == "odolar") {
        oconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(input)


    }

    if (oselect.value == "real") {
        oconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(input)
    }
    if (oselect.value == "oeuro") {
        oconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(input)
    }





    if (select.value == "dolar") {
        result.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(input / dolar)
        if (oselect.value == "odolar") {
            result.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(input)

        }
        if (oselect.value == "oeuro") {
            result.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(input / euroDolar)

        }
    }






    if (select.value == "euro") {
        result.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(input / euro)
        if (oselect.value == "odolar") {
            result.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(input / dolarEuro)

        }
        if (oselect.value == "oeuro") {
            result.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(input)

        }

    }

    if (select.value == "real") {
        result.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(input / real)

        if (oselect.value == "oeuro") {
            result.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"

            }).format(input / euroReal)


        }
        if (oselect.value == "odolar") {
            result.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"

            }).format(input / dolarReal)



        }
    }




}



function changeSelect() {
    const convertImg = document.querySelector(".simbolo-moeda-convertida")
    const moedaConvertida = document.querySelector(".moeda-convertida")
    const moedaConverter = document.querySelector(".simbolo-moeda-a-converter")
    const TmoedaConverter = document.querySelector(".moeda-a-converter")






    if (oselect.value == "oeuro") {
        TmoedaConverter.innerHTML = "Euro"
        moedaConverter.src = "./assets/IMG_1325.JPG"
        moedaConverter.style.width = "93px"
        moedaConverter.style.marginBottom = "0px"
        document.querySelector(".input-valor-a-converter").placeholder = "€"

    }



    if (oselect.value == "odolar") {
        TmoedaConverter.innerHTML = "Dólar"
        moedaConverter.src = "./assets/IMG_1324.PNG"
        moedaConverter.style.marginBottom = "1px"
        moedaConverter.style.width = "50px"
        document.querySelector(".input-valor-a-converter").placeholder = "$"
    }

    if (oselect.value == "real") {
        TmoedaConverter.innerHTML = "Real"
        moedaConverter.src = "./assets/IMG_1323.JPG"
        moedaConverter.style.width = "50px"
        moedaConverter.style.marginBottom = "9px"
        document.querySelector(".input-valor-a-converter").placeholder = "R$"
    }






    if (select.value == "euro") {
        moedaConvertida.innerHTML = "Euro"
        convertImg.src = "./assets/IMG_1325.JPG"
        convertImg.style.width = "93px"
        convertImg.style.marginBottom = "0px"
    }




    if (select.value == "dolar") {
        moedaConvertida.innerHTML = "Dólar"
        convertImg.src = "./assets/IMG_1324.PNG"
        convertImg.style.width = "50px"
        convertImg.style.marginBottom = "0px"
    }


    if (select.value == "real") {
        moedaConvertida.innerHTML = "Real"
        convertImg.src = "./assets/IMG_1323.JPG"
        convertImg.style.width = "50px"
        convertImg.style.marginBottom = "9px"
    }



    convert()
}



button.addEventListener("click", convert)
select.addEventListener("change", changeSelect)
oselect.addEventListener("change", changeSelect)
