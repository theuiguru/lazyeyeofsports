var bgimg = new Array('nba', 'nfl', 'mlb'),
    b = Math.floor(Math.random() * bgimg.length),
    body = document.querySelector("body");
body.style.background = 'url(./assets/images/' + bgimg[b] + '_bg.jpg) no-repeat fixed center';
body.style.backgroundSize = 'cover';
var today = new Date(); 
var year = today.getFullYear(); 
var el = document.querySelector(".year"); 
el.textContent = year;
async function fetchWPdata() {
	await fetch('https://public-api.wordpress.com/rest/v1/sites/thelazyeyeofsports.wordpress.com/posts')
    .then(res => res.json())
    .then((data) => {
        data.posts.forEach(post => {
            const postDate = new Date(post.date);
            document.getElementById("blog").innerHTML += "<p>" + post.title + "\n" + (postDate.getMonth()+1) + "/" + postDate.getDate() + "/" + postDate.getFullYear() + "<br>" + post.excerpt + "</p>";
        });
    });
}
fetchWPdata();
