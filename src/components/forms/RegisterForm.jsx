import { Container } from "react-bootstrap";




export default function RegisterForm() {

    const [ user, setUser ] = useState({});

    console.log(user);
    return (
        <Container>
            <h3>Register</h3>
            <form action="">
                <label htmlFor="">username</label>
                <input type='text' name='username'/>
                <label htmlFor="email">email</label>
                <input type="text" name='email'/>
                <label htmlFor="password">password</label>
                <input type="password" name="password"/>
                <label htmlFor="confirm-password">confirm password</label>
                <input type="text" name="confirm-password" />
                <label htmlFor="first-name">first-name</label>
                <input type="text" name="first-name" />
                <label htmlFor="last-name"></label>
                <input type="text" />
            </form>
        </Container>
    )
}