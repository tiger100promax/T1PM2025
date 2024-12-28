document.getElementById("subscriptionForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const mobileNumber = document.getElementById("mobile").value;

  if (mobileNumber.startsWith("+8801") && mobileNumber.length === 14) {
    document.getElementById("message").textContent = "OTP has been sent to " + mobileNumber;
  } else {
    document.getElementById("message").textContent = "Please enter a valid Bangladeshi number.";
  }
});
