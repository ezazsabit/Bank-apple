// function for count total expenses-
function expensesCount(foodId,RentId,clothesId)
{
    const money =parseFloat(document.getElementById(foodId).value)
   
    if(money<0)
    {
        document.getElementById('positiveCheck').style.cssText = "visibility: visible";
        return "Error";
        }
        else if(money>0){
            document.getElementById('positiveCheck').style.visibility='hidden'; 
        }    
    if(isNaN(money)==true)
    {
        document.getElementById('stringCheck').style.cssText = "visibility: visible";
        return "Error";
    }
    else if(!isNaN(money)==true)
    {
        document.getElementById('stringCheck').style.visibility='hidden'; 
    }
  
    const money2 =parseFloat(document.getElementById(RentId).value)
    if(money2<0)
    {
        document.getElementById('positiveCheck').style.cssText = "visibility: visible";
        return "Error";
        

    }
    else if(money2>0){
        document.getElementById('positiveCheck').style.visibility='hidden'; 
    }
    if(isNaN(money2)==true)
    {
        document.getElementById('stringCheck').style.cssText = "visibility: visible";
        return "Error";
    }
    else if(isNaN(money2)==false)
    {
        document.getElementById('stringCheck').style.cssText = "visibility: hidden"; 
    }
    const money3 =parseFloat(document.getElementById(clothesId).value)
    if(money3<0)
    {
        document.getElementById('positiveCheck').style.cssText = "visibility: visible";
        return "Error";
        

    }
    else if(money3>0){
        document.getElementById('positiveCheck').style.visibility='hidden'; 
    }
    if(isNaN(money3)==true)
    {
        document.getElementById('stringCheck').style.cssText = "visibility: visible";
        return "Error";
    }
    else if(isNaN(money3)==false)
    {
        document.getElementById('stringCheck').style.cssText = "visibility: hidden"; 
    }
    return money+money2+money3;
    
}
/* // error chack-
function negativeErrorCheck(amount)
{
    if(amount<0)
    {
        document.getElementById('positiveCheck').style.cssText = "visibility: visible";
        return 0;

    }
} */


document.getElementById('calculateButton').addEventListener('click',function(){
   
    // total expences show-
    const totalExpenses=document.getElementById('totalExpenses');
    totalExpenses.innerText= expensesCount('foodMoney','rentMoney','clothesMoney');
    // total balance show-
    if(totalExpenses.innerText!='Error')
    {
        const salary=parseFloat(document.getElementById('incomeMoney').value);
    const totalBalance=document.getElementById('totalBalance');
    const balance=salary - expensesCount('foodMoney','rentMoney','clothesMoney');
    if(balance>0)
    totalBalance.innerText=balance;
    else
    {
    totalBalance.innerText='Error';
    totalExpenses.innerText='Error';
    }
    }
   

})

document.getElementById('Save-Button').addEventListener('click',function(){
    // saving amount fixed-
    const Persent=parseFloat(document.getElementById('percentSave').value)/100;
    document.getElementById('savingAmounts').innerText=(parseFloat(document.getElementById('incomeMoney').value)*Persent).toFixed(2);
    //remaining amount fixed
    const Remain=document.getElementById('remainingBalance');
    const salary=parseFloat(document.getElementById('incomeMoney').value);
    const balance=salary - expensesCount('foodMoney','rentMoney','clothesMoney');
    const subTotal=balance-(parseFloat(document.getElementById('incomeMoney').value)*Persent).toFixed(2);
    if(subTotal>0)
    Remain.innerText=subTotal;
    else
    Remain.innerText='Error';
})

