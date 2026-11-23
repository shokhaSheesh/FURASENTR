/**
 * FURA SENTR: ALL EDITABLE CONTENT LIVES IN THIS FILE.
 *
 * - `settings`: store links, contacts, photos and screenshots (shared by all languages).
 * - `ru` and `uz`: every text on the page. Keep both in the same structure.
 *
 * A value of `null` is a PLACEHOLDER: the page shows a clearly marked stub until it is filled.
 * To replace a category photo, put the file in `src/content/photos/` and write its name below.
 */

export const settings = {
  /** Shows blue labels on backend-driven fields. Set to false before launch. */
  showDynamicLabels: true,

  stores: {
    googlePlay: 'https://play.google.com/store/apps/details?id=io.udevs.furasentr_mobile',
    /** PLACEHOLDER: full App Store link, e.g. https://apps.apple.com/app/id0000000000 */
    appStore: null as string | null,
  },

  /** PLACEHOLDER: web login address. While empty, «Войти» leads to the app download section. */
  loginUrl: null as string | null,

  contacts: {
    /** PLACEHOLDERS: phone '+998...', telegram 'https://t.me/...', email 'name@domain' */
    dealer: { phone: null as string | null, telegram: null as string | null, email: null as string | null },
    support: { phone: null as string | null, telegram: null as string | null, email: null as string | null },
  },

  /** File names from `src/content/photos/`. `null` shows a marked placeholder. */
  categoryPhotos: {
    body: null as string | null,
    tires: null as string | null,
    batteries: null as string | null,
    brakes: null as string | null,
    engine: null as string | null,
    suspension: null as string | null,
  },

  /** File names from `src/content/screens/`. `null` shows a marked placeholder. */
  screens: {
    marketplace: 'marketplace.webp' as string | null,
    trucks: 'trucks.webp' as string | null,
    jobs: null as string | null,
    fleet: 'fleet.webp' as string | null,
  },
};

export type CategoryId = keyof typeof settings.categoryPhotos;
export type BlockId = 'marketplace' | 'trucks' | 'jobs' | 'fleet';

