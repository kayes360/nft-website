var data = {
    "nfts_list": [
        {
            "nftID": 1,
            "main_img_link": "assets/img/hero-card-one.png",
            "card_content_title": "ArtCrypto",
            "category": "Art",
            "nft_value":  0.25
        } 
        ,      
        {
            "nftID": 2,
            "main_img_link": "assets/img/hero-card-two.png",
            "card_content_title": "This NFT",
            "category": "celebrities",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 3,
            "main_img_link": "assets/img/hero-card-three.png",
            "card_content_title": "NameCrypto",
            "category": "Gaming",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 4,
            "main_img_link": "assets/img/hero-card-four.png",
            "card_content_title": "KingCrypto",
            "category": "Sport",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 5,
            "main_img_link": "assets/img/hero-card-four.png",
            "card_content_title": "KingCrypto",
            "category": "Music",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 6,
            "main_img_link": "assets/img/hero-card-three.png",
            "card_content_title": "This NFT",
            "category": "Crypto",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 7,
            "main_img_link": "assets/img/hero-card-one.png",
            "card_content_title": "NameCrypto",
            "category": "Art",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 8,
            "main_img_link": "assets/img/hero-card-two.png",
            "card_content_title": "KingCrypto",
            "category": "Celebrities",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 9,
            "main_img_link": "assets/img/hero-card-one.png",
            "card_content_title": "ArtCrypto",
            "category": "Gaming",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 10,
            "main_img_link": "assets/img/hero-card-four.png",
            "card_content_title": "This NFT",
            "category": "Sport",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 11,
            "main_img_link": "assets/img/hero-card-two.png",
            "card_content_title": "NameCrypto",
            "category": "Music",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 12,
            "main_img_link": "assets/img/hero-card-three.png",
            "card_content_title": "KingCrypto",
            "category": "Crypto",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 13,
            "main_img_link": "assets/img/hero-card-three.png",
            "card_content_title": "ArtCrypto",
            "category": "Art",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 14,
            "main_img_link": "assets/img/hero-card-two.png",
            "card_content_title": "This NFT",
            "category": "Celebrities",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 15,
            "main_img_link": "assets/img/hero-card-one.png",
            "card_content_title": "NameCrypto ",
            "category": "Gaming",
            "nft_value":  0.25
        }       
        ,      
        {
            "nftID": 16,
            "main_img_link": "assets/img/hero-card-four.png",
            "card_content_title": "KingCrypto ",
            "category": "Sport",
            "nft_value":  0.25
        }       
    ]
}

var nft_row = document.querySelector('.filterContainer');  
var nftList = data.nfts_list;   
var layout = ``;
 for (var nft in nftList) {

    var nftID =  nftList[nft].nftID;
    var main_img_link = nftList[nft].main_img_link;
    var card_content_title =  nftList[nft].card_content_title;
    var category =  nftList[nft].category;
    var nft_value =  nftList[nft].nft_value;

    layout +=  ` 
    <div class="col-lg-3 col-md-3 col-sm-12 col-12 my-4 filter-item art" data-category="${category}">
                  <div class="card-content-wrapper rounded-3 p-3 bg-white">
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

  nft_row.style.height="unset"
  nft_row.style.position="unset"
 
// filtering the nfts
  const filterButton =  document.querySelectorAll(".button"); 

  filterButton.forEach(el => el.addEventListener('click', event => {
    console.log(event.target.innerHTML);
    var searchFor ="";
     searchFor = event.target.innerHTML; 
    search(searchFor);

  }));
 
// search filter code
   
  function search(searchFor) {
    var key = searchFor;
 
   console.log( data.nfts_list);
    let json = data.nfts_list.map(nft =>{return nft.category})
    console.log(json);
    for ( var i = 0 ; i< json.length; i++){
        if (json[i] === key) {
            console.log("ok");
        }else{ 
            return "No NFT Found";
        }
    }
    
    
  }
  search();
 
   
  
 
  