const mongoose = require('mongoose');
const validator = require('validator');

const pharmacySchema = new mongoose.Schema({
  name :{
    type : String,
    required : [true , 'please provide your pharmacy name ⚕'],
    unique : true
  },
  
  phone1 : {
    type : String,
    required : true,
    // validate: {
    //   validator: function(el) {
    //       return validator.isMobilePhone(el , 'ar-SY');
    //   },
    //   message: 'This number is not a valid!'
  },
  phone2 : {
    type : String,
    required : true,
  //   validate: {
  //     validator: function(el) {
  //         return validator.isMobilePhone(el , 'ar-SY');
  //     },
  //     message: 'This number is not a valid!'
  // }
  },
  address : {
    type : String,
    required : true,
  },

  pharmacistPhoto : String,

  pharmacyImage : String,

  password: {
    type: String,
    required: [true, 'please provide a password!'],
    minLength: 8,
    select: false
},

confirmPassword: {
    type: String,
    required: [true, 'please provide a confirm password!'],
    validate: {
        validator: function(el) {
            return el === this.password;
        },
        message: 'passwords are not the same!'
    }
},

  repositories : {
    type : [mongoose.Types.ObjectId],
    ref : 'Repository'
  }
    // location: {
  //   type: {
  //     type: String, // Don't do `{ location: { type: String } }`
  //     enum: ['Point'], // 'location.type' must be 'Point'
  //     required: true
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true
  //   }
  // },

})

const Pharmacy = mongoose.model('Pharmacy' , pharmacySchema);

module.exports = Pharmacy;