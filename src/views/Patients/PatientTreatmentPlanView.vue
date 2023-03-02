<template>
    <div class="main">
        <div class="left">
            <div class="data" v-for="listTreatementPlan in listTreatementPlan" :key="listTreatementPlan">
                <table class="highlight">

                    <tr>
                        <td><strong>Treatement ID:</strong> {{(listTreatementPlan.treatementPlanId)}}</td>
                        <td style="float: right;"><b>Created : </b>{{ listTreatementPlan.treatementPlanId }}</td>
                    </tr>
                    <tr>
                        <td><b>Title : {{ listTreatementPlan.title }}</b><br> </td>
                        <td style="float: right;">Attachements: <b>{{ listTreatementPlan.attachements }}</b></td>
                    </tr>
                    <tr>
                        <td>{{ listTreatementPlan.remarks }}</td>
                        <td style="float: right;">IPR: <b>{{ listTreatementPlan.ipr }}</b></td>
                    </tr>
                    <tr>
                        <td><b>Upper Aligners Count:</b> {{ listTreatementPlan.upperAligners }}</td>
                        <td style="float: right;">Extractions: <b>{{ listTreatementPlan.extraction }}</b></td>
                    </tr>
                    <tr>
                        <td><b>Lower Aligners Count:</b> {{ listTreatementPlan.lowerAligners }}</td>
                        <td style="float: right;"><a href="" target="_blank" rel="noopener noreferrer"><i
                                    class="fa-solid fa-link"></i> Treatement Planning Link</a></td>
                    </tr>
                    <tr>
                        <td><b>Files:</b></td>
                        <td style="float: right;"></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-danger btn-sm btn-flat pull-right ddse"><i class="fa-solid fa-trash"
                                    @click="deletePlan(listTreatementPlan.treatementPlanId)"></i> </button></td>
                        <td style="float: right;">
                            <span><button type="button" class="btn btn-success" id="approve"
                                    @click="approve">Approve</button></span> &nbsp;
                            <span><button type="button" class="btn btn-warning" @click="modify">Modify</button></span>
                        </td>
                    </tr>


                </table>
                <div class="alert alert-success" role="alert" v-if="presentDate != ''">
                    Approved on {{ presentDate }}
                </div>
                <div class="form-floating" v-if="comments != ''">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                    <span><button type="button" class="btn btn-warning">Comment</button></span>
                </div>
            </div>
        </div>
        <div class="right">
            <div>
                <table class="table1">
                    <tr>
                        <td><label for="">Title</label></td>
                        <td><input type="text" v-model="title"></td>
                    </tr>
                    <tr>
                        <td><label for="">Remarks</label></td>
                        <td><input type="text" v-model="remarks"></td>
                    </tr>
                    <tr>
                        <td><label for="">Total Upper Aligners</label></td>
                        <td><input type="number" v-model="upperAligners"></td>
                    </tr>
                    <tr>
                        <td><label for="">Total Lower Aligners</label></td>
                        <td><input type="number" v-model="lowerAligners"></td>
                    </tr>
                    <tr>
                        <td><label for="">Treatement Planning Link</label></td>
                        <td><input type="text" v-model="planningLink"></td>
                    </tr>
                </table><br>

                <table class="table2">
                    <tr>
                        <td>Attachements:</td>
                        <td>IPR:</td>
                        <td>Extraxtion:</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" v-model="attachements" value="Yes"> &nbsp;&#160;<input type="radio"
                                v-model="attachements" value="No"><br>
                            <label for="">Yes</label> <label for="">No</label>
                        </td>
                        <td>
                            <input type="radio" v-model="ipr" value="Yes">&nbsp; &#160;<input type="radio" v-model="ipr"
                                value="No"><br>
                            <label for="">Yes</label> <label for="">No</label>
                        </td>
                        <td>
                            <input type="radio" v-model="extraction" value="Yes">&nbsp; &#160;<input type="radio"
                                v-model="extraction" value="No"><br>
                            <label for="">Yes</label> <label for="">No</label>
                        </td>
                    </tr>
                </table><br>
                <label for="">Upload Documents :</label>
                <label class="upload" for="uploadFile"> Drop files to here to Upload
                    <input type="file" class="uploadFile">
                </label><br><br>
                <button class="btn btn-success pull-right" id="button" @click="update()">Save</button>
            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios';

export default {

    name: "PatientListView",
    data() {
        return {
            listTreatementPlan: [],
            presentDate: '',
            comments: ''
        }
    },
    async mounted() {
        // let result = await axios.get("http://localhost:8080/findAllD");
        // this.list = result.data
        //this.pid = localStorage.getItem("id");

        axios.get(`http://localhost:8080/getallplans`, {

        }).then(response => {
            this.listTreatementPlan = response.data;
            console.log(response.data);
        })
            .catch(error => {
                this.errors.push(error);
                console.log(error);
            })

    },
    methods: {
        async update() {
            await axios.post("http://localhost:8080/saveTreatementPlan", {
                title: this.title,
                remarks: this.remarks,
                lowerAligners: this.lowerAligners,
                upperAligners: this.upperAligners,
                planningLink: this.planningLink,
                attachements: this.attachements,
                ipr: this.ipr,
                extraction: this.extraction,

            }).then(response => {
                this.listTreatementPlan = response.data;
                localStorage.setItem("treatementPlanId", this.listTreatementPlan.treatementPlanId);
                console.log(response.data);
                window.location.reload();
            })

        },
        deletePlan(deletePlanID) {
            axios.delete(`http://localhost:8080/deletePlanByID/${deletePlanID}`);
            window.location.reload();
        },
        approve() {
            this.presentDate = new Date().toLocaleString();
            document.getElementById('approve').disabled = true;
        },
        modify() {
            this.presentDate = ''
            this.comments = "sendComment"
        }
    }
}


</script>

<style scoped>
.main {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    color: #fff;
}

.right {
    margin-left: 1%;
    border: 1px solid rgb(122, 122, 122);
    padding: 50px;
    width: 61%;
    text-align: left;
    border-radius: 15px;
    background: rgba(17, 12, 24, 0.432);
}

.left {
    border: 1px solid rgb(122, 122, 122);
    padding: 15px;
    width: 38%;
    text-align: left;
    border-radius: 15px;
    background: rgba(17, 12, 24, 0.432);
}

.table1 tr,
td {
    height: 40px;
    line-height: 30px;
}

.uploadFile {
    width: 300px;
    height: 100px;
    background-color: transparent;
}

.table1 input {
    margin-left: 20px;
    width: 150%;
    border: 1px rgba(80, 80, 80, 0.61) solid;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    padding-left: 10px;
}

.table2 {
    padding: 30px;
}

.table2 tr {
    height: 30px;
}

.table2 td {
    width: 50%;
}

.table2 input {
    height: 30px;
    border: 1px rgba(80, 80, 80, 0.61) solid;

}

.data {
    width: 100%;
    background-color: #f8f9fa;
    border-radius: 10px;
    border: 1px solid #777777;
    border-radius: 10px;
    padding: 15px;
}

.highlight td {
    width: 200%;
    box-sizing: border-box;

}

.btn {
    color: white;
}

.btn:hover {
    box-shadow: 1px 1px 8px #777777;
}

.upload {
    cursor: pointer;
    height: 140px;
    width: 100%;
    border: 1px solid rgb(145, 145, 145);
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 65px;
}

.uploadFile {
    display: none;
}

#button {
    position: relative;
    left: 80%;
}

.btn:hover {
    box-shadow: 1px 1px 8px #777777;
}
</style>