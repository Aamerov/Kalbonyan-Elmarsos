const listElement = document.querySelector('.posts');

const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.responseType = 'json';

  xhr.onload = function () {
    const listOfPosts = xhr.response;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      listElement.append(postEl);
    }
  };

  xhr.send();
}
