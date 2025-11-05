// 🟢 ZONE POUR ÉCRIRE TON CODE 🟢
function displayMagicianInventory(){
const items=['Potion 🧪', 'Baguette Magique 🪄','Grimoire 📖']

for(index=0; index.length<items; index++);
console.log(items[index]);
  return items
}

/* etape2 */
function displayWarriorInventory(){
  const items=[' Épée ⚔️', 'Bouclier 🛡️', 'Armure 🪖'];

  let count=0;
  while(count<items.length);
  console.log(items[count]);
  count++;
  return items

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
