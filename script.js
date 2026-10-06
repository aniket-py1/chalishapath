/**
         * 1. TRANSLATION DICTIONARY
         */
        const translations = {
            gu: {
                app_title: "ચાલીસા પાઠ",
                app_subtitle: "દૈનિક પાઠ સાથી",
                active_session: "ચાલુ સત્ર બાકી છે!",
                resume_btn: "ચાલુ રાખો ▶",
                today_total_label: "આજના પૂર્ણ પાઠ",
                spiritual_grace: "દૈનિક સંકલ્પ",
                peace_of_mind: "સુખ-શાંતિ",
                select_deity: "ચાલીસા પસંદ કરો:",
                set_target: "પાઠ સંકલ્પ સંખ્યા:",
                custom_count: "અન્ય સંખ્યા:",
                start_reading_btn: "પાઠ શરૂ કરો",
                autoscroll: "સ્ક્રોલ",
                screen_awake: "સ્ક્રીન ચાલુ",
                congratulations: "અભિનંદન!",
                completion_msg: "તમે તમારો નિર્ધારિત પવિત્ર ચાલીસા પાઠ સંકલ્પ શ્રદ્ધાપૂર્વક પૂર્ણ કર્યો છે.",
                paths_completed: "પાઠ સફળતાપૂર્વક પૂર્ણ થયા",
                share_whatsapp: "વોટ્સએપ પર શેર કરો",
                start_new_path: "નવો પાઠ શરૂ કરો",
                settings_title: "સેટિંગ્સ",
                bell_sound_title: "દિવ્ય ઘંટનાદ અવાજ",
                bell_sound_desc: "પાઠ પૂર્ણ થાય ત્યારે ઘંટ વગાડો",
                vibration_title: "મોબાઇલ વાઇબ્રેશન",
                vibration_desc: "બટન દબાવવા પર હળવો વાઇબ્રેશન",
                keep_awake_title: "સ્ક્રીન સ્લીપ અટકાવો",
                keep_awake_desc: "પાઠ દરમિયાન મોબાઇલ સ્ક્રીન ચાલુ રાખો",
                reset_stats_title: "આજનો ડેટા સાફ કરો",
                reset_stats_desc: "આજના ગણેલા પાઠ ૦ કરો",
                exit_confirm_title: "પાઠ સત્રમાંથી બહાર નીકળવું છે?",
                exit_confirm_desc: "તમારી વર્તમાન ગણતરી સચવાયેલી રહેશે જેથી તમે પાછળથી ચાલુ રાખી શકો છો.",
                cancel_btn: "રદ કરો",
                yes_exit_btn: "હા, બહાર નીકળો",
                back_label: "પાછા",
                tap_complete_path: "+૧ પાઠ પૂર્ણ",
                undo_label: "સુધારો",
                install_app_btn: "ઇન્સ્ટોલ",
                pwa_setting_title: "મોબાઇલ એપ ઇન્સ્ટોલ કરો",
                pwa_setting_desc: "હોમ સ્ક્રીન પર ઉમેરીને ઓફલાઇન વાપરો",
                install_now_btn: "ઇન્સ્ટોલ 📲",
                ios_install_title: "ચાલીસા પાઠ એપ ઇન્સ્ટોલ કરો",
                ios_install_sub: "iPhone / iPad પર સીધા વાપરો",
                ios_step1_txt: "Safari બ્રાઉઝરમાં નીચે આપેલ શેર બટન દબાવો",
                ios_step2_txt: "નીચે સ્ક્રોલ કરી 'Add to Home Screen' પસંદ કરો",
                ios_step3_txt: "ઉપર જમણી બાજુએ 'Add' પર ટેપ કરો",
                ios_offline_note: "ઇન્સ્ટોલ કર્યા પછી એપ ઇન્ટરનેટ વગર સંપૂર્ણપણે ચાલશે!",
                offline_toast_msg: "ઓફલાઇન મોડ: એપ સંપૂર્ણપણે કાર્યરત છે 📿",
                online_toast_msg: "ઇન્ટરનેટ ફરી જોડાયું 🟢",
                reading_summary: (c, t) => `${t} માંથી ${c} પાઠ પૂર્ણ`,
                share_text: (name, count) => `જય શ્રી રામ 🙏 મેં આજે ચાલીસા પાઠ એપ પર ${count} ${name} પાઠ પૂર્ણ કર્યા. તમે પણ કરો: https://chalishapath.netlify.app/`
            },
            hi: {
                app_title: "चालीसा पाठ",
                app_subtitle: "दैनिक पाठ साथी",
                active_session: "सत्र अधूरा बचा है!",
                resume_btn: "जारी रखें ▶",
                today_total_label: "आज के कुल पाठ",
                spiritual_grace: "दैनिक संकल्प",
                peace_of_mind: "सुख-शांति",
                select_deity: "चालीसा चुनें:",
                set_target: "पाठ संकल्प संख्या:",
                custom_count: "अन्य संख्या:",
                start_reading_btn: "पाठ शुरू करें",
                autoscroll: "स्क्रॉल",
                screen_awake: "स्क्रीन ऑन",
                congratulations: "मंगलकामनाएं!",
                completion_msg: "आपने सफलतापूर्वक अपने निर्धारित पवित्र पाठ पूरे कर लिए हैं।",
                paths_completed: "पाठ सफलतापूर्वक पूर्ण हुए",
                share_whatsapp: "व्हाट्सएप पर शेयर करें",
                start_new_path: "नया पाठ शुरू करें",
                settings_title: "सेटिंग्स",
                bell_sound_title: "दिव्य घंटानाद ध्वनि",
                bell_sound_desc: "पाठ पूरा होने पर घंटी बजाएं",
                vibration_title: "मोबाइल वाइब्रेशन",
                vibration_desc: "बटन दबाने पर हल्का कंपन",
                keep_awake_title: "स्क्रीन स्लीप रोकें",
                keep_awake_desc: "पाठ के दौरान मोबाइल स्क्रीन चालू रखें",
                reset_stats_title: "आज का डेटा रीसेट करें",
                reset_stats_desc: "आज के गिने गए पाठ ० करें",
                exit_confirm_title: "पाठ सत्र से बाहर निकलना चाहते हैं?",
                exit_confirm_desc: "आपकी वर्तमान गिनती सुरक्षित रहेगी ताकि आप बाद में जारी रख सकें।",
                cancel_btn: "रद्द करें",
                yes_exit_btn: "हाँ, बाहर निकलें",
                back_label: "पीछे",
                tap_complete_path: "+१ पाठ पूर्ण",
                undo_label: "सुधारें",
                install_app_btn: "इंस्टॉल",
                pwa_setting_title: "मोबाइल ऐप इंस्टॉल करें",
                pwa_setting_desc: "होम स्क्रीन पर जोड़कर ऑफलाइन उपयोग करें",
                install_now_btn: "इंस्टॉल 📲",
                ios_install_title: "चालीसा पाठ ऐप इंस्टॉल करें",
                ios_install_sub: "iPhone / iPad पर सीधे उपयोग करें",
                ios_step1_txt: "Safari ब्राउज़र में नीचे दिया गया शेयर बटन दबाएं",
                ios_step2_txt: "नीचे स्क्रॉल करके 'Add to Home Screen' चुनें",
                ios_step3_txt: "ऊपर दाईं ओर 'Add' पर टैप करें",
                ios_offline_note: "इंस्टॉल करने के बाद ऐप बिना इंटरनेट के भी चलेगा!",
                offline_toast_msg: "ऑफलाइन मोड: ऐप पूरी तरह से सक्रिय है 📿",
                online_toast_msg: "इंटरनेट पुनः जुड़ गया 🟢",
                reading_summary: (c, t) => `${t} में से ${c} पाठ पूर्ण`,
                share_text: (name, count) => `जय श्री राम 🙏 मैंने आज चालीसा पाठ ऐप पर ${count} ${name} पाठ पूरे किए। आप भी पढ़ें: https://chalishapath.netlify.app/`
            },
            en: {
                app_title: "Chalisa Path",
                app_subtitle: "Daily Prayer Companion",
                active_session: "Active session in progress!",
                resume_btn: "Resume ▶",
                today_total_label: "Today's Completed",
                spiritual_grace: "Daily Resolve",
                peace_of_mind: "Peace & Grace",
                select_deity: "Select Chalisa:",
                set_target: "Set Target Count:",
                custom_count: "Custom count:",
                start_reading_btn: "Start Reading",
                autoscroll: "Scroll",
                screen_awake: "Screen Awake",
                congratulations: "Congratulations!",
                completion_msg: "You have devoutly completed your sacred Chalisa Path target.",
                paths_completed: "Readings completed successfully",
                share_whatsapp: "Share on WhatsApp",
                start_new_path: "Start New Reading",
                settings_title: "Settings",
                bell_sound_title: "Temple Bell Sound",
                bell_sound_desc: "Chime bell upon completing a reading",
                vibration_title: "Haptic Vibration",
                vibration_desc: "Gentle pulse on button tap",
                keep_awake_title: "Prevent Screen Sleep",
                keep_awake_desc: "Keep screen on during prayers",
                reset_stats_title: "Reset Today's Count",
                reset_stats_desc: "Reset completed count to 0",
                exit_confirm_title: "Leave current reading?",
                exit_confirm_desc: "Your progress is saved so you can resume anytime.",
                cancel_btn: "Cancel",
                yes_exit_btn: "Yes, Exit",
                back_label: "Back",
                tap_complete_path: "+1 Completed",
                undo_label: "Undo",
                install_app_btn: "Install",
                pwa_setting_title: "Install Mobile App",
                pwa_setting_desc: "Add to home screen & use offline",
                install_now_btn: "Install 📲",
                ios_install_title: "Install Chalisa Path App",
                ios_install_sub: "Use directly on iPhone / iPad",
                ios_step1_txt: "Tap the Share button at the bottom of Safari",
                ios_step2_txt: "Scroll down and select 'Add to Home Screen'",
                ios_step3_txt: "Tap 'Add' in the top right corner",
                ios_offline_note: "After installing, the app works 100% offline!",
                offline_toast_msg: "Offline Mode: App is fully functional 📿",
                online_toast_msg: "Back Online 🟢",
                reading_summary: (c, t) => `${c} of ${t} readings complete`,
                share_text: (name, count) => `Jai Shri Ram 🙏 I completed ${count} readings of ${name} today on the Chalisa Path app. Read here: https://chalishapath.netlify.app/`
            }
        };

        /**
         * 2. COMPLETE CHALISA DATA (PURE GUJARATI, HINDI, ENGLISH)
         */
        const chalisas = {
            hanuman: {
                id: 'hanuman',
                symbol: '🙏',
                presets: [1, 3, 7, 11, 21, 108],
                defaultTarget: 7,
                info: {
                    gu: "હનુમાન ચાલીસાના પાઠ ૧, ૩, ૭, ૧૧, ૨૧ કે ૧૦૮ વાર કરી શકાય છે. મંગળવાર અને શનિવારે ૭ વારનો પાઠ અત્યંત શુભ અને સંકટમોચક માનવામાં આવે છે.",
                    hi: "हनुमान चालीसा का पाठ १, ३, ७, ११, २१ या १०८ बार किया जा सकता है। मंगलवार और शनिवार को ७ बार पाठ विशेष संकटमोचक और फलदायी माना जाता है।",
                    en: "Hanuman Chalisa is traditionally recited 1, 3, 7, 11, 21, or 108 times. A 7-time recital on Tuesday or Saturday is considered immensely auspicious."
                },
                gu: {
                    title: "શ્રી હનુમાન ચાલીસા",
                    doha1: [
                        "શ્રીગુરુ ચરણ સરોજ રજ, નિજ મનુ મુકુરુ સુધારિ ।",
                        "બરનઉં રઘુબર બિમલ જસુ, જો દાયકુ ફલ ચારિ ॥",
                        "બુદ્ધિહીન તનુ જાનિકે, સુમિરૌં પવન કુમાર ।",
                        "બલ બુદ્ધિ વિદ્યા દેહુ મોહિં, હરહુ કલેસ બિકાર ॥"
                    ],
                    chaupai: [
                        "જય હનુમાન જ્ઞાન ગુન સાગર । જય કપીસ તિહું લોક ઉજાગર ॥",
                        "રામ દૂત અતુલિત બલ ધામા । અંજનિ પુત્ર પવનસુત નામા ॥",
                        "મહાવીર વિક્રમ બજરંગી । કુમતિ નિવાર સુમતિ કે સંગી ॥",
                        "કંચન બરન બિરાજ સુબેસા । કાનન કુંડલ કુંચિત કેસા ॥",
                        "હાથ વજ્ર ઔ ધ્વજા બિરાજૈ । કાંધે મૂંજ જનેઊ સાજૈ ॥",
                        "શંકર સુવન કેસરી નંદન । તેજ પ્રતાપ મહા જગ વંદન ॥",
                        "વિદ્યાવાન ગુની અતિ ચાતુર । રામ કાજ કરિબે કો આતુર ॥",
                        "પ્રભુ ચરિત્ર સુનિબે કો રસિયા । રામ લખન સીતા મન બસિયા ॥",
                        "સૂક્ષ્મ રૂપ ધરિ સિયહિં દિખાવા । બિકટ રૂપ ધરિ લંક જરાવા ॥",
                        "ભીમ રૂપ ધરિ અસુર સંહારે । રામચંદ્ર કે કાજ સંવારે ॥",
                        "લાય સજીવન લખન જિયાયે । શ્રી રઘુબીર હરષિ ઉર લાયે ॥",
                        "રઘુપતિ કીન્હી બહુત બડાઈ । તુમ મમ પ્રિય ભરતહિ સમ ભાઈ ॥",
                        "સહસ બદન તુમ્હરો જસ ગાવૈં । અસ કહિ શ્રીપતિ કંઠ લગાવૈં ॥",
                        "સનકાદિક બ્રહ્માદિ મુનીસા । નારદ સારદ સહિત અહીસા ॥",
                        "જમ કુબેર દિગપાલ જહાં તે । કબિ કોબિદ કહિ સકે કહાં તે ॥",
                        "તુમ ઉપકાર સુગ્રીવહિં કીન્હા । રામ મિલાય રાજ પદ દીન્હા ॥",
                        "તુમ્હરો મંત્ર બિભીષન માના । લંકેશ્વર ભયે સબ જગ જાના ॥",
                        "જુગ સહસ્ર જોજન પર ભાનૂ । લીલ્યો તાહિ મધુર ફલ જાનૂ ॥",
                        "પ્રભુ મુદ્રિકા મેલિ મુખ માહીં । જલધિ લાંઘિ ગયે અચરજ નાહીં ॥",
                        "દુર્ગમ કાજ જગત કે જેતે । સુગમ અનુગ્રહ તુમ્હરે તેતે ॥",
                        "રામ દુઆરે તુમ રખવારે । હોત ન આજ્ઞા બિનુ પૈસારે ॥",
                        "સબ સુખ લહૈ તુમ્હારી સરના । તુમ રક્ષક કાહૂ કો ડર ના ॥",
                        "આપન તેજ સંમ્હારો આપૈ । તીનોં લોક હાંક તેં કાંપૈ ॥",
                        "ભૂત પિસાચ નિકટ નહિં આવૈ । મહાવીર જબ નામ સુનાવૈ ॥",
                        "નાસૈ રોગ હરૈ સબ પીરા । જપત નિરંતર હનુમત બીરા ॥",
                        "સંકટ તેં હનુમાન છુડાવૈ । મન ક્રમ બચન ધ્યાન જો લાવૈ ॥",
                        "સબ પર રામ તપસ્વી રાજા । તિન કે કાજ સકલ તુમ સાજા ॥",
                        "ઔર મનોરથ જો કોઈ લાવૈ । સોઈ અમિત જીવન ફલ પાવૈ ॥",
                        "ચારોં જુગ પરતાપ તુમ્હારા । હૈ પરસિદ્ધ જગત ઉજિયારા ॥",
                        "સાધુ સંત કે તુમ રખવારે । અસુર નિકંદન રામ દુલારે ॥",
                        "અષ્ટ સિદ્ધિ નૌ નિધિ કે દાતા । અસ બર દીન જાનકી માતા ॥",
                        "રામ રસાયન તુમ્હરે પાસા । સદા રહો રઘુપતિ કે દાસા ॥",
                        "તુમ્હરે ભજન રામ કો પાવૈ । જનમ જનમ કે દુખ બિસરાવૈ ॥",
                        "અંતકાલ રઘુબર પુર જાઈ । જહાં જન્મ હરિ ભક્ત કહાઈ ॥",
                        "ઔર દેવતા ચિત્ત ન ધરઈ । હનુમત સેઈ સર્બ સુખ કરઈ ॥",
                        "સંકટ કટૈ મિટૈ સબ પીરા । જો સુમિરૈ હનુમત બલબીરા ॥",
                        "જૈ જૈ જૈ હનુમાન ગોસાઈં । કૃપા કરહુ ગુરુદેવ કી નાઈં ॥",
                        "જો સત બાર પાઠ કર કોઈ । છૂટહિ બંદિ મહા સુખ હોઈ ॥",
                        "જો યહ પઢૈ હનુમાન ચાલીસા । હોય સિદ્ધિ સાખી ગૌરીસા ॥",
                        "તુલસીદાસ સદા હરિ ચેરા । કીજૈ નાથ હૃદય મહં ડેરા ॥"
                    ],
                    doha2: [
                        "પવનતનય સંકટ હરન, મંગલ મૂરતિ રૂપ ।",
                        "રામ લખન સીતા સહિત, હૃદય બસહુ સુર ભૂપ ॥"
                    ]
                },
                hi: {
                    title: "श्री हनुमान चालीसा",
                    doha1: [
                        "श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।",
                        "बरनऊं रघुबर बिमल जसु, जो दायकु फल चारि॥",
                        "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।",
                        "बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥"
                    ],
                    chaupai: [
                        "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुं लोक उजागर॥",
                        "राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥",
                        "महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥",
                        "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥",
                        "हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥",
                        "संकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥",
                        "विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥",
                        "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥",
                        "सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥",
                        "भीम रूप धरि असुर संहारे। रामचंद्र के काज संवारे॥",
                        "लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये॥",
                        "रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥",
                        "सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥",
                        "सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥",
                        "जम कुबेर दिगपाल जहां ते। कबि कोबिद कहि सके कहां ते॥",
                        "तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥",
                        "तुम्हरो मंत्र बिभीषन माना। लंकेस्वर भए सब जग जाना॥",
                        "जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥",
                        "प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥",
                        "दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥",
                        "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥",
                        "सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥",
                        "आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥",
                        "भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥",
                        "नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥",
                        "संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥",
                        "सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥",
                        "और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥",
                        "चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥",
                        "साधु-संत के तुम रखवारे। असुर निकंदन राम दुलारे॥",
                        "अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥",
                        "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥",
                        "तुम्हरे भजन राम को पावै। जनम-जनम के दुख बिसरावै॥",
                        "अन्तकाल रघुबर पुर जाई। जहां जन्म हरि-भक्त कहाई॥",
                        "और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥",
                        "संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥",
                        "जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥",
                        "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥",
                        "जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥",
                        "तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय मंह डेरा॥"
                    ],
                    doha2: [
                        "पवनतनय संकट हरन, मंगल मूरति रूप।",
                        "राम लखन सीता सहित, हृदय बसहु सुर भूप॥"
                    ]
                },
                en: {
                    title: "Shri Hanuman Chalisa",
                    doha1: [
                        "Shri Guru Charan Saroj Raj, Nij Manu Mukuru Sudhaari।",
                        "Barnau Raghubar Bimal Jasu, Jo Daayeku Phal Chaari॥",
                        "Buddhiheen Tanu Jaanike, Sumirau Pavan Kumaar।",
                        "Bal Buddhi Bidya Dehu Mohi, Harahu Kales Bikaar॥"
                    ],
                    chaupai: [
                        "Jai Hanuman Gyaan Gun Saagar। Jai Kapis Tihun Lok Ujaagar॥",
                        "Ramdoot Atulit Bal Dhaama। Anjani Putra Pavansut Naama॥",
                        "Mahavir Vikram Bajrangi। Kumati Nivaar Sumati Ke Sangi॥",
                        "Kanchan Baran Biraaj Subesa। Kaanan Kundal Kunchit Kesa॥",
                        "Haath Bajra Aau Dhwaja Biraaje। Kaandhe Moonj Janeu Saaje॥",
                        "Sankar Suvan Kesari Nandan। Tej Prataap Maha Jag Vandan॥",
                        "Vidyavaan Guni Ati Chaatur। Ram Kaaj Karibe Ko Aatur॥",
                        "Prabhu Charitra Sunibe Ko Rasiya। Ram Lakhan Sita Man Basiya॥",
                        "Sukshma Roop Dhari Siyahi Dikhawa। Bikat Roop Dhari Lanka Jarawa॥",
                        "Bhim Roop Dhari Asur Sanhaare। Ramchandra Ke Kaaj Sanwaare॥",
                        "Laaye Sanjivan Lakhan Jiyaaye। Shri Raghuvir Harashi Ur Laaye॥",
                        "Raghupati Keenhi Bahut Badaai। Tum Mum Priya Bharat Hi Sam Bhaai॥",
                        "Sahas Badan Tumhro Jas Gaavein। As Kahi Shripati Kanth Lagaavein॥",
                        "Sankadik Brahmadi Muneesa। Narad Sarad Sahit Aheesa॥",
                        "Jam Kuber Digpaal Jahan Te। Kabi Kobid Kahi Sake Kahan Te॥",
                        "Tum Upkaar Sugreevahin Keenha। Ram Milaaye Raajpad Deenha॥",
                        "Tumhro Mantra Vibhishan Maana। Lankeshwar Bhaye Sab Jag Jaana॥",
                        "Jug Sahastra Jojan Par Bhaanu। Leelyo Taahi Madhur Phal Jaanu॥",
                        "Prabhu Mudrika Meli Mukh Maahi। Jaladhi Laanghi Gaye Achraj Naahi॥",
                        "Durgam Kaaj Jagat Ke Jete। Sugam Anugraha Tumhre Tete॥",
                        "Ram Duaare Tum Rakhvaare। Hot Na Aagya Binu Paisaare॥",
                        "Sab Sukh Lahai Tumhari Sarna। Tum Rakshak Kaahu Ko Darna॥",
                        "Aapan Tej Samhaaro Aapai। Teenon Lok Haank Te Kaanpen॥",
                        "Bhoot Pishaach Nikat Nahi Aave। Mahavir Jab Naam Sunaave॥",
                        "Naasai Rog Harai Sab Peera। Japat Nirantar Hanumat Beera॥",
                        "Sankat Te Hanuman Chhudave। Man Kram Bachan Dhyaan Jo Laave॥",
                        "Sab Par Ram Tapasvi Raja। Tin Ke Kaaj Sakal Tum Saaja॥",
                        "Aur Manorath Jo Koi Laave। Soi Amit Jivan Phal Paave॥",
                        "Chaaron Jug Partaap Tumhara। Hai Parsiddh Jagat Ujiyara॥",
                        "Saadhu Sant Ke Tum Rakhware। Asur Nikandan Ram Dulaare॥",
                        "Ashta Siddhi Nau Nidhi Ke Daata। As Bar Deen Janaki Maata॥",
                        "Ram Rasayan Tumhre Paasa। Sada Raho Raghupati Ke Daasa॥",
                        "Tumhre Bhajan Ram Ko Paave। Janam Janam Ke Dukh Bisraave॥",
                        "Antkaal Raghuvar Pur Jaai। Jahan Janam Hari Bhakt Kahaai॥",
                        "Aur Devta Chitt Na Dharai। Hanumat Sei Sarb Sukh Karai॥",
                        "Sankat Kate Mite Sab Peera। Jo Sumirai Hanumat Balbeera॥",
                        "Jai Jai Jai Hanuman Gosaai। Kripa Karahun Gurudev Ki Naai॥",
                        "Jo Sat Baar Paath Kare Koi। Chhootahin Bandi Maha Sukh Hoi॥",
                        "Jo Yeh Padhe Hanuman Chalisa। Hoye Siddhi Saakhi Gaureesa॥",
                        "Tulsidas Sada Hari Chera। Keejai Naath Hriday Mahn Dera॥"
                    ],
                    doha2: [
                        "Pavan Tanay Sankat Haran, Mangal Murati Roop।",
                        "Ram Lakhan Sita Sahit, Hriday Basahu Sur Bhoop॥"
                    ]
                }
            },

            meldi: {
                id: 'meldi',
                symbol: '🔱',
                presets: [1, 3, 7, 11, 21],
                defaultTarget: 1,
                info: {
                    gu: "મેલડી માતાની ચાલીસા ભક્તિભાવથી દરરોજ ૧, ૩, ૭ કે ૧૧ વાર કરવામાં આવે છે. શ્રદ્ધાપૂર્વક પાઠ કરવાથી દરેક સંકટ, નકારાત્મકતા અને કષ્ટ દૂર થાય છે.",
                    hi: "मेलडी माता चालीसा का पाठ श्रद्धा से प्रतिदिन १, ३, ७ अथवा ११ बार किया जाता है। नियमित पाठ से सभी संकट, बाधाएं और क्लेश दूर होते हैं।",
                    en: "Meldi Mata Chalisa is devoutly recited 1, 3, 7, or 11 times. Reciting with devotion dispels hardships, negative energies, and brings maternal grace."
                },
                gu: {
                    title: "શ્રી મેલડી માતા ચાલીસા",
                    doha1: [
                        "શારદ માત કૃપા થકી, કરું ગુણોનું ગાન ।",
                        "દિલથી ભજે જે મેલડી, રહે સદા ગુલતાન ॥",
                        "જે કોઈ આ પાઠ કરે નિત્ય, શ્રદ્ધા ધરી મન માંય ।",
                        "મેલડી માત કૃપા કરે, કષ્ટ સઘળાં જાય ॥"
                    ],
                    chaupai: [
                        "મેલડી માત દયા ગુણ સાગર । ત્રણેય લોક ભયે ઉજાગર ॥",
                        "સ્મરણ તારું જે કોઈ કરતું । દુઃખ દારિદ્ર પળમાં હરતું ॥",
                        "અખિલેશ્વરી મહિષાસુર માર્યા । શુભ નિશુભ અસુર સંહાર્યા ॥",
                        "વિશ્વેશ્વરી તું વિશ્વરૂપા હો । કાયમ જગ પર તારી કૃપા હો ॥",
                        "કળિયુગમાં તારો આધાર । બાંય ગ્રહી કરો ભવ પાર ॥",
                        "હે જગજનની વિશ્વવિધાતા । સુમિરનથી મનને મળે શાતા ॥",
                        "રૂપ શતાક્ષી તું હૈ ધારા । ભક્તોને ભવસાગર તાર્યા ॥",
                        "દીન દુખી ભક્તોનો સહારો । નયને વહે સદા અમૃતધારો ॥",
                        "રક્તબીજનું રુધિરપાન કીધું । ચંડિકાને સહાય તું દીધું ॥",
                        "જય પરમેશ્વરી જય મહાકાળી । સહુ દેવીમાં આપ નિરાળી ॥",
                        "મસાણી માત તારું રૂપ નિરાળું । અંધકારમાં પાથરો અજવાળું ॥",
                        "બોખોરા વાસ તારો સાચો । તુજ શરણે ન રહે કોઈ કાચો ॥",
                        "ભાવિક ભક્ત જ્યારે પોકારે । દોડી આવો તું પળવારે ॥",
                        "દુઃખિયાના આંસુડા લૂછનારી । ભક્તજનોની લાજ રાખનારી ॥",
                        "ખડ્ગ ત્રિશૂળ કરમાં સોહાય । જોઈ દાનવ દૂર પલાય ॥",
                        "સિંહાસન પર બેઠા માડી । કૃપા કરો હે મોગલ વાડી ॥",
                        "સુખ સંપત્તિ આપો ઘરમાં । શાંતિ રહે સહુના અંતરમાં ॥",
                        "જે નર નારી દર્શને આવે । મનવાંછિત ફળ તે નર પાવે ॥",
                        "ધૂપ દીપ નૈવેદ્ય ધરાવું । પ્રેમ ભાવથી શીશ ઝુકાવું ॥",
                        "લાલ ચુંદડી અતિ મન ભાવે । ભક્તો ભાવે ચરણ પૂજાવે ॥",
                        "કષ્ટ નિવારણ તારું નામ । પૂર્ણ કરો ભક્તોના કામ ॥",
                        "ભૂત પિશાચ નિકટ ન આવે । મેલડી નામ જે હૈયે ગાવે ॥",
                        "રોગ દોષ સઘળા ટળી જાય । માવડી તારી કૃપા જ્યાં થાય ॥",
                        "સૂર્ય ચંદ્ર તારા ગુણ ગાય । પવન પણ તુજ ચરણે નમાય ॥",
                        "ધર્મ ધજા આકાશે ફરકે । તારું તેજ અખંડ ઝળકે ॥",
                        "માત પિતા ગુરુ તું જ અમારી । અખંડ જ્યોત જલે છે તારી ॥",
                        "નિર્બળને તું બળ આપનારી । નિર્ધનને તું ધન દેનારી ॥",
                        "વાંઝિયાને તું પુત્ર દેનારી । રોગિયાના ભવરોગ હરનારી ॥",
                        "નવરાત્રિમાં પૂજન થાય । ગરબે રમે જગની માય ॥",
                        "સાચા મનથી જે કોઈ ધ્યાવે । તે પરમ પદને પાવે ॥",
                        "હે જગદંબા દયા તું કરજે । ભક્તોના ભંડાર તું ભરજે ॥",
                        "અપરાધ અમારા માફ તું કરજે । દયાળુ દૃષ્ટિ સહુ પર ધરજે ॥",
                        "અંતરમાં તારું ધ્યાન ધરીએ । ભવસાગર સહજમાં તરીએ ॥",
                        "જેણે તારું શરણું લીધું । તેનું તેં કલ્યાણ જ કીધું ॥",
                        "જય જય મેલડી માત ભવાની । તારી મહિમા કોઈ ન જાણી ॥",
                        "અમૃત વાણી સદા સુણાવું । હર્ષ ઉલ્લાસે ગુણ હું ગાવું ॥",
                        "આઠે પહોર આનંદ કરાવે । ભક્તના દુઃખડાં દૂર ભગાવે ॥",
                        "ચાલીસાનો પાઠ જે કરશે । સુખ સમૃદ્ધિ ઘરમાં વરશે ॥",
                        "મેલડી માત સદા સહાયકારી । ચરણે નમે છે દાસ ભિખારી ॥",
                        "જય જય શ્રી મેલડી માત દયાળી । રાખજો સદા અમારી સંભાળી ॥"
                    ],
                    doha2: [
                        "મેલડી માવડી કૃપા કરજો, હરજો ભવના કષ્ટ ।",
                        "રિદ્ધિ સિદ્ધિ સુખ આપજો, કરજો પાપ નષ્ટ ॥"
                    ]
                },
                hi: {
                    title: "श्री मेलडी माता चालीसा",
                    doha1: [
                        "शारद मात कृपा से, करत रहत गुणगान।",
                        "दिल से भजत जो मेलडी, रोज करे गुलतान॥",
                        "जो यह चालीसा पाठ करे नित, श्रद्धा धरि मन मांय।",
                        "मेलडी माई कृपा करे, कष्ट सकल मिट जाय॥"
                    ],
                    chaupai: [
                        "मेलडी मात दया गुण सागर। तीनहु लोक भये हे उजागर॥",
                        "सुमिरन जो परम विश्रामा। ताको जग में है मेलडी नामा॥",
                        "अखिलेश्वरी महिषासुर मारा। शुंभ-निशुंभ असुर संहारा॥",
                        "विश्वेश्वरी तुम विश्व रूपा हो। कायम जग पे तुम्हारी कृपा हो॥",
                        "कलियुग में तेरो ही सहारो। बांय ग्रहो भवसागर तारो॥",
                        "हे जगजननी विश्व विधाता। सुमिरन से मन को मिले शाता॥",
                        "रूप शताक्षी तुमने है धारा। भक्तों को भवसागर तारा॥",
                        "दीन दुःखी भक्तों का सहारा। नयन बहत सदा अमृतधारा॥",
                        "रक्तबीज का रुधिरपान कीन्हा। चंडिका को मदद तुम दीन्हा॥",
                        "जय परमेश्वरी जय महाकाली। सबही देवी से आप निराली॥",
                        "मसाणी मात तेरो रूप निराला। अंधकार में फैले उजियाला॥",
                        "बोखोरा वास तेरो है साचा। तव शरणे नहिं डोले काचा॥",
                        "भाविक भक्त जब भी पुकारे। दौड़ी आवो तुम इक पलवारे॥",
                        "दुखियों के आंसू पोंछनहारी। भक्तजनों की लाज रखनहारी॥",
                        "खड्ग त्रिशूल कर में सोहे। देख दानव दल भय से मोहे॥",
                        "सिंहासन पर बैठी माता। कृपा करो हे भाग्य विधाता॥",
                        "सुख संपत्ति देवो घर में। शांति विराजे सबके मन में॥",
                        "जो नर-नारी दर्शन पावे। मनवांछित फल सो फल पावे॥",
                        "धूप दीप नैवेद्य चढ़ाऊं। प्रेम भाव से शीश झुकाऊं॥",
                        "लाल चुनरी अति मन भावे। भक्त प्रेम से चरण दबावे॥",
                        "कष्ट निवारण तेरो नामा। पूर्ण करो भक्तों के कामा॥",
                        "भूत पिशाच निकट नहिं आवै। मेलडी नाम जो उर में गावै॥",
                        "रोग दोष सब ही टल जाहीं। मातु कृपा जब होई मन माहीं॥",
                        "सूर्य चंद्र तव यश को गावें। पवन देव चरणन सिर नावें॥",
                        "धर्म ध्वजा अम्बर फहरावे। तेरो तेज अखंड जगावे॥",
                        "मात-पिता गुरु तुम्हीं हमारी। अखंड ज्योति जलती है तुम्हारी॥",
                        "निर्बल को तुम बल देनहारी। निर्धन को धन दौलत सारी॥",
                        "बांझिन को सुत देन सुजाना। रोगी को काया कल्याणा॥",
                        "नवरात्रन में पूजन होवे। गरबा खेलत जग सुख जोवे॥",
                        "सच्चे मन से जो कोई ध्यावे। परम धाम को सहजहिं पावे॥",
                        "हे जगदम्बे दया तुम करना। भक्तों के भंडार को भरना॥",
                        "अपराध हमारे क्षमा तुम कीजो। दया दृष्टि सब पर धर दीजो॥",
                        "अंतर में तव ध्यान धरेंगे। भवसागर से पार उतरेंगे॥",
                        "जिसने तव शरणागति लीनी। तुमने उसको मुक्ति दीनी॥",
                        "जय जय मेलडी मात भवानी। महिमा तव नहिं जाये बखानी॥",
                        "अमृत वाणी सदा सुनाऊं। हर्ष-उमंग से गुण तव गाऊं॥",
                        "आठों पहर आनंद करावे। भक्तन के दुख दूर भगावे॥",
                        "चालीसा जो नित्य सुनावे। सुख-समृद्धि सो नर पावे॥",
                        "मेलडी मात सदा हितकारी। चरण शरण में दास भिखारी॥",
                        "जय जय श्री मेलडी माता। सब सुख शांति की हो दाता॥"
                    ],
                    doha2: [
                        "मेलडी मावड़ी कृपा करो, हरो भवोभव कष्ट।",
                        "ऋद्धि सिद्धि सुख दीजिये, करो पाप सब नष्ट॥"
                    ]
                },
                en: {
                    title: "Shri Meldi Mata Chalisa",
                    doha1: [
                        "Sharad Maat Kripa Thaki, Karu Gunonu Gaan।",
                        "Dilthi Bhaje Je Meldi, Rahe Sada Gultaan॥",
                        "Je Koi Aa Paath Kare Nitya, Shraddha Dhari Man Maay।",
                        "Meldi Maat Kripa Kare, Kasht Saghala Jaaye॥"
                    ],
                    chaupai: [
                        "Meldi Maat Daya Gun Sagar। Traney Lok Bhaye Ujagar॥",
                        "Smaran Taaru Je Koi Kartu। Dukh Daridra Palma Hartu॥",
                        "Akhileshwari Mahishasur Maarya। Shumbh Nishumbh Asur Sanhaarya॥",
                        "Vishweshwari Tu Vishwaroopa Ho। Kayam Jag Par Taari Kripa Ho॥",
                        "Kaliyugma Taaro Aadhar। Baay Grahi Karo Bhav Paar॥",
                        "Hey Jagjanani Vishwavidhata। Sumiranthi Manne Male Shaata॥",
                        "Roop Shatakshi Tu Hai Dhaara। Bhakto Ne Bhavsagar Taarya॥",
                        "Deen Dukhi Bhaktono Sahaaro। Nayane Vahe Sada Amritdhaaro॥",
                        "Raktabeejnu Rudhirpaan Keedhu। Chandika Ne Sahay Tu Deedhu॥",
                        "Jai Parameshwari Jai Mahakali। Sahuko Devima Aap Niraali॥",
                        "Masani Maat Taaru Roop Niraalu। Andhakaarma Paathro Ajwaalu॥",
                        "Bokhora Vaas Taaro Saacho। Tuj Sharane Na Rahe Koi Kaacho॥",
                        "Bhavik Bhakt Jyaare Pokaare। Dodi Aavo Tu Palvaare॥",
                        "Dukhiyana Aasuda Loothnaari। Bhaktajononi Laaj Raakhnaari॥",
                        "Khadag Trishul Karma Sohaay। Joi Daanav Door Palaay॥",
                        "Singhasan Par Betha Maadi। Kripa Karo Hey Mogal Vaadi॥",
                        "Sukh Sampatti Aapo Ghar Ma। Shaanti Rahe Sahuna Antar Ma॥",
                        "Je Nar Nari Darshane Aave। Manvaanchhit Phal Te Nar Paave॥",
                        "Dhoop Deep Naivedya Dharaavu। Prem Bhaavthi Sheesh Zhukaavu॥",
                        "Laal Chundadi Ati Man Bhaave। Bhakto Bhaave Charan Pujaave॥",
                        "Kasht Nivaaran Taaru Naam। Poorna Karo Bhaktona Kaam॥",
                        "Bhoot Pishaach Nikat Na Aave। Meldi Naam Je Haiye Gaave॥",
                        "Rog Dosh Saghala Tali Jaaye। Maavadi Taari Kripa Jya Thay॥",
                        "Surya Chandra Taara Gun Gaay। Pavan Pan Tuj Charane Namaay॥",
                        "Dharm Dhwaja Aakashe Farke। Taaru Tej Akhand Zalke॥",
                        "Maat Pita Guru Tu J Amaari। Akhand Jyot Jale Chhe Taari॥",
                        "Nirbal Ne Tu Bal Aapnaari। Nirdhan Ne Tu Dhan Denaari॥",
                        "Vanzhiyane Tu Putra Denaari। Rogiyana Bhavrog Harnaari॥",
                        "Navratri Ma Poojan Thaay। Garbe Rame Jagni Maay॥",
                        "Saacha Manthi Je Koi Dhyaave। Te Param Padne Paave॥",
                        "Hey Jagdamba Daya Tu Karje। Bhaktona Bhandaar Tu Bharje॥",
                        "Apradh Amaara Maaf Tu Karje। Dayalu Drashti Sahu Par Dharje॥",
                        "Antarma Taaru Dhyan Dharie। Bhavsagar Sahajma Tarie॥",
                        "Jene Taaru Sharano Leedhu। Tenu Te Kalyaan J Keedhu॥",
                        "Jai Jai Meldi Maat Bhavani। Taari Mahima Koi Na Jaani॥",
                        "Amrit Vaani Sada Sunaavu। Harsh Ullaase Gun Hu Gaavu॥",
                        "Aathe Pahor Aanand Karaave। Bhaktna Dukhada Door Bhagaave॥",
                        "Chalisa No Paath Je Karshe। Sukh Samriddhi Ghar Ma Varshe॥",
                        "Meldi Maat Sada Sahaaykari। Charane Name Chhe Daas Bhikhaari॥",
                        "Jai Jai Shri Meldi Maat Dayali। Raakhjo Sada Amaari Sambhaali॥"
                    ],
                    doha2: [
                        "Meldi Maavadi Kripa Karjo, Harjo Bhavna Kasht।",
                        "Riddhi Siddhi Sukh Aapjo, Karjo Paap Nasht॥"
                    ]
                }
            },

            shani: {
                id: 'shani',
                symbol: '🪐',
                presets: [1, 3, 7, 11, 40, 108],
                defaultTarget: 7,
                info: {
                    gu: "શનિ ચાલીસાનો પાઠ શ્રદ્ધા મુજબ ૧, ૩, ૭, ૧૧, ૪૦ કે ૧૦૮ વાર કરી શકાય છે. શનિવારે તેલનો દીવો કરી પાઠ કરવાથી શનિ સાડાસાતી અને ગ્રહદોષ દૂર થાય છે.",
                    hi: "शनि चालीसा का पाठ १, ३, ७, ११, ४० या १०८ बार कर सकते हैं। शनिवार के दिन दीपक जलाकर पाठ करने से शनि की साढ़ेसाती व ढैय्या के कष्ट शांत होते हैं।",
                    en: "Reciting Shani Chalisa 1, 3, 7, 11, 40, or 108 times brings relief from astrological afflictions, removes obstacles, and bestows Lord Shani's protective grace."
                },
                gu: {
                    title: "શ્રી શનિ ચાલીસા",
                    doha1: [
                        "જય ગણેશ ગિરિજા સુવન, મંગલ કરણ કૃપાલ ।",
                        "દીનન કે દુખ દૂર કરિ, કીજૈ નાથ નિહાલ ॥",
                        "જય જય શ્રી શનિદેવ પ્રભુ, સુનહુ વિનય મહારાજ ।",
                        "કરહુ કૃપા હે રવિ તનય, રાખહુ જન કી લાજ ॥"
                    ],
                    chaupai: [
                        "જયતિ જયતિ શનિદેવ દયાલા । કરત સદા ભક્તન પ્રતિપાલા ॥",
                        "ચારિ ભુજા, તનુ શ્યામ વિરાજૈ । માથે રતન મુકુટ છવિ છાજૈ ॥",
                        "પરમ વિશાલ મનોહર ભાલા । ટેઢી દૃષ્ટિ ભૃકુટિ વિકરાલા ॥",
                        "કુંડલ શ્રવણ ચમાચમ ચમકે । હિયે માલ મુક્તન મણિ દમકે ॥",
                        "કર મેં ગદા ત્રિશૂલ કુઠારા । પલ બિચ કરૈં અરિહિં સંહારા ॥",
                        "પિંગલ, કૃષ્ણો, છાયા નન્દન । યમ, કોણસ્થ, રૌદ્ર, દુઃખભંજન ॥",
                        "સૌરી, મંદ, શની, દશ નામા । ભાનુ પુત્ર પૂજહિં સબ કામા ॥",
                        "જા પર પ્રભુ પ્રસન્ન હ્વૈં જાહીં । રંકહું રાવ કરૈં ક્ષણ માહીં ॥",
                        "પર્વતહૂ તૃણ હોઈ નિહારત । તૃણહૂ કો પર્વત કરિ ડારત ॥",
                        "રાજ મિલત બન રામહિં દીન્હયો । કૈકેઈ કી મતિ હરિ લીન્હયો ॥",
                        "બનહું મેં મૃગ કપટ દિખાઈ । માતુ જાનકી ગઈ ચુરાઈ ॥",
                        "લખનહિં શક્તિ વિકલ કરિડારા । મચિગા દલ મેં હાહાકારા ॥",
                        "રાવણ કી ગતિ-મતિ બૌરાઈ । રામચન્દ્ર સોં બૈર બઢાઈ ॥",
                        "દિયો કીટ કરિ કંચન લંકા । બજિ બજરંગ બીર કી ડંકા ॥",
                        "નૃપ વિક્રમ પર તુહિ પગુ ધારા । ચિત્ર મયૂર નિગલિ ગૈ હારા ॥",
                        "હાર નૌલખા લાગ્યો ચોરી । હાથ પૈર ડરવાયો તોરી ॥",
                        "ભારી દશા નિકૃષ્ટ દિખાયો । તેલિહિં ઘર કોલ્હૂ ચલવાયો ॥",
                        "વિનય રાગ દીપક મહં કીન્હોં । તબ પ્રસન્ન પ્રભુ હ્વૈ સુખ દીન્હોં ॥",
                        "હરિશ્ચન્દ્ર નૃપ નારિ બિકાની । આપહું ભરે ડોમ ઘર પાની ॥",
                        "તૈસે નલ પર દશા સિરાની । ભૂંજી-મીન કૂદ ગઈ પાની ॥",
                        "શ્રી શંકરહિં ગહ્યો જબ જાઈ । પાર્વતી કો સતી કરાઈ ॥",
                        "તનિક વિલોકત હી કરિ રીસા । નભ ઉડિ ગયો ગૌરીસુત સીસા ॥",
                        "પાંડવ પર ભૈ દશા તુમ્હારી । બચી દ્રૌપદી હોતિ ઉઘારી ॥",
                        "કૌરવ કે ભી ગતિ મતિ મારયો । યુદ્ધ મહાભારત કરિ ડારયો ॥",
                        "રવિ કહં મુખ મહં ધરિ તત્કાલા । લેકર કૂદિ પરયો પાતાલા ॥",
                        "શેષ દેવ-લખિ વિનતી લાઈ । રવિ કો મુખ તે દિયો છુડાઈ ॥",
                        "વાહન પ્રભુ કે સાત સુજાના । જગ દિગ્ગજ ગર્દભ મૃગ સ્વાના ॥",
                        "જમ્બુક સિંહ આદિ નખ ધારી । સો ફલ જ્યોતિષ કહત પુકારી ॥",
                        "ગજ વાહન લક્ષ્મી ગૃહ આવૈં । હય તે સુખ સમ્પત્તિ ઉપજાવૈં ॥",
                        "ગર્દભ હાનિ કરૈ બહુ કાજા । સિંહ સિદ્ધકર રાજ સમાજા ॥",
                        "જમ્બુક બુદ્ધિ નષ્ટ કર ડારૈ । મૃગ દે કષ્ટ પ્રાણ સંહારૈ ॥",
                        "જબ આવહિં પ્રભુ સ્વાન સવારી । ચોરી આદિ હોય ડર ભારી ॥",
                        "તૈસહિ ચારિ ચરણ યહ નામા । સ્વર્ણ, લૌહ, ચાંદી અરુ તામા ॥",
                        "લૌહ ચરણ પર જબ પ્રભુ આવૈં । ધન જન સમ્પત્તિ નષ્ટ કરાવૈં ॥",
                        "સમતા તામ્ર રજત શુભકારી । સ્વર્ણ સર્વસુખ મંગલ ભારી ॥",
                        "જો યહ શનિ ચરિત્ર નિત ગાવૈ । કબહું ન દશા નિકૃષ્ટ સતાવૈ ॥",
                        "અદ્ભુત નાથ દિખાવૈં લીલા । કરૈં શત્રુ કે નશિ બલિ ઢીલા ॥",
                        "જો પણ્ડિત સુયોગ્ય બુલવાઈ । વિધિવત શનિ ગ્રહ શાંતિ કરાઈ ॥",
                        "પીપલ જલ શનિ દિવસ ચઢાવત । દીપ દાન દૈ બહુ સુખ પાવત ॥",
                        "કહત રામ સુંદર પ્રભુ દાસા । શનિ સુમિરત સુખ હોત પ્રકાશા ॥"
                    ],
                    doha2: [
                        "પાઠ શનિશ્ચર દેવ કો, કી હો ભક્ત તૈયાર ।",
                        "કરત પાઠ ચાલીસ દિન, હો ભવસાગર પાર ॥"
                    ]
                },
                hi: {
                    title: "श्री शनि चालीसा",
                    doha1: [
                        "जय गणेश गिरिजा सुवन, मंगल करण कृपाल।",
                        "दीनन के दुख दूर करि, कीजै नाथ निहाल॥",
                        "जय जय श्री शनिदेव प्रभु, सुनहु विनय महाराज।",
                        "करहु कृपा हे रवि तनय, राखहु जन की लाज॥"
                    ],
                    chaupai: [
                        "जयति जयति शनिदेव दयाला। करत सदा भक्तन प्रतिपाला॥",
                        "चारि भुजा, तनु श्याम विराजै। माथे रतन मुकुट छवि छाजै॥",
                        "परम विशाल मनोहर भाला। टेढ़ी दृष्टि भृकुटि विकराला॥",
                        "कुण्डल श्रवण चमाचम चमके। हिये माल मुक्तन मणि दमके॥",
                        "कर में गदा त्रिशूल कुठारा। पल बिच करैं अरिहिं संहारा॥",
                        "पिंगल, कृष्णो, छाया नन्दन। यम, कोणस्थ, रौद्र, दुःखभंजन॥",
                        "सौरी, मन्द, शनी, दश नामा। भानु पुत्र पूजहिं सब कामा॥",
                        "जा पर प्रभु प्रसन्न ह्वैं जाहीं। रंकहुं राव करैं क्षण माहीं॥",
                        "पर्वतहू तृण होई निहारत। तृणहू को पर्वत करि डारत॥",
                        "राज मिलत बन रामहिं दीन्हयो। कैकेइहुं की मति हरि लीन्हयो॥",
                        "बनहूं में मृग कपट दिखाई। मातु जानकी गई चुराई॥",
                        "लखनहिं शक्ति विकल करिडारा। मचिगा दल में हाहाकारा॥",
                        "रावण की गति-मति बौराई। रामचन्द्र सों बैर बढ़ाई॥",
                        "दियो कीट करि कंचन लंका। बजि बजरंग बीर की डंका॥",
                        "नृप विक्रम पर तुहि पगु धारा। चित्र मयूर निगलि गै हारा॥",
                        "हार नौलखा लाग्यो चोरी। हाथ पैर डरवायो तोरी॥",
                        "भारी दशा निकृष्ट दिखायो। तेलिहिं घर कोल्हू चलवायो॥",
                        "विनय राग दीपक महं कीन्हों। तब प्रसन्न प्रभु ह्वै सुख दीन्हों॥",
                        "हरिश्चन्द्र नृप नारि बिकानी। आपहुं भरे डोम घर पानी॥",
                        "तैसे नल पर दशा सिरानी। भूंजी-मीन कूद गई पानी॥",
                        "श्री शंकरहिं गह्यो जब जाई। पारवती को सती कराई॥",
                        "तनिक विलोकत ही करि रीसा। नभ उड़ि गयो गौरिसुत सीसा॥",
                        "पाण्डव पर भै दशा तुम्हारी। बची द्रौपदी होति उघारी॥",
                        "कौरव के भी गति मति मारयो। युद्ध महाभारत करि डारयो॥",
                        "रवि कहं मुख महं धरि तत्काला। लेकर कूदि परयो पाताला॥",
                        "शेष देव-लखि विनती लाई। रवि को मुख ते दियो छुड़ाई॥",
                        "वाहन प्रभु के सात सुजाना। जग दिग्गज गर्दभ मृग स्वाना॥",
                        "जम्बुक सिंह आदि नख धारी। सो फल ज्योतिष कहत पुकारी॥",
                        "गज वाहन लक्ष्मी गृह आवैं। हय ते सुख सम्पत्ति उपजावैं॥",
                        "गर्दभ हानि करै बहु काजा। सिंह सिद्धकर राज समाजा॥",
                        "जम्बुक बुद्धि नष्ट कर डारै। मृग दे कष्ट प्राण संहारै॥",
                        "जब आवहिं प्रभु स्वान सवारी। चोरी आदि होय डर भारी॥",
                        "तैसहि चारि चरण यह नामा। स्वर्ण, लौह, चांदी अरु तामा॥",
                        "लौह चरण पर जब प्रभु आवैं। धन जन सम्पत्ति नष्ट करावैं॥",
                        "समता ताम्र रजत शुभकारी। स्वर्ण सर्वसुख मंगल भारी॥",
                        "जो यह शनि चरित्र नित गावै। कबहुं न दशा निकृष्ट सतावै॥",
                        "अद्भुत नाथ दिखावैं लीला। करैं शत्रु के नशि बलि ढीला॥",
                        "जो पण्डित सुयोग्य बुलवाई। विधिवत शनि ग्रह शांति कराई॥",
                        "पीपल जल शनि दिवस चढ़ावत। दीप दान दै बहु सुख पावत॥",
                        "कहत राम सुन्दर प्रभु दासा। शनि सुमिरत सुख होत प्रकाशा॥"
                    ],
                    doha2: [
                        "पाठ शनिश्चर देव को, की हों भक्त तैयार।",
                        "करत पाठ चालीस दिन, हो भवसागर पार॥"
                    ]
                },
                en: {
                    title: "Shri Shani Chalisa",
                    doha1: [
                        "Jai Ganesh Girija Suvan, Mangal Karan Kripal।",
                        "Deenan Ke Dukh Door Kari, Kijei Nath Nihal॥",
                        "Jai Jai Shri Shanidev Prabhu, Sunahu Vinay Maharaj।",
                        "Karahu Kripa Hey Ravi Tanay, Rakhu Jan Ki Laj॥"
                    ],
                    chaupai: [
                        "Jayati Jayati Shanidev Dayala। Karat Sada Bhaktan Pratipala॥",
                        "Chari Bhuja, Tanu Shyam Virajai। Mathe Ratan Mukut Chhavi Chhajai॥",
                        "Param Vishal Manohar Bhala। Tedhi Drishti Bhrkuti Vikarala॥",
                        "Kundal Shravan Chamacham Chamake। Hiye Maal Muktan Mani Damake॥",
                        "Kar Me Gada Trishul Kuthara। Pal Bich Karai Arihi Sanhara॥",
                        "Pingal, Krshno, Chhaya Nandan। Yum, Konasth, Raudra, Dukh Bhanjan॥",
                        "Sauri, Mand Shani, Dash Nama। Bhanu Putra Pujahe Sab Kama॥",
                        "Japar Prabhu Prasann Have Jahi। Rankahu Raav Karai Kshan Maahi॥",
                        "Parvatahu Trin Hoi Niharat। Trinahu Ko Parvat Kari Darat॥",
                        "Raj Milt Ban Ramhi Dinhayo। Kaikeihu Ki Mati Hari Linhayo॥",
                        "Banhu Me Mrg Kapat Dikhai। Matu Janki Gai Churai॥",
                        "Lashanahi Shakti Vikal Karidara। Machiga Dal Me Hahakara॥",
                        "Ravan Ki Gati-Mati Baurai। Ramachandra So Bair Badhai॥",
                        "Diyo Kit Kari Kanchan Lanka। Baji Bajarang Bir Ki Danka॥",
                        "Nrp Vikram Par Tuhi Pagu Dhara। Chitra Mayoor Nigali Gai Hara॥",
                        "Har Naulakha Lagyo Chori। Hath Pair Daravayo Tori॥",
                        "Bhari Dasha Nikrsht Dikhayo। Telahi Ghar Kolhu Chalvayo॥",
                        "Vinay Rag Dipak Mah Kinhayo। Tab Prasann Prabhu Hvai Sukh Dinhayo॥",
                        "Harishchandra Nrp Nari Bikani। Aaphu Bhare Dom Ghar Pani॥",
                        "Taise Nal Par Dasha Sirani। Bhunji-Min Kud Gai Pani॥",
                        "Shri Shankarahi Gahyo Jab Jai। Paravati Ko Sati Karai॥",
                        "Tanik Vilokat Hi Kari Risa। Nabh Udi Gayo Gaurisut Sisa॥",
                        "Pandav Par Bhai Dasha Tumhari। Bachi Dropadi Hoti Ughari॥",
                        "Kaurav Ke Bhi Gati Mati Marayo। Yuddh Mahabharat Kari Darayo॥",
                        "Ravi Kah Mukh Mah Dhari Tatkala। Lekar Kudi Parayo Patala॥",
                        "Shesh Dev-Lakhi Vinati Lai। Ravi Ko Mukh Te Diyo Chhudai॥",
                        "Vahan Prabhu Ke Sat Sujana। Jag Diggaj Gardabh Mrg Svana॥",
                        "Jambuk Sinh Aadi Nakh Dhari। So Phal Jyotish Kahat Pukari॥",
                        "Gaj Vahan Lakshmi Grh Avai। Hay Te Sukh Sampatti Upajavai॥",
                        "Gardabh Hani Karai Bahu Kaja। Sinh Siddhi Kar Raj Samaja॥",
                        "Jambuk Buddhi Nasht Kar Darai। Mrg De Kasht Pran Sanharai॥",
                        "Jab Avahi Prabu Svan Savari। Chori Aadi Hoy Dar Bhari॥",
                        "Taisahi Chari Charan Yah Nama। Svarn Lauh Chandi Aru Tama॥",
                        "Lauh Charan Par Jab Prabu Avai। Dhan Jan Sampatti Nasht Karavai॥",
                        "Samta Tamra Rajat Shubhakari। Svarn Sarvasukh Mangal Bhari॥",
                        "Jo Yah Shani Charitra Nit Gavai। Kabahu Na Dasha Nikrsht Satavai॥",
                        "Adbhut Nath Dikhavai Lila। Karai Shatru Ke Nashi Bali Dhila॥",
                        "Jo Pandit Suyogya Bulavai। Vidhivat Shani Grah Shanti Karai॥",
                        "Pipal Jal Shani Divas Chadhavat। Dip Dan Dai Bahu Sukh Pavat॥",
                        "Kahat Ram Sundar Prabu Dasa। Shani Sumirat Sukh Hot Prakasha॥"
                    ],
                    doha2: [
                        "Path Shanishchar Dev Ko, Ki Ho Bhakt Taiyar।",
                        "Karat Path Chalis Din, Ho Bhavasagar Paar॥"
                    ]
                }
            },

            shiv: {
                id: 'shiv',
                symbol: '🔱',
                presets: [1, 3, 7, 11, 21, 108],
                defaultTarget: 11,
                info: {
                    gu: "શ્રી શિવ ચાલીસાનો પાઠ સોમવારે અથવા પ્રદોષ વ્રતે કરવાથી મન શાંત થાય છે અને મહાદેવ શંભુની અનંત કૃપા પ્રાપ્ત થાય છે.",
                    hi: "श्री शिव चालीसा का पाठ सोमवार तथा प्रदोष काल में करने से मन को शांति तथा भोलेनाथ की असीम कृपा प्राप्त होती है।",
                    en: "Chanting Shiva Chalisa on Mondays brings peace of mind, fearlessness, and the supreme blessings of Lord Mahadev."
                },
                gu: {
                    title: "શ્રી શિવ ચાલીસા",
                    doha1: [
                        "જય ગણેશ ગિરિજા સુવન, મંગલ મૂલ સુજાન ।",
                        "કહત અયોધ્યાદાસ તુમ, દેહુ અભય વરદાન ॥"
                    ],
                    chaupai: [
                        "જય ગિરિજાપતિ દીનદયાલા । સદા કરત સંતન પ્રતિપાલા ॥",
                        "ભાલ ચંદ્રમા સોહત નીકે । કાનન કુંડલ નાગફની કે ॥",
                        "અંગ ગૌર શિર ગંગ બહાયે । મુંડમાલ તન છાર લગાયે ॥",
                        "વસ્ત્ર ખાલ બાઘમ્બર સોહૈ । છવિ કો દેખિ નાગ મન મોહૈ ॥",
                        "મૈના માતુ કી હવૈ દુલારી । બામ અંગ સોહત છવિ ન્યારી ॥",
                        "કર ત્રિશૂલ સોહત સુચિકારી । કરત સદા શત્રુન ક્ષયકારી ॥",
                        "નંદિ ગણેશ સોહૈં તહં કૈસે । સાગર મધ્ય કમલ હૈં જૈસે ॥",
                        "કાર્તિક શ્યામ ગણ ગણનાથા । સોહત છવિ કછુ કહી ન જાતા ॥",
                        "દેવન જબહીં જાય પુકારા । તબહીં દુઃખ પ્રભુ આપ નિવારા ॥",
                        "કિયા ઉપદ્રવ તારક ભારી । દેવન સબ મિલિ તુમહિં જુહારી ॥",
                        "તુરત ષડાનન આપ પઠાયૌ । લવનિમેષ મહં મારિ ગિરાયૌ ॥",
                        "આપ જલંધર અસુર સંહારા । સુયશ તુમ્હાર વિદિત સંસારા ॥",
                        "ત્રિપુરાસુર સન યુદ્ધ મચાઈ । સબહિં કૃપા કરિ લીન બચાઈ ॥",
                        "દાનિન મહં તુમ સમ કોઉ નાહીં । સેવક સ્તુતિ કરત સદાહીં ॥",
                        "વેદ માહિં મહિમા તવ ગાઈ । અકથ અનાદિ ભેદ નહિં પાઈ ॥",
                        "પ્રકટી ઉદધિ મંથન મેં જ્વાલા । જરત સુરાસુર ભયે વિહાલા ॥",
                        "કીન્હ દયા તહં કરી સહાઈ । નીલકંઠ તબ નામ કહાઈ ॥",
                        "પૂજન રામચંદ્ર જબ કીન્હા । જીત કે લંક વિભીષણ દીન્હા ॥",
                        "સહસ કમલ મેં હો રહે ધારી । કીન્હ પરીક્ષા તબહિં ત્રિપુરારી ॥",
                        "એક કમલ પ્રભુ રાખેઉ ગોઈ । કમલ નયન પૂજન ચહં સોઈ ॥",
                        "કઠિન ભક્તિ દેખી પ્રભુ શંકર । ભયે પ્રસન્ન દિયે ઇચ્છિત વર ॥",
                        "જય જય જય અનંત અવિનાશી । કરત કૃપા સબકે ઘટવાસી ॥",
                        "દુષ્ટ સકલ નિત મોહિ સતાવૈં । ભ્રમત રહૌં મોહિ ચૈન ન આવૈ ॥",
                        "ત્રાહિ ત્રાહિ મૈં નાથ પુકારો । યહ અવસર મોહિ આન ઉબારો ॥",
                        "લે ત્રિશૂલ શત્રુન કો મારો । સંકટ તે મોહિ આન ઉબારો ॥",
                        "માત-પિતા ભ્રાતા સબ કોઈ । સંકટ મેં પૂછત નહિં કોઈ ॥",
                        "સ્વામી એક હૈ આસ તુમ્હારી । આય હરહુ મમ સંકટ ભારી ॥",
                        "ધન નિર્ધન કો દેત સદાહીં । જો કોઈ જાંચે સો ફલ પાહીં ॥",
                        "સ્તુતિ કેહિ બિધિ કરૌં તુમ્હારી । શમહુ નાથ અબ ચુક હમારી ॥",
                        "શંકર હો સંકટ કે નાશન । મંગલ કારણ વિઘ્ન વિનાશન ॥",
                        "યોગી યતિ મુનિ ધ્યાન લગાવૈં । શારદ નારદ શીશ નવાવૈં ॥",
                        "નમો નમો જય નમઃ શિવાય । સુર બ્રહ્માદિક સુપાર ન પાય ॥",
                        "જો યહ પાઠ કરે મન લાઈ । તા પર હોત શંભુ સહાઈ ॥",
                        "ઋણિયા જો કોઈ હો અધિકારી । પાઠ કરે સો હોય સુખારી ॥",
                        "પુત્રહીન જો કોઈ નર હોઈ । સબ વિધિ સુખ પાવે સોઈ ॥",
                        "પંડિત ત્રયોદશી કો લાવે । ધ્યાનપૂર્વક હોમ કરાવે ॥",
                        "ત્રયોદશી વ્રત કરે હંમેશા । તન નહિં તાકે રહે કલેશા ॥",
                        "ધૂપ દીપ નૈવેદ્ય ચઢાવે । શંકર સન્મુખ પાઠ સુનાવે ॥",
                        "જન્મ જન્મ કે પાપ નસાવૈ । અંતવાસ શિવપુર મેં પાવૈ ॥",
                        "કહૈ અયોધ્યાદાસ આસ તુમ્હારી । જાની સકલ દુઃખ હરહુ હમારી ॥"
                    ],
                    doha2: [
                        "નિત્ય નેમ કરિ પ્રાતઃ હી, પાઠ કરો ચાલીસ ।",
                        "તુમ મનવાંછિત ફલ પાવો, કૃપા કરૈં ગૌરીશ ॥"
                    ]
                },
                hi: {
                    title: "श्री शिव चालीसा",
                    doha1: [
                        "जय गणेश गिरिजा सुवन, मंगल मूल सुजान।",
                        "कहत अयोध्यादास तुम, देहु अभय वरदान॥"
                    ],
                    chaupai: [
                        "जय गिरिजापति दीनदयाला। सदा करत संतन प्रतिपाला॥",
                        "भाल चंद्रमा सोहत नीके। कानन कुंडल नागफनी के॥",
                        "अंग गौर शिर गंग बहाये। मुंडमाल तन छार लगाये॥",
                        "वस्त्र खाल बाघम्बर सोहै। छवि को देखि नाग मन मोहै॥",
                        "मैना मातु की हवै दुलारी। बाम अंग सोहत छवि न्यारी॥",
                        "कर त्रिशूल सोहत सुचिकारी। करत सदा शत्रुन क्षयकारी॥",
                        "नंदि गणेश सोहैं तहं कैसे। सागर मध्य कमल हैं जैसे॥",
                        "कार्तिक श्याम गण गणauthor। सोहत छवि कछु कही न जाता॥",
                        "देवन जबहीं जाय पुकारा। तबहीं दुःख प्रभु आप निवारा॥",
                        "किया उपद्रव तारक भारी। देवन सब मिलि तुमहिं जुहारी॥",
                        "तुरत षडानन आप पठायौ। लवनिमेष महं मारि गिरायौ॥",
                        "आप जलंधर असुर संहारा। सुयश तुम्हार विदित संसारा॥",
                        "त्रिपुरासुर सन युद्ध मचाई। सबहिं कृपा करि लीन बचाई॥",
                        "दानिन महं तुम सम कोउ नाहीं। सेवक स्तुति करत सदाहीं॥",
                        "वेद माहिं महिमा तव गाई। अकथ अनादि भेद नहिं पाई॥",
                        "प्रकटी उदधि मंथन में ज्वाला। जरत सुरासुर भये विहाला॥",
                        "कीन्ह दया तहं करी सहाई। नीलकंठ तब नाम कहाई॥",
                        "पूजन रामचंद्र जब कीन्हा। जीत के लंक विभीषण दीन्हा॥",
                        "सहस कमल में हो रहे धारी। कीन्ह परीक्षा तबहिं त्रिपुरारी॥",
                        "एक कमल प्रभु राखेउ गोई। कमल नयन पूजन चहं सोई॥",
                        "कठिन भक्ति देखी प्रभु शंकर। भये प्रसन्न दिये इच्छित वर॥",
                        "जय जय जय अनंत अविनाशी। करत कृपा सबके घटवासी॥",
                        "दुष्ट सकल नित मोहि सतावैं। भ्रमत रहौं मोहि चैन न आवै॥",
                        "त्राहि त्राहि मैं नाथ पुकारो। यह अवसर मोहि आन उबारो॥",
                        "ले त्रिशूल शत्रुन को मारो। संकट ते मोहि आन उबारो॥",
                        "मात-पिता भ्राता सब कोई। संकट में पूछत नहिं कोई॥",
                        "स्वामी एक है आस तुम्हारी। आय हरहु मम संकट भारी॥",
                        "धन निर्धन को देत सदाहीं। जो कोई जांचे सो फल पाहीं॥",
                        "स्तुति केहि बिधि करौं तुम्हारी। शमहु नाथ अब चुक हमारी॥",
                        "शंकर हो संकट के नाशन। मंगल कारण विघ्न विनाशन॥",
                        "योगी यति मुनि ध्यान लगावैं। शारद नारद शीश नवावैं॥",
                        "नमो नमो जय नमः शिवाय। सुर ब्रह्मादिक सुपार न पाय॥",
                        "जो यह पाठ करे मन लाई। ता पर होत शंभु सहाई॥",
                        "ऋणिया जो कोई हो अधिकारी। पाठ करे सो होय सुखारी॥",
                        "पुत्रहीन जो कोई नर होई। सब विधि सुख पावे सोई॥",
                        "पंडित त्रयोदशी को लावे। ध्यानपूर्वक होम करावे॥",
                        "त्रयोदशी व्रत करे हमेशा। तन नहिं ताके रहे कलेशा॥",
                        "धूप दीप नैवेद्य चढ़ावे। शंकर सम्मुख पाठ सुनावे॥",
                        "जन्म जन्म के पाप नसावै। अंतवास शिवपुर में पावै॥",
                        "कहै अयोध्यादास आस तुम्हारी। जानी सकल दुःख हरहु हमारी॥"
                    ],
                    doha2: [
                        "नित्य नेम करि प्रातः ही, पाठ करो चालीस।",
                        "तुम मनवांछित फल पावौ, कृपा करें गौरीश॥"
                    ]
                },
                en: {
                    title: "Shri Shiv Chalisa",
                    doha1: [
                        "Jai Ganesh Girija Suvan, Mangal Mool Sujaan।",
                        "Kahat Ayodhyadas Tum, Dehu Abhay Vardaan॥"
                    ],
                    chaupai: [
                        "Jai Girijapati Deendayala। Sada Karat Santan Pratipala॥",
                        "Bhaal Chandrama Sohat Neeke। Kaanan Kundal Naagphani Ke॥",
                        "Ang Gaur Shir Gang Bahaaye। Mundamaal Tan Chhaar Lagaaye॥",
                        "Vastra Khaal Baaghambar Sohai। Chhavi Ko Dekhi Naag Man Mohai॥",
                        "Maina Maatu Ki Havai Dulaari। Baam Ang Sohat Chhavi Nyaari॥",
                        "Kar Trishul Sohat Suchikaari। Karat Sada Shatrun Kshaykaari॥",
                        "Nandi Ganesh Sohain Tahan Kaise। Saagar Madhy Kamal Hain Jaise॥",
                        "Kaartik Shyam Gan Gan-naatha। Sohat Chhavi Kachhu Kahi Na Jaata॥",
                        "Devan Jabahin Jaay Pukaara। Tabahin Dukh Prabhu Aap Nivaara॥",
                        "Kiya Upadrav Taarak Bhaari। Devan Sab Mili Tumhin Juhaari॥",
                        "Turat Shadaanana Aap Pathaayo। Lavnimesh Mahan Maari Giraayo॥",
                        "Aap Jalandhar Asur Sanhaara। Suyash Tumhaar Vidit Sansaara॥",
                        "Tripurasur San Yuddh Machaai। Sabhin Kripa Kari Leen Bachaai॥",
                        "Daanin Mahan Tum Sam Kou Naahin। Sevak Stuti Karat Sadaahin॥",
                        "Ved Maahin Mahima Tav Gaai। Akath Anaadi Bhed Nahin Paai॥",
                        "Prakati Udadhi Manthan Mein Jwaala। Jarat Suraasur Bhaye Vihaala॥",
                        "Keenh Daya Tahan Kari Sahaai। Neelkanth Tab Naam Kahaai॥",
                        "Poojan Ramchandra Jab Keenha। Jeet Ke Lank Vibhishan Deenha॥",
                        "Sahas Kamal Mein Ho Rahe Dhaari। Keenh Pareeksha Tabahin Tripuraari॥",
                        "Ek Kamal Prabhu Raakheu Goi। Kamal Nayan Poojan Chahan Soi॥",
                        "Kathin Bhakti Dekhi Prabhu Shankar। Bhaye Prasann Diye Ichchhit Var॥",
                        "Jai Jai Jai Anant Avinaashi। Karat Kripa Sabke Ghatwaasi॥",
                        "Dusht Sakal Nit Mohi Sataavain। Bhramat Rahon Mohi Chain Na Aavai॥",
                        "Traahi Traahi Main Naath Pukaaro। Yeh Avasar Mohi Aan Ubaaro॥",
                        "Le Trishul Shatrun Ko Maaro। Sankat Te Mohi Aan Ubaaro॥",
                        "Maat-Pita Bhraata Sab Koi। Sankat Mein Poochhat Nahin Koi॥",
                        "Swami Ek Hai Aas Tumhaari। Aay Harahu Mam Sankat Bhaari॥",
                        "Dhan Nirdhan Ko Det Sadaahin। Jo Koi Jaanche So Phal Paahin॥",
                        "Stuti Kehi Bidhi Karon Tumhaari। Shamahu Naath Ab Chuk Hamaari॥",
                        "Shankar Ho Sankat Ke Naashan। Mangal Kaaran Vighna Vinaashan॥",
                        "Yogi Yati Muni Dhyaan Lagaavain। Shaarad Naarad Sheesh Nawaavain॥",
                        "Namo Namo Jai Namah Shivaay। Sur Brahmaadik Supaar Na Paay॥",
                        "Jo Yeh Paath Kare Man Laai। Ta Par Hot Shambhu Sahaai॥",
                        "Riniya Jo Koi Ho Adhikaari। Paath Kare So Hoy Sukhaari॥",
                        "Putraheen Jo Koi Nar Hoi। Sab Vidhi Sukh Paave Soi॥",
                        "Pandit Trayodashi Ko Laave। Dhyaanpoorvak Hom Karaave॥",
                        "Trayodashi Vrat Kare Hamesha। Tan Nahin Taake Rahe Kalesha॥",
                        "Dhoop Deep Naivedya Chadhaave। Shankar Sammukh Paath Sunaave॥",
                        "Janam Janam Ke Paap Nasaavai। Antvaas Shivpur Mein Paavai॥",
                        "Kahai Ayodhyadas Aas Tumhaari। Jaani Sakal Dukh Harahu Hamaari॥"
                    ],
                    doha2: [
                        "Nitya Nem Kari Praatah Hi, Paath Karo Chaalis।",
                        "Tum Manvaanchhit Phal Paavo, Kripa Karain Gaurish॥"
                    ]
                }
            }
        };

        /**
         * 3. STATE & STORAGE MANAGEMENT
         */
        const STORAGE_KEY_SESSION = 'chalishapath_active_session_v2';
        const STORAGE_KEY_SETTINGS = 'chalishapath_settings_v2';
        const STORAGE_KEY_STATS = 'chalishapath_stats_v2';

        let currentLang = 'gu';
        let currentTheme = 'saffron';
        let selectedDeity = 'hanuman';
        let targetCount = 7;
        let currentCount = 0;
        let fontSizeScale = 1.25; // rem
        let isAutoScrolling = false;
        let autoScrollInterval = null;
        let wakeLockSentinel = null;

        let settings = {
            sound: true,
            vibrate: true,
            wakelock: true
        };

        let dailyStats = {
            date: new Date().toDateString(),
            todayCount: 0
        };

        /**
         * 4. AUDIO SYNTHESIZER: TEMPLE BRONZE BELL (WEB AUDIO API)
         */
        class TempleBellAudio {
            constructor() {
                this.ctx = null;
            }

            init() {
                if (!this.ctx) {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    if (AudioContext) {
                        this.ctx = new AudioContext();
                    }
                }
                if (this.ctx && this.ctx.state === 'suspended') {
                    this.ctx.resume();
                }
            }

            ring() {
                if (!settings.sound) return;
                try {
                    this.init();
                    if (!this.ctx) return;

                    const now = this.ctx.currentTime;
                    // Frequencies modeling an authentic Hindu bronze bell (Ghanta)
                    const partials = [
                        { f: 587.33, g: 0.7, t: 3.2 },  // D5 fundamental
                        { f: 1174.66, g: 0.4, t: 2.4 }, // D6 overtone
                        { f: 1760.0, g: 0.25, t: 1.8 }, // A6 harmonic
                        { f: 2349.32, g: 0.15, t: 1.2 } // D7 strike shimmer
                    ];

                    const masterGain = this.ctx.createGain();
                    masterGain.gain.setValueAtTime(0.35, now);
                    masterGain.connect(this.ctx.destination);

                    partials.forEach(p => {
                        const osc = this.ctx.createOscillator();
                        const gain = this.ctx.createGain();

                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(p.f, now);

                        gain.gain.setValueAtTime(p.g, now);
                        gain.gain.exponentialRampToValueAtTime(0.0001, now + p.t);

                        osc.connect(gain);
                        gain.connect(masterGain);

                        osc.start(now);
                        osc.stop(now + p.t + 0.1);
                    });
                } catch (err) {
                    console.warn("Audio bell playback skipped:", err);
                }
            }
        }
        const bellAudio = new TempleBellAudio();

        /**
         * 5. HAPTIC FEEDBACK (VIBRATION API)
         */
        function triggerHaptic(type = 'click') {
            if (!settings.vibrate || !('vibrate' in navigator)) return;
            try {
                if (type === 'click') {
                    navigator.vibrate(35);
                } else if (type === 'milestone') {
                    navigator.vibrate([60, 40, 60]);
                } else if (type === 'complete') {
                    navigator.vibrate([100, 60, 100, 60, 200]);
                }
            } catch (e) {
                // Ignore silent browser restrictions
            }
        }

        /**
         * 6. SCREEN WAKE-LOCK API
         */
        async function requestWakeLock() {
            if (!settings.wakelock || !('wakeLock' in navigator)) return;
            try {
                wakeLockSentinel = await navigator.wakeLock.request('screen');
                updateWakeLockUI(true);
                wakeLockSentinel.addEventListener('release', () => {
                    updateWakeLockUI(false);
                });
            } catch (err) {
                updateWakeLockUI(false);
            }
        }

        function releaseWakeLock() {
            if (wakeLockSentinel) {
                try {
                    wakeLockSentinel.release();
                    wakeLockSentinel = null;
                } catch (e) {}
                updateWakeLockUI(false);
            }
        }

        function updateWakeLockUI(active) {
            const badge = document.getElementById('wakelock-status-badge');
            if (!badge) return;
            badge.style.opacity = active ? '1' : '0.4';
        }

        /**
         * 7. CELEBRATION CONFETTI ENGINE
         */
        function launchConfetti() {
            const canvas = document.getElementById('confetti-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = [];
            const colors = ['#D84315', '#F59E0B', '#FFD54F', '#6A1B1A', '#FF7043', '#10B981'];

            for (let i = 0; i < 90; i++) {
                particles.push({
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                    vx: (Math.random() - 0.5) * 16,
                    vy: (Math.random() - 0.7) * 16,
                    size: Math.random() * 8 + 4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: 1,
                    decay: Math.random() * 0.015 + 0.01,
                    rotation: Math.random() * 360,
                    rotSpeed: (Math.random() - 0.5) * 10
                });
            }

            let animId;
            function render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let alive = false;

                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.35; // gravity
                    p.alpha -= p.decay;
                    p.rotation += p.rotSpeed;

                    if (p.alpha > 0) {
                        alive = true;
                        ctx.save();
                        ctx.translate(p.x, p.y);
                        ctx.rotate((p.rotation * Math.PI) / 180);
                        ctx.globalAlpha = Math.max(0, p.alpha);
                        ctx.fillStyle = p.color;
                        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
                        ctx.restore();
                    }
                });

                if (alive) {
                    animId = requestAnimationFrame(render);
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    cancelAnimationFrame(animId);
                }
            }
            render();
        }

        /**
         * 8. PERSISTENCE & LOCAL STORAGE
         */
        function loadStorage() {
            // Settings
            try {
                const savedSet = localStorage.getItem(STORAGE_KEY_SETTINGS);
                if (savedSet) {
                    settings = { ...settings, ...JSON.parse(savedSet) };
                }
                const savedLang = localStorage.getItem('chalishapath_lang');
                if (savedLang && translations[savedLang]) {
                    currentLang = savedLang;
                }
                const savedTheme = localStorage.getItem('chalishapath_theme');
                if (savedTheme) {
                    currentTheme = savedTheme;
                }
                const savedFont = localStorage.getItem('chalishapath_fontsize');
                if (savedFont) {
                    fontSizeScale = parseFloat(savedFont);
                }
            } catch (e) {}

            // Daily stats
            try {
                const savedStats = localStorage.getItem(STORAGE_KEY_STATS);
                if (savedStats) {
                    const parsed = JSON.parse(savedStats);
                    if (parsed.date === new Date().toDateString()) {
                        dailyStats = parsed;
                    } else {
                        dailyStats = { date: new Date().toDateString(), todayCount: 0 };
                    }
                }
            } catch (e) {}

            // Active session check
            checkResumeBanner();
        }

        function saveSettings() {
            try {
                localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
                localStorage.setItem('chalishapath_lang', currentLang);
                localStorage.setItem('chalishapath_theme', currentTheme);
                localStorage.setItem('chalishapath_fontsize', fontSizeScale.toString());
            } catch (e) {}
        }

        function saveStats() {
            try {
                dailyStats.date = new Date().toDateString();
                localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(dailyStats));
            } catch (e) {}
            document.getElementById('today-total-count').textContent = dailyStats.todayCount;
        }

        function saveActiveSession() {
            try {
                const sessionData = {
                    deity: selectedDeity,
                    targetCount,
                    currentCount,
                    timestamp: Date.now()
                };
                localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(sessionData));
            } catch (e) {}
        }

        function clearActiveSession() {
            try {
                localStorage.removeItem(STORAGE_KEY_SESSION);
            } catch (e) {}
            checkResumeBanner();
        }

        function checkResumeBanner() {
            const banner = document.getElementById('resume-banner');
            const details = document.getElementById('resume-details');
            if (!banner) return;

            try {
                const session = localStorage.getItem(STORAGE_KEY_SESSION);
                if (session) {
                    const data = JSON.parse(session);
                    if (data && data.currentCount < data.targetCount && chalisas[data.deity]) {
                        const dTitle = chalisas[data.deity][currentLang].title;
                        const summary = translations[currentLang].reading_summary(data.currentCount, data.targetCount);
                        details.textContent = `${dTitle} (${summary})`;
                        banner.style.display = 'flex';
                        return;
                    }
                }
            } catch (e) {}
            banner.style.display = 'none';
        }

        /**
         * 9. UI RENDERING & TRANSLATIONS
         */
        function applyTranslations() {
            document.documentElement.lang = currentLang;

            // Update language pill buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
            });

            // Update text for all data-i18n elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang] && translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });

            // Re-render deity grid and preset details
            renderDeityGrid();
            renderPresetChips();
            updateSpiritualInfo();

            // If reading, update reader title
            if (document.getElementById('reading-screen').classList.contains('active')) {
                renderReadingContent();
                updateProgressUI();
            }

            checkResumeBanner();
        }

        function setLanguage(lang) {
            if (!translations[lang]) return;
            currentLang = lang;
            saveSettings();
            applyTranslations();
            triggerHaptic('click');
        }

        function setTheme(theme) {
            currentTheme = theme;
            document.documentElement.setAttribute('data-theme', theme);
            saveSettings();

            const iconEl = document.getElementById('theme-icon');
            if (iconEl) {
                if (theme === 'dark') iconEl.textContent = '🌙';
                else if (theme === 'parchment') iconEl.textContent = '📜';
                else iconEl.textContent = '☀️';
            }
        }

        function cycleTheme() {
            triggerHaptic('click');
            if (currentTheme === 'saffron') setTheme('dark');
            else if (currentTheme === 'dark') setTheme('parchment');
            else setTheme('saffron');
        }

        function renderDeityGrid() {
            const container = document.getElementById('deity-grid-container');
            if (!container) return;
            container.innerHTML = '';

            for (const key in chalisas) {
                const deity = chalisas[key];
                const card = document.createElement('div');
                card.className = `deity-card ${key === selectedDeity ? 'selected' : ''}`;
                card.setAttribute('data-deity', key);

                card.innerHTML = `
                    <div class="deity-check">✓</div>
                    <div class="deity-icon">${deity.symbol}</div>
                    <div class="deity-title">${deity[currentLang].title}</div>
                    <div class="deity-subtitle">${deity.presets.length} સંકલ્પ વિકલ્પ</div>
                `;

                card.addEventListener('click', () => {
                    selectDeity(key);
                });

                container.appendChild(card);
            }
        }

        function selectDeity(key) {
            if (!chalisas[key]) return;
            selectedDeity = key;
            targetCount = chalisas[key].defaultTarget;
            document.getElementById('custom-count-input').value = targetCount;

            renderDeityGrid();
            renderPresetChips();
            updateSpiritualInfo();
            triggerHaptic('click');
        }

        function renderPresetChips() {
            const container = document.getElementById('presets-grid-container');
            if (!container) return;
            container.innerHTML = '';

            const chalisa = chalisas[selectedDeity];
            chalisa.presets.forEach(p => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = `preset-chip ${p === targetCount ? 'active' : ''}`;
                chip.textContent = p;

                chip.addEventListener('click', () => {
                    targetCount = p;
                    document.getElementById('custom-count-input').value = p;
                    document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    triggerHaptic('click');
                });

                container.appendChild(chip);
            });
        }

        function updateSpiritualInfo() {
            const infoEl = document.getElementById('deity-spiritual-info');
            if (!infoEl) return;
            infoEl.textContent = chalisas[selectedDeity].info[currentLang] || chalisas[selectedDeity].info.gu;
        }

        /**
         * 10. READING SESSION CONTROL
         */
        function startReading(resume = false) {
            triggerHaptic('click');
            bellAudio.init(); // Warm up audio context on user gesture

            if (!resume) {
                const inputVal = parseInt(document.getElementById('custom-count-input').value, 10);
                if (isNaN(inputVal) || inputVal < 1) {
                    alert(currentLang === 'gu' ? 'કૃપા કરીને ૧ કે તેથી વધુ સંખ્યા દાખલ કરો.' : 'Please enter a valid count of 1 or more.');
                    return;
                }
                targetCount = inputVal;
                currentCount = 0;
            }

            saveActiveSession();

            // Switch screens
            document.getElementById('setup-screen').classList.remove('active');
            document.getElementById('completion-screen').classList.remove('active');
            document.getElementById('reading-screen').classList.add('active');
            document.body.classList.add('reading-active');

            renderReadingContent();
            updateProgressUI();
            requestWakeLock();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function renderReadingContent() {
            const chalisaData = chalisas[selectedDeity];
            const langData = chalisaData[currentLang] || chalisaData.gu;

            document.getElementById('reading-deity-symbol').textContent = chalisaData.symbol;
            document.getElementById('reading-chalisa-title').textContent = langData.title;

            const container = document.getElementById('holy-verse-content');
            container.style.fontSize = `${fontSizeScale}rem`;
            container.innerHTML = '';

            // Opening Doha
            if (langData.doha1 && langData.doha1.length > 0) {
                const doha1Wrap = document.createElement('div');
                doha1Wrap.className = 'doha-card';
                doha1Wrap.innerHTML = `
                    <div style="font-size: 0.9em; opacity: 0.85; margin-bottom: 4px;">॥ ${currentLang === 'en' ? 'Doha' : 'દોહા'} ॥</div>
                    ${langData.doha1.map(line => `<div>${line}</div>`).join('')}
                `;
                container.appendChild(doha1Wrap);
            }

            // Chaupai header
            const chaupaiHeader = document.createElement('div');
            chaupaiHeader.className = 'verse-section-title';
            chaupaiHeader.innerHTML = `<span>ॐ</span> <span>${currentLang === 'en' ? 'Chaupai' : 'ચૌપાઈ'}</span> <span>ॐ</span>`;
            container.appendChild(chaupaiHeader);

            // Chaupai lines
            if (langData.chaupai) {
                langData.chaupai.forEach((line, idx) => {
                    const row = document.createElement('div');
                    row.className = 'chaupai-row';
                    row.innerHTML = `
                        <span>${line}</span>
                        <span class="chaupai-number">॥ ${idx + 1} ॥</span>
                    `;
                    container.appendChild(row);
                });
            }

            // Closing Doha
            if (langData.doha2 && langData.doha2.length > 0) {
                const doha2Wrap = document.createElement('div');
                doha2Wrap.className = 'doha-card';
                doha2Wrap.style.marginTop = '24px';
                doha2Wrap.innerHTML = `
                    <div style="font-size: 0.9em; opacity: 0.85; margin-bottom: 4px;">॥ ${currentLang === 'en' ? 'Doha' : 'દોહા'} ॥</div>
                    ${langData.doha2.map(line => `<div>${line}</div>`).join('')}
                `;
                container.appendChild(doha2Wrap);
            }
        }

        function updateProgressUI() {
            const summaryText = translations[currentLang].reading_summary(currentCount, targetCount);
            document.getElementById('reading-status-summary').textContent = summaryText;

            const beadText = `${currentCount} / ${targetCount}`;
            document.getElementById('progress-bead-pill').textContent = beadText;
            document.getElementById('floating-count-badge').textContent = beadText;

            const pct = Math.min(100, Math.round((currentCount / targetCount) * 100));
            document.getElementById('progress-line-fill').style.width = `${pct}%`;
        }

        function incrementCount() {
            if (currentCount >= targetCount) return;

            currentCount++;
            triggerHaptic('click');
            bellAudio.ring();

            // Stats update
            dailyStats.todayCount++;
            saveStats();
            saveActiveSession();
            updateProgressUI();

            if (currentCount >= targetCount) {
                // Completed session!
                finishSession();
            } else {
                // Smooth scroll back to top of reader for next reading
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function decrementCount() {
            if (currentCount <= 0) return;
            currentCount--;
            if (dailyStats.todayCount > 0) {
                dailyStats.todayCount--;
                saveStats();
            }
            saveActiveSession();
            updateProgressUI();
            triggerHaptic('click');
        }

        function finishSession() {
            triggerHaptic('complete');
            bellAudio.ring();
            launchConfetti();
            releaseWakeLock();
            stopAutoScroll();

            clearActiveSession();

            const cData = chalisas[selectedDeity];
            const title = cData[currentLang].title;

            document.getElementById('completed-final-count').textContent = targetCount;
            document.getElementById('completed-chalisa-name').textContent = title;

            setTimeout(() => {
                document.getElementById('reading-screen').classList.remove('active');
                document.body.classList.remove('reading-active');
                document.getElementById('completion-screen').classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 600);
        }

        function exitToSetup(confirmed = false) {
            if (!confirmed && currentCount > 0 && currentCount < targetCount) {
                // Show exit confirmation modal
                document.getElementById('exit-modal').classList.add('open');
                return;
            }

            document.getElementById('exit-modal').classList.remove('open');
            releaseWakeLock();
            stopAutoScroll();

            document.getElementById('reading-screen').classList.remove('active');
            document.body.classList.remove('reading-active');
            document.getElementById('setup-screen').classList.add('active');
            checkResumeBanner();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        /**
         * 11. AUTOSCROLL & ACCESSIBILITY CONTROLS
         */
        function toggleAutoScroll() {
            if (isAutoScrolling) {
                stopAutoScroll();
            } else {
                startAutoScroll();
            }
        }

        function startAutoScroll() {
            isAutoScrolling = true;
            const btn = document.getElementById('btn-autoscroll');
            const icon = document.getElementById('autoscroll-icon');
            btn.classList.add('active');
            icon.textContent = '⏸';

            autoScrollInterval = setInterval(() => {
                window.scrollBy({ top: 1.5, behavior: 'smooth' });
                // Check if reached bottom
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
                    stopAutoScroll();
                }
            }, 50);
        }

        function stopAutoScroll() {
            isAutoScrolling = false;
            const btn = document.getElementById('btn-autoscroll');
            const icon = document.getElementById('autoscroll-icon');
            if (btn) btn.classList.remove('active');
            if (icon) icon.textContent = '▶';
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
            }
        }

        function adjustFontSize(delta) {
            fontSizeScale = Math.max(0.95, Math.min(2.1, fontSizeScale + delta));
            const el = document.getElementById('holy-verse-content');
            if (el) el.style.fontSize = `${fontSizeScale}rem`;
            saveSettings();
            triggerHaptic('click');
        }

        /**
         * 12. WHATSAPP SHARING
         */
        function shareProgressWhatsApp() {
            triggerHaptic('click');
            const cData = chalisas[selectedDeity];
            const title = cData[currentLang].title;
            const msg = translations[currentLang].share_text(title, targetCount);
            const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
        }

        /**
         * 13. INITIALIZATION & EVENT LISTENERS
         */
        function initApp() {
            loadStorage();
            setTheme(currentTheme);

            // Populate view
            applyTranslations();
            selectDeity('hanuman');

            // Header language buttons
            document.getElementById('btn-lang-gu').addEventListener('click', () => setLanguage('gu'));
            document.getElementById('btn-lang-hi').addEventListener('click', () => setLanguage('hi'));
            document.getElementById('btn-lang-en').addEventListener('click', () => setLanguage('en'));

            // Theme toggle
            document.getElementById('btn-theme-toggle').addEventListener('click', cycleTheme);

            // Brand click -> home
            document.getElementById('brand-home').addEventListener('click', (e) => {
                e.preventDefault();
                if (document.getElementById('reading-screen').classList.contains('active')) {
                    exitToSetup(false);
                }
            });

            // Resume button
            document.getElementById('btn-resume-session').addEventListener('click', () => {
                try {
                    const session = JSON.parse(localStorage.getItem(STORAGE_KEY_SESSION));
                    if (session) {
                        selectedDeity = session.deity;
                        targetCount = session.targetCount;
                        currentCount = session.currentCount;
                        startReading(true);
                    }
                } catch (e) {}
            });

            // Custom count input change
            const customInput = document.getElementById('custom-count-input');
            customInput.addEventListener('input', () => {
                const val = parseInt(customInput.value, 10);
                if (!isNaN(val) && val > 0) {
                    targetCount = val;
                    document.querySelectorAll('.preset-chip').forEach(c => {
                        c.classList.toggle('active', parseInt(c.textContent, 10) === targetCount);
                    });
                }
            });

            // Start Path Button
            document.getElementById('btn-start-path').addEventListener('click', () => startReading(false));

            // Floating Counter Controls
            document.getElementById('btn-count-increment').addEventListener('click', incrementCount);
            document.getElementById('btn-count-decrement').addEventListener('click', decrementCount);
            document.getElementById('btn-back-to-setup').addEventListener('click', () => exitToSetup(false));

            // Reader toolbar
            document.getElementById('btn-font-inc').addEventListener('click', () => adjustFontSize(0.1));
            document.getElementById('btn-font-dec').addEventListener('click', () => adjustFontSize(-0.1));
            document.getElementById('btn-autoscroll').addEventListener('click', toggleAutoScroll);

            // Completion actions
            document.getElementById('btn-share-whatsapp').addEventListener('click', shareProgressWhatsApp);
            document.getElementById('btn-restart-app').addEventListener('click', () => {
                document.getElementById('completion-screen').classList.remove('active');
                document.getElementById('setup-screen').classList.add('active');
                checkResumeBanner();
            });

            // Settings Modal
            const settingsModal = document.getElementById('settings-modal');
            document.getElementById('btn-settings-open').addEventListener('click', () => {
                triggerHaptic('click');
                document.getElementById('toggle-sound').checked = settings.sound;
                document.getElementById('toggle-vibrate').checked = settings.vibrate;
                document.getElementById('toggle-wakelock').checked = settings.wakelock;
                settingsModal.classList.add('open');
            });
            document.getElementById('btn-settings-close').addEventListener('click', () => {
                settingsModal.classList.remove('open');
            });
            settingsModal.addEventListener('click', (e) => {
                if (e.target === settingsModal) settingsModal.classList.remove('open');
            });

            document.getElementById('toggle-sound').addEventListener('change', (e) => {
                settings.sound = e.target.checked;
                saveSettings();
                if (settings.sound) bellAudio.ring();
            });
            document.getElementById('toggle-vibrate').addEventListener('change', (e) => {
                settings.vibrate = e.target.checked;
                saveSettings();
                if (settings.vibrate) triggerHaptic('click');
            });
            document.getElementById('toggle-wakelock').addEventListener('change', (e) => {
                settings.wakelock = e.target.checked;
                saveSettings();
                if (document.getElementById('reading-screen').classList.contains('active')) {
                    if (settings.wakelock) requestWakeLock();
                    else releaseWakeLock();
                }
            });
            document.getElementById('btn-reset-stats').addEventListener('click', () => {
                dailyStats.todayCount = 0;
                saveStats();
                triggerHaptic('click');
                alert(currentLang === 'gu' ? 'આજનો પાઠ ગણક શૂન્ય (૦) થયો છે.' : 'Today\'s count reset to 0.');
            });

            // Exit Modal buttons
            document.getElementById('btn-exit-cancel').addEventListener('click', () => {
                document.getElementById('exit-modal').classList.remove('open');
            });
            document.getElementById('btn-exit-confirm').addEventListener('click', () => {
                exitToSetup(true);
            });

            // Keyboard navigation (Spacebar or Enter counts +1 when on reading screen)
            window.addEventListener('keydown', (e) => {
                if (e.code === 'Space' || e.key === ' ' || e.code === 'Enter') {
                    if (document.getElementById('reading-screen').classList.contains('active')) {
                        // Avoid triggering if inside an input
                        if (document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
                        e.preventDefault();
                        incrementCount();
                    }
                }
            });

            // Save state on unload
            window.addEventListener('beforeunload', () => {
                if (document.getElementById('reading-screen').classList.contains('active')) {
                    saveActiveSession();
                }
            });

            // Initialize PWA installation and Service Worker
            initPWA();
        }

        /**
         * 14. PWA ENGINE: SERVICE WORKER, INSTALL PROMPT & OFFLINE DETECTION
         */
        let deferredInstallPrompt = null;

        function showNetworkToast(msg, type = 'offline') {
            const toast = document.getElementById('network-toast');
            const text = document.getElementById('network-toast-text');
            const icon = document.getElementById('network-toast-icon');
            if (!toast) return;

            text.textContent = msg;
            icon.textContent = type === 'online' ? '🟢' : '📶';
            toast.className = `network-toast show ${type}`;

            setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        }

        function initPWA() {
            // A. Register Service Worker
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('./sw.js')
                        .then((reg) => {
                            // Check for updates
                            reg.addEventListener('updatefound', () => {
                                const newWorker = reg.installing;
                                if (newWorker) {
                                    newWorker.addEventListener('statechange', () => {
                                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                            console.log('Chalisa Path update available.');
                                        }
                                    });
                                }
                            });
                        })
                        .catch((err) => {
                            console.warn('SW registration failed:', err);
                        });
                });
            }

            // B. Check environment (iOS / Standalone)
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

            const installBtn = document.getElementById('btn-install-app');
            const settingInstallRow = document.getElementById('setting-install-row');
            const settingsInstallBtn = document.getElementById('btn-settings-install');
            const iosModal = document.getElementById('ios-install-modal');
            const iosCloseBtn = document.getElementById('btn-ios-install-close');

            function showInstallButtons() {
                if (isStandalone) return; // Already installed!
                if (installBtn) installBtn.style.display = 'inline-flex';
                if (settingInstallRow) settingInstallRow.style.display = 'flex';
            }

            function hideInstallButtons() {
                if (installBtn) installBtn.style.display = 'none';
                if (settingInstallRow) settingInstallRow.style.display = 'none';
            }

            // If already in standalone mode, keep install buttons hidden
            if (isStandalone) {
                hideInstallButtons();
            } else if (isIOS) {
                // On iOS, show install buttons so users can view the Add to Home Screen guide
                showInstallButtons();
            }

            // C. Android / Chromium beforeinstallprompt handler
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredInstallPrompt = e;
                showInstallButtons();
            });

            // D. App install action handler (works for Android, Desktop, and iOS)
            async function handleInstallClick() {
                triggerHaptic('click');

                if (deferredInstallPrompt) {
                    deferredInstallPrompt.prompt();
                    const { outcome } = await deferredInstallPrompt.userChoice;
                    if (outcome === 'accepted') {
                        hideInstallButtons();
                    }
                    deferredInstallPrompt = null;
                } else if (isIOS && !isStandalone) {
                    // Open iOS Instructions modal
                    if (iosModal) iosModal.classList.add('open');
                } else if (isStandalone) {
                    showNetworkToast(currentLang === 'gu' ? 'એપ પહેલેથી ઇન્સ્ટોલ કરેલી છે!' : 'App is already installed!', 'online');
                } else {
                    // Fallback for browsers with manual install
                    if (iosModal) iosModal.classList.add('open');
                }
            }

            if (installBtn) installBtn.addEventListener('click', handleInstallClick);
            if (settingsInstallBtn) settingsInstallBtn.addEventListener('click', handleInstallClick);

            // E. Close iOS Modal
            if (iosCloseBtn) {
                iosCloseBtn.addEventListener('click', () => {
                    if (iosModal) iosModal.classList.remove('open');
                });
            }
            if (iosModal) {
                iosModal.addEventListener('click', (e) => {
                    if (e.target === iosModal) iosModal.classList.remove('open');
                });
            }

            // F. When app is installed successfully
            window.addEventListener('appinstalled', () => {
                hideInstallButtons();
                triggerHaptic('complete');
                showNetworkToast(currentLang === 'gu' ? 'એપ સફળતાપૂર્વક ઇન્સ્ટોલ થઈ ગઈ છે! 📲' : 'App installed successfully! 📲', 'online');
            });

            // G. Online & Offline network status listeners
            window.addEventListener('offline', () => {
                showNetworkToast(translations[currentLang].offline_toast_msg, 'offline');
            });
            window.addEventListener('online', () => {
                showNetworkToast(translations[currentLang].online_toast_msg, 'online');
            });
        }

        // Run when DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initApp);
        } else {
            initApp();
        }