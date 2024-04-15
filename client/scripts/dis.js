let postId = 1; // Track post IDs

// Function to add a new discussion post
function addDiscussionPost() {
    const title = document.getElementById('post-title').value;
    const description = document.getElementById('post-description').value;

    if (title.trim() === '' || description.trim() === '') {
        alert('Please enter both title and description.');
        return;
    }

    const postContainer = document.getElementById('discussion-container');

    // Create a new post element
    const postElement = document.createElement('div');
    postElement.className = 'discussion-post';
    postElement.id = `post-${postId}`;
    postElement.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <span class="delete-button" onclick="deleteDiscussionPost(${postId})"><i class="fa-solid fa-trash"></i> Delete</span>
    `;

    // Append the new post to the container
    postContainer.appendChild(postElement);

    // Increment post ID for the next post
    postId++;

    // Clear input fields after submission
    document.getElementById('post-title').value = '';
    document.getElementById('post-description').value = '';
}

// Function to delete a discussion post
function deleteDiscussionPost(id) {
    const postElement = document.getElementById(`post-${id}`);
    if (postElement) {
        postElement.remove();
    }
}
