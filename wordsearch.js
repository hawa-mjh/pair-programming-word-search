const wordSearch = (letters, word) => {
    if (letters.length === 0) return false; // if letters is an empty array, return false
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    const verticalJoin = [];
    for (let i = 0; i < letters[0].length; i++) {
      let tempVerticalString = "";
      for (let j = 0; j < letters.length; j++) {
        tempVerticalString += letters[j][i];
      }
      verticalJoin.push(tempVerticalString);
    }
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
  };
  
  module.exports = wordSearch;