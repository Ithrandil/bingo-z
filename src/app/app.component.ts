import { Component } from '@angular/core';
import {BingoBox} from "./models/bingo-box";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
/*{front: "1 an",
  back: { name: "", picture: ""},
  disabled:false,
  modal: {
    title: "",
    text: this.formatModalText({
            name: "",
            a:"",
            b:"",
            c:"",
            d:"",
            e:"",
            f:"",
            g:"",
            h:"",
          }),
    picture: "",
  }
},*/
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
      {
        front: "Coca Zéro",
        back: { name: "Raphaël Grand", picture: "raphael_grand.jpeg"},
        disabled: false,
        modal: {
          title: "Raphaël Grand, Consultant fullstack - Formateur",
          text: this.formatModalText({
            name: "Raphaël Grand",
            a:"Je suis Raphaël, nihiliste, cynique mais toujours avec de l'humour. Grand amoureux des animaux et végétarien.",
            b:"Un an le mois prochain.",
            c:"Consultant fullstack et formateur",
            d:"En reconversion moi aussi, que j'ai fait avec Jérémy Lejeune et avec qui j'ai sympathisé. Après 5 ans chez Smile, j'ai voulu aller ailleurs et c'est la que Jérémy m'a coopté. Le recrutement s'est super bien passé.",
            e:"La réalité entre les entretiens et ce qu'il se passe vraiment dans la boite. Tu as le droit de refuser autant de missions que tu veux tant que tu ne la trouve pas adapté à ton profil, on ne te mets pas la pression. Ils mettent en avant le fait qu'on soit bien chez le client.",
            f:"Très bonne ambiance entre collègues. Beaucoup d'affinités, d'écoute et de bienveillance.",
            g:"Participer au weekend bonus, c'est une expérience à vivre!",
            h:"Pffff - pfffff - pffff (ndr: tentative de traduction de l'incertitude de l'interviewé)",
          }),
          picture: "raphael_grand.jpeg",
        }
      },
      {front: "Jeux vidéo", back: { name: "", picture: ""}, disabled: false},

    ],
    [
      {front: "",back: { name: "", picture: ""}, disabled:true},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "Design",
        back: { name: "Guillaume Deconde", picture: "guillaume_deconde.jpeg"},
        disabled:false,
        modal: {
          title: "Guillaume Deconde, UX Designer",
          text: this.formatModalText({
            name: "Guillaume Deconde",
            a:"Guillaume Deconde, UX Designer, ergonome de formation.",
            b:"En avril dernier.",
            c:"UX Designer",
            d:"Par cooptation.",
            e:"L'état d'esprit de la boite et la confiance qu'on me témoigne.",
            f:"Rien si ce n'est dû aux clients que l'on cible. Ce sont souvent des outils internes plutôt que du grand public, ce qui me plait bien.",
            g:"Faire un talk à la TZ ou finir au caveau après une soirée d'agence (ndr: ne plus donner d'exemples :D )",
            h:"Ca bosse bien. / C'est cool!",
          }),
          picture: "guillaume_deconde.jpeg",
        }
      },
      {
        front: "MAIF",
        back: {
          name: "Guillaume Le Floch",
          picture: "guillaume_le_floch.jpeg"
        },
        disabled: false,
        modal: {
          title: "Guillaume Le Floch, Directeur, Consultant et Formateur",
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
      {front: "1 an",
        back: { name: "Claire Juban", picture: "claire_juban.jpeg"},
        disabled:false,
        modal: {
          title: "Claire Juban, Office Manager",
          text: this.formatModalText({
            name: "Claire Juban",
            a:"Vue par ses collègues, Claire est “un vent de fraîcheur, drôle, disponible, qui fait avancer les sujets, débrouillarde, organisée, à l’écoute…” Heureusement, elle reste humble!",
            b:"Tout juste un an!",
            c:"Je suis Office Manager, c'est un poste très polyvalent. Je gère les locaux, les prestataires de l'agence, l'onboarding et l'offboarding des Z. Mais aussi la gestion des fournitures, l'administratif commerciale de certain clients, la relation avec les écoles. Actuellement il y a aussi le réaménagement des locaux. Je m'occupe aussi des courses de la grande famille Z!",
            d:"J'ai candidaté à une offre d'emploi.",
            e:"L'état d'esprit, la bienveillance, on peut être soi même et ne pas avoir à porter un masque ou une casquette pour l'emploi. C'est valorisé et ça te pousse à t'améliorer.",
            f:"J'avais des attentes très haute dans la qualité de mon travail que j'ai pu trouver ici, ce ne je n'avais pas forcément trouvé dans tout mes emplois.",
            g:"Essayer de battre Yann à Mario Kart.",
            h:"Transparence - Convivialité - Bienveillance",
          }),
          picture: "claire_juban.jpeg",
        }
      },
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "Badminton", back: { name: "", picture: ""}, disabled: false},
    ],
    [
      {
        front: "Javascript",
        back: { name: "Hugo Wood", picture: "hugo_wood.png"},
        disabled:false,
        modal: {
          title: "Hugo Wood, Consultant - Dev - Formateur",
          text: this.formatModalText({
            name: "Hugo Wood",
            a:"Je suis développeur passionné depuis 10 ans et depuis bien plus longtemps dans la vie perso. Je vis avec ma famille de 4 dans une maison à la campagne entre Nantes et Saint Nazaire.",
            b:"Le 10 février 2014. (ndr: il y a des dates dont on se souvient!)",
            c:"Consultant, dev, formateur et je travaille aussi pour la DSI.",
            d:"J'ai entendu pour la première fois parler de Zenika pendant mon stage de deuxième année d'école d'ingé. J'étais chez Thales et il y avait un Z avec qui j'avais apprécié travailler. Arrivé à nantes, j'ai cherché à participer à des meetups et j'ai vu que Z était sponsor de certains. C'est une boite qui investi dans la communauté. J'ai poussé ma candidature via coding game. Il y avait une compétition de coding game une soirée et à la fin on m'a proposé d'envoyer mon profil à certaines dont Zenika.",
            e:"La passion des gens.",
            f:"Les clients qui demandent à travailler avec nous nous connaissent et on donc on peut et même on nous demande de faire de la qualité.",
            g:"Participer à une soirée de jeux de société à l'agence.",
            h:"Transparence - Autonomie - Passion",
          }),
          picture: "hugo_wood.png",
        }},
      {
        front: "Recrutement",
        back: { name: "Jehane Zouane", picture: "jehane_zouane.png"},
        disabled:false,
        modal: {
          title: "Jehane Zouane, Recruteuse",
          text: this.formatModalText({
            name: "Jehane Zouhane",
            a:"Je m'appelle Jehane, 30 ans, chez Z depuis deux ans. J'aime les animaux (#animalLover)",
            b:"Du coup, 2 ans. :D",
            c:"Recruteuse pour Nantes et Niort.",
            d:"J'ai candidaté à une offre.",
            e:"Le fait d'être dans une boite d'experts qui ne se prennent pas la tête. Ce côté à la cool en plus se retrouve dans la hiérarchie aussi. Pas de chichis ici!",
            f:"Chez Zenika, les enjeux de recrutement ne sont pas que pour les recruteurs mais pour toute l'agence. Tout le monde s'implique dedans. Ce sont donc des victoires collectives et des échecs partagés.",
            g:"Faire un talk à la TZ!",
            h:"Bienveillance - Transparence - Opportunité",
          }),
          picture: "jehane_zouane.png",
        },
      },
      {
        front: "DevOps",
        back: { name: "Arthur Lutz", picture: "arthur_lutz.png"},
        disabled:false,
        modal: {
          title: "Arthur Lutz, Devops",
          text: this.formatModalText({
            name: "Arthur Lutz",
            a:"Je suis Arthur Lutz et je suis consultant sur les problématiques devops à l'agence de Nantes. Je suis arrivé en mars 2022 et avant j'étais dans la même boite pendant 17 ans. Je m'intéresse à tout ce qui est logiciel libre, green it et l'aspect maker sur mon temps perso. Je suis en temps partiel choisi.",
            b:"En mars 2022, c'est assez récent. C'était un gros changement pour moi qui avait passé 17 ans dans la même entreprise avant.",
            c:"Je fais du dev, de l'accompagnement sur les pratiques Devops, k8, cloud, pipeline, monitoring. En ce moment je fais du python pour SYSTEM U.",
            d:"Candidature spontanée. J'ai candidaté car j'ai croisé pas mal de Z dans les meetups et j'ai souvent apprécié échanger avec eux.",
            e:"La maturité des personnes avec qui je travaille. L'excellence technique, accepter la complexité des sujets, le plaisir de partager, la curiosité. J'aime aussi l'autonomie et la confiance donnée aux personnes.",
            f:"Comme ma réponse d'avant même si je trouve, du fait de mon ancienne expérience dans le logiciel libre que Z ne creuse pas assez les sujets éthiques avant de choisir certains clients ou outils (ex: chat GPT).",
            g:"Participer au DevFest Nantes avec les autres Z.",
            h:"Partage - Autonomie - Rouge",
          }),
          picture: "arthur_lutz.png",
        }
        },
      {front: "Système U", back: { name: "", picture: ""}, disabled:false},
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {front: "4-5 ans",
        back: { name: "Clément Van Peuter", picture: "clement_van_peuter.png"},
        disabled:false,
        modal: {
          title: "Clément Van Peuter, Développeur fullstack JS",
          text: this.formatModalText({
            name: "Clément Van Peuter",
            a:"Clément, dev fullstack JS depuis 4 ans chez Z, issu moi aussi d'une reconversion.",
            b:"Je suis arrivé en septembre 2018.",
            c:"Développeur fullstack JS.",
            d:"J'ai postulé à une offre d'alternance d'un an à la fin de mes études qui s'est ensuite concrétisé par un CDI.",
            e:"La bonne ambiance, ce n'est pas une entreprise guindée, les gens sont cool.",
            f:"La bienveillance et l'expertise technique des Z. Je suis très curieux et pose beaucoup de questions et ici j'ai toujours trouvé des réponses bienveillantes.",
            g:"Finir une soirée d'agence au caveau!",
            h:"Bienveillant - Cool - Transparent",
          }),
          picture: "clement_van_peuter.png",
        }},
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
