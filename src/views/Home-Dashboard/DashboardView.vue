<template>
    <div class="main">
        <div class="sub1">
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Business</h5>
                        <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img
                            src="./DahsboardIcons/Business.gif" alt="" style="width: 45px;"></span>
                </div>
                <hr>
                <div class="info">
                    <span>
                        <p>Active Business</p>
                    </span>
                    <span>
                        <p>In-Active Business</p>
                    </span>
                </div>
                <hr>
            </div>
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Admin</h5>
                        <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img
                            src="./DahsboardIcons/Admin.gif" alt="" style="width: 45px;"></span>
                </div>
                <hr>
                <div class="info">
                    <span>
                        <p>Active Admin</p>
                    </span>
                    <span>
                        <p>In-Active Admin</p>
                    </span>
                </div>
                <hr>
            </div>
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Clinics</h5>
                        <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img
                            src="./DahsboardIcons/Clinic.gif" alt="" style="width: 45px;"></span>
                </div>
                <hr>
                <div class="info">
                    <span>
                        <p>Active Clinics</p>
                    </span>
                    <span>
                        <p>In-Active Clinics</p>
                    </span>
                </div>
                <hr>
            </div>
            <div class="box">
                <div class="content">
                    <span>
                        <h5>Doctors</h5>
                        <h3>45</h3>
                    </span>
                    <span style="background: white; border-radius: 50%; width: 60px;height:60px; padding: 5px;"><img
                            src="./DahsboardIcons/Doctor.gif" alt="" style="width: 45px;"></span>
                </div>
                <hr>
                <div class="info">
                    <span>
                        <p>Active Doctors</p>
                    </span>
                    <span>
                        <p>In-Active Doctors</p>
                    </span>
                </div>
                <hr>
            </div>
        </div><br>
        <div class="sub2">
            <div class="chart-wrapper">
                <AdminBarChart />
            </div>
            <div class="chart-wrapper">
                <BarChart />
            </div>
        </div>
        <div class="sub3">
            <div class="box">
                <h6>Bussiness</h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Created Date</th>
                            <th>Last Modified By</th>
                            <th>&nbsp;&nbsp;&nbsp; Action &nbsp;&nbsp;&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="( business, index ) in businessList" :key="index">
                            <td>{{(business.businessName) }}</td>
                            <td>{{ (business.businessPhone) }}</td>
                            <td>{{ (business.businessEmail) }}</td>
                            <td>
                                <router-link class="router-link" to="WebsocketView"><i
                                        class="fa-solid fa-comment"></i></router-link>
                                <router-link class="router-link" to="GmailSenderView"> <i
                                        class="fa-solid fa-envelope"></i></router-link>
                                <router-link class="router-link" to="DoctorRegisterView"><i
                                        class="fa-solid fa-pencil"></i></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="box">
                <h6>Admins</h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Created Date</th>
                            <th>Last Modified By</th>
                            <th>&nbsp;&nbsp;&nbsp; Action &nbsp;&nbsp;&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="( admins, index ) in adminList" :key="index">
                            <td>{{(admins.adminName) }}</td>
                            <td>{{ (admins.adminDateOfCreation) }}</td>
                            <td></td>
                            <td>
                                <router-link class="router-link" to="WebsocketView"><i
                                        class="fa-solid fa-comment"></i></router-link>
                                <router-link class="router-link" to="GmailSenderView"> <i
                                        class="fa-solid fa-envelope"></i></router-link>
                                <router-link class="router-link" to="DoctorRegisterView"><i
                                        class="fa-solid fa-pencil"></i></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div><br>
        <div class="sub3">
            <div class="box">
                <h6>Clinics</h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Created Date</th>
                            <th>Last Modified By</th>
                            <th>&nbsp;&nbsp;&nbsp; Action &nbsp;&nbsp;&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="( clinics, index ) in clinicList" :key="index">
                            <td>{{(clinics.clinicName) }}</td>
                            <td>{{ (clinics.clinicDateOfCreation) }}</td>
                            <td></td>
                            <td>
                                <router-link class="router-link" to="WebsocketView"><i
                                        class="fa-solid fa-comment"></i></router-link>
                                <router-link class="router-link" to="GmailSenderView"> <i
                                        class="fa-solid fa-envelope"></i></router-link>
                                <router-link class="router-link" to="DoctorRegisterView"><i
                                        class="fa-solid fa-pencil"></i></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="box">
                <h6>Patients</h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Created Date</th>
                            <th>Last Modified By</th>
                            <th>&nbsp;&nbsp;&nbsp; Action &nbsp;&nbsp;&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="( patients, index ) in patientList" :key="index">
                            <td>{{(patients.patientName) }}</td>
                            <td>{{ (patients.patientDateOfCreation) }}</td>
                            <td></td>
                            <td>
                                <router-link class="router-link" to="WebsocketView"><i
                                        class="fa-solid fa-comment"></i></router-link>
                                <router-link class="router-link" to="GmailSenderView"> <i
                                        class="fa-solid fa-envelope"></i></router-link>
                                <router-link class="router-link" to="DoctorRegisterView"><i
                                        class="fa-solid fa-pencil"></i></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div><br>
        


    </div>
</template>

<script>
import AdminBarChart from './AdminBarChart.vue'

import axios from 'axios';
export default {
   components: { AdminBarChart }, 
   name: "AdminListView",
   data(){
       return{
           adminList:[],
           businessList:[]
       }
   },
   async mounted(){
       axios.get('http://localhost:8080/alladmins').then(response => {
           this.adminList = response.data;
           console.log(response.data);
       })
       .catch(error =>{
           this.errors.push(error);
           
       }),
       axios.get('http://localhost:8080/getAllBusiness').then(response => {
           this.businessList = response.data.businesses;
           console.log(response.data);
       })
       .catch(error =>{
           this.errors.push(error);
           
       })
   },

   
}

</script>


<style scoped>
.chart-wrapper {
    width: 45%;
    height: 400px;
}

.echarts {
    width: 100%;
    height: 100%;
}

.main {
    width: 100%;
    height: 100%;
    background: #211f38;
    color: #fff;
}

.sub1,
.sub2,
.sub3 {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

}

.sub3 div {
    width: 48%;
    height: 250px;
    border: black 1px solid;
    overflow-y: scroll;
}

.sub1 .box,
.sub2 .box {
    width: 23%;
    height: 250px;
    border: black 1px solid;
    padding: 30px;
    box-sizing: border-box;
   
}

.box {
    background: rgb(183, 224, 240);
    box-sizing: border-box;
    background: #11101d;
    color: rgb(199, 199, 199);
    border-radius: 10px;
}

.box .content {
    display: flex;
    justify-content: space-between;

}

.table {
    color: #fff;
    overflow-y: scroll;
    font-size: 12px;
}
.table td , .router-link{
    color: rgb(167, 163, 163);
    padding: 2px;
    border: 0.3px solid rgba(48, 31, 66, 0.315);
}
</style>