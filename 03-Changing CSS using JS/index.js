const inputs=document.querySelectorAll('.controls input');
function update(){
    const suffix=this.dataset.sizing || '';//dodanie lub nic jest dla ostatniego inputa bo do niego nie potrzebujemy px
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);//wybieramy cały document bo ":root" odpowiada całemu dokumentowi
}
inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('mousemove',update));
