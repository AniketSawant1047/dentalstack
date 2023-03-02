<!-- <template>
  <div class="templete">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section pb-5 pt-5 pt-sm-2 text-center">
            <small>Login as a</small>
            <h4 class="mb-0 pb-3"><span>Admin</span><span>Doctor</span></h4>
            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-front">
                  <div class="form">
                    <form action="" @submit.prevent="handleSubmit">
                      <div class="h1">
                        <img src="./Images/logo.png" alt="logo" style="width: 180px; filter: invert();">
                      </div>
                      <div class="center">
                        <div class="form-input">
                          <i class="input-icon bx bx-pen"></i>
                          <input class="input" type="text" required v-model="doctorName" placeholder="  Full Name">
                        </div>
                        <div class="form-input">
                          <i class="input-icon bx bx-envelope-open"></i>
                          <input class="input" type="email" v-on:focusout="validateEmail($event)" required v-model="doctorEmail" placeholder="Email">
                          <button class="verify-button" id="mail" @click="sendEmail()">Verify</button>
                          <div id="link">Link is sent to your Email Please Verify from the link..!</div>
                        </div>
                        <div class="form-input">
                          <i class="bx bx-mobile-alt" id="phoneIcon"></i>

                          <select name="" id="dropdown">
                            <option value="+91"> IND +91</option>
                            <option value="+64">NZ +64</option>
                            <option value="+27">SA +27</option>
                            <option value="+1">USA +1</option>
                            <option value="+61">AS +61</option>
                          </select>
                          <i class="fa-solid fa-circle-check" id="verified"></i>
                          <input type="tel" class="input" placeholder="Phone" id="phoneInput" min="1" maxlength="10" >
                          <button class="verify-button" id="mobile" @click="sendOTP()">Verify</button>
                          <div id=otp>
                            <span style="color: #11af0b;">OTP Expires in </span>
                            <span id="ten-countdown" style="color: red;"></span>
                            <input type="tel" class="input" id="inputotp" min="1" maxlength="4">                            
                            <button class="verify-button" @click="validateOTP()">Validate</button>
                          </div>
                        </div>
                        <div class="form-input">
                          <i class="input-icon bx bx-user"></i>
                          <input class="input" type="text" required v-model="doctorUsername" placeholder="  UserName">
                        </div>
                        <div class="form-input">
                          <i class="input-icon bx bx-lock-open"></i>
                          <i class="eye fa-solid fa-eye" id="eye" @click="passwordVisible"></i>

                          <input class="input" type="password" id="password" required v-model="doctorPassword"
                            placeholder="  Password">
                        </div>
                        <div class="form-input">
                          <i class="input-icon bx bx-lock-open"></i>
                          <i class="eye fa-solid fa-eye" id="eyes" @click="confirmPasswordVisible"></i>
                          <input class="input" type="password" id="confirmPassword" required v-model="confirmPassword"
                            placeholder=" Confirm Password">
                        </div><br>
                        <div>
                          <button class="button" type="submit" value="Login">Sign up</button>
                        </div>
                      </div>
                    </form><br><br>
                    <span style="color: red;">{{ errorMsg }}</span>
                  </div>
                </div>
                <div class="card-back">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script >
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'SignUp',

  data() {
    return {
      errorMsg: '',
      resend: 'Verify',
      visiblity: true,
      visiblityForConfirm: true,
      verified: '',
      validEmail: '',
      validate: ''
    }
  },

  methods: {

    verifyOTP() {
      if (this.random === this.userOtpNumber) {
        this.resend = "";
        document.getElementById("verified").style.display = "inline-block"
        this.verified = "OTP verified Successfull"
        document.getElementById("otp").style.display = "none"
      } else {
        this.verified = "Retry again...!!! OTP incorrect...!"
        document.getElementById("otp").style.display = "none"
      }
      if (this.random === this.userOtpNumber) {
        this.resend = "";
        document.getElementById("verified").style.display = "inline-block"
        this.verified = "OTP verified Successfull"
        document.getElementById("otp1").style.display = "none"
      } else {
        this.verified = "Retry again...!!! OTP incorrect...!"
        document.getElementById("otp1").style.display = "none"
      }
    },
    async adminSubmit() {
      this.$router.push({ path: `/` })
      let result = await axios.post("http://localhost:8080/saveDoctor", {
        adminName: this.adminName,
        adminEmail: this.adminEmail,
        adminPhone: this.adminPhone,
        adminUserName: this.adminUserName,
        adminPassword: this.adminPassword,
        adminConfirmPassword: this.adminConfirmPassword,
      });

      console.warn(result);
      if (result.status == 201) {
        alert("sign_up succesfully");
        localStorage.setItem("user_info", JSON.stringify(result.data));
      }

    },
    async doctorSubmit() {
      this.$router.push({ path: `/` })
      let result = await axios.post("http://localhost:8080/saveDoctor", {
        doctorName: this.doctorName,
        doctorEmail: this.doctorEmail,
        doctorPhone: this.doctorPhone,
        doctorUserName: this.doctorUserName,
        doctorPassword: this.doctorPassword,
        doctorConfirmPassword: this.doctorConfirmPassword,
      });

      console.warn(result);
      if (result.status == 201) {
        alert("sign_up succesfully");
        localStorage.setItem("user_info", JSON.stringify(result.data));
      }
      this.$router.push({ path: `/` })
    },
    adminOTPValid() {
      document.getElementById("otp").style.display = "inline-block"

      const random = Math.floor(Math.random() * 9000 + 1000);
      console.log(random)
      axios.get(`https://smsozone.com/api/mt/SendSMS?APIKey=XtnMBLYVG0mj6YUdO8dsqgDEMOAPI&senderid=SMSPXL&channel=Trans&DCS=0&flashsms=0&number=${this.adminPhone}&text=Use%20Code%20${random}%20to%20verify%20or%20login%20your%20account.%0A${random}%0ATeam%20PXLSMS&route=5`, {

      }).then(response => {
        console.log(response.data)
      })
      this.timer()
    },
    doctorOTPValid() {
      document.getElementById("otp1").style.display = "inline-block"

      const random = Math.floor(Math.random() * 9000 + 1000);
      console.log(random)
      axios.get(`https://smsozone.com/api/mt/SendSMS?APIKey=XtnMBLYVG0mj6YUdO8dsqgDEMOAPI&senderid=SMSPXL&channel=Trans&DCS=0&flashsms=0&number=${this.doctorPhone}&text=Use%20Code%20${random}%20to%20verify%20or%20login%20your%20account.%0A${random}%0ATeam%20PXLSMS&route=5`, {

      }).then(response => {
        console.log(response.data)
      })
      this.timer()
    },
    timer() {
      function countdown(elementName, minutes, seconds) {
        var element, endTime, hours, mins, msLeft, time;

        function twoDigits(n) {
          return (n <= 9 ? "0" + n : n);
        }

        function updateTimer() {
          msLeft = endTime - (+new Date);
          if (msLeft < 1000) {
            element.innerHTML = "Time is up!";
            document.getElementById("otp").style.display = "none"
            this.router.go()
          } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
          }
        }
        element = document.getElementById(elementName);
        endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
        updateTimer();
      }
      countdown("ten-countdown", 10, 0);
    },
    passwordVisible() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      this.visiblity = false;
    } else {
      x.type = "password";
      this.visiblity = true;
    }
  },
  confirmPasswordVisible() {
    var x = document.getElementById("confirmPassword");
    if (x.type === "password") {
      x.type = "text";
      this.visiblityForConfirm = false;
    } else {
      x.type = "password";
      this.visiblityForConfirm = true;
    }
  },
    sendEmail() {
      document.getElementById("link").style.display = "block"
      document.getElementById("mail").disabled = true;
      console.log("adcadc")
    },
    sendOTP() {
      document.getElementById("otp").style.display = "block"
      document.getElementById("mobile").disabled = true;
      this.timer()
    },
    validateOTP() {
      document.getElementById("mobile").style.display = "none"
      document.getElementById("otp").style.display = "none"
      document.getElementById("verified").style.display = "inline"
      document.getElementById("mobile").disabled = false;
    },
    passwordVisible() {
      var x = document.getElementById("password");
      var y = document.getElementById("eye")
      if (x.type === "password") {
        x.type = "text";
        y.className = "eye fa-solid fa-eye-slash";
      } else {
        x.type = "password";
        y.className = "eye fa-solid fa-eye";
      }
    },
    confirmPasswordVisible() {
      var x = document.getElementById("confirmPassword");
      var y = document.getElementById("eyes")
      if (x.type === "password") {
        x.type = "text";
        y.className = "eye fa-solid fa-eye-slash";
      } else {
        x.type = "password";
        y.className = "eye fa-solid fa-eye";
      }
    },
  },

  mounted() {
    
  }
}
</script>
<style scoped>
/* Please ❤ this if you like it! */

