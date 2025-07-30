export default function parallaxAnimation({ containerId, elementId, animation }) {
    const container = document.getElementById(containerId);
    const element = document.getElementById(elementId);
    
    if (!container || !element) {
        console.warn(`Parallax: Container "${containerId}" or element "${elementId}" not found`);
        return;
    }

    let startScroll = 0;
    let isInView = false;

    const observer = new IntersectionObserver(([entry]) => {
        isInView = entry.isIntersecting;

        if (isInView) {
            startScroll = window.scrollY;
            window.addEventListener("scroll", onScroll);
        } else {
            // Resetear elemento a su estado inicial
            resetElement();
            window.removeEventListener("scroll", onScroll);
        }
    });

    const onScroll = () => {
        if (!isInView) return;
        
        const scrollDistance = window.scrollY - startScroll;
        
        // Ejecutar la función de animación personalizada
        animation(element, scrollDistance);
    };

    const resetElement = () => {
        // Resetear todas las propiedades de transform comunes
        element.style.transform = '';
        element.style.opacity = '';
        element.style.filter = '';
    };

    observer.observe(container);
    
    // Cleanup al descargar la página
    window.addEventListener("beforeunload", () => {
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
    });

    // Retornar función de cleanup para poder limpiar manualmente
    return () => {
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
        resetElement();
    };
}
