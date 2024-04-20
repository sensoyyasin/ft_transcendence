var translations = {
    tr: {

        'titlelogin': 'GİRİŞ YAP',
        'login': 'GİRİŞ YAP',
        'register': 'Kayıt Ol',
        'intra' : '42 İntra ile Giriş Yap',
        'welcome': '42 Transcendence Projesine Hoşgeldiniz',
        'quickmatch': 'Hızlı Maç',
        'ponggame' : '🏓 Pong Oyunu 🏓',
        'specialmatch': 'Özel Maç',
        'welcomepong': 'Pong Oyununa Hoşgeldiniz',
        "choosetheme": "Aşağıdan bir tema seç!",
        'gameheader': 'Oyun',
        'chatheader': 'Sohbet',
        'profileheader': 'Profil',
        'settings': 'Ayarlar',
        'profileuser': 'Kullanıcı Adı',
        'profilefirstname': 'İsim',
        'profilenickname': 'Takma İsim',
        'profileemail': 'E-posta',
        'profilelastname': 'Soyad',
        'kullaniciayarlari':'Kullanıcı Ayarları',
        'profilephoto' : 'Profil Fotoğrafı',
        'accountusername' : 'Kullanıcı Adı',
        'accountmail' : 'Email',
        'accountnickname' : 'Takma İsim',
        'accountfirstname' : 'İlk İsim',
        'accountlastname' : 'Soyad',
        'registertoproject' : 'Transcendence Projesine Kayıt Ol',
        'usrname' : 'Kullanıcı Adı',
        'registerbuton' : 'Kayıt Ol',
        'giristrans' : 'Transcendence Projesine Giriş Yap',
        'girisuser' : 'Kullanıcı Adı',
        'girispass' : 'Şifre',
        'girisbuttons' : 'Giriş Yap',
        'message' : 'mesaj',
        'block' : 'engelle',
        'invite' : 'davet et',
        'send' : 'Gönder',
        'save' : 'Kaydet',
    },
    en: {

      "titlelogin": "LOG IN",
      "login": "LOG IN",
      "register": "Register",
      "intra": "Log in with 42 Intra",
      "welcome": "Welcome to the 42 Transcendence Project",
      "quickmatch": "Quick Match",
      "ponggame": "🏓 Pong Game 🏓",
      "specialmatch": "Special Match",
      "welcomepong": "Welcome to Pong Game",
      "choosetheme": "Choose a theme below!",
      "gameheader": "Game",
      "chatheader": "Chat",
      "profileheader": "Profile",
      "settings": "Settings",
      "profileuser": "Username",
      "profilefirstname": "First Name",
      "profilenickname": "Nickname",
      "profileemail": "Email",
      "profilelastname": "Last Name",
      "user settings": "User Settings",
      "profilephoto": "Profile Photo",
      "accountusername": "Username",
      "accountmail": "Email",
      "accountnickname": "Nickname",
      "accountfirstname": "First Name",
      "accountlastname": "Last Name",
      "registertoproject": "Register to Transcendence Project",
      "usrname": "Username",
      "registerbuton": "Register",
      "giristrans": "Log in to Transcendence Project",
      "girisuser": "Username",
      "girispass": "Password",
      "girisbuttons": "Log in",
      "message": "message",
      "block": "block",
      "invite": "invite",
      "send": "send",
      "save": "save",
    },
    ru: {

      "titlelogin": "ВОЙТИ",
      "login": "ВОЙТИ",
      "register": "Регистрация",
      "intra": "Войти с 42 Intra",
      "welcome": "Добро пожаловать в проект 42 Transcendence",
      "quickmatch": "Быстрая игра",
      "ponggame": "🏓 Игра в пинг-понг 🏓",
      "specialmatch": "Специальная игра",
      "welcomepong": "Добро пожаловать в игру в пинг-понг",
      "choosetheme": "Выберите тему ниже!",
      "gameheader": "Игра",
      "chatheader": "Чат",
      "profileheader": "Профиль",
      "settings": "Настройки",
      "profileuser": "Имя пользователя",
      "profilefirstname": "Имя",
      "profilenickname": "Псевдоним",
      "profileemail": "Электронная почта",
      "profilelastname": "Фамилия",
      "user settings": "Настройки пользователя",
      "profilephoto": "Фото профиля",
      "accountusername": "Имя пользователя",
      "accountmail": "Электронная почта",
      "accountnickname": "Псевдоним",
      "accountfirstname": "Имя",
      "accountlastname": "Фамилия",
      "registertoproject": "Зарегистрироваться в проекте Transcendence",
      "usrname": "Имя пользователя",
      "registerbuton": "Регистрация",
      "giristrans": "Войти в проект Transcendence",
      "girisuser": "Имя пользователя",
      "girispass": "Пароль",
      "girisbuttons": "Войти",
      "message": "koy",
      "block": "koy",
      "invite": "koy",
      "send": "koy",
      "save": "koy",

    }
};

  function changeLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(function(element) {
        var key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
  }

  function language(language) {
    localStorage.setItem('selectedLanguage', language);
    changeLanguage(language);
  }
