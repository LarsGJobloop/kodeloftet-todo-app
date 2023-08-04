// Hentet form element
const formElement = document.getElementById("add-todo-form")
const todoListRoot = document.getElementById("todos")


formElement.addEventListener(
  "submit",
  (event) => {
    // HTML Form elementer har en default funksjon
    // denne stopper den
    event.preventDefault()

    // For å være mer beskrivendes i resten av logikken
    // lagrer vi form elementet i en navngitt variabel her
    const form = event.target
    
    // Finn elementet
    const taskInput = document.getElementById("form-task")
    const assignedInput = document.getElementById("form-assignedTo")

    // lagre verdien i data objektet vårt
    const data = {
      task: taskInput.value,
      assignedTo: assignedInput.value
    }

    // Nullstill alle input elementen formen
    form.reset()

    // Etter konverteringen så kan vi gi dataen videre
    // til en funksjon som gjør noe med den
    createTodoCard(data)
  }
)

function createTodoCard(todoData) {
  // Lage elementet
  const todoCard = document.createElement("li")
  const todoTitle = document.createElement("h3")
  const todoAssignee = document.createElement("p")
  const todoDeleteButton = document.createElement("button")

  // Konfigure alle elementene
  todoCard.className = "todo-card"
  todoTitle.textContent = todoData.task
  todoAssignee.textContent = todoData.assignedTo
  todoDeleteButton.textContent = "Delete"

  // Sette de sammen
  todoCard.appendChild(todoTitle)
  todoCard.appendChild(todoAssignee)
  todoCard.appendChild(todoDeleteButton)

  // Legg til funksjon for å marker som ferdig
  todoCard.addEventListener("click", (event) => {
    // Finn element
    const card = event.target
    // toggle klasse navnet
    card.classList.toggle("completed")
  })
  
  // Legg til funksjon for å fjerne elementet
  todoDeleteButton.addEventListener("click", () => {todoCard.remove()})

  // Sett hele kortet inn i DOM / dokumentet
  todoListRoot.appendChild(todoCard)
}