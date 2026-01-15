hideItemsDuringReview = true; // if true, hide ones with copy true



/*
containsCopyright
"#",
"../img/fundy-tetris-thumbnail.png",
"4:21",
"Tetris but the Pieces are SUS - Fundy Inspired",
"description"
*/

const allVideos = [
    [
        true,
        "https://youtu.be/HYj6JRPdngg",
        "../img/thumbnails/mario-srpg.png",
        "11:45",
        "I Made a Turn-Based Mario Game in 1 Month",
        "This is by far the <b>best game I have ever created</b>. It had 23 levels and took a few hours to beat. It looked sick and it was fun to play. Mario 2 worked surprisingly well as an RPG. I really enjoyed this one."
    ],
    [
        false,
        "https://youtu.be/wkt5mOCjwfo",
        "../img/thumbnails/checkbox-doom.png",
        "8:33",
        "The Worst DOOM Port | Browser Checkboxes",
        "So what happens when you make an entire screen of checkboxes? Well, it can play Doom of course! It's kind of a miracle it actually worked."
    ],
    [
        false,
        "https://youtu.be/Nr4jPbfoRZM",
        "../img/thumbnails/pokemon-go-gameboy.png",
        "10:58",
        "What if Pokémon Go Released in 1999 - Game Boy Demake",
        "It was a lot of fun to reimagine the catching mechanics from Pokemon Go <b>with a touch screen</b> to a Game Boy game. I also created my own custom Pokemon for this.<br>♥ Waspprocessor ♥"
    ],
    [
        false,
        "https://youtu.be/96xNkL1Z_8M",
        "../img/thumbnails/pacman-you-are-ghost.png",
        "7:29",
        "Pac-Man with a TWIST: You're the GHOSTS!",
        "I had a really fun time reversing the roles in this. It ended up more like a puzzle game since you had to coordinate all 4 ghosts at the same time. Plus it was just fun to watch Pac-Man complete the levels by himself."
    ],
    [
        false,
        "https://youtu.be/hLvHCy7YaBI",
        "../img/thumbnails/fish-soccer.png",
        "11:34",
        "Can Fish Play Soccer? Well, that depends...",
        "This easily is the dumbest thing I've ever created. I bought fish, tracked their positions in the tank, and added a virtual soccer ball to kick around. <i>It was so absurd.</i>"
    ],
    [
        false,
        "https://youtu.be/Wrmlrw-Xlw0",
        "../img/thumbnails/bad-apple.png",
        "3:47",
        "Bad Apple but it's in Excel",
        "You know you've made it when you have your own version of Bad Apple. I wanted to do one for so long and I finally had a good idea for it."
    ],
    [
        true,
        "https://youtu.be/1RT6izNFaHk",
        "../img/thumbnails/squishy-kirby.png",
        "7:59",
        "What if Kirby was ACTUALLY Squishy?",
        "God, I love a good softbody simulation and that's the entire game here! I recreated a bunch of original levels and let squishy Kirby wreck havoc."
    ],
    [
        false,
        "https://youtu.be/szz-TjNjkYc",
        "../img/thumbnails/elden-ring.png",
        "9:59",
        "I Could EASILY Create Elden Ring in 24 Hours!",
        "This was a fun project because I accurately timed my work and was actually able to make a playable version with a boss. (Don't get me wrong, it was still bad...)"
    ],
    [
        false,
        "https://youtu.be/e804a0amv50",
        "../img/thumbnails/jackbox-trivia-racetrack.png",
        "10:54",
        "I Made My Own JACKBOX GAME!",
        "I went into this project knowing absolutely nothing about networking but I'm also very stubborn. I came out of this project with an entire Jackbox inspired trivia game!<br>Now I know <i>very little</i> about networking."
    ],
]

function Get5FavoriteVideos() {
    let index = Math.floor(Math.random() * allVideos.length);

    const loopCount = window.innerWidth < 786 ? 3 : 5; //do only 3 on mobile

    for (let i = 0; i < loopCount; i++) {
        if (hideItemsDuringReview == false || //false -> anything allowed
            (hideItemsDuringReview == true && allVideos[index][0] == false)) {  //true but copy is false
            GenerateFavoriteCard(
                allVideos[index][1],
                allVideos[index][2],
                allVideos[index][3],
                allVideos[index][4],
                allVideos[index][5]);
            index = (index + 1) % allVideos.length; // wrap back to 0 on overflow
        }
        else {
            i--; // do over
            index = (index + 1) % allVideos.length; // wrap back to 0 on overflow
        }

    }
}

function GenerateFavoriteCard(link, thumbURL, duration, title, description) {
    const html = `
    <div class="col-12 col-md-4 mb-2">
                    <a href="${link}" class="card mx-5 mx-md-2 mx-lg-5" target="_blank">
                        <div class="video-thumbnail">
                            <img src="${thumbURL}">
                            <div class="thumbnail-time">${duration}</div>
                            <i class="fa-solid fa-circle-play thumbnail-play"></i>
                        </div>
                        <div class="video-description">
                            <h5>${title}</h5>
                            <p>${description}</p>
                        </div>
                    </a>
                </div>
  `;

    document.getElementById("favorite-container").insertAdjacentHTML("beforeend", html);
}

