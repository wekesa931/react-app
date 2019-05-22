import React from 'react';
import { Input, Label } from 'reactstrap';

const AuthForm = (props) => {
    const userAuthenticate = ()=>{
        let formArray = [];
        for(let item in props.formFields){
            formArray.push({
                id: item,
                formItemType: props.formFields[item]
            })
        };
        return(
            formArray.map((field,i)=>{
                return(
                    <div key={i}>
                        {renderTemplates(field)}
                    </div>
                )
            })
        )
    }
    const showLabel = (label)=>(
        <div>
            {label}
        </div>
    )

    const changeHandler = (event,id)=>{
        const newState = props.formFields
        newState[id].value = event.target.value
        props.change(newState)
    }

    const renderTemplates = (field)=>{
        let formTemplate = '';
        let { type, name, value, placeholder,label } = field.formItemType
        const inputTemplate = ()=>{
            
            return(
                <div>
                    <Label>{showLabel(label)}</Label>
                    <Input type={type} 
                            name={name} 
                            value={value} 
                            placeholder={placeholder} 
                            onChange={
                                (event)=>changeHandler(event,field.id)}/>
                </div>
            )
        }
        switch(field.formItemType.element){
            case('input'):
            formTemplate = inputTemplate()
            break;
            default:
                formTemplate

        }
        return formTemplate
    }

    return ( 
        <div>
            {userAuthenticate()}
        </div>
     );
}
 
export default AuthForm;
