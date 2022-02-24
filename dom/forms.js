/// Form events & .preventDefault():

const postForm = document.querySelector('#postForm');
const commentsContainer = document.querySelector('#comments');
/// .preventDefault() added:
postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const commentsInput = document.querySelectorAll('input')[1];
    const usernameInput = postForm.elements.username;
    const commentsInput = postForm.elements.comments;
    addComment(usernameInput.value, commentsInput.value);
    /// Changes input values back to empty.
    usernameInput.value = '';
    commentsInput.value = '';
    
});

/// .append comments to a newly created 
/// a bold tag list item. b, li
const addComment = (username, comments) => {
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newComment.append(bTag);
    newComment.append(`- ${comments}`)
    commentsContainer.append(newComment);
}


const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', function(e) {
    console.log("Change!");
})

/// Changes the innerText of the h1 to the
/// value of the input content.
input.addEventListener('input', function(e) {
    h1.innerText = input.value;
})
