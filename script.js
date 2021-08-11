const brands = [
  {
    iconName: "alicorn",
    iconType: "fas fa",
    brandName: "Flunixin-meglumine",
    color: "#c9da7f", // red
    iconDescription: "I'm a unicorn with abdominal pain. I need a drug that can also be used in cattle and will inhibit Cox-1 and Cox 2."
  },
  {
    iconName: "alicorn",
    iconType: "far fa",
    brandName: "Phenylbutazone",
    color: "#7d6d75",
    iconDescription: "I'm a unicorn  with muscle pain. I need an anti-inflamatory that can only be given by IV or PO. My friend Harold the cow cannot have it, nor can the beagle I keep nearly stepping on."
  },
  {
    iconName: "alicorn",
    iconType: "fal fa",
    brandName: "Ketoprofen",
    color: "#d39a68",
    iconDescription: "I'm a unicorn with some leg pain. I don't have a fever so a pill with a longer duration administration is fine."
  },
  {
    iconName: "alicorn",
    iconType: "fad fa",
    brandName: "Firocoxib",
    color: "#b509d3",
    iconDescription: "I'm a unicorn with arthritis. I need a COX-2 inhibitor to help with pain. I believe my canine friends can use this, too."
  },
  {
    iconName: "cow",
    iconType: "fas fa",
    brandName: "Cortisone",
    color: "#5c74e0",
    iconDescription: "I'm a cow who used to zoom around the track. I still sometimes get pain and swelling from my glory days. I need a short-acting corticosteroid to manage my pain."
  },
  {
    iconName: "dog",
    iconType: "fas fa",
    brandName: "Prednisone",
    color: "#9a4b17",
    iconDescription: "Hi, I'm Honey Belle. I enjoy running on concrete and destroying my toe pads. I need something to help with inflammation. My daddy says Caitlin uses this too when she's speckled."
  },
  {
    iconName: "cow",
    iconType: "far fa",
    brandName: "Prednisolone",
    color: "#ba7540",
    iconDescription: "I'm a cow with recurrent airway obstruction, a thing Caitlin just Googled that is apparently a respitory disease. I need an immediate-acting corticosteroid."
  },
  {
    iconName: "deer",
    iconType: "fal fa",
    brandName: "Dexamethasone",
    color: "#a846ce",
    iconDescription: "I'm a cow who is having an allergic reaction. I am speckled and everything itches, from head to hoof. I need a long-acting corticosteroid."
  },
  {
    iconName: "cow",
    iconType: "fad fa",
    brandName: "Lidocaine",
    color: "#c0defe",
    iconDescription: "I'm a cow and I need a drug that can be a local anesthetic or used as an antiinflamatory to inhibit leukocyte migration and cytokine response."
  },
  {
    iconName: "deer",
    iconType: "fas fa",
    brandName: "Tiludronate",
    color: "#1471bb",
    iconDescription: "I'm a deer who needs IV treatment for navicular disease."
  },
  {
    iconName: "deer",
    iconType: "far fa",
    brandName: "Dimethyl Sulfoxide",
    color: "#15132b",
    iconDescription: "I'm a deer and I need antiinflammatories. I need something that will penetrate through my cell membranes almost as easily as water. My cow friends tell me that it's very illegal to share with them—they don't even have it on their farms."
  },
  {
    iconName: "dog",
    iconType: "far fa",
    brandName: "Bethanechol",
    color: "#2e58b4",
    iconDescription: "I'm a dog with who needs a medicine to stimulate detrusor muscle contraction to treat my atony."
  },
  {
    iconName: "dog",
    iconType: "fal fa",
    brandName: "Neostigmine",
    color: "#6afee7",
    iconDescription: "I'm a good boi who needs something to treat my ruminal atony initiating peristaslsis and stimulating GI motility."
  },
  {
    iconName: "dog",
    iconType: "fad fa",
    brandName: "Edrophonium",
    color: "#aed92a",
    iconDescription: "I'm a doggo with myasthenia gravis, which Caitlin just learned is a neuromuscular disorder. I need a short-acting acetylcholinesterase antagonist to treat me."
  },
  {
    iconName: "cat",
    iconType: "fas fa",
    brandName: "Pyridostigmine",
    color: "#66aa60",
    iconDescription: "I'm a cat with myasthenia gravis, and I need a acetylcholinesterase antagonist to help with long-term management of my disorder."
  },
  {
    iconName: "cat",
    iconType: "far fa",
    brandName: "Atropine",
    color: "#eee76c",
    iconDescription: "I'm a cat with bradycardia. I need a parasympatholytic for treatment."
  },
  {
    iconName: "rabbit",
    iconType: "fas fa",
    brandName: "Glycopyrrolate",
    color: "#6ab876",
    iconDescription: "I'm a rabbit in need of a longer-lasting version of atropine."
  },
  {
    iconName: "cat",
    iconType: "fal fa",
    brandName: "Oxybutynin",
    color: "#ea3161",
    iconDescription: "I'm a cat with a hyperactive bladder. I need a GI and urinary antispasmodic agent to help with it that is able to cross BBB."
  },
  {
    iconName: "cat",
    iconType: "fad fa",
    brandName: "Propantheline",
    color: "#fb7d93",
    iconDescription: "I'm a cat with a hyperactive bladder. I need a GI and urinary antispasmodic agent to help with it that is NOT able to cross BBB."
  },
  {
    iconName: "cat-space",
    iconType: "fas fa",
    brandName: "Epinephrine",
    color: "#3cf239",
    iconDescription: "I'm a space cat experiencing anaphylaxis shock upon entering Earth's orbit. I need a sympathomimetic."
  },
  {
    iconName: "cat-space",
    iconType: "far fa",
    brandName: "Norepinephrine",
    color: "#2d5beb",
    iconDescription: "I'm a space cat who needs a vasopressor as treatment for hypotension. I need a sympathomimetic."
  },
  {
    iconName: "cat-space",
    iconType: "fal fa",
    brandName: "Isoproterenol",
    color: "#8aad6e",
    iconDescription: "I'm a space cat with bronchial asthma who needs a sympathomimetic treatment that causes positive inotropic/chronotropic effects."
  },
  {
    iconName: "cat-space",
    iconType: "fad fa",
    brandName: "Dopamine",
    color: "#146ee8",
    iconDescription: "I'm a space cat with hypotension from inadequate vascular tone. I need a sympathomimetic."
  },
  {
    iconName: "dog-leashed",
    iconType: "fas fa",
    brandName: "Dobutamine",
    color: "#a227f4",
    iconDescription: "I'm a dog who needs treatment for of anesthesia-induced hypotension where positive inotropic effect is needed for perfusion."
  },
  {
    iconName: "dog-leashed",
    iconType: "far fa",
    brandName: "Phenylephrine",
    color: "#11ef45",
    iconDescription: "I'm a dog who needs a sympathomimetic to increase my peripheral vascular tone."
  },
  {
    iconName: "cow",
    iconType: "fal fa",
    brandName: "Ractopamine &  Zilpaterol",
    color: "#f37747",
    iconDescription: "I'm a cow who needs to bulk up to increase my deposition of lean muscle. Is it legal? Who knows."
  },
  {
    iconName: "dog-leashed",
    iconType: "fal fa",
    brandName: "Albuterol & Terbutaline & Clenbuterol",
    color: "#595a0d",
    iconDescription: "I'm a dog who needs selective B2 agonists for treatment of asthma."
  },
  {
    iconName: "dog-leashed",
    iconType: "fad fa",
    brandName: "Selegenline",
    color: "#917f47",
    iconDescription: "I'm a dog who needs treatment for canine cognitive dysfunction. I need an MAOI."
  },
  {
    iconName: "paw",
    iconType: "fas fa",
    brandName: "Ephedrine",
    color: "#5c11c9",
    iconDescription: "I'm a dog who needs a CRI for BP maintenance under anesthesia. What drug can you give me?"
  },
  {
    iconName: "paw",
    iconType: "far fa",
    brandName: "Phenylpropanolamine",
    color: "#96d35f",
    iconDescription: "I'm a dog who needs treatment for urinary incontinence. I need a sympathomimetic."
  },
  {
    iconName: "paw",
    iconType: "fal fa",
    brandName: "Phenoxybenzamine",
    color: "#c001bf",
    iconDescription: "I'm a dog who needs treatment for hypertension from pheochromocytoma before surgery. I need a sympatholytic."
  },
  {
    iconName: "paw",
    iconType: "fad fa",
    brandName: "Prazosin",
    color: "#6d4b65",
    iconDescription: "I'm a cat who needs treatment for feline lower urinary tract disease. What can I have?"
  },
  {
    iconName: "paw-alt",
    iconType: "fas fa",
    brandName: "Tamsulosin",
    color: "#f9bfb7",
    iconDescription: "I'm a dog with nephro/urolith who needs a sympatholytic to relax the smooth muscles of my urinary tract."
  },
  {
    iconName: "paw-alt",
    iconType: "far fa",
    brandName: "Propranolol",
    color: "#520f4e",
    iconDescription: "I'm a cat who needs treatment of arrhythmias from feline hyperthyroid disease."
  },
  {
    iconName: "paw-alt",
    iconType: "fal fa",
    brandName: "Atenolol",
    color: "#b38b2f",
    iconDescription: "I'm a dog who needs a drug similar to Propranolol but with a longer half life and without risk of bronchoconstriction."
  },
  {
    iconName: "horse",
    iconType: "fas fa",
    brandName: "Reserpine",
    color: "#f1790e",
    iconDescription: "I'm a horse who needs to be calmed by blocking NE uptake into my vesicles."
  },
  {
    iconName: "ram",
    iconType: "fas fa",
    brandName: "Lidocaine",
    color: "#13ac95",
    iconDescription: "I'm a ram who needs the most common local anesthetic which is also a sodium channel blocker."
  },
  {
    iconName: "ram",
    iconType: "far fa",
    brandName: "Bupivacaine",
    color: "#724884",
    iconDescription: "I'm a ram who need a long-lasting local anesthetic (at least 8 hours)."
  },
  {
    iconName: "paw-alt",
    iconType: "fad fa",
    brandName: "Proparacaine",
    color: "#eaca27",
    iconDescription: "I'm a cat who needs a local anesthetic with a very short half life that will only work for a few minutes as an eyedrop."
  },
  {
    iconName: "ram",
    iconType: "fad fa",
    brandName: "Mepivacaine",
    color: "#3ab98c",
    iconDescription: "I'm a ram who needs a local anesthetic that is most commonly used for lameness exams in horses."
  },
  {
    iconName: "ram",
    iconType: "fal fa",
    brandName: "Tetracaine",
    color: "#704e50",
    iconDescription: "I'm a ram who needs a short-term local anesthetic, similar to Proparacaine, but used in large animals."
  },
  {
    iconName: "cat",
    iconType: "fad fa",
    brandName: "Morphine",
    color: "#fa5bd2",
    iconDescription: "I'm a cat who needs a full mu agonist opioid with an onset of 5-15 minutes."
  },
  {
    iconName: "dog",
    iconType: "fas fa",
    brandName: "Hydromorphone",
    color: "#cbab96",
    iconDescription: "I'm a pupper who needs a full mu agonist with less histamine release than morphine."
  },
  {
    iconName: "dog",
    iconType: "fad fa",
    brandName: "Oxymorphone",
    color: "#054a98",
    iconDescription: "I'm a dog who needs a full mu agonist with less listamine release and that's less emetogenic."
  },
  {
    iconName: "cat-space",
    iconType: "fal fa",
    brandName: "Methadone",
    color: "#48af1c",
    iconDescription: "I'm a space cat who needs a full-mu agonist opioid for a preanesthetic protocol with less histamine, less emetogenic and less sedation than morphine."
  },
  {
    iconName: "cat-space",
    iconType: "far fa",
    brandName: "Fentanyl",
    color: "#3f6445",
    iconDescription: "I'm a space cat who needs a full mu agonist opioid 	that is potent, short acting and most suitable for CRI"
  },
  {
    iconName: "dog-leashed",
    iconType: "fal fa",
    brandName: "Remifentanil",
    color: "#3f5cae",
    iconDescription: "I'm a dog who needs something similar to fentanyl with a half life of 2-5 minutes."
  },
  {
    iconName: "cat",
    iconType: "fas fa",
    brandName: "Remifentanil",
    color: "#fdcbe8",
    iconDescription: "I'm a cat who needs a full mu antagonist that is a reversal agent for other opiates."
  },
  {
    iconName: "dog",
    iconType: "fas fa",
    brandName: "Buprenorphine",
    color: "#0f049b",
    iconDescription: "I'm a dog who needs a partial mu agonist that is slower onset (45 mins) and longer duration (~8 hours)."
  },
  {
    iconName: "dog-leashed",
    iconType: "fad fa",
    brandName: "Butorphanol",
    color: "#6fadca",
    iconDescription: "I'm a dog who needs a mixed κ & μ agonist that can be used as an antitussive."
  },
  {
    iconName: "cat",
    iconType: "fad fa",
    brandName: "Tramadol",
    color: "#f90276",
    iconDescription: "I'm a cat who needs a weak opioid mu agonist that is used often short term PO following surgery."
  },
  {
    iconName: "dog",
    iconType: "fad fa",
    brandName: "Hydrocodone",
    color: "#822d07",
    iconDescription: "I'm a dog who needs an oral antitussive. It's a schedule II drug so I can't get more."
  },
  {
    iconName: "dog",
    iconType: "fad fa",
    brandName: "Apomorphine",
    color: "#8ebb25",
    iconDescription: "I'm a dog who needs an antiemetic opioid that has a dopamine receptor agonist in chemoreceptor trigger zone. This will kill my kitty friends."
  },
  {
    iconName: "dog-leashed",
    iconType: "fas fa",
    brandName: "Acepromazine",
    color: "#7315a4",
    iconDescription: "I'm a dog who needs a neuroleptic that is a peripherally a1 receptor antagonist and blocks excitatory dopamine receptors in CNS. Stallions can't have this drug."
  },
  {
    iconName: "dog",
    iconType: "fal fa",
    brandName: "Diazepam",
    color: "#9a48a3",
    iconDescription: "I'm a dog who needs a neuroleptic with a GABA receptor agonist, most commonly given in IV or TM. Oral formulations of this cannot go to my feline friends."
  },
  {
    iconName: "cat",
    iconType: "far fa",
    brandName: "Midazolam",
    color: "#60efb0",
    iconDescription: "I'm a cat who needs a neuroleptic with a GABA receptor agonist that can be given by IV, TM or IM."
  },
  {
    iconName: "cat",
    iconType: "fad fa",
    brandName: "Alprazolam",
    color: "#1c038d",
    iconDescription: "I'm a cat who needs a neuroleptic with a GABA receptor agonist, only given PO."
  },
  {
    iconName: "cat",
    iconType: "far fa",
    brandName: "Flumazenil",
    color: "#049739",
    iconDescription: "I'm a cat who needs a neuroleptic with GABA receptor antagonists. This is a reversal agent that can only be given through IV."
  },
  {
    iconName: "dog",
    iconType: "fas fa",
    brandName: "Dexmedetomidine",
    color: "#154e51",
    iconDescription: "I'm a dog who needs a drug used TM for loud noise phobia. This is also used as a CRI for standing surgical procedures in horses."
  },
  {
    iconName: "horse",
    iconType: "fad fa",
    brandName: "Xylazine",
    color: "#891c4a",
    iconDescription: "I'm a horse who needs a sedative where Yohimbine is the reversal agent. This is also used as an entiemetic of choice in cats."
  },
  {
    iconName: "dog-leashed",
    iconType: "fad fa",
    brandName: "Carprofen",
    color: "#cc9eea",
    iconDescription: "I'm a dog who needs a NSAID that is available as PO and SQ. It's a preferential COX-2 inhibitor."
  },
  {
    iconName: "dog",
    iconType: "fal fa",
    brandName: "Deracoxib",
    color: "#d1cd78",
    iconDescription: "I'm a dog who needs a preferential COX-2 inhibitor in tablet formulation."
  },
  {
    iconName: "cat",
    iconType: "far fa",
    brandName: "Robenacoxib",
    color: "#e3be36",
    iconDescription: "I'm a cat who needs the first NSAID approved for multiple doses (up to three days)."
  },
  {
    iconName: "horse",
    iconType: "fal fa",
    brandName: "Firocoxib",
    color: "#1bbb26",
    iconDescription: "I'm a horse who needs an NSAID that is given as a paste. My puppy friends get tablets."
  },
  {
    iconName: "cat",
    iconType: "fas fa",
    brandName: "Meloxicam",
    color: "#049ad6",
    iconDescription: "I'm a cat who needs a NSAID that is approved for a single use injection in me following OVH (spay)."
  },
  {
    iconName: "dog",
    iconType: "fad fa",
    brandName: "Piroxicam",
    color: "#1aa595",
    iconDescription: "I'm a dog who needs a NSAID with anti-angiogenic properties, used in neoplasia (TCC especially)."
  },
  {
    iconName: "dog-leashed",
    iconType: "far fa",
    brandName: "Aspirin",
    color: "#cf486d",
    iconDescription: "I'm a dog who needs a selective COX-1 inhibitor that inhibits thromboxane (decreases platelet aggregation)."
  },
  {
    iconName: "dog",
    iconType: "fad fa",
    brandName: "Acetaminophen",
    color: "#a4e31f",
    iconDescription: "I'm a dog who needs a drug that technically is not an NSAID, but does inhibit prostaglandins. It's metabolized by the liver and should not be given to cats."
  },
  {
    iconName: "dog",
    iconType: "fal fa",
    brandName: "Grapiprant",
    color: "#77e466",
    iconDescription: "I'm a dog who needs an antagonist of PGE2 EP4 receptor (responsible for pain and inflam) instead of COX and that can be indicated for use in OA in dogs."
  },
  {
    iconName: "dog-leashed",
    iconType: "fas fa",
    brandName: "Gabapentin",
    color: "#5996ae",
    iconDescription: "I'm a dog who needs a natural steroid that does not act on a GABA receptor and treats neuropathic pain, acute and chronic. It can also be used for seizure management."
  },
  {
    iconName: "cat",
    iconType: "far fa",
    brandName: "Amantadine",
    color: "#4153cf",
    iconDescription: "I'm a cat who needs a drug that is technically an antiviral drug that also has antagonist action at NMDA receptor. It's used for treatment of neuropathic pain “dorsal horn wind-up” (PO)."
  },
  {
    iconName: "cat",
    iconType: "fad fa",
    brandName: "Dantrolene",
    color: "#3b84e3",
    iconDescription: "I'm a cat who needs a muscle relaxant that is peripherally acting and does not cross BBB."
  },
  {
    iconName: "dog",
    iconType: "far fa",
    brandName: "Methocarbamol",
    color: "#e0a4d6",
    iconDescription: "I'm a dog who needs a muscle relaxant used to counteract effects of tremorgenic toxins (like moldy trash)."
  },
  {
    iconName: "cat",
    iconType: "fas fa",
    brandName: "Guaifenesin",
    color: "#1665fc",
    iconDescription: "I'm a cat who needs a muscle relaxant that is part of LA “Triple Drip” (+Ketamine & Xylazine)."
  },
  {
    iconName: "dog-leashed",
    iconType: "far fa",
    brandName: "Diazepam",
    color: "#20e76b",
    iconDescription: "I'm a dog who needs an antiepiletic for acute seizure management that can be given in IV or PO formulations. This requires a Schedule IV DEA license."
  },
  {
    iconName: "cat-space",
    iconType: "fad fa",
    brandName: "Midazolam",
    color: "#c44e8a",
    iconDescription: "I'm a space cat who needs an antiepiletic for acute seizure management that has IM available."
  },
  {
    iconName: "dog",
    iconType: "far fa",
    brandName: "Bromide",
    color: "#3cded0",
    iconDescription: "I'm a dog who needs an antiepileptic that affects chloride and whose chemical formulation is KBr, NaBr."
  },
  {
    iconName: "dog",
    iconType: "far fa",
    brandName: "Phenobarbital",
    color: "#fdc072",
    iconDescription: "I'm a dog who needs an antiepiletic that requires routine monitoring because of enzymatic upregulation."
  },
  {
    iconName: "cat",
    iconType: "far fa",
    brandName: "Levetiracetam",
    color: "#fb2df4",
    iconDescription: "I'm a cat who needs an antiepileptic that is renally excreted."
  },
  {
    iconName: "dog",
    iconType: "far fa",
    brandName: "Zonisamine",
    color: "#28bdaf",
    iconDescription: "I'm a dog who needs an antiepileptic derived from sulfa drug."
  }
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
