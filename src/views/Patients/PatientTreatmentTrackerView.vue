<template>
    <div class="main">
        <div>
        <ul class="nav nav-tabs" id="nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="createNewTreatment">New Treatment</a>
            </li>
            
        </ul>
    </div>
    <div class="newTreatment" id="newTreatment">
        <div class="row">
            <div class="treatmentplan">
                <div>
                    <label for="">Number of Aligners</label><br>
                    <input type="number" placeholder="Number of Aligner" name="nAligner" v-model="nAligner">
                </div>
                <div>
                    <label for="">Number of Days</label><br>
                    <input type="number" placeholder="Number of Days" name="days" v-model="days">
                </div>
                <div>
                    <label for="">Type of Aliner's</label><br>
                    <button class="btn" @click="setAll($event)" value="Both">Both</button>
                    <button class="btn" @click="setAll($event)" value="Upper">Upper</button>
                    <button class="btn" @click="setAll($event)" value="Lower">Lower</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div>
                <table class="table" id="treatmentTracker">
                    <thead>
                        <tr>
                            <th>Aligner</th>
                            <th>Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Aligner Days</th>
                            <th>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tracker, index) in tracker" :key="index" id="row">
                            <td>{{ "Aligner " +(index + 1) }}</td>
                            <td>
                                <span style="display: none;">{{ type = tracker.alignerType }}</span>
                                <select name="" id="dropdown" class="dropdown" v-model="type">
                                    <option id="dropdown-containt" value="Upper">Upper</option>
                                    <option id="dropdown-containt" value="Both">Both</option>
                                    <option id="dropdown-containt" value="Lower">Lower</option>
                                </select>
                            </td>
                            <td>
                                <span style="display: none;">{{ start = convert(tracker.startDate) }}</span>
                                <input type="date" id="startdate" v-model="start"
                                    @change="startDateChange($event, index, type)">
                            </td>
                            <td>
                                <span style="display: none;"> {{ end = convert(tracker.endDate) }}</span>
                                <input type="date" id="enddate" v-model="end"
                                    @change="endDateChange($event, index, type)">
                            </td>
                            <td>
                                <span style="display: none;"> {{ day = tracker.alignerDay }}</span>
                                <!-- <input type="number" name="" id="" v-model="day"> -->
                                {{ day }}
                            </td>
                            <td></td>
                        </tr>

                    </tbody>
                    <button class="btn btn-success pull-right" id="button" @click="upload()">Save</button>
                 
                </table>
            </div>
        </div>

    </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {

    data() {
        return {
            tracker: [],

        }
    },
    methods: {
        createNewTreatment() {
            let div = document.createElement('div');
            div.innerText = document.getElementById('newTreatment').innerText;
            document.body.appendChild(div);
        },

        setAll(e) {
            let aligner = this.nAligner
            let day = this.days
            console.log(aligner);
            console.log(day);
            let type = e.target.value;
            let start = new Date()
            console.log(start);
            let end = new Date()
            end.setDate(start.getDate() + day);
            let endFirst = new Date();
            endFirst.setDate(start.getDate() + day);
            console.log(endFirst);
            this.tracker[0] = {
                startDate: new Date(),
                endDate: endFirst,
                alignerType: type,
                alignerDay: day
            }
            for (let i = 1; i < aligner; i++) {
                this.tracker[i] = {
                    startDate: new Date(start.setDate(start.getDate() + day + 1)),
                    endDate: new Date(end.setDate(end.getDate() + (day + 1))),
                    alignerType: type,
                    alignerDay: day
                }
            }
            console.log(this.tracker);
            document.getElementById('button').style.display = "block"
        },
        convert(str) {
            var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        },
        startDateChange(e, j, t) {
            let aligner = this.nAligner
            let day = this.days
            let type = t
            let date = e.target.value;

            let startforEnd = new Date(date)
            let started = new Date(date)
            let end = new Date(date)
            end.setDate(end.getDate() + day);
            let endFirst = new Date(date);
            endFirst.setDate(endFirst.getDate() + day);
            var diff = new Date(endFirst.getTime() - started.getTime())
            console.log(diff);
            this.tracker[j] = {
                startDate: started,
                endDate: endFirst,
                alignerType: type,
                alignerDay: diff.getUTCDate() - 1
            }
            for (var i = j + 1; i < aligner; i++) {
                this.tracker[i] = {
                    startDate: new Date(startforEnd.setDate(end.getDate() + 1)),
                    endDate: new Date(end.setDate(startforEnd.getDate() + day)),
                    alignerType: type,
                    alignerDay: day
                }
            }
        },
        endDateChange(e, j, t) {
            let aligner = this.nAligner
            let day = this.days
            let type = t
            let date = e.target.value;
            let end = new Date(date)
            let endFirst = new Date(date)
            let start = new Date(date)
            var diff = new Date(endFirst.getTime() - this.tracker[j].startDate.getTime());
            this.tracker[j] = {
                startDate: this.tracker[j].startDate,
                endDate: endFirst,
                alignerType: type,
                alignerDay: diff.getUTCDate() - 1
            }
            for (var i = j + 1; i < aligner; i++) {

                this.tracker[i] = {
                    startDate: new Date(start.setDate(end.getDate() + 1)),
                    endDate: new Date(end.setDate(start.getDate() + day)),
                    alignerType: type,
                    alignerDay: day
                }
            }
        },

        async upload() {

            console.log(this.response)
            let result = await axios.post("http://192.168.1.40:8080/savetreatment", this.tracker, {
                headers: {
                    Authorization: `Bearer ` + localStorage.getItem('token')

                }
            });

            console.warn(result);
            if (result.status == 201) {
                alert("sign_up succesfully");
                localStorage.setItem("user_info", JSON.stringify(result.data));
            }
        },
        function1() {
            var ul = document.getElementById("nav");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(this.trackerId+" Treatment "));
            li.setAttribute("class", "nav-item"); // added line
            ul.appendChild(li);

        }
    },
    mounted() {

    }
}
</script>
<style scoped>
.main{
    border-radius: 1px #818181 solid;
    border-radius: 15px;
    background: rgba(17, 12, 24, 0.432);;
}
.treatmentplan {
    margin: 40px;
    display: flex;
    justify-content: space-evenly;
    color: #fff;
}

.btn {
    width: 180px;
    height: 40px;
    background-color: rgb(48, 34, 61);
    color: white;
    border-color: rgb(72, 64, 80);
    border-radius: 5px;
    margin: 5px;
}

input {
    background: transparent;
    color: #fff;
    border: 1px solid rgb(68, 64, 95);
    width: 300px;
    border-radius: 10px;
    height: 40px;
    text-align: center;
}

input :focus {
    background: transparent;
}

label {
    text-align: left;
}

#button {
    
    position: absolute;
    right: 2%;
    display: none;
    background: green;
}

.btn:hover {
    box-shadow: 1px 1px 8px #777777;
}

.table {
    color: #fff
}

.table thead {
    background: #11101d;
}

.dropdown {
    background: transparent;
    border: 1px solid #666464;
    color: #fff;
    width: 100px;
    border-radius: 10px;
    height: 40px;
    text-align: center;
}

#dropdown-containt {
    background: #211f38;
    color: #fff;
}
</style>