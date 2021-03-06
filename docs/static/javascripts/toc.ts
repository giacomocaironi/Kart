var TOC = document.getElementById('toc'),
headings = document.querySelectorAll('h2, h3, h4, h5, h6'),
parentLevel = 2,
tocn = 0,
cursorNode = TOC;

for (var i = 0, len = headings.length ; i < len ; ++i) {

	var currentHeading = headings[i];
	var newLevel = parseInt(currentHeading.tagName.substr(1,1));
	var diff = newLevel - parentLevel;
	if (diff > 0) {
		var containerLiNode = cursorNode.lastChild;
		var ulNode = document.createElement('UL')
		ulNode.setAttribute('class', 'md-nav__list');
		containerLiNode.appendChild(ulNode);
		cursorNode = ulNode;
		parentLevel = newLevel;
	}

	if (diff < 0) {
		while (0 !== diff++) {
			cursorNode = cursorNode.parentNode.parentNode;
		}
		parentLevel = newLevel;
	}

	var liNode = document.createElement('LI');
	liNode.setAttribute('class', 'md-nav__item');
	if (!(currentHeading.hasAttribute('id'))) {
    tocn++;
    currentHeading.setAttribute('id', "toc"+tocn);
  }
	var link = document.createElement('A');
	link.setAttribute('href', '#' + currentHeading.getAttribute('id'));
	link.setAttribute('class', 'md-nav__link');
	link.appendChild(document.createTextNode(currentHeading.textContent))
	liNode.appendChild(link);
	cursorNode.appendChild(liNode);
}
