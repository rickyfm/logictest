function sortWord(word) {
  return word.split('').sort().join('')
}

function grouping(words) {
  const groups = []
  const groupedWords = []
  words.forEach(item => {
    const sortedWord = sortWord(item)
    if (!groups.includes(sortedWord)) {
      groups.push(sortedWord)
    }

    const key = groups.indexOf(sortedWord)
    groupedWords[key] = [
      ...groupedWords[key] || [],
      item
    ]
  })

  return groupedWords
}

console.log(grouping(["katak", "takak", "kasur", "rusak", "surak", "foo", "bar"]))
