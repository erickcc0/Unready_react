import { useEffect, useState } from "react" 
import { Message } from "./Message"

export const SimpleForm = () => {

    const [FormState, setFormState] = useState({
        username:'strider',
        email:'fernando@gmail.com'
    })

    const {username, email} = FormState;

    const onInputChange = ({target}) => {
        const { name, value} = target;
        setFormState({
            ...FormState,
            [name]:value
        });

    }

    // useEffect( () => {
    //     console.log('useEffect called!');
    // }, []);

    // useEffect( () => {
    //     console.log('FormState called!');
    // }, [FormState]);

    // useEffect( () => {
    //     console.log('email called!');
    // }, [email]);


    




  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        {
             <Message/>
        }


    </>
  )
}


