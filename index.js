var musicians = ["John Lennon", "Paul  McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
	let array = []
	for (let i = 0; i < musicians.length; i++) {
		array.push(`${musicians[i]} plays ${instruments[i]}`)
	}
	return array
}

function johnLennonFacts(array) {
	let newArray = []
	for (var i = 0; i < array.length; i++) {
		newArray.push(`${array[i]}!!!`)
	}
	return newArray
}

function iLoveTheBeatles(n) {
	let newArray = []
	let i = 0
		do {
			newArray.push(`I love the Beatles!`)
			i++
		}
		while (i < n && n < 15)
	  return newArray
}
