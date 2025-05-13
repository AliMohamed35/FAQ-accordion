document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.exp');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const paragraph = this.closest('.tile').querySelector('.paragraph');
            paragraph.classList.toggle('show');
        });
    });
});