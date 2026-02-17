/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Danish Hameed",
  title: "Hi all, I'm Danish",
  subTitle: emoji(
    "I’m a blockchain engineer with a strong full-stack background, focused on building real, production-ready Web3 products. Over the years, I’ve worked across Ethereum, Solana, and multi-chain ecosystems, shipping DeFi protocols, NFT platforms, exchanges, and scalable dApps. I enjoy solving hard problems, writing clean contracts, and turning complex ideas into systems people actually use."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1i8MVTu_TdYDKY6VoZcSrmXkJr4BoLUr5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Danish-NW12",
  linkedin: "https://linkedin.com/in/danish-hameed",
  gmail: "danishhameed.arhamsoft@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Built and shipped production-grade blockchain applications across Ethereum, Solana, and multi-chain ecosystems"
    ),
    emoji("⚡ Designed and deployed secure smart contracts in Solidity and Rust, with a strong focus on performance and gas efficiency"),
    emoji(
      "⚡ Delivered end-to-end dApps including DeFi platforms, NFT marketplaces, and exchanges used by real users at scale" 
    ),
    emoji(
      "⚡ Hands-on experience integrating wallets, on-chain data, and backend services to power seamless Web3 products" 
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "BlockChain",
      fontAwesomeClassname: "fas fa-dice-d6"
    },
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fas fa-sort"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Smart Contract",
      fontAwesomeClassname: "fas fa-file-contract"
    }, 
    {
      skillName: "web3",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "DApps",
      fontAwesomeClassname: "fas fa-cubes"
    },               
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },   
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Central Punjab",
      logo: require("./assets/images/harvardLogo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2012 - April 2014",
    },
    {
      schoolName: "University of Central Punjab",
      logo: require("./assets/images/harvardLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2007 - April 2011",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JavaScript",
      progressPercentage: "100%"
    },
    {
      Stack: "BlockChain", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Solidity",
      progressPercentage: "80%"
    },
    {
      Stack: "Rust",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Blockchain Engineer",
      company: "Authic Labs",
      companylogo: require("./assets/images/authic_logo.jfif"),
      date: "Oct 2023 – Present",
      desc: "- Developed and optimized Solana smart contracts using Rust, enhancing scalability and performance for high-throughput applications.",
      descBullets: [
        "Implemented SPL tokens and integrated with DeFi protocols, enhancing the Solana ecosystem's scalability and functionality.",
      ]
    },
    {
      role: "Lead Blockchain Engineer",
      company: "OffShore Employee",
      companylogo: require("./assets/images/Offshore.jpg"),
      date: "Aug 2022 – Sep 2023",
      desc: "- My skills extend to launching dreams. I've crafted IDO and ICO launch pads, giving life to innovative projects that transcend conventional boundaries.",
      descBullets: [
        "My expertise spans across EVM-compatible blockchains, from Polygon, Ethereum, Binance, Fantom, to Avalanche. Additionally, my proficiency extends to Solana and Terra Luna, marking my versatility",
      ]
    },

    {
      role: "Fullstack and Blockchain Developer",
      company: "POINT Labs",
      companylogo: require("./assets/images/pointlabs.jpg"),
      date: "Jul 2020 – Jul 2022",
      desc: "- Dived into the decentralized universe, mastering Ethereum, Binance Smart Chain, and EVM-compatible blockchains. Engineered innovative DApps and harnessed the power of Solidity and Rust for transformative smart contracts."
    },
    {
      role: "Blockchain and JavaScript Developer",
      company: "Celeix Digital LLC",
      companylogo: require("./assets/images/Celeix.jpg"),
      date: "Jun 2018 – Jun 2020",
      desc: "",
      descBullets: [
        "Solidity & Rust Development",
        "ETH 2.0 Transition",
        "DAO & DeFI",
        "EVM Expertise",
        "Cross-chain Development",
      ]

    },
    {
      role: "Fullstack and Blockchain Developer",
      company: "Dribble",
      companylogo: require("./assets/images/dribble.jpeg"),
      date: "May 2017 – May 2018",
      desc: "- Followed the SDLC to implement various software techniques.",
      descBullets: [
        "Created many Server-Side applications using Node.js",
        "- In 2018, Shifted Focus on Ethereum Layer 1 ( Blockchain)",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/1668511274724 (1).jfif"),
      projectName: "Seedify",
      projectDesc: "IDO Launchpad (BNB) – Helping blockchain projects raise funds through decentralized token sales.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.seedify.fund/"
        }
      ]
    },
    {
      image: require("./assets/images/metamuto.png"),
      projectName: "Metamuto",
      projectDesc: "MetaVerse – A platform for creating and exploring decentralized virtual worlds.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.metamuto.com/"
        }
      ]
    },
    {
      image: require("./assets/images/1748629512965.jfif"),
      projectName: "ProjectSeed",
      projectDesc: "Blockchain Gaming Ecosystem (Ethereum, Solidity) – Powering blockchain-based games and gaming economies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://projectseed.com/"
        }
      ]
    },
    {
      image: require("./assets/images/download (3).jfif"),
      projectName: "SeedWorld",
      projectDesc: "Blockchain Game (Rust, SPL, Solana, JavaScript, MERN) – Revolutionizing gaming experiences with multi-chain blockchain technology.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://seedworld.io/"
        }
      ]
    },
    {
      image: require("./assets/images/Amara.jpg"),
      projectName: "Amara Exchange",
      projectDesc: "Perpetual Exchange (Rust, Solana) – A decentralized exchange platform for perpetual trading and crypto assets.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amara.exchange/"
        }
      ]
    },
    {
      image: require("./assets/images/StormX.png‎"),
      projectName: "StormX",
      projectDesc: "Crypto Earning from Shopping Points (Ethereum, Solidity, MERN) – Earn crypto rewards by shopping at top retailers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.stormx.io/"
        }
      ]
    },
    {
      image: require("./assets/images/Dione.jfif"),
      projectName: "Dione Protocol",
      projectDesc: "Decentralized finance solutions built on Rust, SPL, and Solana, with high performance and low latency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.dioneprotocol.com/"
        }
      ]
    },
    {
      image: require("./assets/images/aurusofficial_logo.jfif‎"),
      projectName: "Aurus",
      projectDesc: "Precious Metal Tokenization – Bringing real-world assets like gold to the blockchain with tokenized solutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://aurus.org/"
        }
      ]
    },
    {
      image: require("./assets/images/hivelloofficial_logo.jfif‎"),
      projectName: "Hivello",
      projectDesc: "DePIN – A decentralized platform designed for privacy and security in digital interactions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.hivello.com/"
        }
      ]
    }
  ]
},
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open.",
  number: "+92-300-8858323",
  email_address: "danishhameed.arhamsoft@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
