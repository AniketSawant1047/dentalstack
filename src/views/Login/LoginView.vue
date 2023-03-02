<!-- <template>
    <html>

    <head>
        <link rel="stylesheet" href="LoginView.css">
    </head>

    <body class="body">
        <img src="./Images/logo.png" alt="logo"
            style="filter: invert(); position: relative; float: left; bottom: 50px;">

        <div class="form">
            <form action="" @submit.prevent="handleSubmit">
                <div class="h1">
                    <img src="./Images/logo.png" alt="logo" style="width: 180px; filter: invert();">
                </div>
                <table>
                    <tr>
                        <td> <label for="">USERNAME </label></td>
                        <td> <input class="input" type="text" required v-model="username"></td>
                    </tr>
                    <tr>
                        <td><label for="">PASSWORD </label></td>
                        <td><input class="input" type="password" required v-model="password"></td>
                    </tr>
                    <tr>
                        <td><button class="button" type="submit" value="Login">Login</button></td>
                    </tr>
                </table>
            </form>

                <br><br>
                <hr>
                <div class="foot">
                    Don't Have an Account? Please
                    <router-link class="router-link" to="SignUp"> Register</router-link>

                    <router-link class="router-link" to="HomePage"> Register</router-link>

                    <router-link class="router-link" to="PatientDetailsForm">Biba</router-link>

                    <router-link class="router-link" to="Sign">Color</router-link>
                </div>
                <buton class="butto">Button</buton>
        </div>
    </body>

    </html>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',

            password: ''
        }
    },
    methods: {
        // async handleSubmit() {
        //     try {
        //         const response = await axios.post('http://192.168.1.40:8080/api/login', {
        //             username: this.username,
        //             password: this.password,
        //         });
        //         const token = response.data.token;
        //         // Store the token in local storage or a cookie
        //         localStorage.setItem('token', token);
        //         // Redirect to the protected page
        //         this.$router.push('/HomePage');
        //     } catch (err) {
        //         this.error = err.message;
        //     }
        // },
        async handleSubmit() {
            try {
                await axios.post('http://192.168.1.40:8080/api/login', {
                password: this.password,
                username: this.username
            }).then(response => {
                console.log(response.data);
                let t = JSON.stringify(response.data)
                let token = JSON.parse(t);
                localStorage.setItem('token',token.jwtToken );
                 this.$router.push({path: "/HomePage"})
            })
            } catch (error) {
                this.error = error.message; 
            }

        },
        async verifyOTP() {
            await axios.post('http://192.168.1.40:8080/api/verifyOTP', {
                hiii: this.hiii,
                username: "sdvcsdvsdav",
                password: "wehvjsd"
            }).then(response => {
                if (response.data) {
                    this.verified = "OTP verified Successfull"
                    // document.getElementById("otp").style.display="none"
                } else {
                    this.verified = "Retry again...!!! OTP incorrect...!"
                    // document.getElementById("otp").style.display="none"
                }
            })

        },

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

tr {
    height: 60px;
}

.form {
    box-sizing: border-box;
    width: 600px;
    height: 450px;
    margin: auto;
    margin-top: 50px;
    background-color: #00000080;
    padding: 50px;
    color: white;
    border-radius: 30px;
    /* box-shadow: 0px 0px 27px rgb(109, 109, 109); */
}

.input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    position: relative;
    top: 8px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    padding-left: 126px;
    margin-bottom: 20px;
    color: #ECF0F5;
}

.button {
    height: 40px;
    width: 100px;
    background-color: rgb(47, 144, 255);
    color: white;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.24);
    font-size: 24px;
    position: relative;
    top: 40px;
    left: 190px;
    border: none;
    border-radius: 5px;
    font-family: serif;
}

a {
    color: rgb(36, 149, 255);
    text-decoration: none;
}

label {
    font-size: 15px;
}

.foot {
    text-align: center;
    font-size: 10px;
}

.router-link {
    text-decoration: none;

}
</style> -->
