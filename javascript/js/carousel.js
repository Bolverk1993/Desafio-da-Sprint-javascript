

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image,title, link){
        this.image = image;
        this.title = title;
        this.link = link;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._createNavigationButtons();
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

// Cria os botões de navegação
static _createNavigationButtons() {
    const carouselElement = document.getElementById('carousel');
    
    // Botão anterior
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-btn prev';
    prevBtn.innerHTML = '❮';
    prevBtn.addEventListener('click', function() {
        clearInterval(Carousel._interval); // Para a troca automática
        Carousel.Prev();
        // Reinicia o intervalo
        Carousel._interval = setInterval(function(){ 
            Carousel.Next(); 
        }, 2000);
    });
    
    // Botão próximo
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-btn next';
    nextBtn.innerHTML = '❯';
    nextBtn.addEventListener('click', function() {
        clearInterval(Carousel._interval); // Para a troca automática
        Carousel.Next();
        // Reinicia o intervalo
        Carousel._interval = setInterval(function(){ 
            Carousel.Next(); 
        }, 2000);
    });
    
    carouselElement.appendChild(prevBtn);
    carouselElement.appendChild(nextBtn);
}

// Mostra o próximo item
static Next() {
    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    Carousel._showCurrentItem();
}

// Mostra o item anterior
static Prev() {
    Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
    Carousel._showCurrentItem();
}

// Mostra o item atual
static _showCurrentItem() {
    const carouselElement = document.getElementById('carousel');
    const titleElement = document.getElementById('carousel-title');
    const currentItem = carouselArr[Carousel._sequence];
    
    // Cria a estrutura do slide
    carouselElement.innerHTML = `
        <a href="${currentItem.link}">
            <img src="${currentItem.image}" alt="${currentItem.title}" class="carousel-image">
        </a>
    `;
    
    titleElement.innerHTML = `
    <a href="${currentItem.link}">
    <h2>${currentItem.title}</h2>
        </a>
        
    `;
    
    // Recria os botões (pois o innerHTML acima os removeu)
    Carousel._createNavigationButtons();
}
}