@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #c4c3ca;
  background-color: #11af0b;
  overflow-x: hidden;
}

a {
  cursor: pointer;
  transition: all 200ms linear;
}

a:hover {
  text-decoration: none;
}

.link {
  color: #c4c3ca;
}

.link:hover {
  color: #ffeba7;
}

p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}

h4 {
  font-weight: 900;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h4 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-size: 20px;
}

.section {
  position: relative;
  width: 100%;
  display: block;

}

.full-height {
  min-height: 100vh;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

.checkbox:checked+label,
.checkbox:not(:checked)+label {
  position: absolute;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin-left: 47%;
  cursor: pointer;
  background-color: #0DB8DE;
}

.checkbox:checked+label:before,
.checkbox:not(:checked)+label:before {
  position: relative;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #392f49;
  font-family: "unicons";
  /* content: "\eb4f"; */
  content: "\2196";
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}

.checkbox:checked+label:before {
  transform: translateX(44px) rotate(-270deg);
}

.card-3d-wrap {
  position: relative;
  top: 40px;
  width: 650px;
  max-width: 100%;
  height: 580px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
 
}

.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #141222;
  /* background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg"); */
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* 
#verified {
  display: none;
  color: rgb(2, 175, 2);
  position: absolute;
  left: 470px;
  bottom: 17px;
} */

