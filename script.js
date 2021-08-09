const brands = [
  {
    iconName: "alicorn",
    iconType: "fas fa",
    brandName: "Flunixin-meglumine",
    color: "#ff0000", // red
    iconDescription: "I'm a unicorn with abdominal pain. I need a drug that can also be used in cattle and will inhibit Cox-1 and Cox 2."
  },
  {
    iconName: "alicorn",
    iconType: "far fa",
    brandName: "Phenylbutazone",
    color: "#fd5c63",
    iconDescription: "I'm a unicorn  with muscle pain. I need an anti-inflamatory that can only be given by IV or PO. My friend Harold the cow cannot have it, nor can the beagle I keep nearly stepping on."
  },
  {
    iconName: "alicorn",
    iconType: "fal fa",
    brandName: "Ketoprofen",
    color: "#333333",
    iconDescription: "I'm a unicorn with some leg pain. I don't have a fever so a pill with a longer duration administration is fine."
  },
  {
    iconName: "alicorn",
    iconType: "fad fa",
    brandName: "Firocoxib",
    color: "#a4c639",
    iconDescription: "I'm a unicorn with arthritis. I need a COX-2 inhibitor to help with pain. I believe my canine friends can use this, too."
  },
  {
    iconName: "cow",
    iconType: "fas fa",
    brandName: "Cortisone",
    color: "#000000",
    iconDescription: "I'm a cow who used to zoom around the track. I still sometimes get pain and swelling from my glory days. I need a short-acting corticosteroid to manage my pain."
  },
  {
    iconName: "dog",
    iconType: "fas fa",
    brandName: "Prednisone",
    color: "#b52e31",
    iconDescription: "Hi, I'm Honey Belle. I enjoy running on concrete and destroying my toe pads. I need something to help with inflammation. My daddy says Caitlin uses this too when she's speckled."
  },
  {
    iconName: "cow",
    iconType: "far fa",
    brandName: "Prednisolone",
    color: "#5fc9f8",
    iconDescription: "I'm a cow with recurrent airway obstruction, a thing Caitlin just Googled that is apparently a respitory disease. I need an immediate-acting corticosteroid."
  },
  {
    iconName: "deer",
    iconType: "fal fa",
    brandName: "Dexamethasone",
    color: "#aaaaaa",
    iconDescription: "I'm a cow who is having an allergic reaction. I am speckled and everything itches, from head to hoof. I need a long-acting corticosteroid."
  },
  {
    iconName: "cow",
    iconType: "fad fa",
    brandName: "Lidocaine",
    color: "#d4af37",
    iconDescription: "I'm a cow and I need a drug that can be a local anesthetic or used as an antiinflamatory to inhibit leukocyte migration and cytokine response."
  },
  {
    iconName: "deer",
    iconType: "fas fa",
    brandName: "Tiludronate",
    color: "#000000",
    iconDescription: "I'm a deer who needs IV treatment for navicular disease."
  },
  {
    iconName: "deer",
    iconType: "far fa",
    brandName: "Dimethyl Sulfoxide",
    color: "#f57d00",
    iconDescription: "I'm a deer and I need antiinflammatories. I need something that will penetrate through my cell membranes almost as easily as water. My cow friends tell me that it's very illegal to share with them—they don't even have it on their farms."
  },
  {
    iconName: "dog",
    iconType: "far fa",
    brandName: "Bethanechol",
    color: "#3b5998",
    iconDescription: "I'm a dog with who needs a medicine to stimulate detrusor muscle contraction to treat my atony."
  },
  {
    iconName: "dog",
    iconType: "fal fa",
    brandName: "Neostigmine",
    color: "#553c7b",
    iconDescription: "I'm a good boi who needs something to treat my ruminal atony initiating peristaslsis and stimulating GI motility."
  },
  {
    iconName: "dog",
    iconType: "fad fa",
    brandName: "Edrophonium",
    color: "#333333",
    iconDescription: "I'm a doggo with myasthenia gravis, which Caitlin just learned is a neuromuscular disorder. I need a short-acting acetylcholinesterase antagonist to treat me."
  },
  {
    iconName: "cat",
    iconType: "fas fa",
    brandName: "Pyridostigmine",
    color: "#111111",
    iconDescription: "I'm a cat with myasthenia gravis, and I need a acetylcholinesterase antagonist to help with long-term management of my disorder."
  },
  {
    iconName: "cat",
    iconType: "far fa",
    brandName: "Atropine",
    color: "#ff6c2c",
    iconDescription: "I'm a cat with bradycardia. I need a parasympatholytic for treatment."
  },
  {
    iconName: "rabbit",
    iconType: "fas fa",
    brandName: "Glycopyrrolate",
    color: "#264de4",
    iconDescription: "I'm a rabbit in need of a longer-lasting version of atropine."
  },
  {
    iconName: "cat",
    iconType: "fal fa",
    brandName: "Oxybutynin",
    color: "#111111",
    iconDescription: "I'm a cat with a hyperactive bladder. I need a GI and urinary antispasmodic agent to help with it that is able to cross BBB."
  },
  {
    iconName: "cat",
    iconType: "fad fa",
    brandName: "Propantheline",
    color: "#ba0c2f",
    iconDescription: "I'm a cat with a hyperactive bladder. I need a GI and urinary antispasmodic agent to help with it that is NOT able to cross BBB."
  },
  {
    iconName: "cat-space",
    iconType: "fas fa",
    brandName: "Epinephrine",
    color: "#008bcf",
    iconDescription: "I'm a space cat experiencing anaphylaxis shock upon entering Earth's orbit. I need a sympathomimetic."
  },
  {
    iconName: "cat-space",
    iconType: "far fa",
    brandName: "Norepinephrine",
    color: "#008bcf",
    iconDescription: "I'm a space cat who needs a vasopressor as treatment for hypotension. I need a sympathomimetic."
  },
  {
    iconName: "cat-space",
    iconType: "fal fa",
    brandName: "Isoproterenol",
    color: "#008bcf",
    iconDescription: "I'm a space cat with bronchial asthma who needs a sympathomimetic treatment that causes positive inotropic/chronotropic effects."
  },
  {
    iconName: "cat-space",
    iconType: "fad fa",
    brandName: "Dopamine",
    color: "#008bcf",
    iconDescription: "I'm a space cat with hypotension from inadequate vascular tone. I need a sympathomimetic."
  },
  {
    iconName: "dog-leashed",
    iconType: "fas fa",
    brandName: "Dobutamine",
    color: "#008bcf",
    iconDescription: "I'm a dog who needs treatment for of anesthesia-induced hypotension where positive inotropic effect is needed for perfusion."
  },
  {
    iconName: "dog-leashed",
    iconType: "far fa",
    brandName: "Phenylephrine",
    color: "#008bcf",
    iconDescription: "I'm a dog who needs a sympathomimetic to increase my peripheral vascular tone."
  },
  {
    iconName: "cow",
    iconType: "fal fa",
    brandName: "Ractopamine &  Zilpaterol",
    color: "#008bcf",
    iconDescription: "I'm a cow who needs to bulk up to increase my deposition of lean muscle. Is it legal? Who knows."
  },
  {
    iconName: "dog-leashed",
    iconType: "fal fa",
    brandName: "Albuterol & Terbutaline & Clenbuterol",
    color: "#008bcf",
    iconDescription: "I'm a dog who needs selective B2 agonists for treatment of asthma."
  },
  {
    iconName: "dog-leashed",
    iconType: "fad fa",
    brandName: "Selegenline",
    color: "#f23819",
    iconDescription: "I'm a dog who needs treatment for canine cognitive dysfunction. I need an MAOI."
  },
  {
    iconName: "paw",
    iconType: "fas fa",
    brandName: "Ephedrine",
    color: "#f23819",
    iconDescription: "I'm a dog who needs a CRI for BP maintenance under anesthesia. What drug can you give me?"
  },
  {
    iconName: "paw",
    iconType: "far fa",
    brandName: "Phenylpropanolamine",
    color: "#f23819",
    iconDescription: "I'm a dog who needs treatment for urinary incontinence. I need a sympathomimetic."
  },
  {
    iconName: "paw",
    iconType: "fal fa",
    brandName: "Phenoxybenzamine",
    color: "#f23819",
    iconDescription: "I'm a dog who needs treatment for hypertension from pheochromocytoma before surgery. I need a sympatholytic."
  },
  {
    iconName: "paw",
    iconType: "fad fa",
    brandName: "Prazosin",
    color: "#f23819",
    iconDescription: "I'm a cat who needs treatment for feline lower urinary tract disease. What can I have?"
  },
  {
    iconName: "paw-alt",
    iconType: "fas fa",
    brandName: "Tamsulosin",
    color: "#f23819",
    iconDescription: "I'm a dog with nephro/urolith who needs a sympatholytic to relax the smooth muscles of my urinary tract."
  },
  {
    iconName: "paw-alt",
    iconType: "far fa",
    brandName: "Propranolol",
    color: "#f23819",
    iconDescription: "I'm a cat who needs treatment of arrhythmias from feline hyperthyroid disease."
  },
  {
    iconName: "paw-alt",
    iconType: "fal fa",
    brandName: "Atenolol",
    color: "#f23819",
    iconDescription: "I'm a dog who needs a drug similar to Propranolol but with a longer half life and without risk of bronchoconstriction."
  },
  {
    iconName: "horse",
    iconType: "fas fa",
    brandName: "Reserpine",
    color: "#f23819",
    iconDescription: "I'm a horse who needs to be calmed by blocking NE uptake into my vesicles."
  },
  {
    iconName: "ram",
    iconType: "fas fa",
    brandName: "Lidocaine",
    color: "#f23819",
    iconDescription: "I'm a ram who needs the most common local anesthetic which is also a sodium channel blocker."
  },
  {
    iconName: "ram",
    iconType: "far fa",
    brandName: "Bupivacaine",
    color: "#f23819",
    iconDescription: "I'm a ram who need a long-lasting local anesthetic (at least 8 hours)."
  },
  {
    iconName: "paw-alt",
    iconType: "fad fa",
    brandName: "Proparacaine",
    color: "#f23819",
    iconDescription: "I'm a cat who needs a local anesthetic with a very short half life that will only work for a few minutes as an eyedrop."
  },
  {
    iconName: "ram",
    iconType: "fad fa",
    brandName: "Mepivacaine",
    color: "#f23819",
    iconDescription: "I'm a ram who needs a local anesthetic that is most commonly used for lameness exams in horses."
  },
  {
    iconName: "ram",
    iconType: "fal fa",
    brandName: "Tetracaine",
    color: "#f23819",
    iconDescription: "I'm a ram who needs a short-term local anesthetic, similar to Proparacaine, but used in large animals."
  },
  {
    iconName: "ember",
    iconType: "fad fa",
    brandName: "Ember.js",
    color: "#f23819",
    iconDescription: "I'm a thing"
  },
  {
    iconName: "ember",
    iconType: "fad fa",
    brandName: "Ember.js",
    color: "#f23819",
    iconDescription: "I'm a thing"
  },
  {
    iconName: "ember",
    iconType: "fad fa",
    brandName: "Ember.js",
    color: "#f23819",
    iconDescription: "I'm a thing"
  },
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
  // Change icon id from the iconname
  for(let i=0; i<randomDraggableBrands.length; i++) {
    draggableItems.insertAdjacentHTML("beforeend", `
      <div class="content">
      <i class="${randomDraggableBrands[i].iconType}-${randomDraggableBrands[i].iconName} draggable" draggable="true" style="color: ${randomDraggableBrands[i].color};" id="${randomDraggableBrands[i].brandName}"></i>
      <p class="description">${randomDraggableBrands[i].iconDescription}</p>
      </div>
    `);
  }

  // Create "matching-pairs" and append to DOM
  // Change icon id from the iconname
  for(let i=0; i<alphabeticallySortedRandomDroppableBrands.length; i++) {
    matchingPairs.insertAdjacentHTML("beforeend", `
      <div class="matching-pair">
        <span class="label">${alphabeticallySortedRandomDroppableBrands[i].brandName}</span>
        <span class="droppable" data-brand="${alphabeticallySortedRandomDroppableBrands[i].brandName}"></span>
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

// change me
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
    const draggableElementID = draggableElement.getAttribute("class");
    event.target.innerHTML = `<i class="${draggableElementID}" style="color: ${draggableElement.style.color};"></i>`;
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
playAgainBtn.addEventListener("touchstart", playAgainBtnClick);
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
