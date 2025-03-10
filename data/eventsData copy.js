import workshop from "../public/assets/imgs/events/workshop.jpg";
import Artika from "../public/assets/imgs/events/Artika.jpg";
import Binary from "../public/assets/imgs/events/BinarySearch.jpg";
import Burn from "../public/assets/imgs/events/Burn-a-word.jpg";
import Chronowar from "../public/assets/imgs/events/Chronowar.jpg";
import Code from "../public/assets/imgs/events/CodeBreakers.jpg";
import Codigo from "../public/assets/imgs/events/Codigo.jpg";
import Technologies from "../public/assets/imgs/events/ComputingTechnologies.jpg";
import Creative from "../public/assets/imgs/events/CreativeCrisp.jpg";
import Flashmob  from "../public/assets/imgs/events/Flashmob.jpg";
import Gamathon from "../public/assets/imgs/events/Gamathon.jpg";
import Hackthon from "../public/assets/imgs/events/Hackthon.jpg";
import Izzhar from "../public/assets/imgs/events/Izzhar.jpg";
import Reverse  from "../public/assets/imgs/events/ReverseCoding.jpg";
import Snapzia from "../public/assets/imgs/events/Snapzia.jpg";
import Sparq from "../public/assets/imgs/events/Sparq.jpg";
import Table from "../public/assets/imgs/events/TableTopics.jpg";
import Valorant  from "../public/assets/imgs/events/Valorant.jpg";


import getPhotoURL from "../utils/getPhotoUrl";

