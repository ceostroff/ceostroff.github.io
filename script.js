const brands = [
  {
    iconName: "cat",
    brandName: "Flunixin-meglumine ",
    color: "#ff0000", // red
    iconDescription: "I'm a horse with abdominal pain. I need a drug that can also be used in cattle and will inhibit Cox-1 and Cox 2."
  },
  {
    iconName: "crow",
    brandName: "Phenylbutazone",
    color: "#fd5c63",
    iconDescription: "I'm a horse  with muscle pain. I need an anti-inflamatory that can only be given by IV or PO. My friend Harold the cow cannot have it, nor can the beagle I keep nearly stepping on."
  },
  {
    iconName: "dog",
    brandName: "Ketoprofen",
    color: "#333333",
    iconDescription: "I'm a horse with some leg pain. I don't have a fever so a pill with a longer duration administration is fine."
  },
  {
    iconName: "dove",
    brandName: "Firocoxib",
    color: "#a4c639",
    iconDescription: "I'm a horse with arthritis. I need a COX-2 inhibitor to help with pain. I believe my canine friends can use this, too."
  },
  {
    iconName: "dragon",
    brandName: "Cortisone",
    color: "#000000",
    iconDescription: "I'm a old race horse who used to zoom around the track. I still sometimes get pain and swelling from my glory days. I need a short-acting corticosteroid to manage my pain."
  },
  {
    iconName: "feather",
    brandName: "Prednisone",
    color: "#b52e31",
    iconDescription: "Hi, I'm Honey Belle. I enjoy running on concrete and destroying my toe pads. I need something to help with inflammation. My daddy says Caitlin uses this too when she's speckled."
  },
  {
    iconName: "feather-alt",
    brandName: "Prednisolone",
    color: "#5fc9f8",
    iconDescription: "I'm a horse with recurrent airway obstruction, a thing Caitlin just Googled that is apparently a respitory disease. I need an immediate-acting corticosteroid."
  },
  {
    iconName: "fish",
    brandName: "Dexamethasone",
    color: "#aaaaaa",
    iconDescription: "I'm a horse who is having an allergic reaction. I am speckled and everything itches, from head to hoof. I need a long-acting corticosteroid."
  },
  {
    iconName: "frog",
    brandName: "Lidocaine",
    color: "#d4af37",
    iconDescription: "I'm a horse and I need a drug that can be a local anesthetic or used as an antiinflamatory to inhibit leukocyte migration and cytokine response."
  },
  {
    iconName: "hippo",
    brandName: "Tiludronate",
    color: "#000000",
    iconDescription: "I'm a horse who needs IV treatment for navicular disease."
  },
  {
    iconName: "horse",
    brandName: "Dimethyl Sulfoxide",
    color: "#f57d00",
    iconDescription: "I'm a horse and I need antiinflammatories. I need something that will penetrate through my cell membranes almost as easily as water. My cow friends tell me that it's very illegal to share with them—they don't even have it on their farms."
  },
  {
    iconName: "horse-head",
    brandName: "Bethanechol",
    color: "#3b5998",
    iconDescription: "I'm a dog with who needs a medicine to stimulate detrusor muscle contraction to treat my atony."
  },
  {
    iconName: "kiwi-bird",
    brandName: "Neostigmine",
    color: "#553c7b",
    iconDescription: "I'm a good boi who needs something to treat my ruminal atony initiating peristaslsis and stimulating GI motility."
  },
  {
    iconName: "otter",
    brandName: "Edrophonium",
    color: "#333333",
    iconDescription: "I'm a dog with myasthenia gravis, which Caitlin just learned is a neuromuscular disorder. I need a short-acting acetylcholinesterase antagonist to treat me."
  },
  {
    iconName: "paw",
    brandName: "Pyridostigmine",
    color: "#111111",
    iconDescription: "I'm a dog with myasthenia gravis, and I need a acetylcholinesterase antagonist to help with long-term management of my disorder."
  },
  {
    iconName: "spider",
    brandName: "Atropine",
    color: "#ff6c2c",
    iconDescription: "I'm a dog with bradycardia. I need a parasympatholytic for treatment."
  }
  // {
  //   iconName: "dog",
  //   brandName: "Glycopyrrolate",
  //   color: "#264de4",
  //   iconDescription: "I'm a dog in need of a longer-lasting version of atropine. My bunny friends also use this."
  // },
  // {
  //   iconName: "dog",
  //   brandName: "Oxybutynin",
  //   color: "#111111",
  //   iconDescription: "I'm a dog with a hyperactive bladder. I need a GI and urinary antispasmodic agent to help with it that is able to cross BBB."
  // },
  // {
  //   iconName: "dog",
  //   brandName: "Propantheline",
  //   color: "#ba0c2f",
  //   iconDescription: "I'm a dog with a hyperactive bladder. I need a GI and urinary antispasmodic agent to help with it that is NOT able to cross BBB."
  // },
  // {
  //   iconName: "digital-ocean",
  //   brandName: "DigitalOcean",
  //   color: "#008bcf",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "discord",
  //   brandName: "Discord",
  //   color: "#7289da",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "docker",
  //   brandName: "Docker",
  //   color: "#0db7ed",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "dribbble",
  //   brandName: "Dribbble",
  //   color: "#ea4c89",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "dropbox",
  //   brandName: "Dropbox",
  //   color: "#007ee5",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "drupal",
  //   brandName: "Drupal",
  //   color: "#0077c0",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "ebay",
  //   brandName: "eBay",
  //   color: "#333333",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "edge",
  //   brandName: "Microsoft Edge",
  //   color: "#0078d7",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "ember",
  //   brandName: "Ember.js",
  //   color: "#f23819",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "ethereum",
  //   brandName: "Ethereum",
  //   color: "#666666",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "etsy",
  //   brandName: "Etsy",
  //   color: "#d5641c",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "evernote",
  //   brandName: "Evernote",
  //   color: "#2dbe60",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "facebook-square",
  //   brandName: "Facebook",
  //   color: "#3b5998",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "fedex",
  //   brandName: "FedEx",
  //   color: "#4d148c",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "firefox",
  //   brandName: "Firefox",
  //   color: "#e66000",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "font-awesome",
  //   brandName: "Font Awesome",
  //   color: "#228ae6",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "free-code-camp",
  //   brandName: "freeCodeCamp",
  //   color: "#006400",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "git-alt",
  //   brandName: "Git",
  //   color: "#f1502f",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "github",
  //   brandName: "GitHub",
  //   color: "#333333",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "google",
  //   brandName: "Google",
  //   color: "#333333",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "google-play",
  //   brandName: "Google Play",
  //   color: "#3bccff",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "grunt",
  //   brandName: "Grunt",
  //   color: "#fba919",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "gulp",
  //   brandName: "gulp.js",
  //   color: "#db4446",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "html5",
  //   brandName: "HTML5",
  //   color: "#e34f26",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "imdb",
  //   brandName: "IMDb",
  //   color: "#dba506",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "instagram",
  //   brandName: "Instagram",
  //   color: "#e1306c",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "internet-explorer",
  //   brandName: "Internet Explorer",
  //   color: "#1ebbee",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "itunes",
  //   brandName: "iTunes",
  //   color: "#ea4cc0",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "java",
  //   brandName: "Java",
  //   color: "#5382a1",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "js-square",
  //   brandName: "JavaScript",
  //   color: "#333333",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "jsfiddle",
  //   brandName: "JSFiddle",
  //   color: "#333333",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "kickstarter",
  //   brandName: "Kickstarter",
  //   color: "#2bde73",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "laravel",
  //   brandName: "Laravel",
  //   color: "#f55247",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "less",
  //   brandName: "Less",
  //   color: "#00316e",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "linkedin",
  //   brandName: "LinkedIn",
  //   color: "#0077b5",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "linux",
  //   brandName: "Linux",
  //   color: "#000000",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "mailchimp",
  //   brandName: "Mailchimp",
  //   color: "#239ab9",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "medium",
  //   brandName: "Medium",
  //   color: "#00ab6c",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "meetup",
  //   brandName: "Meetup",
  //   color: "#e0393e",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "microsoft",
  //   brandName: "Microsoft",
  //   color: "#111111",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "napster",
  //   brandName: "Napster",
  //   color: "#111111",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "node",
  //   brandName: "Node.js",
  //   color: "#68a063",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "npm",
  //   brandName: "npm",
  //   color: "#cc3534",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "opera",
  //   brandName: "Opera",
  //   color: "#cc0f16",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "patreon",
  //   brandName: "Patreon",
  //   color: "#f96854",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "paypal",
  //   brandName: "PayPal",
  //   color: "#003087",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "php",
  //   brandName: "PHP",
  //   color: "#8892be",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "pinterest",
  //   brandName: "Pinterest",
  //   color: "#bd081c",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "playstation",
  //   brandName: "PlayStation",
  //   color: "#003087",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "product-hunt",
  //   brandName: "Product Hunt",
  //   color: "#da552f",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "python",
  //   brandName: "Python",
  //   color: "#4584b6",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "quora",
  //   brandName: "Quora",
  //   color: "#a82400",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "react",
  //   brandName: "React",
  //   color: "#00d8ff",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "reddit",
  //   brandName: "reddit",
  //   color: "#ff4500",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "safari",
  //   brandName: "Safari",
  //   color: "#0fb5ee",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "sass",
  //   brandName: "Sass",
  //   color: "#cd6799",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "skype",
  //   brandName: "Skype",
  //   color: "#00aff0",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "slack",
  //   brandName: "Slack",
  //   color: "#3eb991",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "snapchat-square",
  //   brandName: "Snapchat",
  //   color: "#fffc00",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "soundcloud",
  //   brandName: "SoundCloud",
  //   color: "#ff8800",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "spotify",
  //   brandName: "Spotify",
  //   color: "#1db954",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "squarespace",
  //   brandName: "Squarespace",
  //   color: "#222222",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "stack-overflow",
  //   brandName: "Stack Overflow",
  //   color: "#f48024",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "stripe",
  //   brandName: "Stripe",
  //   color: "#00afe1",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "trello",
  //   brandName: "Trello",
  //   color: "#0079bf",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "tripadvisor",
  //   brandName: "TripAdvisor",
  //   color: "#00af87",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "twitch",
  //   brandName: "Twitch",
  //   color: "#6441a5",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "twitter",
  //   brandName: "Twitter",
  //   color: "#1da1f2",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "uber",
  //   brandName: "Uber",
  //   color: "#09091a",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "viber",
  //   brandName: "Viber",
  //   color: "#59267c",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "vimeo",
  //   brandName: "Vimeo",
  //   color: "#1ab7ea",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "vk",
  //   brandName: "VKontakte",
  //   color: "#45668e",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "vuejs",
  //   brandName: "Vue.js",
  //   color: "#42b883",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "whatsapp",
  //   brandName: "WhatsApp",
  //   color: "#075e54",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "wikipedia-w",
  //   brandName: "Wikipedia",
  //   color: "#000000",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "windows",
  //   brandName: "Microsoft Windows",
  //   color: "#0078d7",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "wix",
  //   brandName: "Wix.com",
  //   color: "#333333",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "wordpress",
  //   brandName: "WordPress",
  //   color: "#21759b",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "xbox",
  //   brandName: "Xbox",
  //   color: "#52b043",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "yahoo",
  //   brandName: "Yahoo!",
  //   color: "#410093",
  //   iconDescription: "I'm a thing"
  // },
  // {
  //   iconName: "youtube",
  //   brandName: "YouTube",
  //   color: "#ff0000",
  //   iconDescription: "I'm a thing"
  // }
];
let correct = 0;
let total = 0;
const totalDraggableItems = 5;
const totalMatchingPairs = 5; // Should be <= totalDraggableItems

