import { Request, Response } from 'express';
import {AxiosError, AxiosResponse} from "axios";

// @ts-ignore
const axios = require('axios');

const clientId = '6052db0e19156fa';

const accessToken = '3eef1f3a555b4332d4714264d47a16bfb73e5376';
// https://cassiopiadev.000webhostapp.com/contact.html#access_token=3eef1f3a555b4332d4714264d47a16bfb73e5376&expires_in=315360000&token_type=bearer&refresh_token=d1b75f3199a4a7d40c124bf816a56bd810ab70f8&account_username=triponlife&account_id=126491147


exports.getAlbumHashes = function (request: Request, response: Response) {

    axios.get(
        'https://api.imgur.com/3/account/triponlife/albums/ids',
        {'headers': {'Authorization': 'Bearer ' + accessToken}}
    )
        .then(function (resp: AxiosResponse) {
            response.send(resp.data);
        })
        .catch(function (err: AxiosError) {
            response.send(err);
        });
};

exports.getAlbumInfo = function (request: Request, response: Response) {
    const albumHash = request.params.albumHash;

    axios({
        method: 'get',
        url: 'https://api.imgur.com/3/album/' + albumHash,
        headers: {
            'Authorization': 'Client-ID ' + clientId
        },
    })
        .then(function (resp: AxiosResponse) {
            response.send(resp.data);
        })
        .catch(function (err: AxiosError) {
            response.send(err);
        });
};

exports.getAlbumImages = function (request: Request, response: Response) {
    const albumHash = request.params.albumHash;

    axios({
        method: 'get',
        url: 'https://api.imgur.com/3/album/' + albumHash + '/images',
        headers: {
             'Authorization': 'Client-ID ' + clientId
        }
    })
        .then(function (resp: AxiosResponse) {
            response.send(resp.data);
        })
        .catch(function (err: AxiosError) {
            response.send(err);
        });
};

exports.getAlbums = function (request: Request, response: Response) {

    axios.get(
        'https://api.imgur.com/3/account/triponlife/albums',
        {'headers': {
            'Authorization': 'Bearer ' + accessToken
        }}
    )
        .then(function (resp: AxiosResponse) {
            response.header('Access-Control-Expose-Headers', ['Content-Range']);
            response.header('Content-Range', [' posts 0-24/*']);
            response.send(resp.data);
        })
        .catch(function (err: AxiosError) {
            response.send(err);
        });
};



