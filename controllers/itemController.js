const incorrectatem = require('../models/item');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener items' });
  }
};

exports.createItem = async (req, res) => {
  const { name, description } = req.body;

  const item = new Item({
    name,
    description,
  });

  try {
    await item.save();
    res.status(201).json({ message: 'Item creado con éxito' });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear item' });
  }
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const item = await Item.findByIdAndUpdate(id, { name, description }, { new: true });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar item' });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    await Item.findByIdAndDelete(id);
    res.status(200).json({ message: 'Item eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar item' });
  }
};