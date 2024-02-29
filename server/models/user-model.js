import {Schema,model} from 'mongoose';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    fullName:{
        type: String,
        required: true,
        minLength: [3,'Min 3 characters are required!'],
        maxLength:[20,'Max 20 character allowed'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        

    },
    password: {
        type: String,
        required: true,
        minLength: [8,'Min 8 characters are required!'],
        select: false, //Password wont be visible in get requests because of this.
    },
    role: {
        type: String,
        enum: ['USER' , 'ADMIN' , 'SUPER ADMIN'],
        default: 'USER',
    },
},{ 
    timestamps: true,
});

UserSchema.methods = {
    generateJWTToken: function(){
        return jwt.sign({ id: this._id , role: this.role }, process.env.JWT_PASSWORD , {expiresIn : process.env.JWT_EXPIRY});
    }
}

const User = model('User',UserSchema);

export default User;










 