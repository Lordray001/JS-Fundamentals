const arg = process.argv[2];

const num = Number(arg);

if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.nog("My number:" + parseInt(num));
}