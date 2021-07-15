nodes = document.querySelectorAll('#gitlab')

var gitlab_request = new XMLHttpRequest();
var gitlab_url="https://gitlab.com/api/v4/projects/25466570";
gitlab_request.open("GET", gitlab_url);
gitlab_request.send();

gitlab_request.onreadystatechange = (e) => {
  if (gitlab_request.readyState == 4 && gitlab_request.status == 200) {
    star_count = JSON.parse(gitlab_request.responseText)['star_count'];
    for (node of nodes.values()) {
      node.textContent = star_count
    }
  }
}
