const people = ['Rafa', 'Diego', 'Dani', 'Rod']

// Pegue os nomes que começam com D e transforme toda a palavra para maiúsculo.
const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())

console.log(upperCasePeopleThatStartsWithD)