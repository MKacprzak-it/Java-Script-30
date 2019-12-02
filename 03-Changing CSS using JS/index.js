const inputs=document.querySelectorAll('.controls input');
function update(){
    const suffix=this.dataset.sizing || '';//dodanie lub nic jest dla ostatniego inputa bo do niego nie potrzebujemy px
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);//wybieramy cały document bo ":root" odpowiada całemu dokumentowi
}
inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('mousemove',update));

let degreeX=0;
function rotatingX(){
    degreeX+=5;
    const suffix1=document.querySelector('.title').dataset.sizing;
    document.documentElement.style.setProperty(`--degreeX`,degreeX+suffix1);
}
setInterval(rotatingX,60);