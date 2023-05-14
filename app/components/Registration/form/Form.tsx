import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {IFormProps, IFormFields,IInputType, TChooseLogin} from './form.interfaces'
import styles from './From.module.scss'
import PhoneInputField from './inputs/PhoneInputBy'

const Form: FC<IFormProps> = ({IFormState,title}) => {

const {register,handleSubmit, formState:{errors},reset,control,getValues} = useForm<IFormFields>({mode:'onChange'})

const [inputTypePassword,setInputTypePassword] = useState<IInputType>('password')


// пропсы h2 и .. + styles


const onSubmit:SubmitHandler<IFormFields> = (data)=>{
console.log(data);
reset({
    email:'',
    number:'375',
    password:'',
    confirmPassword:''
})
}

const handleShowPassword = ()=>{
    inputTypePassword==='password'?setInputTypePassword('text'):setInputTypePassword('password')
}


if(IFormState==='registration'){

    return(
        <div className={styles.content}>
        
        <form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>{title}</h2>
        <input
        {...register('email',
        {
            required:'заполните поле',
            pattern:{
                value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:'введите правильный email'
            }
        })}
        placeholder='&nbsp;почта'
        type="text" />
        {errors.email && <div className={styles.Error}>{errors.email.message}</div>}
        
        <PhoneInputField name='number' control={control}   />
        {errors.number?.message&&<div className={styles.Error}>{errors.number.message}</div>}
        
        <div className={styles.PasswordInput}>
        <input
            type={inputTypePassword}
        autoComplete='off'
        placeholder='&nbsp;пароль'
        {...register('password',{
        required:'заполните поле',
        minLength:{
                value:8,
                message:'минимум 8 символов',   
        },
        maxLength:{
            value:32,
            message:'максимум 32 символов',   
        },
        validate:password=>{
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
        return passwordRegex.test(password);
        }
        })} />
        <svg style={inputTypePassword==='password'?{fill:'#011F7F'}:{fill:'red'}}   onClick={handleShowPassword} viewBox="0 0 24 24">
                                <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                            </svg>
        {errors?.password && <div className={styles.Error}>{String(errors?.password?.message) || 'ошибка при валидации'}</div> }
        </div>
        
        <input
                                type={inputTypePassword}
                                placeholder='&nbsp;подтвердите пароль'
                                autoComplete='off'
                                {...register('confirmPassword',{
                                        required: 'заполните поле',
                                    validate: (value) => value === getValues('password') || 'пароли не совпадают',
                                })}
                            />
        {errors?.confirmPassword && <div className={styles.Error}>{errors?.confirmPassword?.message}</div> }
        
        
        <button>Отправить</button>
        </form>
        </div>
    )
}

const [chooseLogin,setChooseLogin] = useState<TChooseLogin>('PhoneNumber')

  return (

        <div className={styles.content}>
        
        {/* {chooseLogin==='PhoneNumber'?<>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
        :<>email</>} */}




        <form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>{title}</h2>
            
            <div className={styles.ChooseWay}>
            <button style={{}} className={styles.btnChooseWay}>телефон</button>
            
            <button className={styles.btnChooseWay}>почта</button>

            </div>


        <input
        {...register('email',
        {
            required:'заполните поле',
            pattern:{
                value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:'введите правильный email'
            }
        })}
        placeholder='&nbsp;почта'
        type="text" />
        {errors.email && <div className={styles.Error}>{errors.email.message}</div>}
        
        <PhoneInputField name='number' control={control}   />
        {errors.number?.message&&<div className={styles.Error}>{errors.number.message}</div>}
        
        <div className={styles.PasswordInput}>
        <input
            type={inputTypePassword}
        autoComplete='off'
        placeholder='&nbsp;пароль'
        {...register('password',{
        required:'заполните поле',
        minLength:{
                value:8,
                message:'минимум 8 символов',   
        },
        maxLength:{
            value:32,
            message:'максимум 32 символов',   
        },
        validate:password=>{
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
        return passwordRegex.test(password);
        }
        })} />
        <svg style={inputTypePassword==='password'?{fill:'#011F7F'}:{fill:'red'}}   onClick={handleShowPassword} viewBox="0 0 24 24">
                                <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                            </svg>
        {errors?.password && <div className={styles.Error}>{String(errors?.password?.message) || 'ошибка при валидации'}</div> }
        </div>
        
        
        
        <button>Отправить</button>
        </form>
        </div>

  )


   
}

export default Form