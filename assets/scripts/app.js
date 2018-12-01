var bgimg = new Array('nba', 'nfl', 'mlb'),
    b = Math.floor(Math.random() * bgimg.length),
    body = document.querySelector("body");
body.style.background = 'url(./assets/images/' + bgimg[b] + '_bg.jpg) no-repeat fixed center';
body.style.backgroundSize = 'cover';