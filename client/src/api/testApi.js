import fetch from 'isomorphic-fetch';
import {siteBaseUrl} from '../config/config';

export default class UserApi {

    static getTest() {
		return fetch(`${siteBaseUrl}/api/test`, {
			headers: new Headers ({
				'Accept': 'application/json, application/xml, text/plain, text/html, .',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
			}),
			method: 'get'
		}).then(response => {
			return response.json();
			}).catch(error => {
			return error;
		});
	}
}