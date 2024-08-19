import { FiDollarSign, FiPenTool, FiShare2 } from 'react-icons/fi';
import { LuCode2 } from 'react-icons/lu';
import { MdCampaign } from 'react-icons/md';

export const KURUMSAL_ADRES = 'Adnan Menderes Blv. No:23 D:a, 34893 Pendik/İstanbul';
export const KURUMSAL_EMAIL = 'info@bilkas.com';
export const KURUMSAL_NUMARA = '+90 531 297 1288';

export const KURUMSAL_INSTAGRAM = 'https://www.instagram.com/bilkasdijital?igsh=NHZwMGM5a251ODF4&utm_source=qr';
export const KURUMSAL_TIKTOK = 'https://www.tiktok.com/@bilkasdijital?_t=8ovUHHMqals&_r=1';
export const KURUMSAL_LINKEDIN = 'https://www.linkedin.com';
export const KURUMSAL_FACEBOOK = 'https://www.facebook.com/share/dQeX4d2eo4mSP32t/?mibextid=LQQJ4d';

export const NAV_MENU_ITEMS = (t) => {
	return [
		{ href: '#banner', title: t('nav.home') },
		{ href: '#evaluation', title: t('nav.about') },
		{ href: '#pricing', title: t('nav.pricing') },
		{ href: '#solutions', title: t('nav.blog') },
		{ href: '#services', title: t('nav.services') },
		{ href: '#teams', title: t('nav.team') },
		{ href: '#contact', title: t('nav.contact') }
	];
};

export const EVALUATION_DATA = (t) => [
	{
		title: t('evaluation.title_1'),
		description: t('evaluation.description_1'),
		details: t('evaluation.details_1'),
		icon: <FiDollarSign size={30} className='text-primary' />
	},
	{
		title: t('evaluation.title_2'),
		description: t('evaluation.description_2'),
		details: t('evaluation.details_2'),
		icon: <LuCode2 size={30} className='text-primary' />
	},
	{
		title: t('evaluation.title_3'),
		description: t('evaluation.description_3'),
		details: t('evaluation.details_3'),
		icon: <FiShare2 size={30} className='text-primary' />
	},
	{
		title: t('evaluation.title_4'),
		description: t('evaluation.description_4'),
		details: t('evaluation.details_4'),
		icon: <FiPenTool size={30} className='text-primary' />
	},
	{
		title: t('evaluation.title_5'),
		description: t('evaluation.description_5'),
		details: t('evaluation.details_5'),
		icon: <MdCampaign size={30} className='text-primary' />
	}
];

export const SERVICES_DATA = (t) => [
	{
		title: t('services.title_1'),
		description: t('services.description_1')
	},
	{
		title: t('services.title_2'),
		description: t('services.description_2')
	},
	{
		title: t('services.title_3'),
		description: t('services.description_3')
	},
	{
		title: t('services.title_4'),
		description: t('services.description_4')
	},
	{
		title: t('services.title_5'),
		description: t('services.description_5')
	}
];

export const KURUMSAL_LOGO = [
	{
		id: 1,
		src: 'https://www.tanyildizisigorta.com/wp-content/uploads/tanyildizi_logo.svg',
		alt: 'Tanyıldızı Sigorta',
		isWhite: false
	},
	{
		id: 2,
		src: 'https://kutaspack.com.tr/wp-content/uploads/2023/08/kutas-logo-beyaz-new.svg',
		alt: 'Kutaş Pack',
		isWhite: true
	},
	{
		id: 3,
		src: 'https://static.ticimax.cloud/55900//uploads/editoruploads/logo-new.png',
		alt: 'Ticimax',
		isWhite: false
	},
	{
		id: 4,
		src: 'https://www.kuveytturk.com.tr/_assets/svg/logo.svg',
		alt: 'Kuveyt Türk',
		isWhite: false
	},
	{
		id: 5,
		src: 'https://www.temkurye.com/assets/svg/app-logo.svg',
		alt: 'Tem Kurye',
		isWhite: true
	}
];

export const teams = [
	{
		id: 1,
		name: 'Ahmet Yılmaz',
		position: 'CEO',
		image: 'https://randomuser.me/api/portraits/men/1.jpg'
	},
	{
		id: 2,
		name: 'Ayşe Kaya',
		position: 'CTO',
		image: 'https://randomuser.me/api/portraits/women/2.jpg'
	},
	{
		id: 3,
		name: 'Mehmet Öz',
		position: 'Lead Developer',
		image: 'https://randomuser.me/api/portraits/men/3.jpg'
	},
	{
		id: 4,
		name: 'Elif Demir',
		position: 'Marketing Manager',
		image: 'https://randomuser.me/api/portraits/women/4.jpg'
	}
];

export const categories = ['Tümü', 'Dijital Pazarlama', 'Sosyal Medya', 'Yazılım ve Tasarım'];

