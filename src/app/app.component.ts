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
      {
        front: "DA",
        back: { name: "Antoine Bonneau", picture: "antoine_bonneau.jpg"},
        disabled: false,
        modal: {
          title: "Antoine Bonneau, Directeur de l'agence de Nantes",
          text: this.formatModalText({
            name: "Antoine Bonneau",
            a:"DA de l’agence de Zenika Nantes et un petit bout de Niort depuis 2015. J’ai fait 3 ans de prestataire à la Macif, Thalès, entre autres. Très intéressé de tout l’univers tech, j'intervient toujours sur les tendances IT par exemple avec les ZenBox. J’essaie de maintenir ma culture IT et à coté de ça je suis musicien. Guitare, harmonica et chanteur surtout.",
            b:"2015",
            c:"Directeur d’agence.",
            d:"Avant j'étais chez SQLI, je m’occupais de l’équipe commerciale. On était 130 avec de beaux projets mais le coté groupe était important, on passait beaucoup trop de temps en réunion en interne. J’en ai été lassé, j’ai voulu repartir sur une plus petite équipe avec plein d’autonomie pour développer. J’avais écris à plusieurs entreprises pour leur proposer de développer une agence à Nantes. Je connaissais aussi Z via Julien Landuré. Je n'ai pas eu de réponses. 3 mois après l’offre repop, je les contacte, ils avaient pas reçu mon CV. :D",
            e:"Le premier jour on m’a appelé, souhaité bonne chance et donné plein de noms pour m’aider sur des sujets. C’était pas 'démerde toi', mais 'on te fais pleinement confiance', dès le premier jour!",
            f:" Entre les agences, il y a une vraie communauté, pas de concurrence mais un travail collectif. Une grosse culture du partage, commerciaux, DA, consultants, c’est hyper important.",
            g:"Essayer le melting potes, en plus on a une carte de fidélité à vie! La soirée des Zoscars, le bateau ouche, les moments de convivialité de l’agence. Et tout le monde me parle du voyage du CE, il va falloir absolument essayer.",
            h:"Nos valeurs sont bien résumées : transparence, partage et convivialité. C’est marqué nul part et c’est là dessus qu’on recrute les gens sans s’en rendre compte. Il y en a un 4eme qui est la bienveillance.",
          }),
          picture: "antoine_bonneau.jpg",
        }
      },
      {front: "", back: { name: "", picture: ""}, disabled: true},
      {front: "", back: { name: "", picture: ""}, disabled: true},
      {
        front: "Ancien(ne) dev",
        back: { name: "Séverine Luzeau", picture: "severine_luzeau.jpg"},
        disabled: false,
        modal: {
          title: "Séverine Luzeau, Directrice Technique et ancienne dev",
          text: this.formatModalText({
            name: "Séverine Luzeau",
            a:"Séverine, j’habite à la campagne, je suis chanteuse et sportive (je me prépare au GR10). Je suis coach agile et DT Z depuis le mois de septembre.",
            b:"26 mars 2018",
            c:"Directrice Technique de l'agence de Nantes.",
            d:"Cooptation après 2 ans à me tanner, Nicolas Lepage a réussi a me faire venir chez Z!",
            e:"La liberté et la confiance qu’on m’a accordé immédiatement. Tellement c’était énorme, je n’ai pas réussi à prendre d’initiatives. J’ai mis un an avant d’intégrer ça, de proposer des choses et y participer. Aujourd'hui encore ça m’étonne.",
            f:"En agilité, c’est de faire partie d’un groupe. Avant j’étais toute seule et en arrivant ici j’ai rencontré beaucoup de monde et des plus expérimentés. C’est génial de pouvoir échanger.",
            g:"Découvrir le programme women empowerment fait chez Zenika.",
            h:"Épanouissement - Challenge - Convivialité",
          }),
          picture: "severine_luzeau.jpg",
        }
        },
      {front: "", back: { name: "", picture: ""}, disabled: true},
      {
        front: "Zoscar 'Plus actif pour l'agence'",
        back: { name: "Marie Viley", picture: "marie_viley.jpg"},
        disabled: false,
        modal: {
          title: "Marie Viley, Directrice d'Agence Locale et gagnante du Zoscar de la personne la plus active pour l'agence",
          text: this.formatModalText({
            name: "Marie Viley",
            a:"Commerciale et manager depuis 5 ans chez Z. Ma passion c’est la bière et le métal.",
            b:"13 Novembre 2017 en tant que recruteuse pour l’agence de Nantes, Rennes et Lille.",
            c:"Commerciale et manager on appelle ca DAL (Directrice d'Agence locale) ici. Je m’occupe de clients et je manage des personnes dans l’équipe de Nantes.",
            d:"J’étais dans une boite de merde qui m’a vendu du rêve, ce qui était plutôt faux. Ma manager était adepte du micro management et j’ai commencé a chercher ailleurs. je suis allé au great place to work a Paris, j’ai vu Carl parler de Zenika et je me suis dit 'Waou ca a l’air trop stylé!'. Plus tard j’ai vu une offre de recrutement et j’ai dit 'Lets go!'.",
            e:"Ce qu’on m’a dit en entretien au final c’était vrai. On ne m’a pas vendu du rêve. La possibilité de changer de postes. On te fait confiance, tester, revenir en arrière si ca ne va pas. Il n’y a pas de problèmes, c’est incroyable.",
            f:"La plupart des commerciaux des autres ESN sont des gros mytho alors qu’il faut juste être sincère. Ça ne sert à rien de vendre du rêve à un client. Et je comprend pas que les autres n'ont pas compris ça. Ici c’est pas le cas. :D",
            g:"Le barbecue sur la terrasse à Nantes!",
            h:"Autonomie - Fun - Responsabilité (on est tous responsable de notre entreprise)",
          }),
          picture: "marie_viley.jpg",
        }
      },
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
      {
        front: "Jeux vidéo",
        back: { name: "Yann Bertrand", picture: "yann_bertrand.jpg"},
        disabled: false,
        modal: {
          title: "Yann Bertrand, Consultant fullstack",
          text: this.formatModalText({
            name: "Yann Bertrand",
            a:"Dev depuis ma plus tendre jeunesse, tombé dedans quand j’étais petit, vers 12 - 13 ans. Depuis, je suis toujours motivé et excité par les projets web. J'ai commencé par du php puis j'ai développé une passion pour le front avec les framework JS.",
            b:"Septembre 2018, un peu plus de 4 ans, le même jour que Clément.",
            c:"Consultant officiellement, aujourd’hui, lead dev chez pix, c'est le deuxième projet où je suis lead dev.",
            d:"J’ai suivi une formation Z en 2016-7 et j’ai adoré la boite, pouvoir former des gens en info. Je suis parti au canada quelques mois puis j’ai candidaté chez Zenika et ça s'est très bien passé.",
            e:"L’expertise des gens que je peux côtoyer au quotidien. J’ai des vrais discussions de fond de qualité qui permet d’avoir une meilleure communication par la suite en mission.",
            f:"D’essayer de concrétiser de vraies choses avec de la théorie et beaucoup de pratiques. D’essayer de faire les choses bien et ne pas hésiter à remettre en question ce qui est demandé pour répondre à un besoin des gens et pas seulement développer un truc sexy techniquement.",
            g:"C'est à double tranchant mais faire de la formation, c'est passionnant d’expliquer ce que tu fais mais c'est couteux en énergie. Des fois, expliquer à des gens qui ont pas envie d’être là peut être compliqué.",
            h:"Passion - Atmosphère / Bon vivre - Liberté (de s’engager dans ce que tu as envie de faire)",
          }),
          picture: "yann_bertrand.jpg",
        }
      },

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
      {
        front: "Badminton",
        back: { name: "Alan Duchêne", picture: "alan_duchene.jpg"},
        disabled: false,
        modal: {
          title: "Alan Duchêne, Consultant fullstack",
          text: this.formatModalText({
            name: "Alan Duchêne",
            a:"Alan Duchêne, dev fullstack touche à tout. J’aime bien essayer, continuer d’apprendre, faire les choses proprement. Cette année j’aimerai creuser le craft.J’aime beaucoup le sport (bad, course à pied, muscu, surf), essayer un peu tout. Je fais du badminton depuis 12-13 ans. J’occupe mon temps entre le sport, passer du temps avec ma copine avec qui je vis depuis 8 ans, les jeux de société, les console, les sorties, boire des coups et jouer aux flechettes. Et aussi les séries et film, beaucoup. :D",
            b:"Juin 2021, 1 an et demi. Avant j’étais chez system U, ils ont monté une équipe centrale qui répand les bonnes pratiques. Z était présent en prestation, je les trouvais trop cool, tout ceux que je rencontrais. J'étais à 45 minutes de voiture et post covid j'ai voulu être plus prêt. Zenika, j’avais eu que des bons echo et du coup j’ai postulé et je suis très content d’être arrivé là.",
            c:"Consultant fullstack, dev / lead dev",
            d:"J'ai vu une offre linkedin, j'avais une vision de Zenika d’excellence. Un contact y travaillait qui a démystifié tout ça. Je lui a proposé une cooptation et me voilà!",
            e:"L’ambiance, très décontracte. Mes collègues sont devenus mes potes.",
            f:"Assez semblable avec system u sur la vision du poste de dev. Un peu plus la notion d’excellence mais sinon pas trop de surprise.",
            g:"Le mécénat de compétence. J’ai pu aider une amie a développer son site pour son association qui collecte des fonds pour lutter contre le cancer. https://www.levyeucopain.fr/",
            h:"Ambiance - Confiance - Kiff",
          }),
          picture: "alan_duchene.jpg",
        }
      },
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
      {
        front: "Système U",
        back: { name: "Geoffroy Begouaussel", picture: "geoffroy_begouaussel.jpg"},
        disabled:false,
        modal: {
          title: "Geoffroy Begouaussel, Consultant Fullstack JS",
          text: this.formatModalText({
            name: "Geoffroy Begouaussel",
            a:"Je suis dev fullstack JS mais avant je faisais surtout du front avec une grosse partie intégrateur et UX. Je suis aussi un ancien provençal.",
            b:"15 février 2021",
            c:"Dev fullstack Javascript",
            d:"J'ai fait une candidature spontanée suite a une presentation de Jimmy sur GraphQL et j'ai creusé ce que c’était Zenika et paf!",
            e:"La confiance qu’on t’accorde. Mon premier jour, j’ai reçu mon mac book pro chez moi et j’installe ce que je veux dessus. J'ai trouvé que c'était une grosse marque de confiance alors que j'arrivais juste. Très agréablement surpris.",
            f:"Le regard des gens quand je dis que je viens de Zenika. J’ai pu faire des cours (intervenant).",
            g:"Donner un talk à la TZ pour découvrir. Aller télétravailler où tu veux en France.",
            h:"Liberté - Perfectionnement - Confiance",
          }),
          picture: "geoffroy_begouaussel.jpg",
        }
      },
      {front: "", back: { name: "", picture: ""}, disabled:true},
      {
        front: "4-5 ans",
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
