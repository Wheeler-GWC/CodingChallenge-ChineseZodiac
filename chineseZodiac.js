function getZodiac(year) {
	
  // Declares this variable without a value because we haven't determined the value yet. 
  // We use "let" because the value may change.
  let gap;
  
  if (year >= 1984) { // we are using 1984 since it's the starting point of the current cycle.
  	gap = year - 1984;
  } else {
  	gap = getAdjustedGap(year);	// we call this function to give us our gap if the year is before 1984.
  }
	
  // Here we create arrays of the elements and signs.
  // These variables won't ever change in value, so we can use "const" instead of "let".
  const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
  const signs = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'rooster', 'dog', 'pig'];
  
  // We are initializing this variable as an empty string for now and will append more text onto it as we go.
  let zodiac = "";
  
  // An array isn't needed for only two elements. We can use a ternary expression here.
  // It evaluates the condition "gap % 2 === 0" to determine if it's an even number.
  // If true, it return the value to the left of the ":". Otherwise, it return the value to the right.
  zodiac += gap % 2 === 0 ? 'Yang ' : 'Yin ';
  
  // Javascript doesn't use integer division by default, so we use parseInt to discard the remainder and then evaluate the modulus.
  // https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic
  zodiac += elements[(parseInt(gap / 2) % 5)] + ' ';
  zodiac += signs[(gap % 12)];
  console.log(zodiac);
}

function getAdjustedGap(year) {
	// This works because the entire cycle repeats every 60 years exactly as it did the previous cycle.
	// This means that if our input year is 1860, we can just keep adding increments of 60 years to it 
	// until we finally reach or exceed our start year of 1984. In the case of 1860:
	// 1860 + 60 + 60 + 60 = 2040, our first year in the current cycle, which will give us the same result as it would in its actual cycle.
	while (year < 1984) {
  	year += 60;
  }
  return year - 1984;
}

// This calls the function. We can put any A.D. year we want here.
getZodiac(1982);
