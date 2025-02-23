import fs from 'fs';
import path from 'path';

const directory = './src'; // The directory where your .js files are located

// Function to recursively rename .js files to .jsx
const renameFiles = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const currentPath = path.join(dir, file);
    const stats = fs.statSync(currentPath);

    // If it's a directory, recursively rename files inside it
    if (stats.isDirectory()) {
      renameFiles(currentPath);
    } else if (file.endsWith('.js')) {
      // Rename .js file to .jsx
      const newPath = currentPath.replace('.js', '.jsx');
      fs.renameSync(currentPath, newPath);
      console.log(`Renamed: ${currentPath} -> ${newPath}`);
    }
  });
};

// Start renaming in the 'src' folder
renameFiles(directory);
