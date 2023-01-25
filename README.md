
# Automobile Market - TokenSDK

This Cordapp shows simple flows related to the token SDK. In this Cordapp, we will mimic a automobile buying and selling market with 5 standard parties:
- Notary
- AutomobileCo
- LicensedDealership
- UsedPartsAgency
- Buyer

From the above chart we see that Tokens are representing the ownership and status of the physical assets ( [Chassis, Body, Engine, Transmission, Braking, Interior] ). A key point to notice here is that **a automobile is represented with 6 tokens ([Chassis, Body, Engine, Transmission, Braking, Interior])**. This is designed in the way to be flexible to sell or total a specific part of your automobile. As you can see, this automobile buying/selling market is capable of mimicking multiple business logics. We will be demonstrating one of the possible logic here:

1. Automobile Company manufactures the automobiles
2. Automobile Company can sell the automobile to licensed dealer and buyers.
3. A parts agency can get the used automobile parts from the licensed dealer or buyers.
4. When there is a need to destroy the physical automobile part, the current owner of the physical part will redeem the token with the AutomobileCo

Throughout the app, you can see how to create, transact, and redeem a token.


Once you have cloned this Git repository, you are ready to run this app.

First deploy and run the Corda node network:

```
./gradlew deployNodes
cd build/nodes
./runnodes
```
Be patient while Corda is setting nodes. If you have any questions during setup of your Corda node network, please go to https://docs.corda.net/getting-set-up.html for detailed setup instructions.

Next, run the Spring Boot app to make available the Restful APIs:

```
./gradlew run
``` 

Finally, to build and run the React.JS frontend, cd to the frontend directory and issue the following commands:

```
npm install react-bootstrap
npm start
```

The UI should appear in the browser where you can first create individual parts then take Corda actions with those parts.






