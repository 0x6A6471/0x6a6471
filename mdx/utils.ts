import fs from "node:fs";
import path from "node:path";

type Metadata = {
	title: string;
	slug: string;
	description: string;
	publishedAt: string;
};

function parseFrontmatter(fileContent: string) {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
	const content = fileContent.replace(frontmatterRegex, "").trim();
	const match = frontmatterRegex.exec(fileContent);
	const frontMatterBlock = match![1];
	const frontMatterLines = frontMatterBlock.trim().split("\n");
	const metadata: Partial<Metadata> = {};

	frontMatterLines.forEach(line => {
		const [key, ...valueArr] = line.split(": ");
		let value = valueArr.join(": ").trim();
		value = value.replace(/^['"](.*)['"]$/, "$1");
		metadata[key.trim() as keyof Metadata] = value;
	});

	return { metadata: metadata as Metadata, content: content };
}

function getMdxFiles(dir: fs.PathLike) {
	return fs.readdirSync(dir).filter(file => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
	const rawContent = fs.readFileSync(filePath, "utf-8");
	return parseFrontmatter(rawContent);
}

function getMdxData(dir: fs.PathLike) {
	const mdxFiles = getMdxFiles(dir);
	return mdxFiles.map(file => {
		const { metadata, content } = readMDXFile(path.join(dir.toString(), file));
		const slug = path.basename(file, path.extname(file));

		return {
			metadata,
			slug,
			content,
		};
	});
}

export function getPosts() {
	return getMdxData(path.join(process.cwd(), "mdx", "posts"));
}
