
// Utility  Part

// field value 

function getFieldValue(fieldId) {
    const ItemContent = document.getElementById(fieldId);
    const ItemContentString = ItemContent.value;
    const itemValue = parseFloat(ItemContentString);
    return ItemContentString;
}

// Get Price 

function getInnerPriceValueByName(priceId) {
    const ItemContent = document.getElementById(priceId);
    const ItemContentString = ItemContent.innerText;
    const itemValue = parseFloat(ItemContentString);
    return itemValue;
}

// Set Value Price

function setValue(elementId, newValue) {
    const ItemContents = document.getElementById(elementId);
    ItemContents.innerText = newValue;
}

// Set item for  append

function getInnerText(titleId) {
     const innerParas = document.getElementById(titleId);
     const innerPara = innerParas.innerText;
     return innerPara;
}

// add the item 

function addItem(titleId){
    const calculationEntry = document.getElementById('item-section')
    const itemName = getInnerText(titleId)
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p')
    p.classList.add('my-0');
    p.innerHTML = `${count + 1}. ${itemName}`
    calculationEntry.appendChild(p)

}

// add event 

function clickToAdd(priceId, titleId) {
    const itemPrice = getInnerPriceValueByName(priceId);

    //get field value
    const couponField = getFieldValue('couponField')

        // total price calculation
    const ItemContent = document.getElementById('totalPrice');
    const ItemContentString = ItemContent.innerText;
    const newPrice = parseFloat(ItemContentString);    
    const finalPrice = itemPrice + newPrice;

    setValue('totalPrice', finalPrice );
    addItem(titleId);

     //discount value 

     const discountContent = document.getElementById('discountAmount');
     const discountContentString = discountContent.innerText;
     const discountValue = parseFloat(discountContentString);
    

    const discountPrice = (finalPrice * 20)/100;
    setValue('discountAmount', discountPrice );

    // total price
    const payingPriceValue = document.getElementById('payingPrice');
    const payingPriceString = payingPriceValue.innerText;
    const payingPrice = parseFloat(payingPriceString);

    const finalPayingPrice = finalPrice - discountPrice; 
  
    setValue('payingPrice', finalPayingPrice );

}

// modal

const makePurchase = document.getElementById("makePurchase");
const modal = document.getElementById("modal");
const bgModal = document.getElementById("bgModal");


makePurchase.addEventListener("click", function(){
    modal.style.display = "block"
    
})

bgModal.addEventListener("click", function(){
    modal.style.removeProperty("display")  
    

})