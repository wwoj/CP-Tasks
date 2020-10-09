var cos = [
  {
    parameter1: "Warszawa",
    parameter2: "miasto toDo stołeczne",
  },
  {
    parameter1: "Londyn",
    parameter2: "miasto stołeczne",
  },
  {
    parameter1: " Kraków",
    parameter2: "miasto nie toDo stołeczne",
  },
  {
    parameter1: "Madryt",
    parameter2: "miastotoDostołeczne",
  },
  {
    parameter1: "Washington DC",
    parameter2: "miasto toDo stołeczne",
  },
  {
    parameter1: "Praga",
    parameter2: "miasto stołeczne",
  },
];
document.write("Zadanie 1<br/>");
function findSubstring(arr, substr) {
  let result = [];
  let i=0;
  arr.forEach((elem) => {
    if (elem.parameter2.includes(substr)) {
        result[i]=elem.parameter1;
        i++;
    }
  });
  return(result);
}
console.log(findSubstring(cos, "toDo"));
document.write(findSubstring(cos, "toDo"),"<br/>");