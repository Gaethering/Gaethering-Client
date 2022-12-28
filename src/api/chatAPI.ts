import { Client, Message } from '@stomp/stompjs';
import { JWTToken } from './authAPI.type';

export function chatStart(token: JWTToken) {
  const stompClient = new Client({
    brokerURL: 'ws://localhost:8080/ws-connect',
    discardWebsocketOnCommFailure: true,
    connectHeaders: {
      Authorization: token,
    },

    // debug: function (str) {
    //   console.log('STOMP Debug', str);
    // },
    reconnectDelay: 5000,
    heartbeatIncoming: 20000,
    heartbeatOutgoing: 20000,
  });

  stompClient.onConnect = (frame) => {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
    console.log('STOMP CONNECTED', frame);
    stompClient.subscribe(
      `/exchange/chat.exchange/room.725cae56-5936-4d01-a186-d7533d51acf6`,
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
