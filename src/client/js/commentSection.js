const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoId = videoContainer.dataset.id;
let videoComments = document.querySelectorAll(".video__comment ul");
let comment__delete = document.querySelectorAll("span");

const addComment = (text, id) => {
  videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const span2 = document.createElement("span");
  span2.className = "comment__delete";
  span2.innerText = "❌";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleDeleteComment = async (event) => {
  const li = event.target.closest("li");
  const commentId = li.dataset.id;

  const { status } = await fetch(
    `/api/videos/${videoId}/comment/${commentId}`,
    {
      method: "DELETE",
    }
  );

  if (status === 200) {
    videoComments.removeChild(li);
  } else {
    console.log("cant delete the comment.");
  }
};
console.log("videoComments" + videoComments);
console.log("comment__delete" + comment__delete.length);

// comment__delete.addEventListener("click", handleDeleteComment);

if (form) {
  form.addEventListener("submit", handleSubmit);
}
