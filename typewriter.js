const text = ["developer.", "problem solver.", "resolute.", "architect.",]
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
let output = document.getElementById("typewriter");

async function typeWriter() {
    for (let word in text) {
        for (let i = 0; i < text[word].length; i++) {
            if (text[word].charAt(i) == " ") {
                output.innerHTML += "<br>"
                await sleep(90);
            } else {
                output.innerHTML += text[word].charAt(i);
                await sleep(90);
            }
        }
        await sleep(500);
        for (let i = text[word].length; i > 0; i--) {
            output.innerHTML = output.innerHTML.slice(0, -1);
            await sleep(150);
        }
    }
    setTimeout(typeWriter, 300);
}