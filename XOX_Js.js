let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let New_Button=document.querySelector("#New_Button");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turn0=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msg_container.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Cong!,Winner Is ${winner}`;
    msg_container.classList.remove("hide");
    disabledBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos1Val!=""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};   

New_Button.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
