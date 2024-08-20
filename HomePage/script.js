function toggleDays(weekId) {
    const days = document.getElementById(weekId);
    days.style.display = days.style.display === 'block' ? 'none' : 'block';
}

function showActivity(identifier) {
    const modal = document.getElementById('activity-modal');
    const content = document.getElementById('activity-content');

    if (identifier.endsWith('.html')) {
        fetch(identifier)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                modal.style.display = 'flex';
            })
            .catch(error => console.error('Erro ao carregar a atividade:', error));
    } else {
        content.innerHTML = `<h3>Conteúdo da ${identifier}</h3><p>Aqui vai o código ou a descrição da atividade.</p>`;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('activity-modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('activity-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
