var magik = magikcraft.io;

const ja = require('strings-ja').strings;

function localise(lang = 'en') {

    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }

    const strings = [
        {
            name: 'tutorial_welcome',
            strings:
            {
                no:
                [
                    'Velkommen til',
                    '&6The Land of Kigam&r',
                    'i',
                    '&3The World of &4&uMagikcraft'
                ],
                en: [
                    'Welcome to',
                    '&6The Land of Kigam&r',
                    'in',
                    '&3The World of&r &4&uMagikcraft'
                ],
                ja: [
                    '&uMagikcraft&r no sekai no kigamu',
                     'no kuni e yokoso',
                     '.',
                     '.'
                ]
            }
        },
        {
            name: 'tutorial_magik',
            strings:
            {
                no: [
                    '--- &4&uMagi&r ---',
                    'er en kraft som lar folk',
                    'gj[ø]re &6umulige ting&r',
                    'ved [å] si &6spesielle ord&r'
                ],
                en: [
                    '--- &4&uMagik&r ---',
                    'Is a power that allows people',
                    'to do &6impossible things&r',
                    'by saying &6special words&r'
                ],
                ja: [
                    '--- &4&uMagikku wa&r ---',
                    'tokubetsuna kotoba o itte',
                    'hitobito ga fukanona koto o suru',
                    'koto o kano ni suru chikaradesu'
                ]
            }
        },
        {
            name: 'tutorial_chap_01',
            strings: {
                no: [
                    'Hei, jeg heter M.',
                    '&4&u!!!!Hjelp!!!!!!&r',
                    '&dSuperMegaCorp&r',
                    'stjal all &4&magien&r',
                    'i Kigamriket.'
                ],
                en: [
                    'Hello, my name is &aM&r.',
                    '&4&u!!!!Help!!!!!!&r',
                    '&dSuperMegaCorp&r',
                    'stole all the &4&umagik',
                    'in the realm of Kigam.'
                ],
                ja: [
                    "Kon'nichiwa watashinonamaeha M desu",
                    '&4&u!!!!Tasukete!!!!&r',
                    '&dSuperMegaCorp&r ga tochi no subete',
                    'no &4&umaho&r o nusunda'
                ]
            }
        },
        {
            name: 'tutorial_chap_02',
            strings: {
                no: [
                    'Modige mennesker ble med',
                    'og sammen slo vi',
                    'SuperMegaCorp.',
                    'Men &4&umagien&r ble tapt!!!'
                ],
                en: [
                    'Brave people joined me',
                    'and together we beat',
                    '&dSuperMegaCorp&r.',
                    'But &4&umagik&r was lost!!!'
                ],
                ja: [
                    "Yukan'na hitobito ga watashi",
                    'ni kuwawari, issho ni',
                    '&dSuperMegaCorp&r o utta ga,',
                     '&4&umaho&r wa ushinawareta'
                ]
            }
        },
        {
            name: 'tutorial_chap_03',
            strings: {
                no: [
                    'Nå ønsker &dSuperMegaCorp&r',
                    'å få tilbake magien.',
                    'Finn trylleformlene før de finner dem,',
                    'og ta dem med tilbake til',
                    '&a&uAsgard Romstasjon&r!'
                ],
                en: [
                    'Now &dSuperMegaCorp&r',
                    'wants to get the &4&umagik&r back.',
                    'Find the magik words before they do',
                    'and bring them to',
                    'the &a&uAsgard Space Station&r!'
                ],
                ja: [
                    'Ima sugu &dSuperMegaCorp&r',
                    'wa &4&umajikku&r o torimodosou',
                    'to shite imasu. Karera ga suru mae',
                    'ni magik kotoba o mitsukete, sorera',
                    'o asugarudo uchu suteshon ni motte iki nasai!'
                ]
            }
        },
        {
            name: 'tutorial_chap_04',
            strings: {
                no: [
                    '--- &dSuperMegaCorp&r ---',
                    'vær advart:',
                    'All &4&umagi&r tilhører',
                    '&dSuperMegaCorp&r.',
                    'Inntrengere vil bli forfulgt.'
                ],
                en: [
                    '--- &dSuperMegaCorp&r ---',
                    'Be Warned:',
                    'All &4&umagik&r is the property of',
                    '&dSuperMegaCorp&r.',
                    'Trespassers will be persecuted.'
                ],
                ja: [
                    '--- &dSuperMegaCorp&r ---',
                    '警告してください！',
                    'All &4&umagik&r is the property of',
                    '&dSuperMegaCorp&r.',
                    '他の人は罰せられる！'
                ]
            }
        },
        {
            name: 'tutorial_chap_05',
            strings: {
                no: [
                    'Du må bruke &4&umagi&r',
                    'for å komme ut herfra',
                    '&f[|||] &4[|||] &f[|||]',
                    'Finn det magiske ordet.'
                ],
                en: [
                    'You need to use &4&umagik&r',
                    'to get out of here',
                    '&f[|||] &4[|||] &f[|||]',
                    'Find the magik word'
                ],
                ja: [
                    'あなたは出かけるのに魔法を使う必要があります',
                    '魔法の言葉を見つける'
                ]
            }
        },
        {
            name: 'tutorialwarp',
            strings: {
                no: [
                    '--- &aM&r ---',
                    'Takk for den du er, og hva du gjør',
                    'for folket i Kigam.',
                    'Skriv inn /warp Lounge',
                    'det vil ta deg til det neste området.',
                    'Fortsett med det, og så ses vi snart!'
                ],
                en: [
                    '--- &aM&r ---',
                    'Thank you for who you are',
                    'and what you are doing',
                    'for the people of Kigam.',
                    'Type in &u/warp Lounge',
                    'it will take you to the next area.',
                    'Keep doing you, and see you soon!'
                ]
            }
        },
        {
            name: 'congrats',
            strings: {
                no: [
                    'Gratulerer!!!'
                ],
                en: [
                    '&4&uCongratulations!!!&r'
                ],
                ja: ['&4&u御目出度う！&r']
            }
        },
        {
            name: 'arthur',
            strings: {
                no: [

                ],
                en: [
                    "'''Any sufficiently advanced technology",
                    'is indistinguishable from magic',
                    '- Arthur C. Clarke'
                ]
            }
        },
        {
            name: 'jungle-instructions',
            strings: {
                no: [
                    'Finn ingrediensene for trylleformelen',
                    'Det finnes fem stykk...',
                    'Du trenger bare tre stykk til en trylleformel'
                ],
                en: [
                    'Find the ingredients to make spell with',
                    '&aThere are five of them...&r',
                    '&aYou only need three for a spell&r'
                ]
            }
        },
        {
            name: 'flight_cast',
            strings: {
                no: [
                    'Bluk "remember"-trylleformelen her'
                ],
                en: [
                    'Cast your remember spell here'
                ],
                ja: [
                    'Oboete iru jumon o koko ni kyasuto suru'
                ]
            }
        },
        {
            name: 'flight-goback',
            strings: {
                no: [
                    'Fant du det magiske ordet? Det er tilbake, bak deg...'
                ],
                en: [
                    "Did you find the magik word? It's back, behind you..."
                ]
            }
        },
        {
            name: 'flight-end-menu',
            strings: {
                no: [
                    'Fant du den hemmelige passasjen gjennom fossen?',
                    'Gå tilbake for å finne den: &4&u/warp lounge&r',
                    'Gå videre til neste eventyr: &4&u/warp flight2&r'
                ],
                en: [
                    'Did you find the secret passage through the waterfall?',
                    'To go back to find it: &4&u/warp lounge&r',
                    'To go on to the next adventure: &4&u/warp flight2&r'
                ]
            }
        },
        {
            name: 'flight2-instructions',
            strings: {
                no: [
                    'Fly hele veien i ett hopp!'
                ],
                en: [
                    'Fly all the way in one jump!'
                ]
            }
        },
        {
            name: 'flight2-end',
            strings: {
                no: [
                    'Gratulerer!',
                    'Prøv igjen: &4&u/warp flight2&r',
                    'Gå til neste eventyr: &4&u/warp jungle&r'
                ],
                en: [
                    'Congrats!',
                    'To try again: &4&u/warp flight2&r',
                    'To go to the next adventure: &4&u/warp jungle&r'
                ]
            }
        },
        {
            name: 'kigam-volcano-exit',
            strings: {
                no: [
                    'Denne veien tilbake til Kigam Town!',
                    '/ \\ / \\'
                ],
                en: [
                    'Stairway'
                ]
            }
        },
        {
            name: 'initial_welcome',
            strings: {
                no: [
                    'Velkommen til &uMagikcraft',
                    'Bruk W, A, S, D til å bevege deg.',
                    'Beveg musen for å kunne se deg rundt.',
                    'Når du er klar, følg stien'
                ],
                en: [
                    'Welcome to &uMagikcraft',
                    'Use W,A,S,D to move. Move your mouse to look',
                    'Once you get that, follow the path'
                ],
                ja: [
                    '&uMagikcraft&rへようこそ！',
                    'W、A、S、Dを使用して移動します。 見るためにマウスを使用してください。',
                    '準備が整ったら、パスに従ってください'
                ]
            }
        },
        {
            name: 'initial_jumping',
            strings: {
                no: [
                    'Trykk på mellomromstasten for å hoppe'
                ],
                en: [
                    'Use the Spacebar to jump'
                ],
                ja: [
                    'スペースバーを押してジャンプする'
                ]
            }
        },
        {
            name: 'initial_portal',
            strings: {
                no: [
                    '&uMagkicraft&r is connected with &uPortals',
                    'Gå gjennom her for å gå til opplæringsnivået'
                ],
                en: [
                    '&uMagkicraft&r is connected with &uPortals',
                    'Walk though, and it will take you to the tutorial level'
                ],
                ja: [
                    'Magikcraftは &uポータル&r',
                    '歩いてください。 チュートリアルのレベルに進みます。'
                ]
            }
        }
        /*,
        {
            name: '',
            strings: {
                no: [
                    ''
                ],
                en: [
                    ''
                ]
            }
        },
        {
            name: '',
            strings: {
                no: [
                    ''
                ],
                en: [
                    ''
                ]
            }
        },
        {
            name: '',
            strings: {
                no: [
                    ''
                ],
                en: [
                    ''
                ]
            }
        },
        {
            name: '',
            strings: {
                no: [
                    ''
                ],
                en: [
                    ''
                ]
            }
        },
        {
            name: '',
            strings: {
                no: [
                    ''
                ],
                en: [
                    ''
                ]
            }
        } */
    ];

    strings.forEach(hologram => {
        if (hologram.strings[lang]) {
            hologram.strings[lang].forEach((text, line) =>
                run(`hd setline ${hologram.name} ${line + 1} ${text}`)
            );
        }
    });
}





/*


Finn de tre ingrediensene - før Zombiene kommer!!

Si din huskeformel her

Fant du det magiske ordet? Det er tilbake, bak deg...

Fant du den hemmelige gangen gjennom fossen?
For å gå tilbake for å finne den: /warp lounge
For å gå videre til neste eventyr: /warp flight

Fly hele vegen i ett hopp!

Grattis!
For å prøve igjen: /warp flight
For å gå videre til neste eventyr: /warp jungle
    ]
   
}

*/
