import { writeFileSync, writeSync } from "fs";

const data = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    duration: "176",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    release_date: "1994-09-01",

    rating: 1,
    actors: [
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
      {
        id: 10,
        first_name: "Ottis",
        last_name: "Labadie",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 2,
    name: "The Godfather",
    duration: "180",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    release_date: "1972-02-04",
    rating: 4,
    actors: [
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 3,
    name: "The Dark Knight",
    duration: "157",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    release_date: "2008-06-01",

    rating: 10,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 4,
    name: "The Lord of the Rings: The Return of the King",
    duration: "173",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    release_date: "2003-10-17",

    rating: 5,
    actors: [
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        id: 5,
        first_name: "Jamison",
        last_name: "O'Kon",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 5,
    name: "Schindler's List",
    duration: "203",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    release_date: "1993-01-30",

    rating: 4,
    actors: [
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 6,
    name: "The Godfather Part II",
    duration: "193",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    release_date: "1974-02-26",

    rating: 8,
    actors: [
      {
        id: 10,
        first_name: "Ottis",
        last_name: "Labadie",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 7,
    name: "12 Angry Men",
    duration: "184",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    description:
      "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    release_date: "1957-01-14",

    rating: 6,
    actors: [
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 8,
    name: "Pulp Fiction",
    duration: "183",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    release_date: "1994-03-10",

    rating: 2,
    actors: [
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 7,
        first_name: "Gunner",
        last_name: "Olson",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 9,
    name: "Inception",
    duration: "185",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    release_date: "2010-01-13",

    rating: 5,
    actors: [
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 10,
    name: "The Lord of the Rings: The Two Towers",
    duration: "185",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    release_date: "2002-05-21",

    rating: 4,
    actors: [
      {
        id: 6,
        first_name: "Stanford",
        last_name: "Fadel",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
      },
      {
        id: 7,
        first_name: "Gunner",
        last_name: "Olson",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 11,
    name: "Fight Club",
    duration: "143",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    release_date: "1999-11-27",

    rating: 2,
    actors: [
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        id: 3,
        first_name: "Cyrus",
        last_name: "Grimes",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 12,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    duration: "142",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    release_date: "2001-11-20",

    rating: 4,
    actors: [
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 19,
        first_name: "Madyson",
        last_name: "Hermiston",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      {
        id: 10,
        first_name: "Ottis",
        last_name: "Labadie",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
      },
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 13,
    name: "Forrest Gump",
    duration: "196",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    release_date: "1994-06-12",

    rating: 3,
    actors: [
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 14,
    name: "The Good, the Bad and the Ugly",
    duration: "154",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    release_date: "1966-08-19",

    rating: 1,
    actors: [
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 15,
    name: "The Matrix",
    duration: "192",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    release_date: "1999-02-19",

    rating: 8,
    actors: [
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 16,
    name: "Goodfellas",
    duration: "169",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    release_date: "1990-01-11",

    rating: 9,
    actors: [
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 17,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    duration: "211",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    release_date: "1980-01-03",

    rating: 3,
    actors: [
      {
        id: 6,
        first_name: "Stanford",
        last_name: "Fadel",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        id: 3,
        first_name: "Cyrus",
        last_name: "Grimes",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 18,
    name: "One Flew Over the Cuckoo's Nest",
    duration: "164",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
    release_date: "1975-03-09",

    rating: 4,
    actors: [
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 19,
    name: "Interstellar",
    duration: "186",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: "2014-03-27",

    rating: 4,
    actors: [
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 20,
    name: "City of God",
    duration: "143",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    release_date: "2002-01-04",

    rating: 6,
    actors: [
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 21,
    name: "Spirited Away",
    duration: "210",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    release_date: "2001-02-07",

    rating: 9,
    actors: [
      {
        id: 2,
        first_name: "Cordell",
        last_name: "Greenfelder",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 22,
    name: "Saving Private Ryan",
    duration: "192",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    release_date: "1998-01-14",

    rating: 4,
    actors: [
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 23,
    name: "The Green Mile",
    duration: "157",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    release_date: "1999-12-04",

    rating: 4,
    actors: [
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 24,
    name: "Life Is Beautiful",
    duration: "192",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    release_date: "1997-04-14",

    rating: 2,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 25,
    name: "Se7en",
    duration: "175",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    release_date: "1995-11-27",

    rating: 9,
    actors: [
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 26,
    name: "Terminator 2: Judgment Day",
    duration: "173",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
    release_date: "1991-12-06",

    rating: 8,
    actors: [
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 27,
    name: "The Silence of the Lambs",
    duration: "192",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    release_date: "1991-11-01",

    rating: 8,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        id: 3,
        first_name: "Cyrus",
        last_name: "Grimes",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 28,
    name: "Star Wars: Episode IV - A New Hope",
    duration: "208",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg",
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    release_date: "1977-08-19",

    rating: 1,
    actors: [
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 10,
        first_name: "Ottis",
        last_name: "Labadie",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 29,
    name: "Harakiri",
    duration: "209",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg",
    description:
      "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
    release_date: "1962-02-14",

    rating: 3,
    actors: [
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 30,
    name: "Seven Samurai",
    duration: "145",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_.jpg",
    description:
      "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. As the samurai teach the peasants how to defend themselves, the village is attacked by an army of bandits.",
    release_date: "1954-12-04",

    rating: 1,
    actors: [
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 31,
    name: "It's a Wonderful Life",
    duration: "191",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg",
    description:
      "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    release_date: "1946-05-04",

    rating: 7,
    actors: [
      {
        id: 7,
        first_name: "Gunner",
        last_name: "Olson",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 32,
    name: "Parasite",
    duration: "214",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    release_date: "2019-12-18",

    rating: 10,
    actors: [
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        id: 5,
        first_name: "Jamison",
        last_name: "O'Kon",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 33,
    name: "Whiplash",
    duration: "187",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    release_date: "2014-07-30",

    rating: 8,
    actors: [
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 34,
    name: "The Intouchables",
    duration: "147",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg",
    description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    release_date: "2011-12-20",

    rating: 6,
    actors: [
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 35,
    name: "The Prestige",
    duration: "219",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
    description:
      "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    release_date: "2006-12-27",

    rating: 5,
    actors: [
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 36,
    name: "The Departed",
    duration: "166",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    release_date: "2006-05-29",

    rating: 7,
    actors: [
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 2,
        first_name: "Cordell",
        last_name: "Greenfelder",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 37,
    name: "The Pianist",
    duration: "197",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    release_date: "2002-12-16",

    rating: 3,
    actors: [
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 38,
    name: "Gladiator",
    duration: "174",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    release_date: "2000-12-29",

    rating: 10,
    actors: [
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 39,
    name: "American History X",
    duration: "209",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    description:
      "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    release_date: "1998-10-05",

    rating: 3,
    actors: [
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 40,
    name: "The Usual Suspects",
    duration: "187",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    release_date: "1995-10-14",

    rating: 4,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 41,
    name: "Léon: The Professional",
    duration: "183",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description:
      "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    release_date: "1994-03-21",

    rating: 7,
    actors: [
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 42,
    name: "The Lion King",
    duration: "207",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    release_date: "1994-07-28",

    rating: 3,
    actors: [
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 43,
    name: "Cinema Paradiso",
    duration: "200",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_.jpg",
    description:
      "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    release_date: "1988-05-05",

    rating: 8,
    actors: [
      {
        id: 7,
        first_name: "Gunner",
        last_name: "Olson",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        id: 5,
        first_name: "Jamison",
        last_name: "O'Kon",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 44,
    name: "Grave of the Fireflies",
    duration: "205",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    description:
      "A young boy and his little sister struggle to survive in Japan during World War II.",
    release_date: "1988-04-22",

    rating: 9,
    actors: [
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 45,
    name: "Back to the Future",
    duration: "208",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    release_date: "1985-04-02",

    rating: 10,
    actors: [
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 46,
    name: "Apocalypse Now",
    duration: "204",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description:
      "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
    release_date: "1979-05-13",

    rating: 10,
    actors: [
      {
        id: 3,
        first_name: "Cyrus",
        last_name: "Grimes",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 47,
    name: "Alien",
    duration: "170",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description:
      "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    release_date: "1979-10-27",

    rating: 1,
    actors: [
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 48,
    name: "Once Upon a Time in the West",
    duration: "188",
    image:
      "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description:
      "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    release_date: "1968-09-14",

    rating: 2,
    actors: [
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 49,
    name: "Psycho",
    duration: "189",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    release_date: "1960-09-29",

    rating: 9,
    actors: [
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 50,
    name: "Rear Window",
    duration: "145",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
    release_date: "1954-12-09",

    rating: 8,
    actors: [
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 51,
    name: "Casablanca",
    duration: "149",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    description:
      "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    release_date: "1942-02-05",

    rating: 1,
    actors: [
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 52,
    name: "Modern Times",
    duration: "155",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    release_date: "1936-04-07",

    rating: 5,
    actors: [
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 53,
    name: "City Lights",
    duration: "180",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
    release_date: "1931-09-09",

    rating: 9,
    actors: [
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 3,
        first_name: "Cyrus",
        last_name: "Grimes",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 5,
        first_name: "Jamison",
        last_name: "O'Kon",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        id: 2,
        first_name: "Cordell",
        last_name: "Greenfelder",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 54,
    name: "Capernaum",
    duration: "159",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_.jpg",
    description:
      "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
    release_date: "2018-09-13",

    rating: 6,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 55,
    name: "Joker",
    duration: "206",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description:
      "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    release_date: "null-09-03",

    rating: 7,
    actors: [
      {
        id: 3,
        first_name: "Cyrus",
        last_name: "Grimes",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 56,
    name: "Your Name.",
    duration: "163",
    image:
      "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_.jpg",
    description:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    release_date: "2016-06-27",

    rating: 4,
    actors: [
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 57,
    name: "Spider-Man: Into the Spider-Verse",
    duration: "162",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
    description:
      "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    release_date: "2018-06-20",

    rating: 3,
    actors: [
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 58,
    name: "Avengers: Endgame",
    duration: "217",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    release_date: "2019-12-05",

    rating: 8,
    actors: [
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 59,
    name: "Avengers: Infinity War",
    duration: "173",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    release_date: "2018-06-21",

    rating: 4,
    actors: [
      {
        id: 2,
        first_name: "Cordell",
        last_name: "Greenfelder",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 60,
    name: "Coco",
    duration: "218",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    description:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    release_date: "null-04-18",

    rating: 2,
    actors: [
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 61,
    name: "Django Unchained",
    duration: "220",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    description:
      "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
    release_date: "2012-08-18",

    rating: 1,
    actors: [
      {
        id: 19,
        first_name: "Madyson",
        last_name: "Hermiston",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 62,
    name: "Top Gun: Maverick",
    duration: "160",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    release_date: "2022-01-22",

    rating: 6,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 63,
    name: "The Dark Knight Rises",
    duration: "175",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    release_date: "2012-09-05",

    rating: 8,
    actors: [
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 7,
        first_name: "Gunner",
        last_name: "Olson",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 64,
    name: "3 Idiots",
    duration: "185",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    release_date: "2009-01-19",

    rating: 1,
    actors: [
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 6,
        first_name: "Stanford",
        last_name: "Fadel",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 65,
    name: "WALL·E",
    duration: "200",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
    description:
      "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    release_date: "2008-09-29",

    rating: 10,
    actors: [
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 66,
    name: "The Lives of Others",
    duration: "220",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description:
      "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
    release_date: "2006-09-04",

    rating: 2,
    actors: [
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 67,
    name: "Oldboy",
    duration: "156",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
    description:
      "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    release_date: "2003-01-21",

    rating: 1,
    actors: [
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 68,
    name: "Memento",
    duration: "218",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "A man with short-term memory loss attempts to track down his wife's murderer.",
    release_date: "2000-02-25",

    rating: 8,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 69,
    name: "American Beauty",
    duration: "151",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description:
      "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    release_date: "1999-04-19",

    rating: 10,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 10,
        first_name: "Ottis",
        last_name: "Labadie",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
      },
      {
        id: 6,
        first_name: "Stanford",
        last_name: "Fadel",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 70,
    name: "Princess Mononoke",
    duration: "165",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg",
    description:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    release_date: "1997-06-02",

    rating: 6,
    actors: [
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 71,
    name: "Braveheart",
    duration: "145",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    release_date: "1995-06-28",

    rating: 9,
    actors: [
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 72,
    name: "Come and See",
    duration: "163",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzU3OTI1MjItYTJiZC00NDI0LWFlNGYtOTQ1OTVhNDgwM2U3XkEyXkFqcGdeQXVyNTc2MDU0NDE@._V1_.jpg",
    description:
      "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
    release_date: "1985-01-08",

    rating: 5,
    actors: [
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 73,
    name: "Aliens",
    duration: "143",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
    release_date: "1986-10-07",

    rating: 9,
    actors: [
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 74,
    name: "Amadeus",
    duration: "141",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    description:
      "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
    release_date: "1984-08-06",

    rating: 7,
    actors: [
      {
        id: 19,
        first_name: "Madyson",
        last_name: "Hermiston",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 7,
        first_name: "Gunner",
        last_name: "Olson",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      {
        id: 5,
        first_name: "Jamison",
        last_name: "O'Kon",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 75,
    name: "Indiana Jones and the Raiders of the Lost Ark",
    duration: "207",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
    description:
      "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
    release_date: "1981-11-18",

    rating: 6,
    actors: [
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 2,
        first_name: "Cordell",
        last_name: "Greenfelder",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      {
        id: 6,
        first_name: "Stanford",
        last_name: "Fadel",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 76,
    name: "The Boat",
    duration: "170",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
    description:
      "A German U-boat stalks the frigid waters of the North Atlantic as its young crew experience the sheer terror and claustrophobic world of a submariner in World War II.",
    release_date: "1981-07-02",

    rating: 2,
    actors: [
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 77,
    name: "The Shining",
    duration: "184",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    release_date: "1980-03-24",

    rating: 5,
    actors: [
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 6,
        first_name: "Stanford",
        last_name: "Fadel",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 78,
    name: "High and Low",
    duration: "170",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    description:
      "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom.",
    release_date: "1963-03-14",

    rating: 9,
    actors: [
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 79,
    name: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    duration: "142",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
    release_date: "1964-04-02",

    rating: 9,
    actors: [
      {
        id: 14,
        first_name: "Gerardo",
        last_name: "Swift",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 80,
    name: "Witness for the Prosecution",
    duration: "156",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg",
    description:
      "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    release_date: "1957-06-14",

    rating: 3,
    actors: [
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 81,
    name: "Paths of Glory",
    duration: "184",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    description:
      "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    release_date: "1957-07-23",

    rating: 8,
    actors: [
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 82,
    name: "Sunset Blvd.",
    duration: "145",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_.jpg",
    description:
      "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    release_date: "1950-02-16",

    rating: 5,
    actors: [
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 83,
    name: "The Great Dictator",
    duration: "146",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    release_date: "1940-05-11",

    rating: 8,
    actors: [
      {
        id: 26,
        first_name: "Brandi",
        last_name: "Barrows",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 84,
    name: "The Hunt",
    duration: "140",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_.jpg",
    description:
      "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
    release_date: "2012-02-24",

    rating: 8,
    actors: [
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
      {
        id: 7,
        first_name: "Gunner",
        last_name: "Olson",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 85,
    name: "Toy Story 3",
    duration: "184",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
    description:
      "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    release_date: "2010-06-18",

    rating: 10,
    actors: [
      {
        id: 22,
        first_name: "Candice",
        last_name: "Hettinger",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 86,
    name: "Inglourious Basterds",
    duration: "201",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    release_date: "2009-05-19",

    rating: 3,
    actors: [
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 87,
    name: "Eternal Sunshine of the Spotless Mind",
    duration: "183",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    release_date: "2004-06-03",

    rating: 1,
    actors: [
      {
        id: 11,
        first_name: "Arjun",
        last_name: "Stanton",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 88,
    name: "Requiem for a Dream",
    duration: "166",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    release_date: "2000-07-01",

    rating: 4,
    actors: [
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
      {
        id: 30,
        first_name: "Lucius",
        last_name: "Hartmann",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 89,
    name: "Good Will Hunting",
    duration: "186",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    release_date: "1997-03-16",

    rating: 7,
    actors: [
      {
        id: 15,
        first_name: "Francesco",
        last_name: "Schaden",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 90,
    name: "Toy Story",
    duration: "195",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    release_date: "1995-12-24",

    rating: 5,
    actors: [
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 91,
    name: "Reservoir Dogs",
    duration: "173",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description:
      "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    release_date: "1992-06-18",

    rating: 3,
    actors: [
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 29,
        first_name: "Brayan",
        last_name: "Orn",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 92,
    name: "Once Upon a Time in America",
    duration: "140",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
    release_date: "1984-07-13",

    rating: 1,
    actors: [
      {
        id: 4,
        first_name: "Darwin",
        last_name: "Feest",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    ],
    genres: [
      {
        id: 2,
        name: "Comedy",
      },
    ],
  },
  {
    id: 93,
    name: "Star Wars: Episode VI - Return of the Jedi",
    duration: "220",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    description:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    release_date: "1983-03-23",

    rating: 4,
    actors: [
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
      {
        id: 23,
        first_name: "Antonette",
        last_name: "Will",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
      {
        id: 1,
        name: "Drama",
      },
    ],
  },
  {
    id: 94,
    name: "2001: A Space Odyssey",
    duration: "193",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
    release_date: "1968-05-08",

    rating: 6,
    actors: [
      {
        id: 1,
        first_name: "Jaylon",
        last_name: "Bayer",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    genres: [
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 95,
    name: "Lawrence of Arabia",
    duration: "174",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    description:
      "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
    release_date: "1962-12-05",

    rating: 6,
    actors: [
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 96,
    name: "North by Northwest",
    duration: "199",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    description:
      "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
    release_date: "1959-07-13",

    rating: 7,
    actors: [
      {
        id: 20,
        first_name: "Annamae",
        last_name: "Kovacek",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
      {
        id: 24,
        first_name: "Mina",
        last_name: "Nitzsche",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        id: 27,
        first_name: "Marc",
        last_name: "Effertz",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 9,
        first_name: "Otho",
        last_name: "Pacocha",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        id: 2,
        first_name: "Cordell",
        last_name: "Greenfelder",
        image: "https://randomuser.me/api/portraits/women/86.jpg",
      },
    ],
    genres: [
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 97,
    name: "Vertigo",
    duration: "150",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    description:
      "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
    release_date: "1958-01-24",

    rating: 5,
    actors: [
      {
        id: 17,
        first_name: "Quinton",
        last_name: "Pollich",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 3,
        name: "Horror",
      },
    ],
  },
  {
    id: 98,
    name: "Singin' in the Rain",
    duration: "143",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    description:
      "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
    release_date: "1952-12-21",

    rating: 4,
    actors: [
      {
        id: 25,
        first_name: "Santina",
        last_name: "Oberbrunner",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 3,
        first_name: "Cyrus",
        last_name: "Grimes",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
      },
      {
        id: 18,
        first_name: "Naomie",
        last_name: "Hamill",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 99,
    name: "Citizen Kane",
    duration: "149",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
    release_date: "1941-03-18",

    rating: 7,
    actors: [
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 16,
        first_name: "Carlee",
        last_name: "Koelpin",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 4,
        name: "Action",
      },
    ],
  },
  {
    id: 100,
    name: "M",
    duration: "150",
    image:
      "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_.jpg",
    description:
      "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
    release_date: "1931-09-27",

    rating: 8,
    actors: [
      {
        id: 28,
        first_name: "Celine",
        last_name: "Becker",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        id: 13,
        first_name: "Kenton",
        last_name: "Friesen",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
      },
      {
        id: 12,
        first_name: "Jonas",
        last_name: "Schaefer",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        id: 8,
        first_name: "Krista",
        last_name: "Daniel",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 21,
        first_name: "Rosanna",
        last_name: "Gulgowski",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    genres: [
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
];

const createPreview = (inner) =>
  data.map(({ id, actors, name, release_date, image }) => ({
    id,
    title: name,
    actors: actors.length,
    release: release_date,
    image,
  }));

const createGenrePreview = (genreNumber) => {
  const inner = data.filter(({ genres }) =>
    genres.some(({ id }) => id === genreNumber)
  );

  return createPreview(inner);
};

const preview = createPreview(data);
const genre1 = createGenrePreview(1);
const genre2 = createGenrePreview(2);
const genre3 = createGenrePreview(3);
const genre4 = createGenrePreview(4);
const genre5 = createGenrePreview(5);

writeFileSync("./previews.json", JSON.stringify(preview, null, 2));
writeFileSync("./genre/1.json", JSON.stringify(genre1, null, 2));
writeFileSync("./genre/2.json", JSON.stringify(genre2, null, 2));
writeFileSync("./genre/3.json", JSON.stringify(genre3, null, 2));
writeFileSync("./genre/4.json", JSON.stringify(genre4, null, 2));
writeFileSync("./genre/5.json", JSON.stringify(genre5, null, 2));

for (const {
  actors,
  description,
  duration,
  genres,
  id,
  image,
  name,
  release_date,
} of data) {
  writeFileSync(
    `./id/${id}.json`,
    JSON.stringify(
      {
        id,
        name,
        image,
        description,
        release: release_date,
        duration,
        genres: genres.map(({ id }) => id),
        actors,
      },
      null,
      2
    )
  );
}
