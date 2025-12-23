let myArry = []

function todo_app(event) {
    event.preventDefault()

    const userInput = document.querySelector(".item").value

    myArry.unshift(userInput)

    document.querySelector(".item").value = ""

    let resultContainer = document.querySelector(".result")

    resultContainer.innerHTML = ""

    for (let i = 0; i < myArry.length; i++) {
       resultContainer.innerHTML += `<p>${myArry[i]}</p>`
        
    }
}