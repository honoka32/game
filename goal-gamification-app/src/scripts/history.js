// history.js - 記録一覧表示用

document.addEventListener('DOMContentLoaded', function() {
    // 目標表示
    const goal = JSON.parse(localStorage.getItem('goal'));
    const goalHistory = document.getElementById('goal-history');
    if (goal) {
        goalHistory.innerHTML = `
            <div class="goal-info">
                <h2>設定した目標</h2>
                <p><strong>タイトル:</strong> ${goal.title}</p>
                <p><strong>説明:</strong> ${goal.description}</p>
                <p><strong>締切日:</strong> ${goal.deadline}</p>
            </div>
        `;
    }

    // 勉強記録表示
    const studyRecords = JSON.parse(localStorage.getItem('studyRecords')) || [];
    const studyList = document.getElementById('study-history-list');
    studyList.innerHTML = '';
    studyRecords.forEach(r => {
        const li = document.createElement('li');
        li.textContent = `日付: ${r.date} / 勉強時間: ${r.time}分`;
        studyList.appendChild(li);
    });

    // トレーニング記録表示
    const trainingRecords = JSON.parse(localStorage.getItem('trainingRecords')) || [];
    const trainingList = document.getElementById('training-history-list');
    trainingList.innerHTML = '';
    trainingRecords.forEach(r => {
        const li = document.createElement('li');
        li.textContent = `日付: ${r.date} / 内容: ${r.detail}`;
        trainingList.appendChild(li);
    });

    // 全データ削除ボタン
    document.getElementById('delete-all').addEventListener('click', function() {
        if (confirm('本当に全てのデータを削除しますか？')) {
            localStorage.clear();
            location.reload();
        }
    });

    // 達成したボタン
    document.getElementById('achieve-goal').addEventListener('click', function() {
        window.location.href = 'congrats.html';
    });
});
