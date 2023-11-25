// Iteration 1: Names and Input
let hacker1 = `Juan`
console.log(`The driver's name is ${hacker1}`)
let hacker2 = `Giovanni`
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, XX characters!.`)
}

// Iteration 3: Loops
// Spaces

let spacedHacker1 = ` `
for(let i=0;i<hacker1.length;i++){

    spacedHacker1 += hacker1[i].toUpperCase() + ` `
}
console.log(spacedHacker1)

// reversed

let reversedHacker2 = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);

// Lexicographic order

if(hacker1.localeCompare.toUpperCase(hacker2.toLocaleUpperCase)=== -1){
    console.log(`The driver's name goes first.`)
}
else if(hacker1.localeCompare(hacker2)=== 1){
    console.log(`Yo, the navigator goes first, definitely.`)
}
else{
    console.log(`What?! You both have the same name?`)
}


    
// Bonus 1: number of words and `et`

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id ante mollis, sagittis dolor sit amet, tempus orci. Vestibulum cursus luctus tellus, et scelerisque eros porta ullamcorper. Mauris quis ullamcorper elit. Nullam nulla mauris, tempus eu urna nec, faucibus tristique massa. Sed id augue in augue sollicitudin dictum. Fusce maximus eget velit ut fringilla. Praesent consectetur et placerat egestas. Suspendisse auctor ligula urna, a pretium magna bibendum pretium. Nulla aliquet turpis et eros luctus tristique. Nunc efficitur dictum lectus. Duis eu arcu ipsum. Phasellus ipsum nulla, dignissim quis commodo quis, efficitur eget elit. Pellentesque convallis dolor eget aliquet elementum. Nunc libero erat, facilisis consectetur ornare sagittis, luctus sed eros.

Curabitur varius turpis et eros ullamcorper faucibus. Nulla id dignissim orci. Suspendisse quis blandit leo. Pellentesque pellentesque libero dapibus nisl tincidunt fermentum. Donec sapien ipsum, pellentesque sit amet mauris sed, viverra viverra massa. Vestibulum ante erat, ultrices eget diam id, vehicula laoreet diam. Aliquam at suscipit sapien, et accumsan nulla. Nulla ut augue sed libero venenatis et sollicitudin. Nam eu ligula ultricies, sagittis eros vel, egestas ipsum. In magna ante, iaculis et porta non, eleifend condimentum ante. Phasellus eget purus pharetra, ultrices nisi vel, rutrum mi. Proin sem diam, convallis quis consequat nec, faucibus nec metus. Praesent scelerisque est ut arcu pellentesque tempor. Pellentesque faucibus viverra sagittis. Aenean in lacinia massa. In hac habitasse platea dictumst.

Sed hendrerit, metus eget blandit vulputate, orci urna rhoncus lacus, tempor fermentum libero magna in odio. Morbi elit arcu, sodales sed ex sit amet, lacinia ullamcorper nunc. Proin eu justo consequat, interdum ligula eu, porttitor arcu. Morbi tempor purus auctor orci lobortis iaculis. Aliquam lacinia laoreet mollis. Pellentesque dapibus non arcu id eleifend. Praesent scelerisque pellentesque ligula. Sed ac et ultrices mauris.`


let words = 0;
let etCount = 0;


let splittedParagraph = paragraph.split(' ');

for (let i=0; i < splittedParagraph.length; i++) {
  if(splittedParagraph[i].includes('\n')) {
    words++
  } else if(splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
 }

console.log('words -->', words);
console.log('et count  -->', etCount);


// Bonus 2: Palindrome

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}


