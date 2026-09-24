let viewMoreState = false
const blogs = [document.querySelector(".blog4"), document.querySelector(".blog5"), document.querySelector(".blog6")]
const viewMore = document.querySelector(".view-more")

viewMore.addEventListener("click" , ()=>{
    // console.log("dfsalj")
    viewMoreState = !viewMoreState
    blogs.forEach((item)=>{
        item.style.display = viewMoreState ? "block" : "none"
        console.log("asdffasddfasadfs")
    })
    
    viewMore.textContent = viewMoreState ? "View Less" : "View More"
})