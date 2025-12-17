// Данные об элементах
const elementsData = [
    // Период 1
    { symbol: 'H', name: 'Водород', number: 1, mass: '1.008', group: 1, period: 1, type: 'nonmetal' },
    { symbol: 'He', name: 'Гелий', number: 2, mass: '4.0026', group: 18, period: 1, type: 'noble-gas' },
    
    // Период 2
    { symbol: 'Li', name: 'Литий', number: 3, mass: '6.94', group: 1, period: 2, type: 'alkali-metal' },
    { symbol: 'Be', name: 'Бериллий', number: 4, mass: '9.0122', group: 2, period: 2, type: 'alkaline-earth-metal' },
    { symbol: 'B', name: 'Бор', number: 5, mass: '10.81', group: 13, period: 2, type: 'metalloid' },
    { symbol: 'C', name: 'Углерод', number: 6, mass: '12.011', group: 14, period: 2, type: 'nonmetal' },
    { symbol: 'N', name: 'Азот', number: 7, mass: '14.007', group: 15, period: 2, type: 'nonmetal' },
    { symbol: 'O', name: 'Кислород', number: 8, mass: '15.999', group: 16, period: 2, type: 'nonmetal' },
    { symbol: 'F', name: 'Фтор', number: 9, mass: '18.998', group: 17, period: 2, type: 'halogen' },
    { symbol: 'Ne', name: 'Неон', number: 10, mass: '20.180', group: 18, period: 2, type: 'noble-gas' },
    
    // Период 3
    { symbol: 'Na', name: 'Натрий', number: 11, mass: '22.990', group: 1, period: 3, type: 'alkali-metal' },
    { symbol: 'Mg', name: 'Магний', number: 12, mass: '24.305', group: 2, period: 3, type: 'alkaline-earth-metal' },
    { symbol: 'Al', name: 'Алюминий', number: 13, mass: '26.982', group: 13, period: 3, type: 'post-transition-metal' },
    { symbol: 'Si', name: 'Кремний', number: 14, mass: '28.085', group: 14, period: 3, type: 'metalloid' },
    { symbol: 'P', name: 'Фосфор', number: 15, mass: '30.974', group: 15, period: 3, type: 'nonmetal' },
    { symbol: 'S', name: 'Сера', number: 16, mass: '32.06', group: 16, period: 3, type: 'nonmetal' },
    { symbol: 'Cl', name: 'Хлор', number: 17, mass: '35.45', group: 17, period: 3, type: 'halogen' },
    { symbol: 'Ar', name: 'Аргон', number: 18, mass: '39.948', group: 18, period: 3, type: 'noble-gas' },
    
    // Период 4
    { symbol: 'K', name: 'Калий', number: 19, mass: '39.098', group: 1, period: 4, type: 'alkali-metal' },
    { symbol: 'Ca', name: 'Кальций', number: 20, mass: '40.078', group: 2, period: 4, type: 'alkaline-earth-metal' },
    { symbol: 'Sc', name: 'Скандий', number: 21, mass: '44.956', group: 3, period: 4, type: 'transition-metal' },
    { symbol: 'Ti', name: 'Титан', number: 22, mass: '47.867', group: 4, period: 4, type: 'transition-metal' },
    { symbol: 'V', name: 'Ванадий', number: 23, mass: '50.942', group: 5, period: 4, type: 'transition-metal' },
    { symbol: 'Cr', name: 'Хром', number: 24, mass: '51.996', group: 6, period: 4, type: 'transition-metal' },
    { symbol: 'Mn', name: 'Марганец', number: 25, mass: '54.938', group: 7, period: 4, type: 'transition-metal' },
    { symbol: 'Fe', name: 'Железо', number: 26, mass: '55.845', group: 8, period: 4, type: 'transition-metal' },
    { symbol: 'Co', name: 'Кобальт', number: 27, mass: '58.933', group: 9, period: 4, type: 'transition-metal' },
    { symbol: 'Ni', name: 'Никель', number: 28, mass: '58.693', group: 10, period: 4, type: 'transition-metal' },
    { symbol: 'Cu', name: 'Медь', number: 29, mass: '63.546', group: 11, period: 4, type: 'transition-metal' },
    { symbol: 'Zn', name: 'Цинк', number: 30, mass: '65.38', group: 12, period: 4, type: 'transition-metal' },
    { symbol: 'Ga', name: 'Галлий', number: 31, mass: '69.723', group: 13, period: 4, type: 'post-transition-metal' },
    { symbol: 'Ge', name: 'Германий', number: 32, mass: '72.630', group: 14, period: 4, type: 'metalloid' },
    { symbol: 'As', name: 'Мышьяк', number: 33, mass: '74.922', group: 15, period: 4, type: 'metalloid' },
    { symbol: 'Se', name: 'Селен', number: 34, mass: '78.971', group: 16, period: 4, type: 'nonmetal' },
    { symbol: 'Br', name: 'Бром', number: 35, mass: '79.904', group: 17, period: 4, type: 'halogen' },
    { symbol: 'Kr', name: 'Криптон', number: 36, mass: '83.798', group: 18, period: 4, type: 'noble-gas' },
    
    // Дополнительные элементы для 53 штук
    { symbol: 'Rb', name: 'Рубидий', number: 37, mass: '85.468', group: 1, period: 5, type: 'alkali-metal' },
    { symbol: 'Sr', name: 'Стронций', number: 38, mass: '87.62', group: 2, period: 5, type: 'alkaline-earth-metal' },
    { symbol: 'Y', name: 'Иттрий', number: 39, mass: '88.906', group: 3, period: 5, type: 'transition-metal' },
    { symbol: 'Zr', name: 'Цирконий', number: 40, mass: '91.224', group: 4, period: 5, type: 'transition-metal' },
    { symbol: 'Nb', name: 'Ниобий', number: 41, mass: '92.906', group: 5, period: 5, type: 'transition-metal' },
    { symbol: 'Mo', name: 'Молибден', number: 42, mass: '95.95', group: 6, period: 5, type: 'transition-metal' },
    { symbol: 'Tc', name: 'Технеций', number: 43, mass: '[98]', group: 7, period: 5, type: 'transition-metal' },
    { symbol: 'Ru', name: 'Рутений', number: 44, mass: '101.07', group: 8, period: 5, type: 'transition-metal' },
    { symbol: 'Rh', name: 'Родий', number: 45, mass: '102.91', group: 9, period: 5, type: 'transition-metal' },
    { symbol: 'Pd', name: 'Палладий', number: 46, mass: '106.42', group: 10, period: 5, type: 'transition-metal' },
    { symbol: 'Ag', name: 'Серебро', number: 47, mass: '107.87', group: 11, period: 5, type: 'transition-metal' },
    { symbol: 'Cd', name: 'Кадмий', number: 48, mass: '112.41', group: 12, period: 5, type: 'transition-metal' },
    { symbol: 'In', name: 'Индий', number: 49, mass: '114.82', group: 13, period: 5, type: 'post-transition-metal' },
    { symbol: 'Sn', name: 'Олово', number: 50, mass: '118.71', group: 14, period: 5, type: 'post-transition-metal' },
    { symbol: 'Sb', name: 'Сурьма', number: 51, mass: '121.76', group: 15, period: 5, type: 'metalloid' },
    { symbol: 'Te', name: 'Теллур', number: 52, mass: '127.60', group: 16, period: 5, type: 'metalloid' },
    { symbol: 'I', name: 'Иод', number: 53, mass: '126.90', group: 17, period: 5, type: 'halogen' }
];

