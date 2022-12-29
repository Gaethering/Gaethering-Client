import { Client, Message } from '@stomp/stompjs';
import { JWTToken } from './authAPI.type';

export function chatStart(token: JWTToken) {
  const stompClient = new Client({
    brokerURL: 'ws://localhost:8080/ws-connect',
    discardWebsocketOnCommFailure: true,
    connectHeaders: {
      Authorization: token,
    },

    debug: function (str) {
      console.log('STOMP Debug', str);
    },

    reconnectDelay: 5000,
    heartbeatIncoming: 20000,
    heartbeatOutgoing: 20000,
  });

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
