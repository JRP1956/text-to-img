const token = "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"
const button = document.getElementById("button")
const image = document.getElementById("image")
const inputText = document.getElementById("inputs")




async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
		{
			headers: {
				Authorization: "Bearer "+token,
                				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputText.value}),
		}
	);
	const result = await response.blob();
	return result;
}


button.addEventListener('click', async function () {
    query({}).then((response) => {
        const objectURL = URL.createObjectURL(response)
        image.src=objectURL
        
    });
})