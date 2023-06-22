import { IncomingMessage } from 'http';
import { CompletePortfolio } from '../Models/portfolio';
import { useCallback, useState } from 'react';

// const root = 'https://localhost:8000';
const root = 'https://cors-anywhere.herokuapp.com/http://3.145.214.116:8000';
export default class dataApi {
    constructor() {
        const path = `${root}`;
    }

    get() {
        //     var http = require('http');
        //     var client = http.createClient(3000, 'localhost');
        //     var request = client.request('PUT', '/users/1');
        //     fetch('localhost:8000').then(response => response.json())
        //     .then((data)=> {console.log(data); setEnvironmentData()})
        return fetch(`${root}/api`);
    }

    async getPortfolio(type?: string) {
        //Promise<{ portfolio: CompletePortfolio }> {
        if (!type) {
            return null;
        }
        const tmp = await fetch(`${root}/portfolio/${type}`);
        console.log(`tmp`, tmp);
        return tmp;
        // const response = await fetch(`/`);
        // const data = await response.json();
        // console.log(`data . info ${data.info}`);
    }

    getEntry(type?: string, entryId?: number) {
        if (!type || !entryId) {
            return null;
        }
        return fetch(`${root}/portfolio/${type}/${entryId}`);
    }
}
