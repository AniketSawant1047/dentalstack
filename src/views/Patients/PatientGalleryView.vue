<template>

  <div class="row">
    <div class="viewPhoto" id="patient_gallery_holder">
      <div class="accrd">
        <div class="col-lg-2" >
        <img src="" id="imageGet" />
      </div>
      </div>
    </div>
    <div class="uploadPhoto">
      <div class="form-group">
        <label class="col-sm-4">Progress Image:</label>
        <div class="col-sm-8">
          <select name="progress_image" class="form-control">
            <option value="Initial consultation ">Initial consultation</option>
            <option value="Pre-treatment pictures (Extra Oral) ">
              Pre-treatment pictures (Extra Oral)
            </option>
            <option value="Pre-treatment pictures (Intra Oral) ">
              Pre-treatment pictures (Intra Oral)
            </option>
            <option value="Treatment Completion (Extra Oral) ">
              Treatment Completion (Extra Oral)
            </option>
            <option value="Treatment Completion (Intra Oral)">
              Treatment Completion (Intra Oral)
            </option>
            <option value="Patient X-rays (OPG, Lateral Cephalogram)">
              Patient X-rays (OPG, Lateral Cephalogram)
            </option>
            <option value="Others ">Others</option>
          </select>
        </div>
      </div>
      <br />
      <div class="form-group">
        <label class="col-sm-4">Remarks:</label>
        <div class="col-sm-8">
          <input name="progress_tag" class="form-control" />
        </div>
      </div>
      <br />
      <hr />
      <div class="image-upload">
        <label for="file-input" id="image"></label>
        <input type="file" @change=uploadImages id="file-input" ref='uploadImage'>

      </div>
      <button class="btn" ref=”fileUpload” @click=fileUpload()>Upload Image</button>
    </div>
  </div>

</template>
<script>
/* eslint-disable */
export default {
  name: 'imageUpload',
  data() {
    return {
      previewImage: null
    }
  },
  methods: {
    uploadImages(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        localStorage.setItem("imgDatas", this.previewImage)
        const dataImage = localStorage.getItem('imgDatas');
        var bannerImg = document.getElementById('imageGet');
        bannerImg.src = dataImage;
      };

    },
  },
  mounted() {
    const dataImage = localStorage.getItem('imgDatas');
    var bannerImg = document.getElementById('imageGet');
    bannerImg.src = dataImage;
  }
}
</script>
      
<style scoped>
.row{
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  
}
.uploadPhoto {
  width: 55%;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  background: rgba(17, 12, 24, 0.432);
}
.viewPhoto{
  width: 40%;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  background: rgba(17, 12, 24, 0.432);
}

.form-group{
  display: flex;
  
}

label{
    color: #fff;
}
#imageGet {
  width: 150px;
}

.uploading-image {
  display: flex;
}

.image-upload>input {
  display: none;
}

#image {
  background-image: url('./Images/Background\ of\ Photo\ Gallary.jpg');
  background-size: cover;
  width: 90%;
  aspect-ratio: 1100 / 851;
  margin: 0px;
  border: 1px solid rgb(63, 56, 56);
  border-radius: 15px;
}

</style> 
