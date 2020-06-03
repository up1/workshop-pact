const {Pact} = require('@pact-foundation/pact')
const path = require('path')
const service = require('../service');


describe("Service B Test with Pact", () => {
    let provider

    beforeAll(async () => {
        provider = new Pact({
            consumer: 'Service A',
            provider: 'Service B',
            port: 9002,
            log: path.resolve(process.cwd(), 'logs', 'pact.log'),
            logLevel: "warn",
            dir: path.resolve(process.cwd(), 'pacts'),
            spec: 4
        })
        await provider.setup()
    });

    afterEach(async () => {
        await provider.verify();
    });

    afterAll(async () => {
        // Write pact files
        await provider.finalize()
    });

    describe("Get data from /user/:name", () => {
        it('Should be user=pact', async () => {
            await provider.addInteraction({
                state: 'User pact existing',
                uponReceiving: 'a request for user JSON data',
                withRequest: {
                    method: 'GET',
                    path: '/user/pact'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: {
                        user: {
                            name: 'pact'
                        }
                    }
                }
                })

            const result = await service.fetchUser('pact')
            expect(result.user.name).toEqual('pact')
        })

        it('Should not found user', async () => {
            await provider.addInteraction({
                state: 'User demo not found',
                uponReceiving: 'a request for user JSON data',
                withRequest: {
                    method: 'GET',
                    path: '/user/demo'
                },
                willRespondWith: {
                    status: 404
                }
            })
            await expect(service.fetchUser('demo')).rejects.toThrow("Not Found");
        })
    })
})