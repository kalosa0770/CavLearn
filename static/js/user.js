function showContent(section) {
    // Hide all content sections
    document.getElementById('library-content').style.display = 'none';
    document.getElementById('catalog-content').style.display = 'none';
    document.getElementById('membership-content').style.display = 'none';

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.library button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected content and add active class to the clicked button
    document.getElementById(section + '-content').style.display = 'block';
    event.target.classList.add('active');
}
