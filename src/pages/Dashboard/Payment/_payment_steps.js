/**
 * 1. install react stripe js
 * 2.create a checkoutForm  with cart element (card element contains: card number, expiration data, cvs, zip code)
 * 
 * 3.create account on stripe and get the publish able key
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 
 * ----------------------------
 * 7. on the server side : npm install stripe
 * 8. create payment intent api with payment method types:['card']
 * make sure provide amount in cents (multiply amount *100 to convert cents)
 * 9.1> call payment intent api to get client secret and store it in a state
 * 9.use confirm card payment api with client secret and card info
 * 10. display confirm error
 * 11. display confirm card success
 * 12 do things after payment
 */
