import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { slug } = req.query;

    if (!slug) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    try {
        const filePath = path.join(process.cwd(), 'data', 'umkm', `${slug}.json`);
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        res.status(200).json(data);
    } catch (err) {
        res.status(404).json({ message: 'Data not found' });
    }
}
