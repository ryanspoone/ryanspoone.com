import _ from 'lodash';
import fetch from 'isomorphic-fetch';

const ONE_MINUTE = 60000;

export default class Client {
    constructor() {
        this.useLocalStorage = typeof localStorage !== 'undefined';
    }

    getDataFromCache(key) {
        if (!this.useLocalStorage) {
            return;
        }

        const currentTimeDate = new Date().toISOString();
        let response = localStorage.getItem(key);
        try {
            response = JSON.parse(response);
        } catch (e) {
            console.warn('Unexpected data type returned from local storage.', { key, response });
        }
        const expiresAt = _.get(response, 'conditions.expiresAt');
        const data = _.get(response, 'data');

        if (_.isNil(data) || _.isNil(expiresAt)) {
            return;
        }

        if (currentTimeDate >= new Date(expiresAt).toISOString()) {
            return;
        }

        return data;
    }

    cacheData(key, data) {
        if (!this.useLocalStorage) {
            return;
        }

        const minutesFromNow = 15 * ONE_MINUTE;

        try {
            localStorage.setItem(
                key,
                JSON.stringify({
                    conditions: {
                        expiresAt: new Date(new Date().getTime() + minutesFromNow).toISOString()
                    },
                    data
                })
            );
        } catch (error) {
            console.warn('Unable to store data in local storage.', { key, data, error });
            localStorage.removeItem(key);
        }
    }

    async fetchRequest(url, key, options) {
        if (this.useLocalStorage) {
            const cache = this.getDataFromCache(key);
            if (!_.isNil(cache)) {
                return cache;
            }
            localStorage.removeItem(key);
        }

        const body = _.get(options, 'body');

        let response;
        if (body) {
            response = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body
            });
        } else {
            response = await fetch(url);
        }

        let data = await response.json();
        let error = undefined;
        let errorCode = undefined;
        if (response.status !== 200) {
            error = _.get(data, 'error', data);
            errorCode = response.status;
            data = undefined;
        }

        const result = {
            [key]: { error, errorCode, data, isLoading: false }
        };
        this.cacheData(key, result);

        return result;
    }
}
