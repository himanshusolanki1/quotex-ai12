let pressTimer = null;
const signalBtn = document.getElementById('signalBtn');

// CONTINUE button
document.getElementById('continueBtn').addEventListener('click', () => {
  const market = document.getElementById('marketInput').value.trim();
  if (!market) return alert("Please enter a market and pair name.");
  
  document.getElementById('marketDisplay').textContent = market;
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('continueBtn').classList.add('hidden');
  document.getElementById('marketInput').classList.add('hidden');
});

// 🔽 Hold = DOWN (touch or mouse), 🔼 Tap = UP
function setupPressEvents() {
  const startPress = () => {
    pressTimer = setTimeout(() => {
      generateSignal("DOWN");
      pressTimer = null;
    }, 500); // 0.5s = hold
  };

  const endPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      generateSignal("UP"); // It was just a tap
    }
  };

  // Mouse (desktop)
  signalBtn.addEventListener("mousedown", startPress);
  signalBtn.addEventListener("mouseup", endPress);

  // Touch (mobile)
  signalBtn.addEventListener("touchstart", startPress);
  signalBtn.addEventListener("touchend", endPress);
}

function generateSignal(direction) {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');

  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('directionText').textContent = direction;
    document.getElementById('directionText').style.color = direction === "UP" ? "lime" : "red";
    document.getElementById('finalMarket').textContent = document.getElementById('marketDisplay').textContent;
  }, 2500);
}

function reset() {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
}

// Call the setup
setupPressEvents();
