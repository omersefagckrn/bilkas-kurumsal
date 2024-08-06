export const NAV_MENU_ITEMS = [
	{ href: '#banner', title: 'Ana Sayfa' },
	{ href: '#evaluation', title: 'Hakkımızda' },
	{ href: '#pricing', title: 'Ücretlendirme' },
	{ href: '#solutions', title: 'Blog' },
	{ href: '#services', title: 'Hizmetlerimiz' },
	{ href: '#contact', title: 'Bize Ulaş' }
];

export const KURUMSAL_ADRES = 'Adnan Menderes Blv. No:23 D:a, 34893 Pendik/İstanbul';
export const KURUMSAL_EMAIL = 'info@etaelbiseleri.com';
export const KURUMSAL_NUMARA = '+90 212 345 6789';

export const KURUMSAL_INSTAGRAM = 'https://www.instagram.com';
export const KURUMSAL_TIKTOK = 'https://www.tiktok.com';
export const KURUMSAL_LINKEDIN = 'https://www.linkedin.com';

export const categories = ['Tümü', 'Dijital Pazarlama', 'Sosyal Medya', 'Yazılım ve Tasarım'];

export const works = [
	{
		id: 1,
		title: 'Web Tasarımı',
		category: 'Yazılım ve Tasarım',
		image: 'https://picsum.photos/200',
		description: 'Web sitesi tasarımı ile ilgili çalışma.'
	},
	{
		id: 2,
		title: 'Sosyal Medya Yönetimi',
		category: 'Sosyal Medya',
		image: 'https://picsum.photos/200',
		description: 'Sosyal medya yönetimi ile ilgili çalışma.'
	},
	{
		id: 3,
		title: 'Monitoring',
		category: 'Sosyal Medya',
		image: 'https://picsum.photos/200',
		description: 'Monitoring ile ilgili çalışma.'
	},
	{
		id: 4,
		title: 'SEO',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200',
		description: 'SEO çalışmaları.'
	},
	{
		id: 5,
		title: 'Reklam Yönetimi',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200',
		description: 'Reklam yönetimi çalışmaları.'
	}
];

export const services = [
	{
		title: 'Dijital Pazarlama',
		description: 'Dijital pazarlama, ürün veya hizmetlerin dijital kanallar aracılığıyla tanıtımını ve pazarlamasını yapmak için kullanılan bir dizi strateji ve taktikleri kapsayan bir pazarlama türüdür. Dijital pazarlama, internet, mobil cihazlar, dijital ekranlar ve diğer dijital teknolojiler gibi dijital ortamlarda gerçekleştirilir.'
	},
	{
		title: 'Sosyal Medya Yönetimi',
		description: 'İşletmelerin sosyal medya hesaplarının etkili şekilde yürütülmesi, etkinlik ve aktivitelerinin etkileşim bazlı planlaması ve gelişim odaklı optimize etmek üzere izlenmesi yaklaşımıyla yönetilmesidir.'
	},
	{
		title: 'Web Tasarım',
		description: 'Web sitelerinin kullanıcı dostu görünümünün, etkin fonksiyonelliğinin ve ölçümlemeyi mümkün kılan tasarımının oluşturulma sürecidir.'
	},
	{
		title: 'Kreatif Tasarım',
		description: 'Estetik bir yaklaşım ile hedef kitlenin dikkatini çekerken, işlevselliği ile markanın mesajını vurgulayan ve etkileşimi yüksek tasarımlar oluşturmayı amaçlayan sanatsal bir süreçtir.'
	},
	{
		title: 'Fotoğraf ve Video Çekimi',
		description: 'Şirketlerin ürün ya da hizmetlerinin talep alacak şekilde tanıtılması ve istenilen mecralarda kullanılmak üzere optimize edilmesi üzerine gelişen bir hizmet sürecidir.'
	}
];

export const plans = [
	{
		name: 'Free',
		price: '$0',
		period: 'per user/month',
		description: 'The basics for individuals and organizations',
		features: [
			'Unlimited public/private repositories',
			'Automatic security and version updates',
			'2,000 CI/CD minutes/month Free for public repositories',
			'500MB of Packages storage Free for public repositories',
			'Issues & Projects',
			'Community support'
		],
		buttonText: 'Create a free organization',
		buttonLink: '#'
	},
	{
		name: 'Team',
		price: '$4',
		period: 'per user/month',
		description: 'Advanced collaboration for individuals and organizations',
		features: [
			'Everything included in Free, plus...',
			'Access to GitHub Codespaces',
			'Protected branches',
			'Multiple reviewers in pull requests',
			'Draft pull requests',
			'Code owners',
			'Required reviewers',
			'Pages and Wikis',
			'Environment deployment branches and secrets',
			'3,000 CI/CD minutes/month Free for public repositories',
			'2GB of Packages storage Free for public repositories',
			'Web-based support'
		],
		buttonText: 'Continue with Team',
		buttonLink: '#',
		recommended: true
	},
	{
		name: 'Enterprise',
		price: '$21',
		period: 'per user/month',
		description: 'Security, compliance, and flexible deployment',
		features: [
			'Everything included in Team, plus...',
			'Enterprise Managed Users',
			'User provisioning through SCIM',
			'Enterprise Account to centrally manage multiple organizations',
			'Environment protection rules',
			'Repository rules',
			'Audit Log API',
			'SOC1, SOC2, type 2 reports annually',
			'FedRAMP Tailored Authority to Operate (ATO)',
			'SAML single sign-on',
			'Advanced auditing',
			'GitHub Connect',
			'50,000 CI/CD minutes/month Free for public repositories',
			'50GB of Packages storage Free for public repositories'
		],
		buttonText: 'Start a free trial',
		buttonLink: '#'
	}
];
