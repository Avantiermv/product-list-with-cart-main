export const testing = (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}