.card-back {
  transform: rotateY(180deg);
}

.checkbox:checked~.card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}

.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}

/* FRONT END PAGE ADMIN */

.h1 {
  text-align: center;
  font-family: serif;
  text-shadow: 0px 0px 27px rgb(109, 109, 109);
}

.form {
  box-sizing: border-box;
  width: 600px;
  
  margin: auto;
  padding: 50px;
  color: white;
  border-end-start-radius: 25px;
  border-end-end-radius: 25px;
  /* box-shadow: 0px 0px 27px rgb(109, 109, 109); */
}

.form-input {
  display: block;
}

.input {
  background-color: transparent;
  border: none;
  width: 80%;
  border-bottom: 1.5px solid #0DB8DE;
  position: relative;
  top: 5px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 60px;
  margin-bottom: 20px;
  color: #ECF0F5;
}

#dropdown {
  background: transparent;
  border: none;
  width: 100px;
  color: white;
  position: relative;
  right: 15px;
  height: 37px;
  border-bottom: 1.5px solid #0DB8DE;
}

#dropdown {
  border-bottom: 1.5px solid #0DB8DE;
  font-size: 14px;
}

#dropdown option {
  color: #fff;
  background: #140f16;
  font-size: 14px;
}

#phoneInput {
  width: 48%;
  padding-left: 10px;
}

#phoneIcon {
  font-size: 24px;
  position: relative;
  top: 8px;
  right: 26px;
  border-bottom: 1.5px solid #0DB8DE;
  height: 27px;
  width: 41px;
  margin-left: 55px;
}

.input-icon {
  font-size: 24px;
  position: relative;
  top: 9px;
  left: 30px;

}

.button {
  height: 40px;
  width: 100px;
  background-color: rgb(47, 144, 255);
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  font-family: serif;
}

.verify-button {
  height: 25px;
  color: white;
  text-align: center;
  background-color: #0DB8DE;
  border-radius: 5px;
  border: none;
  position: absolute;
  font-size: 12px;
}

.button:hover {
  box-shadow: 0px 0px 20px rgba(37, 113, 228, 0.247);
}

label {
  font-size: 15px;
  float: right;
}

#otp,
#link {
  display: none;
  font-size: 10px;
}

#inputotp {
  width: 110px;
  padding-left: 20px;
  font-size: large;
  letter-spacing: 10px;
}

.form-input .eye {
  position: absolute;
  box-sizing: border-box;
  padding-left: 413px;
  height: 36px;
  text-align: left;
  color: #3d8a9b;
}

#verified {
  position: absolute;
  box-sizing: border-box;
  padding-left: 210px;
  height: 36px;
  text-align: left;
  color: rgb(3, 184, 3);
  display: none;
}

.eye:hover {
  color: #09d2ff;
}

/* Number Slider Remove */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 
.form-group {
  position: relative;
  display: block;
  margin: 10px;
  padding: 0;
}

