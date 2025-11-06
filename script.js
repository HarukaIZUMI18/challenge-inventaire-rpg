// 🟢 ZONE POUR ÉCRIRE TON CODE 🟢
function displayMagicianInventory(){
const items=['Potion 🧪', 'Baguette Magique 🪄','Grimoire 📖']

for(index=0; index.length<items; index++);
console.log(items);
console.log(items.length);

debugger;
for(let i=0; i<items.length; i++){
  console.log(items[i])
}
  return items;
}

/* etape2 */
function displayWarriorInventory(){
  const items=[' Épée ⚔️', 'Bouclier 🛡️', 'Armure 🪖'];

  debugger;
  let count =0
  while(count < items.length){
  console.log(items[count]);
  count++;}

  return items;
}

/* étape3  */
function createInventory(){
    const items=[];
    let input = prompt ("Mes des objets et dis 'stop' quand tu veux arrêter");
    console.log("premier saisie de l'aventurier :", input)

    while(input !== "stop"){
      items.push(input);
      console.log("état de l'inventaire :", items)
      input = prompt ("Mes des objets et dis 'stop' quand tu veux arrêter"); ;
    console.log("nouvelle saisie de l'aventurier :", input)
    }
return items;
} 

// 🛑 NE TOUCHE PAS A ÇA, JEUNE MOLDU ! 🛑

function displayOutput() {
  const forOutput = displayMagicianInventory().join("\n");
  document.getElementById("output-for").textContent = forOutput;

  const whileOutput = displayWarriorInventory().join("\n");
  document.getElementById("output-while").textContent = whileOutput;

  const inventoryBtn = document.getElementById("inventory-btn");
  inventoryBtn.addEventListener("click", () => {
    let userInventory = createInventory().join("\n");
    document.getElementById("output-foreach").textContent = userInventory;
  });
}

displayOutput();
