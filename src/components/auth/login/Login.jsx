import { Form, Button } from "react-bootstrap";
import {useState, useEffect} from 'react'
import { login, auth } from "../../../services/authServices";
import {useAuthState} from "react-firebase-hooks/auth"
import {link, useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate
    const [crediantials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const [user,loading,error] = useAuthState(auth)
    useEffect(()=>{
        if(loading) {
            return
        }
        if(user){
            navigate('/expenses')
        }

    }, [user,loading]) 
    const handleChange = (e) => {
        setCredentials({
            ...crediantials,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        login(crediantials.email, crediantials.password)
    }
    console.log(crediantials)
  return (
    <>
      <h2 className="text-center mt-3">Prisijungti</h2>
      <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            value={crediantials.email}
            onChange={handleChange}
            placeholder="Jus el. pasto adresas"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            value={crediantials.password}
            onChange={handleChange}
            placeholder="Iveskite slaptazodi"
          />
        </Form.Group>
        <Button type="submit">Prisijungti</Button>
      </Form>
    </>
  );
};

export default Login;
