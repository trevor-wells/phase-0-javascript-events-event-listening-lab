function addingEventListener() {
    document.querySelector("#button").addEventListener("click" , e => e.target.parentNode.remove())
}

addingEventListener()