import * as Yup from 'yup'

const ProfileSchema = Yup.object({
    firstName:Yup.string().min(2).max(15).required("Please enter your first name"),
    lastName:Yup.string().min(2).max(15).required("Please enter your last name"),
    userName:Yup.string().email().required("Please enter your user name"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),
    

})

export default ProfileSchema;