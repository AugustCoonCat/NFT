function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.collection, .activity').forEach(el => el.style.display = 'none');
    
    document.querySelector('.' + tab).style.display = 'block';
    document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
}