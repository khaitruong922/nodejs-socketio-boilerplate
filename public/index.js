const socket = io('/')
socket.on('connect', () => {
    console.log(`My socket id is ${socket.id}`);
});