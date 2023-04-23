
export default function Account() {
    return (

    <div className='account'>
        <h1>Account</h1>
        <div className='accountList'>
            <li>
                <h2>Email:</h2>
                <input id="email" type="email" placeholder="Enter your email" className="accountInput" required/>
                <h2>Username:</h2>
                <input id="username" type="username" placeholder="Enter username" className="accountInput" required/>
            </li>

            <li>
                <h2>Online time:</h2>
                <p>450 hrs</p>
            </li>
        </div>

    </div>



    )
}