export default async function handler(req, res) {
  const data = req.body;
  const id = {message:"Quote added",themes: data.themes, quote: data.quote};
  res.status(200).json(id);
}