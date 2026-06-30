// Находим элементы на странице
const originalPriceInput = document.getElementById('originalPrice');
const discountPercentInput = document.getElementById('discountPercent');
const calculateBtn = document.getElementById('calculateBtn');
const finalPriceSpan = document.getElementById('finalPrice');
const discountAmountSpan = document.getElementById('discountAmount');

// Функция расчёта скидки
function calculateDiscount() {
    // Получаем значения из полей ввода
    const originalPrice = parseFloat(originalPriceInput.value);
    const discountPercent = parseFloat(discountPercentInput.value);

    // Проверяем, что значения корректные
    if (isNaN(originalPrice) || originalPrice <= 0) {
        alert('Пожалуйста, введите корректную цену (больше 0)');
        return;
    }

    if (isNaN(discountPercent) || discountPercent < 0 || discountPercent > 100) {
        alert('Пожалуйста, введите процент скидки от 0 до 100');
        return;
    }

    // Вычисляем сумму скидки и итоговую цену
    const discountAmount = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - discountAmount;

    // Отображаем результат
    finalPriceSpan.textContent = finalPrice.toFixed(2);
    discountAmountSpan.textContent = discountAmount.toFixed(2);
}

// Обработчик события (клик по кнопке)
calculateBtn.addEventListener('click', calculateDiscount);

// Дополнительно: расчёт при нажатии Enter на любом поле ввода
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateDiscount();
    }
});
