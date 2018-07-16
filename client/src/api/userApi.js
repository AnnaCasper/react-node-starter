const LOCAL_API_URI = 'http://localhost:8000/api/';
// const STAGE_API_URI = 'http://ec2-52-54-50-192.compute-1.amazonaws.com:8000/api/';
import fetch from 'isomorphic-fetch';

import {formatBody} from '../utils/helperFunctions';

export default class UserApi {

    static createUser(email, password, firstname, lastname) {
        var details = {
            'email': email,
            'password': password,
            'firstname': firstname,
            'lastname': lastname
        };
        let formBody = formatBody(details);

        return fetch(LOCAL_API_URI = '/users', {
        headers: new Headers ({
            'Accept': 'application/json, application/xml, text/plain, text/html, .',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          }),
        body: formBody,
        method: 'post'
    }).then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });
    }
}