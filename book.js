let productButton = document.querySelectorAll(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

document.getElementById("profile").innerHTML = localStorage.getItem("email");
for (let i = 0; i < productButton.length; i++) {
productButton[i].addEventListener("click", () => {
payment.style.display = "flex";
let j = i;
if(j == 0)
{
    localStorage.setItem("type", "Street Racer");
    localStorage.setItem("ht", " 5'4 to 5'10 ft ");
    localStorage.setItem("amt", " 1,600 ");
    localStorage.setItem("it", "0");
}

if(j == 1)
{
    localStorage.setItem("type", "Atlas Mettle");
    localStorage.setItem("ht", " 4'8 to 5'2 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "1");
}

if(j == 2)
{
    localStorage.setItem("type", "Kross Eco");
    localStorage.setItem("ht", " 5'3 to 5'8 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "2");
}

if(j == 3)
{
    localStorage.setItem("type", "Hercules Brut");
    localStorage.setItem("ht", " 4'10 to 5'2 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "3");
}

if(j == 4)
{
    localStorage.setItem("type", "Hercules Roadeo Hank");
    localStorage.setItem("ht", " 4'10 to 5'4 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "4");
}

if(j == 5)
{
    localStorage.setItem("type", "Hero Sprint Tomboy");
    localStorage.setItem("ht", " 5'3 to 5'6 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "5");
}

if(j == 6)
{
    localStorage.setItem("type", "Xtal Muse");
    localStorage.setItem("ht", " 5'2 to 5'6 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "6");
}

if(j == 7)
{
    localStorage.setItem("type", "Hercules FX 100");
    localStorage.setItem("ht", "  5'3 to 5'8 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "7");
}

if(j == 8)
{
    localStorage.setItem("type", "Hercules Rocky");
    localStorage.setItem("ht", "  4'10 to 5'3 ft ");
    localStorage.setItem("amt", " 1,700 ");
    localStorage.setItem("it", "8");
}

if(j == 9)
{
    localStorage.setItem("type", "Btwin My Bike");
    localStorage.setItem("ht", "  5'3 to 5'9 ft ");
    localStorage.setItem("amt", " 1,800 ");
    localStorage.setItem("it", "9");
}

if(j == 10)
{
    localStorage.setItem("type", "Hero Ranger");
    localStorage.setItem("ht", " 5'3 to 5'9 ft ");
    localStorage.setItem("amt", " 1,800 ");
    localStorage.setItem("it", "10");
}

if(j == 11)
{
    localStorage.setItem("type", "Btwin Riverside 50");
    localStorage.setItem("ht", " 5'4 to 6' ft ");
    localStorage.setItem("amt", " 1,800 ");
    localStorage.setItem("it", "11");
}



});
}

close.addEventListener("click", () => {
payment.style.display = "none";
});

payButton.addEventListener("click", () => {
payment.style.display = "none";
});

