import { links } from "$data/links";

export type ContributorData = {
	login: string;
	avatar_url: string;
	html_url: string;
	type: "Software Engineer" | "Advisor";
};

export const load = async ({ }) => {
	// TODO:
	/* const githubContribData = (page: number) =>
		`https://api.github.com/repos/${links.github.owner}/${links.github.repo}/contributors?per_page=25&page=${page}`; */

	const data: ContributorData[] = [
		{
			login: "Baran Yancı",
			avatar_url: "https://avatars.githubusercontent.com/u/73401941?v=4",
			html_url: "https://github.com/y4nci",
			type: "Software Engineer",
		},
		{
			login: "Taner Sarp Tonay",
			avatar_url: "https://avatars.githubusercontent.com/u/56763025?v=4",
			html_url: "https://github.com/tanersarptonay",
			type: "Software Engineer",
		},
		{
			login: "M. Görkem Yiğit",
			avatar_url: "https://avatars.githubusercontent.com/u/85524625?v=4",
			html_url: "https://github.com/GorkemYigit",
			type: "Software Engineer",
		},
		{
			login: "Gizem Tuncer",
			avatar_url: "https://avatars.githubusercontent.com/u/97919652?v=4",
			html_url: "https://github.com/gizemtuncer7",
			type: "Software Engineer",
		},
		{
			login: "Buket Naz Zeren",
			avatar_url: "https://avatars.githubusercontent.com/u/84253467?v=4",
			html_url: "https://github.com/b-zeren",
			type: "Software Engineer",
		},
		{
			login: "Baran Yancı",
			avatar_url: "https://avatars.githubusercontent.com/u/73401941?v=4",
			html_url: "https://github.com/y4nci",
			type: "Software Engineer",
		},
		{
			login: "Baran Yancı",
			avatar_url: "https://avatars.githubusercontent.com/u/73401941?v=4",
			html_url: "https://github.com/y4nci",
			type: "Software Engineer",
		}
	];

	const repeatedData = Array.from({ length: 100 }, (_, i) => data[i % data.length]);

	console.log(repeatedData);

	return {
		contributors: repeatedData,
	};
};
