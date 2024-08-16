import { FiDollarSign, FiPenTool, FiShare2 } from 'react-icons/fi';
import { LuCode2 } from 'react-icons/lu';
import { MdCampaign } from 'react-icons/md';

export const NAV_MENU_ITEMS = [
	{ href: '#banner', title: 'Ana Sayfa' },
	{ href: '#evaluation', title: 'Hakkımızda' },
	{ href: '#pricing', title: 'Ücretlendirme' },
	{ href: '#solutions', title: 'Blog' },
	{ href: '#services', title: 'Hizmetlerimiz' },
	{ href: '#teams', title: 'Ekibimiz' },
	{ href: '#contact', title: 'Bize Ulaş' }
];

export const EvaluationData = [
	{
		title: 'Mali Müşavirlik Danışmanlığı',
		description: 'Şirketinizi kurarken bizlerden alacağınız bilgi ve yönlendirme desteği ile sizlerde sorunsuz bir iş hayatına başlayın. Bu hizmetlerimizle sizlerin en başta karşılaşacağı sorunları çözüme ulaştırıyoruz.',
		detail: 'anan',
		icon: <FiDollarSign size={30} className='text-primary' />
	},
	{
		title: 'Özel Yazılım Çözümleri',
		description: 'İşletmenizin ihtiyaçlarına ve bütçenize uygun, mobil uyumlu, çoklu dil destekli ve interaktif özelliklerle donatılmış, tamamen animasyonlu bir web sitesi tasarımı sunuyoruz. Hedeflerinize en iyi şekilde ulaşmanızı sağlayacak çözümler üretiyoruz.',
		detail: 'anan',
		icon: <LuCode2 size={30} className='text-primary' />
	},
	{
		title: 'Sosyal Medya Yönetimi',
		description: 'Markanızı dijital dünyada güçlendirin. Sosyal medya hesaplarınızın profesyonel yönetimi ile hedef kitlenizle etkileşim kurun ve marka bilinirliğinizi artırın.',
		detail: 'anan',
		icon: <FiShare2 size={30} className='text-primary' />
	},
	{
		title: 'Tasarım',
		description: 'Estetik ve işlevsel tasarımlar ile markanızı görsel olarak öne çıkarıyoruz. Logo tasarımından, kurumsal içerik tasarımlarına, web arayüzlerine kadar her alanda yaratıcı çözümler sunuyoruz.',
		detail: 'anan',
		icon: <FiPenTool size={30} className='text-primary' />
	},
	{
		title: 'Dijital Pazarlama',
		description: 'Ürün ve hizmetlerinizi dijital dünyada etkin bir şekilde tanıtıyoruz. SEO, SEM ve hedefli dijital reklam kampanyaları ile satışlarınızı artırın ve markanızı büyütün.',
		detail: 'anan',
		icon: <MdCampaign size={30} className='text-primary' />
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

export const KURUMSAL_ADRES = 'Adnan Menderes Blv. No:23 D:a, 34893 Pendik/İstanbul';
export const KURUMSAL_EMAIL = 'info@bilkas.com';
export const KURUMSAL_NUMARA = '+90 531 297 1288';

export const KURUMSAL_INSTAGRAM = 'https://www.instagram.com/bilkasdijital?igsh=NHZwMGM5a251ODF4&utm_source=qr';
export const KURUMSAL_TIKTOK = 'https://www.tiktok.com/@bilkasdijital?_t=8ovUHHMqals&_r=1';
export const KURUMSAL_LINKEDIN = 'https://www.linkedin.com';
export const KURUMSAL_FACEBOOK = 'https://www.facebook.com';

export const categories = ['Tümü', 'Dijital Pazarlama', 'Sosyal Medya', 'Yazılım ve Tasarım'];

export const logos = [
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
	},
	{
		id: 7,
		title: 'Dijital Reklamcılık',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200/300?random=7',
		description: 'Dijital reklamcılık, çevrimiçi platformlarda reklam kampanyaları oluşturma ve yönetme sürecidir. Bu, Google Ads, Facebook Ads, Instagram Ads ve diğer dijital reklam platformlarını içerir. Dijital reklamcılar, hedef kitleyi belirlemek, reklam bütçesini yönetmek, reklam yaratıcılarını tasarlamak ve kampanya performansını izlemek gibi görevleri üstlenirler. Dijital reklamcılık, doğru mesajı doğru kişilere doğru zamanda ulaştırmak için veri analizi ve hedefleme tekniklerini kullanır. Etkili dijital reklamcılık, marka bilinirliğini artırmanın ve satışları artırmanın güçlü bir yoludur.'
	},
	{
		id: 8,
		title: 'Video Prodüksiyon',
		category: 'Yazılım ve Tasarım',
		image: 'https://picsum.photos/200/300?random=8',
		description: 'Video prodüksiyon, bir video projesinin konsept aşamasından tamamlanmasına kadar olan tüm süreçleri kapsar. Bu süreç, senaryo yazımı, çekim, kurgu, ses düzenleme ve görsel efektler gibi aşamaları içerir. Video prodüksiyon ekipleri, hedef kitleye etkili bir şekilde ulaşmak için yaratıcı ve teknik becerileri bir araya getirirler. Video prodüksiyon, markaların hikayelerini görsel ve işitsel olarak anlatmalarını sağlar ve pazarlama stratejilerinin önemli bir parçasıdır. Yüksek kaliteli videolar, izleyicinin ilgisini çekmek ve marka mesajını etkili bir şekilde iletmek için güçlü bir araçtır.'
	},
	{
		id: 9,
		title: 'E-posta Pazarlama',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200/300?random=9',
		description: 'E-posta pazarlama, mevcut ve potansiyel müşterilere e-posta yoluyla doğrudan iletişim kurma ve onlarla etkileşimde bulunma stratejisidir. Bu strateji, haber bültenleri, promosyon teklifleri, etkinlik davetiyeleri ve kişiselleştirilmiş mesajlar gibi çeşitli e-posta türlerini içerir. E-posta pazarlama, müşteri ilişkilerini güçlendirmek, marka sadakatini artırmak ve satışları teşvik etmek için kullanılır. Başarılı e-posta pazarlama, dikkatlice segmentasyon ve hedefleme yapmayı, etkileyici e-posta tasarımları oluşturmayı ve performansı izlemek için analiz araçlarını kullanmayı gerektirir.'
	},
	{
		id: 10,
		title: 'Veri Analitiği',
		category: 'Yazılım ve Tasarım',
		image: 'https://picsum.photos/200/300?random=10',
		description: 'Veri analitiği, iş süreçlerini iyileştirmek ve daha iyi kararlar almak için veri toplama, analiz etme ve yorumlama sürecidir. Veri analistleri, çeşitli veri kaynaklarından gelen bilgileri işleyerek, eğilimleri ve kalıpları belirler ve bu bilgileri iş stratejilerine dönüştürürler. Veri analitiği, büyük veri setlerini yönetmek ve analiz etmek için gelişmiş analitik araçlar ve teknikler kullanır. İşletmeler, veri analitiği sayesinde müşteri davranışlarını daha iyi anlayabilir, operasyonel verimliliği artırabilir ve rekabet avantajı elde edebilirler.'
	},
	{
		id: 11,
		title: 'Marka Yönetimi',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200/300?random=11',
		description: 'Marka yönetimi, bir markanın pazardaki konumunu oluşturma, sürdürme ve geliştirme sürecidir. Marka yöneticileri, marka kimliğini ve değerlerini tanımlayarak, hedef kitleyle duygusal bağ kuran stratejiler geliştirirler. Bu süreç, marka mesajları, görsel kimlik, müşteri deneyimi ve pazarlama iletişimleri gibi çeşitli unsurları içerir. Etkili marka yönetimi, markanın tutarlılığını sağlamak, müşteri sadakatini artırmak ve rekabet avantajı elde etmek için kritik öneme sahiptir. Marka yönetimi, marka itibarını koruyarak ve marka değerini artırarak uzun vadeli iş başarısına katkıda bulunur.'
	},
	{
		id: 12,
		title: 'Pazarlama Otomasyonu',
		category: 'Dijital Pazarlama',
		image: 'https://picsum.photos/200/300?random=12',
		description: 'Pazarlama otomasyonu, pazarlama süreçlerini ve kampanyalarını otomatikleştirmek için yazılım kullanma sürecidir. Bu süreç, müşteri segmentasyonu, kişiselleştirilmiş e-posta kampanyaları, sosyal medya yönetimi ve müşteri ilişki yönetimi gibi çeşitli pazarlama faaliyetlerini içerir. Pazarlama otomasyonu, pazarlama ekiplerinin daha verimli çalışmasını sağlar ve müşteri etkileşimlerini artırır. Ayrıca, pazarlama performansını izlemek ve analiz etmek için kapsamlı raporlama ve analitik araçlar sunar. Pazarlama otomasyonu, müşteri yolculuğunu optimize ederek ve potansiyel müşterileri satışa dönüştürerek iş büyümesine katkıda bulunur.'
	}
];

export const services = [
	{
		title: 'Mali Müşavirlik Danışmanlığı',
		description: 'Şirketinizi kurarken sunduğumuz kapsamlı danışmanlık ve rehberlik hizmetleriyle, iş hayatınıza sorunsuz bir başlangıç yapmanızı sağlıyoruz. Vergi, yasal süreçler, finansal planlama ve operasyonel yapılandırma gibi konularda uzman ekibimizle yanınızdayız. Bu hizmetlerimizle, karşılaşabileceğiniz potansiyel sorunları önceden tespit ederek, çözüm odaklı stratejiler geliştiriyoruz ve işinizi güçlü bir temelle kurmanıza yardımcı oluyoruz.'
	},
	{
		title: 'Özel Yazılım Çözümleri',
		description: 'İşletmenizin büyüme yolculuğunu hızlandırmak ve dijital dönüşümünü desteklemek için, size özel yazılım çözümleri geliştiriyoruz. Operasyonel süreçlerinizi optimize eden, verimliliği artıran ve tamamen işinize özgü olarak tasarlanmış yenilikçi yazılımlar sunarak, rekabette öne çıkmanızı sağlıyoruz.'
	},
	{
		title: 'Sosyal Medya Yönetimi',
		description: 'Markanızın sosyal medya platformlarında etkili bir şekilde temsil edilmesini sağlıyor, içerik yönetimi, etkileşim arttırma ve büyüme odaklı stratejiler geliştiriyoruz. Hedef kitlenizle güçlü bir bağ kurmanıza yardımcı oluyoruz.'
	},
	{
		title: 'Tasarım',
		description: 'Markanızı en iyi şekilde temsil eden, estetik ve kullanımı kolay tasarımlar sunuyoruz. Web tasarımından grafik tasarıma kadar, markanızın her alanda güçlü bir izlenim bırakmasını sağlayacak yaratıcı çözümler sunmaktayız.'
	},
	{
		title: 'Dijital Pazarlama',
		description: 'SEO, SEM ve hedefe yönelik reklam stratejileriyle, ürün ve hizmetlerinizin dijital dünyada daha geniş kitlelere ulaşmasını sağlıyoruz. Dijital platformlarda markanızı güçlendirmek ve etkili reklam kampanyaları ile satışlarınızı artırmak için kapsamlı dijital pazarlama çözümleri sunuyoruz.'
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
