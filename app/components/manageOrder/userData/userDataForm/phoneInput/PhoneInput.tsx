import PhoneInput from 'react-phone-input-2';
import {Controller} from 'react-hook-form';
import {PhoneInputByProps} from "@/app/components/Enter/form/form.interfaces";
import {useAppSelector} from "@/app/hooks/redux";


const PhoneInputField: React.FC<PhoneInputByProps> = ({name, control, ...phoneInputProps}) => {
    const {buyer} = useAppSelector(state => state.ManageOrderSliceReducer)
    return (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue={buyer.number}
                rules={{
                    required: true,
                    minLength: {value: 12, message: 'введите номер телефона'},
                    maxLength: {value: 12, message: 'введите номер телефона'},
                }}
                render={({field: {ref, ...field}}) => (
                    <PhoneInput
                        {...field}
                        {...phoneInputProps}
                        inputProps={{
                            ref,
                            required: true,
                            autoFocus: true,
                        }}
                        country={"by"}
                        onlyCountries={["by"]}
                        countryCodeEditable={false}
                        placeholder="+375 29 777 22 33"
                        specialLabel=''
                    />
                )}
            />
        </>
    );
};

export default PhoneInputField;