// Declare your genre arrays here
let comedy = ["https://m.media-amazon.com/images/M/MV5BZWU5MTZiOTctYWNmNy00M2E2LTliM2QtM2JmNmFiYWVkMDA5XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg","https://upload.wikimedia.org/wikipedia/en/c/c0/PrivateEyes.jpg","https://flxt.tmsimg.com/assets/p66566_p_v8_aa.jpg"];
let action = ["https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMzY1ZjM2MzgtODUwZi00NWM3LThlYjAtNWJjZGM2ZDY1ODg1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BZTEzMTYwZDItODIyYy00MjRkLTljOWMtZDI0ZmNjN2JjOTEyXkEyXkFqcGdeQXVyNzgzODI1OTE@._V1_.jpg"];
let romance = ["https://i.mydramalist.com/wOqO8f.jpg","https://upload.wikimedia.org/wikipedia/en/d/d1/Happy_Together_poster.jpg","https://m.media-amazon.com/images/M/MV5BYWVjNjMwZTgtMGYyYy00NmVhLWE1NDItMzFhMmJkYTNjYWIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"];
// Make sure to declare your HTML elements as variables! 
let display = document.querySelector(".moviedisplay");
// Submit Button 
let submitbutton = document.querySelector(".submitButton"); 
submitbutton.onclick = function() {
   let input = document.querySelector(".genre").value;
    
}; 
let suggestbutton = document.querySelector(".suggestButton");
suggestbutton.onclick = function() {
    let userURL = document.querySelector(".usermovie").value;
};
