function addNode(t, l) {
    let node = document.createElement("DIV"),
        nodeTxt = document.createElement("DIV"),
        nodeH1 = document.createElement("H1"),
        nodeLB = document.createElement("DIV"),
        nodeP = document.createElement("P");
    node.className = "node";
    node.style.top = t + "%";
    node.style.left = l + "%";
    nodeTxt.className = "node-txt";
    nodeH1.innerHTML = "" + name;
    nodeLB.className = "line-break";
    nodeP.innerHTML = "" + content;
    nodeTxt.appendChild(nodeH1);
    nodeTxt.appendChild(nodeLB);
    nodeTxt.appendChild(nodeP);
    node.appendChild(nodeTxt);
    document.getElementById("node-container").appendChild(node);
    return;
}


function addNode(t, l, name, content) {
    let node = document.createElement("DIV"),
        nodeTxt = document.createElement("DIV"),
        nodeH1 = document.createElement("H1"),
        nodeLB = document.createElement("DIV"),
        nodeP = document.createElement("P");
    node.className = "node";
    node.style.top = t + "%";
    node.style.left = l + "%";
    nodeTxt.className = "node-txt";
    nodeH1.innerHTML = "" + name;
    nodeLB.className = "line-break";
    nodeP.innerHTML = "" + content;
    nodeTxt.appendChild(nodeH1);
    nodeTxt.appendChild(nodeLB);
    nodeTxt.appendChild(nodeP);
    node.appendChild(nodeTxt);
    document.getElementById("node-container").appendChild(node);
    return;
}

function addNodeLatLong(n, e, name, content) {
    let t = (35 - 50) / (42.359 - 16.870) * (parseInt(n) - 16.870) + 50,
        l = (50 - 27) / (11.053 + 71.531) * (parseInt(e) - 11.053) + 50;
    addNode(t, l, name, content);
}

function useForm() {
    let t = document.getElementById("n-input").value,
        l = document.getElementById("e-input").value,
        name = document.getElementById("name-input").value,
        content = document.getElementById("content-input").value;
    addNode(t, l, name, content);
    document.getElementById("n-input").value = "";
    document.getElementById("e-input").value = "";
    document.getElementById("name-input").value = "";
    document.getElementById("content-input").value = "";
    hideMenu();
}


function showMenu(t, l) {
    document.getElementById("add-menu").style.display = "block";
    document.getElementById("open-menu").style.display = "none";
    document.getElementById("n-input").value = t;
    document.getElementById("e-input").value = l;
}

function hideMenu() {
    document.getElementById("add-menu").style.display = "none";
    document.getElementById("open-menu").style.display = "block";
}

function pointAndClick() {
    let mouseX = 0, px = 0, nx = 0,
        mouseY = 0, py = 0, ny = 0,
        floating = document.getElementById("floating-node"),
        container = document.getElementById("container"),
        containerStyle = getComputedStyle(container),
        floatingSytle = getComputedStyle(floating);
    floating.style.display = "block";
    var floatingPos = setInterval(function () {
        py = mouseY - parseFloat(containerStyle.marginTop) - (2 * parseFloat(floatingSytle.height) / 3);
        px = mouseX - parseFloat(containerStyle.marginLeft) - (3 * parseFloat(floatingSytle.width) / 2);
        py = py / parseFloat(containerStyle.height) * 100;
        px = px / parseFloat(containerStyle.width) * 100;
        floating.style.top = py + "%";
        floating.style.left = px + "%";
    }, 15);
    document.onmousemove = function (e) {
        mouseX = e.pageX
        mouseY = e.pageY;
    }
    document.onmouseup = function () {
        ny = py;
        nx = px;
        clearInterval(floatingPos);
        showMenu(ny, nx);
        floating.style.display = "none";
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function undoAdd() {
    let nodeList = document.getElementsByClassName("node"),
        lastNode = nodeList[nodeList.length - 1];
    lastNode.parentNode.removeChild(lastNode);
}