export function expandServiceCard(id) {
    const button = document.getElementById(`button-${id}`)
    if (button) {
        button.addEventListener("click", () => {
            const shortDescription = document.getElementById(`short-description-${id}`)
            const extendedDescription = document.getElementById(`extended-description-${id}`)
            if (shortDescription && extendedDescription) {
                shortDescription.style.display = "none"
                extendedDescription.style.display = "block"
            }
        })
    }
}