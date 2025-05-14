var fsfCurrentIndex = -1;
const fsfUrls = [
	["imgs/fsf1.png", "imgs/fsf1.mp4"],
	["imgs/fsf2.png", "imgs/fsf2.png"],
	["imgs/fsf3.png", "imgs/fsf3.png"],
	["imgs/fsf4.png", "imgs/fsf4.png"],
	["imgs/fsf5.png", "imgs/fsf5.png"],
	["imgs/fsf6.png", "imgs/fsf6.png"],
	["imgs/fsf7.png", "imgs/fsf7.png"]
];

var ld30CurrentIndex = -1;
const ld30Urls = [
	["imgs/ld301.png", "imgs/ld301.mp4"]
];

var trCurrentIndex = -1;
const trUrls = [
	["imgs/tr1.png", "imgs/tr1.png"],
	["imgs/tr2.png", "imgs/tr2.png"],
	["imgs/tr3.png", "imgs/tr3.png"]
];

var pokoBlastCurrentIndex = -1;
const pokoBlastUrls = [
	["imgs/pb1.png", "imgs/pb1.png"],
	["imgs/pb2.png", "imgs/pb2.png"],
	["imgs/pb3.png", "imgs/pb3.png"]
];

var aCurrentIndex = -1;
const aUrls = [
	["imgs/a1.png", "imgs/a1.mp4"]
];

const prefixes = [
	"fsf",
	"ld30",
	"twilightRun",
	"pokoBlast",
	"a"
];
const indexes = [-1, -1, -1, -1, -1];
const urls = [
	[
		["imgs/fsf1.png", "imgs/fsf1.mp4"],
		["imgs/fsf2.png", "imgs/fsf2.png"],
		["imgs/fsf3.png", "imgs/fsf3.png"],
		["imgs/fsf4.png", "imgs/fsf4.png"],
		["imgs/fsf5.png", "imgs/fsf5.png"],
		["imgs/fsf6.png", "imgs/fsf6.png"],
		["imgs/fsf7.png", "imgs/fsf7.png"]
	],
	[
		["imgs/ld301.png", "imgs/ld301.mp4"]
	],
	[
		["imgs/tr1.png", "imgs/tr1.png"],
		["imgs/tr2.png", "imgs/tr2.png"],
		["imgs/tr3.png", "imgs/tr3.png"]
	],
	[
		["imgs/pb1.png", "imgs/pb1.png"],
		["imgs/pb2.png", "imgs/pb2.png"],
		["imgs/pb3.png", "imgs/pb3.png"]
	],
	[
		["imgs/a1.png", "imgs/a1.mp4"]
	]
];

function changeImage(prefix, index, currentIndex, urls, play = true) {
	if (index == currentIndex) return;
	
	const thumbnails = document.getElementById(prefix + "Thumbnails");
	if (currentIndex >= 0) {
		thumbnails.children[currentIndex].classList.remove("active-thumbnail");
	}
	thumbnails.children[index].classList.add("active-thumbnail");
	
	const url = urls[index][1];
	const mainImage = document.getElementById(prefix + "MainImage");
	const mainVideo = document.getElementById(prefix + "MainVideo");
	const mainVideoSource = document.getElementById(prefix + "MainVideoSource");
	if (isImage(url)) {
		if (mainVideo != null) {
			mainVideo.style.display = "none";
			mainVideo.pause();
		}
		mainImage.style.display = "block";
		mainImage.src = url;
	} else if (isVideo(url)) {
		mainImage.style.display = "none";
		if (mainVideo != null) {
			mainVideo.style.display = "block";
		}
		if (mainVideo != null) {
			if (mainVideoSource.src != url) {
				const ext = getUrlExtension(url);
				mainVideoSource.setAttribute("src", url);
				mainVideoSource.setAttribute("type", "video/" + ext);
				mainVideo.load();
				mainVideo.addEventListener("canplay", function() {
					if (play) mainVideo.play();
				});
			} else {
				if (play) mainVideo.play();
			}
		}
	}
}

function populateThumbnails() {
	for (let i = 0; i < urls.length; i++) {
		var thumbnails = document.getElementById(prefixes[i] + "Thumbnails");
		urls[i].forEach((imageUrl, index) => {
			const thumbnail = document.createElement("img");
			thumbnail.src = imageUrl[0];
			thumbnail.alt = "Thumbnail " + (index + 1);
			thumbnail.onclick = function () {
				changeImage(prefixes[i], index, indexes[i], urls[i]);
				indexes[i] = index;
			};
			thumbnails.appendChild(thumbnail);
		});
		changeImage(prefixes[i], 0, indexes[i], urls[i]);
		indexes[i] = 0;
	}
}

function isImage(url) {
	return url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;
}

function isVideo(url) {
	return url.match(/\.(webm|avi|mp4|wmv|flv|mov|mkv|qt)$/) != null;
}

function getUrlExtension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}

document.addEventListener("DOMContentLoaded", function () {
    populateThumbnails();
});