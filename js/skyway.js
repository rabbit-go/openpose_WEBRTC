const roomID = 'room';
function createPeer(apikey){
    const peer = new Peer({
        key: apikey,
        config: {
          iceTransportPolicy: 'relay',
        },
      });
      peer.on('open', mediaConnection => {
        room = peer.joinRoom(roomID);
      });
      peer.on('call', mediaConnection => {
        // MediaStreamで応答する
        mediaConnection.answer(mediaStream);
      });
      peer.on('data', data => {
        console.log(data);
      });
      return peer;
}
function call(stream){
    const call = peer.call(roomID, stream);
    return call;
}
function createDataConnection(peer){
    const dataConnection = peer.connect(roomID);
    return dataConnection;
}
function sendData(dataConnection,data){
    dataConnection.send(data);
}