import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Request from "../../components/Request";

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	login = user => {
		localStorage.setItem("sica_user", JSON.stringify(user));
		window.history.go("")
	}
	render() {
		return (
			<Request method="POST" path="/User/user">
				{({ loading, error_messages, error, data, sendRequest }) => {
					return (
						<Form
							error_messages={error_messages}
							fields={[
								{ key: "FirstName", label: "First Name", placeholder: "First Name", required: true },
								{ key: "LastName", label: "Last Name", placeholder: "Last Name", required: true },
								{ key: "Username", label: "Username", placeholder: "Username", required: true },
								{ key: "Email", label: "Email", type: "email", placeholder: "Email", required: true },
							]}
							submit_button_value={loading ? "loading" : "submit"}
							onSuccess={
								async data =>
									loading ?
										undefined :
										this.login(
											(await sendRequest(data)).result
										)
							}
						>
							{({ fields, onSubmit, ...rest }) => {
								return (
									<form onSubmit={e => {
										e.preventDefault();
										onSubmit(e)
									}}>
										<div className="inputs-group">
											{fields.map(f => (
												<label className="mylabel" htmlFor>
													<div className="mylabel__img">
														<img src={"./toolkit/images/user.svg"} alt="" />
													</div>
													<input onChange={f.onChange} className="input" type={f.type} placeholder={f.placeholder} />
												</label>
											))}
											<label className="checkbox-group">
												<input className="mycheckbox" type="checkbox" />
												<p>I agree to all of Sica’s <a href="#">Terms and Conditions</a></p>
											</label>
											<button type="submit" className="button mybutton">Sign Up</button>
											<p className="text-center">Already a member? <Link to="/login">Log in</Link></p>
										</div>
									</form>
								)
							}}
						</Form>
					)
				}}
			</Request>
		)
	}
}

export default RegisterForm;