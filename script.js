// 🟢 ZONE POUR ÉCRIRE TON CODE 🟢

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
