export const outputFilename = (entry, output) => {
	return entry.resource.includes('common') 
		? `common/[name]/[name].${output}`
		: `pages/[name]/[name].${output}`
}