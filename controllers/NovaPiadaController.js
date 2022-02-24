const Piada = require('../models/nova-piada');

module.exports = {
  async create(req, res) {
    const { name, email, text } = req.body;
    if (!name || !email || !text) return res.status(400).send({ error: 'Dados insuficientes!' });

    try {
        const joke = await Piada.create(req.body);
        return res.status(201).send({joke});
    }
    catch (err) {
      return res.status(500).send({ error: err });
    }
  },

};
