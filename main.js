const str = `
010-3829-9194
andy0812@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


console.log(
  str.match(/(?<=@).{1,}/g)
)