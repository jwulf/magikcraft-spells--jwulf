const magik = magikcraft.io;

function sendLoreToUser(username, lorename) {
    const domain = 'http://localhost:8086';
    const route = 'api/v1/sendLoreToUser';
    const API_key = '6B73F512-5C17-431B-831D-F368BA6CC0D1';
    const url = `${domain}/${route}/${API_key}/${username}/${lorename}`;

    http.dispatchMQ('GET', url, null);
}