// Данные о первооткрывателях
const discoverers = {
    'H': {
        name: 'Генри Кавендиш',
        year: '1766',
        info: 'Английский физик и химик, который впервые выделил водород в чистом виде и описал его свойства. Кавендиш называл водород "горючим воздухом" и проводил эксперименты по его сжиганию.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Henry_Cavendish_portrait.jpg/400px-Henry_Cavendish_portrait.jpg'
    },
    'He': {
        name: 'Пьер Жансен и Джозеф Норман Локьер',
        year: '1868',
        info: 'Гелий был впервые обнаружен как неизвестная желтая спектральная линия солнечного света во время солнечного затмения в Индии. Позже был выделен на Земле Уильямом Рамзаем.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pierre_Jules_C%C3%A9sar_Janssen.jpg/400px-Pierre_Jules_C%C3%A9sar_Janssen.jpg'
    },
    'Li': {
        name: 'Йохан Август Арфведсон',
        year: '1817',
        info: 'Шведский химик, открывший литий при анализе минерала петалита. Название происходит от греческого "литос" (камень), так как элемент был обнаружен в минерале, а не в растительном материале.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Johan_August_Arfwedson.jpg/400px-Johan_August_Arfwedson.jpg'
    },
    // Добавьте данные для остальных элементов по аналогии
};

