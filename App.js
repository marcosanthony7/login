import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 2, // Borda do container
          borderColor: 'gray', // Cor da borda do container
          borderRadius: 20, // Arredondamento da borda do container
          padding: 20, // Espaço interno entre a borda do container e seus filhos
          backgroundColor: 'white', // Cor de fundo do container
          width: '80%', // Largura do container
          alignItems: 'center', // Alinha os filhos ao centro (horizontalmente)
          gap: 20, // Espaço entre os filhos do container
          shadowColor: '#333',
          shadowRadius: 20,
        }}>
        <Text style={[{ fontSize: 30 }, { fontWeight: 'bold' }]}>LOGIN</Text>
        <TextInput
          style={[
            { borderWidth: 2 },
            { borderRadius: 10 },
            { padding: 5 },
            { paddingLeft: 10 },
            { width: '100%' }, // Ajuste para ocupar toda a largura do container
          ]}
          placeholder="Nome"
        />
        <TextInput
          style={[
            { borderWidth: 2 },
            { borderRadius: 10 },
            { padding: 5 },
            { paddingLeft: 10 },
            { width: '100%' }, // Ajuste para ocupar toda a largura do container
          ]}
          placeholder="Email"
        />
        <TextInput
          style={[
            { borderWidth: 2 },
            { borderRadius: 10 },
            { padding: 5 },
            { paddingLeft: 10 },
            { width: '100%' }, // Ajuste para ocupar toda a largura do container
          ]}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <View style={{ width: '100%' }}>
          <Button title="Login" color='blue' />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