export const ru = {
  lang: 'ru',
  meta: {
    title: 'Fura Sentr — единая платформа для грузового бизнеса',
    description:
      'Запчасти, грузовики, работа и управление автопарком в одном приложении. Платформа для грузового бизнеса в Узбекистане.',
  },
  a11y: {
    skip: 'Перейти к содержанию',
    home: 'Fura Sentr — на главную',
    mainNav: 'Основное меню',
    blockNav: 'Разделы платформы',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    stores: 'Скачать приложение',
    logoAlt: 'Логотип Fura Sentr',
    truckAlt: 'Белый магистральный тягач с полуприцепом',
    newTab: '(откроется в новой вкладке)',
    language: 'Язык',
  },
  nav: [
    { label: 'Главная', href: '#top' },
    { label: 'О платформе', href: '#about' },
    { label: 'Возможности', href: '#marketplace' },
    { label: 'Для бизнеса', href: '#dealer' },
    { label: 'Поддержка', href: '#support' },
  ],
  download: 'Скачать приложение',
  login: 'Войти',
  placeholder: {
    tag: 'Заполнить',
    photo: 'Фото: заменить',
    screen: 'Скриншот: добавить',
    appStore: 'ссылка',
    phone: 'Телефон',
    telegram: 'Telegram',
    email: 'E-mail',
  },
  store: {
    googleTop: 'Скачать в',
    googleName: 'Google Play',
    appleTop: 'Загрузить в',
    appleName: 'App Store',
  },
  menu: {
    marketplace: { title: 'Маркетплейс', text: 'Онлайн-покупка запчастей' },
    trucks: { title: 'Грузовики', text: 'Продажа и покупка грузовиков' },
    jobs: { title: 'Работа', text: 'Поиск работы и водителей' },
    fleet: { title: 'Автопарк', text: 'Управление от 1 до 200 машин' },
    dealer: { title: 'Стать дилером' },
  },
  hero: {
    wordmark: 'FURA SENTR',
    title: ['единая платформа', 'для грузового бизнеса'],
    subtitle: 'Запчасти, грузовики, работа и управление автопарком — всё в одном месте.',
    cta: 'Перейти в Маркетплейс',
  },
  trust: [
    { icon: 'shield', text: ['Проверенные', 'поставщики'] },
    { icon: 'box', text: ['Широкий', 'ассортимент'] },
    { icon: 'fast', text: ['Быстрая', 'доставка'] },
    { icon: 'headset', text: ['Поддержка', '24/7'] },
  ],
  about: {
    label: 'О платформе',
    text: 'Один грузовик или целый парк — Fura Sentr упрощает бизнес-сторону работы: запчасти, техника, кадры и учёт собраны в одном приложении.',
  },
  whoLabel: 'Для кого',
  blocks: {
    marketplace: {
      index: '01',
      label: 'Маркетплейс',
      title: 'Запчасти для грузовика — онлайн',
      text: 'Каталог оригинальных и аналоговых запчастей от проверенных поставщиков. Найдите деталь по марке и модели или просто по фотографии.',
      who: 'Владельцы грузовиков, автопарки, СТО и механики.',
      benefits: [
        { title: 'Фильтр по марке и модели', text: 'Показываем детали для вашей техники.' },
        { title: 'Поиск по фото', text: 'Сфотографируйте деталь и найдите нужную.' },
        { title: 'Оригинал и аналоги', text: 'Выбирайте вариант под задачу и бюджет.' },
        { title: 'Заказ в приложении', text: 'От поиска до покупки — на одном экране.' },
      ],
      screenAlt: 'Главный экран магазина запчастей в приложении Fura Sentr',
      cta: 'Купить запчасти в приложении',
      categoriesTitle: 'Популярные категории',
    },
    trucks: {
      index: '02',
      label: 'Грузовики',
      title: 'Купить или продать грузовик',
      text: 'Специализированная площадка для тягачей и прицепов. Разместите объявление или найдите технику среди предложений частных продавцов и компаний.',
      who: 'Перевозчики, частные продавцы и компании, обновляющие парк.',
      benefits: [
        { title: 'Тягачи и прицепы', text: 'Продавайте по отдельности или комплектом.' },
        { title: 'Объявление по шагам', text: 'Понятная форма прямо в приложении.' },
        { title: 'Все ведущие марки', text: 'От европейских до китайских и российских.' },
      ],
      brandsTitle: 'Марки',
      brands: ['Mercedes-Benz', 'MAN', 'DAF', 'Volvo', 'Iveco', 'Scania', 'Камаз', 'Renault', 'МАЗ', 'Shacman', 'FAW', 'Hino'],
      screenAlt: 'Экран подачи объявления о продаже тягача или прицепа',
      cta: 'Разместить объявление',
    },
    jobs: {
      index: '03',
      label: 'Работа',
      title: 'Водители и работодатели — на одной площадке',
      text: 'Раздел для тех, кто ищет работу в грузоперевозках, и для компаний, которым нужны водители.',
      who: 'Водители и транспортные компании.',
      audiences: [
        {
          title: 'Я ищу работу',
          benefits: ['Вакансии в грузовом бизнесе', 'Профиль водителя в приложении', 'Прямая связь с работодателем'],
        },
        {
          title: 'Я ищу водителя',
          benefits: ['Публикация вакансии', 'Поиск среди водителей', 'Отклики в одном месте'],
        },
      ],
      screenAlt: 'Экран раздела «Работа» в приложении Fura Sentr',
      cta: 'Найти работу или водителя',
    },
    fleet: {
      index: '04',
      label: 'Автопарк',
      title: 'Весь автопарк под контролем',
      text: 'Грузовики, водители, прицепы, заказы, документы и финансы — вместо таблиц, мессенджеров и бумаги.',
      who: 'Владельцы грузовиков и транспортные компании.',
      scale: { from: '1', to: '200', label: 'машин в одном управлении' },
      benefits: [
        { title: 'Карта в реальном времени', text: 'Где каждая машина и какой у неё статус.' },
        { title: 'Водители и прицепы', text: 'Привязка к машине и документы в карточке.' },
        { title: 'Заказы и рейсы', text: 'Создание, статусы и подтверждение.' },
        { title: 'Доходы и расходы', text: 'Топливо, обслуживание и штрафы по каждой машине.' },
      ],
      screenAlt: 'Экран «Гараж» с карточкой грузовика, расходами и доходами',
      cta: 'Подключить автопарк',
    },
  },
  categories: {
    body: { name: 'Кузовные запчасти', alt: 'Кузовные запчасти для грузовика' },
    tires: { name: 'Шины', alt: 'Шины для грузовика' },
    batteries: { name: 'Аккумуляторы', alt: 'Аккумуляторы для грузовика' },
    brakes: { name: 'Тормозная система', alt: 'Детали тормозной системы грузовика' },
    engine: { name: 'Двигатель', alt: 'Двигатель и запчасти к нему' },
    suspension: { name: 'Подвеска', alt: 'Детали подвески грузовика' },
  } as Record<CategoryId, { name: string; alt: string }>,
  dealer: {
    label: 'Для бизнеса',
    title: 'Стать дилером',
    text: 'Продаёте запчасти для грузовой техники? Разместите ассортимент в Fura Sentr и работайте с покупателями из грузового бизнеса.',
    benefits: [
      { title: 'Витрина в Маркетплейсе', text: 'Ваши товары в каталоге приложения.' },
      { title: 'Целевые покупатели', text: 'Владельцы грузовиков, автопарки и СТО.' },
      { title: 'Помощь с подключением', text: 'Подскажем, как начать продавать.' },
    ],
    contactsTitle: 'Свяжитесь с нами',
  },
  finalCta: {
    title: ['Весь грузовой бизнес', 'в одном приложении'],
    text: 'Скачайте Fura Sentr и начните с раздела, который нужен вам сегодня.',
  },
  footer: {
    about: 'Единая платформа для грузового бизнеса в Узбекистане.',
    sections: 'Разделы',
    support: 'Поддержка',
    supportNote: 'На связи 24/7',
    app: 'Приложение',
    copyright: '© 2026 Fura Sentr · udevs.io · Ташкент, Узбекистан',
  },
};

