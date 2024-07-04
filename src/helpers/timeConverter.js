export function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    return diffHrs <= 1 ? `${diffHrs} hour ago` : `${diffHrs} hours ago`;
}

export const dateFormatter = d => {
    const date = new Date(d);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}