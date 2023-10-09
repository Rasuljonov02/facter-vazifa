import "./main.css";
import { faker } from "@faker-js/faker";

const btn: HTMLButtonElement = document.querySelector(".btn")!;
const span: HTMLParagraphElement = document.querySelector(".span")!;
const contener: HTMLDivElement = document.querySelector(".contener")!;
const name: HTMLParagraphElement = document.querySelector(".name")!;
const email: HTMLParagraphElement = document.querySelector(".email")!;
const input: HTMLInputElement = document.querySelector("input")!;
const xasb: HTMLParagraphElement = document.querySelector(".xasb")!;
const biol: HTMLParagraphElement = document.querySelector(".biol")!;
btn.addEventListener("click", (e) => {
	const randomName = faker.person.fullName();
	const randomEmail = faker.internet.email();
	const randombio = faker.lorem.paragraphs();

	xasb.innerText = input.value;
	name.innerText = ` ${randomName}`;
	biol.innerText = ` ${randombio}`;
	email.innerText = ` ${randomEmail}`;
	span.style.display = "flex";
	contener.style.gap = "20px";
	console.log("Button clicked!");
	console.log(randomName);
	console.log(randomEmail);
});
