# Todo App

Et eksempel for hvordan en Todo applikasjon kan bli brutt ned til mindre biter.
Her har vi stykket det opp i en tilstand som må taes vare på, og et sett med funksjoner for å støtte opp rundt funksjonalitet vi har i designet vårt.

## Breakdown

![Breakdown of the todo application](./docs/overview.png)

## Shopping list

### DOM Manipulation:
- En måte å finne elementer på
  - [document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  - [document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

- Lage nye elementer
  - [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
    
- Legge til elementer til DOM
  - [element.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

- Fjerne elementer fra DOM
  - [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)

- Endre og Lese av verdier
  - [element.textContent = nyVerdi](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
  - let value = element.value
  - [element.className = nyeKlasser](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
  - let value = element.className
  - [element.className.toggle()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)

### Event Listners and Event Handlers

- Lytte etter hendelser (event listners)
  - [element.addEventListner("click", eventHandler)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- Håndterer hendelser (event handlers)
  -
  ```js
  function updateApp(event) {
        // Logikk som skal kjøre når en hendelse skjer
        // event parameteren er et objekt som inneholder informasjon om hendelsen som intraff
        //
    }
  ```