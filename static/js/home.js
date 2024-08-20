

const browseDropdown = document.getElementById("browse");
const browseDropdownContent = document.getElementById("dropdown-search-content");

browseDropdown.addEventListener("click", function(){
    if (browseDropdownContent.style.display === "none" || browseDropdownContent.style.display === "") {
        browseDropdownContent.style.display = "flex";
    } else {
        browseDropdownContent.style.display = "none";
    }
});

// settings account popup

function settings() {
    const settingsContent = document.getElementById("settings-content");
    const close = document.getElementById("close");

    if (settingsContent.style.display === "none" || settingsContent.style.display === "") {
        settingsContent.style.display = "flex";
    }
    
     else {
        settingsContent.style.display = "none";
    }

    close.addEventListener("click", function(){
        settingsContent.style.display = "none";
    });
}






const catalogDropdown = document.getElementById("catalog");
const catalogDropdownContent = document.getElementById("dropdown-catalog");

catalogDropdown.addEventListener("click", function(){
    if (catalogDropdownContent.style.display === "none" || catalogDropdownContent.style.display === "") {
        catalogDropdownContent.style.display = "flex";
    } else {
        catalogDropdownContent.style.display = "none";
    }
});



const previousContent = document.getElementById("left-change");
const nextContent = document.getElementById("right-change");
const content = document.getElementsByClassName("book-card");

let currentIndex = 0;
const itemsPerPage = 3;

// Function to update the display of the content
function updateDisplay() {
  for (let i = 0; i < content.length; i++) {
    if (i >= currentIndex && i < currentIndex + itemsPerPage) {
      content[i].style.display = "flex";
    } else {
      content[i].style.display = "none";
    }
  }
}


updateDisplay();

nextContent.addEventListener("click", function() {
  if (currentIndex + itemsPerPage < content.length) {
    currentIndex += itemsPerPage;
    updateDisplay();
  }
});

previousContent.addEventListener("click", function() {
  if (currentIndex - itemsPerPage >= 0 || currentIndex - itemsPerPage === -1) {
    currentIndex -= itemsPerPage;
    updateDisplay();
  }
});





