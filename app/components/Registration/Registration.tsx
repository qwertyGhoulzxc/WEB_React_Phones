import { FC, useState } from 'react'
import Layout from '../Layout/Layout'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {IFormFields,IInputType} from './form.interfaces'
import PhoneInput from 'react-phone-input-2'
import styles from './Registration.module.scss'

const Registration: FC = () => {

const {register,handleSubmit, formState:{errors},reset,setValue,control} = useForm<IFormFields>({mode:'onChange'})

const [inputTypePassword,setInputTypePassword] = useState<IInputType>('password')



const onSubmit:SubmitHandler<IFormFields> = (data)=>{
console.log(data);

reset({
    email:'',
    number:'',
    password:''
})
}




  return (<Layout title='registration' description='регистрируйтесь на сайте Life:) для поукупо гаджетов по низким ценам'>
    
<form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <h2>Регистрация</h2>
<input
{...register('email',
{
    required:'заполните поле',
    pattern:{
        value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message:'введите правильный email'
    }
})}
placeholder='email'
type="text" />
{errors.email && <div>{errors.email.message}</div>}





{/* <PhoneInput
        country={'by'}
        placeholder='+375 (29) 123 12 12'
        inputProps={{
            name: "number",
            required: true,
            
          }}
        autocompleteSearch={false}
        onChange={setNumState}
        
      /> */}



<Controller
  control={control}
  name="number"
  rules={{ required: true,minLength:{value:12,message:'введите номер телефона'},maxLength:{value:12,message:'введите номер телефона'} }}
  render={({ field: { ref, ...field } }) => (
    <PhoneInput
      {...field}
      inputProps={{
        ref,
        required: true,
        autoFocus: true
      }}
      country={"by"}
      onlyCountries={["by"]}
      countryCodeEditable={false}
      specialLabel={"Player Mobile Number"}
      placeholder='+375 29 777 22 33'
    />
  )}
/>
{errors.number?.message&&<div>{errors.number.message}</div>}


<input
    type={inputTypePassword}
autoComplete='off'
{...register('password',{
required:'Заполните поле',
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
{errors?.password && <p>{String(errors?.password?.message) || 'Пароль должен содержать заглавные буквы цифры'}</p> }

<button>send</button>
</form>


  </Layout>
  )

// пофиксить баг с reset tel num

   
}

export default Registration