import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"; //Use Context: Boilerplate comes with the Context configured. Check /store folder
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.css";

//One component: ContactCard: displays just one contact.
const ContactCard = () => {
	const { store, actions } = useContext(Context); // Accessing store and actions from the global context

	// State variables for managing contact details and editing state
	const [editing, setEditing] = useState(false);
	const [name, setName] = useState(""); //why is useState not supposed to be empty string but instead store.contacts[index].name ?
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	// Effect to set initial state for contact details when component mounts
	
}

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
