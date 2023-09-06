const RippleAPI = require('ripple-lib').RippleAPI;

// Initialize the RippleAPI with the Testnet server configuration
const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233', // Testnet server URL
});

// The Testnet XRP Ledger address to verify
const testnetAddress = 'rpc4XWw2ip5QfGXsGLiTvDkPSKPdWLkZwT';

async function verifyAccount() {
  try {
    // Connect to the Testnet server
    await api.connect();

    // Request the account info
    const accountInfo = await api.getAccountInfo(testnetAddress);

    // Check if the account exists and print its info
    if (accountInfo) {
      console.log('Account exists:');
      console.log(`Address: ${testnetAddress}`);
      console.log(`Balance: ${accountInfo.xrpBalance} drops`);
    } else {
      console.log('Account not found.');
    }

    // Disconnect from the Testnet server
    api.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the verifyAccount function to check the account
verifyAccount();
