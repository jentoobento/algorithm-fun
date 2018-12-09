/**
 * given an array of objects, and an array of tags, sort the songs based on
 * their genre. all songs with the genre "a" will come first, followed by "b", "c", etc.
 */

let songs = [
  {
    name: "song1",
    genre: ["a", "b"]
  },
  {
    name: "song2",
    genre: ["b"]
  },
  {
    name: "song3",
    genre: ["c"]
  },
  {
    name: "song4",
    genre: ["a"]
  }
];

let tags = ["a", "b", "c"];

function customComparator(property) {
  return function(a, b) {
    if (a[property] > b[property]) return 1;
    else if (a[property] < b[property]) return -1;
    else return 0;
  };
}

songs.sort(customComparator("genre"));
