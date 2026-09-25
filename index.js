let viewMoreState = false
const blogs = [document.querySelector(".blog5"), document.querySelector(".blog6")]
const viewMore = document.querySelector(".view-more")

viewMore.addEventListener("click" , ()=>{
    // console.log("dfsalj")
    viewMoreState = !viewMoreState
    blogs.forEach((item)=>{
        item.style.display = viewMoreState ? "block" : "none"
    }) 
    viewMore.textContent = viewMoreState ? "View Less" : "View More"
})