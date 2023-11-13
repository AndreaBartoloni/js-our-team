// creare array di oggeti contenenti team 
//stampare in console tutti i membri del team tramite un ciclo

// stampare le informazioni dei membri del team in pagina sottoforma di stringhe

let grid = document.getElementById("grid");


const students = [

    {
        id : 1,
        img: "foto",
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO"
    },

    {
        img: "foto",
        nome: "Angela Caroll",
        ruolo: "Chief Editor"
    },

    {
        img: "foto",
        nome: "Walter Gordon",
        ruolo: "Office Manager"
    },

    {
        img: "foto",
        nome: "Angela Lopez",
        ruolo: "Social Media Manager"
    },

    {
        img: "foto",
        nome: "Scott Estrada",
        ruolo: "Developer"
    },

    {
        img: "foto",
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer"
    }
]

for(let i = 0; i < students.length; i++){

    let img = document.createElement("p");
    let nome = document.createElement("p");
    let ruolo = document.createElement("p");

    img.innerHTML = `${students[i].img}`;
    nome.innerHTML = `${students[i].nome}` 
    ruolo.innerHTML = `${students[i].ruolo}` ;
    grid.appendChild(img);
    grid.appendChild(nome);
    grid.appendChild(ruolo);
}

