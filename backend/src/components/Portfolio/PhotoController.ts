// @ts-ignore
const axios = require('axios');

// todo Определить типы (вместо any)
import { Request, Response } from 'express';

const clientId = '6052db0e19156fa';

const accessToken = '3eef1f3a555b4332d4714264d47a16bfb73e5376';
// https://cassiopiadev.000webhostapp.com/contact.html#access_token=3eef1f3a555b4332d4714264d47a16bfb73e5376&expires_in=315360000&token_type=bearer&refresh_token=d1b75f3199a4a7d40c124bf816a56bd810ab70f8&account_username=triponlife&account_id=126491147


exports.getAlbumHashes = function (request: any, response: any) {

    axios.get(
        'https://api.imgur.com/3/account/triponlife/albums/ids',
        {'headers': {'Authorization': 'Bearer ' + accessToken}}
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

exports.getAlbums = function (request: any, response: any) {

    axios.get(
        'https://api.imgur.com/3/account/triponlife/albums',
        {'headers': {'Authorization': 'Bearer ' + accessToken}}
    )
        .then(function (resp: any) {
            response.send(resp.data);
        })
        .catch(function (err: any) {
            response.send(err);
        });
};



