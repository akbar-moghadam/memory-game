const newgame=document.querySelector('.newgame');
const startgame=document.querySelector('.startgame');
const theme_h31=document.getElementById('themeh31')
const theme_h32=document.getElementById('themeh32')
const player1=document.getElementById('player1');
const player2=document.getElementById('player2');
const player3=document.getElementById('player3');
const player4=document.getElementById('player4');
const grid4=document.getElementById('grid4');
const grid6=document.getElementById('grid6')
const section=document.getElementById('grid-container')
const btn_start=document.getElementById('btn-start')
const secdivs=document.getElementsByClassName('secitems')
const spanitem=document.getElementById('spanitems')
const spanitemc=document.getElementsByClassName('spanitemc')
const footer=document.getElementById('footer')
const footerdiv1=document.getElementById('footerdiv1')
const footerdiv2=document.getElementById('footerdiv2')
const footerdiv3=document.getElementById('footerdiv3')
const footerdiv4=document.getElementById('footerdiv4')
const footer_div=document.getElementsByClassName('footer-div')
const total=document.querySelector('.total-rate')
const winclose=document.getElementById('close')
const main=document.querySelector('main')
const header=document.querySelector('header')
const reset=document.getElementById('reset')
const fazitplayer=document.getElementById('total-text')
const total_reset=document.querySelector('.total-reset')
const total_new=document.querySelector('.total-new')
// menu setting

let theme={
    item:'icon'
}
let player={
    item:4
}
let grid={
    item:4
}
let activeplayer={
    player:1
}
let checkClick=0;
const listwin=[]
const x=[]
const y=[]
const ItemsData=[];
let totaltrue=0;
const number=[
    {
        id:0,
        code:0,
        src:'../images/number0.svg'
    },
    {
        id:1,
        code:1,
        src:'../images/number1.svg'
    },
    {
        id:2,
        code:2,
        src:'../images/number2.svg'
    },
    {
        id:3,
        code:3,
        src:'../images/number3.svg'
    },
    {
        id:4,
        code:4,
        src:'../images/number4.svg'
    },
    {
        id:5,
        code:5,
        src:'../images/number5.svg'
    },
    {
        id:6,
        code:6,
        src:'../images/number6.svg'
    },
    {
        id:7,
        code:7,
        src:'../images/number7.svg'
    },
    {
        id:8,
        code:8,
        src:'../images/number8.svg'
    },
    {
        id:9,
        code:9,
        src:'../images/number9.svg'
    },
    {
        id:10,
        code:10,
        src:'../images/number10.svg'
    },
    {
        id:11,
        code:11,
        src:'../images/number11.svg'
    },
    {
        id:12,
        code:12,
        src:'../images/number12.svg'
    },
    {
        id:13,
        code:13,
        src:'../images/number13.svg'
    },
    {
        id:14,
        code:14,
        src:'../images/number14.svg'
    },
    {
        id:15,
        code:15,
        src:'../images/number15.svg'
    },
    {
        id:16,
        code:16,
        src:'../images/number16.svg'
    },
    {
        id:17,
        code:17,
        src:'../images/number17.svg'
    },
]

const icon=[
    {
        id:0,
        code:0,
        src:'../images/apple.png'
    },
    {
        id:1,
        code:1,
        src:'../images/bag.png'
    },
    {
        id:2,
        code:2,
        src:'../images/bear.png'
    },
    {
        id:3,
        code:3,
        src:'../images/bread.png'
    },
    {
        id:4,
        code:4,
        src:'../images/campfire.png'
    },
    {
        id:5,
        code:5,
        src:'../images/cocktail.png'
    },
    {
        id:6,
        code:6,
        src:'../images/flower.png'
    },
    {
        id:7,
        code:7,
        src:'../images/glass.png'
    },
    {
        id:8,
        code:8,
        src:'../images/heartballoon.png'
    },
    {
        id:9,
        code:9,
        src:'../images/island.png'
    },
    {
        id:10,
        code:10,
        src:'../images/kettle.png'
    },
    {
        id:11,
        code:11,
        src:'../images/light.png'
    },
    {
        id:12,
        code:12,
        src:'../images/moonstars.png'
    },
    {
        id:13,
        code:13,
        src:'../images/pacifier.png'
    },
    {
        id:14,
        code:14,
        src:'../images/pear.png'
    },
    {
        id:15,
        code:15,
        src:'../images/pottedplant.png'
    },
    {
        id:16,
        code:16,
        src:'../images/telescope.png'
    },
    {
        id:17,
        code:17,
        src:'../images/toycar.png'
    },
]
const PlayersRate=[
    {
        id:1,
        true:0,
        falsh:0
    },
    {
        id:2,
        true:0,
        falsh:0
    },
    {
        id:3,
        true:0,
        falsh:0
    },
    {
        id:4,
        true:0,
        falsh:0
    }
]

newgame.addEventListener('click',function() {
startgame.classList.add('startgamechange')

FooterClear()
})