const scoreSection = document.querySelector(".score");
const correctSpan = scoreSection.querySelector(".correct");
const totalSpan = scoreSection.querySelector(".total");
const playAgainBtn = scoreSection.querySelector("#play-again-btn");

const draggableItems = document.querySelector(".draggable-items");
const matchingPairs = document.querySelector(".matching-pairs");
let draggableElements;
let droppableElements;

initiateGame();

function initiateGame() {
  const randomDraggableBrands = generateRandomItemsArray(totalDraggableItems, brands);
  const randomDroppableBrands = totalMatchingPairs<totalDraggableItems ? generateRandomItemsArray(totalMatchingPairs, randomDraggableBrands) : randomDraggableBrands;
  const alphabeticallySortedRandomDroppableBrands = [...randomDroppableBrands].sort((a,b) => a.brandName.toLowerCase().localeCompare(b.brandName.toLowerCase()));

  // Create "draggable-items" and append to DOM
  for(let i=0; i<randomDraggableBrands.length; i++) {
    draggableItems.insertAdjacentHTML("beforeend", `
      <div class="content">
      <i class="fas fa-${randomDraggableBrands[i].iconName} draggable" draggable="true" style="color: ${randomDraggableBrands[i].color};" id="${randomDraggableBrands[i].iconName}"></i>
      <p class="description">${randomDraggableBrands[i].iconDescription}</p>
      </div>
    `);
  }

  // Create "matching-pairs" and append to DOM
  for(let i=0; i<alphabeticallySortedRandomDroppableBrands.length; i++) {
    matchingPairs.insertAdjacentHTML("beforeend", `
      <div class="matching-pair">
        <span class="label">${alphabeticallySortedRandomDroppableBrands[i].brandName}</span>
        <span class="droppable" data-brand="${alphabeticallySortedRandomDroppableBrands[i].iconName}"></span>
      </div>
    `);
  }

  draggableElements = document.querySelectorAll(".draggable");
  droppableElements = document.querySelectorAll(".droppable");

  draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
  });

  droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
  });
}

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain"
}

