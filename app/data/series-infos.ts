// data/series-infos.ts

export type Serie = {
  title: string;
  synopsis: string;
  poster: string;
  duration?: string;
  year: number;
  yearEnd?: number;
  director: string;
  actors: string[];
  category: string;
  seasons: number;
  episodes: number;
  genre: string;
  tags: string[];
};

const series: Serie[] = [
  {
    title: "The Wire",
    synopsis:
      "Une exploration réaliste de la vie dans la ville de Baltimore à travers le prisme de la lutte entre la police et les narcotrafiquants.",
    poster: "the-wire.jpg",
    seasons: 5,
    episodes: 60,
    year: 2002,
    yearEnd: 2008,
    director: "David Simon",
    actors: ["Dominic West", "Idris Elba", "Michael K. Williams"],
    category: "Série",
    genre: "Drame",
    tags: ["crime", "police", "société", "corruption"],
  },
  {
    title: "Manhunt",
    synopsis:
      "Basée sur des histoires vraies, cette série suit des enquêtes intenses menées par le FBI pour capturer des criminels de grande envergure.",
    poster: "manhunt.jpg",
    seasons: 2,
    episodes: 18,
    year: 2017,
    yearEnd: 2020,
    director: "Andrew Sodroski",
    actors: ["Sam Worthington", "Paul Bettany", "Jeremy Bobb"],
    category: "Série",
    genre: "Thriller",
    tags: ["crime", "suspense", "enquête", "FBI"],
  },
  {
    title: "Oz",
    synopsis:
      "Une plongée dans l'univers violent et brutal de la prison de haute sécurité d'Oswald State Correctional Facility.",
    poster: "oz.jpg",
    seasons: 6,
    episodes: 56,
    year: 1997,
    yearEnd: 2003,
    director: "Tom Fontana",
    actors: ["Ernie Hudson", "J.K. Simmons", "Lee Tergesen"],
    category: "Série",
    genre: "Drame",
    tags: ["prison", "violence", "survie", "justice"],
  },
  {
    title: "Severance",
    synopsis:
      "Des employés d'une entreprise subissent une procédure pour séparer leurs souvenirs professionnels de leurs souvenirs personnels, menant à des résultats inattendus.",
    poster: "severance.jpg",
    seasons: 1,
    episodes: 9,
    year: 2022,
    yearEnd: 2022,
    director: "Ben Stiller",
    actors: ["Adam Scott", "Patricia Arquette", "John Turturro"],
    category: "Série",
    genre: "Science-fiction",
    tags: ["mémoire", "mystère", "dystopie", "entreprise"],
  },
  {
    title: "Atlanta",
    synopsis:
      "Un jeune manager tente de percer dans la scène musicale rap d'Atlanta, tout en naviguant dans les défis de la vie quotidienne.",
    poster: "atlanta.jpg",
    seasons: 4,
    episodes: 41,
    year: 2016,
    yearEnd: 2022,
    director: "Donald Glover",
    actors: ["Donald Glover", "Brian Tyree Henry", "LaKeith Stanfield"],
    category: "Série",
    genre: "Comédie dramatique",
    tags: ["musique", "rap", "culture", "comédie"],
  },
  {
    title: "Peaky Blinders",
    synopsis:
      "Dans l'Angleterre des années 1920, le gang des Peaky Blinders mène une vie criminelle sous le contrôle de son chef charismatique Tommy Shelby.",
    poster: "peaky-blinders.jpg",
    seasons: 6,
    episodes: 36,
    year: 2013,
    yearEnd: 2022,
    director: "Steven Knight",
    actors: ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
    category: "Série",
    genre: "Drame",
    tags: ["gang", "crime", "historique", "famille"],
  },
  {
    title: "The Sopranos",
    synopsis:
      "Tony Soprano, chef d'une organisation mafieuse, jongle entre les problèmes familiaux et les affaires criminelles.",
    poster: "sopranos.jpg",
    seasons: 6,
    episodes: 86,
    year: 1999,
    yearEnd: 2007,
    director: "David Chase",
    actors: ["James Gandolfini", "Lorraine Bracco", "Edie Falco"],
    category: "Série",
    genre: "Drame",
    tags: ["mafia", "famille", "psychologie", "violence"],
  },
  {
    title: "The Office",
    synopsis:
      "La vie quotidienne au bureau de la société Dunder Mifflin, dirigée par l'excentrique Michael Scott, avec une équipe attachante et hilarante.",
    poster: "the-office.jpg",
    seasons: 9,
    episodes: 201,
    year: 2005,
    yearEnd: 2013,
    director: "Greg Daniels",
    actors: ["Steve Carell", "John Krasinski", "Rainn Wilson"],
    category: "Série",
    genre: "Comédie",
    tags: ["bureau", "humour", "collègues", "mockumentary"],
  },
  {
    title: "Ted Lasso",
    synopsis:
      "Un coach de football américain est embauché pour entraîner une équipe de football anglaise, malgré son ignorance du sport.",
    poster: "ted-lasso.jpg",
    seasons: 3,
    episodes: 34,
    year: 2020,
    yearEnd: 2023,
    director: "Jason Sudeikis",
    actors: ["Jason Sudeikis", "Hannah Waddingham", "Brett Goldstein"],
    category: "Série",
    genre: "Comédie",
    tags: ["sport", "optimisme", "entraîneur", "humour"],
  },
  {
    title: "Calls",
    synopsis:
      "Une série expérimentale qui raconte des histoires captivantes uniquement à travers des dialogues téléphoniques et des effets visuels minimalistes.",
    poster: "calls.jpg",
    seasons: 3,
    episodes: 27,
    year: 2017,
    yearEnd: 2020,
    director: "Fede Alvarez",
    actors: ["Pedro Pascal", "Lily Collins", "Nick Jonas"],
    category: "Série",
    genre: "Thriller",
    tags: ["mystère", "téléphone", "expérimental", "suspense"],
  },
  {
    title: "Altered Carbon",
    synopsis:
      "Dans un futur où les humains peuvent transférer leur conscience dans de nouveaux corps, un mercenaire est chargé de résoudre un meurtre complexe.",
    poster: "altered-carbon.jpg",
    seasons: 2,
    episodes: 18,
    year: 2018,
    yearEnd: 2020,
    director: "Laeta Kalogridis",
    actors: ["Joel Kinnaman", "Anthony Mackie", "Martha Higareda"],
    category: "Série",
    genre: "Science-fiction",
    tags: ["futur", "immortalité", "enquête", "cyberpunk"],
  },
  {
    title: "Mindhunter",
    synopsis:
      "Dans les années 1970, deux agents du FBI interviewent des tueurs en série pour comprendre leur psychologie et améliorer les méthodes d'enquête.",
    poster: "mindhunter.jpg",
    duration: "50-60 min",
    seasons: 2,
    episodes: 19,
    year: 2017,
    yearEnd: 2019,
    director: "David Fincher",
    actors: ["Jonathan Groff", "Holt McCallany", "Anna Torv"],
    category: "Série",
    genre: "Thriller",
    tags: ["crime", "psychologie", "FBI", "tueurs en série"],
  },
  {
    title: "Squid Game",
    synopsis:
      "Des personnes endettées participent à une série de jeux mortels pour gagner une somme d'argent qui pourrait changer leur vie.",
    poster: "squid-game.jpg",
    duration: "50-60 min",
    seasons: 1,
    episodes: 9,
    year: 2021,
    yearEnd: 2021,
    director: "Hwang Dong-hyuk",
    actors: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
    category: "Série",
    genre: "Thriller",
    tags: ["survie", "jeu", "société", "violence"],
  },
  {
    title: "Maniac",
    synopsis:
      "Deux étrangers participent à un essai clinique mystérieux qui promet de soigner tous leurs troubles psychologiques, mais rien ne se passe comme prévu.",
    poster: "maniac.jpg",
    duration: "30-45 min",
    seasons: 1,
    episodes: 10,
    year: 2018,
    yearEnd: 2018,
    director: "Cary Joji Fukunaga",
    actors: ["Emma Stone", "Jonah Hill", "Justin Theroux"],
    category: "Série",
    genre: "Science-fiction",
    tags: ["psychologie", "expérience", "futur", "pharmaceutique"],
  },
  {
    title: "The OA",
    synopsis:
      "Une jeune femme réapparaît après avoir disparu pendant plusieurs années, prétendant avoir des pouvoirs surnaturels et une mission mystérieuse à accomplir.",
    poster: "the-oa.jpg",
    duration: "45-60 min",
    seasons: 2,
    episodes: 16,
    year: 2016,
    yearEnd: 2019,
    director: "Brit Marling",
    actors: ["Brit Marling", "Jason Isaacs", "Emory Cohen"],
    category: "Série",
    genre: "Science-fiction",
    tags: ["mystère", "surnaturel", "réalité parallèle", "voyage"],
  },
  {
    title: "The End of the F***ing World",
    synopsis:
      "Un adolescent persuadé d'être un psychopathe se lie d'amitié avec une camarade de classe, et ensemble, ils partent dans un voyage imprévisible.",
    poster: "the-end-of-the-fucking-world.jpg",
    duration: "20-25 min",
    seasons: 2,
    episodes: 16,
    year: 2017,
    yearEnd: 2019,
    director: "Jonathan Entwistle",
    actors: ["Alex Lawther", "Jessica Barden", "Naomi Ackie"],
    category: "Série",
    genre: "Comédie dramatique",
    tags: ["adolescence", "fugue", "psychopathie", "humour noir"],
  },
  {
    title: "Brooklyn Nine-Nine",
    synopsis:
      "La vie quotidienne d'un groupe de détectives excentriques travaillant dans le 99e commissariat de Brooklyn.",
    poster: "brooklyn-nine-nine.jpg",
    duration: "20-25 min",
    seasons: 8,
    episodes: 153,
    year: 2013,
    yearEnd: 2021,
    director: "Michael Schur",
    actors: ["Andy Samberg", "Terry Crews", "Andre Braugher"],
    category: "Série",
    genre: "Comédie",
    tags: ["police", "humour", "enquête", "équipe"],
  },
  {
    title: "The Bear",
    synopsis:
      "Un jeune chef talentueux reprend la gestion de la sandwicherie familiale à Chicago, confronté aux défis financiers et personnels que cela implique.",
    poster: "the-bear.jpg",
    duration: "25-35 min",
    seasons: 2,
    episodes: 18,
    year: 2022,
    yearEnd: 2023,
    director: "Christopher Storer",
    actors: ["Jeremy Allen White", "Ebon Moss-Bachrach", "Ayo Edebiri"],
    category: "Série",
    genre: "Drame",
    tags: ["cuisine", "famille", "restauration", "stress"],
  },
  {
    title: "The Handmaid’s Tale",
    synopsis:
      "Dans une société dystopique où les femmes fertiles sont réduites à l'esclavage pour la reproduction, une servante tente de résister.",
    poster: "handmaids-tale.jpg",
    duration: "45-60 min",
    seasons: 5,
    episodes: 56,
    year: 2017,
    yearEnd: 2023,
    director: "Bruce Miller",
    actors: ["Elisabeth Moss", "Yvonne Strahovski", "Joseph Fiennes"],
    category: "Série",
    genre: "Drame",
    tags: ["dystopie", "féminisme", "résistance", "totalitarisme"],
  },
  {
    title: "3%",
    synopsis:
      "Dans un futur dystopique, la société est divisée en deux, et seulement 3% des jeunes sont admis dans le paradis utopique après des épreuves impitoyables.",
    poster: "3-pour-cent.jpg",
    duration: "45-55 min",
    seasons: 4,
    episodes: 33,
    year: 2016,
    yearEnd: 2020,
    director: "Pedro Aguilera",
    actors: ["Bianca Comparato", "João Miguel", "Michel Gomes"],
    category: "Série",
    genre: "Science-fiction",
    tags: ["dystopie", "compétition", "survie", "injustice"],
  },
  {
    title: "After Life",
    synopsis:
      "Tony, dévasté par la mort de sa femme, adopte une nouvelle attitude brutale envers la vie et les autres, mais ses amis et collègues essaient de l'aider à retrouver un sens.",
    poster: "after-life.jpg",
    duration: "25-30 min",
    seasons: 3,
    episodes: 18,
    year: 2019,
    yearEnd: 2022,
    director: "Ricky Gervais",
    actors: ["Ricky Gervais", "Tom Basden", "Tony Way"],
    category: "Série",
    genre: "Comédie dramatique",
    tags: ["deuil", "humour noir", "amitié", "rédemption"],
  },
  {
    title: "Chernobyl",
    synopsis:
      "Une dramatique reconstitution de l'explosion de la centrale nucléaire de Tchernobyl en 1986 et des conséquences désastreuses qui ont suivi.",
    poster: "chernobyl.jpg",
    duration: "60-70 min",
    seasons: 1,
    episodes: 5,
    year: 2019,
    yearEnd: 2019,
    director: "Johan Renck",
    actors: ["Jared Harris", "Stellan Skarsgård", "Emily Watson"],
    category: "Mini-série",
    genre: "Drame historique",
    tags: ["catastrophe", "nucléaire", "URSS", "répercussions"],
  },
  {
    title: "Criminal",
    synopsis:
      "Une série d'anthologie où chaque épisode se déroule dans une salle d'interrogatoire, mettant en scène des suspects et des enquêteurs dans des confrontations tendues.",
    poster: "criminal.jpg",
    duration: "40-45 min",
    seasons: 2,
    episodes: 12,
    year: 2019,
    yearEnd: 2020,
    director: "Jim Field Smith",
    actors: ["David Tennant", "Katherine Kelly", "Lee Ingleby"],
    category: "Série",
    genre: "Policier",
    tags: ["interrogatoire", "enquête", "psychologie", "police"],
  },
  {
    title: "Dix pour cent",
    synopsis:
      "Une agence de talents à Paris gère les crises professionnelles et personnelles de ses clients célèbres tout en jonglant avec ses propres défis.",
    poster: "dix-pour-cent.jpg",
    duration: "50-55 min",
    seasons: 4,
    episodes: 24,
    year: 2015,
    yearEnd: 2020,
    director: "Cédric Klapisch",
    actors: ["Camille Cottin", "Thibault de Montalembert", "Grégory Montel"],
    category: "Série",
    genre: "Comédie dramatique",
    tags: ["agence", "célébrités", "humour", "cinéma"],
  },
  {
    title: "En Thérapie",
    synopsis:
      "Suivi de plusieurs patients au cours de leurs séances avec un psychologue parisien juste après les attentats de 2015.",
    poster: "en-therapie.jpg",
    duration: "25-30 min",
    seasons: 2,
    episodes: 70,
    year: 2021,
    yearEnd: 2022,
    director: "Olivier Nakache",
    actors: ["Frédéric Pierrot", "Mélanie Thierry", "Clémence Poésy"],
    category: "Série",
    genre: "Drame",
    tags: ["psychologie", "thérapie", "introspection", "post-attentats"],
  },
  {
    title: "H",
    synopsis:
      "Les mésaventures comiques d'une équipe médicale déjantée dans un hôpital parisien, où le chaos règne entre médecins, infirmières et personnel technique.",
    poster: "h.jpg",
    duration: "20-25 min",
    seasons: 4,
    episodes: 71,
    year: 1998,
    yearEnd: 2002,
    director: "Édouard Molinaro",
    actors: ["Jamel Debbouze", "Éric Judor", "Ramzy Bedia"],
    category: "Série",
    genre: "Comédie",
    tags: ["hôpital", "humour", "médecine", "absurde"],
  },
  {
    title: "Le Bureau des Légendes",
    synopsis:
      "Les agents de la DGSE, la principale agence de renseignement française, mènent des missions sous couverture tout en jonglant avec les risques de leur double vie.",
    poster: "lbdl.jpg",
    duration: "50-55 min",
    seasons: 5,
    episodes: 50,
    year: 2015,
    yearEnd: 2020,
    director: "Éric Rochant",
    actors: ["Mathieu Kassovitz", "Jean-Pierre Darroussin", "Sara Giraudeau"],
    category: "Série",
    genre: "Espionnage",
    tags: ["espionnage", "services secrets", "double vie", "gouvernement"],
  },
  {
    title: "Platane",
    synopsis:
      "Éric Judor joue une version fictive de lui-même, tentant de relancer sa carrière après un accident de voiture qui l'a laissé dans le coma pendant un an.",
    poster: "platane.jpg",
    duration: "30-35 min",
    seasons: 3,
    episodes: 34,
    year: 2011,
    yearEnd: 2019,
    director: "Éric Judor",
    actors: ["Éric Judor", "Hafid F. Benamar", "Arnaud Henriet"],
    category: "Série",
    genre: "Comédie",
    tags: ["humour", "showbiz", "carrière", "autodérision"],
  },
  {
    title: "The Leftovers",
    synopsis:
      "Après la disparition mystérieuse de 2% de la population mondiale, ceux qui restent tentent de comprendre l'inexplicable et de reconstruire leur vie.",
    poster: "the-leftovers.jpg",
    duration: "50-60 min",
    seasons: 3,
    episodes: 28,
    year: 2014,
    yearEnd: 2017,
    director: "Damon Lindelof",
    actors: ["Justin Theroux", "Carrie Coon", "Amy Brenneman"],
    category: "Série",
    genre: "Drame",
    tags: ["mystère", "deuil", "survie", "spiritualité"],
  },
  {
    title: "ZeroZeroZero",
    synopsis:
      "Un thriller international qui suit le parcours complexe d'une cargaison de cocaïne, de son expédition jusqu'à sa livraison, en explorant les enjeux mondiaux du trafic de drogue.",
    poster: "zero-zero-zero.jpg",
    duration: "55-65 min",
    seasons: 1,
    episodes: 8,
    year: 2020,
    yearEnd: 2020,
    director: "Stefano Sollima",
    actors: ["Andrea Riseborough", "Dane DeHaan", "Gabriel Byrne"],
    category: "Série",
    genre: "Thriller",
    tags: ["drogue", "cartel", "commerce mondial", "crime"],
  },
  {
    title: "Black Mirror",
    synopsis:
      "Anthologie dystopique qui explore la relation entre l'humanité et la technologie à travers des histoires sombres et souvent inquiétantes.",
    poster: "black-mirror.jpg",
    duration: "40-90 min",
    seasons: 6,
    episodes: 27,
    year: 2011,
    yearEnd: 2023,
    director: "Charlie Brooker",
    actors: ["Bryce Dallas Howard", "Daniel Kaluuya", "Jon Hamm"],
    category: "Série",
    genre: "Science-fiction",
    tags: ["technologie", "futur", "société", "dystopie"],
  },
  {
    title: "LOST",
    synopsis:
      "Les survivants d'un crash aérien sont coincés sur une île mystérieuse où des événements surnaturels bouleversent leur lutte pour la survie.",
    poster: "lost.jpg",
    duration: "40-45 min",
    seasons: 6,
    episodes: 121,
    year: 2004,
    yearEnd: 2010,
    director: "J.J. Abrams",
    actors: ["Matthew Fox", "Evangeline Lilly", "Terry O'Quinn"],
    category: "Série",
    genre: "Drame",
    tags: ["île", "mystère", "survie", "surnaturel"],
  },
  {
    title: "Mr. Robot",
    synopsis:
      "Elliot, un jeune programmeur brillant mais instable, est recruté par un mystérieux groupe de hackers pour détruire une grande corporation corrompue.",
    poster: "mr-robot.jpg",
    duration: "45-65 min",
    seasons: 4,
    episodes: 45,
    year: 2015,
    yearEnd: 2019,
    director: "Sam Esmail",
    actors: ["Rami Malek", "Christian Slater", "Carly Chaikin"],
    category: "Série",
    genre: "Thriller",
    tags: ["hackers", "technologie", "psychologie", "anarchie"],
  },
  {
    title: "No Man’s Land",
    synopsis:
      "Un jeune homme rejoint un groupe de combattantes kurdes en Syrie pour retrouver sa sœur présumée morte, et découvre la brutalité du conflit.",
    poster: "no-mans-land.jpg",
    duration: "45-50 min",
    seasons: 1,
    episodes: 8,
    year: 2020,
    yearEnd: 2020,
    director: "Oded Ruskin",
    actors: ["Félix Moati", "Mélanie Thierry", "Souheila Yacoub"],
    category: "Série",
    genre: "Drame",
    tags: ["guerre", "Syrie", "terrorisme", "famille"],
  },
  {
    title: "OVNI(s)",
    synopsis:
      "Dans les années 1970, un ingénieur est recruté par une équipe gouvernementale secrète pour enquêter sur les apparitions d'OVNIs en France.",
    poster: "ovnis.jpg",
    duration: "25-30 min",
    seasons: 2,
    episodes: 24,
    year: 2021,
    yearEnd: 2022,
    director: "Antony Cordier",
    actors: ["Melvil Poupaud", "Daphné Patakia", "Michel Vuillermoz"],
    category: "Série",
    genre: "Comédie de science-fiction",
    tags: ["extraterrestres", "France", "années 70", "complot"],
  },
  {
    title: "Kaamelott",
    synopsis:
      "La quête du roi Arthur et des chevaliers de la Table ronde est revisitée sous un angle comique, mettant en lumière leurs échecs et mésaventures.",
    poster: "kaamelott.jpg",
    duration: "3-7 min",
    seasons: 6,
    episodes: 458,
    year: 2005,
    yearEnd: 2009,
    director: "Alexandre Astier",
    actors: ["Alexandre Astier", "Lionnel Astier", "Franck Pitiot"],
    category: "Série",
    genre: "Comédie",
    tags: ["roi arthur", "humour", "chevaliers", "absurde"],
  },
];

export default series;