const eventsNational = [
  {
    img: Hackthon,
    title: "Hackathon",
    category: "Technical",
    desc: `Compufest 2k22 brings an Online hackathon event, which brings together India's best Coder, Developers of tomorrow. With an aim to allow participants to analyze real world problems and to polish coding skills, hackathon 2k22 provides a platform to develop problem solving skills and to promote out-of-the box thinking in the young minds. Participating in this hackathon will give you an experience for future hackathons and also to stand out from the crowd.`,
    cta: "Submit Now",
    ctaLink: "https://forms.gle/8rQftDJEujMfi9RW8",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Nehal Sonerkar", number: "+91 86682 98921", photo:getPhotoURL("nehal")},
      {name: "Parth Upgade", number: "+91 74997 54608", photo:getPhotoURL("parth")},
    ],
  },
  {
    img: Chronowar,
    title: "Chronowar",
    category: "Robotic Race",
    desc: "CHRONOWAR is the ROBOTIC event for Engineers to showcase their skills & talent. This is the event where one have to build the machine in order to race on the given runway track and reach the finishing line in minimum time. Awaiting to see the best talents amongst you!!",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/eswPZLu6XaiTVfmr6",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Nikhil Tamrakar", number: "+91 89994 49698", photo:getPhotoURL("nik")},{name: "Vishal Kapgate", number: "+91 96041 40409", photo:getPhotoURL("vish")},
    ],
  },
  
  {
    img: Gamathon,
    title: "Gamathon",
    category: "Development",
    desc: `Nowadays, game designing and development has become a trend. It is the art of applying design aesthetics to give birth to a game for different purposes. Developing a game emphasizes on programming. So, we bring to you "GAMATHON JS" - a game designing competition. It will provide an unique opportunity to students to showcase their interactive play systems and designs. 
    Then, what are you waiting for ? Hurry and grab a chance for this exciting journey !!! 
    `,
    cta: "Submit Now",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    ctaLink: "https://forms.gle/7xvL1fE88vE81KTV7",
    isCTAClosed: false,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Kartik Umbarkar", number: "+91 99214 90393", photo:getPhotoURL("karU")},
      {name: "Aniruddha Bhat", number: "+91 82081 25480", photo:getPhotoURL("ani")},
    ],
  },


  {
    img: Snapzia,
    title: "Snapzia",
    category: "Photography",
    desc: `Hola amigos!!!
    Smile please 😁😁
    Yes here the most awaited competition coming to you. 
    "SAY CHEESE" is the competition for all the photographers out there to show your photography skills 📸.
    Bring your love and emotions through your photographs and showcase it to the world. 
    
    Winning photographs will be showcased to our Compufest Instagram page handle ..`,
    cta: "Register Now",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    ctaLink: "https://forms.gle/oXUBQ9Ggj98tnyEy9",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Atharav Kevalram", number: "+91 78419 54885", photo:getPhotoURL("athk")},{name: "Apeksha Kharwal", number: "+91 77739 98591", photo:getPhotoURL("apek")},
    ],
  },
  {
    img: Binary,
    title: "Binary Search",
    category: "Treasure hunt",
    desc: `Are you eager to build your career among the best of the security agencies of the world? If yes, then come join in the fun of “Binary Search” and reveal the agent inside you. The idea of hunting for hidden treasures has always been exciting and adventurous. Participants will work in teams of four to find the treasure with the help of given clues. The team who decodes the clue and finds the treasure first will win the game. Consider yourself to be an epistemologist. Seek the truth out of unrevealed mysteries by participating in the most exhilarating of the games “CT SCAN”.`,
    cta: "Register Now",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    ctaLink: "https://forms.gle/Qn2kvtctokZKMC4WA",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Prasanna Anjankar", number: "+91 74478 98717", photo:getPhotoURL("pras")},{name: "Mrunal Singhade", number: "+91 90288 44954", photo:getPhotoURL("mru")},
    ],
  },
  {
    img: Table,
    title: "Table Topics",
    category: "MUN",
    desc: `Speaking and negotiation are no longer just a "soft skills", those are your keys to success in any field! Here, participants with their teams of 4-5 will be given real-life problems and they need to discuss & provide the best ideal solution within the given time.

    Do come and participate in the Model United Nations Debate Competition and manifest your skills and be the conqueror🏆✨`,
    cta: "Register Now",
    ctaLink: "https://forms.gle/T17MGSq25h4b8sei6",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Sakshi Kokardekar", number: "+91 98946 99547", photo:getPhotoURL("sak")},{name: "Gunjan Khonde", number: "+91 70206 12265", photo:getPhotoURL("gunjan")},
    ],
  },
  {
    img: Artika,
    title: "Articka",
    category: "Live Art",
    desc: "Art should be something that liberates the soul, provokes the imagination and encourages people to go further. Your art is a line around your thoughts. If you have an art that evokes mystery this is the opportunity to showcase your talent. Let others see & feel your artwork. We welcome all Enthusiasts from every corner, to participate in live art events; an event in which you will not reproduce reality but have to create reality of the same intensity. If you have the adroitness to make others feel your vision then this is something for you. Reboot your Intense mode of individualism. Don't miss the chance to flaunt your skills in the form of art. ",
    cta: "Register Now",
    ctaLink: "https://forms.gle/oHMFqbRn5Gr7Vncw8",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Sakshi Kokardekar", number: "+91 98946 99547", photo:getPhotoURL("sak")},{name: "Mohit Kulkarni", number: "+91 96040 04422", photo:getPhotoURL("mohit")},
    ],
  },
  {
    img: Sparq,
    title: "SPARQ Game",
    category: "Gaming",
    desc: "Nothing brings gamers together like a bit of competition. We are here with the SPARQ gaming competition for the students to Showcase their gaming skills in a game like FIFA 2022 PS4 and BGMI as you put yourself against the best in the country...!!!",
    cta: "Register Now",
    ctaLink: "https://forms.gle/EidKrkdGhVwFA8Ai8",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Deepam Waghye", number: "+91 98346 42731", photo:getPhotoURL("deep")},
      {name: "Aman Kapse", number: "+91 90210 01430", photo:getPhotoURL("aman")},
      {name: "Rutweek Duragkar", number: "+91 70209 46952", photo:getPhotoURL("rut")},
    ],
  },
  {
    img: Izzhar,
    title: "Izzhar",
    category: "Open Mic",
    desc: `Poetry is harmony to the words, so music is that of notes ;As poetry rises above the prose and oratory ,so music the exaltation of poetry. The enthusiastic students who are keen can express their poetry, songs and stand-ups in Open Mic. Come and crave all your heart out with us at Open Mic.`,
    cta: "Register Now",
    ctaLink: "https://forms.gle/q4LAf62p4e4gM4qt8",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Nikhil Tamrakar", number: "+91 89994 49698", photo:getPhotoURL("nik")},{name: "Pratyusha Godse", number: "+91 74105 54285", photo:getPhotoURL("pratyusha")},
    ],
  },
  {
    img: Flashmob,
    title: "Flashmob",
    category: "Cultural",
    desc: `An Cultural event of Compufest
    Date : 2nd sept
    Time : 2:00 pm onwards
    Venue : CT Parking
    Organizer : Bhargavi Bodhankar
    Contact no. : 9145118559`,
    cta: "Register Now",
    ctaMore: "On 2st of September",
    ctaLink: "",
    isCTAClosed: true,
    CTAClosedMsg: "2 pm Onwards",
    organizers: [
      {name: "Bhargavi Bodhankar", number: "+91 91451 18559", photo:getPhotoURL("bhargavi")},
    ],
  },
];