#validate {
  width: 80px;
  height: 20px;
  font-size: 10px;
  position: relative;
  bottom: 23px;
    left: 97px;
}

#otp {
  margin-left: 100px;
}

#ten-countdown {
  color: rgb(255, 20, 20);
  padding-left: 100px;
} */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 
.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f202900;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0px 0px 1px #ebe4ce3d;
}

.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #ffeba7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.eye {
  position: absolute;
  top: 0;
  left: 480px;
  height: 48px;
  font-size: 16px;
  line-height: 48px;
  text-align: left;
  color: #ffeba7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;

}

.form-group input:-ms-input-placeholder {
  color: #fddf7c;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input::-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input::-webkit-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus:-ms-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus::-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus:-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.verify {
  background: transparent;
  border: none;
  position: absolute;
  top: 0;
  left: 450px;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  text-align: left;
  color: #ffeba7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.btn {
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);
}

.btn:active,
.btn:focus {
  background-color: #ffdd6e;
  color: #33293a;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}

.btn:hover {
  background-color: #ffdd6e;
  color: #33293a;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}

.logo {
  position: relative;
  top: 30px;
  left: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;
}

.logo img {
  height: 90px;
  width: auto;
  display: block;
  filter: invert();
}

.otp-input-wrapper {
  width: 400px;
  text-align: left;
  display: inline-block;
}

.otp-input-wrapper input {
  padding: 0;
  width: 264px;
  font-size: 18px;
  font-weight: 600;
  color: #e2e2e2;
  background-color: transparent;
  border: 0;
  margin-left: 12px;
  letter-spacing: 48px;
  font-family: sans-serif !important;
}

.otp-input-wrapper input:focus {
  box-shadow: none;
  outline: none;
}

.otp-input-wrapper svg {
  position: relative;
  display: block;
  width: 210px;
  height: 2px;
}

#otp {
  display: none;
}

#otp1 {
  display: none;
  margin-left: 100px;
}


/* Instruction to signup */
/* .callout {
  position: fixed;
  top:20%;
  margin-left: 35%;
  max-width: 600px;
  box-shadow: #3d3d3d 1px 1px 100px;
  border-radius: 15px;
  
}

.callout-header {
  padding: 25px 15px;
  background: #47385e;
  font-size: 30px;
  color: white;
}

.callout-container {
  padding: 15px;
  background-color: #ccc;
  color: black
}

.closebtn {
  position: absolute;
  top: 5px;
  right: 15px;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.closebtn:hover {
  color: lightgrey;
} */
</style>


<!--<div class="center-wrap">
  <img src="./Images/logo.png" alt="" style="filter: invert(); width: 170px; position: relative; bottom: 30px;"><br>
  <div class="section text-center">
                
    <div class="form-group">
      <input type="text" name="adminName" class="form-style" placeholder="Your Full Name" id=""
        v-model="adminName" minlength="3" maxlength="20" required>
      <i class="input-icon bx bx-pen"></i>
    </div>
    <div class="form-group">
      <input type="text" name="adminEmail" class="form-style" placeholder="Your Email" id="" required
        v-model="adminEmail" @change="validateEmail(adminEmail)">
      <i class="input-icon bx bx-envelope-open"></i>
      <button class="verify" @click="isMsg = !isMsg">Verify</button>
    </div><small style="font-size: 12px; color: white;">{{ validEmail }}</small>
    <p style="color:  rgb(0, 212, 0); font-size: 10px;" v-show="isMsg" >A code has been sent to
      *******9@gamil.com please verify!</p>
    <div class="form-group">
      <input type="text" name="adminPhone" class="form-style" placeholder="Your Phone" id="" required
        v-model="adminPhone">
      <i class="input-icon bx bx-mobile-alt"></i>
      <button class="verify" @click="adminOTPValid()">{{ resend }}</button><i class="fa-solid fa-circle-check" id="verified"></i>
    </div>
    <div class="otp-input-wrapper" id="otp">
      <input type="number" v-model="userOtpNumber">
      <svg viewBox="0 0 240 1" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="240" y2="0" stroke="#3e3e3e" stroke-width="1" stroke-dasharray="44,22" />
      </svg>
      <span id="ten-countdown"></span>
      <button class="btn" id="validate" @click="verifyOTP()">Validate</button>
    </div>
    <div class="form-group">
      <input type="text" name="adminUsername" class="form-style" placeholder="Your Username" id="" required v-model="adminUsername">
      <i class="input-icon bx bx-user"></i>
    </div>
    <div class="form-group">
      <input type="password" name="adminPassword" class="form-style" placeholder="Your Password"
        id="password" required v-model="adminPassword">
      <i class="input-icon bx bx-lock-open"></i>
      <span><i class="eye fa-solid fa-eye" v-if="visiblity == true" @click="passwordVisible"></i> <i
          class="eye fa-solid fa-eye-slash" v-if="visiblity == false" @click="passwordVisible"></i>
      </span>
    </div>
    <div class="form-group">
      <input type="password" name="adminConfirmPassword" class="form-style" required
        placeholder="Confirm Your Password" id="confirmPassword" v-model="adminConfirmPassword"
        @change="passValid">
      <i class="input-icon bx bx-lock-open"></i>
      <span><i class="eye fa-solid fa-eye" v-if="visiblityForConfirm == true"
          @click="confirmPasswordVisible"></i> <i class="eye fa-solid fa-eye-slash"
          v-if="visiblityForConfirm == false" @click="confirmPasswordVisible"></i> </span>
    </div>
    <small style="color: red;">{{ message }}</small><br><br>
    <a class="btn mt-4" @click="adminSubmit()">submit</a>
  </div>
