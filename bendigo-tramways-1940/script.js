// Tab navigation
document.querySelectorAll('.directory-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.directory-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Day selector
document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const day = this.getAttribute('data-day');
        const dayLabels = {
            'mon-thu': 'Monday to Thursday',
            'friday': 'Friday',
            'saturday': 'Saturday',
            'sunday': 'Sunday'
        };
        document.querySelectorAll('.timetable-day').forEach(label => {
            label.textContent = dayLabels[day];
        });
    });
});

// Form submission
document.querySelector('.form-submit')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Your enquiry has been received.\n\nA response will be dispatched by post within 3-5 working days.\n\n— Bendigo Tramways Office');
});
