const portfolio = [
  {
    image: '/surfNew.png',
    title: 'Piha Surf Report',
    desc: 'View the weather and surf conditions at Piha Beach. ',
    largeDesc:
      'Living in Piha, a remote surf beach on the west coast of Auckland, the conditions change regularly. I wanted to build a small concise app that depicts the weather and surf conditions for my local community. This was completed by developing a full-stack react app, calling a weather REST api. The app was primarily built for mobile devices and includes weather icons and a projected forecast. ',
    gitUrl: 'https://github.com/katie-rey/piha-surf-app',
    liveSite: '',
    stack: 'Javascript, React, Axios, Cors, Dotenv, Material UI, Font Awesome',
  },
  {
    image: '/shop.png',
    title: 'A personalised pantry and shopping list',
    desc: 'Build you own master pantry list and daily shopping list with this full-stack app.',
    largeDesc:
      "This app was built to solve an ongoing problem of mine. Existing shopping apps I use don't have functionality to keep a master list of general items as well creating a seperate daily shopping list. This web app allows you to add to the master list, transfer items to a daily list and delete items when required. ",
    gitUrl: 'https://github.com/katie-rey/shopping-list',
    liveSite: '',
    stack: 'Javascript, React, Redux, Express, Knex, SQLite3, Bulma, React-Icons',
  },
  {
    image: '/feedback.png',
    title: 'A React feedback app',
    desc: 'A web app to create, edit and delete feedback using useContext.',
    largeDesc:
      'Once completing my web dev bootcamp, I wanted to practice using React and useContext for storing data into state. This app was built as part of a Udemy React course. Credit to Brad Traversy for writing the course.',
    gitUrl: 'https://github.com/katie-rey/react-feedback-app',
    liveSite: 'https://dainty-lily-f557a9.netlify.app/',
    stack: 'Javascript, React, React-Router-Dom, useContext, Framer Motion, uuid, React-Icons',
  },
  {
    image: '/serv.png',
    title: 'My final group project at Dev Academy',
    desc: 'A web app connecting service businesses with customers.',
    largeDesc:
      'For my final project with Dev Academy, myself and four other students built (in 6 days) a full-stack React app linking customers with service oriented businesses. My primary role within the team was front end lead, building the business components and business logic. This project helped strengthen my communication skills within a team setting and built my coding confidence in a high pressure, short timeframe build. The final MVP incorporates Auth0 login, both Business and Customer interfaces and an integrated Stripe checkout for customers.',
    gitUrl: 'https://github.com/katie-rey/serv',
    liveSite: 'https://serv-site.herokuapp.com/',
    stack:
      'Javascript, React, Redux, Express, Knex, SQLite3, node, Auth0, Stripe, Bootstrap, React-Icons',
  },
  {
    image: '/play.png',
    title: 'The 2048 game',
    desc: 'The popular and addictive online game built using JS.',
    largeDesc:
      'Wanting to improve my vanilla Javascript skills, I created a fun game with credit to Ania Kubow. This game uses functional components to create the game logic.',
    gitUrl: 'https://github.com/katie-rey/the-2048-game',
    liveSite: 'https://thriving-melomakarona-00e4bc.netlify.app/',
    stack: 'Javascript, CSS',
  },
  {
    image: '/scrabble0.png',
    title: 'An online Scrabble scorecard',
    desc: 'Keep track of your Scrabble scores with this Redux-Toolkit built web app.',
    largeDesc:
      'I love games, and when playing scrabble on holiday, always end up tallying scores on scraps of paper. To solve this problem, I created a web app you can personalise with players names and keep track of their scrabble scores... and more importantly totals! This app also gave me the opportunity to learn Redux-Toolkit.',
    gitUrl: 'https://github.com/katie-rey/scrabble-counter',
    liveSite: 'https://snazzy-queijadas-5198a0.netlify.app',
    stack: 'Javascript, React, Redux-Toolkit, Flowbite ',
  },
]

export default portfolio
