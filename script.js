// function signup() {
//   var button = document.querySelector(`form#form div`);
//   var myFirstName = document.querySelector(`form#form input[name="firstname"]`);
//   var myLastName = document.querySelector(`form#form input[name="lastname"]`);
//   var myPhoneNumber = document.querySelector(
//     `form#form input[name="phonenumber"]`
//   );
//   var myEmail = document.querySelector(`form#form input[name="email"]`);
//   var myPassword = document.querySelector(`form#form input[name="password"]`);
//   var obj = {
//     firstName: myFirstName.value,
//     lastName: myLastName.value,
//     phoneNumber: myPhoneNumber.value,
//     email: myEmail.value,
//     password: myPassword.value,
//   };
//   console.log(obj);

//   var options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   };
//   fetch("http://localhost:3000/login", options)
//     .then((r) => r.json())
//     .then((response) => console.log(response));
// }
// $("#myModal").on("hidden.bs.modal", function () {
//   callPlayer("yt-player", "stopVideo");
// });
