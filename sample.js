// let a=[];
// a=[1,2,3,4];
// const randa= a.map(new8=>document.getElementById("p1").innerHTML=JSON.stringify(new8));
// console.log(randa);
// const randa1=a.filter(new2 => new2>3 )
// console.log(randa1);
// document.getElementById("red").onclick=function(){
//     console.log("red");
// }
// document.getElementById("green").onclick=function(){
//     console.log("green");
// }
// document.getElementById("yellow").onclick=function(){
//     console.log("yellow");
// }
// let c={"red":0,"yellow":0,"green":0}
// let e={''}
//  let a=document.querySelectorAll(".color");
// a.forEach(b=>b.onclick=()=>{
//     c[b.id]+=1;
//     b.innerText=c[b.id];
//     console.log(b.id);
// }
// )
// let d=document.getElementById("clear").onclick=()=>{
//     // c.forEach(c=>c.red=0,c1.yellow=0,c1.green=0);
//     c.red=0,c.yellow=0,c.green=0;
//     a.forEach(a1=>a1.innerHTML=" ")
//     // c.forEach(c1=>console.log(c1));
// }
let user=0;
let computer=0;
const ran= (a)=>{
    const randam=Math.floor(Math.random()*3);
    return(a[randam])

}
a=["rock","paper","siscore"]

let score;
//  console.log("computer",c);

const scores=(score1,score2)=>
{
    
    console.log(score1);
    console.log(score2);
    if(score1=='rock' && score2=='paper')
    {
        score=1
        console.log('1')
    }
    else if(score1=='siscore' &&score2=='rock')
    {
        score=1;
        console.log('11')
    }
    else if(score1=="paper" && score2=="siscore")
    {
        score=1;
        console.log('111')
    }
    else if(score1==score2)
    {
        score=-2;
    }
    else
    {
        score=0;
        console.log('1111')
    }
    return score;
}
// console.log(scores(c));

function player()
{
    let w=document.querySelectorAll(".color");
    console.log(w);
    var x;
    w[0].onclick=()=>
    {
        // console.log("rock")
        // return (w[0].id);
        let c=ran(a);
        let f=scores(c,w[0].id);
         console.log(f)
        x = f;
        de(x);
    }
    w[1].onclick=()=>
    {
        // console.log("sysor")
        let c=ran(a);
        let f=scores(c,w[1].id);
        // console.log(f);
        x = f;
        de(x);

    }
    w[2].onclick=()=>
    {
        // console.log("paper")
        // return w[2].id;
        let c=ran(a);
        let f=scores(c,w[2].id);
        // console.log(f);
        x = f
        de(x);
    }
    
}
player();

document.getElementById('clear').onclick= ()=>{
    computer=0;
    user=0;
    document.getElementById("winlist").innerHTML= "";
    document.getElementById('user').innerHTML="";
    document.getElementById("computer").innerHTML="";
    

}

function de(f){
    
    if(f==0)
{
    // window.location.reload("");
    console.log('dfgh');
    computer++;
    document.getElementById("winlist").innerHTML= "YOU LOSS";
    
    document.getElementById('user').innerHTML=user;
    document.getElementById("computer").innerHTML=computer;
    
}
else if(f==1){
    console.log('dfgh');
    // window.location.reload("");
    user++;
    document.getElementById("winlist").innerHTML=" YOU WIN";
    document.getElementById('user').innerHTML=user;
    document.getElementById("computer").innerHTML=computer;
    
    

}
else
{
    document.getElementById("winlist").innerHTML="MATCH IS DRAW";
}
}

