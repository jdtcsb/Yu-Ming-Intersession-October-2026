
const data =[
  {
    name:"Buster",
    title:"CreepyCats.io",
    url:"https://app.pickcode.io/project/cmuybn60u48cqrxwbd1ipb4pd",
    class:"2",
    image:  "./Photos/Buster.png"
  },
  {
    name:"Sagan",
    title:"Mystical Blook Industries",
    url:"https://app.pickcode.io/project/cmuybpoys3mo4uxrivjqunj07",
    class:"1",
    image:'Sagan.png'
  },
  {
    name:"Elliott",
    title:"Grimace",
    url:"https://app.pickcode.io/project/cmuybp9gr2bfaajbxoje0at16",
    class:"1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98s5S2Z4ySfw9qh1allrBVaCg4I6xzMmRO34MBBD5EA&s=10"
  },
  {
    name:"Henry",
    title:"The Golf Shop",
    url:"https://app.pickcode.io/project/cmuybojfd49d4rxwb44qzxu3z",
    class:"1",
    image:"Henry.png"
  },
  {
    name:"Adrian",
    title:"Pencil Co.",
    url:"https://app.pickcode.io/project/cmuybph5z3mjquxrier3eujrq",
    class:"1",
    image:"Adrian.png"
  },
  {
    name:"Ulysses",
    title:"Capy Industries",
    url:"https://app.pickcode.io/project/cmuybo7nz63wd12el80iebnuf",
    class:"1",
    image:"Ulysses.jpg"
  },
  {
    name:"Zion",
    title:"Zion's Camping Supplies",
    url:"https://app.pickcode.io/share/cmuyhalps0rz0l6z4stnwuo59",
    class:"1",
    image:"Zion.png"
  },
  {
    name:"Maxwell",
    title:"The Battle Cats",
    url:"https://app.pickcode.io/project/cmuyboqa73m87uxriqnd09xy8",
    class:"1",
    image:"Maxwell.jpeg"
  },  
  {
    name:"George",
    title:"CrazyAnime.Peek",
    url:"https://app.pickcode.io/project/cmuybqisy2c07ajbxgqeo0okq",
    class:"1",
    image:"https://cdng.europosters.eu/pod_public/800webp/268992.webp"
  },
  {
    name:"Dagi",
    title:"quandaleDingle.merch",
    url:"https://app.pickcode.io/project/cmuybnve35t5dptsfer1dwhhb",
    class:"1",
    image:"Dagi.jpg"
  },
  {
    name:"Kingsley",
    title:"Tuff Things",
    url:"https://app.pickcode.io/project/cmuybpc4e4a2zrxwb7dorzl9e",
    class:"1",
    image:"Kingsley.jpg"
  },
  {
    name:"Maktan",
    title:"Happy Capy",
    url:"https://app.pickcode.io/project/cmuybpxrw64r912ely1154aa3",
    class:"1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67dgF-CHoZc_HjRMAuDYApL9gV-Nev-DvsYP5RQRjTg&s=10"
  },
  {
    name:"Reed",
    title:"Bob Inc.",
    url:"https://app.pickcode.io/project/cmuybo4f363uk12eloa66kxyk",
    class:"1",
    image:"Reed.png"
  },
  {
    name:"Diego",
    title:"Stranger Things Merch and Stuff",
    url:"https://app.pickcode.io/project/cmuybn55a2ae4ajbx8bvbl89p",
    class:"1",
    image:"Diego.jpg"
  },
  {
    name:"Isaac",
    title:"#Frogcoin Program",
    url:"https://app.pickcode.io/project/cmuyboieg49bzrxwb34p8tts3",
    class:"2",
    image:"Isaac.png"
  },
  {
    name:"Jerron",
    title:"Jujutsu Kaisen",
    url:"https://app.pickcode.io/project/cmuybn1363l6muxrio1j2dsf1",
    class:"1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WcBSxE9tMv53t_9kfyaE4iio8tUN2LUQ7NSI5sKykg&s=10"
  },

  {
    name:"Rowan",
    title:"Happy Capy",
    url:"https://85eff8ba-68e9-46b1-b6d3-1cffca2ca4a3-00-1v4nr2hk74zbe.riker.replit.dev/",
    class:"1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67dgF-CHoZc_HjRMAuDYApL9gV-Nev-DvsYP5RQRjTg&s=10"
  }

]

// order data by name alphabetically
data.sort((a,b)=>{
  if(a.name > b.name){
    return 1;
  }
  else if (a.name < b.name){
    return -1;
  }
  return 0;
})

data.push({
           name:"JD and Eddie",
           title:"The Coder School",
           url:"https://www.thecoderschool.com/locations/berkeley/",
           class:"1",
           image:"./TCSB/logocircle-black.png"
         })

// I WILL NEVER FORGIVE YOU FOR CODING IT LIKE THIS
// my bad...
// OH MY GOSH IT WAS MY BAD


var businessContainer = document.querySelector(".business-container");

data.forEach((student)=>{
  var logoImg = student.image;
  
  var businessElement = document.createElement( "div" );
  businessElement.className = "business";
  
  var logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";

  var logoDiv = document.createElement("div");
  logoDiv.className = "logo"
  
  logoContainer.appendChild(logoDiv)
    // Change the directory of the images
    var elemStyle = logoDiv.style
    var imgString = "url("+ logoImg+")"
    // elemStyle.setProperty("backgroundImage", imgString)
    elemStyle.backgroundImage = "url(" +logoImg+")"
    
    
    // logoElement.style.backgroundImage = `url("./Photos/${logoImg}")`;
    // logoElement.setAttribute("style","background-image:url('./Photos/" + logoImg + "')" )
  
  
  
  var logoLink = document.createElement("a");
  logoLink.className = "logo-link class"  + student.class
  logoLink.href = student.url;
  logoLink.target = "_blank";

  //Business Name
  var businessName = document.createElement("div");
  businessName.className = "business-name";
  businessName.innerHTML = student.title;
  
  var businessOwner = document.createElement("div");
  businessOwner.className = "business-owner";
  businessOwner.innerHTML = student.name
  

  
  businessElement.appendChild(logoContainer);
  businessElement.appendChild(businessName);
  businessElement.appendChild(businessOwner);
  
  logoLink.appendChild(businessElement)
  if (businessContainer) {
    businessContainer.appendChild(logoLink);
  }
  
  
});

function filter(name){
  var class1 = document.getElementsByClassName("class1");
  var class2 = document.getElementsByClassName("class2");
  var classes = [...class1 , ...class2];
  classes.forEach((business) =>{
    if (business.className.includes(name)){
      business.style.display = "grid";
    }
    else{
      business.style.display = "none";
    }
  })
}

// <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://arcade.makecode.com/---run?id=S42265-31929-17117-02188" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>