import { FormEventHandler, useState } from "react"
import { Button, Section } from "../../components"
import Input from "../../components/Input"
import { get } from "idb-keyval"
import { signinLocalStorage } from "../../utils/auth"
import { Link, useNavigate } from "react-router-dom"

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const onSubmit:FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const account = await get(email);
        if(account && password === JSON.parse(account).password) {
            signinLocalStorage(email, JSON.parse(account).name)
            navigate('/')
        } else {
            alert('Логин немесе пароль қате!')
        }
    }
  return (
    <Section className="h-screen flex flex-col items-center justify-center">
        <form onSubmit={onSubmit} className="flex flex-col gap-3 bg-primary p-4 rounded-xl">
            <p className="text-xl font-bold">Кіру</p>
            <Input onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Email" type="email"/>
            <Input onChange={(e) => setPassword(e.target.value)} label="Пароль" placeholder="Пароль" type="password"/>
            <Button type="submit">Кіру</Button>
        </form>
        <Link to={'/signup'}>Тіркелу</Link>
    </Section>
  )
}

export default LogIn