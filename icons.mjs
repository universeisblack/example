import fs from 'fs';
import path from 'path';
import svgToJSON from './src/svgToJson.mjs';
import createIcon from './src/createIcon.mjs';

export default function readSVGFiles(directory) {
	fs.readdir(directory, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		files.forEach(file => {
			if (path.extname(file) === '.svg') {
				const filePath = path.join(directory, file);
				fs.readFile(filePath, 'utf8', (err, data) => {
					if (err) {
						console.error('Error reading SVG file:', err);
						return;
					}

					// Call your method with the SVG data
					const result = svgToJSON(data);
					const componentName = path.basename(file, '.svg');
					const reactComponent = createIcon(componentName, result);

					// Write React component to file in /dist directory
					const distFilePath = path.join(__dirname, 'dist', componentName + '.jsx');
					fs.writeFile(distFilePath, reactComponent, err => {
						if (err) {
							console.error('Error writing React component to file:', err);
							return;
						}
						console.log(`React component saved to ${distFilePath}`);
					});
				});
			}
		});
	});
}

const dir = path.join(__dirname, 'icons');
readSVGFiles(dir);
