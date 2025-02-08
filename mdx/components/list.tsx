export function ul({ ...props }) {
	return <div className="list-inside pl-8 space-y-1 pt-4" {...props} />;
}
export function li({ ...props }) {
	return <p className="list-item" {...props} />;
}
