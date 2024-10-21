// Dark Mode Functionality
const toggleSwitch1 = document.getElementById('light-dark1'); // Checkbox cho dark mode
const toggleSwitch2 = document.getElementById('light-dark2'); // Checkbox cho mobile dark mode
const body = document.body;
const container = document.querySelector('.container');
const sections = document.querySelectorAll('.section');

// Xử lý sự kiện cho checkbox đầu tiên
toggleSwitch1.addEventListener('change', function () {
    if (toggleSwitch1.checked) {
        body.classList.add('dark');
        container.classList.add('dark2');
        sections.forEach(section => section.classList.add('dark2'));
    } else {
        body.classList.remove('dark');
        container.classList.remove('dark2');
        sections.forEach(section => section.classList.remove('dark2'));
    }
});

// Xử lý sự kiện cho checkbox thứ hai
toggleSwitch2.addEventListener('change', function () {
    if (toggleSwitch2.checked) {
        body.classList.add('dark');
        container.classList.add('dark2');
        sections.forEach(section => section.classList.add('dark2'));
    } else {
        body.classList.remove('dark');
        container.classList.remove('dark2');
        sections.forEach(section => section.classList.remove('dark2'));
    }
});

// Slide-In Effect Functionality
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Add or remove slide-in effect for sections
function toggleSlideEffect() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('slide-in'); // Hiện mục khi trong khung nhìn
        } else {
            section.classList.remove('slide-in'); // Ẩn mục khi ra ngoài khung nhìn
        }
    });
}

// Ensure all sections are initially hidden and set to slide-in-target
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('slide-in-target'); // Đảm bảo các mục chính được áp dụng hiệu ứng trượt
    });
    toggleSlideEffect(); // Kiểm tra và thêm hiệu ứng nếu cần khi trang tải
});

// Listen for scroll event
window.addEventListener('scroll', toggleSlideEffect);
