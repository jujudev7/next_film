// data/movies-infos.ts

export type Movie = {
  title: string;
  synopsis: string;
  poster: string;
  duration: string;
  year: number;
  director: string;
};

const movies: Movie[] = [
  {
    title: "Memento",
    synopsis:
      "Leonard n'a qu'une idée en tête : traquer l'homme qui a assassiné sa femme afin de se venger. Sa recherche du meurtrier est rendue plus difficile en raison de son incurable amnésie.",
    poster: "memento.jpg",
    duration: "1h56",
    year: 2000,
    director: "Christopher Nolan",
  },
  {
    title: "Les Trois Frères",
    synopsis:
      "Le même jour, trois hommes découvrent qu'ils sont frères et héritent de 3 millions. Mais 10 jours plus tard, l'héritage est perdu et la galère commence pour les frangins...",
    poster: "les-trois-freres.jpg",
    duration: "1h40",
    year: 1995,
    director: "Didier Bourdon, Bernard Campan",
  },
  {
    title: "Léon",
    synopsis:
      "Un tueur à gages répondant au nom de Léon prend sous son aile Mathilda, une petite fille de 12 ans, seule rescapée du massacre de sa famille...",
    poster: "leon.jpg",
    duration: "1h43",
    year: 1994,
    director: "Luc Besson",
  },
  {
    title: "Anatomie d'une chute",
    synopsis:
      "Sandra, Samuel et leur fils malvoyant de 11 ans, Daniel, vivent depuis un an à la montagne. Un jour, Samuel est retrouvé mort. On assiste au procès de la mère, véritable dissection du couple.",
    poster: "anatomie-chute.jpg",
    duration: "2h31",
    year: 2023,
    director: "Justine Triet",
  },
  {
    title: "Yannick",
    synopsis:
      "En pleine représentation de la pièce « Le Cocu », un très mauvais boulevard, Yannick se lève et interrompt le spectacle pour reprendre la soirée en main...",
    poster: "yannick.jpg",
    duration: "1h07",
    year: 2023,
    director: "Quentin Dupieux",
  },
  {
    title: "Dobermann",
    synopsis:
      "Le Dobermann et son gang défraient la chronique. En face d'eux, un flic quelque peu pourri. Une anthologie du braquage, un best-of du hold-up !",
    poster: "dobermann.jpg",
    duration: "1h43",
    year: 1997,
    director: "Jan Kounen",
  },
  {
    title: "Man on Fire",
    synopsis:
      "Dans un Mexique en proie à une vague d'enlèvements, l'ancien agent de la CIA John Creasy devient bodyguard de la petite Pita Ramos, fille d'un riche industriel. C'est alors qu'elle est kidnappée...",
    poster: "man-on-fire.jpg",
    duration: "2h26",
    year: 2004,
    director: "Tony Scott",
  },
  {
    title: "Training Day",
    synopsis:
      "Jake Hoyt, nouvelle recrue de la police de Los Angeles, va vivre une folle mise à l'essai de 24 heures auprès du sergent-chef Alonzo Harris, vétéran de la lutte antidrogue...",
    poster: "training-day.jpg",
    duration: "2h01",
    year: 2001,
    director: "Antoine Fuqua",
  },
  {
    title: "Seven",
    synopsis:
      "À 7 jours de la retraite, l'inspecteur Somerset tombe sur un criminel peu ordinaire. John Doe, l'assassin, est lancé dans une série de meurtres basés sur les 7 péchés capitaux...",
    poster: "seven.jpg",
    duration: "2h10",
    year: 1996,
    director: "David Fincher",
  },
  {
    title: "Le Dîner de Cons",
    synopsis:
      "Pierre Brochant et ses amis organisent un dîner où chacun doit amener un con. Mais son invité, Francois Pignon, passionné de modèles réduits en allumettes, va enchaîner les catastrophes...",
    poster: "diner-de-cons.jpg",
    duration: "1h20",
    year: 1998,
    director: "Francis Veber",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    synopsis:
      "L'histoire d'amour touche à sa fin entre Clementine et Joel. Ce dernier décide de faire appel à une société pour supprimer Clementine de sa mémoire. Les souvenirs commencent à défiler...",
    poster: "eternal-sunshine.jpg",
    duration: "1h48",
    year: 2004,
    director: "Michel Gondry",
  },
  {
    title: "Vol au-dessus d'un nid de coucou",
    synopsis:
      "Dans un hôpital psychiatrique des années 1960, les traitements infligés aux patients posent questions... Une œuvre intense dont on ne sort pas indemne !",
    poster: "vol-nid-de-coucou.jpg",
    duration: "2h09",
    year: 1976,
    director: "Milos Forman",
  },
  {
    title: "Le Silence des Agneaux",
    synopsis:
      "Pour les besoins d'une enquête, Clarice Starling (FBI) décide de rencontrer le Dr Hannibal Lecter, détenu pour cannibalisme. Entre eux s'établit un lien de fascination/répulsion...",
    poster: "silence-des-agneaux.jpg",
    duration: "1h58",
    year: 1991,
    director: "Jonathan Demme",
  },
  {
    title: "Matrix",
    synopsis:
      "Dans un monde futuriste, un hacker nommé Neo rejoint une rébellion pour libérer l'humanité de l'emprise des intelligences artificielles...",
    poster: "matrix.jpg",
    duration: "2h15",
    year: 1999,
    director: "Larry Wachowski et Andy Wachowski",
  },
  {
    title: "La Haine",
    synopsis:
      "Une émeute oppose les jeunes d'une cité HLM aux forces de l'ordre. Pour 3 d'entre eux, ces heures vont marquer un tournant dans leur vie...",
    poster: "la-haine.jpg",
    duration: "1h35",
    year: 1995,
    director: "Mathieu Kassovitz",
  },
  {
    title: "La Ligne Verte",
    synopsis:
      "Dans le couloir de la mort d'une prison en Louisiane, un gardien remarque les dons surnaturels d'un condamné à mort. Quand la peine de mort côtoie l'émotion...",
    poster: "la-ligne-verte.jpg",
    duration: "3h09",
    year: 2000,
    director: "Frank Darabont",
  },
];

export default movies;