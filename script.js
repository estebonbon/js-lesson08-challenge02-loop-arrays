var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#",
];

// By writting this loop, I am telling codePrograms to get is elemnts from the programming languages array
for (var codePrograms of programmingLanguages) {
  console.log(`I want to learn ${codePrograms}`);
}

// new loop for Each, mainly used to access the index value as well
// index + 1, was purposely done to start the list at one!
programmingLanguages.forEach(function (name, index) {
  console.log(index + 1, name.toUpperCase());
});

// This type of loops is filter oriented. The included is the callback function.
var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});

console.log(updatedLanguages);
