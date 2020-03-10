window.addEventListener("load",setupStyles);

function setupStyles() {
	//create a link element for the page view styleSheets
	var pageStyle = document.createElement("link");
	pageStyle.setAttribute("href", "css/bc_page.css");
	pageStyle.setAttribute("rel", "stylesheet");	
	//append the link element to the document head
	document.head.appendChild(pageStyle);
}
