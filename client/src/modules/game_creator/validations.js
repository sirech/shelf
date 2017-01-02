import validator from 'validator'

export default {
  title: {
    validate: (val) => validator.isLength(val, { min: 5, max: 200 }),
    message: 'Title has to have between 5 and 200 characters'
  },

  year: {
    validate: (val) => val >= 2010,
    message: 'Year has to be 2010 or higher'
  }
}
