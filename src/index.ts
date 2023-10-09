import "./main.css";
import { faker } from "@faker-js/faker";

const studmalumot: HTMLButtonElement = document.querySelector(".student")!;

const contener: HTMLDivElement = document.querySelector(".contener")!;

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();

studmalumot.addEventListener("click", () => {
	const pelementname = document.createElement("p");
	pelementname.classList.add("malumot");
	pelementname.innerText = ` name :${randomName}`;
	contener.appendChild(pelementname);

	const pelementemail = document.createElement("p");
	pelementemail.classList.add("ma’lumot");
	pelementemail.innerText = `Email :${randomEmail}`;
	contener.appendChild(pelementemail);

	console.log(randomName);
	console.log(randomEmail);
	console.log("Button clicked!");
});
