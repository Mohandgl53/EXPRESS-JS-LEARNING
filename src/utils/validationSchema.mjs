export const createUserValidationSchema = {
    username:{
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
    age:{
        notEmpty:{
            errorMessage: "Age must not be Empty"
        }
    }
}