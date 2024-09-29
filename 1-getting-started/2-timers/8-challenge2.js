// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node 

let counter = 0;

const countInterval = setInterval(count, 1000);

function count() {
    console.log("Hello World");
    counter++;

    if(counter > 5){
        clearInterval(countInterval);
    }
    if (counter == 6){
        console.log("Done");
    }
}

