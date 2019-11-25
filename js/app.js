document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector('#web-form');
  newItemForm.addEventListener('submit', newItem );

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', deleteClick );

})

const newItem = function (event) {

  event.preventDefault();

  const newWebsite = addWebSites(event.target);
  const websList = document.querySelector('#webs-list');
  websList.appendChild(newWebsite);

  event.target.reset();

}

const addWebSites = function (event) {

  const newBox = document.createElement('li');
  newBox.classList.add('list-item');

  const title = document.createElement('h3');
  title.textContent = event.title.value;
  newBox.appendChild(title);

  const webLink = document.createElement('a');
  webLink.href = event.webUrl.value;
  webLink.textContent = event.webUrl.value;
  newBox.appendChild(webLink);

  const iframeBox = document.createElement('iframe');
  iframeBox.src = event.webUrl.value;
  newBox.appendChild(iframeBox);

  return newBox;

}

const deleteClick = function (event) {
  const websList = document.querySelector('#webs-list');
  websList.innerHTML = '';
}
