const request=require("request");
const cheerio=require("cheerio");
const getIssuesPageHtml=require("./issues")
function getReposePageHtml(url, topic){
    request (url, cb);
    function cb(err,Response,html){
        if (err){
            console.log(err);
        }
        else if(Response.statusCode == 404){
            console.log("page not found");
        }
        else{
            getReposeLink(html)
            // console.log(html);
        }

    }
    function getReposeLink(html){
        let $ = cheerio.load(html);
        let headingsArr=$(".f3.color-fg-muted.text-normal.lh-condensed")
        console.log(topic);
        for (let i=0; i<8; i++){
            let twoAnchors = $(headingsArr[i]).find("a");
            let link = $(twoAnchors[1]).attr("href");
            // console.log(link);
            let fullLink = `https://github.com${link}/issues`;
            // console.log(fullLink);
            let repoName= link.split("/").pop();
            getIssuesPageHtml(fullLink, topic, repoName);
        }
        console.log("`````````");
    }

}
module.exports=getReposePageHtml;