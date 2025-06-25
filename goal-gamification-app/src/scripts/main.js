// main.js - JavaScript logic for goal setting screen

document.addEventListener('DOMContentLoaded', function() {
    // 目標データを表示する関数
    function displayGoal() {
        const goal = JSON.parse(localStorage.getItem('goal'));
        const goalDisplay = document.getElementById('goal-display');
        if (goal) {
            goalDisplay.innerHTML = `
                <div class="goal-info">
                    <h2>設定した目標</h2>
                    <p><strong>タイトル:</strong> ${goal.title}</p>
                    <p><strong>説明:</strong> ${goal.description}</p>
                    <p><strong>締切日:</strong> ${goal.deadline}</p>
                </div>
            `;
        } else {
            goalDisplay.innerHTML = '';
        }
    }

    // 初回表示時に目標があれば記録画面、なければ目標設定画面
    const goal = localStorage.getItem('goal');
    if (goal) {
        document.getElementById('goal-setting-container').style.display = 'none';
        document.getElementById('record-container').style.display = 'block';
        displayGoal();
    } else {
        document.getElementById('goal-setting-container').style.display = 'block';
        document.getElementById('record-container').style.display = 'none';
    }

    document.getElementById('goal-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // 目標データを保存
        const title = document.getElementById('goal-title').value;
        const description = document.getElementById('goal-description').value;
        const deadline = document.getElementById('goal-deadline').value;
        localStorage.setItem('goal', JSON.stringify({ title, description, deadline }));
        document.getElementById('goal-setting-container').style.display = 'none';
        document.getElementById('record-container').style.display = 'block';
        displayGoal();
    });

    // 勉強時間・トレーニング記録をlocalStorageに保存し、記録後にhistory.htmlへ遷移する処理
    document.getElementById('study-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('study-date').value;
        const time = document.getElementById('study-time').value;
        const record = { date, time };
        let studyRecords = JSON.parse(localStorage.getItem('studyRecords')) || [];
        studyRecords.push(record);
        localStorage.setItem('studyRecords', JSON.stringify(studyRecords));
        // 合計勉強時間を計算
        const total = studyRecords.reduce((sum, r) => sum + Number(r.time), 0);
        if (total >= 600) {
            window.location.href = 'congrats.html';
        } else {
            window.location.href = 'history.html';
        }
    });

    document.getElementById('training-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('training-date').value;
        const detail = document.getElementById('training-detail').value;
        const record = { date, detail };
        let trainingRecords = JSON.parse(localStorage.getItem('trainingRecords')) || [];
        trainingRecords.push(record);
        localStorage.setItem('trainingRecords', JSON.stringify(trainingRecords));
        window.location.href = 'history.html';
    });

    // 記録画面表示時に目標を表示
    if (document.getElementById('record-container').style.display !== 'none') {
        displayGoal();
    }

    // 全データ削除ボタン
    document.getElementById('delete-all').addEventListener('click', function() {
        if (confirm('本当に全てのデータを削除しますか？')) {
            localStorage.clear();
            location.reload();
        }
    });
});