function GetCopyright() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("footer-copyright").innerHTML = "&copy; Distracted Coder, LLC " + n.toString();
}





function normalizePath(p) {
    if (!p.startsWith("/")) p = "/" + p;
    if (!p.endsWith("/")) p = p + "/";
    return p.toLowerCase();
}

function AutoRedirect(target, aliases) {
    var loc = window.location;
    var search = loc.search;
    var hash = loc.hash;

    var path = loc.pathname;
    var currentNorm = normalizePath(path);
    var targetNorm = normalizePath(target);

    // Fail-safe: already redirected
    if (search.indexOf("redirected=1") !== -1) {
        return;
    }

    // 1) Alias redirect (exact, normalized)
    for (var i = 0; i < aliases.length; i++) {
        if (currentNorm === normalizePath(aliases[i])) {
            loc.replace(
                targetNorm + "?redirected=1" + hash
            );
            return;
        }
    }

    // // 2) Lowercase-only normalization (no alias)
    // if (currentRaw !== currentNorm) {
    //     loc.replace(
    //         currentNorm + "?redirected=1" + hash
    //     );
    //     return;
    // }
}


const allProjects = [
    ["Slide Soldiers - Playtest Demo",["Puzzle"],"https://distractedcoder.itch.io/slide-soldiers-demo1", "Slide_Soldiers_-_Playtest_Demo.png", false],
    ["The Final Seed - Jamsepticeye 2025",["Puzzle","Game Jam"],"https://distractedcoder.itch.io/the-final-seed", "The_Final_Seed_-_Jamsepticeye_Entry_2025.png", false],
    ["Luigi Mansion Gameboy Demake",["Action","Game Jam","Game Boy"],"https://distractedcoder.itch.io/luigi-mansion-gameboy-demake", "Luigi_Mansion_Gameboy_Demake_-_GB_Compo_25.png", true],
    ["Mario Kart with 50 Players",["Racing"],"https://distractedcoder.itch.io/mario-kart-with-50-players", "Mario_Kart_with_50_Players.png", true],
    ["Squishy Kirby in Dreamland",["Platformer","Physics"],"https://distractedcoder.itch.io/squishy-kirby", "Squishy_Kirby.png", true],
    ["Link but He's a Ball",["Adventure","Physics"],"https://distractedcoder.itch.io/link-but-hes-a-ball", "Link_but_He_s_a_Ball_-_Zelda_1.png", true],
    ["HYPERSPACE Shooter",["Action"],"https://distractedcoder.itch.io/hyperspace", "HYPERSPACE_Shooter.png", false],
    ["My Own Jackbox Game: Trivia Racetrack",["Party"],"https://distractedcoder.itch.io/custom-jackbox-game-trivia-racetrack", "My_Own_Jackbox_Game_Trivia_Racetrack.png", false],
    ["Sonic the Hedgehog Board Game",["Card Game"],"https://distractedcoder.itch.io/sonic-the-hedgehog-board-game", "Sonic_the_Hedgehog_Board_Game.png", false],
    ["Sonic the Hedgehog in 3D",["Platformer"],"https://distractedcoder.itch.io/sonic-the-hedgehog-in-3d", "Sonic_the_Hedgehog_in_3D.png", false],
    ["Super Mario 2 Strategy RPG",["Strategy"],"https://distractedcoder.itch.io/super-mario-warts-revenge", "Mario_Minus_Rabbids_-_Super_Mario_2.png", true],
    ["Reverse Pac-Man",["Puzzle"],"https://distractedcoder.itch.io/reverse-pac-man", "Reverse_Pac-Man.png", false],
    ["Elden Ring in 24 Hours",["Action"],"https://distractedcoder.itch.io/elden-ring-in-24-hours", "Elden_Ring_in_24_Hours.png", false],
    ["Fundy's Among Us Tetris",["Puzzle"],"https://distractedcoder.itch.io/fundys-among-us-tetris", "Fundy_s_Among_Us_Tetris.png", false],
    ["Literally Just Car Kirby",["Action"],"https://distractedcoder.itch.io/literally-just-car-kirby", "Literally_Just_Car_Kirby.png", true],
    ["Pokemon Go Game Boy",["Puzzle","Game Boy"],"https://distractedcoder.itch.io/pokemon-go-game-boy", "Pokemon_Go_Game_Boy.png", false],
    ["Stranded on Fox Island",["Survival","Game Jam"],"https://distractedcoder.itch.io/stranded-on-fox-island", "Stranded_on_Fox_Island.png", false],
    ["Remote Control Shuriken",["Action","Game Jam","Game Boy"],"https://distractedcoder.itch.io/rc-shuriken", "Remote_Control_Shuriken_-_GBCompo21.png", false],
    ["Out of Control Game Boy",["Platformer","Game Boy"],"https://distractedcoder.itch.io/out-of-control-game-boy-color", "Out_of_Control_-_Game_Boy_Color.png", false],
    ["The Glass Mason - Lego Ideas",["Platformer","Physics","Game Jam"],"https://distractedcoder.itch.io/the-glass-mason", "The_Glass_Mason_-_Lego_Ideas.png", false],
    ["Doom Browser Checkbox Version",["Shooter"],"/browser-projects/#checkbox-doom", "checkbox_doom.png", false],
    ["Vicious Vine - Miz Jam 1",["Adventure","Physics","Game Jam"],"https://distractedcoder.itch.io/vicious-vine", "Vicious_Vine_-_Miz_Jam_1.png", false],
    ["Second Hand Shooter",["Shooter","Game Jam"],"https://distractedcoder.itch.io/second-hand-shooter", "Second_Hand_Shooter_-_GMTK_Game_Jam_2020.png", false],
    ["Out of Control-Demo 1",["Platformer"],"https://distractedcoder.itch.io/out-of-control-demo1", "Out_of_Control-Demo_1.png", false]];


