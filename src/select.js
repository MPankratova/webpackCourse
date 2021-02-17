
function programSelection(event) {
    let targetId = event.target.id;
    let tabcontent = document.getElementsByClassName('tabcontent');
        for (let i = 0; i < tabcontent.length; i++) {
            if (targetId == tabcontent[i].name) {
                tabcontent[i].style.display = 'block';
            } else {
                tabcontent[i].style.display = 'none';
            }
    }
}

export { programSelection };