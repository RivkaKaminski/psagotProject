
function movePage() {
    document.querySelectorAll('nav h2').forEach(item => {
        item.addEventListener('click', event => {
            if (item.innerText === 'כלי כתיבה') {
                window.location.href = '../html/stationery.html'; // עדכן את הכתובת לעמוד הראשון
            } else if (item.innerText === 'מחברות') {
                window.location.href = '../html/notebooks.html'; // עדכן את הכתובת לעמוד השני
            }
        });
    });
}

movePage();