// Getting % sign for proficiency skills
document.querySelectorAll('.fill').forEach(fill =>{
    if(!fill)return;
    const percent = fill.getAttribute('data-percent');
    fill.style.setProperty('--percent', percent+'%');
    fill.querySelector('span').textContent = percent + '%';
});

document.querySelectorAll('.skill-card').forEach(card =>{
    const fill = card.querySelector('.fill');
    if(!fill)return;
    const percent = fill.getAttribute('data-percent');

    card.addEventListener('mouseleave', () => {
        fill.style.width = '0%';
        fill.querySelector('span').textContent = '';
    });

    card.addEventListener('mouseenter', () => {
        fill.style.width = percent + '%';
        fill.querySelector('span').textContent = percent + '%';
    });
});

const facts = ["Built and raced an autonomous boat around UCF reflection pond",
                        "Enjoy designing circuits and tinkering with FPGA in vivado",
                        "I have played golf since I was 6 years old",
                        "I am can speak Finnish and have visited Finland every summer"];

let usedFact = [];
document.getElementById("factButton").addEventListener("click", () => {
    const currentFactEl = document.getElementById("currentFact");
    const factListEl = document.getElementById("factList");

    if(currentFactEl.textContent && currentFactEl.textContent !== "Click the button to see the fact" && currentFactEl.textContent !== "All facts are shown!"){
        const li = document.createElement("li");
        li.textContent  = currentFactEl.textContent;
        factListEl.appendChild(li);
        usedFact.push(currentFactEl.textContent);
    }

    const availableFacts = facts.filter(f => !usedFact.includes(f));

    if(availableFacts.length > 0){
        const randomIndex = Math.floor(Math.random() * availableFacts.length);
        currentFactEl.textContent = availableFacts[randomIndex];
    }else{
        currentFactEl.textContent = "All facts are shown!"
    }
});

const leverToggle = document.getElementById('leverToggle');

if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('dark-mode');
    leverToggle.classList.add('active');
}
leverToggle.addEventListener('click', () => {
    leverToggle.classList.toggle('active');

    if(leverToggle.classList.contains('active')){
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }

});