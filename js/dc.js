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
    // [
    //     true,
    //     "https://youtu.be/KnKKsqVdL1o",
    //     "../img/thumbnails/mario-kart-50.png",
    //     "5:28",
    //     "Why Stop at 24? I Made Mario Kart with 50 PLAYERS!",
    //     "DESCRIPTION"
    // ],
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

function Get5FavoriteVideos(showCopyright) {
    let index = Math.floor(Math.random() * allVideos.length);

    const loopCount = window.innerWidth < 786 ? 3 : 5; //do only 3 on mobile

    for (let i = 0; i < loopCount; i++) {
        if (allVideos[index][0] == false || showCopyright == true) {
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



// part of url, [alt names]
function AutoRedirect(target, aliases) {
    var base = "distractedcoder.com";
    var path = window.location.pathname;
    var failsafe = "?redirected";

    if (path.includes(failsafe)) {
        return; //already redirected once, do not try again
    }

    //var lowerPath = path.toLowerCase().replace(base,"").replace("https://","").replace("http://","").replace("www.","").replace("localhost:4000/","");
    var lowerPath = path.toLowerCase().split("/")[1];

    console.log("AutoRedirect checking path: " + lowerPath + " against target: " + target);
    if (lowerPath === target)
    {
        window.location.assign(base + "/" + target + failsafe); //this was a capitalization issue
        return;
    }



    // aliases must be lowercase
    for (var i = 0; i < aliases.length; i++) {
        if (lowerPath === aliases[i]) {
            window.location.assign(base + "/" + target + failsafe);
        }
    }

}