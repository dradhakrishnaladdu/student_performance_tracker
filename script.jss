function sendMessage() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;

    if (username === "" || message === "") {
        alert("Enter name and message");
        return;
    }

    let chatBox = document.getElementById("chatBox");

    let msgDiv = document.createElement("div");
    msgDiv.className = "message";
    msgDiv.innerHTML = "<b>" + username + ":</b> " + message;

    chatBox.appendChild(msgDiv);
    document.getElementById("message").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
