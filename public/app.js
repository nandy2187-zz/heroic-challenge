angular
  .module('leaderboard', ['ngMaterial'])
  .config(function($mdThemingProvider){

    var customPrimary = {
      '50': '#e4e5e5',
      '100': '#bcbdbf',
      '200': '#8f9295',
      '300': '#62666a',
      '400': '#41454a',
      '500': '#1f242a',
      '600': '#1b2025',
      '700': '#171b1f',
      '800': '#121619',
      '900': '#0a0d0f',
      'A100': '#54c6ff',
      'A200': '#21b5ff',
      'A400': '#009eed',
      'A700': '#008dd4',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    };

    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);
    var customAccent = {
      '50': '#e2f3f9',
      '100': '#b7e0ef',
      '200': '#88cce4',
      '300': '#58b7d9',
      '400': '#34a7d1',
      '500': '#1098c9',
      '600': '#0e90c3',
      '700': '#0c85bc',
      '800': '#097bb5',
      '900': '#056aa9',
      'A100': '#d4ecff',
      'A200': '#a1d6ff',
      'A400': '#6ec0ff',
      'A700': '#54b5ff',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 A100 A200 A400 A700'
   };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#63ed51',
        '100': '#4eea3a',
        '200': '#3ae823',
        '300': '#2eda17',
        '400': '#29c314',
        '500': '#24ac12',
        '600': '#1f9510',
        '700': '#1a7e0d',
        '800': '#16670b',
        '900': '#115008',
        'A100': '#78ef68',
        'A200': '#8cf27f',
        'A400': '#a1f496',
        'A700': '#0c3906'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#e9e9e9',
        '100': '#4a5665',
        '200': '#3f4a56',
        '300': '#353d47',
        '400': '#2a3139',
        '500': '#1f242a',
        '600': '#14171b',
        '700': '#090b0d',
        '800': '#000000',
        '900': '#000000',
        'A100': '#ffffff',
        'A200': '#6b7c91',
        'A400': '#79899c',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customBackground',
                        customBackground);


    $mdThemingProvider.theme('default')
      .primaryPalette('customPrimary')
      .accentPalette('customAccent')
      .warnPalette('customWarn')
      .backgroundPalette('customBackground');
  });
