var request = new XMLHttpRequest();
var url="http://localhost:9000/search/search_index.json";
request.open("GET", url);
request.send();

var raw_index,idx

request.onreadystatechange = (e) => {
  if (request.readyState == 4 && request.status == 200) {
    raw_index = JSON.parse(request.responseText);
    idx = lunr.Index.load(raw_index)
  }
}
