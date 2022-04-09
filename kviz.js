const otazky = [{
    poradiOtazky: "1.",
    otazka: "Ve kterém roce se konaly v norském Lillehammeru Zimní olmypijské hry?",
    obrazek: "obrazky/lillehammer.jpg",
    odpoved1: "1984",
    odpoved2: "1992",
    odpoved3: "1994",
    spravnaOdpoved: "1994"
}, {
    poradiOtazky: "2.",
    otazka: "Ve kterém norském městě se nachází Nidaroský dóm, největší gotický chrám ve Skandinávii?",
    obrazek: "obrazky/ovoce.jpg",
    odpoved1: "Bergen",
    odpoved2: "Trondheim",
    odpoved3: "Oslo",
    spravnaOdpoved: "Trondheim"
}, {
    poradiOtazky: "3.",
    otazka: "Jak se nazývá tradiční norský rybí pokrm ze pstruha nebo sivena?",
    obrazek: "obrazky/ovoce.jpg",
    odpoved1: "Rakfisk",
    odpoved2: "Gravlaks",
    odpoved3: "Tørrfisk",
    spravnaOdpoved: "Rakfisk"
}, {
    poradiOtazky: "4.",
    otazka: "Jak zní český překlad názvu slavného skalního útvaru Trolltunga v jižním Norsku?",
    obrazek: "obrazky/ovoce.jpg",
    odpoved1: "Trolí ruka",
    odpoved2: "Trolí jazyk",
    odpoved3: "Trolí nos",
    spravnaOdpoved: "Trolí jazyk"
}]

let kviz = document.querySelector('.kviz')
let poradi = document.querySelector('#poradi')
let otazka = document.querySelector('#otazka')
let obsah = document.querySelector('.obsah')
let foto = document.querySelector('.foto')
let obrazek = document.querySelector('#obrazek')
let moznosti = document.querySelector('#moznosti')
let odpovedi = document.querySelector('#odpovedi')
let vysledek = document.querySelector('.vysledek')

let odpoved1 = document.createElement('li')
let odpoved2 = document.createElement('li')
let odpoved3 = document.createElement('li')

odpovedi.appendChild(odpoved1)
odpovedi.appendChild(odpoved2)
odpovedi.appendChild(odpoved3)

let i = 0

function zobrazOtazku() {
    poradi.innerHTML = otazky[i].poradiOtazky
    otazka.innerHTML = otazky[i].otazka
    odpoved1.innerHTML = otazky[i].odpoved1
    odpoved2.innerHTML = otazky[i].odpoved2
    odpoved3.innerHTML = otazky[i].odpoved3

}

function klikNaOdpoved() {
    i++
    zobrazOtazku()
}