function newItem() {

    // Add new item to the List using JavaScript
    // let li = document.createElement('li');
    // let inputValue = document.querySelector('input').value;
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);

    // // Check for input text not to be empty
    // if(inputValue ==='') {
    //     alert('You must write something!')
    // } else {
    //     let list = document.querySelector('#list');
    //     list.appendChild(li);
    // }

    // // Crossing out item from the List
    // function crossOut() {
    //     li.classList.toggle('strike');
    // }

    // li.addEventListener('dblclick', crossOut);

    // // Add the delete button "X"
    // let crossOutButton = document.createElement('crossOutButton');
    // crossOutButton.appendChild(document.createTextNode('X'));
    // li.appendChild(crossOutButton);

    // // Add event listener to delete list item
    // crossOutButton.addEventListener('click', deleteListItem);
    // function deleteListItem(){
    //     li.classList.add('delete');
    // }

    // // Reordering the list
    // $('#list').sortable();

    // jQuery code
    
    // Add new item to the list
    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    // Check for input not to be empty
    if(inputValue === '') {
        alert('You must write something!');
    } else {
        list.append(li);
    }

    // Cross out list from item
    li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

    // Add the delete button "X"
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);

    // Add eventListener to delete list item
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }

    $('#list').sortable();
}