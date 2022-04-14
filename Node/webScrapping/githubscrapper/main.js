let url="https://github.com/topics";
const request=require("request");
const cheerio=require("cheerio");
const pdfkit=require("pdfkit");
const getReposePageHtml=require("./reposepage")
request (url, cb);
function cb(err,Response, html){
    if(err){
        console.log(err);
    } 
    
    else if(Response.statusCode == 404){
        console.log("page not found");
    }
    else{
        // console.log(html);
        getTopicLinks(html)
    }
}
function getTopicLinks(html){
    let $= cheerio.load(html);
    let linkEleArr=$(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i=0;i<linkEleArr.length;i++){
       let href= $(linkEleArr[i]).attr("href");
        let topic=href.split("/").pop();
        let fullLink=`https://github.com/${href}`;
        getReposePageHtml(fullLink, topic);

    }



}