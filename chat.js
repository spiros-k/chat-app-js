// CLIENT SIDE JS

const socket = new WebSocket('ws://localhost:3000/chat/mate')
socket.onmessage = (evt) => {
    console.log("MESSAGE FROM SOCKET", evt.data)
}

console.log("JS file")

// open websocket from browser to server