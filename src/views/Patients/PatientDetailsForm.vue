<template>
	<div class="pDetails">
		<div class="profile-details">
			<div class="profile-content">
				<img src="./Images/user.jpeg" alt="profileImg">
			</div>
			<div class="name-job">
				<div class="profile_name">Rishang Jain</div>
				<div class="job">Founder</div>
				<div class="button">
					<button class="button-switch" id="left-button" @click="switchs(1)">Treatment Progress & Status</button>
					<button class="button-switch" id="right-button" @click="switchs(2)">Patient Info</button>
				</div>
			</div>
		</div>
		<div class="profileInfo" id="info"> 
			<h5 style="background: #3e3c63; padding: 5px;">Patient Info</h5>
			<table class="table">
				<div>
					<th>
						<p> <i class="fa-solid fa-envelope"></i> Email :</p>
					</th>
					<th>
						<p> <i class="fa-solid fa-phone"></i> Phone :</p>
					</th>
					<th>
						<p><i class="fa-solid fa-cake"></i> Date of Birth :</p>
					</th>
					<th>
						<p><i class="fa-solid fa-location"></i> Pincode :</p>
					</th>
				</div>
			</table> 
			<table class="table">
				<div>
					<th>
						<p><i class="fa-solid fa-user"></i> External Doctor :</p>
					</th>
					<th>
						<p><i class="fa-solid fa-user"></i> Internal Doctor :</p>
					</th>
					<th>
						<p> <i class="fa-solid fa-user"></i> Affliate Clinic : </p>
					</th>
					<th>
						<p> <i class="fa-solid fa-user"></i> User Status :</p>
					</th>
				</div>
			</table>
		</div>
		<div class="profileInfo" id="moreInfo"> 
			<h5 style="background: #3e3c63; padding: 5px;">Treatment Progress & Status</h5>
			<table class="table">
				<div>
					<th>
						<p> <i class="fa-sharp fa-solid fa-pen-to-square"></i> Cheif Complaint :</p>
					</th>
					<th>
						<p><i class="fa-solid fa-tooth"></i> Aligner Status :</p>
					</th>
					<th>
						<p><i class="fa-solid fa-teeth"></i> Aligners left milestone :</p>
					</th>
					<th>
						<p><i class="fa-solid fa-calendar-days"></i> Estimated Treatment Completion date :</p>
					</th>
				</div>
			</table>
			<table class="table">
				<div>
					<th>
						<p><i class="fa-solid fa-calendar-days"></i> Current Aligner Date :</p>
					</th>
					<th>
						<p><i class="fa-solid fa-calendar-days"></i> Next Aligner Change Date :</p>
					</th>
					<th>
						<p><i class="fa-sharp fa-solid fa-clock"></i> Time elapsed : </p>
					</th>
					<th>
						<p><i class="fa-solid fa-hourglass-half"></i> Avarage Hour per Day :</p>
					</th>
				</div>
			</table>
		</div>
	</div><br>
	<div>
		<div class="container">
			<div class="progress">
				<div class="percent"></div>
			</div>
			<div class="steps">
				<div class="step selected" id="0" @click="this.$router.push({ path: `/PatientDetails` })"> <span>&#10003;</span> Patient Details</div>
				<div class="step" id="1" @click="this.$router.push({ path: `/PatientGallery` })"> <span>&#10003;</span>  Patient Gallery</div>
				<div class="step" id="2" @click="this.$router.push({ path: `/PatientScanFiles` })"><span>&#10003;</span> Scan Files</div>
				<div class="step" id="3" @click="this.$router.push({ path: `/PatientCaseDetails` })"><span>&#10003;</span>Case Details</div>
				<div class="step" id="4" @click="this.$router.push({ path: `/PatientTreatmentPlan` })"><span>&#10003;</span>Treatment Plan </div>
				<div class="step" id="5" @click="this.$router.push({ path: `/PatientTreatmentTracker` })"><span>&#10003;</span>  Treatment Tracker</div>
				<div class="step" id="6" @click="this.$router.push({ path: `/PatientAppointment` })"> <span>&#10003;</span> Appointment</div>
				
			</div>
		</div>
	</div>
	<router-view></router-view>
