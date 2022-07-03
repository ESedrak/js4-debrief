// BASIC SYNTAX
// Selectors:
// let elementName = document.querySelector("#elementId");

// // Functions
// function functionName() {
//   // do something here
// }

// // Call the event with an event listener
// elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
let inputName = document.getElementById("myName");
let btnClickMe = document.getElementById("btnName");

function clickedButton() {
  inputName.value = "My name is Liz!";
}

btnClickMe.addEventListener("click", clickedButton);

// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors

const imageOff = document.getElementById("imageOff");
imageOff.addEventListener("mouseover", changeLights);

function changeLights() {
  imageOff.src = "./images/lighton.png";
  imageOff.addEventListener("mouseleave", imageOn);

  function imageOn() {
    imageOff.src = "./images/lightoff.png";
  }
}

// Call the event

// 3. Double click button to display content
// Selectors

let btnDblClick = document.getElementById("btndbName");
btnDblClick.addEventListener("dblclick", displayContent);

function displayContent() {
  let displayPara = document.getElementById("displayPara");
  displayPara.innerHTML = "Some text here!";
  displayPara.style.color = "purple";

  let newImg = document.createElement("img");
  newImg.classList.add("img-fluid");

  newImg.src = "./images/smileyface.png";

  document.getElementById("displayContent").appendChild(newImg);
}

// Call the event

// 4. Traffic Lights
// Selectors

// Red light
let btnStop = document.querySelector("#btnStop");
btnStop.addEventListener("click", redLights);
let stopLight = document.querySelector("#stopDiv");

function redLights() {
  readyLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "black";
  stopLight.style.backgroundColor = "red";
}

// Orange light
let btnReady = document.querySelector("#btnReady");
btnReady.addEventListener("click", orangeLights);
let readyLight = document.querySelector("#readyDiv");

function orangeLights() {
  goLight.style.backgroundColor = "black";
  stopLight.style.backgroundColor = "black";
  readyLight.style.backgroundColor = "orange";
}

// green light
let btnGo = document.querySelector("#btnGo");
btnGo.addEventListener("click", greenLights);
let goLight = document.querySelector("#goDiv");

function greenLights() {
  stopLight.style.backgroundColor = "black";
  readyLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "green";
}

// Function 1
// Function 2
// Function 3

// Call the events

// 5. Change textbox border colours
// Selectors
let borderBtn = document.getElementById("btn2Name");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
// Function
borderBtn.onclick = () => {
  firstName.style.borderColor = "pink";
  lastName.style.borderColor = "purple";
};

// borderBtn.addEventListener("click", changeBorder);
// Call the event

// 6. Validate the input [length should be more than 5 characters]
// Selectors
let inputValueValidate = document.getElementById("myName2");
let validateBtn = document.getElementById("btnSub2");
let errMsg = document.getElementById("errMsg");

// message styles

let redMsg = (errMsg.style.color = "red");

// function
validateBtn.onclick = () => {
  if (inputValueValidate.value === "") {
    redMsg;
    errMsg.innerText = "Please input a value!";
  } else if (inputValueValidate.value.length < 8) {
    redMsg;
    errMsg.innerText = "Input needs to be greater than 8";
  } else {
    errMsg.style.color = "Green";
    errMsg.innerText = "Success! Than you for your submission!";
  }
};

// Call the event

// 7.create a list of hobbies
// Selectors
let btnHobbies = document.getElementById("btnHobbies");
let addHobbies = document.getElementById("hobbiesList");

btnHobbies.onclick = () => {
  for (let i = 1; i <= 3; i++) {
    let promptHobbies = prompt("What are your hobbies? ( 3 Hobbies)");
    for (let j = 1; j <= 1; j++) {
      let addList = document.createElement("li");
      addList.innerHTML = `Hobby number ${i} is ${promptHobbies}`;
      addHobbies.appendChild(addList);
    }
  }
};

/*Function {
  //for loop
}*/

// let addHobby = document.querySelector(#hobbies)
// let listButton = document.querySelector("#btnHobbies")

// Call the event

// 8. Display a profile card from an object
//Object

const btnProfile = document.getElementById("btnProfile");
const displayCard = document.getElementById("displayCard");

const showProfile = () => {
  // Img with alt text
  let newImg = document.createElement("img");
  newImg.classList.add("img-fluid");
  newImg.alt = "Profile Picture";
  newImg.src = "./images/face.jpg";
  displayCard.appendChild(newImg);
  //Your name
  let addName = document.createElement("h2");
  addName.id = "headerName";
  addName.innerHTML = "Liz";
  displayCard.appendChild(addName);
  // Your role
  let addRole = document.createElement("p");
  addRole.classList.add("role");
  addRole.innerHTML = "My Role Is .........";
  displayCard.appendChild(addRole);
  // Hobbies

  let hobbies = ["Fishing", "Skating", "Surfing"];

  for (let i = 0; i < 1; i++) {
    let listView = document.createElement("ul");
    for (let j = 0; j < hobbies.length; j++) {
      let myHobbies = hobbies[j];
      let addHobbies = document.createElement("li");
      addHobbies.innerHTML = myHobbies;
      listView.appendChild(addHobbies);
    }

    displayCard.appendChild(listView);
  }
};

btnProfile.addEventListener("click", showProfile);

// Selectors

/*Function {
    //for loop
      //if statement
  }*/
