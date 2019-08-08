"use strict";

$(document).ready(() => {
    $.get('https://www.reddit.com/r/vintageads.json', (data) => {        
        let children = data.data.children.slice(0, 20);
        for (let i = 0; i < children.length; i++) {
            let allImages = data.data.children;
            let title = allImages[i].data.title;
            let link = allImages[i].data.permalink;
            let picture = allImages[i].data.thumbnail;
            
            if (picture !== 'self' && picture !== undefined && picture !== null) {
                $(".container").append("<img src=" + picture + ">"); 
                $(".container").append("<br> <a href="+ "https://reddit.com" + link + " <p>" + title + "</p> </a>");
            }
        }
    });
});

