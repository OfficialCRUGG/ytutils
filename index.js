// Imports
let args = process.argv;
let youtubedl = require('youtube-dl');
let fs = require('fs');

// Messages
let INVALID_ARGUMENTS = "Invalid arguments";
let NOT_IMPLEMENTED_YET = "This feature is not implemented yet";
let INFO_SUCESSFULLY_WRITTEN_TO_FILE = "The information of the video {0} was sucessfully written to the file {1}";

if(args.length <= 2) {
    console.log(INVALID_ARGUMENTS);
} else {
    if(args[2] === "download") {
        if(args[3] === "video") {
            console.log(NOT_IMPLEMENTED_YET);
        } else if(args[3] === "thumbnail") {
            console.log(NOT_IMPLEMENTED_YET);
        } else if(args[3] === "subtitles") {
            console.log(NOT_IMPLEMENTED_YET);
        } else {
            console.log(INVALID_ARGUMENTS);
        }
    } else if(args[2] === "information" || args[2] === "infos") {
        if(args.length === 5) {
            let input = args[3];
            let output = args[4];
            let options = [];
            youtubedl.getInfo(input, options, function(err, info) {
                if (err) throw err;
                
                let infoObject = {
                    "id": info.id,
                    "title": info.title,
                    "url": info.url,
                    "thumbnail": info.thumbnail,
                    "description": info.description,
                    "filename": info.filename,
                    "format-id": info.format_id
                }

                try {
                    fs.writeFile(output, JSON.stringify(infoObject), function(err, data) {
                        if(err) console.log(err);
                    });
                    return console.log(INFO_SUCESSFULLY_WRITTEN_TO_FILE.replace("{0}", info.id).replace("{1}", output));
                } catch (err) {
                    return console.log(err);
                }
              });
        } else {
            console.log(INVALID_ARGUMENTS);
        }
    } else {
        console.log(INVALID_ARGUMENTS);
    }
}