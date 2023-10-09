export const attachScrollHandler = (scrollElement) => {
    const handleScroll = (event) => {
        // Determine the scroll direction and amount
        const delta = event.deltaY;
        // Programmatically scroll the provided element
        scrollElement.scrollTop += delta;
    };

    // Attach the handler to the window
    window.addEventListener('wheel', handleScroll);

    // Return a cleanup function to remove the handler when it's no longer needed
    return () => {
        window.removeEventListener('wheel', handleScroll);
    };
};
