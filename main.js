class ItemList {
    constructor() {
        this.myItems = ["asd", "123", "456", "wojtek", "masło"];
        document.querySelector('button').addEventListener('click', this.addLi.bind(this));
        document.getElementById('deleteBtn').addEventListener('click', this.deleteLi.bind(this));
        this.inputText = document.querySelector('input');
        this.ulElement = document.getElementById('liList')
        this.myItemJson = JSON.stringify(this.myItems, null, 4);
    }

save () {
    console.log(this.myItemJson)
}

addLi () {
    if (this.inputText.value == "") {
        alert('Wprowadź text')
        return
    }
    
    if(this.myItems.includes(this.inputText.value)) {
        alert('taki task już istnieje !')
        this.inputText.value = ""
        return;
    }

    this.myItems.push(this.inputText.value);

    let index = 0;
    this.liElement = document.createElement('li');
    this.doneChck = document.createElement("input");
    this.doneChck.type = 'checkbox'
    this.doneChck.className = 'doneChck';
    this.inputText.value = "";

    this.myItems.forEach((toDoElement, index) => {
        this.liElement.textContent = toDoElement;
        this.ulElement.appendChild(this.liElement);
        this.liElement.appendChild(this.doneChck);
        this.liElement.setAttribute('id', [index])
        this.doneChck.setAttribute('id', [index])
       })
       this.myItemJson = JSON.stringify(this.myItems, null, 4);
       console.log(this.myItemJson);
}

deleteLi () {

    this.chckAll = [...document.querySelectorAll('.doneChck')];
    
    for(let i=0; i<=this.chckAll.length; i++) {

        for (let i=0; i<this.chckAll.length; i++) {
            if (this.chckAll[i].checked == true) {
                console.log(this.chckAll[i]);
                let deleteItem = this.chckAll[i].id;
                console.log(`id usunietego elementu to: ${deleteItem}`)
                this.chckAll.splice(i, 1);
                this.myItems.splice(i, 1);
                this.ulElement.removeChild(this.ulElement.childNodes[i]);
            }
        }
    }
}

renderUl () {

    this.myItems.forEach((toDoElement, index) => {
        this.liElement = document.createElement('li');
        this.doneChck = document.createElement("input");
        this.doneChck.type = 'checkbox'
        this.doneChck.className = 'doneChck';
        this.liElement.setAttribute('id', [index])
        this.doneChck.setAttribute('id', [index])
        this.liElement.textContent = toDoElement;
        this.ulElement.appendChild(this.liElement);
        this.liElement.appendChild(this.doneChck);
       })

}

}
const liItem = new ItemList();
liItem.renderUl()

