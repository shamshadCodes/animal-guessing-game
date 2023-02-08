const readlineSync = require('readline-sync');
let BinaryTree = require('./BinaryTree');
let fs = require('fs');

let binaryTree;

//Source: https://stackoverflow.com/q/36856232/5485239
fs.readFile('animalTree.json', 'utf8', function readFileCallback(err, data){
    if (err){
        binaryTree = new BinaryTree();
        // binaryTree.addANode('Duck');
    }
    else {
        binaryTree = new BinaryTree(JSON.parse(data));
    }

    main();
    let json = JSON.stringify(binaryTree);
    fs.writeFile('animalTree.json', json, 'utf8', callback =  () => {})
});

function main(){
    let toContinue = 'yes';
    while(toContinue === 'y' || toContinue === 'yes') {
        console.log('Computer: Think of an animal.');
        readlineSync.question('Computer: Press any key once you have thought of an animal...');
        let isRight = binaryTree.getNode();
        // console.log('is right value is ', isRight)
    
        if(isRight) {
            console.log('Computer: I was right, you inferior being.')
        }
        else {
            console.log('Computer: Thanks for helping me improve.')
        }
    
        // binaryTree.printLevelOrder();    
        toContinue = readlineSync.question('Computer: Do you want to continue? ').toLowerCase()
    }
}