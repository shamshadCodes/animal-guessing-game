const readlineSync = require('readline-sync');

class Node{
    constructor(name, question = null) {
        this.data = [name, question];
        this.left = null;
        this.right = null
    }
}

class BinaryTree{
    constructor(object = null) {
        this.size = 0;
        if(object === null) {
            this.root = new Node("Duck");
            this.size++;
        }
        else {
            Object.keys(object).forEach((key) => {
                this[key] = object[key];
            })
        }
    }

    getNode(currentNode = this.root) {
        if(currentNode.data[1] === null) {
            let guess = currentNode.data[0];
            let isRight = readlineSync.question(`Computer: Were you thinking of a ${guess}\nHuman: `).toLowerCase();
            if(isRight === 'yes' || isRight === 'y'){
                return true;
            }

            else if(isRight !== 'yes') {
                currentNode.data[0] = null;
                console.log('Computer: Oops - looks like I need to improve.');
                let correctAnimal = readlineSync.question('Computer: What animal were you thinking of?:\nHuman: ')
                let question = readlineSync.question(`Computer: What question would distinguish between a ${guess} and a ${correctAnimal}?\nHuman: `)
                let direction = readlineSync.question(`Computer: For a ${correctAnimal}, is the answer yes or no?\nHuman: `).toLowerCase();
                currentNode.data[1] = question;
                
                if(direction === 'yes' || direction === 'y') {
                    currentNode.right = new Node(correctAnimal);
                    currentNode.left = new Node(guess);
                }
                else {
                    currentNode.left = new Node(correctAnimal);
                    currentNode.right = new Node(guess);
                }
                ++
                this.size;
                return false;
            }
        }

        else {
            let answer = readlineSync.question(`Computer: ${currentNode.data[1]}\nHuman: `).toLowerCase();

            if(answer === 'yes' || answer === 'y') {
                return this.getNode(currentNode.right);
            }
            else {
                return this.getNode(currentNode.left);
            }
        }
    }
}

module.exports = BinaryTree
