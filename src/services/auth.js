import { AsyncStorage } from 'react-native'
import Axios from 'axios';

export class AuthService {


    createSession = async (data) => {
        const cliente = JSON.stringify(data);
        AsyncStorage.setItem("user", cliente);
    }

    getInfo = async () => {
        const cliente = await AsyncStorage.getItem("user");
        if (cliente) {
        return cliente;
        }
        return null;
    }
}