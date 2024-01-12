const stocks = {
    fruits:["vanilla","strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    horder:["cone","cup","stick"],
    toppings:["oreo","biscuits"]
}

const isShopOpen = true

let order = (time,work) => {
    return new Promise( (resolve, reject)=>{
        if (isShopOpen){
            setInterval(() => {
                resolve(work())
            },time)
        }else{
            reject(console.log("closed"))
        }
    })


return order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

.then(()=> {
    return order(1000,() => console.log('production has started'))
})

.then(()=>{
    return order(3000,() => console.log("food was choped"))
})

}