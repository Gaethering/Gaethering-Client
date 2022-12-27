import { Client, Message } from '@stomp/stompjs';
import { JWTToken } from './authAPI.type';

function chatStart(token: JWTToken) {
  const stompClient = new Client({
    brokerURL: 'ws://localhost:8080/ws-connect',
    discardWebsocketOnCommFailure: true,
    connectHeaders: {
      Authorization: token,
    },

    debug: function (str) {
      console.log('STOMP Debug', str);
    },
    reconnectDelay: 0,
    heartbeatIncoming: 0,
    heartbeatOutgoing: 0,
  });

  stompClient.onConnect = (frame) => {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
    console.log('STOMP CONNECTED', frame);
    stompClient.subscribe(
      `/exchange/chat.exchange/room.4d284910-3d2c-466c-9135-adbdc9296d3b`,
      (data) => {
        console.log('BODY', data.body);
      }
    );
  };

  stompClient.onStompError = (frame) => {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.error('STOMP: Broker reported error: ' + frame.headers['message']);
    console.error('STOMP: Additional details: ', frame.body);
    console.error('STOMP: Error Header: ', frame.headers);
  };

  return stompClient;
}

export default chatStart;
