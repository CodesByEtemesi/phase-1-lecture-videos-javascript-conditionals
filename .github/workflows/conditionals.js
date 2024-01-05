function isRose(cat){
    switch(cat){
        case 'rose':
            return 'Hi rose you are cute!'
        case 'ted':
            return 'Hi ted nice to see you!'
        default:
            return `Hi ${cat}!`
    }
    // if(cat === 'rose'){
    // return cat === 'rose'? 'Hi Rose you are cute!' : `Hi ${cat}!`- terniary
        // return 'Hi Rose you are cute!'
    // } else if (typeof cat === 'string'){
        // return `Hi ${cat}!
     
    }// } else {
    //     return 'Sorry please pass in a cat name.'
    // }

// console.log(isRose);
