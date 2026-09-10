// Source unique de vérité pour tous les témoignages du site. `text` est le
// texte complet et fait foi partout — jamais de paraphrase ni de coupure
// improvisée d'une page à l'autre (voir l'incident corrigé le 09/09/2026 :
// Tristan, Hugo et Camille P. avaient chacun une version tronquée sur
// l'Accueil qui ne correspondait à aucune phrase réelle du témoignage).
// `shortText`, quand il existe, est un extrait volontaire — une ou
// plusieurs phrases complètes prises telles quelles dans `text` (jamais
// une phrase coupée en cours de route ou reformulée) — réservé au
// carrousel resserré de l'accueil.
export const TESTIMONIALS = {
  hugo: {
    name: "Hugo",
    text: "Alexandre m'a d'abord aidé à comprendre pourquoi cet objectif était important pour moi, quelles étaient mes motivations profondes pour ce rôle de manager. Ensuite, nous sommes partis de cas concrets pour lister des idées et faire évoluer mon style de management dans la bonne direction. Trois séances ont suffi pour que je me sente aujourd'hui mieux équipé sur ce sujet.",
    shortText: "Trois séances ont suffi pour que je me sente aujourd'hui mieux équipé sur ce sujet.",
  },
  paulineP: {
    name: "Pauline P.",
    text: "J'ai cassé des barrières mentales que je m'étais créées. Ça m'a permis de prendre confiance en moi.",
  },
  mathiasV: {
    name: "Mathias V.",
    text: "On apprend à accepter les regards, à s'en libérer pour avoir plus d'espace dédié à la création, à l'improvisation, au développement de sa pensée en direct.",
  },
  tristan: {
    name: "Tristan",
    text: "Un chouette moment, fun et libre, pour prendre la parole devant les autres. J'en suis ressorti plus serein dans ma façon de m'exprimer, et en plus, je me suis amusé.",
    shortText: "Un chouette moment, fun et libre, pour prendre la parole devant les autres.",
  },
  pierreL: {
    name: "Pierre L.",
    text: "J'ai amélioré ma capacité à prendre la parole en public, à me détacher de la peur du jugement.",
  },
  rayanR: {
    name: "Rayan R.",
    text: "J'arrive à plus me lâcher dans des contextes d'improvisation, et j'ai le goût d'y revenir !",
  },
  atelierAnonyme: {
    name: "Une personne accompagnée en atelier expérientiel / théâtre",
    text: "Par le biais des exercices de théâtre animés par Alexandre, j'arrivais à me recentrer avec moi-même, évacuer le stress, canaliser mes émotions et mieux les communiquer.",
  },
  christopherW: {
    name: "Christopher W.",
    text: "Ça m'a permis d'oser davantage, d'avoir moins peur du ridicule, de travailler mon imagination et mon improvisation.",
  },
  camilleP: {
    name: "Camille P.",
    text: "J'ai vraiment compris la force des petites actions et des « petits pas » pour m'amener vers un objectif. Encore aujourd'hui, dès que le doute s'installe, je me pousse à agir et je calibre ces actions de la bonne façon.",
    shortText: "J'ai vraiment compris la force des petites actions et des « petits pas » pour m'amener vers un objectif.",
  },
};
