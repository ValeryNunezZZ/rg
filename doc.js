const resaltado = document.querySelectorAll(".resaltado");
const darklayer = document.querySelector(".dark-layer");

resaltado[0].addEventListener("click", ()=>{

    darklayer.classList.toggle('hidden');

    darklayer.innerHTML = `
    <div id="vale-container" class="mini-container">
        <div class="ham">
            <img src="./img/food.png">
        </div>

        <div class="vale-text">
            <span>Good</span> for one hamburger</div>

        <input onclick="cerrar()" class="boton" type="button" value="X">
    </div>`;
});

resaltado[1].addEventListener("click", ()=>{

    darklayer.classList.toggle('hidden');

    darklayer.innerHTML = `
    <div class="mini-container">
        <div class="nosotros">
            <img src="./img/nosotros.JPG">
        </div>
        <p>Alex y Valery</p>
        <div class="corazon">
            <img src="./img/corazon.png">
        </div>

        <input onclick="cerrar()" class="boton" type="button" value="X">
    </div>`;
});

function cerrar(){
    darklayer.classList.toggle('hidden');
}