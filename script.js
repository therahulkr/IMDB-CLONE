
// 
let allmovies = [
    {name:"Avengers",
     imgpath:"/images/avengers.jpeg",
     isfav:false,
    description:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."},
    {name:"Thor",
     imgpath:"/images/thor.jpeg",
     isfav:false,
    description:"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."},
    {name:"Hulk",
     imgpath:"/images/hulk.jpeg",
     isfav:false,
    description:"Bruce Banner, a genetics researcher with a tragic past, suffers an accident that causes him to transform into a raging green monster when he gets angry."},
    {name:"Spiderman",
     imgpath:"/images/spiderman.jpeg",
     isfav:false,
    description:"When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."},
    {name:"Iron Man",
     imgpath:"/images/ironman.jpeg",
     isfav:false,
    description:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."},
    {name:"Superman",
     imgpath:"/images/superman.jpeg",
     isfav:false,
    description:"Superman returns to Earth after spending five years in space examining his homeworld Krypton. But he finds things have changed while he was gone, and he must once again prove himself important to the world."},
    {name:"Avengers End Game",
     imgpath:"/images/avengers.jpeg",
     isfav:false,
    description:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."},
    {name:"Mighty Thor",
     imgpath:"/images/thor.jpeg",
     isfav:false,
    description:"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."},
    {name:"Hulk2",
     imgpath:"/images/hulk.jpeg",
     isfav:false,
    description:"Bruce Banner, a genetics researcher with a tragic past, suffers an accident that causes him to transform into a raging green monster when he gets angry."},
    {name:"Amazing Spiderman",
     imgpath:"/images/spiderman.jpeg",
     isfav:false,
    description:"When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."},
    {name:"Iron Man 2",
     imgpath:"/images/ironman.jpeg",
     isfav:false,
    description:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."},
    {name:"Superman:Man of Steel",
     imgpath:"/images/superman.jpeg",
     isfav:false,
    description:"Superman returns to Earth after spending five years in space examining his homeworld Krypton. But he finds things have changed while he was gone, and he must once again prove himself important to the world."}
    
    
];



function homepage()
{       
    document.querySelector('#movies-list').innerHTML = "";
    document.querySelector('#movies').style.display = "block";
    document.querySelector('#movies-list').style.display = "flex"; 
    document.querySelector('#favourite-movie-list').style.display = "none"; 

    document.querySelector('#searchresult').style.display = "none";
    document.querySelector('#moviedetails').style.display = "none";
    document.querySelector('#movies h2').innerHTML = "Movies Collection";

    for(var i=0;i<allmovies.length;i++){ 
    var str = "",len = allmovies[i].description.length;
    for(var j=0;j<len/4;j++)str+=allmovies[i].description.charAt(j);
    if(localStorage.getItem(i)!==null){
        document.querySelector('#movies-list').innerHTML += 
    `<li> <div class="card" id=${i} style="width: 18.1rem;">
    <img src=${allmovies[i].imgpath} onclick="showdetails(${i})" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${allmovies[i].name}</h5>
    <p class="card-text">${str}...</p>
    <button class="btn btn-danger" onclick="remove(${i})">Remove</button>
    </div>
    </div></li>
    `;
    }
    else{
    document.querySelector('#movies-list').innerHTML += 
    `<li> <div class="card" id=${i} style="width: 18rem;">
    <img src=${allmovies[i].imgpath} onclick="showdetails(${i})" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${allmovies[i].name}</h5>
    <p class="card-text">${str}...</p>
    <button class="btn btn-primary" onclick="move(${i})">Add to Favourites</button>
    </div>
    </div></li>
    `;}
}}
// localStorage.clear();
function move(id,x){
    if(localStorage.getItem(id) === null){
           console.log(localStorage.getItem(id)+" "+id)
           localStorage.setItem(id,id);
    }
    document.querySelector('#movies-list').innerHTML = "";
    homepage();
}

function remove(id){
    localStorage.removeItem(id);
    document.querySelector('#movies-list').innerHTML = "";
    homepage();
}

function removefav(id){
    localStorage.removeItem(id);
    document.querySelector('#favourite-movie-list').innerHTML = "";
    favfunction();
}

function favfunction(){
    document.querySelector('#movies').style.display = "none";
    document.querySelector('#favourite-movie-list').style.display = "flex";  
    
    document.querySelector('#favourite-movie-list').innerHTML = "";

    
    for(var i=0;i<allmovies.length;i++){ 
        if(localStorage.getItem(i)===null)continue;
        
        document.querySelector('#favourite-movie-list').innerHTML += 
        `<li> <div class="search-box">
                <div><img src=${allmovies[i].imgpath}  class="card-img-top" alt="..."></div>
                <div class="card-bodyy">
                <h5 class="card-titlee">${allmovies[i].name}</h5>
                <p>${allmovies[i].description}</p>
                <button class="btn btn-danger" onclick="removefav(${i})">Remove</button>
                </div>
                </div></li>
                `;


    }
}

function removefromdetails(id){
    localStorage.removeItem(id);
    document.querySelector('#moviedetails').innerHTML = "";
    showdetails(id);
}
function movefromdetails(id){
    localStorage.setItem(id,id);
    document.querySelector('#moviedetails').innerHTML = "";
    showdetails(id);
}

function showdetails(id){
        document.querySelector('#movies-list').style.display = "none";
        document.querySelector('#searchresult').style.display = "none";
        document.querySelector('#moviedetails').style.display = "flex";
        document.querySelector('#favourite-movie-list').style.display = "none"; 
    
        document.querySelector('#movies h2').innerHTML = "Detail";
        if(localStorage.getItem(id)!==null){
            document.querySelector('#moviedetails').innerHTML = 
        `
            <div id="image"><img src=${allmovies[id].imgpath}></div>
            <div id="text">
               
               <h2>${allmovies[id].name}</h2>
               <p>${allmovies[id].description}</p>
               <button class="btn btn-danger" onclick="removefromdetails(${id})">Remove</button>
               <button class="btn btn-secondary" onclick="homepage()">Home page</button>
            </div>
        
        `;
        }
        else{
            document.querySelector('#moviedetails').innerHTML = 
        `
            <div id="image"><img src=${allmovies[id].imgpath}></div>
            <div id="text">
               
               <h2>${allmovies[id].name}</h2>
               <p>${allmovies[id].description}</p>
        <button class="btn btn-primary" onclick="movefromdetails(${id})">Add to Favourites</button>
        <button class="btn btn-secondary" onclick="homepage()">Home page</button>
            </div>
        
        `;}
}



function searchcontent(){
    if(document.querySelector('.d-flex input').value.length==0){
        alert("Please enter a valid movie name");
    }else{
        var searchinput = document.querySelector('.d-flex input').value.toLowerCase();
        let searcharr = [];
        let indexarr = [];
        
        for(var i=0;i<allmovies.length;i++){
            var str = allmovies[i].name.toLowerCase();
            
            if(str.includes(searchinput)){
                searcharr[searcharr.length] = allmovies[i];
                indexarr[indexarr.length] = i;
            }
        }

        document.querySelector('#moviedetails').style.display = "none";
        document.querySelector('#movies-list').style.display = "none";
        document.querySelector('#searchresult').style.display = "block";
        if(searcharr.length===0){
            document.querySelector('#searchresult').innerHTML = 
            `
                <div>No Result Found</div>
                <button class="btn btn-primary" onclick="homepage()">Home page</button>
            `;
        }
        else{
            document.querySelector('#movies h2').innerHTML = `Search Result(${searcharr.length})`;
            document.querySelector('#searchresult').innerHTML = '';
            for(var i=0;i<searcharr.length;i++){ 
                    document.querySelector('#searchresult').innerHTML += 
                    `<li> <div class="search-box">
                    <div><img src=${searcharr[i].imgpath}  class="card-img-top" alt="..."></div>
                    <div class="card-bodyy">
                    <h5 class="card-titlee">${searcharr[i].name}</h5>
                    <p>${searcharr[i].description}</p>
                    <button class="btn btn-primary" onclick="showdetails(${indexarr[i]})">Show Details</button>
                    </div>
                    </div></li>
                    `;
            
            }
        }
        document.querySelector('.d-flex input').value = "";
    }
}
