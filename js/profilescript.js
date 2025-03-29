function switchTab(tab) {
    const tabs = document.querySelectorAll('.profile__slide-tab');
    

    tabs.forEach(el => {
        el.classList.remove('active');
    });
    
 
    document.querySelectorAll('.profile__slide-collection, .profile__slide-activity').forEach(el => {
        el.style.display = 'none';
    });
    
 
    const activeTab = document.querySelector('.' + tab);
    activeTab.style.display = 'block';
    
   
    const activeButton = document.querySelector(`[onclick="switchTab('${tab}')"]`);
    activeButton.classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const activeButton = document.querySelector('.profile__slide-tab.active');
    const activeTab = document.querySelector('.profile__slide-collection'); 
    activeTab.style.display = 'block';
});