import axios from 'axios';

class ApiClient {
    request = axios.create({
        baseURL: 'https://collect-fiap-backend.herokuapp.com',
    });
    async createSession(userData) {
        const { data } = await this.request.post('/session', userData);
        return data;
    }
    async createNewUser(user) {
        const { data } = await this.request.post('/users', user);
        return data;
    }
    async fetchCollectPoints() {
        const { data } = await this.request.get('/collect-points');
        return data;
    }

    async createCollectPoint(collectPoint) {
        const { data } = await this.request.post(
            '/collect-points',
            collectPoint
        );
        return data;
    }

    async updateUser(id, userData) {
        const { data } = await this.request.put(
            `/users/${id}`,
            userData
        );
        return data;
    }

    async removePoint(id) {
        const { data } = await this.request.delete(
            `/collect-points/${id}`,
        );
        return data;
    }

    async getAllPoints() {
        const { data } = await this.request.get('/collect-points');

        return data;
    }

    async getPointById(id) {
        const { data } = await this.request.get(`/users/${id}/collect-points`);

        return data;
    }

    async getUserData(id) {
        const { data } = await this.request.get(`/users/${id}`);
        return data;
    }

    async getUserPoints(id) {
        const { data } = await this.request.get(`/users/${id}/collect-points`);
        return data;
    }
}
export default new ApiClient();
