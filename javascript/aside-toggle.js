const toggleButton = document.getElementById('close-button');
const aside = document.getElementsByTagName('aside')[0];
const codeSection = document.getElementById('code');
const asideHeader = document.getElementById('aside-header');

toggleButton.onclick = function() {
    if (toggleButton.style.transform === 'rotate(180deg)') {
        toggleButton.style.transform = 'rotate(0deg)';
        
        toggleVisibility(false);
        
        aside.classList.remove('collapsed');
        codeSection.classList.replace('col-md-11', 'col-md-9');
    } else {
        toggleButton.style.transform = 'rotate(180deg)';
        
        toggleVisibility(true);
        
        aside.classList.add('collapsed');
        codeSection.classList.replace('col-md-9', 'col-md-11');
    }
};

function toggleVisibility(isCurrentlyVisible) {
    const asideElements = aside.children;
    for (let i = 0; i < asideElements.length; i++) {
        if (asideElements[i].id === 'close-button' || asideElements[i].id === 'aside-header') {
            asideHeader.getElementsByTagName('h1')[0].style.display = isCurrentlyVisible ? 'none' : 'block';
            continue;
        }
        if (isCurrentlyVisible) {
            asideElements[i].style.setProperty('display', 'none', 'important');
        } else {
            asideElements[i].style.setProperty('display', 'block', 'important');
        }
    }
}