// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  if (title.includes('!') || title.includes('#') || title.includes('?')){
    return null
  } 

  return title.toLowerCase().split(' ').join('-')

};

module.exports = {
  createSlug,
};
