
import { user } from "./variablae";
import { post } from "./variablae";

const usersList = document.querySelector('.user__list')
const postsList = document.querySelector('.post__list')


function renderUsers(arr) {
    arr.forEach(user => {
        const userMode = `<div class = "user__block">
        <a role="button" class="user__name" onclick="filterPosts(${user.id})">${user.name}</a>
        <p><strong>Email:</strong> ${user.email} </p>
        <p><strong>Address:</strong> ${user.address.street} </p>
        <p><strong>Company name:</strong> ${user.company.name} </p>
        </div>`
        usersList.insertAdjacentHTML('beforeend',userMode)
    });
}
function renderPosts(arr) {
    arr.forEach((post) =>{
        const postMode = `<div class = "user__block">
        <a role="button" class="user__name" (${post.title})"></a>
        <p>${post.body}</p>
        </div>`
        postsList.insertAdjacentHTML('beforeend',postMode)

    });
}

function filterPosts(id) {
    const arr = post.filter((post) => post.userId === id)
    renderPosts(arr)
}
renderUsers(user)