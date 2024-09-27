document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('asset/orther/headerstyle.add')
        .then(response => response.text())
        .then(data => {
            document.getElementById('head').innerHTML += data;
        })
        .catch(error => console.error('Error loading header:', error));
});