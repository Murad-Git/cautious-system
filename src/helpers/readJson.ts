// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
export const readJsonFile = async () => {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  return objectData;
};
