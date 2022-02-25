let input = {
  '0001' : {
    date: '2020-01-01',
    name: 'alpha'
  },
  '0002' : {
    date: '2020-01-03',
    name: 'bravo'
  },
  '0003' : {
    date: '2020-01-05',
    name: 'charlie'
  },
  '0004' : {
    date: '2020-01-06',
    name: 'delta'
  },
  '0005' : {
    date: '2020-01-01',
    name: 'echo'
  },
  '0006' : {
    date: '2020-01-06',
    name: 'foxtrot'
  },
  '0007' : {
    date: '2020-01-07',
    name: 'gamma'
  },
  '0008' : {
    date: '2020-01-12',
    name: 'hotel'
  },
};

let output = {
  "2020-01-01": {
    "0001": "alpha",
    "0005": "echo"
  },
  "2020-01-03": {
    "0002": "bravo"
  },
  "2020-01-05": {
    "0003": "charlie"
  },
  "2020-01-06": {
    "0004": "delta",
    "0006": "foxtrot"
  },
  "2020-01-07": {
    "0007": "gamma"
  },
  "2020-01-12": {
    "0008": "hotel"
  }
};

// turn input into nested objects that match output

let date = '';
let result = {};
Object.keys(input).forEach((key) => {
  date = input[key].date;
  if (!Object.prototype.hasOwnProperty.call(result, date)) {
    result[date] = {};
  }
  result[date][key] = input[key].name;
});
console.log(JSON.stringify(result, null, '  '));
