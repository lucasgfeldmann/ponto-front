import Input from "../../components/Input";
import Auth from "../../services/auth";
import "./styles.css"




function Register() {
    function search(dataForm: FormData) {
        const name = dataForm.get("name");
        const email = dataForm.get("email");
        const password = dataForm.get("password");

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            console.error("Invalid form data");
            return;
        }

        Auth.login({
            name: name,
            email: email,
            password: password
        })
    }
    return (
        <div className="page">
            <div className="content">
                <form action={search}>
                    <div>
                        <label>Name</label>
                        <Input name="name" type="text" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Input name="email" type="email" aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Input name="password" type="password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;