var selectedRow = null;

// data after inserted
function formSubmit(e) {
    event.preventDefault();

    var formData = readData();

    if (selectedRow === null) {
        dataUpdate(formData);
    } else {
        updateRecord(formData);
    }
}

function readData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["author"] = document.getElementById("author").value; 
    formData["description"] = document.getElementById("description").value;
    formData["category"] = document.getElementById("category").value;
    formData["file"] = document.getElementById("file").value;

    return formData;
}

// updating data

function dataUpdate(data) {
    var table = document.getElementById("tableUpdate").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cellOne = newRow.insertCell(0);
        cellOne.innerHTML = data.title;

    var cellTwo = newRow.insertCell(1);
        cellTwo.innerHTML = data.author;

    var cellThree = newRow.insertCell(2);
        cellThree.innerHTML = data.description;

    var cellFour = newRow.insertCell(3);
        cellFour.innerHTML = data.category;

    var cellFive = newRow.insertCell(4);
        cellFive.innerHTML = data.file;

    var cellSix = newRow.insertCell(5);
        cellSix.innerHTML = '<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete </button>';
}

// function to edit the content
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('title').value = selectedRow.cells[0].innerHTML;
    document.getElementById('author').value = selectedRow.cells[1].innerHTML;
    document.getElementById('description').value = selectedRow.cells[2].innerHTML;
    document.getElementById('category').value = selectedRow.cells[3].innerHTML;
    document.getElementById('file').value = selectedRow.cells[4].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.author;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.category;
    selectedRow.cells[4].innerHTML = formData.file;
}

// function to delete the content
function onDelete(td) {
    if(confirm('Do you want to delete the content?')) {
        row = td.parentElement.parentElement;
        document.getElementById('tableUpdate').deleteRow(row.rowIndex);
    }
}

