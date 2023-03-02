<template>
    <div class="tab-pane " id="tab-appointments">
        <div class="row">
            <div class="col-lg-5 col-sm-12 appointments_summery" id="left">
                <div id="left">
                    <div class="highlight"  v-for="(listAll, index) in listAllAppointment" :key="index">
                    
                    <h6>Appointment ID :{{ listAll.appointmentID }}<small class="pull-right"><b>Appointment Date: {{
                            listAll.date
                    }} </b></small>
                    </h6>
                    <hr>
                    <b></b>
                    <br>
                    <p>{{ listAll.remarks }}</p>
                    <hr class="npnm">
                    <div class="appointment_images"><a href="" data-lightbox=""><img src="" class="appointments_files_img img-responsive"></a></div>
                    <br>
                    <small><b>Date added:</b>{{ listAll.presentDate }}</small>
                    <button class="btn btn-danger btn-sm btn-flat pull-right ddse" @click="deleteAppointment(listAll.appointmentID)"><i
                            class="fa fa-trash"></i>
                    </button>
                </div>
                </div>
            </div>
            <div class="col-lg-7 col-sm-12">
                <div id="right">
                    <div class="form-group">
                    <label class="col-sm-3 control-label">Title</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="title">
                    </div>
                </div>
                <br>

                <div class="form-group">
                    <label class="col-sm-3 control-label">Appointment Date</label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" v-model="date">
                    </div>
                </div>
                <br>

                <div class="form-group">
                    <label class="col-sm-3 control-label">Remarks</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="remarks">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label class="col-sm-3 control-label">Remarks</label>
                    <form class="dropzone dz-clickable" id="">
                        <div class="dz-default dz-message">
                            <label class="dz-button" for="file-input" type="button">Drop files here to upload</label>
                        </div>
                        <input id="file-input" type="file" hidden/>
                    </form>
                </div>
                <br><br><br>
                <button class="btn btn-success pull-right" id="button" v-on:click="update(list.appointmentID)">Update</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    name: "",
    data() {
        return {
            list: [],
            listAllAppointment:[]

        }
    },
    methods: {
        async update() {
            let result = await axios.post("http://localhost:8080/saveAppointment", {
                title: this.title,
                presentDate: new Date().toLocaleString(),
                date: this.date,
                remarks: this.remarks,
            }).then(response => {
                this.list = response.data;
                console.log(this.list.appointmentID);
                if(this.list.appointmentID != ''){
                    localStorage.setItem("appointmentID", this.list.appointmentID);
                }
                window.location.reload();
               
            })
            console.warn(result);
            if (result.status == 201) {
                alert("sign_up succesfully");
                localStorage.setItem("user_info", JSON.stringify(result.data));
            }
        },
        deleteAppointment(deleteId){

            axios.delete(`http://localhost:8080/deleteByID/${deleteId}`)
            window.location.reload();
        }
        

    },async mounted() {
            axios.get('http://192.168.1.40:8080/getAllAppointment', { 
                headers: {
                    Authorization: `Bearer ` + localStorage.getItem('token')

                }}).then(response => {
                this.listAllAppointment = response.data;
                console.log(response.data);
            })
                .catch(error => {
                    this.errors.push(error);
                    console.log(error);
                })
        },


}
</script>

<style scoped>
.upload {
    cursor: pointer;
    height: 140px;
    width: 80%;
    border: 1px solid rgb(145, 145, 145);
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 65px;
}

.uploadFile {
    display: none;
}

.highlight {
    padding: 15px;
    margin: 1rem;
    margin-bottom: 1rem;
    background-color: #f8f9fa;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border-radius: 10px;   
    overflow: hidden;
    text-align: left;
}
#left{
    background: rgba(17, 12, 24, 0.432);
    border: 1px solid #c7c7c7;
    border-radius: 25px;
}
#right{
    border: 1px solid #c7c7c7;
    border-radius: 25px;
    margin: 5px;
    padding: 15px;
    background: rgba(17, 12, 24, 0.432);
}
.form-group{
    display: flex;
    color: #fff;
   text-align: left;
}
input{
    background: transparent;
    color: #fff;
    width: 80%;
}
input :focus{
    background: transparent;
    color: #fff;
}

.pull-right{
   position: absolute;
   right: 4%;
   bottom: 4%;
}
.btn:hover{
   box-shadow: 1px 1px 8px #777777;
}
.dropzone.dz-clickable {
    cursor: pointer;
}
.dropzone {
    width: 68%;
    min-height: 150px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0);
    padding: 20px 25px;
    border-radius: 15px;
}
.dropzone, .dropzone * {
    box-sizing: border-box;
}

.dropzone .dz-message .dz-button {
    background: none;
    box-sizing: border-box;
    color: inherit;
    border: none;
    padding: 10% 25%;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

</style>