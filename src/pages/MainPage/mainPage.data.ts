interface IMainPage {
  title?: string;
  text?: string;
  adaptiveTitle?: string;
}

export const mianPageData: IMainPage[] = [
  {
    title: "Виджеты",
    text: "30 готовых решений",
    adaptiveTitle: "Skype аудит",
  },
  {
    title: "Dashboard",
    text: "с показателями вашего бизнеса",
    adaptiveTitle: "30 виджетов",
  },
  {
    title: "Skype Аудит",
    text: "отдела продаж и CRM системы",
    adaptiveTitle: "Dashboard",
  },
  {
    title: "35 дней",
    text: "использования CRM",
    adaptiveTitle: "Месяц аmoCRM",
  },
];

export const mianPageDataAdaptive: IMainPage[] = [
  {
    adaptiveTitle: "Skype аудит",
  },
  {
    adaptiveTitle: "30 виджетов",
  },
  {
    adaptiveTitle: "Dashboard",
  },
  {
    adaptiveTitle: "Месяц аmoCRM",
  },
];
