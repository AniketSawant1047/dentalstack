<template>
    <div class="main">
        <div class="output">
            <table class="table">
                <tr>
                    <td>
                        <b>Name : </b>
                        {{ list.name }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Email : </b>
                        {{ list.email }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>phone No. : </b>
                        {{ list.phoneNumber }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Date of Birth : </b>
                        {{ list.dateOfBirth }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>pincode : </b>
                        {{ list.pincode }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>External Doctor : </b>
                        {{ list.externalDoctor }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Affiliate Clinic : </b>
                        {{list.assignclinic }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Created By : </b>
                        {{ list.createdBy }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Internal Doctor : </b>
                        {{ list.internalDoctor}}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Cheif Complaint : </b>
                        {{ list.cheifComplaint }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="input">
            <form action="">
                <table>
                    <tr>
                        <td>
                            <label for="">Assign External Doctor</label>
                        </td>
                        <td>
                            <select name="" id="" class="inputs" v-model="externalDr">
                                <option value="" v-for="dlist in dlist" v-bind:key="dlist">

                                    {{(dlist.first_name ) }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <br><br>
                    <tr>
                        <td>
                            <label for="">Assign Clinic</label>
                        </td>
                        <td>
                            <select name="" id="" class="inputs" v-model="assignclinic">
                                <option value="" v-for="clist in cList" v-bind:key="clist">
                                    {{ (clist.clinicName) }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <br><br>
                    <tr>
                        <td>
                            <label for="">Assign Internal Doctor</label>
                        </td>
                        <td>
                            <select name="" id="" class="inputs" v-model="internalDr">
                                <option value="" v-for="dlist in dlist" v-bind:key="dlist">
                                    {{ (dlist.first_name) }}
                                </option>
                            </select>
                        </td>
                    </tr>
                </table>
            </form>
            <button class="btn btn-success pull-right" id="button" @click="update()" >Update</button>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    name: "PatientMoreDetailsView",
    data() {
       
        return {
            list: [],
            dlist: [],
            cList: [],
            externalDr:'',
            assignclinic:'',
            internalDr:''
        }
    },
    async mounted() {
        // let result = await axios.get("http://localhost:8080/findAllD");
        // this.list = result.data
        this.pid = localStorage.getItem("id");
        
        axios.get(`http://localhost:8080/getpdetails/${this.pid}`
        ).then(response => {
            this.list = response.data;
        })
            .catch(error => {
                this.errors.push(error);
                console.log(error);
            }),

            axios.get('http://localhost:8080/findAllD',{}).then(response => {
                this.dlist = response.data;               
            })
                .catch(error => {
                    this.errors.push(error);
                    console.log(error);
                }),
                axios.get('http://localhost:8080/clinicList',{}).then(response => {
                this.cList = response.data;               
            })
                .catch(error => {
                    this.errors.push(error);
                    console.log(error);
                })
    },
    methods:{
        async  update(){
           let result = await axios.post("http://localhost:8080/saveMoreDetails",{
            externalDr: this.externalDr,
           assignclinic: this.assignclinic, 
           internalDr: this.internalDr,
           });
           console.warn(result);
           window.location.reload();
           if(result.status==201){
            alert("sign_up succesfully");
            localStorage.setItem("user_info",JSON.stringify(result.data));
           }
    },
   
    }


}
</script>

<style scoped>
.main {
    display: flex;
    width: 100%;
    color: #fff;
}

.input {
    width: 100%;
    margin: 10px;
    padding-left: 30px;
    padding-top: 50px;
    border: 1px #fff solid;
    border-radius: 20px;
}
.inputs {
    width: 600px;
    height: 30px;
    margin-left: 10%;
    background: transparent;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
}

.inputs option {
    height: 30px;
    color: rgb(189, 189, 189);
    
}

.output {
    margin: 10px;
    border: 1px #fff solid;
    width: 500px;
    border: 15px;
}

.table td {
    border: 1px solid rgb(155, 155, 155);
    height: 40px;  
    color: #fff;
    font-size: 12px;
    text-align: left;
    border-radius: 15px;
}

.table{
    border-radius: 15px;
}
#button{
    position: relative;
    left: 350%;
    top: 30%;
}
.btn:hover{
   box-shadow: 1px 1px 8px #777777;
}
</style>