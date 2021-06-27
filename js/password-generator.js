let passwordGenerate = document.getElementById("password")
let passwordLength = 16;
let password = "";
let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()_-+=?/|<>{}[]:;"

function getPassword() {
    password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randonNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randonNumber, randonNumber+1)
    }

    passwordGenerate.value = password
}

function copyPassword() {
    passwordGenerate.select()
    passwordGenerate.setSelectionRange(0, 9999)
    document.execCommand("copy")
}