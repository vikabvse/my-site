// Массив URL-адресов изображений 
const images = [
    'img/kreatif1.jpg',
    'img/kreatif2.jpg',
    'img/kreatif4.jpg',
    
];
// Находим элементы на странице
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');
// Текущий индекс изображения (начинаем с 0)
let currentIndex = 0;
// Функция обновления изображения
function updateImage(index) {
    sliderImage.src = images[index];
    imageCounter.textContent = `${index + 1} / ${images.length}`;
}
// Обработчики событий
nextBtn.addEventListener('click', function() {
    // Переход к следующему изображению (с зацикливанием)
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

prevBtn.addEventListener('click', function() {
    // Переход к предыдущему изображению (с зацикливанием)
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

// Инициализация (показываем первое изображение)
updateImage(currentIndex);
