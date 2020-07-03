const api = document.getElementById('apiKey').value;
const connection = document.getElementById('createconnection');
connection.onclick = function()
{
    const peer = createPeer(api.textContent);
    createDataConnection(peer);
    //dataconnection = createDataConnection(peer);
};