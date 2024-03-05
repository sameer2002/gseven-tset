window.addEventListener('DOMContentLoaded', function() {
    const commentBox = document.getElementById('commentBox');
    const cards = commentBox.querySelectorAll('.card');

    function adjustRowHeights() {
        const rows = Array.from(commentBox.children);
        rows.forEach(row => {
            row.style.height = 'auto';
        });

        cards.forEach(card => {
            const row = card.parentElement;
            const currentHeight = row.offsetHeight;
            const cardHeight = card.offsetHeight;
            if (cardHeight > currentHeight) {
                row.style.height = cardHeight + 'px';
            }
        });
    }

    adjustRowHeights();
    window.addEventListener('resize', adjustRowHeights);
});