const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector(".output-box");

submitBtn.addEventListener("click", function clickHandler(){

    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);

});

function calculateProfitAndLoss(initial,quantity,current){
    if (initial && quantity && current){

        if(initial > 0 && quantity > 0 && current > 0){

            if(initial>current){
                var loss = (initial - current)*quantity;
                var lossPercentage = loss / initial * quantity;
                showMessage(`Hey! The loss is ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)}%`);
                


            }else if(current > initial){
                var profit = (current - initial) * quantity;
                var profitPercentage = profit / initial * quantity;
                showMessage(`Hey! The profit is ${profit.toFixed(2)} and the profit percentage is ${profitPercentage.toFixed(2)}%`)

            }else{
                showMessage("No Profit, No Loss");
            }  
        }
        else{
            showMessage("Values entered should be greater than zero");
    }
}
else{
    showMessage("Kindly enter all the fields");
    }
}

function showMessage(msg){
    outputBox.innerText = msg;
}
