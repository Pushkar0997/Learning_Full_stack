let fighters = ["🐉","🐥","🐊","💩","🦍","🐢","🐩","🦭","🦀","🐝","🤖","🐘","🐸","🕷","🐆","🦕","🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    const index1 = Math.floor(Math.random() * fighters.length)
    let index2 = Math.floor(Math.random() * fighters.length)

    // optional: avoid same fighter twice
    while (index2 === index1) {
        index2 = Math.floor(Math.random() * fighters.length)
    }

    stageEl.textContent = fighters[index1] + " vs " + fighters[index2]
})
