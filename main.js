const axios = require('axios');

const main = async () => {
    const { data } = await axios('http://localhost:3000/collect-points');
    console.log(data);
};
main();
