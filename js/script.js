let galleryItems = document.querySelectorAll(".gallery .list .item");
let galleryPreviewImage =
	document.querySelector(".gallery .preview").children[0];

galleryItems.forEach((item) => {
	item.addEventListener("mouseover", async (e) => {
		if (galleryPreviewImage.src == item.children[0].src) return;

		galleryPreviewImage.style.opacity = 0.05;
		await new Promise((resolve) => setTimeout(resolve, 350));
		galleryPreviewImage.style.opacity = 1;

		galleryPreviewImage.src = item.children[0].src;
	});
});
