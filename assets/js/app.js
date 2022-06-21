const facbook_form =document.getElementById('facbook_form');
const msg = document.querySelector('.msg');
const output =document.getElementById('output')



const allData =(e)=>{
    let lsData = getItem('facebook');
    let list ='';
    let date = new Date();
    // console.log(lsData)
    if(!lsData){
        list = `<h2 class="text-center p-2">No post</h2>`
    }

    if(lsData){

        lsData.map((item,index)=>{
            list +=`<li class="my-2 shadow list-group-item">
            <div class="d-flex justify-content-between align-items-center">
            <div  class="d-flex align-items-center justify-content-start">
                <img  style="width: 70px;height:70px" src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" class=" p-3 border-1 border-dark rounded rounded-circle me-2 ">
                <div class="d-flex flex-column align-items-center mt-4">
                 <p class="mb-0">${date.toLocaleTimeString()}</p>
                 <p>${date.toLocaleDateString()}</p>
                </div>
            </div>
              <a href="#" class="btn btn-light "><i class="fa-solid fa-ellipsis"></i></a>
            </div>
            <p class="text-fied">${item.heading}</p>
            <div class="m-1">
                <img src="${item.photo}" alt="" class="w-100 h-100 p-2">
            </div>
            
            <div class="m-1 d-flex justify-content-around">
                <div class="count">
                    <p >Like <span id="like">0</span></p>
                </div>
                <div class="comment">
                    <p id="comment">comment 0</p>
                </div>
                <div class="share">
                    <p id="share">share 0</p>
                </div>
            </div>
            <div class="hr">
                <hr>
            </div>
            <div class="lowerfield d-flex justify-content-around p-2">
                <div class="like"><button class="btn btn-outline-primary"><i class="fas fa-thumbs-up" ></i></button></div>
                <div class="comment"><button class="btn btn-outline-primary"><i class="fas fa-comment" ></i></button></div>
                <div class="share"><button  class="btn btn-outline-primary"><i class="fas fa-share" ></i></button></div>
            </div>
            </li>
            ` 
        })
     
    }
    output.innerHTML = list;

}

allData();



// form submit 

facbook_form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let form_value = new FormData(e.target);
    let form_data = Object.fromEntries(form_value.entries());
    let {heading,photo} = form_data;
    if(!heading||!photo){
        msg.innerHTML =setAlert('All fields are required')
    }else{
        setDataLs('facebook',form_data);
        allData()
        e.target.reset();
    }

})

output.onclick=(e)=>{
e.preventDefault()
let count = 0;
  if(e.target.classList.contains('fa-thumbs-up')){
    let like = document.querySelector('#like');
    like.innerHTML = count++;

  }

}