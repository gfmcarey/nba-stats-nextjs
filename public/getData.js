const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://basketball.realgm.com/nba/players';

async function scrapeRealGM() {
  try {
    // Fetch HTML content of the page
    const response = await axios.get(url);
    const html = response.data;

    // Use cheerio to parse HTML
    const $ = cheerio.load(html);
    
    // Array to store player data
    const playersData = [];

    // Select the player rows
    const playerRows = $('.main-container');
    // Loop through each player row
    console.log(playerRows)
    //document.querySelector("#table-5496 > tbody > tr:nth-child(1) > td:nth-child(1)")
    $("table > tbody > tr").each((index, element) => {
      if ( index=== 0) return true;
      const player = {};
      const tds = $(element).find("td");
      player.number = $(tds[0]).text();
      player.name = $(tds[1]).text();
      player.position = $(tds[2]).text();
      player.height = $(tds[3]).text();
      player.weight = $(tds[4]).text();
      player.age = $(tds[5]).text();
      player.team = $(tds[6]).text();
      
      // Extract data from the columns
      //player.number = $(element).find('[data-th="#"]').text();
      //player.name = $(element).find('[data-th="Player"] a').text();
      //player.name = $(element).find('[data-th="Player"] a').text();
      //player.position = $(element).find('[data-th="Pos"]').text();
      //player.height = $(element).find('[data-th="Height"]').text();
      //player.weight = $(element).find('[data-th="Weight"]').text();
      //player.age = $(element).find('[data-th="Age"]').text();
      // Add players data to the array
      playersData.push(player);
      
    });
    console.log(playersData);
    // Write data to a JSON file
    fs.writeFileSync('players.json', JSON.stringify(playersData, null, 2));

    console.log('Data has been written to players.json');
  } catch (error) {
    console.error('Error scraping RealGM:', error.message);
  }
}

// Call the function to start scraping
scrapeRealGM();