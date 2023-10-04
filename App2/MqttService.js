import { AsyncStorage } from 'react-native';
import { Client, Message } from 'react-native-paho-mqtt';

const client = new Client({ uri: 'mqtt://mqtt.eclipseprojects.io', clientId: 'react-native-client' });

const onMessageArrived = (message) => {
  // Trate os dados MQTT recebidos aqui
  const payload = message.payloadString;
  console.log('Mensagem recebida:', payload);

  // Atualize a interface do usuário com os novos dados
  // Você pode usar o estado do React ou Redux para atualizar a interface.
};

const connectToMqtt = async () => {
  await client.connect({ onSuccess: onConnect });
};

const onConnect = () => {
  console.log('Conectado ao servidor MQTT');
  client.subscribe('temperatura', 0); // Substitua 'temperatura' pelo tópico MQTT desejado
};

client.onMessageArrived = onMessageArrived;

export { connectToMqtt };
