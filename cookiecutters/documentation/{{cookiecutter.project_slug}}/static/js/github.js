nodes = document.querySelectorAll('#github')

var github_request = new XMLHttpRequest();
var github_url="https://api.github.com/repos/{{cookiecutter.repo_name}}";
github_request.open("GET", github_url);
github_request.send();

github_request.onreadystatechange = (e) => {
  if (github_request.readyState == 4 && github_request.status == 200) {
    star_count = JSON.parse(github_request.responseText)['stargazers_count'];
    for (node of nodes.values()) {
      node.textContent = star_count
    }
  }
}
