const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },  
  worldMap: {
    type: Array,
    required: true
  }, 
  unlockedBoxes: {
    type: Array,
    default: 0,
    required: true
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  // setting an array of 100 numbers upon user creation.
  let arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 4))  
    if (i === 99){
      this.worldMap = arr
    }  
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
