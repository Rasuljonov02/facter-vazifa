import "./main.css";
import { faker } from "@faker-js/faker";

const studmalumot: HTMLButtonElement = document.querySelector(".student")!;
const span: HTMLParagraphElement = document.querySelector(".span")!;
const contener: HTMLDivElement = document.querySelector(".contener")!;

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();

studmalumot.addEventListener("click", () => {
	const pelementname = document.createElement("p");
	pelementname.classList.add("malumot");
	pelementname.innerText = ` name :${randomName}`;
	span.appendChild(pelementname);

	const pelementemail = document.createElement("p");
	pelementemail.classList.add("ma’lumot");
	pelementemail.innerText = `Email :${randomEmail}`;
	span.appendChild(pelementemail);
	contener.style.gap = "20px";
	console.log("Button clicked!");
});
console.log(randomName);
console.log(randomEmail);
