const fs = require('fs');

console.log("Starting automated tests...");

if (fs.existsSync("index.html")) {
    console.log("TEST PASSED: index.html exists");
} else {
    console.log("TEST FAILED: index.html not found");
    process.exit(1);
}

if (fs.existsSync("script.js")) {
    console.log("TEST PASSED: script.js exists");
} else {
    console.log("TEST FAILED: script.js not found");
    process.exit(1);
}

if (fs.existsSync("style.css")) {
    console.log("TEST PASSED: style.css exists");
} else {
    console.log("TEST FAILED: style.css not found");
    process.exit(1);
}

console.log("All automated tests passed.");