import { NetworkRepositoryAxiosImpl } from './repository/NetworkRepository';

export class Network {
    static #baseURL: string = ''; // TODO: Set the base URL for JWT implementation
    static #instance: NetworkRepositoryAxiosImpl;

    public static getInstance() {
        if (!Network.#instance) {
            const networkInstance = new NetworkRepositoryAxiosImpl(this.#baseURL);
            Network.#instance = networkInstance;
        }
        return Network.#instance;
    }
}
