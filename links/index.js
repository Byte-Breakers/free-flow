const cheerio = require("cheerio");
const axios = require("axios");

const urls = [
  "https://www.cprogramming.com/tutorial.html",
  "https://www.cplusplus.com/doc/tutorial/",
  "https://www.w3schools.com/cpp/",
];

async function getGenre(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const genre = $("h1").text();
    const genre1 = $("h2").text();

    // Extract the URLs of the images in the webpage
    const images = [];
    $("img").each(function (i, img) {
      images.push({
        url: $(img).attr("src"),
      });
    });

    console.log(genre);
    //console.log(genre1);
    console.log(images);
    console.log("\n");
  } catch (error) {
    console.error(error);
  }
}

urls.forEach((url) => {
  getGenre(url);
});