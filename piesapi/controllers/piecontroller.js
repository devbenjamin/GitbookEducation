let router = require('express').Router();
const Pie = require('../db').import('../models/pie')
// const sequelize = require('../db')
// const Pie = sequelize.import('../models/pie')   // line 2 is doing what lines 3 and 4 do
const validateSession = require('../middleware/validate-session')
// router.get('/pies', function (req, res) {
//   res.send('I love Pie!!! Wheee!!!!');
// });
// router.get('tasty', (req, res) => 
//   res.send('Pies taste really good!'))

router.get('/', validateSession, (req, res) => {
  Pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => re.status(500).json({
      error: err
    }))
})

router.post('/', (req, res) => {
  if (!req.errors) {
    const pieFromRequest = {
      nameOfPie: req.body.nameOfPie,
      baseOfPie: req.body.baseOfPie,
      crust: req.body.crust,
      timeToBake: req.body.timeToBake,
      servings: req.body.servings,
      rating: req.body.rating
    }
    Pie.create(pieFromRequest)
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors) // req.errors is a more specific error than what will be returned from err
  }
})

router.get('/name', (req, res) => {
  Pie.findOne({
      where: {
        nameOfPie: req.pie.nameOfPie
      }
    })
    // Pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json(req.errors))
})

router.put('/id', validateSession, (req, res) => {
  if (!req.errors) {
    Pie.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json(err))
  } else {
    res.json(req.errors)
  }
})

router.delete('/:id', validateSession, (req, res) => {
  Pie.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({
      error: err
    }))
})

module.exports = router;