function loginValidator(req, res, next) {
  const { name, password } = req.body;
  const errors = [];

  if (!name) {
    errors.push('Name is required');
  } else {
    if (name.length > 50) {
      errors.push('Name cannot be longer than 50 characters');
    }

    if (/[\W_]+/g.test(name)) {
      errors.push('Name needs to be alphanumeric');
    }
  }

  if (!password) {
    errors.push('Password is required');
  } else {
    if (password.length > 50) {
      errors.push('Password cannot be longer than 50 characters');
    }

    if (/[\W_]+/g.test(password)) {
      errors.push('Password needs to be alphanumeric');
    }
  }

  if (errors.length > 0) {
    res.status(400).send({ errors });
  } else {
    next();
  }
}

module.exports = loginValidator;
