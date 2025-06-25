// main.js - JavaScript logic for goal setting screen

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goal-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('goal-setting-container').style.display = 'none';
        document.getElementById('record-container').style.display = 'block';
    });
});