const classSet = new Set();
var cards;

function FillDashboard()
{
    for (var i = 0; i < allProjects.length; i++)
    {
        if (i == 0)
        {
            document.getElementById("textonly-dashboard").remove();
        }

        if (hideItemsDuringReview == true && allProjects[i][4] == true)
        {
            continue;
        }


        var tags = "";
        for (var t = 0; t < allProjects[i][1].length; t++)
        {
            tags+= `<span class="game-dashboard-tag">${allProjects[i][1][t]}</span>`;
        }

        var tagclasses = "";
        for (var t = 0; t < allProjects[i][1].length; t++)
        {
            tagclasses+= allProjects[i][1][t].replace(" ","-") + " ";
            classSet.add(allProjects[i][1][t].replace(" ","-"));
        }

        MakeDashboardCard(allProjects[i][2], "/img/games-dashboard/" + allProjects[i][3], allProjects[i][0],tags, tagclasses);
    }

    const sorted = [...classSet].sort((a, b) => a.localeCompare(b));
    for (const name of sorted) 
    {
        addToggleButton(name);
    }

    cards = document.querySelectorAll(".dashboard-item");
}

function MakeDashboardCard(link, thumbURL, title, tags, classes) 
{
    const html = `<div class="col-12 col-md-4 mb-2 dashboard-item ${classes}">
                    <a href="${link}" class="card mx-5 mx-md-2 mx-lg-5 game-dashboard-card my-2" target="_blank">
                        <div class="game-dashboard-thumbnail">
                            <img src="${thumbURL}">
                        </div>
                        <div class="game-dashboard-description">
                            <h5>${title}</h5>
                            <p class="my-0">
                                ${tags}
                            </p>
                        </div>
                    </a>
                </div>
  `;

    document.getElementById("dc-dashboard").insertAdjacentHTML("beforeend", html);
}




// const styleMap = {};

// function addToggleButton(name) {
//   const button = document.createElement("button");
//   button.classList.add(name);
//   button.textContent = name.replace("-"," ");
//   button.onclick = () => {
//     // toggle page visibility
//     toggleClassVisibility(name);

//     // toggle button active state
//     button.classList.toggle("inactive-button");
//   };
//   document.getElementById("controls").appendChild(button);
// }

// function toggleClassVisibility(className) {
//   if (styleMap[className]) {
//     styleMap[className].remove();
//     delete styleMap[className];
//   } else {
//     const style = document.createElement("style");
//     style.textContent = `.${className} { display: none; }`;
//     document.head.appendChild(style);
//     styleMap[className] = style;
//   }
// }




// Set of tags that are currently active
const activeTags = new Set();

// Cache all cards


// Add toggle button
function addToggleButton(name) {
    
  //if (classSet.has(name)) return;
  classSet.add(name);

  const button = document.createElement("button");
  button.textContent = name.replace("-"," ");
  button.classList.add(name);

  button.onclick = () => {
    if (activeTags.has(name)) {
      activeTags.delete(name);
      button.classList.remove("inactive-button");
    } else {
      activeTags.add(name);
      button.classList.add("inactive-button");
    }

    updateCardVisibility();
  };

  document.getElementById("controls").appendChild(button);
}

// Show/hide cards based on activeTags
function updateCardVisibility() {
    var count = 0;
  cards.forEach(card => {
    // Only consider tag classes, ignore structural classes like 'card'
    const cardTags = Array.from(card.classList).filter(c => classSet.has(c));

    let hide; 

    if (cardTags.length === 0) {
      // No tags -> never hide
      hide = false;
      count++;
    } else {
      // Hide if all tag classes are active
      hide = true; // assume hide
      for (const tag of cardTags) {
        if (!activeTags.has(tag)) {
          hide = false; // found a tag that's not active -> show card
          count++;
          break;
        }
      }
    }

    card.style.display = hide ? "none" : "";
  });


const id = "count-indicator";

let div = document.getElementById(id);

if (!div) {
  div = document.createElement("div");
  div.id = id;
  div.classList.add("d-block", "dashboard-count");
  controls.appendChild(div);
}

// always update content
div.textContent = "(" + count.toString() + " games)";
}