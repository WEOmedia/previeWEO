window.addEventListener("load",setupStyles);

function setupStyles() {
//create a link element for the page view styleSheets
var pageStyle = document.createElement('link');
 pageStyle.href = '"../tpn/c/C969/docs/" + id + ".css"';
 pageStyle.type = 'text/css';
 pageStyle.rel = 'stylesheet';
 pageStyle.id = 'color-switch';
//append the link element to the document head
document.head.appendChild(pageStyle);
}