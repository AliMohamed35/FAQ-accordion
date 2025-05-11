document.addEventListener("DOMContentLoaded", () => {
    expanding = document.getElementById('exp');
    console.log('this is the button', expanding)
    expanding.addEventListener('click', function () {
        if (document.documentElement.classList.contains('show')) {
            document.documentElement.classList.remove('show');
        } else {
            document.documentElement.classList.add('show');
        }
    })
})