<template>
    <body class="register">
        <table class="table">
            <tr class="head">
                <td colspan="2" class="headline"> <i class="fa-solid fa-pencil"></i> Doctor Form</td>
                <td > </td>
            </tr>
            <tr id="name">
                <td class="firsttd"> <lable class="lable" for="">First Name</lable></td>
                <td> <input type="text" v-model="doctorName"  placeholder="Enter First Name" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Email</lable></td>
                <td><input type="email" v-model="doctorEmail" placeholder="Enter Email" required></td>
            </tr>
            <tr> 
                <td class="firsttd"><lable class="lable" for="">Phone</lable></td>
                <td><input v-model="doctorPhone" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "10"  placeholder="Enter Phone Number" /></td>
                <!-- <td><input type="number" v-model="phone" placeholder="Enter Phone Number"  required ></td> -->
            </tr>
            <tr>
                <td  class="firsttd" ><lable class="lable" for="">Doctor Type</lable></td>
                <td> 
                    <select name="" id="status" v-model="selected" v-validate.initial="doctorType" data-rules="required|alpha|min:3" >
                        <option value="Internal">Internal</option>
                        <option value="External">External</option>
                    </select>
    `           </td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Certification No. </lable></td>
                <td><input type="text" v-model="doctorCertificatenumber" placeholder="CertificationNumber" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Country</lable></td>
                <td><input type="text" v-model="doctorCountry" placeholder="Enter Country" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">State</lable></td>
                <td><input type="text"  v-model="doctorState" placeholder="Enter State" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Pin Code</lable></td>
                <!-- <td><input v-model="doctorPincode" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "6"  placeholder="Enter Pincode"/></td> -->
                <td> <vue-tel-input class="" id="phone"> </vue-tel-input></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Specialization</lable></td>
                <td>
                    <input type="text" v-model="doctorSpecialization" v-validate.initial="state" data-rules="required|alpha|min:3" placeholder="Enter Specialization" >
                </td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">User Name</lable></td>
                <td> <input type="text" v-model="doctorUserName"  placeholder="Enter User Name" required></td>
                
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">password</lable></td>
                <td><input type="password" v-model="doctorPassword" v-validate.initial="password" data-rules="required|passphrase" placeholder="Enter Password" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Confirm Password</lable></td>
                <td><input type="text" v-model="doctorConfirmPassword" v-validate.initial="confirm" data-rules="required|passphrase" placeholder="Confirm Password" required></td>
            </tr>            
            <tr>
                <td class="firsttd"><lable class="lable" for="">Status</lable></td>
                <td> 
                    <select name="status" id="status" v-model="select" v-validate.initial="status" data-rules="required|alpha|min:3">
                        <option  value="Enabled" >Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
    `           </td>
            </tr>
            <tr>
                <td>
                    <button class="button" type="submit" v-on:click="signUp"><router-link class="router-link" to="DoctorListView"><h6><i class="fa-solid fa-floppy-disk"></i>&nbsp; Register</h6></router-link></button>

                </td>
            </tr>
    </table>
    <br>
    <button @click="doctoFields(1)"> Show</button>
</body>
</template>

<script >
import axios from 'axios'


export default{
    name:'SignUp',

    data(){
        return{
            doctorName:'',
            doctorEmail:'',
            doctorPhone:'',
            doctorCertificatenumber:'',
            selected:'External',
            doctorCountry:'',
            doctorState:'',
            doctorPincode:'',
            doctorSpecialization:'',
            doctorUserName:'',
            doctorPassword:'',
            doctorConfirmPassword:'',
            select:'Eabled'
        }
    },
    methods:{
      async  signUp(){
          
            let result = await axios.post("http://localhost:8080/saveDoctor",{
            doctorName: this.doctorName,
            doctorEmail: this.doctorEmail, 
            doctorPhone: this.doctorPhone,
            doctorType: this.selected,
           doctorCertificatenumber: this.doctorCertificatenumber,
           doctorCountry: this.doctorCountry,
           doctorState: this.doctorState,
           doctorPincode:this.doctorPincode,
           doctorSpecialization: this.doctorSpecialization,
           doctorUserName: this.doctorUserName,
           doctorPassword: this.doctorPassword,
           doctorConfirmPassword: this.doctorConfirmPassword,
           doctorStatus: this.select,
           });

           console.warn(result);
           if(result.status==201){
            alert("sign_up succesfully");
            localStorage.setItem("user_info",JSON.stringify(result.data));
           } 
    },
    doctoFields(e){
        if (e ==1) {
            document.getElementById("name").style.display="block";
        } else {
            document.getElementById("name").style.display="none";
        }
    }
  }
}
</script>
<style scoped>
#name{
    display: none;
    width: 100%;
}
.register{
    width: 100%;
    background: transparent;
}
.head{
   
    background-color: #11101d;
    height: 40px;
    color: white;
    text-align: start;
    font-size: 16px;
}
.headline{
    padding-left: 20px;
}
.register input,#status{
    width: 97%;
    height: 31px;
    padding-left: 20px ;
    display: block;
    margin: 10px 10px 10px 20px;
    border: 1px solid rgba(135, 207, 235, 0.568);
    border-radius: 5px;
    background: transparent;
    color: white;
}

#status{
    position: relative;
    top: 8px;
}
thead, tbody, tr, th{
    font-size: 12px;
    border-style: solid;
    border-width: 1px;
    border: 1px rgba(255, 255, 255, 0.05) solid;
}
.firsttd{
    width: 10%;
}
.lable{
    display: flex;
    justify-content: end;
    padding-left: 30px;
    color: white;
}

.button{
    position: relative;
    left: 350%;
    width: 150px;
    height: 40px;
    margin: 10px;
    text-align: center;
    padding-top: 12px;
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    display: inline-block;
    background-color: rgb(53, 134, 255);
    border: none;
   
}
button:hover, button:focus{
    background-color: rgb(53, 199, 102);
    
}
.router-link{
    text-decoration: none;
    color: white;
}

.router-link h6{
    font-size: 14px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.nav span{
    position: relative;
    padding-left: 10px;
    top: 24px;
    font-size: 12px;
}
#nav{
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    top: 10px;
}
#button{
    background-color: white;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px rgb(59, 59, 59) solid;
    margin-left: 5px;
}
#forward{
    color: rgb(59, 59, 59);

}
</style>

  