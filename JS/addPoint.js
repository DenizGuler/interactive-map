function addNode(n, e, name, content) {
    let t = (35 - 50) / (42.359 - 16.870) * (parseInt(n) - 16.870) + 50,
        l = (50 - 27) / (11.053 + 71.531) * (parseInt(e) - 11.053) + 50,
        node = document.createElement("DIV"),
        nodeTxt = document.createElement("DIV"),
        nodeH1 = document.createElement("H1"),
        nodeLB = document.createElement("DIV"),
        nodeP = document.createElement("P");
    node.className = "node";
    console.log("(" + n + ", " + e + "): " + t + "%, " + l + "%\n");
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
}

function useForm() {
    let n = document.getElementById("n-input").value,
        e = document.getElementById("e-input").value,
        name = document.getElementById("name-input").value,
        content = document.getElementById("content-input").value;
    addNode(n, e, name, content);
    document.getElementById("n-input").value = "";
    document.getElementById("e-input").value = "";
    document.getElementById("name-input").value = "";
    document.getElementById("content-input").value = "";
}


function showMenu() {
    document.getElementById("add-menu").style.display = "block";
    document.getElementById("open-menu").style.display = "none";
}

function hideMenu() {
    document.getElementById("add-menu").style.display = "none";
    document.getElementById("open-menu").style.display = "block";
}