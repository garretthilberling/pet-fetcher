async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.getElementById('comment-body').value.trim();
  
    const pet_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                pet_id,
                comment_text
            }),
            headers: { 
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
  }
  

document.getElementById('comment-form').addEventListener('submit', commentFormHandler);