
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber1: 'dps-desk_pro@cwaengineering-sbx.rooms.webex.com',
    dialNumber2: '2000',
    dialNumber3: '2001',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber1, name: 'Loan' },
        { url: this.dialNumber2, name: 'Advice' },
        { url: this.dialNumber3, name: 'Credit' },
      ];
    },
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
  });

}

document.addEventListener('alpine:init', setup);

