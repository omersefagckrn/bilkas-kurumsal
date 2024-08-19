import { FiDollarSign, FiPenTool, FiShare2 } from 'react-icons/fi';
import { LuCode2 } from 'react-icons/lu';
import { MdCampaign } from 'react-icons/md';

import OmerImage from '../assets/teams/omer.jpeg';
import BilgeImage from '../assets/teams/bilge.jpeg';
import EcemImage from '../assets/teams/ecem.jpeg';
import BaharImage from '../assets/teams/unknown_person.jpeg';

export const KURUMSAL_ADRES = 'Dumankaya Esentepe, S2, Milangaz Cd. No:75, 34870 Kartal/İstanbul';
export const KURUMSAL_EMAIL = 'info@bilkas.com';
export const KURUMSAL_NUMARA = '+90 531 297 1288';

export const KURUMSAL_INSTAGRAM = 'https://www.instagram.com/bilkasdijital?igsh=NHZwMGM5a251ODF4&utm_source=qr';
export const KURUMSAL_TIKTOK = 'https://www.tiktok.com/@bilkasdijital?_t=8ovUHHMqals&_r=1';
export const KURUMSAL_LINKEDIN = 'https://www.linkedin.com/company/bilkas-dijital-reklam-ajans%C4%B1/';
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
		id: '1',
		name: 'Bahar Karaman',
		position: 'Founder & CEO',
		image: BaharImage
	},
	{
		id: 2,
		name: 'Bilge Kızmaz',
		position: 'Digital Marketing Manager',
		image: BilgeImage
	},
	{
		id: 3,
		name: 'Ömer Sefa Güçkıran',
		position: 'Software Developer',
		image: OmerImage
	},
	{
		id: 4,
		name: 'Serra Ecem Güzey',
		position: 'Creative Director',
		image: EcemImage
	}
];

export const categories = ['Tümü', 'Mali Müşavirlik Danışmanlığı', 'Özel Yazılım Çözümleri', 'Sosyal Medya Yönetimi', 'Tasarım', 'Dijital Pazarlama'];

