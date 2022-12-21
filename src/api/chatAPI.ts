import { Client, Message } from '@stomp/stompjs';

const stompClient = new Client({
  brokerURL: 'ws://',
  connectHeaders: {
    login: 'user',
    passcode: 'password',
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

stompClient.onConnect = (frame) => {
  // Do something, all subscribes must be done is this callback
  // This is needed because this will be executed after a (re)connect
  console.log('STOMP CONNECTED', frame);
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

stompClient.activate();