total_new.addEventListener('click', function() {
    total.classList.remove('totalchange')
    startgame.classList.add('startgamechange')
    FooterClear()


})
total_reset.addEventListener('click', function() {
Reset()
total.classList.remove('totalchange')

})
reset.addEventListener('click',  function() {
   Reset()

})
async function Reset(){
    listwin.length=0;
    await ProductItems(grid.item);
    await GridShow()
    await FooterClear()
    await ResetPlayerRate()
    await ShowPlayer()
    await ClickSpan()
    await ClickFooter()
    await SelectUser()
    await AddPlayerActive('footerdiv1')
}
//spielart select theme
if(theme.item == 'number'){
    theme_h31.style.backgroundColor='#192a56'
 
}else{
    theme_h32.style.backgroundColor='#192a56'
 
}

theme_h31.addEventListener('click',function(){
    theme.item='number'
    theme_h32.style.backgroundColor='#7f8fa6'
    theme_h31.style.backgroundColor='#192a56'

})
theme_h32.addEventListener('click',function(){
    theme.item='icon'
    theme_h32.style.backgroundColor='#192a56'
    theme_h31.style.backgroundColor='#7f8fa6'

})

// select number player

function PlayerSelect(id){
    switch (id) {
        case 1:
            player1.style.backgroundColor='#192a56'
            player2.style.backgroundColor='#7f8fa6'
            player3.style.backgroundColor='#7f8fa6'
            player4.style.backgroundColor='#7f8fa6'
    
            break;
    
        case 2:
            player1.style.backgroundColor='#7f8fa6'
            player2.style.backgroundColor='#192a56'
            player3.style.backgroundColor='#7f8fa6'
            player4.style.backgroundColor='#7f8fa6'
    
            break
    
        case 3:
            player1.style.backgroundColor='#7f8fa6'
            player2.style.backgroundColor='#7f8fa6'
            player3.style.backgroundColor='#192a56'
            player4.style.backgroundColor='#7f8fa6'
    
            break
    
        case 4:
            player1.style.backgroundColor='#7f8fa6'
            player2.style.backgroundColor='#7f8fa6'
            player3.style.backgroundColor='#7f8fa6'
            player4.style.backgroundColor='#192a56'
    
            break
    
       
    }
}
window.onload=PlayerSelect(player.item)

player1.addEventListener('click',function(){
    player.item=1;
    PlayerSelect(player.item)
})
player2.addEventListener('click',function(){
    player.item=2;
    PlayerSelect(player.item)
})
player3.addEventListener('click',function(){
    player.item=3;
    PlayerSelect(player.item)
})
player4.addEventListener('click',function(){
    player.item=4;
    PlayerSelect(player.item)
})

// grid

function GridSelect(id){
    switch (id) {
        case 4:
            grid6.style.backgroundColor='#7f8fa6'
            grid4.style.backgroundColor='#192a56'
            break;
    
        case 6:
            grid6.style.backgroundColor='#192a56'
            grid4.style.backgroundColor='#7f8fa6'
            break;
    }
}

window.onload=GridSelect(grid.item)

grid4.addEventListener('click',function(){
    grid.item=4;
    GridSelect(grid.item)
})
grid6.addEventListener('click',function(){
    grid.item=6;
    GridSelect(grid.item)
})

btn_start.addEventListener('click', async function(){
    // GridCreate(grid.item);
    startgame.classList.remove('startgamechange')
    listwin.length=0;
    await ProductItems(grid.item);
    await GridShow()
    await ShowPlayer()
    await ClickSpan()
    await ClickFooter()
    await SelectUser()
    await ResetPlayerRate()
    await AddPlayerActive('footerdiv1')
    

})


// main in body

function GridCreate(num){
   const k=num*num
    let divspan='divitem'
    for(let i=1; i<=k; i++){
        const div=document.createElement('div')
        const span=document.createElement('span')
        span.innerText=i
        div.appendChild(span)
        div.setAttribute('id',divspan+i)
        div.setAttribute('class','secitems')
        section.appendChild(div)

    }
    
   
}

async function ProductItems(d){
    const k=(d*d);
    ItemsData.length=0
    for(let i=1; i<=k ; i++){
       await CreateNum(k)
    
    }
}

function CreateNum(k){
    let p
    let l
    let y=1;
    p=Math.floor(Math.random()*k/2)
    while (y<=100) {
        l=ItemsData.filter((i) => i==p)
        if(l.length >=2 || p == 18){
            p=Math.floor(Math.random()*k/2)
            
        }else{
            ItemsData.push(p)
            break
        }

        y+=1;
    }
}

function GridShow(){
   let id=0;
    section.innerHTML=ItemsData.map(item => {
        let k
        if(theme.item == 'number'){
         k=number.filter((s) => s.code == item)
        }else{
         k=icon.filter((s) => s.code == item)
  
        }
        return(
        `<div class='secitems' id=${id+=1}>
        <img src=${k[0].src} alt=${k[0].code} id=${id+1} class='spanitemc'>
        </div>
        `
    )}).join('')
    if(grid.item == 4){
        section.style.gridTemplateColumns='20% 20% 20% 20%'
        section.style.alignItems='center'
        section.style.justifyContent='center'

    }else{
        section.style.gridTemplateColumns='15% 15% 15% 15% 15% 15%'
        section.style.alignItems='center'
        section.style.justifyContent='center'

    }
    
   
}

