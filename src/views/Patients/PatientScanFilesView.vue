<template>
    <div class="main">
        <div class="left">
            <div >
                <h4>SCAN ID:# 49 </h4><hr>
                <b>How is the impression of the patient's teeth being taken?</b>                <br>
                <p>Intra-oral Scan</p>

                <b>Scan Files Link</b><br>
                <hr style="clear:both;margin:5px">

                <b>Upper Arch:</b><br>
                <a href="" target="_blank">
                    <i class="fa fa-file" aria-hidden="true"></i> user.png
                </a><br>
                <hr style="clear:both;margin:5px">

                <b>Lower Arch:</b><br>
                <a href="" target="_blank">
                    <i class="fa fa-file" aria-hidden="true"></i> user.png
                </a><br>

                <hr style="clear:both;margin:5px">
                <b>Bite 1:</b><br>
                <a href="" target="_blank">
                    <i class="fa fa-file" aria-hidden="true"></i> user.png
                </a><br>
                <hr style="clear:both;margin:5px">

                <b>Bite 2:</b><br>
                <a href="" target="_blank">
                    <i class="fa fa-file" aria-hidden="true">
                    </i> user.png
                </a><br>
                <a href="" target="_blank">
                    <i class="fa fa-file" aria-hidden="true"></i> Background of Photo
                    Gallary.jpg
                </a><br><br>
                <b>Created:</b><br>
                <p>2022-12-16 17:10:05</p>
                <a href="" class="btn btn-danger btn-sm pull-right">
                    <i class="fa fa-trash"></i>
                </a>
            </div>
        </div>
        <div class="right" id="">
            <div class="">

                <h4>Case Details Form
                    <br><small>Scanning</small>
                </h4>

                <label class=" ">How is the impression of the patient’s teeth being taken?</label>
                <div class="">
                    <label>
                        <input type="radio" name="impression_of_the_patient" value="Intra-oral Scan">
                        Intra-oral Scan 
                    </label><br>
                    <label>
                        <input type="radio" name="impression_of_the_patient" value="Rubber based impression">
                        Rubber based impression 
                    </label><br>
                </div>
            </div>
            <div class="raw">
                <div class="">
                    <label class="">Upper Arch</label>
                    <form class="dropzone dz-clickable" id="">
                        <div class="dz-default dz-message">
                            <label class="dz-button" for="file-input" type="button">Drop files here to upload</label>
                        </div>
                        <input id="file-input" type="file" hidden/>
                    </form>
                    
                </div>     

                <div class="">
                    <label class="">Lower Arch</label>
                    <form class="dropzone dz-clickable" id="">
                        <div class="dz-default dz-message">
                            <label class="dz-button" for="file-input" type="button">Drop files here to upload</label>
                        </div>
                        <input id="file-input" type="file" hidden/>
                    </form>
                    
                </div> 

                <div class="">
                    <label class="">Bite 1</label>
                    <form class="dropzone dz-clickable" id="">
                        <div class="dz-default dz-message">
                            <label class="dz-button" for="file-input" type="button">Drop files here to upload</label>
                        </div>
                        <input id="file-input" type="file" hidden/>
                    </form>
                    
                </div>
                
                <div class="">
                    <label class="">Bite 2</label>
                    <form class="dropzone dz-clickable" id="">
                        <div class="dz-default dz-message">
                            <label class="dz-button" for="file-input" type="button">Drop files here to upload</label>
                        </div>
                        <input id="file-input" type="file" hidden/>
                    </form>
                    
                </div> 
                
            <br>                
            </div>
            <hr>
            <button class="btn btn-success pull-right" id="button" onclick="update()">Update</button>
        </div>
    </div>
</template>

<style scoped>
.main{
    display: flex;
    color: #fff;
}
.left{
    margin: 20px;
    border: 1px solid rgb(124, 124, 124);
    padding: 20px;
    border-radius: 15px;
    text-align: left;
    background: rgba(17, 12, 24, 0.432);
}
.right{
    margin: 20px;
    border: 1px solid rgb(124, 124, 124);
    padding: 20px;
    border-radius: 15px;
    width: 100%;
    text-align: left;
    background: rgba(17, 12, 24, 0.432);
}
.raw{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.dropzone.dz-clickable {
    cursor: pointer;
}
.dropzone {
    min-height: 150px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0);
    padding: 20px 20px;
}
.dropzone, .dropzone * {
    box-sizing: border-box;
}

.dropzone .dz-message .dz-button {
    background: none;
    box-sizing: border-box;
    color: inherit;
    border: none;
    padding: 10% 20%;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

#button{
    position: relative;
    left: 80%;
}
.btn:hover{
   box-shadow: 1px 1px 8px #777777;
}
</style>