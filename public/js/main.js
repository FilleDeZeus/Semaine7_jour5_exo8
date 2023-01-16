let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}
console.log(competences);
//EXERCICE 1
let elements = document.querySelectorAll("div#liste-competences > h2");
console.log(elements);

//EXERCICE 2

for (const property in competences) {
    elements.forEach(element => {
        if(property == element.innerText){
            element.textContent += ` ${competences[property]}`;

            if (Number(competences[property].slice(0, -1))<50) {
                element.style = ".success";

            } else if (Number(competences[property].slice(0, -1))>50  && Number(competences[property].slice(0, -1))!=100){
                element.style.backgroundColor = "green";
                element.style.color ="white";

            } else if (Number(competences[property].slice(0, -1))==100){
                element.style.backgroundColor = "gold";
            }
        }
        
    });
}
