var osobe = [
    { ime: "Pera", prezime: "Peric" },
    { ime: "Marko", prezime: "Markovic" },
    { ime: "Jovo", prezime: "Jovic" }];

const vratiValidno = (paramIme, paramPrz) => {
    return osobe.some((osoba) => {
        return osoba.ime.toUpperCase() === paramIme.toUpperCase() && osoba.prezime.toUpperCase() === paramPrz.toUpperCase();
    });
}

const proveraForme = (forma) => {


    const ime = forma.ime.value;
    const prz = forma.prezime.value;


    const validno = vratiValidno(ime, prz);

    if (!validno) {
        alert('Korisnik nije pronadjen');
        return false;
    }

    if (ime === '') {
        alert('Morate uneti ime');
        return false;
    }


    if (ime[0] != ime[0].toUpperCase()) {
        alert('Ime mora pocinjati velikim slovom');
        return false;
    }

    if (prz === '') {
        alert('Morate uneti prezime');
        return false;
    }

    if (prz[0] != prz[0].toUpperCase()) {
        alert('Prezime mora pocinjati velikim slovom');
        return false;
    }
};

const vratiElement = (id) => {
    return document.getElementById(id);
}

const getCheckBox = (checkBox) => {
    const selekt1 = vratiElement('sel1');

    if (checkBox.checked) {
        selekt1.disabled = false;
    }
    else {
        selekt1.disabled = true;
    }
}