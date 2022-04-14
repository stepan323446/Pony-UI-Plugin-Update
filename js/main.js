let dropdown = document.getElementsByClassName("dropdown-list");

for(let i = 0; i < dropdown.length; i++)
{
    dropdown[i].querySelector(".main").addEventListener("click", function(e)
    {
        dropdown[i].classList.toggle("active");
    });
}