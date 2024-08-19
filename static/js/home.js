

const browseDropdown = document.getElementById("browse");
const browseDropdownContent = document.getElementById("dropdown-search-content");

browseDropdown.addEventListener("click", function(){
    if (browseDropdownContent.style.display === "none" || browseDropdownContent.style.display === "") {
        browseDropdownContent.style.display = "flex";
    } else {
        browseDropdownContent.style.display = "none";
    }
});

