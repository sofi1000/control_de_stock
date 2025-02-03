const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.status(201).json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear usuario' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};


const Item = require('../models/item');

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