// Конфигурация легенды
const legendConfig = [
    { type: 'alkali-metal', name: 'Щелочные металлы', color: 'linear-gradient(135deg, #ff9a9e, #fad0c4)' },
    { type: 'alkaline-earth-metal', name: 'Щёлочноземельные металлы', color: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)' },
    { type: 'transition-metal', name: 'Переходные металлы', color: 'linear-gradient(135deg, #84fab0, #8fd3f4)' },
    { type: 'post-transition-metal', name: 'Постпереходные металлы', color: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)' },
    { type: 'metalloid', name: 'Полуметаллы', color: 'linear-gradient(135deg, #d4fc79, #96e6a1)' },
    { type: 'nonmetal', name: 'Неметаллы', color: 'linear-gradient(135deg, #ff9966, #ff5e62)' },
    { type: 'halogen', name: 'Галогены', color: 'linear-gradient(135deg, #fdcbf1, #e6dee9)' },
    { type: 'noble-gas', name: 'Благородные газы', color: 'linear-gradient(135deg, #f093fb, #f5576c)' }
];

// Функция для создания таблицы
function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
    table.innerHTML = '';
    
    // Создаем заголовки групп (римские цифры I-VIII)
    for (let group = 1; group <= 18; group++) {
        const groupLabel = document.createElement('div');
        groupLabel.className = 'group-label';
        
        // Преобразуем номер группы в римскую цифру (для групп 1-8)
        if (group <= 8) {
            groupLabel.textContent = toRoman(group);
        } else if (group >= 13 && group <= 18) {
            // Для групп 13-18 используем обычные числа
            groupLabel.textContent = group;
        } else {
            groupLabel.textContent = '';
        }
        
        table.appendChild(groupLabel);
    }
    
    // Создаем элементы таблицы (4 периода)
    for (let period = 1; period <= 4; period++) {
        // Метка периода
        const periodLabel = document.createElement('div');
        periodLabel.className = 'period-label';
        periodLabel.textContent = period;
        table.appendChild(periodLabel);
        
        // Элементы периода
        for (let group = 1; group <= 18; group++) {
            const elementData = elementsData.find(el => 
                el.group === group && el.period === period
            );
            
            if (elementData) {
                const element = createElement(elementData);
                table.appendChild(element);
            } else {
                // Пустая ячейка
                const emptyCell = document.createElement('div');
                emptyCell.className = 'empty-cell';
                table.appendChild(emptyCell);
            }
        }
    }
    
    // Пятый период для оставшихся элементов
    const periodLabel5 = document.createElement('div');
    periodLabel5.className = 'period-label';
    periodLabel5.textContent = '5';
    table.appendChild(periodLabel5);
    
    for (let group = 1; group <= 18; group++) {
        const elementData = elementsData.find(el => 
            el.group === group && el.period === 5
        );
        
        if (elementData) {
            const element = createElement(elementData);
            table.appendChild(element);
        } else {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'empty-cell';
            table.appendChild(emptyCell);
        }
    }
}

