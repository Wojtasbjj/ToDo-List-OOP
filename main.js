class AddLiItem {
    constructor() {
        const addButton = document.querySelector("button");

        const addItem = function() {
            console.log('działa')

            addButton.addEventListener("click", addItem);
        }
    }
}




