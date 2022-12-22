/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("// import modules \n//const ffmpeg = require('fluent-ffmpeg');\n\n\nconst form = document.querySelector('form');\nconst input = document.querySelector('input[type=\"text\"]');\nconst API_KEY = 'AIzaSyBRAVYwJurqSY6_tOyPQOfbY47WIV8S60E';\n//const ffmpeg = 'fluent-ffmpeg';\n\n\nasync function getVideoInfo(videoId) {\n  const response = await fetch(\n    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`\n  );\n  const data = await response.json();\n  const video = data.items[0];\n  const title = video.snippet.title;\n  const duration = video.contentDetails.duration;\n  console.log(`Title: ${title}`);\n  console.log(`Duration: ${duration}`);\n}\n\n\n\nform.addEventListener('submit', event => {\n  event.preventDefault();\n\n  const url = input.value;\n\n  fetch('/download', {\n    method: 'POST',\n    body: JSON.stringify({ url }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  })\n  .then(response => response.json())\n  .then(data => {\n    const title = data.title;\n    const duration = data.duration;\n\n    const container = document.querySelector('.container');\n    const titleElement = document.createElement('h2');\n    const durationElement = document.createElement('p');\n    const downloadButton = document.createElement('button');\n\n    titleElement.textContent = title;\n    durationElement.textContent = `Duration: ${duration}`;\n    downloadButton.textContent = 'Download';\n\n    container.appendChild(titleElement);\n    container.appendChild(durationElement);\n    container.appendChild(downloadButton);\n\n    downloadButton.addEventListener('click', event => {\n    // Get the value of the \"video-url\" input field\n    const videoUrl = document.getElementById('video-url').value;\n  \n  \n  // Redirect the user to the server-side script, passing the video URL as a query parameter\n    window.location = `/download?url=${encodeURIComponent(videoUrl)}`;\n      });\n    })\n    .catch(error => {\n      console.error(error);\n    });\n});\n\n\n// FFmpeg to download the video from YouTube and save it to a file on the server.\n\nconst downloadVideo = () => {\n  // Get the video URL from the input field\n  const videoUrl = document.getElementById('video-url').value;\n\n  // Use FFmpeg to download the video from YouTube and save it to a file\n  const ffmpeg = window.ffmpeg;\n  ffmpeg(videoUrl)\n    .save(`./videos/${videoId}.mp4`)\n    .on('error', (error) => {\n      console.error(error);\n      alert('Error downloading video');\n    })\n    .on('end', () => {\n      alert('Video downloaded successfully');\n    });\n};\n\ndocument.getElementById('download-button').addEventListener('click', downloadVideo);\n\n\n\ndocument.getElementById('download-button').addEventListener('click', downloadVideo);\n\n\n// We use Disposition to force the browser to save the video on the client's device.\n\nconst xhr = new XMLHttpRequest();\nxhr.open('GET', '/download');\nxhr.setRequestHeader('Content-Disposition', 'attachment; filename=\"video.mp4\"');\nxhr.responseType = 'blob';\nxhr.onload = () => {\n  if (xhr.status === 200) {\n    const blob = xhr.response;\n    // Do something with the blob, such as saving it to a file or displaying it in the browser\n  } else {\n    console.error(xhr.statusText);\n  }\n};\nxhr.send();\n\n\n  \n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;