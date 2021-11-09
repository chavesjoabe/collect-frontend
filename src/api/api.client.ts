import axios from 'axios';

class ApiClient {
    request = axios.create({
        baseURL: 'http://localhost:3000',
    });
    async createSession(userData) {
        const { data } = await this.request.post('/session', userData);
        return data;
    }
    async createNewUser(user) {
        const { data } = await this.request.post('/users', user);
        return data;
    }
}
export default new ApiClient();
