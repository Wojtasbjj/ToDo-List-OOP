class ItemList {
    constructor() {
        this.myItems = [];
        document.querySelector('button').addEventListener('click', this.addLi.bind(this));
        document.getElementById('deleteBtn').addEventListener('click', this.deleteLi.bind(this));
        this.inputText = document.querySelector('input');
        this.ulElement = document.getElementById('liList')
        // this.myItemJson = JSON.stringify(this.myItems, null, 4);
        
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

       firebase
        .firestore()
        .collection(`todo`)
        .doc('toDoList')
        .set({
            todo: this.myItems
        })

    //    this.myItemJson = JSON.stringify(this.myItems, null, 4);
    //    console.log(this.myItemJson);
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
    firebase
        .firestore()
        .collection(`todo`)
        .doc('toDoList')
        .set({
            todo: this.myItems
        })
}

renderUl () {
    console.log('wywołane z constructor')
    console.log(this.myItems)
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

showToDo () {
    console.log('metoda showToDo')
    console.log(firebase
        .firestore()
        .collection(`todo`)
        .doc('toDoList'[1]))
}

getToDo () {
        
        firebase
        .firestore()
        .collection(`todo`)
        .doc('toDoList')
        .get()
        .then((doc) => {
            console.log(doc.data())
            let toDoList = doc.data();
            console.log(toDoList.todo);
            this.myItems = toDoList.todo;
        })
}

// inicialRefresh () {
//     this.getToDo();

// }

}
const liItem = new ItemList();
liItem.getToDo();
liItem.renderUl();

