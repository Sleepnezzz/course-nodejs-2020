console.log("Step 1");
callStep2();
console.log("Step 3");

function callStep2() {
    setTimeout(hello, 3000);
}

function hello() {
    console.log("Step 2");
}