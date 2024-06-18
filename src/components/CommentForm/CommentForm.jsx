// "POST /api/articles/:article_id/comments": {
//     "description": "posts a new comment with specified article_id",
//     "queries": [],
//     "exampleResponse": {
//       "comment": {
//         "comment_id": 19,
//         "body": "A new comment!",
//         "article_id": 1,
//         "author": "icellusedkars",
//         "votes": 0,
//         "created_at": "2020-11-03T21:00:00.000Z"
//       }
//     }
//   }

// {
//     "body": "I am a new comment!",
//     "username": "tickle122"
// }

// todo: create user login button component
// if user isn't logged in, display login button component instead of comment form
// add login button to header
// create userContext & add user login info to context

export const CommentForm = () => {
  return (
    <>
      <h3>Got something to say? Add a comment...</h3>
      <form>
        <p>You're commenting as *user name*</p>
        <div>
          <label for="comment">Enter your commentary: </label>
          <input type="text" name="comment" id="comment" required />
        </div>
        <div>
          <input type="submit" value="Comment!" />
        </div>
      </form>
    </>
  );
};
