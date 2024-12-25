const BASE_URL =
  'https://firebasestorage.googleapis.com/v0/b/refined-window-438515-p1.firebasestorage.app/o/public%2F';

export default async function handler(req, res) {
  const {asset} = req.query;
  console.log(asset);
  if (!asset) {
    return res.status(400).json({error: 'asset is required'});
  }

  try {
    const response = await fetch(BASE_URL + asset);
    if (!response.ok) {
      console.log(response);
      return res
        .status(response.status)
        .json({error: 'Failed to fetch the file'});
    }

    const fileBlob = await response.blob();
    const fileBuffer = Buffer.from(await fileBlob.arrayBuffer());

    res.setHeader('Content-Type', response.headers.get('Content-Type'));
    res.setHeader('Content-Length', fileBuffer.length);
    res.send(fileBuffer);
  } catch (error) {
    res.status(500).json({error: 'Internal Server Error'});
  }
}
