window.addEventListener("load",setupStyles);

function setupStyles() {
//create a link element for the page view styleSheets
var pageStyle = document.createElement('link');
 pageStyle.rel = 'stylesheet';
 pageStyle.type = 'text/css';
 pageStyle.id = 'color-switch';
 pageStyle.href = '../tpn/c/C969/docs/main.css';
//append the link element to the document head
document.head.appendChild(pageStyle);
}
