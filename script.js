let pressTimer = null;

// When Continue is clicked
document.getElementById('continueBtn').addEventListener('click', () => {
  const market = document.getElementById('marketInput').value.trim();
  if (!market) return alert("Please enter a market and pair name.");
  
  document.getElementById('marketDisplay').textContent = market;
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('continueBtn').classList.add('hidden');
  document.getElementById('marketInput').classList.add('hidden');
});

// Signal button logic (Tap or Hold)
document.getElementById('signalBtn').addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    generateSignal("DOWN");
  }, 500); // Hold = DOWN
});

document.getElementById('signalBtn').addEventListener('mouseup', () => {
  if (pressTimer) {
    clearTimeout(pressTimer);
    generateSignal("UP"); // Tap = UP
  }
});

// Generate fake signal with loading
function generateSignal(direction) {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');

  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('directionText').textContent = direction;
    document.getElementById('directionText').style.color = direction === "UP" ? "lime" : "red";
    document.getElementById('finalMarket').textContent = document.getElementById('marketDisplay').textContent;
  }, 2500); // Simulate loading
}

// Reset app
function reset() {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
}
