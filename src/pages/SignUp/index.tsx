import { FormEventHandler, useState } from "react"
import { Button, Section } from "../../components"
import Input from "../../components/Input"
import { get, set } from "idb-keyval"
import { signinLocalStorage } from "../../utils/auth"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();

    const onSubmit:FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const account = await get(email);
        if(password !== confirmPass) {
            alert('Парольдарыңыз сәйкес келмейді!')
        } else if(!account) {
            await set(email, JSON.stringify({name, password}));
            signinLocalStorage(email, name)
            navigate('/')
        } else {
            alert('Аккаунт бұған дейін тіркелген!')
        }
    }
  return (
    <Section className="h-screen flex flex-col items-center justify-center">
        <form onSubmit={onSubmit} className="flex flex-col gap-3 bg-primary p-4 rounded-xl">
            <p className="text-xl font-bold">Регистрация</p>
            <Input onChange={(e) => setName(e.target.value)} label="Атыңыз" placeholder="Атыңыз" type="text"/>
            <Input onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Email" type="email"/>
            <Input onChange={(e) => setPassword(e.target.value)} label="Пароль" placeholder="Пароль" type="password"/>
            <Input onChange={(e) => setConfirmPass(e.target.value)} label="Парольды растаңыз" placeholder="Парольды растаңыз" type="password"/>
            <Button type="submit">Тіркелу</Button>
        </form>
        <Link to={'/login'}>Кіру</Link>
    </Section>
  )
}

export default SignUp