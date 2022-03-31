document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit', handleFormSubmit)

  const button = document.createElement('button');
  button.id = "deleteAllButton"
  button.innerHTML = "Delete All";
  document.body.appendChild(button);
  const deleteAllButton = document.querySelector('#deleteAllButton')
  deleteAllButton.addEventListener('click', handleAllDeleteSubmit)
})

const handleFormSubmit = function(events){
  events.preventDefault()
  console.log(events)
  const resultItem = document.querySelector('#reading-list')
  const newListItem = document.createElement('li')
  const form = document.querySelector('#new-item-form')
  newListItem.textContent = `Title: ${events.target.title.value} | Author: ${events.target.author.value} | Category: ${events.target.category.value} `
  resultItem.appendChild(newListItem)
  form.reset();
}

const handleAllDeleteSubmit = function(events){
  events.preventDefault()
  console.log(events)
  const resultItem = document.querySelector('#reading-list')
  resultItem.replaceChildren()
}



