const express = require('express');
const router = express.Router();

const studentStatistics = require('../mock/studentStatistics');

router.get('/', (req, res) => {
  res.json(studentStatistics);
});

router.get('/worst_score', (req, res) => {
  let min = {
    studentIndex: -1,
    score: 100,
  };

  studentStatistics.map((s, index) =>
    s.scores.map((sc) => {
      if (sc.type === 'homework') {
        min =
          sc.score < min.score ? { studentIndex: index, score: sc.score } : min;
      }
    })
  );

  if (min.studentIndex < 0) {
    res.json({ result: 'All students have an excellent score' });
  }

  res.json(studentStatistics[min.studentIndex]);
});

module.exports = router;
