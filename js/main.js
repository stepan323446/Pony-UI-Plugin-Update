let dropdown = document.getElementsByClassName("dropdown-list");

for(let i = 0; i < dropdown.length; i++)
{
    dropdown[i].querySelector(".main").addEventListener("click", function(e)
    {
        dropdown[i].classList.toggle("active");
    });
}

let burger = document.getElementsByClassName("burger")[0];
let header = document.getElementsByClassName("header-info")[0];

burger.addEventListener("click", function()
{
    burger.classList.toggle("active");
    header.classList.toggle("active");
});