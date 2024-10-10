// data/movies-infos.ts

export type Movie = {
  title: string;
  synopsis: string;
  poster: string;
  duration: string;
  year: number;
  director: string;
  actors: string[];
  category: string;
  genre: string;
  tags: string[];
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
    actors: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    category: "Film",
    genre: "Thriller",
    tags: ["mémoire", "vengeance", "drame", "amnésie"],
  },
  {
    title: "Les Trois Frères",
    synopsis:
      "Le même jour, trois hommes découvrent qu'ils sont frères et héritent de 3 millions. Mais 10 jours plus tard, l'héritage est perdu et la galère commence pour les frangins...",
    poster: "les-trois-freres.jpg",
    duration: "1h40",
    year: 1995,
    director: "Didier Bourdon, Bernard Campan",
    actors: ["Didier Bourdon", "Bernard Campan", "Pascal Légitimus"],
    category: "Film",
    genre: "Comédie",
    tags: ["frères", "héritage", "comédie", "inconnus"],
  },
  {
    title: "Léon",
    synopsis:
      "Un tueur à gages répondant au nom de Léon prend sous son aile Mathilda, une petite fille de 12 ans, seule rescapée du massacre de sa famille...",
    poster: "leon.jpg",
    duration: "1h43",
    year: 1994,
    director: "Luc Besson",
    actors: ["Jean Reno", "Natalie Portman", "Gary Oldman"],
    category: "Film",
    genre: "Action",
    tags: ["action", "drame", "tueur à gages", "nettoyeur"],
  },
  {
    title: "Anatomie d'une chute",
    synopsis:
      "Sandra, Samuel et leur fils malvoyant de 11 ans, Daniel, vivent depuis un an à la montagne. Un jour, Samuel est retrouvé mort. On assiste au procès de la mère, véritable dissection du couple.",
    poster: "anatomie-chute.jpg",
    duration: "2h31",
    year: 2023,
    director: "Justine Triet",
    actors: ["Sandra Hüller", "Antoine Reinartz", "Swann Arlaud"],
    category: "Film",
    genre: "Drame",
    tags: ["procès", "drame", "famille", "couple"],
  },
  {
    title: "Yannick",
    synopsis:
      "En pleine représentation de la pièce « Le Cocu », un très mauvais boulevard, Yannick se lève et interrompt le spectacle pour reprendre la soirée en main...",
    poster: "yannick.jpg",
    duration: "1h07",
    year: 2023,
    director: "Quentin Dupieux",
    actors: ["Yannick Noah", "Philippe Katerine", "Ophélie Bau"],
    category: "Film",
    genre: "Comédie",
    tags: ["théâtre", "humour", "absurde", "spectateur"],
  },
  {
    title: "Dobermann",
    synopsis:
      "Le Dobermann et son gang défraient la chronique. En face d'eux, un flic quelque peu pourri. Une anthologie du braquage, un best-of du hold-up !",
    poster: "dobermann.jpg",
    duration: "1h43",
    year: 1997,
    director: "Jan Kounen",
    actors: ["Vincent Cassel", "Tchéky Karyo", "Joey Starr"],
    category: "Film",
    genre: "Action",
    tags: ["braquage", "gang", "action", "violence"],
  },
  {
    title: "Man on Fire",
    synopsis:
      "Dans un Mexique en proie à une vague d'enlèvements, l'ancien agent de la CIA John Creasy devient bodyguard de la petite Pita Ramos, fille d'un riche industriel. C'est alors qu'elle est kidnappée...",
    poster: "man-on-fire.jpg",
    duration: "2h26",
    year: 2004,
    director: "Tony Scott",
    actors: ["Denzel Washington", "Dakota Fanning", "Marc Anthony"],
    category: "Film",
    genre: "Action",
    tags: ["enlèvement", "protection", "vengeance", "kidnapping"],
  },
  {
    title: "Training Day",
    synopsis:
      "Jake Hoyt, nouvelle recrue de la police de Los Angeles, va vivre une folle mise à l'essai de 24 heures auprès du sergent-chef Alonzo Harris, vétéran de la lutte antidrogue...",
    poster: "training-day.jpg",
    duration: "2h01",
    year: 2001,
    director: "Antoine Fuqua",
    actors: ["Denzel Washington", "Ethan Hawke", "Scott Glenn"],
    category: "Film",
    genre: "Thriller",
    tags: ["police", "drogue", "action", "armes"],
  },
  {
    title: "Seven",
    synopsis:
      "À 7 jours de la retraite, l'inspecteur Somerset tombe sur un criminel peu ordinaire. John Doe, l'assassin, est lancé dans une série de meurtres basés sur les 7 péchés capitaux...",
    poster: "seven.jpg",
    duration: "2h10",
    year: 1996,
    director: "David Fincher",
    actors: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
    category: "Film",
    genre: "Thriller",
    tags: ["meurtres", "enquête", "suspense", "péchés"],
  },
  {
    title: "Le Dîner de Cons",
    synopsis:
      "Pierre Brochant et ses amis organisent un dîner où chacun doit amener un con. Mais son invité, Francois Pignon, passionné de modèles réduits en allumettes, va enchaîner les catastrophes...",
    poster: "diner-de-cons.jpg",
    duration: "1h20",
    year: 1998,
    director: "Francis Veber",
    actors: ["Jacques Villeret", "Thierry Lhermitte", "Francis Huster"],
    category: "Film",
    genre: "Comédie",
    tags: ["humour", "quiproquo", "huis clos", "con"],
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    synopsis:
      "L'histoire d'amour touche à sa fin entre Clementine et Joel. Ce dernier décide de faire appel à une société pour supprimer Clementine de sa mémoire. Les souvenirs commencent à défiler...",
    poster: "eternal-sunshine.jpg",
    duration: "1h48",
    year: 2004,
    director: "Michel Gondry",
    actors: ["Jim Carrey", "Kate Winslet", "Elijah Wood"],
    category: "Film",
    genre: "Drame",
    tags: ["mémoire", "amour", "romance", "rêves"],
  },
  {
    title: "Vol au-dessus d'un nid de coucou",
    synopsis:
      "Dans un hôpital psychiatrique des années 1960, les traitements infligés aux patients posent questions... Une œuvre intense dont on ne sort pas indemne !",
    poster: "vol-nid-de-coucou.jpg",
    duration: "2h09",
    year: 1976,
    director: "Milos Forman",
    actors: ["Jack Nicholson", "Louise Fletcher", "Will Sampson"],
    category: "Film",
    genre: "Drame",
    tags: ["psychiatrie", "drame", "intense", "hôpital"],
  },
  {
    title: "Le Silence des Agneaux",
    synopsis:
      "Pour les besoins d'une enquête, Clarice Starling (FBI) décide de rencontrer le Dr Hannibal Lecter, détenu pour cannibalisme. Entre eux s'établit un lien de fascination/répulsion...",
    poster: "silence-des-agneaux.jpg",
    duration: "1h58",
    year: 1991,
    director: "Jonathan Demme",
    actors: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    category: "Film",
    genre: "Thriller",
    tags: ["suspense", "enquête", "psychologique", "cannibale"],
  },
  {
    title: "Matrix",
    synopsis:
      "Dans un monde futuriste, un hacker nommé Neo rejoint une rébellion pour libérer l'humanité de l'emprise des intelligences artificielles...",
    poster: "matrix.jpg",
    duration: "2h15",
    year: 1999,
    director: "Larry Wachowski et Andy Wachowski",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    category: "Film",
    genre: "Science-fiction",
    tags: ["dystopie", "matrice", "action", "rébellion"],
  },
  {
    title: "La Haine",
    synopsis:
      "Une émeute oppose les jeunes d'une cité HLM aux forces de l'ordre. Pour 3 d'entre eux, ces heures vont marquer un tournant dans leur vie...",
    poster: "la-haine.jpg",
    duration: "1h35",
    year: 1995,
    director: "Mathieu Kassovitz",
    actors: ["Vincent Cassel", "Saïd Taghmaoui", "Hubert Koundé"],
    category: "Film",
    genre: "Drame",
    tags: ["émeute", "société", "intense", "banlieue"],
  },
  {
    title: "La Ligne Verte",
    synopsis:
      "Dans le couloir de la mort d'une prison en Louisiane, un gardien remarque les dons surnaturels d'un condamné à mort. Quand la peine de mort côtoie l'émotion...",
    poster: "la-ligne-verte.jpg",
    duration: "3h09",
    year: 2000,
    director: "Frank Darabont",
    actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    category: "Film",
    genre: "Drame",
    tags: ["peine de mort", "émotion", "surnaturel", "coffey"],
  },
  {
    title: "Bienvenue à Gattaca",
    synopsis:
      "Dans un futur où l'eugénisme est la norme, Vincent Freeman, un homme né naturellement, rêve de voyager dans l'espace. Pour cela, il doit déjouer le système en usurpant l'identité d'un individu génétiquement parfait.",
    poster: "gattaca.jpg",
    duration: "1h46",
    year: 1997,
    director: "Andrew Niccol",
    actors: ["Ethan Hawke", "Uma Thurman", "Jude Law"],
    category: "Film",
    genre: "Science-fiction",
    tags: ["eugénisme", "futur", "espace", "identité"],
  },
  {
    title: "Funny Games",
    synopsis:
      "Deux jeunes hommes prennent en otage une famille et les soumettent à des jeux sadiques, sans raison apparente.",
    poster: "funny-games.jpg",
    duration: "1h48",
    year: 1997,
    director: "Michael Haneke",
    actors: ["Susanne Lothar", "Ulrich Mühe", "Arno Frisch"],
    category: "Film",
    genre: "Thriller",
    tags: ["violence", "suspense", "sadisme", "otage"],
  },
  {
    title: "5150, rue des Ormes",
    synopsis:
      "Yannick se retrouve séquestré par une famille qui vit selon un code moral très strict, dirigée par un père passionné par les échecs. Un duel psychologique s'engage.",
    poster: "5150-rue-des-ormes.jpg",
    duration: "1h50",
    year: 2009,
    director: "Éric Tessier",
    actors: ["Marc-André Grondin", "Normand D'Amour", "Sonia Vachon"],
    category: "Film",
    genre: "Thriller",
    tags: ["psychologique", "séquestration", "échecs", "famille"],
  },
  {
    title: "Polisse",
    synopsis:
      "La vie quotidienne d'une brigade de protection des mineurs à Paris, entre la violence des affaires à traiter et la complexité de leurs vies personnelles.",
    poster: "polisse.jpg",
    duration: "2h07",
    year: 2011,
    director: "Maïwenn",
    actors: ["Karin Viard", "Joey Starr", "Marina Foïs"],
    category: "Film",
    genre: "Drame",
    tags: ["police", "mineurs", "justice", "drame"],
  },
  {
    title: "Eden Lake",
    synopsis:
      "Un couple en vacances se retrouve traqué par un groupe d'adolescents violents dans une forêt isolée. La lutte pour la survie commence.",
    poster: "eden-lake.jpg",
    duration: "1h31",
    year: 2008,
    director: "James Watkins",
    actors: ["Kelly Reilly", "Michael Fassbender", "Jack O'Connell"],
    category: "Film",
    genre: "Horreur",
    tags: ["survie", "violence", "adolescents", "forêt"],
  },
  {
    title: "C'est arrivé près de chez vous",
    synopsis:
      "Un faux documentaire suit les méfaits d'un tueur en série charismatique, commentés par lui-même, dans une satire acerbe du voyeurisme.",
    poster: "cest-arrive-pres-de-chez-vous.jpg",
    duration: "1h35",
    year: 1992,
    director: "Rémy Belvaux, André Bonzel, Benoît Poelvoorde",
    actors: ["Benoît Poelvoorde", "Rémy Belvaux", "André Bonzel"],
    category: "Film",
    genre: "Comédie noire",
    tags: ["tueur en série", "satire", "faux documentaire", "humour noir"],
  },
  {
    title: "Adam's Apples",
    synopsis:
      "Un néo-nazi est envoyé dans une église rurale pour effectuer des travaux d'intérêt général. Il se retrouve confronté à un prêtre optimiste, malgré de nombreux obstacles.",
    poster: "adams-apples.jpg",
    duration: "1h34",
    year: 2005,
    director: "Anders Thomas Jensen",
    actors: ["Mads Mikkelsen", "Ulrich Thomsen", "Nicolas Bro"],
    category: "Film",
    genre: "Comédie noire",
    tags: ["religion", "humour noir", "réhabilitation", "optimisme"],
  },
  {
    title: "Nous trois ou rien",
    synopsis:
      "L'histoire vraie d'une famille iranienne qui fuit la dictature pour s'installer en France, racontée avec humour et émotion.",
    poster: "nous-trois-ou-rien.jpg",
    duration: "1h42",
    year: 2015,
    director: "Kheiron",
    actors: ["Kheiron", "Leïla Bekhti", "Gérard Darmon"],
    category: "Film",
    genre: "Comédie dramatique",
    tags: ["exil", "famille", "dictature", "humour"],
  },
  {
    title: "Premier Contact",
    synopsis:
      "Quand des extraterrestres arrivent sur Terre, une linguiste est chargée d'établir un premier contact. Elle doit décoder leur langage avant qu'une guerre éclate.",
    poster: "premier-contact.webp",
    duration: "1h56",
    year: 2016,
    director: "Denis Villeneuve",
    actors: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    category: "Film",
    genre: "Science-fiction",
    tags: ["extraterrestres", "communication", "langage", "contact"],
  },
  {
    title: "Shutter Island",
    synopsis:
      "Un marshal enquête sur la disparition d'une patiente dans un hôpital psychiatrique isolé, révélant des secrets troublants sur l'île.",
    poster: "shutter-island.jpg",
    duration: "2h18",
    year: 2010,
    director: "Martin Scorsese",
    actors: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    category: "Film",
    genre: "Thriller",
    tags: ["mystère", "psychologie", "hôpital psychiatrique", "disparition"],
  },
  {
    title: "Interstellar",
    synopsis:
      "Dans un futur où la Terre est en péril, un groupe d'explorateurs voyage à travers un trou de ver pour trouver un nouveau foyer pour l'humanité.",
    poster: "interstellar.jpg",
    duration: "2h49",
    year: 2014,
    director: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    category: "Film",
    genre: "Science-fiction",
    tags: ["espace", "trou de ver", "exploration", "famille"],
  },
  {
    title: "Hunger Games",
    synopsis:
      "Dans un futur dystopique, Katniss Everdeen participe à un jeu télévisé où des adolescents s'affrontent dans une lutte à mort.",
    poster: "hunger-games.jpg",
    duration: "2h22",
    year: 2012,
    director: "Gary Ross",
    actors: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
    category: "Film",
    genre: "Science-fiction",
    tags: ["dystopie", "survie", "télévision", "adolescents"],
  },
  {
    title: "Je verrai toujours vos visages",
    synopsis:
      "Ce film retrace le parcours de plusieurs individus engagés dans une démarche de justice restaurative, où victimes et auteurs de crimes se rencontrent.",
    poster: "je-verrai-toujours-vos-visages.jpg",
    duration: "1h58",
    year: 2023,
    director: "Jeanne Herry",
    actors: ["Adèle Exarchopoulos", "Gilles Lellouche", "Elodie Bouchez"],
    category: "Film",
    genre: "Drame",
    tags: ["justice", "victimes", "réconciliation", "émotion"],
  },
  {
    title: "Cuisine et Dépendances",
    synopsis:
      "Lors d'un dîner, les tensions montent entre amis alors que de vieilles histoires refont surface, le tout dans la cuisine exiguë de l'hôte.",
    poster: "cuisine-et-dependances.jpg",
    duration: "1h40",
    year: 1993,
    director: "Philippe Muyl",
    actors: ["Zabou Breitman", "Sam Karmann", "Jean-Pierre Bacri"],
    category: "Film",
    genre: "Comédie dramatique",
    tags: ["dîner", "tensions", "huis clos", "amitié"],
  },
  {
    title: "Un p'tit truc en plus",
    synopsis:
      "Une comédie romantique décalée où un homme découvre que son entourage perçoit quelque chose d'étrange chez lui, tout en cherchant l'amour.",
    poster: "un-ptit-truc-en-plus.jpg",
    duration: "1h30",
    year: 2013,
    director: "Pascal Thomas",
    actors: ["Jean-Paul Rouve", "Alice Taglioni", "Melanie Doutey"],
    category: "Film",
    genre: "Comédie romantique",
    tags: ["amour", "comédie", "romance", "décalé"],
  },
  {
    title: "Mystic River",
    synopsis:
      "Trois amis d'enfance se retrouvent à la suite d'un meurtre dans leur quartier, ce qui fait ressurgir des traumatismes du passé.",
    poster: "mystic-river.jpg",
    duration: "2h18",
    year: 2003,
    director: "Clint Eastwood",
    actors: ["Sean Penn", "Tim Robbins", "Kevin Bacon"],
    category: "Film",
    genre: "Drame",
    tags: ["meurtre", "traumatismes", "enfance", "justice"],
  },
  {
    title: "Bac Nord",
    synopsis:
      "Dans les quartiers sensibles de Marseille, trois policiers spécialisés dans la lutte contre le trafic de drogue tentent de résoudre une affaire qui va bouleverser leur vie.",
    poster: "bac-nord.jpg",
    duration: "1h44",
    year: 2021,
    director: "Cédric Jimenez",
    actors: ["Gilles Lellouche", "François Civil", "Karim Leklou"],
    category: "Film",
    genre: "Action",
    tags: ["police", "trafic", "Marseille", "enquête"],
  },
  {
    title: "Split",
    synopsis:
      "Kevin, atteint de trouble dissociatif de l'identité, possède 23 personnalités différentes. L'une d'entre elles prend le contrôle et kidnappe trois adolescentes.",
    poster: "split.jpg",
    duration: "1h57",
    year: 2016,
    director: "M. Night Shyamalan",
    actors: ["James McAvoy", "Anya Taylor-Joy", "Betty Buckley"],
    category: "Film",
    genre: "Thriller",
    tags: ["psychologique", "personnalités", "enlèvement", "suspense"],
  },
  {
    title: "Argo",
    synopsis:
      "Pendant la révolution iranienne, un agent de la CIA met au point une mission risquée pour libérer six otages en se faisant passer pour une équipe de tournage de film.",
    poster: "argo.jpg",
    duration: "2h00",
    year: 2012,
    director: "Ben Affleck",
    actors: ["Ben Affleck", "Bryan Cranston", "Alan Arkin"],
    category: "Film",
    genre: "Thriller",
    tags: ["CIA", "Iran", "otages", "faux film"],
  },
  {
    title: "Le Prénom",
    synopsis:
      "Lors d'un dîner, Vincent annonce le prénom qu'il a choisi pour son fils. Cette révélation déclenche des tensions et des disputes inattendues parmi les invités.",
    poster: "le-prenom.jpg",
    duration: "1h49",
    year: 2012,
    director: "Alexandre de La Patellière, Matthieu Delaporte",
    actors: ["Patrick Bruel", "Valérie Benguigui", "Charles Berling"],
    category: "Film",
    genre: "Comédie",
    tags: ["dîner", "dispute", "prénom", "famille"],
  },
  {
    title: "Les Bronzés font du ski",
    synopsis:
      "Les Bronzés se retrouvent à la montagne pour des vacances au ski, où gaffes et mésaventures vont s'enchaîner dans cette comédie culte.",
    poster: "les-bronzes-font-du-ski.jpg",
    duration: "1h23",
    year: 1979,
    director: "Patrice Leconte",
    actors: ["Michel Blanc", "Gérard Jugnot", "Josiane Balasko"],
    category: "Film",
    genre: "Comédie",
    tags: ["ski", "vacances", "humour", "culte"],
  },
  {
    title: "Les Visiteurs",
    synopsis:
      "Un chevalier du Moyen Âge et son écuyer sont transportés dans le futur, où ils découvrent un monde moderne totalement déconcertant.",
    poster: "les-visiteurs.jpg",
    duration: "1h47",
    year: 1993,
    director: "Jean-Marie Poiré",
    actors: ["Jean Reno", "Christian Clavier", "Valérie Lemercier"],
    category: "Film",
    genre: "Comédie",
    tags: ["voyage dans le temps", "chevalier", "humour", "futur"],
  },
  {
    title: "Ils",
    synopsis:
      "Un couple vivant à la campagne est terrorisé par de mystérieux intrus qui envahissent leur maison pendant la nuit.",
    poster: "ils.jpg",
    duration: "1h17",
    year: 2006,
    director: "David Moreau, Xavier Palud",
    actors: ["Olivia Bonamy", "Michaël Cohen"],
    category: "Film",
    genre: "Horreur",
    tags: ["terreur", "maison", "intrusion", "suspense"],
  },
  {
    title: "Titanic",
    synopsis:
      "L'histoire tragique de l'énorme paquebot, mêlée à une romance impossible entre Jack et Rose, deux passagers de classes sociales opposées.",
    poster: "titanic.jpg",
    duration: "3h14",
    year: 1997,
    director: "James Cameron",
    actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    category: "Film",
    genre: "Drame",
    tags: ["tragédie", "paquebot", "amour", "sauvetage"],
  },
  {
    title: "Forrest Gump",
    synopsis:
      "Forrest Gump, un homme simple d'esprit mais au grand cœur, vit des événements marquants de l'histoire américaine tout en poursuivant son amour d'enfance.",
    poster: "forrest-gump.jpg",
    duration: "2h22",
    year: 1994,
    director: "Robert Zemeckis",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    category: "Film",
    genre: "Drame",
    tags: ["histoire", "amour", "aventures", "destin"],
  },
];

export default movies;
