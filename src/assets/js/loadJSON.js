// $.getJSON("nft_list.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// fetch('http://127.0.0.1:5500/assets/js/nftList.json')
// .then(res => res.json())
// .then(json => console.log(json))
  

import nft_list from "../js/nftList.json" assert {type: 'json'} 
    console.log(nft_list); 

    var nft_row = document.querySelector('.filterContainer');  
    // var nftList = nft_list.nfts_list;   
    var layout = ``;
     for (var nft in nft_list) {
    
        var nftID =  nft_list[nft].nftID;
        var main_img_link = nft_list[nft].main_img_link;
        var card_content_title =  nft_list[nft].card_content_title;
        var category =  nft_list[nft].category;
        var nft_value =  nft_list[nft].nft_value;
    
        layout +=  ` 
        <div class="col-lg-3 col-md-6 col-sm-12 col-12 my-4 filter-item ${category}">
                      <div class="card-content-wrapper mx-auto rounded-3 p-3 bg-white">
                        <div class="card-content-main-img">
                          <img src="${main_img_link}" class="img-fluid" alt="">
                          <div class="peoples-container position-relative">
    
                            <div class="peoples position-absolute">
                                <div class="d-flex position-relative">  
                                    <div class="people position-absolute p-one">
                                      <img src="assets/img/p-1.png" class=" rounded-circle border border-white border-2" alt="">
                                    </div>
      
                                    <div class="people  position-absolute p-two">
                                      <img src="assets/img/p-2.png" class=" rounded-circle border border-white border-2" alt="">
                                    </div>
      
                                    <div class="people position-absolute p-three">
                                      <img src="assets/img/p-3.png" class=" rounded-circle border border-white border-2" alt="">
                                    </div>
      
                                    <div class="people position-absolute p-four">
                                      <img src="assets/img/p-4.png" class=" rounded-circle border border-white border-2" alt="">
                                    </div>
                              </div> 
                            </div>
                          </div>
                        </div>
    
                        <div>
                          <p class="my-4 mx-3 fw-bolder card-content-title">${card_content_title}(${category})</p>
                          <div class="d-flex justify-content-between">
                            <div class="d-flex  justify-content-between">
                              
                              <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_309)">
                                    <path
                                        d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                                        fill="#00ac4f" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_309">
                                        <rect width="15" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class="fw-bold ms-2 text-green nft-value">${nft_value} ETH</span>
                           </div>
    
                            <span class="text-grey">1 of 321</span>
                          </div>
                          <hr>
                          <div class="d-flex justify-content-between align-items-center">
                            <button type="button" class="btn px-3 fw-bold rounded-pill text-dark-blue btn-grey">
                               3h 50m 2s left 
                            </button>
                            <p class="text-dark-blue fw-bold mb-0 pb-0">Place a bid</p>
                          </div>
                        </div>
                      </div>
                    </div>
        ` 
        
      } 
      nft_row.innerHTML = layout;  

    // make the button active if clicked 
    
    // function filterProduct(value) {
    //   //Button class code
    //   let buttons = document.querySelectorAll(".button");
    //   buttons.forEach((button) => {
    //     //check if value equals innerText
    //     if (value.toUpperCase() == button.innerText.toUpperCase()) {
    //       button.classList.remove("btn-grey");
    //       button.classList.add("active"); 
    //     } else {
    //       button.classList.remove("active");
    //       button.classList.add("btn-grey"); 
    //     }
    //   });
    // }
    // window.onload = () => {
    //   filterProduct("All Categories");
    // };



// filtering the nfts
  // const filterButton =  document.querySelectorAll(".button"); 
// console.log(filterButton);

  // filterButton.forEach(el => el.addEventListener('click', event => {
  //   // console.log(event.target.innerHTML);
  //   var searchFor ="";
  //    searchFor = event.target.innerHTML;  
  //    search(searchFor); 
  // }));
 
// search filter code
   
  // function search(searchFor) {
  //   var key = searchFor; 
  //   let json = nft_list.map(nft =>{return nft.category})  
  //       var cartegoryCount =0;
  //       for(var i = 0; i < json.length; i++) {  
  //               json[i] === key ? cartegoryCount++ : console.log("not found"); ;
  //           }  
            
  // }  