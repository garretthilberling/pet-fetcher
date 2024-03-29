async function replyFormHandler(event) {
    event.preventDefault();
  
    const reply_text = document.getElementById('comment-body').value.trim();
  
    const comment_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment_id,
                reply_text
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
  

document.getElementById('reply-form').addEventListener('submit', replyFormHandler);