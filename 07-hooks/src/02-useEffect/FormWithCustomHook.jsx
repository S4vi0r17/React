import Message from './Message';
import { useForm } from '../hooks/useForm';

const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    )

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Form With Custom Hook</h1>
                <hr />

                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        name="username"
                        value={username}
                        onChange={onInputChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
            </div>

            <button onClick={onResetForm}>Delete</button>

            {
                username === 'nacho' && <Message />
            }
        </>
    );
};

export default FormWithCustomHook;