export const works = [
	{
		id: 1,
		title: 'Web Tasarımı',
		category: 'Yazılım ve Tasarım',
		image: 'https://picsum.photos/200/300?random=1',
		description: 'Web tasarımı, bir web sitesinin kullanıcı deneyimini ve kullanıcı ara yüzünü planlama, düzenleme ve kodlama sürecidir. Web tasarımı, grafik tasarım, kullanıcı deneyimi tasarımı, ve ara yüz tasarımı gibi çeşitli disiplinlerin birleşiminden oluşur. Web tasarımcıları, kullanıcıların web sitesiyle etkileşim kurarken olumlu bir deneyim yaşamalarını sağlamak için renk paletleri, yazı tipleri, düzenler ve diğer görsel unsurlar kullanarak estetik ve işlevsel web siteleri yaratırlar. Modern web tasarımı, mobil cihazlar ve masaüstü bilgisayarlar arasında uyumlu çalışacak şekilde responsive (duyarlı) tasarım tekniklerini kullanarak gerçekleştirilir.'
	},
	{
		id: 2,
		title: 'Sosyal Medya Yönetimi',
		category: 'Sosyal Medya',
		image: 'https://picsum.photos/200/300?random=2',
		description: 'Sosyal medya yönetimi, bir işletmenin sosyal medya platformlarında varlığını oluşturma, planlama, uygulama ve izleme sürecidir. Bu süreç, sosyal medya hesaplarının günlük yönetimini, içerik oluşturma ve paylaşma, takipçi etkileşimi, marka farkındalığını artırma ve sosyal medya kampanyalarının performansını ölçme gibi çeşitli görevleri içerir. Sosyal medya yöneticileri, marka imajını korurken hedef kitle ile anlamlı ilişkiler kurmak için stratejik içerik planları oluştururlar. Ayrıca, sosyal medya platformlarının algoritmalarını ve en iyi uygulamalarını anlamak, sosyal medya yönetiminin önemli bir parçasıdır.'
	},
	{
		id: 3,
		title: 'SEO',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200/300?random=3',
		description: 'Arama Motoru Optimizasyonu (SEO), bir web sitesinin arama motoru sonuç sayfalarında (SERP) daha üst sıralarda yer almasını sağlamak amacıyla yapılan çalışmalardır. SEO, hem teknik hem de içerik yönlerini kapsayan geniş bir alandır. Teknik SEO, site hızı, mobil uyumluluk, site yapısı ve güvenlik gibi unsurları içerirken, içerik SEO, anahtar kelime araştırması, kaliteli içerik oluşturma ve geri bağlantı (backlink) oluşturma gibi faaliyetleri içerir. SEO çalışmaları, arama motorlarının algoritmalarını anlama ve bu algoritmaların gereksinimlerine uygun olarak web sitesini optimize etme sürecidir.'
	},
	{
		id: 4,
		title: 'E-Ticaret Yönetimi',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200/300?random=4',
		description: 'E-ticaret yönetimi, bir çevrimiçi mağazanın tüm operasyonlarını yönetme sürecidir. Bu, ürün listeleme, stok yönetimi, sipariş işleme, müşteri hizmetleri ve pazarlama stratejileri gibi çeşitli görevleri içerir. E-ticaret yöneticileri, müşteri deneyimini optimize etmek için kullanıcı dostu bir web sitesi ve sorunsuz bir ödeme süreci sağlarlar. Ayrıca, satışları artırmak için çeşitli dijital pazarlama taktiklerini kullanarak müşteri trafiğini ve dönüşüm oranlarını artırırlar. E-ticaret yönetimi, sürekli olarak veri analizi yaparak performansı izlemeyi ve iş stratejilerini buna göre ayarlamayı gerektirir.'
	},
	{
		id: 5,
		title: 'Mobil Uygulama Geliştirme',
		category: 'Yazılım ve Tasarım',
		image: 'https://picsum.photos/200/300?random=5',
		description: 'Mobil uygulama geliştirme, iOS ve Android gibi mobil platformlarda çalışan yazılımların tasarlanması ve oluşturulması sürecidir. Bu süreç, kullanıcı ihtiyaçlarını anlamaktan, uygulamanın arayüz tasarımına ve işlevselliğine kadar birçok aşamayı içerir. Mobil uygulama geliştiricileri, kullanıcı dostu ve performanslı uygulamalar oluşturmak için programlama dillerini (Swift, Kotlin, Java) ve mobil geliştirme araçlarını (Xcode, Android Studio) kullanırlar. Ayrıca, uygulamanın App Store ve Google Play Store gibi platformlarda yayınlanması ve kullanıcı geri bildirimlerine göre güncellemeler yapılması da bu sürecin bir parçasıdır.'
	},
	{
		id: 6,
		title: 'İçerik Pazarlama',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200/300?random=6',
		description: 'İçerik pazarlama, hedef kitleyi çekmek ve onlarla etkileşim kurmak amacıyla değerli, alakalı ve tutarlı içerik oluşturma ve dağıtma stratejisidir. Bu strateji, blog yazıları, videolar, infografikler, podcastler ve sosyal medya gönderileri gibi çeşitli içerik türlerini içerir. İçerik pazarlama, marka bilinirliğini artırmak, potansiyel müşterilerle ilişkiler kurmak ve nihayetinde satışları artırmak için kullanılır. Başarılı içerik pazarlama, hedef kitleyi derinlemesine anlamayı ve onların ihtiyaçlarına yönelik çözümler sunmayı gerektirir.'
	}
];

export const plans = [
	{
		name: 'Premium',
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