export const works = [
	{
		id: 1,
		title: 'Kurumsal Web Sitesinde Olması Gerekenler',
		category: 'Özel Yazılım Çözümleri',
		image: 'https://img.freepik.com/free-photo/caucasian-businessman-office-shoot_53876-23471.jpg?t=st=1724106043~exp=1724109643~hmac=40ed9e4444c1c82e33c2a874afee90a4450579862b2e15d2eb46040c93e7f8cc&w=2000',
		description: `
### Mobil Uyumlu Tasarım

Mobil uyumluluk, bir kurumsal web sitesi için artık bir seçenek değil, zorunluluk haline geldi. Mobil kullanıcıların sayısı hızla artarken, bu kitleyi göz ardı etmek, marka bilinirliği ve kullanıcı deneyimi açısından büyük riskler doğurabilir. Mobil cihazlarda kullanımı zor veya imkânsız olan bir web sitesi, potansiyel müşterilerinizi kaybetmenize ve kurumsal imajınıza zarar vermenize neden olabilir. Bizimle çalışarak tamamen mobil uyumlu ve kullanıcı dostu bir web sitesine sahip olabilirsiniz; böylece müşterilerinizin her platformda size kolayca ulaşmasını sağlarsınız.

### Özgün ve Sektörel İçerikler

Web sitenizin, sektörünüzle alakalı ve özgün içeriklerle dolu olması, Google'ın SEO kriterlerine göre arama motorlarında üst sıralarda yer almanızı sağlar. Kaliteli ve kullanıcı odaklı içerikler, hem ziyaretçi trafiğinizi artırır hem de şirketinizin prestijini ve popülerliğini pekiştirir. Markanızın kimliğini ve hedef kitlenizin beklentilerini dikkate alarak, size özel içerik stratejileri oluşturuyoruz. Blog sayfalarından hakkımızda ve iletişim bölümlerine kadar tüm içeriklerinizi optimize ediyoruz.

### Görsel, Video ve Medya Kullanımı

Web sitenizde kullanacağınız görsel, video ve diğer medya içerikleri, kurumsal kimliğinizi yansıtmalı ve özgün olmalıdır. Görseller, kullanıcıların dikkatini çeken ilk unsurlardan biridir ve web sitesinde kalma süresini doğrudan etkileyebilir. Doğru ve etkili görsel seçimleriyle, markanıza artı puan kazandıracak bir web sitesine sahip olabilirsiniz. Sosyal medya platformlarıyla entegre çalışan bir web sitesi için etkili görsel optimizasyonları sunuyoruz.

### Kurumsal Web Sitesinin Avantajları

Kurumsal bir web sitesi, şirketinizin dijital dünyada nasıl algılandığını doğrudan etkiler. İyi tasarlanmış bir web sitesi, şirketinizin hizmetlerini ve kurumsal imajını en iyi şekilde yansıtarak, müşterilerinizle aranızda güçlü bağlar kurmanıza yardımcı olur. Size özel çözümlerle kurumsal web sitenizi en yüksek standartlarda tasarlıyor ve optimize ediyoruz. SEO ile desteklenen bir web sitesi, arama motorlarında üst sıralara çıkarak, ziyaretçi sayınızı artırır ve rakiplerinizin önüne geçmenizi sağlar.

### Kurumsal Web Sitesi Nasıl Oluşturulur?

Kurumsal bir web sitesi oluşturmak, temel web tasarım, programlama, ara yüz kodlama ve veri girişi gibi adımları içerir. Bu süreçlerin profesyonel ellerde yapılması, markanızın dijital dünyada doğru bir şekilde temsil edilmesini sağlar. Web sitenizin sorunsuz çalışabilmesi için düzenli bakım ve onarım hizmetleri sunuyoruz. Web tasarım ve geliştirme sürecinde sizinle iş birliği yaparak, markanızın ihtiyaçlarına en uygun çözümleri sunuyoruz.

### Kurumsal Web Sitesi Fiyatları

Kurumsal web sitesi fiyatları, şirketin ihtiyaçlarına ve sektörüne göre değişiklik gösterir. Şirketinize özel web sitesi çözümleri sunuyor ve ihtiyaçlarınıza en uygun fiyatlandırmayı yapıyoruz. Hazır tasarımlar yerine, tamamen size özel bir web sitesi tasarımı ile markanızı en iyi şekilde temsil etmenizi sağlıyoruz.

### Web Sitesi Kurma Araçları

Web sitesi kurmak, temel bilgisayar becerilerinden, HTML, CSS ve JavaScript gibi web teknolojilerine kadar birçok unsuru içerir. Alan adı seçiminden barındırma hizmetine, içerik yönetim sistemi (CMS) kurulumundan görsel optimizasyonuna kadar tüm süreçleri sizin için yönetiyoruz. Profesyonel ekibimiz, web sitenizin en güncel teknolojilerle donatılmasını sağlıyor.

### Yayın Sonrası Web Sitesi Bakımı

Web sitesinin yayınlanması, sürecin sonu değil, başlangıcıdır. Düzenli bakım, web sitenizin sorunsuz çalışmasını sağlar. Web sitenizin düzenli bakımını üstleniyor, yıllık, 3 aylık, aylık ve haftalık periyotlarla gerekli kontrolleri yapıyoruz. Kullanıcı testi, güvenlik güncellemeleri ve broken link düzenlemeleri gibi işlemlerle web sitenizin performansını her zaman en üst seviyede tutuyoruz. Bilkas Dijital Reklam Ajansı olarak, web sitenizin yayın sonrası bakım süreçlerinde de size tam destek sağlıyoruz; böylece dijital dünyada her zaman bir adım önde olabilirsiniz.

`
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
			'Environment deployment branches and secrets'
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
