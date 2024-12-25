const vega = require('vega');

const domains = ['domain1', 'domain2', 'domain3'];
const scale = vega.scale().domain(domains).range([0, 1]);

console.log(scale);
