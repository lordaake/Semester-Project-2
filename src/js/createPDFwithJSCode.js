const fs = require('fs');
const path = require('path');

const directoryPath = 'C:\\Users\\Tord\\Documents\\VS Code Projects\\Semester-Project-2\\src\\js';
const outputFile = 'allCode.txt'; // Specify the name of the output file

// Function to read all JavaScript files in a directory
function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function (filename) {
            fs.readFile(path.join(dirname, filename), 'utf-8', function (err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                onFileContent(filename, content);
            });
        });
    });
}

// Function to process content of each file
function processFile(filename, content) {
    // Append content to the output file
    fs.appendFileSync(outputFile, `Content of ${filename}:\n${content}\n\n`);
}

// Call the readFiles function
readFiles(directoryPath, processFile, function (err) {
    console.error('Error reading files:', err);
});