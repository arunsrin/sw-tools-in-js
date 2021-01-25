// exercise: we want to write a filter to get this answer:
/* [
  { personal: 'Jean', family: 'Jennings' },
  { personal: 'Ruth', family: 'Lichterman' },
  { personal: 'Frances', family: 'Bilas' }
]
*/
const people = [
    { personal: 'Jean', family: 'Jennings' },
    { personal: 'Marlyn', family: 'Wescoff' },
    { personal: 'Ruth', family: 'Lichterman' },
    { personal: 'Betty', family: 'Snyder' },
    { personal: 'Frances', family: 'Bilas' },
    { personal: 'Kay', family: 'McNulty' }
  ]
  
  const result = people.filter( f => f.family < 'M' )
  
  console.log(result)

// String interpolation
// We want this result:
/*
Darden, Christine
Jackson, Mary
Johnson, Katherine
Vaughan, Dorothy
*/

const people2 = [
    { personal: 'Christine', family: 'Darden' },
    { personal: 'Mary', family: 'Jackson' },
    { personal: 'Katherine', family: 'Johnson' },
    { personal: 'Dorothy', family: 'Vaughan' }
  ]
  
  for (const person of people2) {
    console.log(`${person.family}, ${person.personal}`)
  }