// // Menu Mobile Bar
// function menuBar() {
//     const menubar = document.querySelector(".sideBar")
//     menubar.style.display = 'flex'
// }

// // Close Menu Bar
// function closeBar() {
//     const menubar = document.querySelector(".sideBar")
//     menubar.style.display = 'none'
// }

function menuBar() {
    const sideBar = document.querySelector('.sideBar');
    const icon = document.getElementById('bar');

    // Toggle the sidebar visibility
    sideBar.classList.toggle('visible');

    // Toggle the icon from bars to times and vice versa
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function closeBar() {
    const sideBar = document.querySelector('.sideBar');
    const icon = document.getElementById('bar');

    // Remove the visible class to close the sidebar
    sideBar.classList.remove('visible');

    // Change the icon back to bars
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

function toggleSearch() {
    const searchInput = document.getElementById("search-input");
    searchInput.classList.toggle("active");
    searchInput.focus();
}
