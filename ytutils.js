// Imports
let args = process.argv;
let youtubedl = require('youtube-dl');
let fs = require('fs');

// Messages
let INVALID_ARGUMENTS = "Invalid arguments";
let NOT_IMPLEMENTED_YET = "This feature is not implemented yet";
let INFO_SUCESSFULLY_WRITTEN_TO_FILE = "The information of the video {0} was sucessfully written to the file {1}";
let INVALID_FILE_ENDING = "The output file has to end with {0}"
let OR = "or"
let DOWNLOAD_STARTED = "Download started!{n}Size: {0}"

if(args.length <= 2) {
    console.log(INVALID_ARGUMENTS);
} else {
    if(args[2] === "download") {
        if(args[3] === "video") {
            if(args.length === 6) {
                let input = args[4];
                let output = args[5];
                let format = "mp4";
                let basicFormat = "best";
                if(!(output.endsWith(".mp3") || output.endsWith(".mp4"))) {
                    return console.log(INVALID_FILE_ENDING.replace("{0}", ".mp3 " + OR + " .mp4"));
                }
                // if(output.endsWith(".flv")) format = "flv";
                // if(output.endsWith(".mp3")) format = "mp3";
                // if(output.endsWith(".mp4")) format = "mp4";
                // if(output.endsWith(".ogg")) format = "ogg";
                // if(output.endsWith(".wav")) format = "wav";
                // if(output.endsWith(".webm")) format = "webm";
                if(output.endsWith(".mp3")) basicFormat = "bestaudio";
                if(output.endsWith(".mp4")) basicFormat = "best";
                let video = youtubedl(input, ["--format=" + basicFormat]);
                video.on("info", function(info) {
                    console.log(DOWNLOAD_STARTED.split("{n}")[0]);
                    console.log(DOWNLOAD_STARTED.split("{n}")[1].replace("{0}", info.size));
                });
                video.pipe(fs.createWriteStream(output));
            } else {
                console.log(INVALID_ARGUMENTS);
            }
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
            if(!(output.endsWith(".json") || output.endsWith(".json"))) {
                return console.log(INVALID_FILE_ENDING.replace("{0}", ".json " + OR + " .txt"));
            }
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