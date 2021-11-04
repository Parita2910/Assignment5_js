/*
    Assignment 5
    {Parita Vipulbhai Amin}
*/


$(document).ready(function()
{
    class ContentCard 
    {
        constructor(title, description, categorytype) 
        {
            this.id = id;
            this.title = title;
            this.description = description;
            this.categorytype = categorytype;
        }
    }  
    let id =  Math.floor(Math.random() * 26) + Date.now();
    let values = new ContentCard(id, 'Dance','Favourite Hobby','Hip-Hop','Contemporary','Kathak');
    document.getElementById("content-list").innerHTML = "<div id= content-" + values.id + "> <h4>" + values.title + "</h4><p>" + values.description + "</p><div>"+ values.categorytype + "</div></div>";       
});



