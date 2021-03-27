nodes = document.querySelectorAll('#gitlab')

const request = new XMLHttpRequest();
const url="https://gitlab.com/api/v4/projects/25466570";
request.open("GET", url);
request.send();

request.onreadystatechange = (e) => {
  if (request.readyState == 4 && request.status == 200) {
    star_count = JSON.parse(request.responseText)['star_count'];
    for (node of nodes.values()) {
      node.textContent = star_count
    }
  }
}
