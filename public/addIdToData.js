const fs = require('fs');

// Read the JSON data from the file
const rawJsonData = fs.readFileSync('players.json', 'utf8');
const jsonData = JSON.parse(rawJsonData);

// Function to add an 'id' field to each object
function addIdToData(data) {
  return data.map((player, index) => {
    return { id: index + 1, ...player }; // Add 'id' field starting from 1
  });
}

// Call the function and get the updated data
const newDataWithId = addIdToData(jsonData);

// Convert the updated data to JSON string
const jsonContent = JSON.stringify(newDataWithId, null, 2); // The last parameter is for indentation (2 spaces in this case)

// Write the JSON string to a new file
fs.writeFileSync('player.json', jsonContent);

console.log('Data with IDs written to newDataWithId.json');
