const otazky = [{
    poradiOtazky: "1.",
    otazka: "Ve kterém roce se konaly v norském Lillehammeru Zimní olmypijské hry?",
    obrazek: 'obrazky/lillehammer.jpg',
    odpoved1: "1984",
    odpoved2: "1992",
    odpoved3: "1994",
    spravnaOdpoved: "1994"
}, {
    poradiOtazky: "2.",
    otazka: "Ve kterém norském městě se nachází Nidaroský dóm, největší gotický chrám ve Skandinávii?",
    obrazek: "obrazky/nidaros.jpg",
    odpoved1: "Bergen",
    odpoved2: "Trondheim",
    odpoved3: "Oslo",
    spravnaOdpoved: "Trondheim"
}, {
    poradiOtazky: "3.",
    otazka: "Jak se nazývá tradiční norský rybí pokrm ze pstruha nebo sivena?",
    obrazek: "obrazky/jidlo.jpg",
    odpoved1: "Rakfisk",
    odpoved2: "Gravlaks",
    odpoved3: "Tørrfisk",
    spravnaOdpoved: "Rakfisk"
}, {
    poradiOtazky: "4.",
    otazka: "Jak zní český překlad názvu slavného skalního útvaru Trolltunga v jižním Norsku?",
    obrazek: "obrazky/trolltunga.jpg",
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

let odpoved0 = document.querySelector('#odpoved0')
let odpoved2 = document.querySelector('#odpoved2')
let odpoved1 = document.querySelector('#odpoved1')

let otazka1Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka1Vyhodnoceni);
let text1Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text1Vyhodnoceni);

let otazka2Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka2Vyhodnoceni);
let text2Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text2Vyhodnoceni);

let otazka3Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka3Vyhodnoceni);
let text3Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text3Vyhodnoceni);

let otazka4Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka4Vyhodnoceni);
let text4Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text4Vyhodnoceni);

let sumarizaceUspesnosti = document.createElement('h2');
hodnoceni.appendChild(sumarizaceUspesnosti);

let poleOdpovedi = [];
let pocetSpravnychOdpovedi = 0;



let i = 0

function zobrazOtazku() {
    poradi.innerHTML = otazky[i].poradiOtazky
    otazka.innerHTML = otazky[i].otazka
    obrazek.src = otazky[i].obrazek
    odpoved0.innerHTML = otazky[i].odpoved1
    odpoved1.innerHTML = otazky[i].odpoved2
    odpoved2.innerHTML = otazky[i].odpoved3
}

let tlacitkaOdpovedi = document.querySelectorAll('li');

tlacitkaOdpovedi.forEach((tlacitko) => {
    tlacitko.addEventListener('click', klikNaOdpoved);
});

function klikNaOdpoved(a) {
    if (a.target.dataset.odpoved == 0) {
        poleOdpovedi.push(otazky[i].odpoved1)
    }
    else if (a.target.dataset.odpoved == 1) {
        poleOdpovedi.push(otazky[i].odpoved2)
    }
    else if (a.target.dataset.odpoved == 2) {
        poleOdpovedi.push(otazky[i].odpoved3)
    }

    if (poleOdpovedi[i] == otazky[i].spravnaOdpoved) {
        pocetSpravnychOdpovedi = pocetSpravnychOdpovedi + 1;
    }

    if (i + 1 < otazky.length) {
        i++;
        zobrazOtazku();
    }
}