const eventsInterational = [
  {
    img: Technologies,
    title: "Computing Technologies",
    category: "MLSA Workshop",
    desc: `Learning is unifying seemingly divergent ideas and data. 
    It's a chance to interact with the Microsoft Ambassadors LIVE!!!
    Microsoft Learn Student Ambassadors from all over the world and the Program Administrator will be there to share their knowledge on Cloud Computing and Computer Vision on MS Azure. 
    Hands on sessions by Microsoft Ambassadors for leveraging the learning by doing approach. If you are Enthusiastic about learning some exciting unknown applications of Cloud and Azure this is the Chance to expand your knowledge and get a mastery in Cloud and Azure. A verified  Certificate from Microsoft will be given to all the attendees… \n hh
    hh`,
    cta: "Submit Now",
    ctaLink: "https://forms.gle/EMnfy8Ca6jECtsYJA",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Sakshi Kokardekar", number: "+91 98946 99547", photo:getPhotoURL("sak")},
      {name: "Gunjan Khonde", number: "+91 70206 12265", photo:getPhotoURL("gunjan")},
    ],
  },
  {
    img: Code,
    title: "Code Breakers",
    category: "Coding",
    desc: "Opportunities don't happen, you create them. Come and get the opportunity to clear all your doubts regarding your  dream company. Our speaker will be introducing you to the essence of IT hiring, coding requirements, languages needed, trending technologies and many more. Get the answer to the most common query- “Why IT?” Why are you waiting now? \n Give a shot with our speaker and get much needed guidance!",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/aEVmLUaBbeTfcNaA9",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Nikhil Tamrakar", number: "+91 89994 49698", photo:getPhotoURL("nik")},{name: "Aditya Balki", number: "+91 93409 07690", photo:getPhotoURL("adi")},
    ],
  },
  {
    img: Reverse,
    title: "Reverse Coding",
    category: "Coding",
    desc: "Reverse Coding is a coding contest organised by CodeChef YCCE Chapter for the first time in its history. It's not that orthodox coding of writing a code for the given problem statement. But, as the name suggests, we are actually going to do the reverse of it. Here, the participants will be provided with Input, Output, constraints and some sample test cases, no problem statement mentioned, and the participants will have to write the code based on the given conditions. This event will help you in analysing your strengths in the world of programming and to have fun while learning this new approach.",
    cta: "Submit Now",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    ctaLink: "https://forms.gle/1L5q4czX2BUEXsWm6",
    isCTAClosed: false,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Bhushan Naidu", number: "+91 87885 02317", photo:getPhotoURL("bhu")},
      {name: "Shreyas Thakre", number: "+91 98905 40183", photo:getPhotoURL("shr")},
      {name: "Shakal Patle", number: "+91 98231 84525", photo:getPhotoURL("sha")},
    ],
  },
  {
    img: workshop,
    title: "3D Workshop on Blender",
    category: "Workshop",
    desc: "In the world of architectural design, 3d modeling is the process of developing graphics and images that appear to be in the third dimension. Our workshop provides participants with surface and in-depth knowledge of many aspects of 3D modeling. We structure our workshops in a modular manner so that you can start with the first principles suitable for those with little experience and gradually progress towards a more advanced",
    cta: "Register Now",
    ctaLink: "https://forms.gle/h9nPgfL8VsgP15Du5",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Mohit Kulkarni", number: "+91 96040 04422", photo:getPhotoURL("mohit")},{name: "Nayan Mankar", number: "+91 93592 45060", photo:getPhotoURL("nayan")},
    ],
  },
  {
    img: Burn,
    title: "Burn-a-Word",
    category: "Article",
    desc: `The ability to write is a precious quality developed by humans over the period of evolution . "Burn-a-Word" is a platform for all the young writers present out there to showcase their talent and their ability to express their thoughts , emotions and ideas to the world . So come join us on this adventure filled with learning and write your hearts out.  Show your work here ✍️`,
    cta: "Register Now",
    ctaMore: "On 1st of Sept. 10 am onwards",
    ctaLink: "https://forms.gle/6LdZP9PCQPKfDDT39",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Pranjali Thaware", number: "+91 92842 58227", photo:getPhotoURL("pra")},{name: "Himanshu Agarkar", number: "+91 98222 26208", photo:getPhotoURL("Himanshu")},
    ],
  },
  {
    img: Creative,
    title: "Creative Crisp",
    category: "Poster Making",
    desc: `!!!!!!Colours 🌈🎨!!!!!
    Colours helps you visualize a beautiful art piece into reality. Like the same poster helps you to create , spread happiness,awareness and emotions to others.  
    Participate to our Poster Making Competition 🎨 and bring the artist in you to life . 
    Showcase your posters to the world and tell your story to them .
    `,
    cta: "Register Now",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    ctaLink: "https://forms.gle/tmMVy1EXGp51aEzSA",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Poorvi Yellarthi", number: "+91 94037 86559", photo:getPhotoURL("poorvi")},{name: "Nayan Mankar", number: "+91 93592 45060", photo:getPhotoURL("nayan")},
    ],
  },
  {
    img: Codigo,
    title: "Codigo",
    category: "Coding",
    desc: "Codigo is an online coding competition organized by the CodeChef YCCE Chapter. It's a battle for those who are interested in solving energizing problems. Here, participants will have the opportunity to develop and test their programming skills. No matter whether you are a beginner or an experienced coder, the only prerequisite is that the contestant should be familiar with the CodeChef platform.",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/6whHc9uHQkwjsJjr6",
    ctaMore: "Submit before: 30th Aug 11:59pm IST",
    isCTAClosed: false,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Himanshu Upase", number: "+91 98222 26208", photo:getPhotoURL("him")},
      {name: "Haziquddin Ansari", number: "+91 73786 75296", photo:getPhotoURL("haziq")},
    ],
  },
  {
    img: Valorant,
    title: "Game Valorant",
    category: "Gaming",
    desc: `You love Valorant. I love Valorant. That’s the main reason for organising this event. Valorant is a competitive shooter that borrows elements from Counter-Strike and casual hero-shooters. It’s a 5v5 multiplayer first-person shooter (FPS) where one team attacks and the other defends. where you can choose the character you like and showcase your special abilities. If you think that you’re good enough with your gaming skills, then come and join us! Compete with the best players and find out where you stand in the league.`,
    cta: "Register Now",
    ctaMore: "On 1st of Sept. 2 pm Onwards",
    ctaLink: "https://forms.gle/rHP8qiiB46t1VyWG7",
    isCTAClosed: false,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Kartik Yeole", number: "+91 70289 21797", photo:getPhotoURL("kar")},{name: "Chayna Bhandarkar", number: "+91 93591 05532", photo:getPhotoURL("cha")},
    ],
  },
];

export  {eventsNational , eventsInterational};
