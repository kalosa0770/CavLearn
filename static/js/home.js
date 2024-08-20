

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




