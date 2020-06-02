## Step 1
* Create project service_a and service_b
* Testing with mock service (Using Nock)

## Step 2  :: Service A (Consumer)
* Create Consumer Contract Testing with Pact 
* Working with Provider states (interaction with API /user/:name)
  * Username = somkiat => exists
  * Username = Not found => HTTP response code 404 
* Try to create consumer test with Pact
  * Run with `npm test`
* Result is Pact files = /pacts/service_a-service_b.json

## Step 3 :: Service B (Provider)
* Verify Provider (Service B) from the pact file that generated from Consumer (Service A)
* Failure with Username = Not found => HTTP response code 404

## Step 4 :: Fix failure !!
* Using state handler in Pact ?

## Let's fun with changes ...