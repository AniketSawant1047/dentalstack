<template> 
    <home-view></home-view>
      <body id="app">
         <table class="table">
             <thead>
                <tr>
                 <th>Clinic ID</th>                
                 <th>Clinic Name</th>
                 <th>Clinic Address</th>
                 <th>Clinic City</th>
                 <th>State</th>
                 <th>Pincode</th>
                 <th>Date Added</th>
                 <th>Status</th>
                 <th>Last Modified By</th>
                 <th>Action</th>
                </tr>
             </thead>
             <tbody>
                 <tr v-for="clinicList in list" :key="clinicList">
                     <td > {{(clinicList.clinicId)}}</td>
                     <td>{{(clinicList.clinicName)}}</td>
                     <td>{{(clinicList.clinicAddress)}}</td>
                     <td>{{(clinicList.clinicCity)}}</td>
                     <td>{{(clinicList.clinicState)}}</td>                   
                     <td>{{(clinicList.primaryDoctor)}}</td>
                     <td>{{(clinicList.dateAdded)}}</td>
                     <td>{{(clinicList.status)}}</td>
                     <td>{{(clinicList.clinicDateOfCreation)}}</td>
                     <td>
                         <router-link class="router-link"  to="DoctorRegisterView"><i class="fa-solid fa-pencil"></i></router-link>
                     </td>
                 </tr>
             </tbody>
         </table>
        
     </body>
 </template>
 <script>
//  import axios from 'axios';
//  export default{
//      name: "ClinicListView",
//      data(){
//          return{
//              list:[]
//          }
//      },
//      async mounted(){
//          axios.get('http://192.168.1.35:8080/clinicList',{})
//          .then(response => {
//              this.list = response.data;
//              console.log(response.data);
//          })
//          .catch(error =>{
//              this.errors.push(error);
//              console.log(error);
//          })
//      },
 
     
//  }
 
 </script>

<style scoped>

#app{
   width: 100%;
}
.tables{
   width: 100%;
   color: white;
   background: transparent;
}
.router-link{
   text-decoration: none;
   background-color: rgb(10, 116, 255);
   color: rgb(255, 255, 255);
   font-size: 10px;
   margin: 5px;
   padding: 5px;
   box-sizing: border-box;
}
.router-link:hover{
   position: relative;
   top: 2px;
   background-color: rgb(65, 147, 255);
}
table {
 font-family: arial, sans-serif;
 font-size: 12px;
 border-collapse: collapse;
 text-align: center;
}

td, th {
 border: 1px solid #dddddd;
 text-align: left;
 padding: 8px;
 text-align: center;
 color: #fff;
}

thead th{
   background-color: #11101d;
   color: rgb(194, 194, 194);
   border: 1px rgba(255, 255, 255, 0.05) solid;
   font-size: 14px;
}


tbody td,tr{
    border: 1px rgba(255, 255, 255, 0.05) solid;
}
</style>