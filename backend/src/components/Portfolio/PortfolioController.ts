// @ts-ignore
const axios = require('axios');

const clientId = '6052db0e19156fa';


exports.getAlbumHashes = function (request: any, response: any) {

    axios.get(
        'https://api.imgur.com/3/account/triponlife/albums/ids',
        {'headers': {'Authorization': 'Client-ID ' + clientId}}
    )
        .then(function (resp: any) {
            response.send(resp.data);
        })
        .catch(function (err: any) {
            response.send(err);
        });
};

exports.getAlbumInfo = function (request: any, response: any) {
    const albumHash = request.params.albumHash;

    axios({
        method: 'get',
        url: 'https://api.imgur.com/3/album/' + albumHash,
        headers: {
            'Authorization': 'Client-ID ' + clientId
        },
    })
        .then(function (resp: any) {
            response.send(resp.data);
        })
        .catch(function (err: any) {
            response.send(err);
        });
};

exports.getAlbumImages = function (request: any, response: any) {
    const albumHash = request.params.albumHash;

    axios({
        method: 'get',
        url: 'https://api.imgur.com/3/album/' + albumHash + '/images',
        headers: {
             'Authorization': 'Client-ID ' + clientId
        }
    })
        .then(function (resp: any) {
            response.send(resp.data);
        })
        .catch(function (err: any) {
            response.send(err);
        });
};



