const expect = require('chai').expect;
const testRequestAxios = require('axios');
const testClientId = '6052db0e19156fa';


// todo Разобраться почему работает не адекватно
describe('Album Hashes', function () {
    it('Is status code 200', function () {
        testRequestAxios.get(
            'https://api.imgur.com/3/account/triponlife/albums/ids',
            {'headers': {'Authorization': 'Client-ID ' + testClientId}}
        )
            .then(function (resp: any) {
                const tmp = resp;

                expect(resp.statusCode).toBe(404);
            });
        // done();
    });

    it('Is response data > 0', function (done) {
        testRequestAxios.get(
            'https://api.imgur.com/3/account/triponlife/albums/ids',
            {'headers': {'Authorization': 'Client-ID ' + testClientId}}
        )
            .then(function (resp: any) {
                const albumHashesData = resp.data.data;
                const albumHashesDataLenght = resp.data.data.length;
                // todo Тест не должен проходить
                expect(albumHashesDataLenght.length).not.toBe(0);

            });
        done();

    });

});

describe('Album Info', function () {
    it('Is status code 200 by album hashes', function (done) {

        testRequestAxios.get(
            'https://api.imgur.com/3/account/triponlife/albums/ids',
            {'headers': {'Authorization': 'Client-ID ' + testClientId}}
        )
            .then(function (resp: any) {
                // expect(resp.statusCode).toBe(200);
                const albumHashes = resp.data;

                albumHashes.forEach(function (albumHash: string) {

                    testRequestAxios.get(
                        'https://api.imgur.com/3/album/' + albumHash,
                        {'headers': {'Authorization': 'Client-ID ' + testClientId}}
                    )
                        .then(function (resp: any) {
                            expect(resp.statusCode).toBe(200);
                        });
                });
            });

        done();

    });

    it('Is response data > 0 by album hashes', function (done) {

        testRequestAxios.get(
            'https://api.imgur.com/3/account/triponlife/albums/ids',
            {'headers': {'Authorization': 'Client-ID ' + testClientId}}
        )
            .then(function (resp: any) {
                const albumHashes = resp.data.data;

                albumHashes.forEach(function (albumHash: string) {

                    testRequestAxios.get(
                        'https://api.imgur.com/3/album/' + albumHash,
                        {'headers': {'Authorization': 'Client-ID ' + testClientId}}
                    )
                        .then(function (resp: any) {
                            // todo чета тут не то. нужен дебаг
                            const albumInfoData = resp.data.data.length;
                            expect(albumInfoData).not.toBe(0);
                        });
                });
            });

        done();

    });

});

