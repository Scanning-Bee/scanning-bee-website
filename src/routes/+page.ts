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
			login: "Mehmet Görkem Yiğit",
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
			login: "Assoc. Prof. Hande Alemdar",
			avatar_url: "https://user.ceng.metu.edu.tr/~alemdar/authors/admin/avatar_hu535661bce2c742bf7a0f6a055ac0b6d1_797901_250x250_fill_q90_lanczos_center.jpg",
			html_url: "http://www.ceng.metu.edu.tr/~alemdar",
			type: "Advisor",
		},
		{
			login: "Assoc. Prof. Erol Şahin",
			avatar_url: "https://avesis.metu.edu.tr/user/image/1792",
			html_url: "https://kovan.ceng.metu.edu.tr/~erol/",
			type: "Advisor",
		}
	];

	const repeatedData = Array.from({ length: 100 }, (_, i) => data[i % data.length]);

	return {
		contributors: repeatedData,
	};
};
