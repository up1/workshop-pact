const { Verifier } = require('@pact-foundation/pact')
const path = require('path')

// Setup provider server to verify
const app = require('express')()
app.use(require('../user_routes'))
const service = require('../user_service');
const port = 9002
const server = app.listen(port)

describe("Pact Verification", () => {
    it("validates the expectations of Service B", () => {
        const options = {
            providerBaseUrl: `http://localhost:${port}`,
            provider: 'Service B',
            psroviderVersion: '1.0.0',
            pactUrls: [
                path.resolve(__dirname, '../../service_a/pacts/service_a-service_b.json')
            ],
            stateHandlers: {
                "User=demo not found in service B": () => {
                    service.user_repository.users = new Map();
                }
            }
        }
        return new Verifier(options).verifyProvider().then(output => {
            console.log(output);
        }).finally(() => {
            server.close();
        });
    })
});