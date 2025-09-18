// Getting % sign for proficiency skills
document.querySelectorAll('.fill').forEach(fill =>{
    const percent = fill.getAttribute('data-percent');
    fill.style.setProperty('--percent',percent + '%');
    fill.querySelector('span').textContent = percent + '%';
});

// Dragging and dropping reordering of skills
const skillsContainer = document.querySelector('.skills-container');
let dragging;

document.querySelectorAll('.skill-card').forEach(card =>{
    card.addEventListener('dragstart', () =>{
        dragging = card;
        setTimeout(() => card.classList.add('dragging'), 0);
    });

    card.addEventListener('dragend',() =>{
        dragging.classList.remove('dragging');
        dragging = null;
    });
});

skillsContainer.addEventListener('dragover', e =>{
    e.preventDefault();
    const afterElement = getDragAfterElement(skillsContainer, e.clientY);
    if(afterElement == null){
        skillsContainer.appendChild(dragging);
    }else{
        skillsContainer.insertBefore(dragging, afterElement);
    }
});

function getDragAfterElement(container, y){
    const elements = [...container.querySelectorAll('.skill-card:not(dragging)')]
    return elements.reduce((closest, child) =>{
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if(offset < 0 && offset > closest.offset){
            return{offset, element: child};
        }else{
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element
}
