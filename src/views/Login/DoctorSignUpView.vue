<!-- <template>
   
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
                    <input class="input" type="email" required v-model="doctorEmail" placeholder="Email">
                    <button class="verify-button" id="mail" @click="sendEmail()">Verify</button>
                    <div id="link">Link is sent to your Email Please Verify from the link..!</div>
                </div>
                <div class="form-input">
                    <i class="bx bx-mobile-alt" id="phoneIcon"></i>
                    
                    <select name="" id="dropdown" >
                        <option value="+91" > IND +91</option>
                        <option value="+64">NZ  +64</option>
                        <option value="+27">SA  +27</option>
                        <option value="+1">USA +1</option>
                        <option value="+61">AS  +61</option>
                    </select>
                    <i class="fa-solid fa-circle-check" id="verified"></i>
                   <input type="number" class="input" placeholder="Phone" id="phoneInput">
                    <button class="verify-button" id="mobile" @click="sendOTP()">Verify</button>
                    <div id=otp>
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
        </form>
    </div>
</template>

<script>


export default {
    data() {
        return {
            mobileCountryCode: '',
            username: '',
            email: '',
            password: '',
            visiblityForPassword: true,
            visiblityForConfirmPassword: true,
        }
    },
    methods: {
        handleSubmit() {
            if (this.usernameIsValid && this.emailIsValid && this.passwordIsValid) {
                // Submit the form
                console.log('Form submitted')
            } else {
                // Show validation errors
                console.log('Validation failed')
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
    computed: {
        usernameIsValid() {
            return this.username.length > 0
        },
        emailIsValid() {
            // Basic email validation
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
        },
        passwordIsValid() {
            return this.password.length >= 8
        }
    }
}
</script>

<style scoped>
.body {
    /* background-image: url("./Images/BAckground.webp"); */
    background-size: 100%;
    background-repeat: repeat;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    position: relative;
    padding-top: 80px;
    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */
}

.h1 {
    text-align: center;
    font-family: serif;
    text-shadow: 0px 0px 27px rgb(109, 109, 109);
}

.form {
    box-sizing: border-box;
    width: 650px;
    margin: auto;
    background-color: #00000080;
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
#dropdown{
    background: transparent;
    border: none;
    width: 100px;
    color: white;
    position: relative;
    right: 15px;
    height: 38px;
    border-bottom: 1.5px solid #0DB8DE;
}
#dropdown{
    border-bottom: 1.5px solid #0DB8DE;
    font-size: 14px;
}
#dropdown option{
    color: #fff;
    background:#140f16;
    font-size: 14px;
}
#phoneInput
{
    width: 50%;
    padding-left: 10px;
}
#phoneIcon{
    font-size: 24px;
    position: relative;
    right: 26px;
    border-bottom: 1.5px solid #0DB8DE;
    height: 35px;
    width: 40px;
    margin-left: 50px;
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
    padding-left: 413px;
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
</style> -->
