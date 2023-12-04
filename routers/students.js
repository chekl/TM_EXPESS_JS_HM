const express = require('express');
const router = express.Router();

const studentData = require('../mock/studentStatistics');

router.get('/', (req, res) => {
  res.json(studentData);
});

router.get('/worst_score', (req, res) => {
  let min = {
    studentIndex: -1,
    score: 100,
  };
  studentData.studentStatistics.map((s, index) =>
    s.scores.map((sc) => {
      if (sc.type === 'homework') {
        min =
          sc.score < min.score ? { studentIndex: index, score: sc.score } : min;
      }
    })
  );
  res.json(studentData.studentStatistics[min.studentIndex]);
});

module.exports = router;
