export const checkPrice = (course) => {

    const price = course?.price;

    // console.log("Price: " + price);

    return new Promise((resolve, reject) => {
        if (price > 0) {
            resolve(price);
        }
        else {
            reject("Free");
        }
    })
};

export const showPrice = (price) => {
    return new Promise((resolve, reject)=>{
        if(price > 0){
            resolve(price);
        } else {
            reject("Free");
        }
    })
};