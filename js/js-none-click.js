
document.addEventListener('DOMContentLoaded', function () {
    var hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(function (element) {
        element.style.display = 'none';
    });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });


    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && (e.key === 'U' || e.key === 'C'))) {
            e.preventDefault();
        }
    });
});
