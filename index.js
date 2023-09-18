// Code your solutions in this file

const X = ["Guadalupe","Ollie","Aki"];
let eventName = "birthday"

function writeCards(X,eventName){   
    const messages = [];
for(let i = 0; i<X.length; i++){

    let message = `Thank you, ${X[i]}, for the wonderful ${eventName} gift!`;
    
    messages.push(message);
//declare new array
//add content into new array
// push it
//return new array
}
return messages;
}

function countDown(){
    let count = 10;
while(count >= 0){
    console.log(count);
    count--;
}

}
countDown();




