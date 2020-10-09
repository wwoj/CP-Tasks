console.log("Zadanie 3");
document.write("Zadanie 3<br/>");
function addataime(hours) {
  var data = new Date();
  console.log("Aktualna godzina:", data);
  document.write("Data obecna:",data,"<br/>");
  data.setHours(data.getHours() + hours);
  console.log(`Data po dodaniu ${hours}h: `, data,);
  document.write("Data po dodaniu czasu: ",data,"<br/>");
 
}

addataime(40);
