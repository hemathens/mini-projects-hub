function randnumgen(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// DOM Elements
const generatorBtn = document.getElementById("generatorBtn");
const diceBtn = document.getElementById("diceBtn");
const cardBtn = document.getElementById("cardBtn");
const resetBtn = document.getElementById("resetBtn");
const numberResult = document.getElementById("numberResult");
const diceResult = document.getElementById("diceResult");
const cardResult = document.getElementById("cardResult");
const probabilityBox = document.getElementById("probability");
const diceDisplay = document.getElementById("dice");
const cardImage = document.getElementById("cardImage");
const minInput = document.getElementById("minRange");
const maxInput = document.getElementById("maxRange");
const themeSwitch = document.getElementById("themeSwitch");

const suits = ['S', 'H', 'D', 'C'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const fullDeck = values.flatMap(v => suits.map(s => `${v}${s}`));
let frequency = { numbers: {}, dice: {}, cards: {}, total: { numbers: 0, dice: 0, cards: 0 } };

// Number Generator
generatorBtn.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);
  if (isNaN(min) || isNaN(max) || min > max) {
    alert("Enter valid range");
    return;
  }
  const num = randnumgen(min, max);
  numberResult.textContent = num;
  frequency.numbers[num] = (frequency.numbers[num] || 0) + 1;
  frequency.total.numbers++;
  updateProbability();
});

// Dice Roller
diceBtn.addEventListener("click", () => {
  const roll = randnumgen(1, 6);
  diceDisplay.textContent = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][roll - 1];
  diceResult.textContent = `Roll: ${roll}`;
  frequency.dice[roll] = (frequency.dice[roll] || 0) + 1;
  frequency.total.dice++;
  updateProbability();
});

// Card Drawer
cardBtn.addEventListener("click", () => {
  const card = fullDeck[randnumgen(0, fullDeck.length - 1)];
  cardImage.src = `https://deckofcardsapi.com/static/img/${card}.png`;
  cardResult.textContent = `Card: ${card}`;
  frequency.cards[card] = (frequency.cards[card] || 0) + 1;
  frequency.total.cards++;
  updateProbability();
});

// Reset
resetBtn.addEventListener("click", () => {
  frequency = { numbers: {}, dice: {}, cards: {}, total: { numbers: 0, dice: 0, cards: 0 } };
  probabilityBox.innerHTML = "Data reset.";
  cardImage.src = "";
  cardResult.textContent = "Card: -";
  diceResult.textContent = "Roll: -";
  numberResult.textContent = "0";
  updateChart();
});

// Probability
function updateProbability() {
  const summarize = (obj, label, total) => {
    const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, 5);
    return `<strong>${label}</strong>: ` + entries.map(([k, v]) => `${k} (${v}x, ${(v / total * 100).toFixed(1)}%)`).join(', ');
  };

  probabilityBox.innerHTML =
    summarize(frequency.numbers, "Numbers", frequency.total.numbers || 1) + "<br>" +
    summarize(frequency.dice, "Dice", frequency.total.dice || 1) + "<br>" +
    summarize(frequency.cards, "Cards", frequency.total.cards || 1);

  updateChart();
}

// Dark Mode Toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Bayes Chart
const ctx = document.getElementById('bayesChart').getContext('2d');
let bayesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['P(A)', 'P(B|A)', 'P(B)', 'P(A|B)'],
    datasets: [{
      label: 'Bayes Values',
      backgroundColor: ['#f09433', '#e6683c', '#dc2743', '#bc1888'],
      data: [0.3, 0.9, 0.5, (0.9 * 0.3 / 0.5).toFixed(2)]
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true, max: 1 } }
  }
});

function updateChart() {
  bayesChart.data.datasets[0].data[3] = (bayesChart.data.datasets[0].data[0] * bayesChart.data.datasets[0].data[1] / bayesChart.data.datasets[0].data[2]).toFixed(2);
  bayesChart.update();
}
