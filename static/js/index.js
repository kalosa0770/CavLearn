

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

    sideBar.classList.remove('visible');
  
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

document.getElementById('faSearch').addEventListener('click', function() {
    document.getElementById('searchForm').submit();
});

document.querySelector('input[name="query"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  
        document.getElementById('searchForm').submit();
    }
});

document.getElementById('courses').addEventListener('change', function() {
    // Hide all content divs
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Get the selected value
    var selectedCourse = this.value;

    // Show the content corresponding to the selected course
    if (selectedCourse) {
        var contentToShow = document.getElementById(selectedCourse);
        if (contentToShow) {
            contentToShow.style.display = 'block';
        }
    }
});
