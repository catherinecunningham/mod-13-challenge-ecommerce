const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all categories
  Tag.findAll({
    include: [Product],
  })
  .then(categories => res.json(categories))
  // be sure to include its associated Products
  .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product],
  })
  .then(categories => res.json(categories))
  // be sure to include its associated Products
  .catch(err => res.status(500).json(err))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Tag.create(req.body)
  .then(categories => res.json(categories))
  // be sure to include its associated Products
  .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then(categories => res.json(categories))
  // be sure to include its associated Products
  .catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
  .then(categories => res.json(categories))
  // be sure to include its associated Products
  .catch(err => res.status(500).json(err))
});

module.exports = router;