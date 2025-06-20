const emotions = ["calm", "happy", "sad", "angry"];

function createThoughtElement(text) {
    const div = document.createElement("div");
    div.className = "thought";
    div.textContent = text;
    div.dataset.emotion = "neutral";
    div.addEventListener("click", () => cycleEmotion(div));
    return div;
}

function cycleEmotion(element) {
    const current = element.dataset.emotion;
    const index = emotions.indexOf(current);
    const nextEmotion = emotions[(index + 1) % emotions.length];
    element.dataset.emotion = nextEmotion;
}

function addThought() {
    const input = document.getElementById("thoughtInput");
    const text = input.value.trim();
    if (!text) return;
    const thoughtEl = createThoughtElement(text);
    document.getElementById("thoughtContainer").appendChild(thoughtEl);
    input.value = "";
}

document.getElementById("addThoughtBtn").addEventListener("click", addThought);
