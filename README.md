# 1. Introduction
Your ultimate Youtube utility - Download videos, audio, thumbnails, subtitles and video information from YouTube

# 2. Contents
* 1\. Introduction
* 2\. Contents
* 3\. Usage
  * 3.1 Downloading a song
  * 3.2 Downloading a thumbnail
  * 3.3 Downloading subtitles
  * 3.4 Downloading video information

# 3. Usage
## 3.1 Downloading a song
### 3.1.1 Syntax
```
node ytutils.js downnload video INPUT_URL OUTPUT_FILE
```
### 3.1.2 Example
```
node ytutils.js download video https://www.youtube.com/watch?v=poWpo76mH_0 kirby_gourmetrace_remix.mp3
```
### 3.1.3 Arguments
| Argument    | Description                                            | Example                                     | Limitations                                                                                          |
|-------------|--------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------|
| INPUT_URL   | The URL of the YouTube Video that should be downloaded | https://www.youtube.com/watch?v=poWpo76mH_0 | Has to be a YouTube Video URL                                                                        |
| OUTPUT_FILE | The Name of the File it should save the Video to       | kirby_gourmetrace_remix.mp3                 | Has to end with ".mp3" or ".mp4" which also decides if it downloads the video as audio only or video |
## 3.2 Download a thumbnail
Not implemented yet
## 3.3 Download subtitles
Not implemented yet
## 3.4 Download video information
### 3.1.1 Syntax
```
node ytutils.js infos INPUT_URL OUTPUT_FILE
```
### 3.1.2 Example
```
node ytutils.js infos https://www.youtube.com/watch?v=poWpo76mH_0 kirby_gourmetrace_remix.json
```
### 3.1.3 Arguments
| Argument    | Description                                            | Example                                     | Limitations                                                                                          |
|-------------|--------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------|
| INPUT_URL   | The URL of the YouTube Video which's information should be downloaded | https://www.youtube.com/watch?v=poWpo76mH_0 | Has to be a YouTube Video URL                                                                        |
| OUTPUT_FILE | The Name of the File it should save the Information to       | kirby_gourmetrace_remix.json                 | Has to end with ".json" or ".text" |
