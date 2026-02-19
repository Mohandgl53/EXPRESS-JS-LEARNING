export const createUserValidationSchema = {
    user_name:{
        notEmpty:{
            errorMessage: "User Name must not be Empty"
        },
        isLength:{
            options:{min:3, max:15},
            errorMessage: "User Name must be btw length 3 to 15"
        },
        isString:{
            errorMessage: "User Name must be a String"
        }
    },
    password:{
        notEmpty:{
            errorMessage: "Password must not be Empty"
        }
    }
}