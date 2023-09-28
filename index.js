const RippleAPI = require('ripple-lib').RippleAPI;
const { Wallet } = require('ripple-lib');
// TESTNET ADDRESS 1
// const ADDRESS_1 = "rDAvqFiGyYdZ8hQwYVwK5n4qdVT5hsE4iG"
// const SECRET_1 = "sa9MF8ep3bupHx1D2uSmG514BBtB8"
// // TESTNET ADDRESS 2
// const ADDRESS_2 = "rfUaVzRmNhj6QnEBAwEeZ68tKQcwMWvarx"
const ADDRESS_1 = 'rGbD7manzL1ck9gKx97PDJorcjDuQBKQL6';
const SECRET_1 = 'sEdSJorRENax8UKbY2p7uRtEuLAYfYg'; // The secret key of the sender wallet
const ADDRESS_2 = 'rhxQLwDDRTcumXmQioU1JNzNPJK5GmvZWQ';
const instructions = {maxLedgerVersionOffset: 5}
const currency = 'XRP'
const amount = '0.01'
const payment = {
  source: {
    address: ADDRESS_1,
    maxAmount: {
      value: amount,
      currency: currency
    }
  },
  destination: {
    address: ADDRESS_2,
    amount: {
      value: amount,
      currency: currency
    }
  }
}
const api = new RippleAPI({
  //server: 'wss://s1.ripple.com'                 // MAINNET
  server: 'wss://s.altnet.rippletest.net:51233'   // TESTNET
})
api.connect().then(() => {
  console.log('Connected...')
  api.preparePayment(ADDRESS_1, payment, instructions).then(prepared => {
    const {signedTransaction, id} = api.sign(prepared.txJSON, SECRET_1)
    console.log(id)
    api.submit(signedTransaction).then(result => {
      console.log(JSON.stringify(result, null, 2))
      api.disconnect()
    })
  })
}).catch(console.error)