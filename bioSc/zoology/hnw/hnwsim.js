const sub = document.getElementById("submit");
const rest = document.getElementById("reset");
const myChart = document.getElementById("mychart")
const myChart2 = document.getElementById("mychart2")
const canvas = document.querySelectorAll("canvas")
function getValues() {
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const data = [name, gender, height, weight]
  return data
}
const indieData = {
  hArrM: [162.5, 171, 165, 167.6, 170.7, 160, 172.7, 172.7, 175, 158, 163, 165.1, 167.6, 170.1, 172.7, 162, 168, 168, 172.7, 159, 175, 167.6, 170.1, 168, 170, 177.8, 180.3, 182.8, 185, 185.4, 162.5, 160, 167, 185.4, 186, 171, 177.8, 172.7, 175.2, 182.8, 174, 177, 175.2, 177.8, 182.8, 174, 172, 180, 180.3, 171, 180.3, 172, 175.2, 183, 175],
  hArrF: [152, 152.4, 152.4, 152.4, 154.9, 158, 154, 155, 160, 160, 149.8, 162.5, 166, 157.4, 159, 149.8, 152.4, 160, 162, 152.4, 157.4, 158, 164, 165.1, 152.4, 163, 167.6, 157, 160, 165, 165.1, 166, 152.4, 160, 162.5, 162.5, 152.4, 162, 162.5, 167.6, 159, 167.6, 167.6, 170.1, 160, 170, 173, 158, 152],
  wArrM: [51, 52, 54, 54, 54, 55, 57, 58, 58, 59, 60, 60, 60, 60, 60, 62, 62, 62, 62, 63, 63, 64, 64, 65, 65, 65, 65, 65, 65, 65, 66, 67, 67, 67, 68, 69, 69, 69.5, 70, 70, 74, 74, 75, 75, 75, 76, 78, 78, 78, 79, 79, 80, 80, 83, 85],
  wArrF: [40, 42, 43, 43, 43, 43, 44, 45, 45, 46, 47, 47, 47, 48, 49, 50, 50, 50, 51, 52, 52, 52, 52, 52, 53, 53, 53, 55, 55, 55, 55, 55, 57, 57, 57, 57, 58, 59, 59, 59, 65, 66, 69, 69, 70, 70, 71, 72, 77]
}
const analyzeMH = {
  classInterval: ["158-162", "162-166", "166-170", "170-174", "174-178", "178-182", "182-186"],
  xi: [160, 164, 168, 172, 176, 180, 184],
  fi: [5, 5, 8, 15, 10, 4, 8],
  cf: [5, 10, 18, 33, 43, 47, 55],
  fixi: [
    800,
    , 820
    , 1344
    , 2580
    , 1760
    , 720
    , 1472
  ],
  d: [
    -12.65,
    , -8.65000000000001
    , -4.65
    , -0.65
    , 3.35
    , 7.35
    , 11.35

  ],
  fid2: [
    800.112500000001,
    374.125,
    172.98,
    6.3375,
    112.225,
    216.09,
    1030.58
  ]
}
const analyzeFH = {
  classInterval: [
    "149-153",
    "153-157",
    "157-161",
    "161-165",
    "165-169",
    "169-173"
  ],
  xi: [
    151,
    155,
    159,
    163,
    167,
    171
  ],
  fi: [
    12,
    4,
    13,
    9,
    8,
    3
  ],
  cf: [
    12,
    16,
    29,
    38,
    46,
    49
  ],
  fixi: [
    1812,
    620,
    2067,
    1467,
    1336,
    513

  ],
  d: [
    -8.4898,
    -4.4898,
    -0.4898,
    3.5102,
    7.5102,
    11.5102
  ],
  fid2: [
    864.92,
    80.633,
    3.118,
    110.893,
    451.224,
    397.454
  ]
}
const analyzeMW = {
  classInterval: [
    "51 - 55",
    "55 - 59",
    "59 - 63",
    "63 - 67",
    "67 - 71",
    "71 - 75",
    "75 - 79",
    "79 - 83",
    "83 - 87"
  ],
  xi: [
    53,
    57,
    61,
    65,
    69,
    73,
    77,
    81,
    83
  ],
  fi: [
    6,
    4,
    11,
    13,
    6,
    5,
    6,
    2,
    2,
  ],
  cf: [
    6,
    10,
    21,
    34,
    40,
    45,
    51,
    53,
    55
  ],
  fixi: [
    318,
    228,
    671,
    845,
    414,
    365,
    462,
    162,
    166,

  ],
  d: [
    -13.01,
    -9.01,
    -5.01,
    -1.01,
    2.99,
    6.99,
    10.99,
    14.99,
    16.99
  ],
  fid2: [
    1015.56,
    324.72,
    276.101,
    13.261,
    53.64,
    244.3,
    724.68,
    449.4,
    577.32
  ]
}
const analyzeFW = {
  classInterval: [
    "40 - 44",
    "44 - 48",
    "48 - 52",
    "52 - 56",
    "56 - 60",
    "60 - 64",
    "64 - 68",
    "68 - 72",
    "72 - 76",
    "76 - 80"
  ],
  xi: [
    42,
    46,
    50,
    54,
    58,
    62,
    66,
    70,
    74,
    78,
  ],
  fi: [
    7,
    7,
    10,
    8,
    8,
    0,
    2,
    6,
    0,
    1
  ],
  cf: [
    7,
    14,
    24,
    32,
    40,
    40,
    42,
    48,
    48,
    49
  ],
  fixi: [
    294,
    232,
    500,
    432,
    464,
    0,
    132,
    420,
    0,
    78
  ],
  d: [
    -10.081,
    -6.081,
    -2.081,
    1.918,
    5.918,
    9.918,
    13.918,
    17.918,
    21.918,
    25.918
  ],
  fid2: [
    711.385,
    258.849,
    43.305,
    29.429,
    280.181,
    0,
    387.421,
    1926.328,
    0,
    671.742,
  ]
}
const labelMH = analyzeMH.classInterval;
const dataMH = {
  labels: labelMH,
  datasets: [{
    label: 'Height Count',
    data: analyzeMH.fi,
    // backgroundColor: [
    //   'rgba(255, 99, 132, 0.2)',
    //   'rgba(255, 159, 64, 0.2)',
    //   'rgba(255, 205, 86, 0.2)',
    //   'rgba(75, 192, 192, 0.2)',
    //   'rgba(54, 162, 235, 0.2)',
    //   'rgba(153, 102, 255, 0.2)',
    //   'rgba(201, 203, 207, 0.2)'
    // ]
    backgroundColor: function color() {
      const usrDet = getValues()
      if (usrDet[2] >= 158 && usrDet[2] < 162) {
        let arr = [
          'rgb(124, 51, 153)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)'
        ]
        return arr
      }
      else if (usrDet[2] >= 162 && usrDet[2] < 166) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)'
        ]
        return arr
      }
      else if (usrDet[2] >= 166 && usrDet[2] < 170) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)'
        ]
        return arr
      }
      else if (usrDet[2] >= 170 && usrDet[2] < 174) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)'
        ]
        return arr
      }
      else if (usrDet[2] >= 174 && usrDet[2] < 178) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)'
        ]
        return arr
      }
      else if (usrDet[2] >= 178 && usrDet[2] < 182) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(253, 156, 255, 0.2)'
        ]
        return arr
      }
      else if (usrDet[2] >= 182 && usrDet[2] < 186) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgb(124, 51, 153)'
        ]
        return arr
      }
    },
    borderColor: function color() {
      const usrDet = getValues()
      if (usrDet[2] >= 158 && usrDet[2] < 162) {
        let arr = [
          'rgb(255, 0, 102)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(253, 156, 255)'
        ]
        return arr
      }
      else if (usrDet[2] >= 162 && usrDet[2] < 166) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgb(255, 0, 102)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(253, 156, 255)'
        ]
        return arr
      }
      else if (usrDet[2] >= 166 && usrDet[2] < 170) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgb(255, 0, 102)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(253, 156, 255)'
        ]
        return arr
      }
      else if (usrDet[2] >= 170 && usrDet[2] < 174) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgb(255, 0, 102)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(253, 156, 255)'
        ]
        return arr
      }
      else if (usrDet[2] >= 174 && usrDet[2] < 178) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgb(255, 0, 102)',
          'rgba(153, 102, 255)',
          'rgba(253, 156, 255)'
        ]
        return arr
      }
      else if (usrDet[2] >= 178 && usrDet[2] < 182) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgb(255, 0, 102)',
          'rgba(253, 156, 255)'
        ]
        return arr
      }
      else if (usrDet[2] >= 182 && usrDet[2] < 186) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(253, 156, 255)',
          'rgb(255, 0, 102)'
        ]
        return arr
      }
    },
    borderWidth: 3
  }]
}
const configMH = {
  type: 'bar',
  data: dataMH,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Male -  Height',
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Class-Interval'
        }
      }
    }
  },
};
const labelMW = analyzeMW.classInterval;
const dataMW = {
  labels: labelMW,
  datasets: [{
    label: 'Weight Count',
    data: analyzeMW.fi,
    backgroundColor: function color() {
      const usrDet = getValues()
      if (usrDet[3] >= 51 && usrDet[3] < 55) {
        let arr = [
          'rgb(124, 51, 153)',
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 55 && usrDet[3] < 59) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 59 && usrDet[3] < 63) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 63 && usrDet[3] < 67) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 67 && usrDet[3] < 71) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 71 && usrDet[3] < 75) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 75 && usrDet[3] < 79) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 79 && usrDet[3] < 83) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(133, 234, 166)'
        ]
        return arr
      }
      else if (usrDet[3] >= 83 && usrDet[3] < 87) {
        let arr = [
          'rgb(113, 212, 205, 0.2)',
          'rgba(205, 240, 123, 0.2)',
          'rgba(148, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(245, 186, 59, 0.2)',
          'rgba(133, 234, 166)',
          'rgb(124, 51, 153)'
        ]
        return arr
      }
    },
    borderColor: function color() {
      const usrDet = getValues()
      if (usrDet[2] >= 158 && usrDet[2] < 162) {
        let arr = [
          'rgb(255, 0, 102)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'
        ]
        return arr
      }
      else if (usrDet[2] >= 162 && usrDet[2] < 166) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgb(255, 0, 102)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 2)'
        ]
        return arr
      }
      else if (usrDet[2] >= 166 && usrDet[2] < 170) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgb(255, 0, 102)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'
        ]
        return arr
      }
      else if (usrDet[2] >= 170 && usrDet[2] < 174) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgb(255, 0, 102)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'
        ]
        return arr
      }
      else if (usrDet[2] >= 174 && usrDet[2] < 178) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgb(255, 0, 102)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'
        ]
        return arr
      }
      else if (usrDet[2] >= 178 && usrDet[2] < 182) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgb(255, 0, 102)',
          'rgba(201, 203, 207)'
        ]
        return arr
      }
      else if (usrDet[2] >= 182 && usrDet[2] < 186) {
        let arr = [
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)',
          'rgb(255, 0, 102)'
        ]
        return arr
      }
    },
    borderWidth: 3
  }]
}
const configMW = {
  type: 'bar',
  data: dataMW,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Male -  Weight',
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Class-Interval'
        }
      }
    }
  },
};
const labelFH = analyzeFH.classInterval;
const dataFH = {
  labels: labelFH,
  datasets: [{
    label: 'Height Count',
    data: analyzeFH.fi,
    // backgroundColor: [
    //   'rgba(255, 99, 132, 0.2)',
    //   'rgba(255, 159, 64, 0.2)',
    //   'rgba(255, 205, 86, 0.2)',
    //   'rgba(75, 192, 192, 0.2)',
    //   'rgba(54, 162, 235, 0.2)',
    //   'rgba(153, 102, 255, 0.2)',
    //   'rgba(201, 203, 207, 0.2)'
    // ]
    backgroundColor: function color() {
      const usrDet = getValues()
      if (usrDet[2] >= 149 && usrDet[2] < 153) {
        let arr = [
          'rgb(124, 51, 153)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ]
        return arr
      }
      else if (usrDet[2] >= 153 && usrDet[2] < 157) {
        let arr = [
          'rgba(255, 99, 132, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ]
        return arr
      }
      else if (usrDet[2] >= 157 && usrDet[2] < 161) {
        let arr = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ]
        return arr
      }
      else if (usrDet[2] >= 161 && usrDet[2] < 165) {
        let arr = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ]
        return arr
      }
      else if (usrDet[2] >= 165 && usrDet[2] < 169) {
        let arr = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(54, 162, 235, 0.2)',
        ]
        return arr
      }
      else if (usrDet[2] >= 169 && usrDet[2] < 173) {
        let arr = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgb(124, 51, 153)',
        ]
        return arr
      }
    },
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 3
  }]
}
const configFH = {
  type: 'bar',
  data: dataFH,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Female -  Height',
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Class-Interval'
        }
      }
    }
  },
};
const labelFW = analyzeFW.classInterval
const dataFW = {
  labels: labelFW,
  datasets: [{
    label: 'Weight Count',
    data: analyzeFW.fi,
    // backgroundColor: [
    //   'rgba(255, 99, 132, 0.2)',
    //   'rgba(255, 159, 64, 0.2)',
    //   'rgba(255, 205, 86, 0.2)',
    //   'rgba(75, 192, 192, 0.2)',
    //   'rgba(54, 162, 235, 0.2)',
    //   'rgba(153, 102, 255, 0.2)',
    //   'rgba(201, 203, 207, 0.2)'
    // ]
    backgroundColor: function color() {
      const usrDet = getValues();
      if (usrDet[3] >= 40 && usrDet[3] < 44) {
        let arr = [
          'rgb(124, 51, 153)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 44 && usrDet[3] < 48) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 48 && usrDet[3] < 52) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 52 && usrDet[3] < 56) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 56 && usrDet[3] < 60) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 60 && usrDet[3] < 64) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 64 && usrDet[3] < 68) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 68 && usrDet[3] < 72) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 72 && usrDet[3] < 76) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgb(124, 51, 153)',
          'rgba(148, 218, 251, 0.2)',
        ]
        return arr
      }
      else if (usrDet[3] >= 76 && usrDet[3] < 80) {
        let arr = [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(253, 156, 255, 0.2)',
          'rgba(133, 234, 166, 0.2)',
          'rgba(239, 176, 178, 0.2)',
          'rgba(148, 218, 251, 0.2)',
          'rgb(124, 51, 153)'
        ]
        return arr
      }
    },
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 3
  }]
}
const configFW = {
  type: 'bar',
  data: dataFW,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Female -  Weight',
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Class-Interval'
        }
      }
    }
  },
};
sub.addEventListener("click", function () {
  const usrDet = getValues()
  if (usrDet[0] == "") {
    window.alert("Please enter your details.")
  }
  else if (usrDet[1] == "null") {
    window.alert("Please select your gender.")
  }
  else if ((typeof (usrDet[2]) == "string") || usrDet[2] > 200) {
    window.alert("Please enter correct height.")
  }
  else if ((typeof (usrDet[3]) == "string") || usrDet[3] > 120) {
    window.alert("Please enter correct weight.")
  }
  else {
    if (usrDet[1] == "m") {
      var myChart = new Chart(document.getElementById('myChart'), configMH);
      var myChart2 = new Chart(document.getElementById('myChart2'), configMW);
      canvas.forEach(e => {
        e.style.border = '2px solid rgb(0 52 65)'
      })
      // myChart.destroy();
      // myChart2.destroy();
      rest.addEventListener("click", () => {
        canvas.forEach(e => {
          e.style.border = 'none'
        })
        myChart.destroy();
        myChart2.destroy();
      })

    } else {
      var myChart = new Chart(document.getElementById('myChart'), configFH);
      var myChart2 = new Chart(document.getElementById('myChart2'), configFW);
      // myChart.destroy();
      // myChart2.destroy(); 
    }
  }
})