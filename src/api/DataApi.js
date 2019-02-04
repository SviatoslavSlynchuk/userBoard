import fetch from 'isomorphic-fetch';
import * as constants from '../constants';

export default class DataApi {
    static getPersonnelData() {
        return fetch(constants.DATA_URL).then(response => response.json()).then(
            data => data.results.map(
                (item) => {
                    const {
                        name,
                        picture: { thumbnail },
                        location: { city },
                        status = constants.APPLIED,
                        id: { value: id },
                    } = item;
                    return {
                        name,
                        city,
                        thumbnail,
                        status,
                        id,
                    };
                },
            ),
        );
    }
}
