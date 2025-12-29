function openVip(number) {
    if (number === 1) {
        window.open("https://www.roblox.com/share?code=9668870e7b9a1743a0643531cf7a63f7&type=Server", "_blank");
    }

    if (number === 2) {
        window.open("https://www.roblox.com/share?code=fa32dbfabe022b45850a4b74ce214058&type=Server", "_blank");
    }

    if (number === 3) {
        window.open("https://www.roblox.com/share?code=88705f0da1e3a541a73735a239fcc823&type=Server", "_blank");
    }
}

function checkPassword() {
    let correctPassword = "geg404500";
    let success = false;

    for (let i = 3; i > 0; i--) {
        let password = prompt("Введите пароль (осталось попыток: " + i + ")");

        if (password === correctPassword) {
            success = true;
            break;
        } else {
            alert("Неверный пароль!");
        }
    }

    if (success) {
        window.location.href = "https://example.com";
    } else {
        alert("Попытки закончились!");
    }
}
