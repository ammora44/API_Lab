"use strict";

$(document).ready(() => {
    $.get('https://www.reddit.com/r/vintageads.json', (data) => {
        let children = data.data.children.slice(0, 10);
        for (let i = 0; i < children.length; i++) {
            let children = data.data.children;
            let title = data.data.children[i].data.title;
            let link = data.data.children[i].data.permalink;
            let picture = data.data.children[i].data.thumbnail;
            let promise = $.get('https://www.reddit.com/r/vintageads.json');
                promise.then((responseData) => {
                $(".container").append("<p>" + title + "</p>");
                $(".container").append("<img src=" + picture + ">"); 
                $(".container").append("<br> <a href="+ "https://reddit.com" + link + " <p> Link </p> </a>");
                })
        }
    });
});

