import { AsyncStorage } from '@react-native-async-storage/async-storage';
//import { Client, Message } from 'react-native-paho-mqtt';
import init from 'react_native_mqtt';


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync : {
  }
});

function onConnect() {
  console.log("onConnect");
}

onPublish = (topic, message) => {
  this.client.publish(topic, message);
};

onSubscribe = (topic, callback) => {
  this.callbacks[topic] = callback;
  this.client.subscribe(temperatura);
};

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}

const client = new Paho.MQTT.Client('mqtt.eclipseprojects.io', 1883, 'DevMEERA');
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({ onSuccess:onConnect, useSSL: true });


//const client = new Client({ uri: 'ws://172.25.15.156:62919/ws', clientId: "testClient-${Math.random().toString(36).substr(2, 9)}" });
//const client = new Mqtt.Client('ws://172.25.15.156:62919/ws', 'testClient-${Math.random().toString(36).substr(2, 9)}');

//const onMessageArrived = (message) => {
  // Trate os dados MQTT recebidos aqui
 // const payload = message.payloadString;
 // console.log('Mensagem recebida:', payload);

  // Atualize a interface do usuário com os novos dados
  // Você pode usar o estado do React ou Redux para atualizar a interface.
//};

const connectToMqtt = async () => {
  await client.connect()
  .then(() => {
    console.log('Conectado ao servidor MQTT');
    client.subscribe('temperatura', 0); // Substitua 'temperatura' pelo tópico MQTT desejado
    client.subscribe('ph', 0);
    client.subscribe('tds', 0);
    client.subscribe('energia', 0);
  })
  .catch((error) => {
    console.error('Erro de conexão MQTT:', error);
  })
};

client.onMessageArrived = onMessageArrived;

export { connectToMqtt };

//export { connectToMqtt };