//Events fired on the drop target

function dragEnter(event) {
  if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable-hover");
  const draggableElementBrand = event.dataTransfer.getData("text");
  const droppableElementBrand = event.target.getAttribute("data-brand");
  const isCorrectMatching = draggableElementBrand===droppableElementBrand;
  total++;
  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementBrand);
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.innerHTML = `<i class="fas fa-${draggableElementBrand}" style="color: ${draggableElement.style.color};"></i>`;
    correct++;
  }
  scoreSection.style.opacity = 0;
  setTimeout(() => {
    correctSpan.textContent = correct;
    totalSpan.textContent = total;
    scoreSection.style.opacity = 1;
  }, 200);
  if(correct===Math.min(totalMatchingPairs, totalDraggableItems)) { // Game Over!!
    playAgainBtn.style.display = "block";
    setTimeout(() => {
      playAgainBtn.classList.add("play-again-btn-entrance");
    }, 200);
  }
}

// Other Event Listeners
playAgainBtn.addEventListener("click", playAgainBtnClick);
function playAgainBtnClick() {
  playAgainBtn.classList.remove("play-again-btn-entrance");
  correct = 0;
  total = 0;
  draggableItems.style.opacity = 0;
  matchingPairs.style.opacity = 0;
  setTimeout(() => {
    scoreSection.style.opacity = 0;
  }, 100);
  setTimeout(() => {
    playAgainBtn.style.display = "none";
    while (draggableItems.firstChild) draggableItems.removeChild(draggableItems.firstChild);
    while (matchingPairs.firstChild) matchingPairs.removeChild(matchingPairs.firstChild);
    initiateGame();
    correctSpan.textContent = correct;
    totalSpan.textContent = total;
    draggableItems.style.opacity = 1;
    matchingPairs.style.opacity = 1;
    scoreSection.style.opacity = 1;
  }, 500);
}

// Auxiliary functions
function generateRandomItemsArray(n, originalArray) {
  let res = [];
  let clonedArray = [...originalArray];
  if(n>clonedArray.length) n=clonedArray.length;
  for(let i=1; i<=n; i++) {
    const randomIndex = Math.floor(Math.random()*clonedArray.length);
    res.push(clonedArray[randomIndex]);
    clonedArray.splice(randomIndex, 1);
  }
  return res;
}