</div>  -->

<!-- <div class="center-wrap">
  <img src="./Images/logo.png" alt="" style="filter: invert(); width: 170px; position: relative; bottom: 30px;"><br>
  <div class="section text-center">
                
    <div class="form-group">
      <input type="text" name="doctorName" class="form-style" placeholder="Your Full Name" id=""
        v-model="doctorName" minlength="3" maxlength="20" required>
      <i class="input-icon bx bx-pen"></i>
    </div>
    <div class="form-group">
      <input type="text" name="doctorEmail" class="form-style" placeholder="Your Email" id="" required
        v-model="doctorEmail" @change="validateEmail(adminEmail)">
      <i class="input-icon bx bx-envelope-open"></i>
      <button class="verify" @click="isMsg = !isMsg">Verify</button>
    </div><small style="font-size: 12px; color: white;">{{ validEmail }}</small>
    <p style="color:  rgb(0, 212, 0); font-size: 10px;" v-show="isMsg" >A code has been sent to
      *******9@gamil.com please verify!</p>
    <div class="form-group">
      <input type="text" name="doctorPhone" class="form-style" placeholder="Your Phone" id="" required
        v-model="doctorPhone">
      <i class="input-icon bx bx-mobile-alt"></i>
      <button class="verify" @click="adminOTPValid()">{{ resend }}</button><i class="fa-solid fa-circle-check" id="verified"></i>
    </div>
    <div class="otp-input-wrapper" id="otp1">
      <input type="number">
      <svg viewBox="0 0 240 1" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="240" y2="0" stroke="#3e3e3e" stroke-width="1" stroke-dasharray="44,22" />
      </svg>
      <span id="ten-countdown"></span>
      <button class="btn" id="validate" @click="verifyOTP()">Validate</button>
    </div>
    <div class="form-group">
      <input type="text" name="doctorUsername" class="form-style" placeholder="Your Username" id="" required v-model="doctorUsername">
      <i class="input-icon bx bx-user"></i>
    </div>
    <div class="form-group">
      <input type="password" name="doctorPassword" class="form-style" placeholder="Your Password"
        id="password" required v-model="doctorPassword">
      <i class="input-icon bx bx-lock-open"></i>
      <span>
        <i class="eye fa-solid fa-eye" v-if="visiblity == true" @click="passwordVisible"></i> 
        <i class="eye fa-solid fa-eye-slash" v-if="visiblity == false" @click="passwordVisible"></i>
      </span>
    </div>
    <div class="form-group">
      <input type="password" name="doctorConfirmPassword" class="form-style" required
        placeholder="Confirm Your Password" id="confirmPassword" v-model="doctorConfirmPassword"
        @change="passValid">
      <i class="input-icon bx bx-lock-open"></i>
      <span><i class="eye fa-solid fa-eye" v-if="visiblityForConfirm == true"
          @click="confirmPasswordVisible"></i> <i class="eye fa-solid fa-eye-slash"
          v-if="visiblityForConfirm == false" @click="confirmPasswordVisible"></i> </span>
    </div>
    <small style="color: red;">{{ message }}</small><br><br>
    <a class="btn mt-4" @click="adminSubmit()">submit</a>
  </div>
</div> --> -->