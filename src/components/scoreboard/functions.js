export const getTime = (time) => {
    const hours = new Date(time).getHours() < 10 ? `0${new Date(time).getHours()}` : new Date(time).getHours();
    const minutes = new Date(time).getMinutes() < 10 ? `0${new Date(time).getMinutes()}` : new Date(time).getMinutes();

    return `${hours}:${minutes}`;
};