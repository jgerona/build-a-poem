const playgroundEl = document.querySelector(".playground");
const stagingEl = document.querySelector(".staging-area");
const tileSet = [
  "&",
  "&",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "about",
  "above",
  "ache",
  "ad",
  "after",
  "all",
  "am",
  "am",
  "an",
  "an",
  "and",
  "and",
  "and",
  "and",
  "apparatus",
  "are",
  "are",
  "arm",
  "as",
  "as",
  "as",
  "as",
  "ask",
  "at",
  "at",
  "at",
  "away",
  "bare",
  "be",
  "beat",
  "beauty",
  "bed",
  "beneath",
  "bitter",
  "black",
  "blood",
  "blow",
  "blue",
  "boil",
  "boy",
  "breast",
  "but",
  "but",
  "but",
  "but",
  "butt",
  "by",
  "by",
  "can",
  "chant",
  "chocolate",
  "cool",
  "could",
  "crush",
  "cry",
  "d",
  "day",
  "death",
  "delirious",
  "diamond",
  "did",
  "do",
  "do",
  "dream",
  "dress",
  "drive",
  "drool",
  "drunk",
  "eat",
  "ed",
  "ed",
  "ed",
  "ed",
  "egg",
  "elaborate",
  "enormous",
  "er",
  "es",
  "est",
  "fast",
  "feet",
  "fiddle",
  "finger",
  "fluff",
  "for",
  "forest",
  "frantic",
  "friend",
  "from",
  "from",
  "garden",
  "girl",
  "go",
  "goddess",
  "gorgeous",
  "gown",
  "hair",
  "has",
  "have",
  "have",
  "he",
  "he",
  "head",
  "heave",
  "her",
  "her",
  "here",
  "him",
  "his",
  "his",
  "honey",
  "hot",
  "how",
  "I",
  "I",
  "I",
  "I",
  "if",
  "in",
  "in",
  "in",
  "ing",
  "ing",
  "ing",
  "ing",
  "ing",
  "ing",
  "is",
  "is",
  "is",
  "is",
  "is",
  "it",
  "it",
  "it",
  "juice",
  "lake",
  "language",
  "languid",
  "lather",
  "lazy",
  "less",
  "let",
  "lick",
  "lie",
  "life",
  "light",
  "like",
  "like",
  "like",
  "live",
  "love",
  "luscious",
  "lust",
  "ly",
  "ly",
  "ly",
  "ly",
  "mad",
  "man",
  "me",
  "me",
  "me",
  "mean",
  "meat",
  "men",
  "milk",
  "mist",
  "moan",
  "moon",
  "mother",
  "music",
  "must",
  "my",
  "my",
  "my",
  "need",
  "never",
  "no",
  "no",
  "not",
  "not",
  "of",
  "of",
  "of",
  "of",
  "on",
  "on",
  "one",
  "or",
  "our",
  "over",
  "pant",
  "peach",
  "petal",
  "picture",
  "pink",
  "play",
  "please",
  "pole",
  "pound",
  "puppy",
  "purple",
  "put",
  "r",
  "r",
  "rain",
  "raw",
  "recall",
  "red",
  "repulsive",
  "rip",
  "rock",
  "rose",
  "run",
  "rust",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "sad",
  "said",
  "sausage",
  "say",
  "scream",
  "sea",
  "see",
  "shadow",
  "she",
  "she",
  "shine",
  "ship",
  "shot",
  "show",
  "sing",
  "sit",
  "skin",
  "sky",
  "sleep",
  "smear",
  "smell",
  "smooth",
  "so",
  "soar",
  "some",
  "sordid",
  "spray",
  "spring",
  "still",
  "stop",
  "storm",
  "suit",
  "summer",
  "sun",
  "sweat",
  "sweet",
  "swim",
  "symphony",
  "the",
  "the",
  "the",
  "the",
  "the",
  "their",
  "there",
  "these",
  "they",
  "those",
  "though",
  "thousand",
  "through",
  "time",
  "tiny",
  "to",
  "to",
  "to",
  "together",
  "tongue",
  "trudge",
  "TV",
  "ugly",
  "up",
  "urge",
  "us",
  "use",
  "want",
  "want",
  "was",
  "watch",
  "water",
  "wax",
  "we",
  "we",
  "were",
  "what",
  "when",
  "whisper",
  "who",
  "why",
  "will",
  "wind",
  "with",
  "with",
  "woman",
  "worship",
  "y",
  "y",
  "y",
  "y",
  "yet",
  "you",
  "you",
  "you",
  "you",
];

const subArrSize = 50;

const randomizeTilePosition = (tileEl) => {
  const marginVar = 50;
  tileEl.style.marginTop = Math.floor(Math.random() * marginVar) + "px";
  tileEl.style.marginRight = Math.floor(Math.random() * marginVar) + "px";
  tileEl.style.marginLeft = Math.floor(Math.random() * marginVar) + "px";
  tileEl.style.marginBottom = Math.floor(Math.random() * marginVar) + "px";
};

const getRandomSubArr = (arr, size) => {
  let shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
};

const displayArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    div.className = "tile";
    div.id = i;
    div.innerHTML = arr[i];

    playgroundEl.appendChild(div);
  }

  document.querySelectorAll(".tile").forEach((tile) => {
    randomizeTilePosition(tile);
    tile.classList.add("animate__animated", "animate__fadeIn");
  });
};

const moveTile = (e) => {
  e.stopPropagation();
  const selectedTileEl = e.target;
  const selectedTileId = e.target.id;
  const tileStr = e.target.textContent;

  console.log(selectedTileId);
  console.log(tileStr);
  if (playgroundEl.contains(selectedTileEl)) {
    selectedTileEl.classList.replace("animate__fadeIn", "animate__fadeOut");

    const stagedTile = document.createElement("div");
    stagedTile.classList.add("animate__animated", "animate__fadeIn");
    stagedTile.classList.add("tile");
    stagedTile.classList.add("staged");
    stagedTile.textContent = tileStr;
    stagedTile.style = "margin: 5px";
    stagedTile.id = selectedTileId;

    stagingEl.appendChild(stagedTile);
  } else if (stagingEl.contains(selectedTileEl)) {
    selectedTileEl.classList.replace("animate__fadeIn", "animate__fadeOut");

    selectedTileEl.remove();

    const tileOriginal = document.getElementById(e.target.id);
    tileOriginal.classList.replace("animate__fadeOut", "animate__fadeIn");

    randomizeTilePosition(tileOriginal);
  }
};

const submitPoem = async (e) => {
  e.preventDefault();
  var content = "";
  document.querySelectorAll(".staged").forEach((tile) => {
    //console.log(tile);
    content = content + `${tile.innerHTML} `;
  });
  if(content.length>0){
    // console.log(content);
    const res = await fetch('/api/poem/', {
      method: 'POST',
      body: JSON.stringify({content}),
      headers: {'Content-Type': 'application/json'},
    });
    if(res.ok) {
      document.location.replace('/build');
    } else {
      alert(res.statusText);
    }
  }
}

// const sendData = () => {
//   var poem = [];
//   $(".staged").each(function () {
//     result.push($(this).text());
//   });

//   result = result.join(", ");

//   console.log(result);
// };

const tiles = getRandomSubArr(tileSet, subArrSize);
displayArr(tiles);

document.querySelectorAll(".tile").forEach((tile) => {
  addEventListener("click", moveTile);
});

document.querySelector("#submitPoem").addEventListener("click", submitPoem);
