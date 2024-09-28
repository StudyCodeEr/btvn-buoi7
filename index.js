const toggleSwitch1 = document.getElementById('light-dark1'); // Checkbox cho dark mode
const toggleSwitch2 = document.getElementById('light-dark2'); // Checkbox cho mobile dark mode
const body = document.body;
const container = document.querySelector('.container');
const sections = document.querySelectorAll('.section');

// Xử lý sự kiện cho checkbox đầu tiên
toggleSwitch1.addEventListener('change', function () {
    if (toggleSwitch1.checked) {
        // Bật chế độ dark mode
        body.classList.add('dark');
        container.classList.add('dark2');
        sections.forEach(section => section.classList.add('dark2'));
    } else {
        // Tắt chế độ dark mode
        body.classList.remove('dark');
        container.classList.remove('dark2');
        sections.forEach(section => section.classList.remove('dark2'));
    }
});

// Xử lý sự kiện cho checkbox thứ hai
toggleSwitch2.addEventListener('change', function () {
    if (toggleSwitch2.checked) {
        // Bật chế độ dark mode cho mobile
        body.classList.add('dark');
        container.classList.add('dark2');
        sections.forEach(section => section.classList.add('dark2'));
    } else {
        // Tắt chế độ dark mode cho mobile
        body.classList.remove('dark');
        container.classList.remove('dark2');
        sections.forEach(section => section.classList.remove('dark2'));
    }
});
