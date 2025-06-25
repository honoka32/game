// main.js - JavaScript logic for goal setting screen

document.addEventListener('DOMContentLoaded', function() {
    const goalForm = document.getElementById('goalForm');
    const goalInput = document.getElementById('goalInput');
    const goalList = document.getElementById('goalList');

    goalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const goalText = goalInput.value.trim();
        if (goalText) {
            addGoalToList(goalText);
            goalInput.value = '';
        }
    });

    function addGoalToList(goal) {
        const listItem = document.createElement('li');
        listItem.textContent = goal;
        goalList.appendChild(listItem);
    }
});