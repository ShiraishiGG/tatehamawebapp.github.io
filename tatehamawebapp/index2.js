// ユーザーIDとパスワードの組み合わせをオブジェクトで管理
const users = {
    "traincrew": "tatehama2021",
    "mizotuki": "Gokuraku@Temple",
    // 必要なだけ追加
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('pw-form').onsubmit = function (e) {
        e.preventDefault();
        const user = document.getElementById('user-input').value;
        const pw = document.getElementById('pw-input').value;
        if (users[user] && users[user] === pw) {
            window.location.href = "tatehama.html";
        } else {
            document.getElementById('pw-error').textContent = "ユーザー名またはパスワードが違います";
            document.getElementById('pw-error').style.display = "block";
        }
    };
});