</template>

<style scoped>
.table{
  font-family: arial, sans-serif;
  font-size: 12px;
  text-align: start;
  color: #fff;
  border: none;
}
.table td , .table th{
	border: none;
	border-right: 0.5px solid #dddddd75;
	width: 25%;
	padding: 1%;
	height: 2%;
}
body {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
}

.pDetails {
	margin-top: 20px;
	background: rgba(17, 12, 24, 0.432);
	width: 100%;
	padding: 5px;
	border: 1px solid rgb(187, 187, 187);
	border-radius: 16px;
}
.profile-details{
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 60px 8px 10px;
  transition: all 0.5s ease;
  box-sizing: border-box;
}
.profile-details img {
	height: 62px;
	width: 62px;
	object-fit: cover;
	border-radius: 16px;
	margin: 0 14px 0 12px;
	background: #1d1b31;
	transition: all 0.5s ease;
	box-sizing: border-box;
	border: 10px solid rgba(32, 22, 44, 0.432);
}
.profile-details .profile-content{
  display: flex;
  align-items: center;
}
.profile-details .profile_name,
.profile-details .job{
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;

}
.profileInfo{
	color: #fff;
}
.container {
	width: 100%;
	transform: translate(-1%, -1%);
}

.steps {
	position: relative;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin-bottom: 20px;
}

.step {
	width: 14%;
	height: 40px;
	margin-left: 20px;
	background: #fff;
	padding-top: 11px;
	border: 2px solid #ACACA6;
	border-radius: 5%;
	transition: background 2s;
	border-radius: 35px;
	font-size: 70%;
}

.step.selected {
	border: 2px solid #151324;
	background: #3e3c63;
	color: white;
}
span{display: none;}
.step.completed span{
	display: inline;
	font-size: 22px;
	color: rgb(17, 245, 17);
}
.step.completed {
	border: 2px solid #a7a7a7;
	background: #11101d;;
	color: white;
	padding-top: 0px;

}

.progress {
    position: absolute;
    left: 40px;
    top: 20px;
    width: 93%;
    height: 10%;
    z-index: -1;
}

.percent {
	position: absolute;
	width: 0;
	height: 100%;
	border-bottom: 10px solid #141322;
	z-index: 1;
	transition: width 0.5s;
}
 router-view{
	margin: 10px;
}
.button{
	position: absolute;
	right: 2%;
	top: 120px;
}
.button-switch{
	height: 40px;
	width: 250px;
	background: transparent;
	color: #fff;
	border: #ffffff60 1px solid;
}
.button-switch:hover{
	background: #3e3c63
}
#left-button{
	border-start-start-radius: 25px;
	border-end-start-radius: 25px;
}
#right-button{
	width: 140px;
	border-end-end-radius: 25px;
	border-start-end-radius: 25px;
	background: #3e3c63;
}
#moreInfo{
	display: none;
}


</style>

<script>

export default {
	mounted(){
		
		this.$router.push({ path: `/PatientDetails` })
		let els = document.getElementsByClassName('step');
		let steps = [];
		Array.prototype.forEach.call(els, (e) => {
			steps.push(e);
			e.addEventListener('click', (x) => {
				progress(x.target.id);
			});
		});

		function progress(stepNum) {
			let p = stepNum * 15;
			document.getElementsByClassName('percent')[0].style.width = `${p}%`;
			steps.forEach((e) => {
				if (e.id === stepNum) {
					e.classList.add('selected');
					e.classList.remove('completed');
				}
				if (e.id < stepNum) {
					e.classList.add('completed');
				}
				if (e.id > stepNum) {
					e.classList.remove('selected', 'completed');
				}
			});
		}
			
	},
	methods:{
		switchs(a){
			if (a===1) {
				document.getElementById('info').style.display="none";
				document.getElementById('moreInfo').style.display="block";
				document.getElementById('right-button').style.background="none";
				document.getElementById('left-button').style.background="#3e3c63"
			} else {
				document.getElementById('moreInfo').style.display="none";
				document.getElementById('info').style.display="block";
				document.getElementById('left-button').style.background="none";
				document.getElementById('right-button').style.background="#3e3c63";
			}
		}
	}
}
		

</script>

