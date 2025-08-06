import * as Z from 'zod'

export const LoginSchema = Z.object({
       username: Z.string("لطفا نام کاربری را وارد کنید.").min(3, "نام کاربری حداقل باید سه حرف باشه"),
       password: Z.string("لطفا رمز عبور را وارد کنید").min(8, "رمز عبور باید حداقل هشت رقم باشد")
}) 