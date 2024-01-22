export const generateID = () => {
    const random = Math.random().toString(36).substring(2, 15);
    const timestamp = Date.now().toString(36);
    return `${random}${timestamp}`;
};

export const formatTime = (time) => {
    const newTime = new Date(time);
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return newTime.toLocaleDateString('en-US', options);
};