export type Content = typeof ru;

export const uz: Content = {
  lang: 'uz',
  meta: {
    title: 'Fura Sentr — yuk tashish biznesi uchun yagona platforma',
    description:
      'Ehtiyot qismlar, yuk mashinalari, ish va avtopark boshqaruvi bitta ilovada. Oʻzbekistondagi yuk tashish biznesi uchun platforma.',
  },
  a11y: {
    skip: 'Asosiy mazmunga oʻtish',
    home: 'Fura Sentr — bosh sahifaga',
    mainNav: 'Asosiy menyu',
    blockNav: 'Platforma boʻlimlari',
    openMenu: 'Menyuni ochish',
    closeMenu: 'Menyuni yopish',
    stores: 'Ilovani yuklab olish',
    logoAlt: 'Fura Sentr logotipi',
    truckAlt: 'Yarim tirkamali oq magistral tyagach',
    newTab: '(yangi varaqda ochiladi)',
    language: 'Til',
  },
  nav: [
    { label: 'Bosh sahifa', href: '#top' },
    { label: 'Platforma haqida', href: '#about' },
    { label: 'Imkoniyatlar', href: '#marketplace' },
    { label: 'Biznes uchun', href: '#dealer' },
    { label: 'Yordam', href: '#support' },
  ],
  download: 'Ilovani yuklab olish',
  login: 'Kirish',
  placeholder: {
    tag: 'Toʻldirish',
    photo: 'Rasm: almashtirish',
    screen: 'Skrinshot: qoʻshish',
    appStore: 'havola',
    phone: 'Telefon',
    telegram: 'Telegram',
    email: 'E-mail',
  },
  store: {
    googleTop: 'Yuklab olish',
    googleName: 'Google Play',
    appleTop: 'Yuklab olish',
    appleName: 'App Store',
  },
  menu: {
    marketplace: { title: 'Marketpleys', text: 'Ehtiyot qismlarni onlayn xarid qilish' },
    trucks: { title: 'Yuk mashinalari', text: 'Sotish va sotib olish' },
    jobs: { title: 'Ish', text: 'Ish va haydovchi qidirish' },
    fleet: { title: 'Avtopark', text: '1 tadan 200 tagacha mashina' },
    dealer: { title: 'Diler boʻlish' },
  },
  hero: {
    wordmark: 'FURA SENTR',
    title: ['yuk tashish biznesi', 'uchun yagona platforma'],
    subtitle: 'Ehtiyot qismlar, yuk mashinalari, ish va avtopark boshqaruvi — barchasi bir joyda.',
    cta: 'Marketpleysga oʻtish',
  },
  trust: [
    { icon: 'shield', text: ['Tekshirilgan', 'yetkazib beruvchilar'] },
    { icon: 'box', text: ['Keng', 'assortiment'] },
    { icon: 'fast', text: ['Tezkor', 'yetkazib berish'] },
    { icon: 'headset', text: ['24/7', 'yordam'] },
  ],
  about: {
    label: 'Platforma haqida',
    text: 'Bitta yuk mashinasi yoki butun avtopark — Fura Sentr ishning biznes tomonini osonlashtiradi: ehtiyot qismlar, texnika, kadrlar va hisob-kitob bitta ilovada jamlangan.',
  },
  whoLabel: 'Kimlar uchun',
  blocks: {
    marketplace: {
      index: '01',
      label: 'Marketpleys',
      title: 'Yuk mashinasi uchun ehtiyot qismlar — onlayn',
      text: 'Tekshirilgan yetkazib beruvchilarning original va analog ehtiyot qismlari katalogi. Detalni marka va model boʻyicha yoki shunchaki surati orqali toping.',
      who: 'Yuk mashinasi egalari, avtoparklar, servis markazlari va mexaniklar.',
      benefits: [
        { title: 'Marka va model boʻyicha filtr', text: 'Texnikangizga mos detallarni koʻrsatamiz.' },
        { title: 'Surat orqali qidiruv', text: 'Detalni suratga oling va keragini toping.' },
        { title: 'Original va analoglar', text: 'Vazifa va byudjetingizga mosini tanlang.' },
        { title: 'Ilovada buyurtma', text: 'Qidiruvdan xaridgacha — bitta ekranda.' },
      ],
      screenAlt: 'Fura Sentr ilovasidagi ehtiyot qismlar doʻkonining asosiy ekrani',
      cta: 'Ilovada ehtiyot qism xarid qilish',
      categoriesTitle: 'Ommabop kategoriyalar',
    },
    trucks: {
      index: '02',
      label: 'Yuk mashinalari',
      title: 'Yuk mashinasini soting yoki sotib oling',
      text: 'Tyagach va tirkamalar uchun maxsus maydoncha. Eʼlon joylang yoki xususiy sotuvchilar va kompaniyalar takliflari orasidan texnika toping.',
      who: 'Tashuvchilar, xususiy sotuvchilar va avtoparkini yangilayotgan kompaniyalar.',
      benefits: [
        { title: 'Tyagach va tirkamalar', text: 'Alohida yoki toʻplam holida soting.' },
        { title: 'Bosqichma-bosqich eʼlon', text: 'Ilovaning oʻzida tushunarli shakl.' },
        { title: 'Barcha yetakchi markalar', text: 'Yevropa, Xitoy va Rossiya markalari.' },
      ],
      brandsTitle: 'Markalar',
      brands: ['Mercedes-Benz', 'MAN', 'DAF', 'Volvo', 'Iveco', 'Scania', 'Kamaz', 'Renault', 'MAZ', 'Shacman', 'FAW', 'Hino'],
      screenAlt: 'Tyagach yoki tirkama sotish haqida eʼlon berish ekrani',
      cta: 'Eʼlon joylash',
    },
    jobs: {
      index: '03',
      label: 'Ish',
      title: 'Haydovchilar va ish beruvchilar — bitta maydonchada',
      text: 'Yuk tashish sohasida ish izlayotganlar va haydovchiga ehtiyoji bor kompaniyalar uchun boʻlim.',
      who: 'Haydovchilar va transport kompaniyalari.',
      audiences: [
        {
          title: 'Men ish qidiryapman',
          benefits: ['Yuk tashish biznesidagi vakansiyalar', 'Ilovada haydovchi profili', 'Ish beruvchi bilan toʻgʻridan-toʻgʻri aloqa'],
        },
        {
          title: 'Men haydovchi qidiryapman',
          benefits: ['Vakansiya joylash', 'Haydovchilar orasidan qidirish', 'Arizalar bir joyda'],
        },
      ],
      screenAlt: 'Fura Sentr ilovasidagi «Ish» boʻlimi ekrani',
      cta: 'Ish yoki haydovchi topish',
    },
    fleet: {
      index: '04',
      label: 'Avtopark',
      title: 'Butun avtopark nazorat ostida',
      text: 'Yuk mashinalari, haydovchilar, tirkamalar, buyurtmalar, hujjatlar va moliya — jadvallar, messenjerlar va qogʻozlar oʻrniga.',
      who: 'Yuk mashinasi egalari va transport kompaniyalari.',
      scale: { from: '1', to: '200', label: 'mashina yagona boshqaruvda' },
      benefits: [
        { title: 'Real vaqtdagi xarita', text: 'Har bir mashina qayerda va qanday holatda.' },
        { title: 'Haydovchi va tirkamalar', text: 'Mashinaga biriktirish, hujjatlar kartochkada.' },
        { title: 'Buyurtma va reyslar', text: 'Yaratish, holatlar va tasdiqlash.' },
        { title: 'Daromad va xarajatlar', text: 'Har bir mashina boʻyicha yoqilgʻi, servis va jarimalar.' },
      ],
      screenAlt: 'Yuk mashinasi kartochkasi, xarajat va daromadlar koʻrsatilgan «Garaj» ekrani',
      cta: 'Avtoparkni ulash',
    },
  },
  categories: {
    body: { name: 'Kuzov qismlari', alt: 'Yuk mashinasi uchun kuzov qismlari' },
    tires: { name: 'Shinalar', alt: 'Yuk mashinasi uchun shinalar' },
    batteries: { name: 'Akkumulyatorlar', alt: 'Yuk mashinasi uchun akkumulyatorlar' },
    brakes: { name: 'Tormoz tizimi', alt: 'Yuk mashinasi tormoz tizimi detallari' },
    engine: { name: 'Dvigatel', alt: 'Dvigatel va uning ehtiyot qismlari' },
    suspension: { name: 'Osma tizim', alt: 'Yuk mashinasi osma tizimi detallari' },
  },
  dealer: {
    label: 'Biznes uchun',
    title: 'Diler boʻlish',
    text: 'Yuk texnikasi uchun ehtiyot qismlar sotasizmi? Assortimentingizni Fura Sentrʼga joylang va yuk tashish biznesidagi xaridorlar bilan ishlang.',
    benefits: [
      { title: 'Marketpleysdagi vitrina', text: 'Mahsulotlaringiz ilova katalogida.' },
      { title: 'Maqsadli xaridorlar', text: 'Yuk mashinasi egalari, avtoparklar va servislar.' },
      { title: 'Ulanishda yordam', text: 'Sotuvni qanday boshlashni aytib beramiz.' },
    ],
    contactsTitle: 'Biz bilan bogʻlaning',
  },
  finalCta: {
    title: ['Butun yuk tashish biznesi', 'bitta ilovada'],
    text: 'Fura Sentrʼni yuklab oling va bugun sizga kerakli boʻlimdan boshlang.',
  },
  footer: {
    about: 'Oʻzbekistondagi yuk tashish biznesi uchun yagona platforma.',
    sections: 'Boʻlimlar',
    support: 'Yordam',
    supportNote: '24/7 aloqada',
    app: 'Ilova',
    copyright: '© 2026 Fura Sentr · udevs.io · Toshkent, Oʻzbekiston',
  },
};

export const locales = { ru, uz };
export type Locale = keyof typeof locales;
export const localePaths: Record<Locale, string> = { ru: '/', uz: '/uz/' };
export const localeNames: Record<Locale, string> = { ru: 'Русский', uz: 'Oʻzbekcha' };
