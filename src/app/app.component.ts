import { Component } from '@angular/core';
import {BingoBox} from "./models/bingo-box";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: Array<BingoBox[]> = [
    [
      {front: "", back: { name: "", picture: ""}, disabled: true},
      {front: "DA", back: { name: "", picture: ""}, disabled: false},
      {front: "", back: { name: "", picture: ""}, disabled: true},
      {front: "", back: { name: "", picture: ""}, disabled: true},
      {
        front: "Ancien(ne) dev",
        back: { name: "", picture: ""},
        disabled: false,
        },
      {front: "", back: { name: "", picture: ""}, disabled: true},
      {front: "Plus actif pour l'agence", back: { name: "", picture: ""}, disabled: false},
      {front: "Coca Zéro", back: { name: "", picture: ""}, disabled: false},
      {front: "Jeux vidéo", back: { name: "", picture: ""}, disabled: false},

    ],
    [
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "Design", back: { name: "", picture: ""}, disabled:false},
      {
        front: "MAIF",
        back: {
          name: "Guillaume Le Floch",
          picture: "guillaume_le_floch.jpeg"
        },
        disabled: false,
        modal: {
          title: "Guillaume Le Floch, Directeur, consultant et formateur",
          text: this.formatModalText({
            name: "Guillaume Le Floch",
            a:"Je suis Guillaume Le Floch, je suis chez Z depuis 3 ans et demi. J'ai commencé à Grenoble puis j'ai été muté à Niort il y à un an et demi. Je fais beaucoup de back et un peu de front.",
            b:"Du coup, 3 ans et demi. :D",
            c:"Directeur technique de Niort, consultant et formateur.",
            d:"Par approche directe.",
            e:"Le niveau dez Z et la vision de partage qu'ils ont tous. Et aussi la gentillesse générale.",
            f:"On te demande ce que tu veux faire alors qu'en général on te pousse plus dans une mission. Tu es écouté ici.",
            g:"Le bootcamp!",
            h:"Transparence - Bienveillance - Accessibilité/Disponibilité des personnes",
          }),
          picture: "guillaume_le_floch.jpeg",
        }
      },
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "1 an", back: { name: "", picture: ""}, disabled:false},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "Badminton", back: { name: "", picture: ""}, disabled: false},
    ],
    [
      {front: "Javascript", back: { name: "", picture: ""}, disabled:false},
      {front: "Recrutement", back: { name: "", picture: ""}, disabled:false},
      {front: "DevOps", back: { name: "", picture: ""}, disabled:false},
      {front: "Système U", back: { name: "", picture: ""}, disabled:false},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "4-5 ans", back: { name: "", picture: ""}, disabled:false},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "", back: { name: "", picture: ""}, disabled:true},
    ]
  ]
  formatModalText(modalText: any) {
    return `
<h3>Présente toi en deux phrases :</h3>
<p>${modalText.a}</p>
<h3>Quel est ton poste?</h3>
<p>${modalText.b}</p>
<h3>Quand es-tu arrivé chez Zenika?</h3>
<p>${modalText.c}</p>
<h3>Comment es-tu arrivé chez Zenika?</h3>
<p>${modalText.d}</p>
<h3>Qu'est ce qui t'a le plus agréablement surpris chez Z en arrivant?</h3>
<p>${modalText.e}</p>
<h3>Et dans ton métier plus précisément?</h3>
<p>${modalText.f}</p>
<h3>Une chose étonnante que je dois absolument découvrir ou essayer chez Z?</h3>
<p>${modalText.g}</p>
<h3>3 mots pour décrire l'entreprise?</h3>
<p>${modalText.h}</p>
<h4>Un grand merci à ${modalText.name} pour son temps accordé au bingoZ!!!</h4>
`;
  }
}
