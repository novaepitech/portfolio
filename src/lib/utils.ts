export function isEnhancedImage(srcPath: any) {
	console.log('srcPath: ', srcPath);
	if (!srcPath) return false; // Handle cases where src is undefined or null
	return srcPath.img ? true : false;
}
