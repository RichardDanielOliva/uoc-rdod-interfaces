const stripe = require('stripe')('sk_test_51JnO5AA9tkYTjsXdmyKvfrY4bzA2nmMI7BW7E9vIx5Er8OguTlKqKj1xOiqdrvVvftgj9cihArlUFP1kpTqpxVT000NkWyNXX6');

const run = async () => {
  let status = ['past_due', 'incomplete'];
  let subscriptions = await stripe.subscriptions.list({
    customer: 'cus_KSKlsYyVgvavHS',
  })
  
  subscriptions = subscriptions.data.filter(subscription => status.includes(subscription.status));
  console.log(subscriptions)
}

run()