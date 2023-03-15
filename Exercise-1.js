//Exercise 1

/*
    Part 1
    There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

    Part 2
    Two more people get added to the back of the line - Sara and Augustin. 
    The first person in line is called to the teller. What does the queue look like?

    Part 3
    It turns out David was saving a spot for his friend Renata.
    She shows up and goes behind him in the line. One more person (Elena) shows up
    and goes to the end of the line. What does the queue look like?


    */

    

function addPeople(arr,person) {
        return arr.push(person);
    }

function showQueue(arr) {
    for (let index = 0; index < arr.length; index ++) {
        console.log(`Postion ${index+1} is ${arr[index]}`);
    }
}

function findandAdd(arr,findperson,addperson) {
    const indexOfFriend = arr.indexOf(findperson);
    
    if (!indexOfFriend) {
        
        // console.log('Hi');
        return 'No person in this queue';
    }else{
        // console.log('Mew');
        return arr.splice(indexOfFriend+1,0,addperson);
    }
}

const bankQueue = ["Sofia", "David", "juan"];

//Add two people to the queue
const addSarah = addPeople(bankQueue,'Sarah');
const addAugustin = addPeople(bankQueue,'Augustin');


//Add Renata after David
const addMewMew = findandAdd(bankQueue,'David','Renata');

//Show the queue after all the operations
showQueue(bankQueue);




