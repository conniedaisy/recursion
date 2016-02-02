// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//getElementsByClassName: returns array-like object of all child elements with the given class names
//document.body: returns <body> of the current document
//element.childNodes: read-only property that returns a live colleciton of child nodes of the given element
//element.classList: read-only property that returns a live DOMTokenList of the class attributes of the element

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var nodes = [];
 
  var checkElementsByClassName = function(node) {
    if(node.classList && node.classList.contains(className)) {
      nodes.push(node);
    }

    node = node.firstChild;

    while (node) {
      checkElementsByClassName(node);
      node = node.nextSibling;
    }
  };

  checkElementsByClassName(document.body);
  return nodes;
};
