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
    name: 'charlie'
  },
  '0005' : {
    date: '2020-01-01',
    name: 'charlie'
  },
};

let output = [
  { date: '2020-01-01', key: '0001', name: 'alpha' },
  { date: '2020-01-01', key: '0005', name: 'charlie' },
  { date: '2020-01-03', key: '0002', name: 'bravo' },
  { date: '2020-01-05', key: '0003', name: 'charlie' },
  { date: '2020-01-06', key: '0004', name: 'charlie' }
];

// turn input into output, sorted by date


let date = '';
let keysByDate = {};
let result = [];
let sortedDates = [];
Object.keys(input).forEach((key) => {
  date = input[key].date;
  if (!Object.prototype.hasOwnProperty.call(keysByDate, date)) {
    keysByDate[date] = [];
  }
  keysByDate[date].push(key);
});
sortedDates = Object.keys(keysByDate);
sortedDates.sort();
sortedDates.forEach((sortedDate) => {
  keysByDate[sortedDate].forEach((key) => {
    result.push({
      'date': sortedDate,
      'key': key,
      'name': input[key].name
    })
  })
})
console.log(result);
