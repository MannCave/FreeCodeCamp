const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // User Story 2: If value is empty string, delete the property
  if (value === "") {
    delete records[id][prop];
  }
  // User Story 3: If prop isn't 'tracks' and value isn't empty, assign value to prop
  else if (prop !== "tracks") {
    records[id][prop] = value;
  }
  // User Stories 4 & 5: Handle 'tracks' property
  else if (prop === "tracks") {
    // User Story 4: If album doesn't have tracks property, create empty array
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [];
    }
    // User Story 5: Add value to end of existing tracks array
    records[id]["tracks"].push(value);
  }
  
  // User Story 1: Always return the entire records object
  return records;
}
