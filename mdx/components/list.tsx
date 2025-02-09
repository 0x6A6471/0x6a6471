export function ul({ ...props }) {
	return <div className="list-inside space-y-1 pt-4 pl-8" {...props} />;
}
export function li({ ...props }) {
	return <p className="list-item" {...props} />;
}
