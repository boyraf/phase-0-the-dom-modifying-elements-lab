// Write your code here!
let main = document.querySelector('main');
main.remove();
const newHeader = document.createElement("h1");
//document.body.append(newHeader);
//newHeader.nodeName = 'h1';
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion'