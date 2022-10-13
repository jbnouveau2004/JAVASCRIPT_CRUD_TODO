var id;

// appel à la fonction ajouter ou modifier
var btn = document.getElementById("ajouter")
btn.addEventListener("click", ajout);


function ajout(){
    if(btn.value=="Modifier"){ // si modifier, on remplace l'ajout par la modification
        var titre;
        var tache;
        var pointage = document.getElementById(id);
        var selection = pointage.parentElement;
        titre = document.getElementById("titre").value;
        tache = document.getElementById("tache").value;
        selection.getElementsByTagName('b')[0].innerText = titre;
        selection.getElementsByTagName('b')[1].innerText = tache;
        document.getElementById("titre").value = ""; // on remet l'ajout à sa place
        document.getElementById("tache").value = "";
        btn.value="Ajouter";
    }else{ // on ajouter un todo
        var titre;
        var tache;
        var entrer;
        var section;
        if(id==undefined){id=0;}else{id+=1;}
        titre = document.getElementById("titre").value;
        document.getElementById("titre").value = "";
        tache = document.getElementById("tache").value;
        document.getElementById("tache").value = "";
        entrer = "<button onclick='supprime(" + id + ");'>Supprimer</button><button onclick='modifie(" + id + ");'>Modifier</button><aside id=" + id + "></aside><div>Nom : <b>" + titre + "</b></div><div>A effectuer:<br><b>" + tache + "</b></div>";
        var section = document.createElement('section');
        document.getElementById('main').appendChild(section).innerHTML = entrer;
        }
    }

function supprime(id){ // supprimer en fonction de l'id
    var pointage = document.getElementById(id);
    pointage.parentElement.remove();
}

function modifie(id){ // on exécute la modification en réaffichant la MAJ
    var pointage = document.getElementById(id);
    var selection = pointage.parentElement;
    var titre = selection.getElementsByTagName('b')[0].textContent;
    var tache = selection.getElementsByTagName('b')[1].textContent;
    document.getElementById('titre').value = titre;
    document.getElementById('tache').value = tache;
    document.getElementById('ajouter').value = "Modifier"
}