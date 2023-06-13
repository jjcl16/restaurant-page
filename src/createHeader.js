export default function createHeader () {
  const selections = ["Location", "Menu", "Reserve"]
  const headers = document.createElement('div');
  headers.classList.add("headerMenu");

  selections.forEach(element => {
    const selection = document.createElement('div');
    selection.classList.add("selection")
    selection.textContent = element;
    headers.appendChild(selection);
  });

  return headers;
}