// Функция для создания элемента таблицы
function createElement(data) {
    const element = document.createElement('div');
    element.className = `element ${data.type}`;
    element.dataset.symbol = data.symbol;
    
    element.innerHTML = `
        <div class="element-number">${data.number}</div>
        <div class="element-symbol">${data.symbol}</div>
        <div class="element-name">${data.name}</div>
        <div class="element-mass">${data.mass}</div>
    `;
    
    element.addEventListener('click', () => showElementInfo(data));
    return element;
}

// Функция для показа информации об элементе
function showElementInfo(data) {
    const discoverer = discoverers[data.symbol] || {
        name: 'Дмитрий Иванович Менделеев',
        year: 'Предсказан в 1869',
        info: 'Элемент был предсказан Д.И. Менделеевым на основе его Периодического закона. Подробная информация о первооткрывателе требует дополнительного исследования.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Dmitri_Mendeleev_na.jpg/400px-Dmitri_Mendeleev_na.jpg'
    };
    
    // Заполняем модальное окно
    document.getElementById('modalSymbol').textContent = data.symbol;
    document.getElementById('modalName').textContent = data.name;
    document.getElementById('modalNumber').textContent = data.number;
    document.getElementById('modalMass').textContent = data.mass;
    document.getElementById('modalGroup').textContent = toRoman(data.group <= 8 ? data.group : data.group);
    document.getElementById('modalPeriod').textContent = data.period;
    document.getElementById('discovererName').textContent = discoverer.name;
    document.getElementById('discoveryYear').textContent = discoverer.year;
    document.getElementById('discoveryInfo').textContent = discoverer.info;
    document.getElementById('discovererImage').src = discoverer.image;
    
    // Показываем модальное окно
    document.getElementById('elementModal').style.display = 'flex';
}

// Функция для создания легенды
function createLegend() {
    const legendItems = document.getElementById('legendItems');
    legendItems.innerHTML = '';
    
    legendConfig.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        legendItem.innerHTML = `
            <div class="legend-color" style="background: ${item.color};"></div>
            <span>${item.name}</span>
        `;
        
        legendItems.appendChild(legendItem);
    });
}

// Вспомогательная функция для преобразования в римские цифры
function toRoman(num) {
    const romanNumerals = {
        1: 'I', 2: 'II', 3: 'III', 4: 'IV', 
        5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII'
    };
    return romanNumerals[num] || num;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Создаем таблицу
    createPeriodicTable();
    
    // Создаем легенду
    createLegend();
    
    // Обновляем счетчик элементов
    document.getElementById('elementCount').textContent = elementsData.length;
    
    // Кнопка переключения легенды
    document.getElementById('toggleLegend').addEventListener('click', () => {
        const legend = document.getElementById('legend');
        const button = document.getElementById('toggleLegend');
        
        if (legend.style.display === 'none' || !legend.style.display) {
            legend.style.display = 'block';
            button.innerHTML = '<i class="fas fa-palette"></i> Скрыть легенду';
        } else {
            legend.style.display = 'none';
            button.innerHTML = '<i class="fas fa-palette"></i> Показать легенду';
        }
    });
    
    // Кнопка информации о таблице
    document.getElementById('infoBtn').addEventListener('click', () => {
        document.getElementById('infoModal').style.display = 'flex';
    });
    
    // Закрытие модальных окон
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('elementModal').style.display = 'none';
    });
    
    document.getElementById('closeInfoModal').addEventListener('click', () => {
        document.getElementById('infoModal').style.display = 'none';
    });
    
    // Закрытие по клику вне окна
    window.addEventListener('click', (event) => {
        const elementModal = document.getElementById('elementModal');
        const infoModal = document.getElementById('infoModal');
        
        if (event.target === elementModal) {
            elementModal.style.display = 'none';
        }
        
        if (event.target === infoModal) {
            infoModal.style.display = 'none';
        }
    });
    
    // Анимация появления элементов
    setTimeout(() => {
        const elements = document.querySelectorAll('.element');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            }, index * 20);
        });
    }, 300);
});

// Изначально скрываем элементы для анимации
document.querySelectorAll('.element').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.8)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
});