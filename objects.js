var playlist = { Aerosmith: "Dream On" };

function updatePlaylist(object, artistName, songTitle) {
  object[artistName] = songTitle
  return object
}