const symbols = ["🍒", "🍋", "7️⃣", "💎", "🍀"];  
const result = symbols.sort(() => Math.random() - 0.5).slice(0, 3).join(" - ");  
console.log(`🎰 Результат: ${result}`);  