function ClickSpan(){

     for(i=0; i<spanitemc.length; i++){
        spanitemc[i].addEventListener('click', function(e){
            const target=e.target;
            if(x.length <2 && checkClick != this.id && listwin.includes(this.id) == false){
                x.push(this.alt) 
                checkClick=this.id                           
                    if(target.matches('img')){
                        target.style.opacity='9'
                        y.push(e.currentTarget.id)
                    }
            }
            console.log(y)
            if(x.length == 2){
                setTimeout(() => {
                    const y1=document.getElementById(y[0])
                    const y2=document.getElementById(y[1])
                if(x[0] == x[1]){
                   listwin.push(y[0])
                   listwin.push(y[1])
                   checkClick=0
                   x.length=0
                   y.length=0
                   y1.style.backgroundColor='#fbc531'
                   y2.style.backgroundColor='#fbc531'
                //    y1.style.filter='brightness(100%)';
                //    y2.style.filter='brightness(100%)';
                    AddRatet()
                    addtotaltrue()
                    checktotaltrue()

                }else{
                    checkClick=0
                    x.length=0
                    y.length=0
                    y1.style.opacity='0'
                    y2.style.opacity='0'
                    AddRatef()
                }
                },1000)
               
        }
            
   
    })
    } 
        
}          
        // footer

    function ShowPlayer(){
        for (let i=1; i<=player.item;i++){
            const div=document.createElement('div')
            const span1=document.createElement('span')
            const span2=document.createElement('span')
            const span3=document.createElement('span')
                span1.setAttribute('id',`falsh${i}`)
                span1.innerText='k'
                span2.setAttribute('id',`player${i}`)
                span2.innerText=`Player${i}`
                span3.setAttribute('id',`true${i}`)
                span3.innerText='b'
                div.appendChild(span1)
                div.appendChild(span2)
                div.appendChild(span3)

            
            div.setAttribute('class','footer-div')
            div.setAttribute('id',`footerdiv${i}`)
            footer.appendChild(div)
        }
    }

  

    function FooterClear(){
        while (footer.hasChildNodes()) {
            footer.removeChild(footer.firstChild);
          }
    }
    function ClickFooter(){
        for(i=0; i<footer_div.length; i++){
            footer_div[i].addEventListener('click', function(){
                FooterColorClear()
                // const s=document.getElementById(this.id)
                this.style.background='#fbc531'
                AddPlayerActive(this.id)
            })
        }
    }
const FooterColorClear= () => {
    for( let i=0; i< footer_div.length ; i++){
        footer_div[i].style.backgroundColor='#dcdde1'
        // footer_div[i].style.background='linear-gradient(to right,red 5%, var(--gelb) 90%, green 5%)'
        
    }
}

const AddPlayerActive = (k) => {
    const z=k.split('')
    console.log('k=',k)
    activeplayer.player=z[9]
}
// default select user 1
function SelectUser(){
    footer_div[0].style.background='#fbc531'

}

function AddRatef(){
    const u=PlayersRate.filter((x)=> x.id == activeplayer.player)
    u[0].falsh=u[0].falsh+1
    const sf=document.getElementById(`falsh${activeplayer.player}`)
    sf.innerText=u[0].falsh
    sf.style.color='red'
}
function AddRatet(){
    const u=PlayersRate.filter((x)=> x.id == activeplayer.player)
    u[0].true=u[0].true+1
    const st=document.getElementById(`true${activeplayer.player}`)
    st.innerText=u[0].true
    st.style.color='green'
}

const ResetPlayerRate = () => {
    PlayersRate.forEach((item) =>{
        item.falsh=0;
        item.true=0
    })
}
const checktotaltrue = () => {
if(grid.item == 4 && totaltrue == 8){
    total.classList.add('totalchange')
    showTotalPlayer()    
}
if(grid.item == 6 && totaltrue == 18){
    total.classList.add('totalchange')
    showTotalPlayer()    
}
}

const addtotaltrue = () => {
    totaltrue=totaltrue+1
}

const totaltruereset = () =>{
    totaltrue=0
}
const showTotalPlayer = () => {
    const sortplayer=[...PlayersRate].sort((a,b)=> (b.true - a.true || a.falsh - b.falsh))
     fazitplayer.innerHTML=sortplayer.map((item) => {
        return(
            `<div class='player-show'> 
                <span>Player${item.id} </span>
                <span>${item.true} </span>
                <span>${item.falsh} </span>
            </div>
            `
        )
     }).join('')
     console.log(sortplayer)
}
winclose.addEventListener('click', function(){
    total.classList.remove('totalchange')
})