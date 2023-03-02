<!-- <template>
    <div class="main">
        <div class="selectLogin">
            <h6>Login As a</h6>
            <button class="button" id="Doctor" selected @click="signup(1)" >Doctor</button>
            <button class="button" id="Admin"  @click="signup(2)">Admin</button>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        signup(e){
            if (e===1) {
                document.getElementById("Doctor").style.background="green;"
                this.$router.push({path:`/DoctorSignUp`})
              
            } else {
                this.$router.push({path:`/AdminSignUp`})
                document.getElementById("Admin").style.background="transparent;"
            }
        }
    }
}
</script>
<style scoped>

.selectLogin{
    width: 650px;
    margin: auto;
    background-color: #00000080;
    color: white;
    padding: 50px 0px 0px 0px;
    margin-top: 50px;
    margin-bottom: 0px;
    border-start-start-radius: 25px;
    border-start-end-radius: 25px;
    font-size: 14px;
}
.button{
    background: #00000080;
    border: 0.1px solid #414141fb;
    color: white;
    width: 50%;
    padding: 6px;
    font-size: 24px;
}
.button:active{
    background-color: transparent;

}
</style> -->