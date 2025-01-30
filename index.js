const myCheckbox = document.getElementById("myCheckbox");
const submitBtn = document.getElementById("submitBtn");
const submitRes = document.getElementById("submitRes");

submitBtn.onclick = function (){

    if(myCheckbox.checked){
        submitRes.textContent = "can we honestly e date? you’re so beautiful. You always make me laugh, you always make me smile. You literally make me want to become a better person... I really enjoy every moment we spend together. My time has no value unless its spent with you. I tell everyone of my irls how awesome you are. Thank you for being you. Whenever you need someone to be there for you, know that i’ll always be right there by your side. I love you so much. I don’t think you ever realize how amazing you are sometimes. Life isn’t as fun when you’re not around. You are truly stunning. I want you to be my soulmate. I love the way you smile, your eyes are absolutely gorgeous. If I had a star for everytime you crossed my mind i could make the entire galaxy. Your personality is as pretty as you are and thats saying something. (don't try submitting your answer without checking the checkbox btw)";
    }
    else {
        submitRes.textContent = "What the heck did you just flipping say about me, you big meanie?I'll have you know I graduated top of my class in the Tiny Tots Program, and I've been involved in numerous secret raids on the girl's bathroom, and I have over 300 confirmed noogies. I am trained in Nerf warfare and I have the most gold stars in the entire kindergarten class. ou are nothing to me but just another butthead.I will beat you the heck up with precision the likes of which has never been seen before on this Earth, mark my dang words.You think you can get away with not checking that checkbox? Think again, doodiehead. As we speak I am contacting my secret network of teachers across the USA and your parents are being called to pick you up right now so you better prepare for the spanking, junior. ";
    }
}