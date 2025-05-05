
const { Schema, trusted } = require('mongoose');
const usersSchema = Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },
    street: String,
    apartment: String,
    city: String,
    postalCode: String,
    country: String,
    phone: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, default: false },
    resetPasswordOtp: Number,
    resetPasswordOtpExpires: Date,
    whishList: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            productName:{type:String,required:true},
            productImage:{type:String,required:true},
            productPrice:{type:Number,required:true},
        },
    ],
});

usersSchema.index({email: 1}, {unique: true});

exports.User = model('User', usersSchema);