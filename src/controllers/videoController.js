export const trending = (req, res) => res.send("Trending videos");
export const see = (req, res) => {
    return res.send(`Watch video #${req.params.id}`)
};
export const edit = (req, res) => res.send("Edit video");
export const search = (req, res) => res.send("Search video");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete video");
