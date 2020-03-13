const validateInputs = ({username, password}) => {
  const errors = {}

  if (!username) {
    errors.username = 'Required'
  }

  if (!password) {
    errors.password = 'Required'
  }

  return errors
}

export {validateInputs}
