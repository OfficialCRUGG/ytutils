[English](https://github.com/OfficialCRUGG/ytutils/blob/master/README.md) | Deutsch

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

# 1. Einleitung
Dein ultimatives YouTube Werkzeug - Lade Videos, Audio, Thumbnails, Untertitel uld Videoinformationen von YouTube herunter

# 2. Inhalt
* [1\. Einleitung](#1-einleitung)
* [2\. Inhalt](#2-inhalt)
* [3\. Verwendung](#3-verwendung)
  * [3.1 Ein Video herunterladen](#31-ein-video-herunterladen)
  * [3.2 Ein Thumbnail herunterladen](#32-ein-thumbnail-herunterladen)
  * [3.3 Untertitel herunterladen](#33-untertitel-herunterladen)
  * [3.4 Videoinformationen herunterladen](#34-videoinformationen-herunterladen)

# 3. Verwendung
## 3.1 Ein Video herunterladen
### 3.1.1 Syntax
```
node ytutils.js downnload video INPUT_URL OUTPUT_FILE
```
### 3.1.2 Beispiel
```
node ytutils.js download video https://www.youtube.com/watch?v=poWpo76mH_0 kirby_gourmetrace_remix.mp3
```
### 3.1.3 Argumente
| Argument    | Beschreibung                                            | Beispiel                                     | Beschränkungen                                                                                          |
|-------------|--------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------|
| INPUT_URL   | Die URL des Videos, welches heruntergeladen werden soll | https://www.youtube.com/watch?v=poWpo76mH_0 | Muss eine YouTube URL sein                                                                        |
| OUTPUT_FILE | Der Name der Datei, wo das Video hingespeichert werden soll       | kirby_gourmetrace_remix.mp3                 | Muss mit ".mp3" oder ".mp4" enden. Dies bestimmt außerdem, ob es nur den Ton oder das komplette Video herunterlädt |
## 3.2 Ein Thumbnail herunterladen
Noch nicht implementiert
## 3.3 Untertitel herunterladen
Noch nicht implementiert
## 3.4 Videoinformationen herunterladen
### 3.1.1 Syntax
```
node ytutils.js infos INPUT_URL OUTPUT_FILE
```
### 3.1.2 Beispiel
```
node ytutils.js infos https://www.youtube.com/watch?v=poWpo76mH_0 kirby_gourmetrace_remix.json
```
### 3.1.3 Argumente
| Argument    | Beschreibung                                            | Beispiel                                     | Beschränkungen                                                                                          |
|-------------|--------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------|
| INPUT_URL   | Die URL des Videos, dessen Informationen heruntergeladen werden sollen | https://www.youtube.com/watch?v=poWpo76mH_0 | Muss eine YouTube URL sein                                                                        |
| OUTPUT_FILE | Der Name der Datei, wo die Informationen hingespeichert werden sollen       | kirby_gourmetrace_remix.json                 | Muss mit ".json" oder ".txt" enden |
