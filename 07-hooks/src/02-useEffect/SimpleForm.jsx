import { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'nacho',
        email: 'asd@asd.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    useEffect(() => {
        // console.log('useEffect called');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed');
    }, [email]);


    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Simple Form</h1>
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
            </div>

            {
                username === 'nacho' && <Message />
            }
        </>
    );
};

export default SimpleForm;
