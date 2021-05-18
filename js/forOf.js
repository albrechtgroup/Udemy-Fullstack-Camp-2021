const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

/////////// for loop
for(let i = 0; i < subreddits.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

/////////// for 'of' loop
for(let sub of subreddits) {
    console.log(sub);
}

