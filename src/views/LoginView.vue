<template>
    <html>

    <head>
        <link rel="stylesheet" href="LoginView.css">
    </head>

    <body class="body">
        <img src="../assets/logo.png" alt="" style="filter: invert(); position: relative; float: left; bottom: 50px;">

        <div class="form">
            <form action="" @submit.prevent="handleSubmit">
                <div class="h1">
                    <img src="../assets/logo.png" alt="" style="width: 180px; filter: invert();">
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


                <br><br>
                <hr>
                <div class="foot">
                    Don't Have an Account? Please
                    <router-link class="router-link" to="SignUp"> Register</router-link>

                    <router-link class="router-link" to="HomePage"> Register</router-link>
                    
                    <router-link class="router-link" to="PatientAppointment">Biba</router-link>
                </div>
            </form>
        </div>
    </body>

    </html>
</template>

<script>
 const yourFirstVariable = 'hiiii';
 console.log(yourFirstVariable)


</script>

<style scoped>
.body {
    background-image: url("../assets/BAckground.webp");
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
</style>
