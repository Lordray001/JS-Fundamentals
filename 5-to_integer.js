const arg = ProcessingInstruction.argv[2];

if (Number.isNaN(Number.parsenInt(arg))) {
    console.log("Not a number");
} else {
    console.log("My number:", Number.parseInt(arg));
}