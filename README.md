English | [Deutsch](https://github.com/OfficialCRUGG/ytutils/blob/master/README.de.md)

![Top Language](https://img.shields.io/github/languages/top/OfficialCRUGG/ytutils.svg?style=flat-square)
![Size](https://img.shields.io/github/size/officialcrugg/ytutils/ytutils.js.svg?style=flat-square)
![Open Issues](https://img.shields.io/github/issues-raw/officialcrugg/ytutils.svg?style=flat-square)
![Open PRs](https://img.shields.io/github/issues-pr-raw/officialcrugg/ytutils.svg?style=flat-square)
![Closed PRs](https://img.shields.io/github/issues-pr-closed-raw/officialcrugg/ytutils.svg?color=red&style=flat-square)
![License](https://img.shields.io/github/license/OfficialCRUGG/ytutils.svg?color=blue&style=flat-square)
![Stars](https://img.shields.io/github/stars/officialcrugg/ytutils.svg?color=yellow&style=flat-square)
![Forks](https://img.shields.io/github/forks/officialcrugg/ytutils.svg?color=yellow&style=flat-square)

![Release](https://img.shields.io/github/release/officialcrugg/ytutils.svg?style=flat-square)
![Pre-Release](https://img.shields.io/github/release-pre/officialcrugg/ytutils.svg?label=pre-release&style=flat-square)
![Development Version](https://img.shields.io/github/package-json/v/officialcrugg/ytutils.svg?label=development-version&style=flat-square)

# 1. Introduction
Your ultimate Youtube utility - Download videos, audio, thumbnails, subtitles and video information from YouTube

# 2. Contents
* [1\. Introduction](#1-introduction)
* [2\. Contents](#2-contents)
* [3\. Usage](#3-usage)
  * [3.1 Download a video](#31-download-a-video)
  * [3.2 Download a thumbnail](#32-download-a-thumbnail)
  * [3.3 Download subtitles](#33-download-subtitles)
  * [3.4 Download video information](#34-download-video-information)

# 3. Usage
## 3.1 Download a video
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
