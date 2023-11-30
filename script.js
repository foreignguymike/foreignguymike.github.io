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

var aCurrentIndex = -1;
const aUrls = [
	["imgs/a1.png", "imgs/a1.mp4"]
];

function changeImageFSF(index) {
	if (index == fsfCurrentIndex) return;
	
	const thumbnails = document.getElementById("fsfThumbnails");
	if (fsfCurrentIndex >= 0) {
		thumbnails.children[fsfCurrentIndex].classList.remove("active-thumbnail");
	}
	thumbnails.children[index].classList.add("active-thumbnail");
	
	fsfCurrentIndex = index;
	const url = fsfUrls[index][1];
	const mainImage = document.getElementById("fsfMainImage");
	const mainVideo = document.getElementById("fsfMainVideo");
	const mainVideoSource = document.getElementById("fsfMainVideoSource");
	if (isImage(url)) {
		mainVideo.style.display = "none";
		mainVideo.pause();
		mainImage.style.display = "block";
		mainImage.src = url;
	} else if (isVideo(url)) {
		mainImage.style.display = "none";
		mainVideo.style.display = "block";
		if (mainVideoSource.src != url) {
			const ext = getUrlExtension(url);
			mainVideoSource.setAttribute("src", url);
			mainVideoSource.setAttribute("type", "video/" + ext);
			mainVideo.load();
			mainVideo.addEventListener("canplay", function() {
				mainVideo.play();
			});
		} else {
			mainVideo.play();
		}
	}
}

function changeImageA(index) {
	if (index == aCurrentIndex) return;
	
	const thumbnails = document.getElementById("aThumbnails");
	if (aCurrentIndex >= 0) {
		thumbnails.children[aCurrentIndex].classList.remove("active-thumbnail");
	}
	thumbnails.children[index].classList.add("active-thumbnail");
	
	aCurrentIndex = index;
	const url = aUrls[index][1];
	const mainImage = document.getElementById("aMainImage");
	const mainVideo = document.getElementById("aMainVideo");
	const mainVideoSource = document.getElementById("aMainVideoSource");
	if (isImage(url)) {
		mainVideo.style.display = "none";
		mainVideo.pause();
		mainImage.style.display = "block";
		mainImage.src = url;
	} else if (isVideo(url)) {
		mainImage.style.display = "none";
		mainVideo.style.display = "block";
		if (mainVideoSource.src != url) {
			const ext = getUrlExtension(url);
			mainVideoSource.setAttribute("src", url);
			mainVideoSource.setAttribute("type", "video/" + ext);
			mainVideo.load();
			mainVideo.addEventListener("canplay", function() {
				mainVideo.play();
			});
		} else {
			mainVideo.play();
		}
	}
}

function populateThumbnails() {
    var thumbnails = document.getElementById("fsfThumbnails");
    fsfUrls.forEach((imageUrl, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = imageUrl[0];
        thumbnail.alt = "Thumbnail ${index + 1}";
        thumbnail.onclick = function () {
            changeImageFSF(index);
        };
        thumbnails.appendChild(thumbnail);
    });
	changeImageFSF(0);
	
	thumbnails = document.getElementById("aThumbnails");
	aUrls.forEach((imageUrl, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = imageUrl[0];
        thumbnail.alt = "Thumbnail ${index + 1}";
        thumbnail.onclick = function () {
            changeImageA(index);
        };
        thumbnails.appendChild(thumbnail);
    });
	changeImageA(0);
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