// alo.ht — Kreyòl and English translations (French is the default and needs none).
// Loaded only when a visitor reads in Kreyòl or English: by the small script in each page <head>, or by switchLang().
(function () {
// ---- Language (FR / Kreyòl) -------------------------------------------
const KR = {
  "🎓 Étudiants & premiers emplois": "🎓 Etidyan & premye djòb",
  "Votre prochain": "Pwochen",
  "job": "djòb ou",
  "commence ici.": "kòmanse la a.",
  "Stages, jobs étudiants et premiers emplois partout en Haïti. Postulez en une minute avec WhatsApp.": "Estaj, djòb pou etidyan ak premye djòb toupatou an Ayiti. Aplike nan yon minit ak WhatsApp.",
  "100% gratuit": "100% gratis",
  "Simple comme 1, 2, 3": "Senp tankou 1, 2, 3",
  "Tous les secteurs": "Tout domèn yo",
  "Explorer": "Eksplore",
  "Tout": "Tout",
  "Mon compte": "Kont mwen",
  "Profil ALO": "Pwofil ALO",
  "Simple · Fiable · Gratuit": "Senp · Serye · Gratis",
  "Un profil qui": "Yon pwofil ki",
  "prouve": "pwouve",
  "votre talent.": "talan ou.",
  "Profil complété à 85 %": "Pwofil konplete a 85 %",
  "Faites reconnaître vos compétences, découvrez des offres d’emploi et profitez d’une prime lorsque vous êtes embauché grâce à ALO.": "Fè yo rekonèt konpetans ou, dekouvri djòb epi jwenn yon bonis lè ALO ede w jwenn travay.",
  "Créer mon Profil ALO": "Kreye Pwofil ALO mwen",
  "À propos d’ALO": "Konsènan ALO",
  "Le talent est partout.": "Talan toupatou.",
  "Les opportunités doivent l’être aussi.": "Opòtinite yo dwe toupatou tou.",
  "ALO est une plateforme haïtienne qui rapproche les talents et les entreprises pour rendre le recrutement plus simple, plus accessible et plus efficace.": "ALO se yon platfòm ayisyen ki rapwoche talan ak antrepriz pou rekritman vin pi senp, pi aksesib e pi efikas.",
  "Nous croyons que chaque professionnel mérite d’être reconnu pour ses compétences, ses expériences et son potentiel. Et que chaque entreprise, quelle que soit sa taille, doit pouvoir trouver les bonnes personnes pour avancer.": "Nou kwè chak pwofesyonèl merite pou yo rekonèt konpetans li, eksperyans li ak potansyèl li. Epi chak antrepriz, kèlkeswa gwosè l, dwe ka jwenn bon moun pou l avanse.",
  "Notre mission": "Misyon nou",
  "Faire avancer les personnes et les organisations.": "Fè moun ak òganizasyon avanse.",
  "Nous facilitons la rencontre entre les professionnels et les employeurs grâce à une plateforme qui permet de découvrir des opportunités, de valoriser les compétences et de recruter avec confiance.": "Nou fasilite rankont ant pwofesyonèl ak anplwayè gras a yon platfòm ki pèmèt dekouvri opòtinite, mete konpetans an valè epi anboche avèk konfyans.",
  "Ce que nous faisons": "Sa nou fè",
  "Pour les professionnels": "Pou pwofesyonèl yo",
  "ALO vous permet de créer votre Profil ALO, de présenter vos expériences et vos compétences, de faire vérifier certaines qualifications et d’accéder à des opportunités d’emploi.": "ALO pèmèt ou kreye Pwofil ALO ou, prezante eksperyans ak konpetans ou, fè verifye kèk kalifikasyon epi jwenn opòtinite travay.",
  "Pour les entreprises": "Pou antrepriz yo",
  "ALO simplifie le recrutement. De la publication d’une offre à la sélection des candidats, nous mettons à disposition des outils pour identifier les talents, évaluer les compétences et prendre de meilleures décisions.": "ALO fè rekritman vin pi senp. Depi piblikasyon yon djòb rive nan seleksyon kandida yo, nou bay zouti pou idantifye talan, evalye konpetans epi pran pi bon desizyon.",
  "Notre vision": "Vizyon nou",
  "Un marché de l’emploi où le talent compte plus que les connexions.": "Yon mache travay kote talan konte plis pase relasyon.",
  "Nous voulons contribuer à construire un environnement professionnel dans lequel les compétences sont plus visibles, les opportunités plus accessibles et les recrutements plus transparents.": "Nou vle ede bati yon anviwònman pwofesyonèl kote konpetans yo pi vizib, opòtinite yo pi aksesib e rekritman yo pi transparan.",
  "Notre ambition est de faire d’ALO un outil de référence pour les professionnels et les entreprises en Haïti.": "Anbisyon nou se fè ALO tounen yon zouti referans pou pwofesyonèl ak antrepriz an Ayiti.",
  "Pourquoi ALO ?": "Poukisa ALO?",
  "Un nom qui résume notre conviction : lorsqu’une personne trouve la bonne opportunité et qu’une organisation trouve le bon talent, les deux avancent.": "Yon non ki rezime sa nou kwè: lè yon moun jwenn bon opòtinite a epi yon òganizasyon jwenn bon talan an, toude avanse.",
  "Ensemble, allons plus loin.": "Ansanm, ann ale pi lwen.",
  "Que vous recherchiez votre prochaine opportunité ou les talents qui feront grandir votre entreprise, ALO est là pour faciliter la rencontre.": "Kit w ap chèche pwochen opòtinite w, kit w ap chèche talan ki pou fè antrepriz ou grandi, ALO la pou fasilite rankont lan.",
  "Découvrir les offres": "Dekouvri djòb yo",
  "Recruter avec ALO": "Anboche ak ALO",
  "Recrutez simplement.": "Anboche san konplikasyon.",
  "Trouvez les bons talents.": "Jwenn bon talan yo.",
  "Publiez vos offres d’emploi, recevez des candidatures et identifiez les profils qui correspondent à vos besoins, depuis une seule plateforme.": "Pibliye djòb ou yo, resevwa aplikasyon epi idantifye pwofil ki koresponn ak bezwen w, sou yon sèl platfòm.",
  "Recrutez à grande échelle.": "Anboche anpil moun.",
  "Gardez le contrôle.": "Kenbe kontwòl la.",
  "Centralisez vos recrutements, évaluez les candidatures et facilitez la collaboration entre vos équipes RH.": "Mete tout rekritman ou nan yon sèl kote, evalye aplikasyon yo epi fasilite kolaborasyon ant ekip RH ou yo.",
  "par offre": "pa djòb",
  "30 jours · sans abonnement": "30 jou · san abònman",
  "45 jours · sans abonnement": "45 jou · san abònman",
  "Candidatures illimitées": "Aplikasyon san limit",
  "Présélection assistée par IA": "Preseleksyon avèk èd IA",
  "Tout ce qu'il faut pour recruter": "Tout sa w bezwen pou anboche",
  "Publication d’offres d’emploi": "Piblikasyon djòb",
  "Gestion des candidatures": "Jesyon aplikasyon",
  "Questions de présélection": "Kesyon preseleksyon",
  "Évaluations de compétences de base": "Evalyasyon konpetans debaz",
  "Tableau de bord de recrutement": "Tablo bò rekritman",
  "Gestion avancée des candidatures": "Jesyon avanse aplikasyon",
  "Questions de présélection personnalisées": "Kesyon preseleksyon pèsonalize",
  "Évaluations de compétences": "Evalyasyon konpetans",
  "Collaboration entre plusieurs recruteurs": "Kolaborasyon ant plizyè rekritè",
  "Rapports et statistiques de recrutement": "Rapò ak estatistik rekritman",
  "Tarifs préférentiels pour les publications multiples": "Pri espesyal pou plizyè piblikasyon",
  "Demander une démo": "Mande yon demo",
  "Prêt à recruter ?": "Pare pou anboche?",
  "Vous recrutez à grande échelle ?": "W ap anboche anpil moun?",
  "Voir l’offre Grandes entreprises": "Gade òf Gwo antrepriz",
  "Une petite ou moyenne entreprise ?": "Yon ti oswa mwayen antrepriz?",
  "Voir l’offre PME": "Gade òf PME",
  "Tarifs PME": "Pri PME",
  "Voir les tarifs": "Gade pri yo",
  "Identité vérifiée": "Idantite verifye",
  "Diplôme vérifié": "Diplòm verifye",
  "Aucune offre pour le moment. Revenez bientôt !": "Poko gen djòb kounye a. Tounen talè!",
  "Aucun compte n’est nécessaire pour consulter les offres.": "Ou pa bezwen kont pou w gade djòb yo.",
  "Licence en comptabilité": "Lisans nan kontablite",
  "3 compétences vérifiées": "3 konpetans verifye",
  "Excel · Comptabilité · Service client": "Excel · Kontablite · Sèvis kliyan",
  "Créez votre Profil ALO": "Kreye Pwofil ALO ou",
  "Créez votre Profil ALO.": "Kreye Pwofil ALO ou.",
  "Votre prochain emploi en 3 étapes": "Pwochen travay ou an 3 etap",
  "Créez votre profil": "Kreye pwofil ou",
  "Présentez vos expériences, vos compétences et vos diplômes. ALO vous aide à les faire vérifier.": "Prezante eksperyans, konpetans ak diplòm ou. ALO ede w fè verifye yo.",
  "Connectez-vous aux employeurs": "Konekte ak anplwayè yo",
  "Postulez aux offres et faites-vous découvrir par des recruteurs vérifiés.": "Aplike pou djòb yo epi kite rekritè verifye dekouvri w.",
  "Embauché ? ALO vous verse une prime sur MonCash, NatCash ou votre compte bancaire.": "Yo anboche w? ALO peye w yon bonis sou MonCash, NatCash oswa kont bank ou.",
  "Compétences vérifiées, offres d'emploi, et une prime quand vous êtes embauché.": "Konpetans verifye, djòb, epi yon bonis lè yo anboche w.",
  "Nom": "Non",
  "Métier": "Metye",
  "Assistante comptable": "Asistan kontab",
  "Prime d'embauche versée": "Bonis anbochaj peye",
  "Trois tampons vers votre prochain job": "Twa so pou rive nan pwochen djòb ou",
  "Rencontrez des employeurs": "Rankontre anplwayè",
  "Des recruteurs vérifiés découvrent votre profil.": "Rekritè verifye dekouvri pwofil ou.",
  "Touchez votre prime": "Touche bonis ou",
  "À chaque étape de carrière": "Nan chak etap karyè",
  "Stages et premiers jobs": "Estaj ak premye djòb",
  "Un profil qui rassure": "Yon pwofil ki bay konfyans",
  "Évoluez, même sans chercher": "Avanse, menm san w pa chèche",
  "Formations recommandées": "Fòmasyon rekòmande",
  "Des suggestions pour combler vos écarts de compétences.": "Sijesyon pou ranfòse konpetans ou.",
  "PME · Grandes entreprises": "PME · Gwo antrepriz",
  "Recrutez sur preuves, pas sur promesses.": "Anboche sou prèv, pa sou pwomès.",
  "Publiez, évaluez et présélectionnez au même endroit. L'IA prépare, vous décidez.": "Pibliye, evalye epi preseleksyone nan menm kote a. IA a prepare, se ou ki deside.",
  "Présélection IA": "Preseleksyon IA",
  "Assistant(e) comptable · 24 candidatures": "Asistan kontab · 24 aplikasyon",
  "Test pratique · Étude de cas · Entretien": "Tès pratik · Etid ka · Entèvyou",
  "Décision finale : vous": "Desizyon final: ou menm",
  "Prêt ?": "Pare?",
  "Commencer gratuitement": "Kòmanse gratis",
  "Les talents vérifiés sont vus en premier": "Talan verifye yo parèt an premye",
  "« 3 ans d'expérience, compétences vérifiées. »": "« 3 an eksperyans, konpetans verifye. »",
  "Prime": "Bonis",
  "Comptable · Pétion-Ville": "Kontab · Petyonvil",
  "Jeune diplômée · Cap-Haïtien": "Jèn gradye · Okap",
  "Soyez vu.": "Fè yo wè w.",
  "Soyez récompensé.": "Resevwa rekonpans.",
  "Faites vérifier vos compétences et recevez une prime quand vous êtes embauché.": "Fè yo verifye konpetans ou epi resevwa yon bonis lè yo anboche w.",
  "Rechercher des offres": "Chèche djòb",
  "La plateforme de talents vérifiés d'Haïti": "Platfòm talan verifye Ayiti a",
  "Postuler, c'est facile. Être remarqué, beaucoup moins. Avec alo.ht, vos compétences sont vérifiées et votre embauche est récompensée.": "Aplike fasil. Fè yo remake w, pa fasil ditou. Avèk alo.ht, konpetans ou verifye epi anbochaj ou rekonpanse.",
  "Vos compétences et diplômes, vérifiés par ALO.": "Konpetans ak diplòm ou, ALO verifye yo.",
  "Soyez vu en premier": "Parèt an premye",
  "Les employeurs vérifiés trouvent votre profil.": "Anplwayè verifye yo jwenn pwofil ou.",
  "Recevez votre prime": "Resevwa bonis ou",
  "Embauché ? Prime versée sur MonCash ou NatCash.": "Yo anboche w? Bonis peye sou MonCash oswa NatCash.",
  "Votre talent, mis en valeur": "Talan ou, an valè",
  "Stages et premiers jobs.": "Estaj ak premye djòb.",
  "Jeunes diplômés": "Jèn gradye",
  "Un profil vérifié qui rassure.": "Yon pwofil verifye ki bay konfyans.",
  "Professionnels": "Pwofesyonèl",
  "Évoluez, même sans chercher.": "Avanse, menm san w pa chèche.",
  "PME ou grande entreprise : trouvez les bons talents, plus vite.": "PME oswa gwo antrepriz: jwenn bon talan yo pi vit.",
  "Offres et tri des candidatures": "Djòb ak triyaj aplikasyon",
  "Assistant IA : offres, tests, présélection": "Asistan IA: djòb, tès, preseleksyon",
  "Vous gardez la décision finale": "Se ou ki pran desizyon final la",
  "Prêt à être récompensé ?": "Pare pou resevwa rekonpans?",
  "Commencer": "Kòmanse",
  "Assistant IA de recrutement": "Asistan IA pou rekritman",
  "Abonnements": "Abònman",
  "Solutions entreprise": "Solisyon antrepriz",
  "Recrutement géré par ALO": "Rekritman ALO jere",
  "Gestion du personnel": "Jesyon anplwaye",
  "Conditions d'utilisation": "Kondisyon itilizasyon",
  "Votre talent,": "Talan ou,",
  "vérifié.": "verifye.",
  "Votre carrière,": "Karyè ou,",
  "récompensée.": "rekonpanse.",
  "La plateforme de talents d'Haïti : un profil crédible, des compétences vérifiées, des offres et des formations pour avancer, et une prime quand vous êtes embauché.": "Platfòm talan Ayiti a: yon pwofil serye, konpetans verifye, djòb ak fòmasyon pou w avanse, epi yon bonis lè yo anboche w.",
  "Une plateforme, trois publics": "Yon platfòm, twa piblik",
  "Plus qu'un site d'emploi : un écosystème professionnel pour tout le marché du travail haïtien.": "Plis pase yon sit djòb: yon ekosistèm pwofesyonèl pou tout mache travay ayisyen an.",
  "Construisez un profil crédible et faites progresser votre carrière, même quand vous ne cherchez pas de travail.": "Bati yon pwofil serye epi fè karyè w avanse, menm lè w pa ap chèche travay.",
  "Évaluations et formations recommandées": "Evalyasyon ak fòmasyon rekòmande",
  "Offres d'emploi et prime d'embauche": "Djòb ak bonis anbochaj",
  "Créer mon profil": "Kreye pwofil mwen",
  "Recrutez sans perdre de temps : un tableau de bord simple pour publier, trier et choisir les bons candidats.": "Anboche san pèdi tan: yon tablo senp pou pibliye, triye epi chwazi bon kandida yo.",
  "Publication d'offres et tri des candidatures": "Pibliye djòb epi triye aplikasyon",
  "Assistant IA pour rédiger vos offres": "Asistan IA pou ekri djòb ou yo",
  "Paiement à l'offre ou abonnement": "Peye pa djòb oswa abònman",
  "Du recrutement à la gestion du personnel : une solution complète, avec l'accompagnement de l'équipe ALO.": "Depi rekritman rive jesyon anplwaye: yon solisyon konplè, avèk èd ekip ALO a.",
  "Tests, études de cas et entretiens structurés": "Tès, etid ka ak entèvyou ki byen òganize",
  "Intégration, évaluations et développement des employés": "Entegrasyon, evalyasyon ak devlopman anplwaye",
  "Recrutement géré par ALO et solutions entreprise": "Rekritman ALO jere ak solisyon antrepriz",
  "Bientôt": "Talè konsa",
  "Votre assistant IA de recrutement": "Asistan IA pou rekritman w",
  "L'IA prépare le travail. Vous gardez la décision finale.": "IA a prepare travay la. Se ou ki pran desizyon final la.",
  "Demander un accès anticipé": "Mande aksè anvan lòt yo",
  "Rédige vos descriptions de poste": "Ekri deskripsyon pòs ou yo",
  "Recommande les compétences clés": "Rekòmande konpetans kle yo",
  "Crée tests pratiques, études de cas et évaluations vidéo": "Kreye tès pratik, etid ka ak evalyasyon videyo",
  "Prépare des grilles d'évaluation structurées": "Prepare grily evalyasyon ki byen òganize",
  "Propose une présélection argumentée des candidats": "Pwopoze yon preseleksyon kandida ak rezon",
  "Compétences et diplômes vérifiés en partenariat avec des employeurs, universités et centres de formation.": "Konpetans ak diplòm verifye an patenarya ak anplwayè, inivèsite ak sant fòmasyon.",
  "Publiez une offre et recevez des candidats qualifiés.": "Pibliye yon djòb epi resevwa kandida kalifye.",
  "Trois minutes. Votre offre est vérifiée par l'équipe ALO avant publication.": "Twa minit. Ekip ALO verifye djòb la anvan li parèt.",
  "Candidats avec compétences vérifiées": "Kandida ak konpetans verifye",
  "Assistant IA pour vos offres (bientôt)": "Asistan IA pou djòb ou yo (talè konsa)",
  "Faites-vous": "Fè yo",
  "remarquer.": "remake w.",
  "Soyez": "Resevwa",
  "récompensé.": "rekonpans.",
  "Ou cherchez directement les offres": "Oswa chèche djòb yo dirèkteman",
  "Assistante comptable · Delmas": "Asistan kontab · Delmas",
  "Vérifié": "Verifye",
  "Identité": "Idantite",
  "Diplôme": "Diplòm",
  "Compétences": "Konpetans",
  "Références": "Referans",
  "Prime d'embauche": "Bonis anbochaj",
  "Versée sur MonCash ou NatCash": "Peye sou MonCash oswa NatCash",
  "3 employeurs ont vu votre profil": "3 anplwayè wè pwofil ou",
  "Votre talent est vérifié. Votre embauche est récompensée.": "Talan ou verifye. Anbochaj ou rekonpanse.",
  "Ajoutez votre parcours et vos compétences. ALO vérifie votre identité, vos diplômes et vos compétences par des évaluations pratiques.": "Ajoute eksperyans ak konpetans ou. ALO verifye idantite w, diplòm ou ak konpetans ou ak egzèsis pratik.",
  "Soyez vu par des employeurs vérifiés": "Anplwayè verifye ka wè w",
  "Embauché ? Recevez votre prime": "Yo anboche w? Resevwa bonis ou",
  "Après la période d'essai, ALO vous verse une prime d'embauche sur MonCash, NatCash ou votre compte bancaire.": "Apre peryòd esè a, ALO peye w yon bonis sou MonCash, NatCash oswa kont bank ou.",
  "Parrainez vos amis, gagnez des récompenses": "Envite zanmi w, genyen rekonpans",
  "Partagez votre lien : quand un ami est embauché grâce à vous, vous êtes récompensé aussi.": "Pataje lyen w: lè yon zanmi jwenn travay gras a ou, ou resevwa rekonpans tou.",
  "Obtenir mon lien": "Jwenn lyen mwen",
  "alo.ht est en phase de test. Montants et conditions définitifs à confirmer pendant la phase de test.": "alo.ht nan faz tès. Montan ak kondisyon final yo ap konfime pandan faz tès la.",
  "Bienvenue sur alo.ht": "Byenveni sou alo.ht",
  "Connectez-vous ou créez un compte en quelques secondes.": "Konekte oswa kreye yon kont nan kèk segonn.",
  "Continuer avec LinkedIn": "Kontinye ak LinkedIn",
  "ou": "oswa",
  "Adresse e-mail": "Adrès imèl",
  "Continuer avec l'e-mail": "Kontinye ak imèl",
  "Pas de mot de passe : nous vous envoyons un lien de connexion.": "Pa gen modpas: n ap voye yon lyen pou w konekte.",
  "Vérifiez votre boîte e-mail : nous vous avons envoyé un lien de connexion.": "Gade nan imèl ou: nou voye yon lyen pou w konekte.",
  "Vous êtes connecté(e)": "Ou konekte",
  "Se déconnecter": "Dekonekte",
  "Connexion indisponible pour le moment.": "Ou pa ka konekte kounye a.",
  "LinkedIn n'est pas encore activé.": "LinkedIn poko aktive.",
  "En continuant, vous acceptez les conditions d'utilisation et la politique de confidentialité d'alo.ht.": "Lè w kontinye, ou dakò ak kondisyon itilizasyon ak règ konfidansyalite alo.ht.",
  "Emplois": "Djòb",
  "Pour les employeurs": "Pou anplwayè yo",
  "Chercheurs d'emploi": "Moun k ap chèche travay",
  "PME": "PME",
  "Grandes entreprises": "Gwo antrepriz",
  "alo.ht, pour qui ?": "alo.ht, pou ki moun?",
  "Une plateforme, trois façons de l'utiliser.": "Yon sèl platfòm, twa fason pou sèvi avè l.",
  "Étudiants, jeunes diplômés et professionnels : trouvez un job près de chez vous et postulez en une minute.": "Etidyan, jèn gradye ak pwofesyonèl: jwenn yon djòb toupre w epi aplike nan yon minit.",
  "Offres vérifiées": "Djòb verifye",
  "Candidature par WhatsApp": "Aplike sou WhatsApp",
  "Commerces, restaurants, cliniques, écoles : publiez une offre en 3 minutes et recevez des candidats rapidement.": "Biznis, restoran, klinik, lekòl: pibliye yon djòb nan 3 minit epi resevwa kandida vit.",
  "Publication gratuite": "Piblikasyon gratis",
  "Candidats près de chez vous": "Kandida toupre w",
  "Contact direct sur WhatsApp": "Kontak dirèk sou WhatsApp",
  "Recrutez à grande échelle : plusieurs postes, plusieurs villes, avec l'accompagnement de l'équipe ALO.": "Anboche anpil moun: plizyè pòs, plizyè vil, avèk èd ekip ALO a.",
  "Campagnes de recrutement": "Kanpay rekritman",
  "Un interlocuteur dédié": "Yon moun ki la pou ou",
  "Contacter l'équipe": "Kontakte ekip la",
  "Étudiants": "Etidyan",
  "Premiers emplois": "Premye djòb",
  "Stages": "Estaj",
  "Des offres vérifiées partout en Haïti. Postulez en une minute.": "Djòb verifye toupatou an Ayiti. Aplike nan yon minit.",
  "Trouver un travail ne devrait pas être compliqué.": "Jwenn travay pa ta dwe difisil.",
  "Parcourez les offres par domaine.": "Gade djòb yo pa domèn.",
  "Créer un compte": "Kreye yon kont",
  "100% gratuit": "100% gratis",
  "Les candidats vous écrivent sur WhatsApp": "Kandida yo ekri w sou WhatsApp",
  "Des milliers d'étudiants et jeunes diplômés": "Yon pakèt etidyan ak jèn gradye",
  "À discuter": "Pou n diskite",
  "Erreur. Vérifiez votre connexion et réessayez.": "Gen yon erè. Verifye koneksyon ou epi eseye ankò.",
  "Secteur": "Domèn",
  "Ce que vous cherchez (une ligne par point, facultatif)": "Sa w ap chèche (yon liy pou chak pwen, opsyonèl)",
  "Envoi…": "N ap voye…",
  "Chargement…": "N ap chaje…",
  "✅ 100% gratuit": "✅ 100% gratis",
  "📱 Les candidats vous écrivent sur WhatsApp": "📱 Kandida yo ekri w sou WhatsApp",
  "🎓 Des milliers d'étudiants et jeunes diplômés": "🎓 Yon pakèt etidyan ak jèn gradye",
  "Publier une offre": "Pibliye yon djòb",
  "Connexion": "Konekte",
  "Trouvez un emploi près de chez vous": "Jwenn yon travay toupre w",
  "Des offres vérifiées partout en Haïti. Postulez en une minute.": "Djòb verifye toupatou an Ayiti. Aplike nan yon minit.",
  "Métier, mot-clé ou entreprise": "Metye, mo kle oswa antrepriz",
  "Ville": "Vil",
  "Rechercher": "Chèche",
  "Populaire :": "Popilè :",
  "Comment ça marche": "Kijan sa mache",
  "Cherchez": "Chèche",
  "Tapez un métier et une ville.": "Tape yon metye ak yon vil.",
  "Postulez": "Aplike",
  "Votre nom et votre WhatsApp suffisent.": "Non w ak WhatsApp ou ase.",
  "Soyez contacté": "Yo kontakte w",
  "L'employeur vous répond directement.": "Anplwayè a reponn ou dirèkteman.",
  "Explorer par secteur": "Chèche pa domèn",
  "Vous recrutez ?": "W ap anboche?",
  "Publiez une offre gratuitement et recevez des candidats dès aujourd'hui.": "Pibliye yon djòb gratis epi resevwa kandida jodi a.",
  "Voir les offres": "Wè djòb yo",
  "offres": "djòb",
  "Aucune offre ne correspond. Essayez un autre mot ou une autre ville.": "Pa gen djòb ki koresponn. Eseye yon lòt mo oswa yon lòt vil.",
  "Postuler": "Aplike",
  "Description": "Deskripsyon",
  "Profil recherché": "Pwofil n ap chèche",
  "← Retour aux offres": "← Retounen nan djòb yo",
  "Nouveau": "Nouvo",
  "Envoyer ma candidature": "Voye aplikasyon an",
  "Nom complet": "Non konplè",
  "Numéro WhatsApp": "Nimewo WhatsApp",
  "Un mot pour l'employeur (facultatif)": "Yon mo pou anplwayè a (opsyonèl)",
  "Annuler": "Anile",
  "Candidature envoyée ! L'employeur vous contactera.": "Aplikasyon an ale! Anplwayè a ap kontakte w.",
  "Publier une offre d'emploi": "Pibliye yon djòb",
  "Trois minutes, gratuit. Votre offre est vérifiée par l'équipe ALO avant publication.": "Twa minit, gratis. Ekip ALO verifye djòb la anvan li parèt.",
  "Intitulé du poste": "Non pòs la",
  "Entreprise": "Antrepriz",
  "Type": "Tip",
  "Salaire (facultatif)": "Salè (opsyonèl)",
  "Description du poste": "Deskripsyon pòs la",
  "WhatsApp ou e-mail de contact": "WhatsApp oswa imèl pou kontak",
  "Publier l'offre": "Pibliye djòb la",
  "Merci ! Votre offre sera en ligne après vérification.": "Mèsi! Djòb la ap parèt apre verifikasyon.",
  "Temps plein": "Plen tan", "Temps partiel": "Mwatye tan", "Contrat": "Kontra",
  "Aujourd'hui": "Jodi a", "Hier": "Yè", "Il y a": "Sa gen", "jours": "jou",
  "Tous droits réservés.": "Tout dwa rezève.",
  "À propos": "Konsènan nou", "Aide": "Èd", "Confidentialité": "Konfidansyalite",
};

// ---- English -------------------------------------------------------------------
const EN = {
  "1 à 3 ans": "1–3 years", "3 à 5 ans": "3–5 years", "5 ans et plus": "5+ years", "Débutant": "Entry level", "Tous niveaux": "All levels",
  "3 compétences vérifiées": "3 verified skills",
  "30 jours · sans abonnement": "30 days · no subscription", "45 jours · sans abonnement": "45 days · no subscription",
  "ALO est une plateforme haïtienne qui rapproche les talents et les entreprises pour rendre le recrutement plus simple, plus accessible et plus efficace.": "ALO is a Haitian platform that connects talent and companies to make hiring simpler, more accessible and more effective.",
  "ALO simplifie le recrutement. De la publication d’une offre à la sélection des candidats, nous mettons à disposition des outils pour identifier les talents, évaluer les compétences et prendre de meilleures décisions.": "ALO makes hiring simpler. From posting a job to selecting candidates, we provide tools to identify talent, assess skills and make better decisions.",
  "ALO vous permet de créer votre Profil ALO, de présenter vos expériences et vos compétences, de faire vérifier certaines qualifications et d’accéder à des opportunités d’emploi.": "ALO lets you create your ALO Profile, showcase your experience and skills, get some of your qualifications verified and access job opportunities.",
  "Adresse e-mail": "Email address", "Aide": "Help", "Annuler": "Cancel",
  "Assistant IA de recrutement": "AI recruiting assistant", "Assistant IA pour vos offres (bientôt)": "AI assistant for your job posts (coming soon)",
  "Assistant(e) comptable · 24 candidatures": "Accounting assistant · 24 applications", "Assistante comptable": "Accounting assistant",
  "Astuce : flèches ↑ ↓": "Tip: use ↑ ↓ keys",
  "Aucun compte n'est nécessaire pour consulter les offres. La connexion est demandée uniquement pour postuler.": "No account is needed to browse jobs. You only sign in to apply.",
  "Aucun compte n’est nécessaire pour consulter les offres.": "No account needed to browse jobs.",
  "Aucune offre enregistrée pour le moment.": "No saved jobs yet.",
  "Aucune offre ne correspond. Essayez un autre mot ou une autre ville.": "No jobs match. Try another word or city.",
  "Aucune offre pour le moment. Revenez bientôt !": "No jobs yet. Check back soon!",
  "Aujourd'hui": "Today", "Hier": "Yesterday",
  "Avantages": "Benefits", "Avantages (une ligne par point, facultatif)": "Benefits (one per line, optional)",
  "Bientôt": "Coming soon", "Bienvenue sur alo.ht": "Welcome to alo.ht",
  "Candidats avec compétences vérifiées": "Candidates with verified skills",
  "Candidature envoyée ! L'employeur vous contactera.": "Application sent! The employer will contact you.",
  "Candidatures illimitées": "Unlimited applications", "Ce que nous faisons": "What we do",
  "Centralisez vos recrutements, évaluez les candidatures et facilitez la collaboration entre vos équipes RH.": "Centralize your hiring, assess applications and make collaboration easier across your HR teams.",
  "Cette offre n'est plus disponible.": "This job is no longer available.", "Chargement…": "Loading…",
  "Chercheurs d'emploi": "Job seekers", "Collaboration entre plusieurs recruteurs": "Collaboration between multiple recruiters",
  "Compétences": "Skills", "Conditions d'utilisation": "Terms of use", "Confidentialité": "Privacy",
  "Connectez-vous aux employeurs": "Connect with employers",
  "Connectez-vous ou créez un compte en quelques secondes.": "Sign in or create an account in seconds.",
  "Connectez-vous pour enregistrer des offres.": "Sign in to save jobs.",
  "Connectez-vous pour postuler avec votre Profil ALO.": "Sign in to apply with your ALO Profile.",
  "Connexion": "Sign in", "Connexion indisponible pour le moment.": "Sign-in is unavailable right now.",
  "Contacter l'équipe": "Contact the team", "Continuer avec LinkedIn": "Continue with LinkedIn", "Continuer avec l'e-mail": "Continue with email",
  "Contrat": "Contract", "Stage": "Internship", "Temps partiel": "Part-time", "Temps plein": "Full-time",
  "Créer mon Profil ALO": "Create my ALO Profile", "Créer mon profil": "Create my profile",
  "Créez votre Profil ALO": "Create your ALO Profile", "Créez votre Profil ALO.": "Create your ALO Profile.",
  "Demander une démo": "Request a demo", "Des suggestions pour combler vos écarts de compétences.": "Suggestions to close your skill gaps.",
  "Description du poste": "Job description", "Diplôme": "Degree", "Diplôme vérifié": "Degree verified", "Identité vérifiée": "Identity verified",
  "Dès": "From", "Décision finale : vous": "Final decision: you", "Découvrir les offres": "Explore jobs", "Déjà postulé": "Applied",
  "Effacer les filtres": "Clear filters",
  "Embauché ? ALO vous verse une prime sur MonCash, NatCash ou votre compte bancaire.": "Hired? ALO pays you a bonus via MonCash, NatCash or your bank account.",
  "En continuant, vous acceptez les conditions d'utilisation et la politique de confidentialité d'alo.ht.": "By continuing, you agree to alo.ht's terms of use and privacy policy.",
  "Enregistrer": "Save", "Enregistrer l'offre": "Save job", "Enregistrée": "Saved", "Enregistrées": "Saved",
  "Ensemble, allons plus loin.": "Together, let's go further.", "Entreprise": "Company", "Envoi…": "Sending…",
  "Envoyer ma candidature": "Send my application", "Erreur. Vérifiez votre connexion et réessayez.": "Error. Check your connection and try again.",
  "Excel · Comptabilité · Service client": "Excel · Accounting · Customer service", "Expérience demandée": "Experience required",
  "Faire avancer les personnes et les organisations.": "Advancing people and organizations.",
  "Faites reconnaître vos compétences, découvrez des offres d’emploi et profitez d’une prime lorsque vous êtes embauché grâce à ALO.": "Get your skills recognized, discover job offers and earn a bonus when you're hired through ALO.",
  "Formations recommandées": "Recommended training", "Gardez le contrôle.": "Stay in control.",
  "Gestion avancée des candidatures": "Advanced application management", "Gestion des candidatures": "Application management",
  "Gestion du personnel": "Workforce management", "Grandes entreprises": "Large companies", "PME": "SMEs", "PME · Grandes entreprises": "SMEs · Large companies",
  "Intitulé du poste": "Job title", "Jeunes diplômés": "Recent graduates",
  "Le talent est partout.": "Talent is everywhere.", "Les opportunités doivent l’être aussi.": "Opportunity should be too.",
  "Les candidats vous écrivent sur WhatsApp": "Candidates contact you on WhatsApp", "Licence en comptabilité": "Bachelor's in accounting",
  "LinkedIn n'est pas encore activé.": "LinkedIn isn't enabled yet.",
  "Merci ! Votre offre sera en ligne après vérification.": "Thank you! Your job will go live after review.",
  "Mon compte": "My account", "Métier": "Occupation", "Métier, mot-clé ou entreprise": "Job title, keyword or company",
  "Nom": "Name", "Nom complet": "Full name",
  "Notre ambition est de faire d’ALO un outil de référence pour les professionnels et les entreprises en Haïti.": "Our ambition is to make ALO the go-to tool for professionals and companies in Haiti.",
  "Notre mission": "Our mission", "Notre vision": "Our vision",
  "Nous croyons que chaque professionnel mérite d’être reconnu pour ses compétences, ses expériences et son potentiel. Et que chaque entreprise, quelle que soit sa taille, doit pouvoir trouver les bonnes personnes pour avancer.": "We believe every professional deserves to be recognized for their skills, experience and potential. And that every company, whatever its size, should be able to find the right people to move forward.",
  "Nous facilitons la rencontre entre les professionnels et les employeurs grâce à une plateforme qui permet de découvrir des opportunités, de valoriser les compétences et de recruter avec confiance.": "We bring professionals and employers together through a platform for discovering opportunities, showcasing skills and hiring with confidence.",
  "Nous voulons contribuer à construire un environnement professionnel dans lequel les compétences sont plus visibles, les opportunités plus accessibles et les recrutements plus transparents.": "We want to help build a professional world where skills are more visible, opportunities more accessible and hiring more transparent.",
  "Nouveau": "New", "Numéro WhatsApp": "WhatsApp number",
  "Offre précédente": "Previous job", "Offre suivante": "Next job", "Offres similaires": "Similar jobs", "Ouvrir l'offre": "Open job",
  "Pas de mot de passe : nous vous envoyons un lien de connexion.": "No password: we email you a sign-in link.",
  "Postuler avec mon Profil ALO": "Apply with my ALO Profile",
  "Postulez aux offres et faites-vous découvrir par des recruteurs vérifiés.": "Apply to jobs and get discovered by verified recruiters.",
  "Pour les entreprises": "For companies", "Pour les professionnels": "For professionals", "Pourquoi ALO ?": "Why ALO?",
  "Prime d'embauche": "Hiring bonus", "Professionnels": "Professionals", "Profil ALO": "ALO Profile", "Profil complété à 85 %": "Profile 85% complete",
  "Présentez vos expériences, vos compétences et vos diplômes. ALO vous aide à les faire vérifier.": "Showcase your experience, skills and degrees. ALO helps you get them verified.",
  "Présélection IA": "AI shortlist", "Présélection assistée par IA": "AI-assisted shortlisting",
  "Prêt ?": "Ready?", "Prêt à recruter ?": "Ready to hire?",
  "Publication d’offres d’emploi": "Job posting", "Publier l'offre": "Publish the job", "Publier une offre": "Post a job", "Publier une offre d'emploi": "Post a job offer",
  "Publiez vos offres d’emploi, recevez des candidatures et identifiez les profils qui correspondent à vos besoins, depuis une seule plateforme.": "Post your jobs, receive applications and identify the profiles that match your needs, all from one platform.",
  "Publiez, évaluez et présélectionnez au même endroit. L'IA prépare, vous décidez.": "Post, assess and shortlist in one place. AI prepares, you decide.",
  "Qualifications": "Qualifications", "Qualifications (une ligne par point)": "Qualifications (one per line)",
  "Que vous recherchiez votre prochaine opportunité ou les talents qui feront grandir votre entreprise, ALO est là pour faciliter la rencontre.": "Whether you're looking for your next opportunity or the talent to grow your company, ALO is here to bring you together.",
  "Questions de présélection": "Screening questions", "Questions de présélection personnalisées": "Custom screening questions",
  "Rapports et statistiques de recrutement": "Hiring reports and analytics", "Recevez votre prime": "Get your bonus",
  "Rechercher": "Search", "Rechercher des offres": "Search jobs", "Recrutement géré par ALO": "Recruitment managed by ALO", "Recruter avec ALO": "Hire with ALO",
  "Recrutez simplement.": "Hire simply.", "Recrutez sur preuves, pas sur promesses.": "Hire on proof, not promises.", "Recrutez à grande échelle.": "Hire at scale.",
  "Responsabilités": "Responsibilities", "Responsabilités (une ligne par point)": "Responsibilities (one per line)",
  "Salaire affiché (facultatif)": "Displayed salary (optional)", "Salaire indiqué": "Salary shown",
  "Salaire minimum par mois en HTG (pour les filtres)": "Minimum monthly salary in HTG (for filters)", "Salaire non indiqué": "Salary not shown",
  "Se déconnecter": "Sign out", "Secteur": "Sector", "Simple · Fiable · Gratuit": "Simple · Trusted · Free",
  "Solutions entreprise": "Enterprise solutions", "Stages et premiers jobs": "Internships and first jobs",
  "Tableau de bord de recrutement": "Hiring dashboard", "Tarifs PME": "SME pricing", "Tarifs préférentiels pour les publications multiples": "Preferential rates for multiple postings",
  "Test pratique · Étude de cas · Entretien": "Practical test · Case study · Interview", "Tous droits réservés.": "All rights reserved.",
  "Tous les contrats": "All contracts", "Tous les secteurs": "All sectors", "Tout": "All", "Tout ce qu'il faut pour recruter": "Everything you need to hire",
  "Tout salaire": "Any salary", "Toute expérience": "Any experience",
  "Trois minutes. Votre offre est vérifiée par l'équipe ALO avant publication.": "Three minutes. Your job is reviewed by the ALO team before it goes live.",
  "Trouvez les bons talents.": "Find the right talent.", "Type": "Type",
  "Un marché de l’emploi où le talent compte plus que les connexions.": "A job market where talent matters more than connections.",
  "Un mot pour l'employeur (facultatif)": "A note for the employer (optional)",
  "Un nom qui résume notre conviction : lorsqu’une personne trouve la bonne opportunité et qu’une organisation trouve le bon talent, les deux avancent.": "A name that sums up our belief: when a person finds the right opportunity and an organization finds the right talent, both move forward.",
  "Un profil qui": "A profile that", "prouve": "proves", "votre talent.": "your talent.", "Un profil qui rassure": "A profile that reassures",
  "Une petite ou moyenne entreprise ?": "A small or medium business?", "Ville": "City",
  "Voir les offres": "See jobs", "Voir les tarifs": "See pricing", "Voir l’offre Grandes entreprises": "See the Large companies plan", "Voir l’offre PME": "See the SME plan",
  "Votre Profil ALO sera transmis à l'employeur.": "Your ALO Profile will be shared with the employer.",
  "Votre prochain emploi en 3 étapes": "Your next job in 3 steps", "Vous avez déjà postulé à cette offre.": "You've already applied to this job.",
  "Vous recrutez à grande échelle ?": "Hiring at scale?", "Vous êtes connecté(e)": "You're signed in",
  "Vérifiez votre boîte e-mail : nous vous avons envoyé un lien de connexion.": "Check your inbox: we sent you a sign-in link.",
  "WhatsApp ou e-mail de contact": "Contact WhatsApp or email", "mois": "month", "offres": "jobs", "ou": "or", "par offre": "per job",
  "À chaque étape de carrière": "At every career stage", "À propos": "About", "À propos d’ALO": "About ALO",
  "Étudiants": "Students", "Évaluations de compétences": "Skills assessments", "Évaluations de compétences de base": "Basic skills assessments",
  "Évoluez, même sans chercher": "Grow, even when you're not looking", "← Toutes les offres": "← All jobs",
  "Recrutez sur preuves, pas sur promesses.": "Hire on proof, not promises.",
  "Envoyer": "Send",
};

// Kreyòl for the newer job pages
Object.assign(KR, {
  "1 à 3 ans": "1 a 3 an", "3 à 5 ans": "3 a 5 an", "5 ans et plus": "5 an oswa plis", "Débutant": "Debitan", "Tous niveaux": "Tout nivo",
  "Stage": "Estaj", "Astuce : flèches ↑ ↓": "Konsèy: flèch ↑ ↓",
  "Aucun compte n'est nécessaire pour consulter les offres. La connexion est demandée uniquement pour postuler.": "Ou pa bezwen kont pou w gade djòb yo. Se sèlman pou aplike pou w konekte.",
  "Aucune offre enregistrée pour le moment.": "Ou poko anrejistre okenn djòb.",
  "Avantages": "Avantaj", "Avantages (une ligne par point, facultatif)": "Avantaj (yon liy pou chak pwen, opsyonèl)",
  "Cette offre n'est plus disponible.": "Djòb sa a pa disponib ankò.",
  "Connectez-vous pour enregistrer des offres.": "Konekte pou w anrejistre djòb.",
  "Connectez-vous pour postuler avec votre Profil ALO.": "Konekte pou w aplike ak Pwofil ALO ou.",
  "Dès": "Apati", "Déjà postulé": "Ou deja aplike", "Effacer les filtres": "Efase filtè yo",
  "Enregistrer": "Anrejistre", "Enregistrer l'offre": "Anrejistre djòb la", "Enregistrée": "Anrejistre", "Enregistrées": "Anrejistre",
  "Expérience demandée": "Eksperyans yo mande", "Offre précédente": "Djòb anvan", "Offre suivante": "Djòb apre",
  "Offres similaires": "Djòb ki sanble", "Ouvrir l'offre": "Louvri djòb la", "Postuler avec mon Profil ALO": "Aplike ak Pwofil ALO mwen",
  "Qualifications": "Kalifikasyon", "Qualifications (une ligne par point)": "Kalifikasyon (yon liy pou chak pwen)",
  "Responsabilités": "Responsablite", "Responsabilités (une ligne par point)": "Responsablite (yon liy pou chak pwen)",
  "Salaire affiché (facultatif)": "Salè pou afiche (opsyonèl)", "Salaire indiqué": "Salè endike",
  "Salaire minimum par mois en HTG (pour les filtres)": "Salè minimòm pa mwa an HTG (pou filtè yo)", "Salaire non indiqué": "Salè pa endike",
  "Tous les contrats": "Tout kontra", "Tout salaire": "Tout salè", "Toute expérience": "Tout eksperyans",
  "Votre Profil ALO sera transmis à l'employeur.": "Y ap voye Pwofil ALO ou bay anplwayè a.",
  "Vous avez déjà postulé à cette offre.": "Ou deja aplike pou djòb sa a.", "mois": "mwa", "← Toutes les offres": "← Tout djòb yo",
  "Aide": "Èd", "Confidentialité": "Konfidansyalite", "Hier": "Yè", "Il y a": "Sa gen", "jours": "jou",
  "Temps partiel": "Mwatye tan", "Temps plein": "Plen tan", "Contrat": "Kontra",
});

// Profil ALO page: [English, Kreyòl]
(function () {
  const P = {
    "Bien plus qu’un CV.": ["Much more than a CV.", "Plis pase yon CV."],
    "Votre talent, vos compétences, votre avenir.": ["Your talent, your skills, your future.", "Talan ou, konpetans ou, avni ou."],
    "Votre parcours professionnel ne se résume pas à un diplôme ou à une liste d’expériences. Vos compétences, vos réalisations et les connaissances que vous avez acquises méritent d’être reconnues.": ["Your career is more than a degree or a list of jobs. Your skills, achievements and the knowledge you've gained deserve to be recognized.", "Karyè ou pa sèlman yon diplòm oswa yon lis eksperyans. Konpetans ou, reyalizasyon ou ak konesans ou genyen merite pou yo rekonèt yo."],
    "Profil ALO est votre espace professionnel personnel. Il rassemble ce que vous savez faire, ce que vous avez accompli et ce qui vous distingue. Un profil que vous construisez, enrichissez et utilisez tout au long de votre carrière.": ["The ALO Profile is your personal professional space. It brings together what you can do, what you've achieved and what sets you apart. A profile you build, enrich and use throughout your career.", "Pwofil ALO se espas pwofesyonèl pa w. Li mete ansanm sa w konn fè, sa w reyalize ak sa ki fè w diferan. Yon pwofil ou bati, ou anrichi epi ou itilize pandan tout karyè w."],
    "Créez votre profil.": ["Create your profile.", "Kreye pwofil ou."],
    "Prouvez vos compétences.": ["Prove your skills.", "Pwouve konpetans ou."],
    "Partagez votre talent.": ["Share your talent.", "Pataje talan ou."],
    "Saisissez les opportunités.": ["Seize opportunities.", "Pwofite opòtinite yo."],
    "Présentez votre parcours": ["Showcase your journey", "Prezante karyè ou"],
    "Rassemblez toutes vos informations professionnelles au même endroit.": ["Bring all your professional information together in one place.", "Mete tout enfòmasyon pwofesyonèl ou nan yon sèl kote."],
    "Votre Profil ALO évolue avec vous, à mesure que vous développez de nouvelles compétences et accumulez de nouvelles expériences.": ["Your ALO Profile grows with you as you build new skills and gain new experience.", "Pwofil ALO ou grandi avè w, plis w ap devlope nouvo konpetans ak nouvo eksperyans."],
    "Expériences professionnelles": ["Work experience", "Eksperyans travay"],
    "Formations et diplômes": ["Education and degrees", "Fòmasyon ak diplòm"],
    "Compétences techniques et humaines": ["Technical and soft skills", "Konpetans teknik ak konpetans moun"],
    "Certifications": ["Certifications", "Sètifikasyon"],
    "Projets et réalisations": ["Projects and achievements", "Pwojè ak reyalizasyon"],
    "Portfolio et travaux": ["Portfolio and work samples", "Pòtfolyo ak travay"],
    "Recommandations professionnelles": ["Professional recommendations", "Rekòmandasyon pwofesyonèl"],
    "Faites reconnaître vos compétences": ["Get your skills recognized", "Fè yo rekonèt konpetans ou"],
    "Votre talent mérite plus que des mots. Il mérite des preuves.": ["Your talent deserves more than words. It deserves proof.", "Talan ou merite plis pase pawòl. Li merite prèv."],
    "Avec ALO, vous pouvez renforcer la crédibilité de votre parcours grâce à la vérification de certaines informations et à des évaluations de compétences.": ["With ALO, you can make your background more credible through verification of some information and skills assessments.", "Avèk ALO, ou ka fè karyè w pi kredib gras a verifikasyon kèk enfòmasyon ak evalyasyon konpetans."],
    "Chaque compétence reconnue renforce votre profil et vous aide à vous démarquer.": ["Every recognized skill strengthens your profile and helps you stand out.", "Chak konpetans yo rekonèt ranfòse pwofil ou epi ede w parèt pi plis."],
    "Les employeurs voient clairement la différence :": ["Employers clearly see the difference:", "Anplwayè yo wè diferans lan klè:"],
    "Vérifiée": ["Verified", "Verifye"],
    "Qualification vérifiée": ["Verified qualification", "Kalifikasyon verifye"],
    "Confirmée par ALO auprès de l’établissement ou de l’employeur.": ["Confirmed by ALO with the school or employer.", "ALO konfime l ak lekòl la oswa anplwayè a."],
    "Évaluée": ["Assessed", "Evalye"],
    "Compétence évaluée": ["Assessed skill", "Konpetans evalye"],
    "Démontrée lors d’une évaluation pratique sur ALO.": ["Demonstrated in a practical assessment on ALO.", "Ou montre l nan yon evalyasyon pratik sou ALO."],
    "Déclarée": ["Self-reported", "Deklare"],
    "Information déclarée": ["Self-reported information", "Enfòmasyon deklare"],
    "Renseignée par vous, pas encore vérifiée.": ["Entered by you, not yet verified.", "Se ou ki mete l, li poko verifye."],
    "Transformez votre profil en cartes professionnelles": ["Turn your profile into professional cards", "Fè pwofil ou tounen kat pwofesyonèl"],
    "Votre talent mérite d’être vu. Créez des cartes personnalisées à partir de votre profil, téléchargez-les en image et publiez-les sur WhatsApp, Facebook, Instagram ou LinkedIn.": ["Your talent deserves to be seen. Create personalized cards from your profile, download them as images and post them on WhatsApp, Facebook, Instagram or LinkedIn.", "Talan ou merite pou moun wè l. Kreye kat pèsonalize apati pwofil ou, telechaje yo kòm imaj epi pibliye yo sou WhatsApp, Facebook, Instagram oswa LinkedIn."],
    "Ma carte professionnelle": ["My professional card", "Kat pwofesyonèl mwen"],
    "Comptabilité": ["Accounting", "Kontablite"],
    "Scannez pour voir mon Profil ALO": ["Scan to view my ALO Profile", "Eskane pou wè Pwofil ALO mwen"],
    "Mes compétences": ["My skills", "Konpetans mwen"],
    "Service client": ["Customer service", "Sèvis kliyan"],
    "Disponible pour travailler": ["Open to work", "Disponib pou travay"],
    "Assistante comptable · Delmas": ["Accounting assistant · Delmas", "Asistan kontab · Delmas"],
    "Mes certifications": ["My certifications", "Sètifikasyon mwen"],
    "Mes réalisations": ["My achievements", "Reyalizasyon mwen"],
    "Chaque carte peut intégrer un QR code permettant de consulter les informations publiques de votre Profil ALO.": ["Each card can include a QR code that opens the public information of your ALO Profile.", "Chak kat ka gen yon kòd QR pou moun wè enfòmasyon piblik Pwofil ALO ou."],
    "Un seul profil. Plusieurs façons de montrer votre talent.": ["One profile. Many ways to show your talent.", "Yon sèl pwofil. Plizyè fason pou montre talan ou."],
    "Faites-vous découvrir par les employeurs": ["Get discovered by employers", "Kite anplwayè yo dekouvri w"],
    "Selon vos préférences de confidentialité, les recruteurs peuvent consulter vos expériences, découvrir vos compétences et vous contacter pour des opportunités professionnelles.": ["Depending on your privacy settings, recruiters can view your experience, discover your skills and contact you about opportunities.", "Selon preferans konfidansyalite w, rekritè yo ka gade eksperyans ou, dekouvri konpetans ou epi kontakte w pou opòtinite."],
    "Même lorsque vous ne recherchez pas activement un emploi, votre profil continue à valoriser votre parcours.": ["Even when you're not actively looking, your profile keeps showcasing your career.", "Menm lè w pa ap chèche travay, pwofil ou kontinye mete karyè w an valè."],
    "Découvrez des opportunités et postulez facilement": ["Discover opportunities and apply easily", "Dekouvri opòtinite epi aplike fasil"],
    "Découvrez les offres qui correspondent à vos compétences, à votre expérience et à vos aspirations.": ["Discover jobs that match your skills, experience and goals.", "Dekouvri djòb ki koresponn ak konpetans, eksperyans ak rèv ou."],
    "Postulez directement avec votre profil, sans ressaisir vos informations, et suivez vos candidatures depuis votre espace personnel.": ["Apply directly with your profile without retyping your details, and track your applications from your personal space.", "Aplike dirèkteman ak pwofil ou san w pa reekri enfòmasyon w, epi swiv aplikasyon w yo nan espas pa w."],
    "Invitez votre réseau à rejoindre ALO": ["Invite your network to join ALO", "Envite rezo w vin sou ALO"],
    "Les opportunités grandissent lorsqu’on les partage.": ["Opportunities grow when they're shared.", "Opòtinite yo grandi lè nou pataje yo."],
    "Chaque utilisateur dispose d’un lien de parrainage personnel pour inviter ses amis, collègues et connaissances. Partagez-le sur vos réseaux ou directement avec vos contacts, et suivez les inscriptions réalisées grâce à vos invitations.": ["Every user has a personal referral link to invite friends, colleagues and acquaintances. Share it on social media or directly with your contacts, and track the sign-ups from your invitations.", "Chak itilizatè gen yon lyen parennaj pèsonèl pou envite zanmi, kòlèg ak konesans. Pataje l sou rezo w oswa dirèkteman ak kontak ou, epi swiv enskripsyon envitasyon w yo pote."],
    "Mon lien de parrainage": ["My referral link", "Lyen parennaj mwen"],
    "Copier": ["Copy", "Kopye"],
    "invitations": ["invitations", "envitasyon"],
    "inscriptions": ["sign-ups", "enskripsyon"],
    "Gardez le contrôle de votre profil": ["Stay in control of your profile", "Kenbe kontwòl pwofil ou"],
    "Votre Profil ALO vous appartient et vous accompagne tout au long de votre carrière.": ["Your ALO Profile belongs to you and stays with you throughout your career.", "Pwofil ALO ou se pa w, li akonpaye w pandan tout karyè w."],
    "Vos documents personnels et vos justificatifs ne sont pas automatiquement accessibles aux autres utilisateurs.": ["Your personal documents and supporting files are never automatically visible to other users.", "Lòt itilizatè pa wè dokiman pèsonèl ou ak prèv ou otomatikman."],
    "Public": ["Public", "Piblik"],
    "Visible par tous, y compris via vos cartes et votre QR code.": ["Visible to everyone, including through your cards and QR code.", "Tout moun ka wè l, menm atravè kat ou ak kòd QR ou."],
    "Recruteurs": ["Recruiters", "Rekritè"],
    "Partagé uniquement avec les employeurs vérifiés.": ["Shared only with verified employers.", "Se sèlman anplwayè verifye ki wè l."],
    "Privé": ["Private", "Prive"],
    "Visible par vous seul.": ["Visible only to you.", "Se ou sèl ki wè l."],
    "Votre carrière évolue. Votre Profil ALO aussi.": ["Your career evolves. So does your ALO Profile.", "Karyè ou ap evolye. Pwofil ALO ou tou."],
    "Que vous soyez étudiant, jeune diplômé, professionnel expérimenté, entrepreneur ou simplement ouvert à de nouvelles opportunités, Profil ALO vous aide à valoriser votre parcours et à faire reconnaître vos compétences.": ["Whether you're a student, a recent graduate, an experienced professional, an entrepreneur or simply open to new opportunities, the ALO Profile helps you showcase your career and get your skills recognized.", "Kit ou se etidyan, jèn gradye, pwofesyonèl ki gen eksperyans, antreprenè oswa ou jis ouvè pou nouvo opòtinite, Pwofil ALO ede w mete karyè w an valè epi fè yo rekonèt konpetans ou."],
    "Créez votre profil. Prouvez vos compétences. Partagez votre talent. Saisissez les opportunités.": ["Create your profile. Prove your skills. Share your talent. Seize opportunities.", "Kreye pwofil ou. Pwouve konpetans ou. Pataje talan ou. Pwofite opòtinite yo."],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// CV builder, application flow, Mon espace, referrals: [English, Kreyòl]
(function () {
  const P = {
    "Créer mon CV avec l’IA": ["Create my CV with AI", "Kreye CV mwen ak IA"],
    "Un CV clair et professionnel en quelques minutes. L’IA améliore la présentation de vos informations, sans jamais inventer d’expérience, de diplôme ou de compétence.": ["A clear, professional CV in minutes. AI improves how your information is presented, without ever inventing experience, degrees or skills.", "Yon CV klè e pwofesyonèl nan kèk minit. IA a amelyore jan enfòmasyon w yo prezante, san li pa janm envante eksperyans, diplòm oswa konpetans."],
    "À partir de mon Profil ALO": ["From my ALO Profile", "Apati Pwofil ALO mwen"],
    "Votre CV est généré avec les informations de votre profil.": ["Your CV is generated from your profile information.", "CV ou fèt ak enfòmasyon ki nan pwofil ou."],
    "Importer un CV existant": ["Import an existing CV", "Enpòte yon CV ou genyen deja"],
    "PDF ou Word (.docx). L’IA range vos informations dans les bonnes sections.": ["PDF or Word (.docx). AI puts your information in the right sections.", "PDF oswa Word (.docx). IA a mete enfòmasyon w yo nan bon seksyon yo."],
    "Commencer de zéro": ["Start from scratch", "Kòmanse apati zewo"],
    "Remplissez les sections une à une, avec l’aide de l’assistant.": ["Fill in the sections one by one, with the assistant's help.", "Ranpli seksyon yo youn apre lòt, avèk èd asistan an."],
    "Nouvelle version": ["New version", "Nouvo vèsyon"], "Assistant IA": ["AI assistant", "Asistan IA"], "Modifier": ["Edit", "Modifye"], "Modèle": ["Template", "Modèl"],
    "L’IA reformule vos informations. Elle n’invente jamais d’expérience, de diplôme ou de compétence.": ["AI rewords your information. It never invents experience, degrees or skills.", "IA a reekri enfòmasyon w yo. Li pa janm envante eksperyans, diplòm oswa konpetans."],
    "Améliorer mon résumé": ["Improve my summary", "Amelyore rezime m"], "Renforcer mes expériences": ["Strengthen my experience", "Ranfòse eksperyans mwen"], "Corriger les fautes": ["Fix mistakes", "Korije fot yo"],
    "Améliore mon résumé professionnel.": ["Improve my professional summary.", "Amelyore rezime pwofesyonèl mwen."],
    "Reformule mes expériences avec des verbes d’action.": ["Rewrite my experience with action verbs.", "Reekri eksperyans mwen ak vèb aksyon."],
    "Corrige les fautes d’orthographe et de grammaire.": ["Fix spelling and grammar mistakes.", "Korije fot òtograf ak gramè yo."],
    "Adapter mon CV à une offre": ["Tailor my CV to a job", "Adapte CV mwen ak yon djòb"], "Adapter mon CV": ["Tailor my CV", "Adapte CV mwen"],
    "Télécharger en PDF": ["Download as PDF", "Telechaje an PDF"], "Télécharger en Word": ["Download as Word", "Telechaje an Word"],
    "Mettre à jour mon Profil ALO": ["Update my ALO Profile", "Mete Pwofil ALO mwen ajou"], "Postuler avec ce CV": ["Apply with this CV", "Aplike ak CV sa a"], "Recommencer": ["Start over", "Rekòmanse"],
    "Recommander un talent": ["Refer a talent", "Rekòmande yon talan"],
    "Ou collez la description d’une offre": ["Or paste a job description", "Oswa kole deskripsyon yon djòb"],
    "Demandez à l’assistant, par ex. « rends mon résumé plus court »": ["Ask the assistant, e.g. \"make my summary shorter\"", "Mande asistan an, pa egzanp « fè rezime m pi kout »"],
    "Mon espace ALO": ["My ALO space", "Espas ALO mwen"], "Mon espace": ["My space", "Espas mwen"],
    "Connectez-vous pour suivre vos candidatures.": ["Sign in to track your applications.", "Konekte pou w swiv aplikasyon w yo."],
    "Offre": ["Job", "Djòb"], "Envoyée le": ["Sent on", "Voye le"], "Modifié le": ["Edited on", "Modifye le"], "Reprendre": ["Resume", "Kontinye"], "Voir l’offre": ["View job", "Gade djòb la"], "Ouvrir": ["Open", "Louvri"],
    "Mes candidatures": ["My applications", "Aplikasyon mwen"], "Aucune candidature pour l’instant.": ["No applications yet.", "Poko gen aplikasyon."],
    "Brouillons en cours": ["Drafts in progress", "Bouyon k ap fèt"], "Votre profil est enregistré.": ["Your profile is saved.", "Pwofil ou anrejistre."],
    "Votre profil n’est pas encore créé. Il n’est pas obligatoire pour postuler.": ["Your profile isn't created yet. It isn't required to apply.", "Pwofil ou poko kreye. Ou pa oblije genyen l pou aplike."],
    "Modifier mon Profil ALO": ["Edit my ALO Profile", "Modifye Pwofil ALO mwen"], "Mes CV": ["My CVs", "CV mwen yo"], "Offres enregistrées": ["Saved jobs", "Djòb anrejistre"],
    "Recommandez un talent.": ["Refer a talent.", "Rekòmande yon talan."], "Recevez une prime.": ["Earn a bonus.", "Resevwa yon bonis."],
    "Vous connaissez quelqu’un qui recherche un emploi ? Aidez cette personne à trouver sa prochaine opportunité grâce à ALO.": ["Know someone looking for a job? Help them find their next opportunity with ALO.", "Ou konnen yon moun k ap chèche travay? Ede l jwenn pwochen opòtinite l gras a ALO."],
    "Recevez jusqu’à": ["Earn up to", "Resevwa jiska"], "de son premier salaire mensuel si votre recommandation aboutit à une embauche.": ["of their first monthly salary if your referral leads to a hire.", "nan premye salè mansyèl li si rekòmandasyon w lan fè yo anboche l."],
    "Comment ça marche ?": ["How does it work?", "Kijan sa mache?"],
    "Partagez votre lien de recommandation": ["Share your referral link", "Pataje lyen rekòmandasyon w"],
    "Invitez un ami, un collègue ou une connaissance à découvrir ALO grâce à votre lien personnel.": ["Invite a friend, colleague or acquaintance to discover ALO with your personal link.", "Envite yon zanmi, yon kòlèg oswa yon konesans dekouvri ALO ak lyen pèsonèl ou."],
    "Votre contact postule": ["Your contact applies", "Kontak ou aplike"],
    "La personne recommandée crée son Profil ALO et postule à une offre d’emploi admissible.": ["The person you referred creates their ALO Profile and applies to an eligible job.", "Moun ou rekòmande a kreye Pwofil ALO li epi aplike pou yon djòb ki kalifye."],
    "Elle décroche un emploi": ["They get hired", "Li jwenn travay"],
    "Si votre contact est recruté grâce à ALO, votre recommandation peut donner droit à une prime.": ["If your contact is hired through ALO, your referral may qualify for a bonus.", "Si yo anboche kontak ou gras a ALO, rekòmandasyon w lan ka ba w dwa a yon bonis."],
    "Recevez votre récompense": ["Get your reward", "Resevwa rekonpans ou"],
    "Après vérification de l’embauche et validation de votre recommandation, recevez votre prime sur MonCash ou NatCash.": ["Once the hire is verified and your referral validated, receive your bonus via MonCash or NatCash.", "Apre yo verifye anbochaj la epi valide rekòmandasyon w, resevwa bonis ou sou MonCash oswa NatCash."],
    "Ensemble, tout le monde avance.": ["Together, everyone moves forward.", "Ansanm, tout moun avanse."],
    "pour votre contact": ["for your contact", "pou kontak ou"], "jusqu’à 5 % de son premier salaire mensuel": ["up to 5% of their first monthly salary", "jiska 5 % nan premye salè mansyèl li"],
    "pour vous": ["for you", "pou ou"], "jusqu’à 2 % pour l’avoir recommandé": ["up to 2% for referring them", "jiska 2 % paske w rekòmande l"],
    "Programme en phase de test. Primes soumises aux conditions d’admissibilité, de vérification et aux plafonds de versement.": ["Pilot program. Bonuses subject to eligibility conditions, verification and payment caps.", "Pwogram nan faz tès. Bonis yo depann de kondisyon kalifikasyon, verifikasyon ak limit peman."],
    "Connectez-vous pour obtenir votre lien de recommandation personnel.": ["Sign in to get your personal referral link.", "Konekte pou w jwenn lyen rekòmandasyon pèsonèl ou."],
    "Je t’invite à créer ton Profil ALO et à trouver ton prochain emploi :": ["Join me on ALO: create your ALO Profile and find your next job:", "M envite w kreye Pwofil ALO ou epi jwenn pwochen travay ou:"],
    "Votre lien de recommandation": ["Your referral link", "Lyen rekòmandasyon w"], "inscription(s) grâce à vos invitations": ["sign-up(s) from your invitations", "enskripsyon gras a envitasyon w yo"], "Copié !": ["Copied!", "Kopye!"],
    "Questions aux candidats (une par ligne, facultatif)": ["Questions for candidates (one per line, optional)", "Kesyon pou kandida yo (yon liy chak, opsyonèl)"],
    "Documents demandés (un par ligne, facultatif)": ["Required documents (one per line, optional)", "Dokiman yo mande (yon liy chak, opsyonèl)"],
    "Votre nom": ["Your name", "Non ou"], "Nouvel élément": ["New item", "Nouvo eleman"], "Supprimer": ["Delete", "Efase"],
    "Texte de votre CV importé": ["Text of your imported CV", "Tèks CV ou enpòte a"], "Copiez les informations dans les sections ci-dessous.": ["Copy the information into the sections below.", "Kopye enfòmasyon yo nan seksyon ki anba yo."],
    "Coordonnées": ["Contact details", "Kowòdone"], "Profil": ["Profile", "Pwofil"], "Langues": ["Languages", "Lang"], "Couleur": ["Color", "Koulè"],
    "Mise à jour proposée": ["Suggested update", "Mizajou pwopoze"], "Vérifiez avant d’enregistrer :": ["Check before saving:", "Verifye anvan w anrejistre:"],
    "Appliquer": ["Apply", "Aplike chanjman"], "Ignorer": ["Dismiss", "Inyore"], "L'assistant réfléchit…": ["The assistant is thinking…", "Asistan an ap reflechi…"],
    "Bonjour ! Je vais vous aider à créer votre Profil ALO, une question à la fois. Pour commencer : quel est votre nom, et quel métier exercez-vous ou recherchez-vous ?": ["Hello! I'll help you create your ALO Profile, one question at a time. To start: what is your name, and what job do you do or are you looking for?", "Bonjou! M ap ede w kreye Pwofil ALO ou, yon kesyon alafwa. Pou kòmanse: ki non w, e ki metye w fè oswa w ap chèche?"],
    "Votre Profil ALO est encore vide. Remplissez vos informations dans « Modifier » : elles pourront ensuite être enregistrées dans votre Profil ALO.": ["Your ALO Profile is still empty. Fill in your information under \"Edit\": you can then save it to your ALO Profile.", "Pwofil ALO ou toujou vid. Ranpli enfòmasyon w nan « Modifye »: apre sa ou ka anrejistre yo nan Pwofil ALO ou."],
    "Lecture de votre CV…": ["Reading your CV…", "N ap li CV ou…"], "Aucun texte trouvé dans ce fichier (CV scanné ?).": ["No text found in this file (scanned CV?).", "Pa gen tèks nan fichye sa a (CV eskane?)."],
    "Formats acceptés : PDF ou Word (.docx).": ["Accepted formats: PDF or Word (.docx).", "Fòma ki aksepte: PDF oswa Word (.docx)."], "Impossible de lire ce fichier.": ["This file can't be read.", "Nou pa ka li fichye sa a."],
    "L'assistant range vos informations…": ["The assistant is organizing your information…", "Asistan an ap ranje enfòmasyon w yo…"], "L’assistant range vos informations…": ["The assistant is organizing your information…", "Asistan an ap ranje enfòmasyon w yo…"],
    "Le texte de votre CV est affiché dans « Modifier ».": ["Your CV text is shown under \"Edit\".", "Tèks CV ou parèt nan « Modifye »."],
    "Mes versions": ["My versions", "Vèsyon mwen yo"], "Mon CV": ["My CV", "CV mwen"],
    "Démo : version enregistrée dans ce navigateur.": ["Demo: version saved in this browser.", "Demo: vèsyon anrejistre nan navigatè sa a."], "Version enregistrée dans votre espace.": ["Version saved to your space.", "Vèsyon anrejistre nan espas ou."],
    "Démo : Profil ALO mis à jour.": ["Demo: ALO Profile updated.", "Demo: Pwofil ALO mete ajou."], "Votre Profil ALO est à jour.": ["Your ALO Profile is up to date.", "Pwofil ALO ou ajou."],
    "Préparation du PDF…": ["Preparing the PDF…", "N ap prepare PDF la…"], "Choisir une offre ALO…": ["Choose an ALO job…", "Chwazi yon djòb ALO…"],
    "Choisissez une offre ou collez sa description.": ["Choose a job or paste its description.", "Chwazi yon djòb oswa kole deskripsyon l."], "Adapte mon CV à cette offre, sans rien inventer.": ["Tailor my CV to this job, without inventing anything.", "Adapte CV mwen ak djòb sa a, san w pa envante anyen."],
    "Complétez le formulaire ; le texte de votre CV est affiché pour vous aider.": ["Complete the form; your CV text is shown to help you.", "Ranpli fòmilè a; tèks CV ou parèt pou ede w."],
    "Commencez votre candidature": ["Start your application", "Kòmanse aplikasyon w"],
    "Choisissez la méthode la plus simple pour vous. Vous pourrez tout vérifier et modifier avant l’envoi.": ["Choose the easiest way for you. You can check and edit everything before sending.", "Chwazi fason ki pi senp pou ou. W ap ka verifye e modifye tout bagay anvan w voye."],
    "Vous avez un brouillon pour cette offre.": ["You have a draft for this job.", "Ou gen yon bouyon pou djòb sa a."], "Reprendre mon brouillon": ["Resume my draft", "Kontinye bouyon m"],
    "Utiliser mon Profil ALO": ["Use my ALO Profile", "Itilize Pwofil ALO mwen"], "Remplir automatiquement la candidature avec les informations de votre profil.": ["Fill in the application automatically from your profile.", "Ranpli aplikasyon an otomatikman ak enfòmasyon pwofil ou."],
    "Importer mon CV": ["Import my CV", "Enpòte CV mwen"], "PDF ou Word. L’IA extrait les informations pour préremplir la candidature.": ["PDF or Word. AI extracts the information to pre-fill the application.", "PDF oswa Word. IA a rale enfòmasyon yo pou ranpli aplikasyon an davans."],
    "Réutiliser ma dernière candidature": ["Reuse my last application", "Reitilize dènye aplikasyon m"], "Reprendre les informations d’une candidature précédente.": ["Reuse the information from a previous application.", "Repran enfòmasyon yon aplikasyon anvan."],
    "Remplir manuellement": ["Fill in manually", "Ranpli alamen"], "Saisir les informations directement dans le formulaire.": ["Enter the information directly in the form.", "Antre enfòmasyon yo dirèkteman nan fòmilè a."],
    "Connectez-vous pour continuer": ["Sign in to continue", "Konekte pou w kontinye"], "Votre choix est conservé :": ["Your choice is kept:", "Chwa w la konsève:"], "votre CV est déjà lu.": ["your CV has already been read.", "CV ou deja li."],
    "Après la connexion, vous reviendrez directement ici.": ["After signing in, you'll come straight back here.", "Apre w konekte, w ap tounen dirèkteman isit la."],
    "Pas encore de compte ? Il est créé automatiquement, gratuitement.": ["No account yet? One is created automatically, for free.", "Ou poko gen kont? Li kreye otomatikman, gratis."],
    "← Choisir une autre méthode": ["← Choose another way", "← Chwazi yon lòt fason"], "Inclure": ["Include", "Mete l"],
    "Connectez-vous à l’étape suivante pour joindre ce document.": ["Sign in at the next step to attach this document.", "Konekte nan pwochen etap la pou w mete dokiman sa a."],
    "Vos informations": ["Your information", "Enfòmasyon w"], "Expériences": ["Experience", "Eksperyans"], "Aucune expérience pour l’instant.": ["No experience yet.", "Poko gen eksperyans."],
    "Ajouter une expérience": ["Add experience", "Ajoute yon eksperyans"], "Formation": ["Education", "Fòmasyon"], "Aucune formation pour l’instant.": ["No education yet.", "Poko gen fòmasyon."], "Ajouter une formation": ["Add education", "Ajoute yon fòmasyon"],
    "Compétences pertinentes": ["Relevant skills", "Konpetans ki enpòtan"], "Ajouter une compétence": ["Add a skill", "Ajoute yon konpetans"], "Ajouter": ["Add", "Ajoute"], "CV": ["CV", "CV"],
    "Sans CV (le formulaire suffit)": ["No CV (the form is enough)", "San CV (fòmilè a ase)"], "Générer un CV avec l’IA": ["Generate a CV with AI", "Fè yon CV ak IA"], "Actualiser la liste": ["Refresh the list", "Rafrechi lis la"],
    "Questions de l’employeur": ["Employer's questions", "Kesyon anplwayè a"], "Documents demandés": ["Required documents", "Dokiman yo mande"],
    "Enregistrer le brouillon": ["Save draft", "Anrejistre bouyon an"], "Vérifier ma candidature": ["Review my application", "Verifye aplikasyon m"], "Vérifiez votre candidature": ["Review your application", "Verifye aplikasyon w"],
    "Rien n’est envoyé tant que vous n’avez pas cliqué sur « Envoyer ma candidature ».": ["Nothing is sent until you click \"Send my application\".", "Anyen p ap voye toutotan ou pa klike sou « Voye aplikasyon an »."],
    "À compléter avant l’envoi :": ["To complete before sending:", "Pou ranpli anvan w voye:"], "manquant": ["missing", "manke"],
    "Enregistrer ces informations (coordonnées, expériences, formations, compétences) dans mon Profil ALO pour mes prochaines candidatures.": ["Save this information (contact details, experience, education, skills) to my ALO Profile for my next applications.", "Anrejistre enfòmasyon sa yo (kowòdone, eksperyans, fòmasyon, konpetans) nan Pwofil ALO mwen pou pwochen aplikasyon m yo."],
    "Dernière étape : connectez-vous pour envoyer. Votre candidature est conservée.": ["Last step: sign in to send. Your application is kept.", "Dènye etap: konekte pou w voye. Aplikasyon w lan konsève."],
    "← Modifier": ["← Edit", "← Modifye"], "Se connecter pour envoyer": ["Sign in to send", "Konekte pou w voye"],
    "Votre candidature a été envoyée !": ["Your application has been sent!", "Aplikasyon w lan ale!"], "Retrouvez son évolution dans votre espace ALO.": ["Follow its progress in your ALO space.", "Swiv kote l ye nan espas ALO ou."],
    "Suivre ma candidature": ["Track my application", "Swiv aplikasyon m"], "Découvrir d’autres offres": ["Discover more jobs", "Dekouvri lòt djòb"],
    "Brouillon enregistré sur cet appareil.": ["Draft saved on this device.", "Bouyon anrejistre sou aparèy sa a."], "Brouillon enregistré. Reprenez-le depuis votre espace ALO.": ["Draft saved. Resume it from your ALO space.", "Bouyon anrejistre. Kontinye l nan espas ALO ou."],
    "Poste": ["Position", "Pòs"], "Début": ["Start", "Kòmansman"], "Fin": ["End", "Fen"], "Réalisations (une par ligne)": ["Achievements (one per line)", "Reyalizasyon (yon liy chak)"],
    "Établissement": ["School", "Lekòl"], "Année": ["Year", "Ane"], "Détails (facultatif)": ["Details (optional)", "Detay (opsyonèl)"],
    "Ajouter une certification": ["Add a certification", "Ajoute yon sètifikasyon"], "Certification": ["Certification", "Sètifikasyon"], "Organisme": ["Issuer", "Òganis"],
    "Ajouter un projet": ["Add a project", "Ajoute yon pwojè"], "Projet": ["Project", "Pwojè"], "Description": ["Description", "Deskripsyon"],
    "Classique": ["Classic", "Klasik"], "Une colonne, sobre et lisible.": ["One column, simple and readable.", "Yon kolòn, senp e fasil pou li."], "Moderne": ["Modern", "Modèn"], "Colonne latérale colorée.": ["Colored side column.", "Kolòn sou kote ki gen koulè."],
    "Épuré": ["Minimal", "Minimal"], "Beaucoup d'espace, très minimal.": ["Lots of space, very minimal.", "Anpil espas, trè senp."],
    "Titre professionnel": ["Professional title", "Tit pwofesyonèl"], "E-mail": ["Email", "Imèl"], "Téléphone / WhatsApp": ["Phone / WhatsApp", "Telefòn / WhatsApp"], "LinkedIn (facultatif)": ["LinkedIn (optional)", "LinkedIn (opsyonèl)"],
    "Résumé professionnel": ["Professional summary", "Rezime pwofesyonèl"], "Compétences (une par ligne)": ["Skills (one per line)", "Konpetans (yon liy chak)"], "Langues (une par ligne)": ["Languages (one per line)", "Lang (yon liy chak)"],
    "Votre Profil ALO est encore vide : complétez le formulaire, vous pourrez l’enregistrer dans votre profil à la fin.": ["Your ALO Profile is still empty: complete the form, and you can save it to your profile at the end.", "Pwofil ALO ou toujou vid: ranpli fòmilè a, w ap ka anrejistre l nan pwofil ou alafen."],
    "Aucune candidature précédente trouvée : complétez le formulaire.": ["No previous application found: complete the form.", "Nou pa jwenn okenn aplikasyon anvan: ranpli fòmilè a."],
    "Informations extraites de votre CV par l’IA : vérifiez-les et corrigez-les si besoin.": ["Information extracted from your CV by AI: check it and correct it if needed.", "Enfòmasyon IA rale nan CV ou: verifye yo epi korije yo si sa nesesè."],
    "Démarrer": ["Start", "Kòmanse"], "Informations": ["Information", "Enfòmasyon"], "Vérification": ["Review", "Verifikasyon"],
    "Envoyée": ["Sent", "Voye"], "Consultée": ["Viewed", "Yo gade l"], "Entretien": ["Interview", "Entèvyou"], "Retenue": ["Selected", "Chwazi"], "Non retenue": ["Not selected", "Pa chwazi"],
    "Numéro WhatsApp ou e-mail": ["WhatsApp number or email", "Nimewo WhatsApp oswa imèl"],
    "Connectez-vous pour utiliser l'assistant IA.": ["Sign in to use the AI assistant.", "Konekte pou w itilize asistan IA a."], "L'assistant IA n'est pas encore activé.": ["The AI assistant isn't enabled yet.", "Asistan IA a poko aktive."],
    "L'assistant est très sollicité. Réessayez dans un instant.": ["The assistant is busy. Try again in a moment.", "Asistan an okipe anpil. Eseye ankò nan yon ti moman."],
    "L'assistant ne peut pas traiter cette demande.": ["The assistant can't handle this request.", "Asistan an pa ka trete demann sa a."],
    "Votre CV est trop long pour l'assistant. Raccourcissez-le un peu.": ["Your CV is too long for the assistant. Shorten it a little.", "CV ou twò long pou asistan an. Fè l yon ti jan pi kout."],
    "Bienvenue sur ALO !": ["Welcome to ALO!", "Byenveni sou ALO!"], "Créer mon Profil ALO": ["Create my ALO Profile", "Kreye Pwofil ALO mwen"],
    "Comment souhaitez-vous créer votre profil ? Vous pourrez vérifier et modifier toutes les informations avant de les enregistrer.": ["How would you like to create your profile? You can check and edit all the information before saving it.", "Kijan ou vle kreye pwofil ou? W ap ka verifye e modifye tout enfòmasyon yo anvan w anrejistre yo."],
    "L’IA analyse le document et prépare automatiquement votre Profil ALO.": ["AI analyzes the document and prepares your ALO Profile automatically.", "IA a analize dokiman an epi prepare Pwofil ALO ou otomatikman."],
    "Créer mon profil avec l’IA": ["Create my profile with AI", "Kreye pwofil mwen ak IA"], "Un assistant vous pose quelques questions pour renseigner votre parcours.": ["An assistant asks you a few questions to fill in your background.", "Yon asistan poze w kèk kesyon pou ranpli karyè w."],
    "Complétez les différentes sections de votre profil.": ["Complete the different sections of your profile.", "Ranpli diferan seksyon pwofil ou."], "Enregistrer mon Profil ALO": ["Save my ALO Profile", "Anrejistre Pwofil ALO mwen"],
    "Connectez-vous pour enregistrer votre CV et utiliser l’assistant IA.": ["Sign in to save your CV and use the AI assistant.", "Konekte pou w anrejistre CV ou epi itilize asistan IA a."],
    "Envoyer": ["Send", "Voye"],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Prime d'embauche page: [English, Kreyòl]
(function () {
  const P = {
    "La Prime d’embauche ALO": ["The ALO Hiring Bonus", "Bonis anbochaj ALO"],
    "Décrochez un emploi.": ["Land a job.", "Jwenn yon travay."], "Recevez une prime.": ["Earn a bonus.", "Resevwa yon bonis."],
    "Avec ALO, votre prochain emploi peut vous rapporter encore plus !": ["With ALO, your next job can earn you even more!", "Avèk ALO, pwochen travay ou ka rapòte w plis toujou!"],
    "Recevez jusqu’à 5 % de votre premier salaire mensuel lorsque vous décrochez un emploi grâce à ALO, ou jusqu’à 2 % lorsque vous recommandez une personne qui se fait embaucher.": ["Earn up to 5% of your first monthly salary when you land a job through ALO, or up to 2% when you refer someone who gets hired.", "Resevwa jiska 5 % nan premye salè mansyèl ou lè w jwenn travay gras a ALO, oswa jiska 2 % lè w rekòmande yon moun yo anboche."],
    "Parce que chez ALO, nous croyons que chaque réussite professionnelle mérite d’être célébrée.": ["Because at ALO, we believe every career success deserves to be celebrated.", "Paske nan ALO, nou kwè chak siksè pwofesyonèl merite pou nou fete l."],
    "Découvrir les offres d’emploi": ["Explore job offers", "Dekouvri djòb yo"], "Inviter un ami": ["Invite a friend", "Envite yon zanmi"],
    "Deux façons de bénéficier de la Prime d’embauche ALO": ["Two ways to benefit from the ALO Hiring Bonus", "De fason pou w benefisye Bonis anbochaj ALO"],
    "Vous décrochez un emploi": ["You land a job", "Ou jwenn yon travay"], "Vous trouvez un emploi grâce à ALO ? Félicitations !": ["Found a job through ALO? Congratulations!", "Ou jwenn travay gras a ALO? Konpliman!"],
    "Recevez jusqu’à 5 % de votre premier salaire mensuel après confirmation de votre embauche.": ["Earn up to 5% of your first monthly salary once your hire is confirmed.", "Resevwa jiska 5 % nan premye salè mansyèl ou apre yo konfime anbochaj ou."],
    "Vous aidez quelqu’un à décrocher un emploi": ["You help someone land a job", "Ou ede yon moun jwenn travay"],
    "Vous connaissez quelqu’un qui recherche un emploi ? Invitez cette personne à rejoindre ALO grâce à votre lien de recommandation personnel.": ["Know someone looking for a job? Invite them to join ALO with your personal referral link.", "Ou konnen yon moun k ap chèche travay? Envite l vin sou ALO ak lyen rekòmandasyon pèsonèl ou."],
    "Si elle décroche un emploi grâce à la plateforme, vous pouvez recevoir jusqu’à 2 % de son premier salaire mensuel.": ["If they land a job through the platform, you can earn up to 2% of their first monthly salary.", "Si li jwenn travay gras a platfòm nan, ou ka resevwa jiska 2 % nan premye salè mansyèl li."],
    "Et le meilleur ?": ["The best part?", "Sa ki pi bon an?"],
    "La personne recrutée peut également bénéficier de sa propre prime d’embauche !": ["The person hired can also receive their own hiring bonus!", "Moun yo anboche a ka resevwa pwòp bonis anbochaj pa l tou!"],
    "Rejoignez ALO": ["Join ALO", "Vin sou ALO"],
    "Créez gratuitement votre Profil ALO pour accéder aux opportunités et au programme de Prime d’embauche.": ["Create your free ALO Profile to access opportunities and the Hiring Bonus program.", "Kreye Pwofil ALO ou gratis pou w jwenn opòtinite ak pwogram Bonis anbochaj la."],
    "Postulez ou recommandez quelqu’un": ["Apply or refer someone", "Aplike oswa rekòmande yon moun"],
    "Découvrez les offres d’emploi et envoyez votre candidature, ou partagez votre lien de recommandation avec vos amis, collègues et connaissances.": ["Explore job offers and apply, or share your referral link with friends, colleagues and acquaintances.", "Dekouvri djòb yo epi voye aplikasyon w, oswa pataje lyen rekòmandasyon w ak zanmi, kòlèg ak konesans ou."],
    "Une embauche est confirmée": ["A hire is confirmed", "Yon anbochaj konfime"],
    "Vous ou une personne que vous avez recommandée décrochez un emploi grâce à ALO.": ["You, or someone you referred, land a job through ALO.", "Ou menm oswa yon moun ou rekòmande jwenn travay gras a ALO."],
    "Après vérification de l’embauche et validation de votre admissibilité, recevez votre prime directement sur MonCash ou NatCash.": ["Once the hire is verified and your eligibility confirmed, receive your bonus directly via MonCash or NatCash.", "Apre yo verifye anbochaj la epi valide kalifikasyon w, resevwa bonis ou dirèkteman sou MonCash oswa NatCash."],
    "Combien pouvez-vous recevoir ?": ["How much can you receive?", "Konbyen ou ka resevwa?"],
    "Voici quelques exemples des primes maximales possibles :": ["Here are some examples of the maximum possible bonuses:", "Men kèk egzanp bonis maksimòm ou ka resevwa:"],
    "Premier salaire mensuel": ["First monthly salary", "Premye salè mansyèl"], "Prime du candidat (5 %)": ["Candidate bonus (5%)", "Bonis kandida (5 %)"], "Prime de recommandation (2 %)": ["Referral bonus (2%)", "Bonis rekòmandasyon (2 %)"],
    "Montants illustratifs. Les primes réelles dépendent des conditions du programme et des plafonds applicables.": ["Illustrative amounts. Actual bonuses depend on the program conditions and applicable caps.", "Montan pou egzanp. Bonis reyèl yo depann de kondisyon pwogram nan ak limit ki aplike."],
    "Qui peut bénéficier de la Prime d’embauche ALO ?": ["Who can receive the ALO Hiring Bonus?", "Ki moun ki ka benefisye Bonis anbochaj ALO?"],
    "Pour être admissible, vous devez :": ["To be eligible, you must:", "Pou w kalifye, ou dwe:"],
    "Posséder un Profil ALO.": ["Have an ALO Profile.", "Gen yon Pwofil ALO."],
    "Avoir obtenu un emploi grâce à une candidature admissible sur ALO, ou avoir recommandé une personne qui remplit cette condition.": ["Have landed a job through an eligible application on ALO, or have referred someone who meets this condition.", "Jwenn yon travay gras a yon aplikasyon ki kalifye sou ALO, oswa rekòmande yon moun ki ranpli kondisyon sa a."],
    "Utiliser votre lien personnel pour que votre recommandation soit enregistrée.": ["Use your personal link so your referral is recorded.", "Itilize lyen pèsonèl ou pou rekòmandasyon w lan anrejistre."],
    "Fournir les informations nécessaires à la vérification de l’embauche.": ["Provide the information needed to verify the hire.", "Bay enfòmasyon ki nesesè pou verifye anbochaj la."],
    "Respecter les conditions du programme.": ["Follow the program conditions.", "Respekte kondisyon pwogram nan."],
    "Une seule recommandation peut être récompensée par embauche.": ["Only one referral can be rewarded per hire.", "Se yon sèl rekòmandasyon ki ka rekonpanse pou chak anbochaj."],
    "Comment recevoir votre prime ?": ["How do you receive your bonus?", "Kijan pou w resevwa bonis ou?"],
    "Une fois l’embauche confirmée, ALO vérifie l’admissibilité du candidat et, le cas échéant, celle de la personne qui l’a recommandé.": ["Once the hire is confirmed, ALO checks the candidate's eligibility and, where applicable, that of the person who referred them.", "Lè anbochaj la konfime, ALO verifye si kandida a kalifye e, si sa aplike, si moun ki te rekòmande l la kalifye tou."],
    "Les bénéficiaires sont ensuite informés du montant de leur prime.": ["Recipients are then informed of their bonus amount.", "Apre sa, yo fè benefisyè yo konnen montan bonis yo."],
    "Le versement est effectué directement sur MonCash ou NatCash, selon les modalités du programme.": ["Payment is made directly via MonCash or NatCash, according to the program terms.", "Peman an fèt dirèkteman sou MonCash oswa NatCash, selon kondisyon pwogram nan."],
    "Votre réussite peut aussi faire avancer quelqu’un d’autre.": ["Your success can help someone else move forward too.", "Siksè ou ka fè yon lòt moun avanse tou."],
    "Chez ALO, nous voulons aller au-delà de la simple recherche d’emploi.": ["At ALO, we want to go beyond simply finding a job.", "Nan ALO, nou vle ale pi lwen pase jis chèche travay."],
    "Chaque embauche est une réussite. Chaque recommandation peut ouvrir une nouvelle porte.": ["Every hire is a success. Every referral can open a new door.", "Chak anbochaj se yon siksè. Chak rekòmandasyon ka louvri yon nouvo pòt."],
    "Trouvez votre prochaine opportunité. Partagez celles des autres. Et avançons ensemble.": ["Find your next opportunity. Share others'. And let's move forward together.", "Jwenn pwochen opòtinite w. Pataje sa lòt moun yo. Epi ann avanse ansanm."],
    "Programme en phase de test. Les primes peuvent atteindre 5 % du premier salaire mensuel pour le candidat recruté et 2 % pour la personne qui l’a recommandé. Elles sont soumises aux conditions d’admissibilité, de vérification, aux plafonds et aux modalités de versement qui seront définis avant le lancement officiel. L’obtention d’un emploi ne garantit pas automatiquement le versement d’une prime.": ["Pilot program. Bonuses can reach 5% of the first monthly salary for the hired candidate and 2% for the person who referred them. They are subject to eligibility, verification, caps and payment terms that will be set before the official launch. Getting a job does not automatically guarantee a bonus.", "Pwogram nan faz tès. Bonis yo ka rive 5 % nan premye salè mansyèl pou kandida yo anboche a ak 2 % pou moun ki te rekòmande l la. Yo depann de kondisyon kalifikasyon, verifikasyon, limit ak fason peman ki pral defini anvan lansman ofisyèl la. Jwenn yon travay pa garanti otomatikman ou pral resevwa yon bonis."],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Home page, new order: [English, Kreyòl]
(function () {
  const P = {
    "Trouvez des opportunités, postulez facilement et recevez une prime lorsque vous décrochez un emploi grâce à ALO.": ["Find opportunities, apply easily and earn a bonus when you land a job through ALO.", "Jwenn opòtinite, aplike fasil epi resevwa yon bonis lè w jwenn travay gras a ALO."],
    "Trouvez votre opportunité": ["Find your opportunity", "Jwenn opòtinite w"],
    "Explorez les offres d’emploi et découvrez les entreprises qui recrutent en Haïti.": ["Explore job offers and discover the companies hiring in Haiti.", "Gade djòb yo epi dekouvri antrepriz k ap anboche an Ayiti."],
    "Postulez en quelques clics": ["Apply in a few clicks", "Aplike nan kèk klik"],
    "Utilisez votre Profil ALO, importez votre CV ou remplissez simplement votre candidature.": ["Use your ALO Profile, import your CV or simply fill in your application.", "Itilize Pwofil ALO ou, enpòte CV ou oswa tou senpleman ranpli aplikasyon w."],
    "Décrochez un emploi et recevez une prime": ["Land a job and earn a bonus", "Jwenn yon travay epi resevwa yon bonis"],
    "Vous êtes recruté grâce à ALO ? Recevez jusqu’à 5 % de votre premier salaire mensuel grâce à notre programme Prime d’embauche.": ["Hired through ALO? Earn up to 5% of your first monthly salary through our Hiring Bonus program.", "Yo anboche w gras a ALO? Resevwa jiska 5 % nan premye salè mansyèl ou gras a pwogram Bonis anbochaj nou an."],
    "Explorer les offres d’emploi": ["Explore job offers", "Gade djòb yo"],
    "Prime soumise aux conditions d’admissibilité du programme.": ["Bonus subject to the program's eligibility conditions.", "Bonis la depann de kondisyon kalifikasyon pwogram nan."],
    "Votre parcours mérite plus qu’un simple CV.": ["Your career deserves more than a simple CV.", "Karyè ou merite plis pase yon senp CV."],
    "Avec Profil ALO, rassemblez vos expériences, vos compétences, vos certifications et vos réalisations dans un seul espace professionnel.": ["With the ALO Profile, bring your experience, skills, certifications and achievements together in one professional space.", "Avèk Pwofil ALO, mete eksperyans, konpetans, sètifikasyon ak reyalizasyon ou yo ansanm nan yon sèl espas pwofesyonèl."],
    "Mettez en valeur vos expériences, vos formations et vos réalisations.": ["Showcase your experience, education and achievements.", "Mete eksperyans, fòmasyon ak reyalizasyon ou yo an valè."],
    "Passez des évaluations et faites vérifier certaines de vos qualifications pour renforcer votre crédibilité auprès des recruteurs.": ["Take assessments and get some of your qualifications verified to build credibility with recruiters.", "Pase evalyasyon epi fè verifye kèk nan kalifikasyon ou pou rekritè yo fè w plis konfyans."],
    "Créez votre CV avec l’IA": ["Create your CV with AI", "Kreye CV ou ak IA"],
    "Transformez votre Profil ALO en un CV professionnel, personnalisé et adapté aux opportunités qui vous intéressent.": ["Turn your ALO Profile into a professional, personalized CV tailored to the opportunities you want.", "Fè Pwofil ALO ou tounen yon CV pwofesyonèl, pèsonalize e adapte ak opòtinite ki enterese w."],
    "Partagez votre talent": ["Share your talent", "Pataje talan ou"],
    "Créez des cartes professionnelles personnalisées à partager sur WhatsApp, Facebook, Instagram et LinkedIn.": ["Create personalized professional cards to share on WhatsApp, Facebook, Instagram and LinkedIn.", "Kreye kat pwofesyonèl pèsonalize pou pataje sou WhatsApp, Facebook, Instagram ak LinkedIn."],
    "Votre réseau peut aussi vous rapporter !": ["Your network can pay off too!", "Rezo w ka rapòte w tou!"],
    "Invitez vos amis à rejoindre ALO et recevez jusqu’à 2 % de leur premier salaire mensuel lorsqu’ils décrochent un emploi grâce à votre recommandation.": ["Invite your friends to join ALO and earn up to 2% of their first monthly salary when they land a job through your referral.", "Envite zanmi w vin sou ALO epi resevwa jiska 2 % nan premye salè mansyèl yo lè yo jwenn travay gras a rekòmandasyon w."],
    "Trouvez votre prochain emploi.": ["Find your next job.", "Jwenn pwochen travay ou."],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Home top section card stack: [English, Kreyòl]
(function () {
  const P = {
    "Candidature envoyée avec votre Profil ALO": ["Application sent with your ALO Profile", "Aplikasyon voye ak Pwofil ALO ou"],
    "CV, compétences et diplômes joints": ["CV, skills and degrees attached", "CV, konpetans ak diplòm yo ladan l"],
    "Félicitations, vous êtes embauchée !": ["Congratulations, you're hired!", "Konpliman, yo anboche w!"],
    "Prime d’embauche : jusqu’à 5 % du premier salaire": ["Hiring bonus: up to 5% of the first salary", "Bonis anbochaj: jiska 5 % nan premye salè a"],
    "Prime": ["Bonus", "Bonis"],
    "Menu": ["Menu", "Meni"], "Fermer": ["Close", "Fèmen"], "Aller au contenu": ["Skip to content", "Ale nan kontni an"],
    "Créez votre compte gratuit pour commencer votre Profil ALO.": ["Create your free account to start your ALO Profile.", "Kreye kont gratis ou pou w kòmanse Pwofil ALO ou."],
    "Assistant(e) comptable": ["Accounting assistant", "Asistan kontab"],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Home top section, revised: [English, Kreyòl]
(function () {
  const P = {
    "Offres d’emploi · Candidatures · Primes": ["Jobs · Applications · Bonuses", "Djòb · Aplikasyon · Bonis"],
    "Découvrez des offres d’emploi, postulez en quelques clics et recevez jusqu’à 5 % de votre premier salaire mensuel lorsque vous êtes recruté grâce à ALO.": ["Discover job offers, apply in a few clicks and earn up to 5% of your first monthly salary when you're hired through ALO.", "Dekouvri djòb, aplike nan kèk klik epi resevwa jiska 5 % nan premye salè mansyèl ou lè yo anboche w gras a ALO."],
    "Postulez facilement": ["Apply easily", "Aplike fasil"],
    "Décrochez un emploi": ["Land a job", "Jwenn yon travay"],
    "Félicitations, vous êtes embauché(e) !": ["Congratulations, you're hired!", "Konpliman, yo anboche w!"],
    "Jusqu’à 5 % de votre premier salaire mensuel": ["Up to 5% of your first monthly salary", "Jiska 5 % nan premye salè mansyèl ou"],
    "Avec la Prime d’embauche ALO": ["With the ALO Hiring Bonus", "Avèk Bonis anbochaj ALO"],
    "Suivez vos candidatures": ["Track your applications", "Swiv aplikasyon w yo"],
    "Retrouvez l’évolution de chaque candidature dans votre espace ALO.": ["Follow the progress of each application in your ALO space.", "Swiv kote chak aplikasyon ye nan espas ALO ou."],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Profil ALO home section, revised: [English, Kreyòl]
(function () {
  const P = {
    "Avec Profil ALO, valorisez vos expériences, vos compétences et vos réalisations dans un seul espace professionnel.": ["With the ALO Profile, showcase your experience, skills and achievements in one professional space.", "Avèk Pwofil ALO, mete eksperyans, konpetans ak reyalizasyon ou an valè nan yon sèl espas pwofesyonèl."],
    "Rassemblez vos expériences, formations, certifications et réalisations.": ["Bring together your experience, education, certifications and achievements.", "Mete eksperyans, fòmasyon, sètifikasyon ak reyalizasyon ou ansanm."],
    "Évaluez vos compétences et faites vérifier vos qualifications.": ["Assess your skills and get your qualifications verified.", "Evalye konpetans ou epi fè verifye kalifikasyon ou."],
    "Générez, personnalisez et adaptez votre CV aux offres d’emploi.": ["Generate, personalize and tailor your CV to job offers.", "Fè, pèsonalize epi adapte CV ou ak djòb yo."],
    "Créez des cartes professionnelles à partager sur vos réseaux.": ["Create professional cards to share on your networks.", "Kreye kat pwofesyonèl pou pataje sou rezo w yo."],
    "Postulez plus facilement": ["Apply more easily", "Aplike pi fasil"],
    "Utilisez votre Profil ALO pour postuler rapidement et suivre vos candidatures.": ["Use your ALO Profile to apply quickly and track your applications.", "Itilize Pwofil ALO ou pou aplike vit epi swiv aplikasyon w yo."],
    "Expérience": ["Experience", "Eksperyans"], "Réalisation": ["Achievement", "Reyalizasyon"],
    "Suivi comptable de 30 PME clientes": ["Bookkeeping for 30 small-business clients", "Swivi kontab pou 30 PME kliyan"],
    "Candidature envoyée": ["Application sent", "Aplikasyon voye"],
    "avec votre Profil ALO, en 1 minute": ["with your ALO Profile, in 1 minute", "ak Pwofil ALO ou, nan 1 minit"],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Prime d'embauche page, redesign: [English, Kreyòl]
(function () {
  const P = {
    "Prime d’embauche ALO": ["ALO Hiring Bonus", "Bonis anbochaj ALO"],
    "Une embauche.": ["One hire.", "Yon anbochaj."], "Plusieurs gagnants.": ["Several winners.", "Plizyè moun genyen."],
    "Chez ALO, nous croyons qu’une opportunité professionnelle peut profiter à plusieurs personnes.": ["At ALO, we believe one career opportunity can benefit several people.", "Nan ALO, nou kwè yon opòtinite pwofesyonèl ka benefisye plizyè moun."],
    "C’est pourquoi nous récompensons celles et ceux qui trouvent un emploi, mais aussi ceux qui les aident à y parvenir.": ["That's why we reward those who find a job, and also those who help them get there.", "Se poutèt sa nou rekonpanse moun ki jwenn travay, men tou moun ki ede yo rive la."],
    "Vous décrochez un emploi": ["You land a job", "Ou jwenn yon travay"], "Jusqu’à 5 %": ["Up to 5%", "Jiska 5 %"], "de votre premier salaire mensuel": ["of your first monthly salary", "nan premye salè mansyèl ou"],
    "Vous avez trouvé un emploi grâce à ALO ? Félicitations ! Vous pouvez recevoir une prime pour célébrer cette nouvelle étape de votre carrière.": ["Found a job through ALO? Congratulations! You can receive a bonus to celebrate this new step in your career.", "Ou jwenn travay gras a ALO? Konpliman! Ou ka resevwa yon bonis pou fete nouvo etap sa a nan karyè w."],
    "Découvrir les offres": ["Explore jobs", "Dekouvri djòb yo"],
    "Vous recommandez quelqu’un": ["You refer someone", "Ou rekòmande yon moun"], "Une prime pour vous aussi !": ["A bonus for you too!", "Yon bonis pou ou tou!"],
    "Quand votre recommandation aboutit à une embauche.": ["When your referral leads to a hire.", "Lè rekòmandasyon w lan fè yo anboche yon moun."],
    "Invitez vos amis, collègues ou connaissances à rejoindre ALO. Si l’un d’eux décroche un emploi grâce à la plateforme, vous pouvez également être récompensé.": ["Invite your friends, colleagues or acquaintances to join ALO. If one of them lands a job through the platform, you can be rewarded too.", "Envite zanmi, kòlèg oswa konesans ou vin sou ALO. Si youn nan yo jwenn travay gras a platfòm nan, ou ka resevwa rekonpans tou."],
    "Comment recevoir votre prime ?": ["How do you receive your bonus?", "Kijan pou w resevwa bonis ou?"],
    "Créez gratuitement votre Profil ALO.": ["Create your ALO Profile for free.", "Kreye Pwofil ALO ou gratis."],
    "Postulez ou partagez": ["Apply or share", "Aplike oswa pataje"],
    "Découvrez des offres d’emploi ou invitez vos contacts grâce à votre lien personnel.": ["Explore job offers or invite your contacts with your personal link.", "Dekouvri djòb oswa envite kontak ou yo ak lyen pèsonèl ou."],
    "Après validation de votre admissibilité, votre prime est versée sur MonCash ou NatCash.": ["Once your eligibility is confirmed, your bonus is paid via MonCash or NatCash.", "Apre yo valide kalifikasyon w, yo peye bonis ou sou MonCash oswa NatCash."],
    "Pourquoi ALO vous récompense ?": ["Why does ALO reward you?", "Poukisa ALO rekonpanse w?"],
    "Parce que nous pensons que la valeur d’un recrutement réussi doit être partagée.": ["Because we believe the value of a successful hire should be shared.", "Paske nou kwè valè yon bon anbochaj dwe pataje."],
    "Les entreprises investissent pour trouver les bons talents. ALO utilise une partie de ses revenus pour récompenser les personnes qui contribuent à ces recrutements.": ["Companies invest to find the right talent. ALO uses part of its revenue to reward the people who contribute to these hires.", "Antrepriz yo envesti pou jwenn bon talan. ALO itilize yon pati nan revni l pou rekonpanse moun ki kontribye nan anbochaj sa yo."],
    "Les entreprises": ["Companies", "Antrepriz yo"], "trouvent leurs talents.": ["find their talent.", "jwenn talan yo."],
    "Les candidats": ["Candidates", "Kandida yo"], "trouvent leur avenir.": ["find their future.", "jwenn avni yo."],
    "Ceux qui créent des connexions": ["Those who create connections", "Moun ki kreye koneksyon"], "sont récompensés.": ["are rewarded.", "resevwa rekonpans."],
    "Chaque opportunité peut en créer une autre.": ["Every opportunity can create another.", "Chak opòtinite ka kreye yon lòt."],
    "Partager ALO": ["Share ALO", "Pataje ALO"],
    "Programme en préparation. Les primes sont soumises aux conditions d’admissibilité, de vérification et aux plafonds applicables. Les montants et modalités définitifs seront communiqués avant le lancement.": ["Program in preparation. Bonuses are subject to eligibility, verification and applicable caps. Final amounts and terms will be announced before launch.", "Pwogram k ap prepare. Bonis yo depann de kondisyon kalifikasyon, verifikasyon ak limit ki aplike. N ap anonse montan ak kondisyon final yo anvan lansman an."],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Mon Profil ALO onboarding: [English, Kreyòl]
(function () {
  const P = {
    "Bienvenue sur ALO,": ["Welcome to ALO,", "Byenveni sou ALO,"],
    "Votre compte est créé. Maintenant, construisons votre profil professionnel.": ["Your account is created. Now, let's build your professional profile.", "Kont ou kreye. Kounye a, ann bati pwofil pwofesyonèl ou."],
    "Importez votre CV et laissez l’IA préparer votre profil automatiquement.": ["Import your CV and let AI prepare your profile automatically.", "Enpòte CV ou epi kite IA prepare pwofil ou otomatikman."],
    "Créer avec l’IA": ["Create with AI", "Kreye ak IA"],
    "Répondez à quelques questions pour construire votre profil avec notre assistant.": ["Answer a few questions to build your profile with our assistant.", "Reponn kèk kesyon pou bati pwofil ou ak asistan nou an."],
    "Commencer avec l’IA": ["Start with AI", "Kòmanse ak IA"],
    "Ajoutez vos expériences, formations et compétences à votre rythme.": ["Add your experience, education and skills at your own pace.", "Ajoute eksperyans, fòmasyon ak konpetans ou dousman, jan w vle."],
    "Commencer": ["Start", "Kòmanse"],
    "Utiliser mes informations LinkedIn": ["Use my LinkedIn information", "Itilize enfòmasyon LinkedIn mwen"],
    "Reprenez votre nom, votre photo et votre e-mail LinkedIn, puis complétez le reste.": ["Reuse your LinkedIn name, photo and email, then complete the rest.", "Repran non, foto ak imèl LinkedIn ou, epi ranpli rès la."],
    "Utiliser LinkedIn": ["Use LinkedIn", "Itilize LinkedIn"],
    "Passer cette étape": ["Skip this step", "Sote etap sa a"],
    "Vous pourrez compléter votre profil plus tard.": ["You can complete your profile later.", "W ap ka ranpli pwofil ou pita."],
    "Votre réponse…": ["Your answer…", "Repons ou…"],
    "Voir et modifier mon profil": ["View and edit my profile", "Gade epi modifye pwofil mwen"],
    "Photo LinkedIn": ["LinkedIn photo", "Foto LinkedIn"],
    "Vos compétences sont « déclarées ». Les évaluations et vérifications arrivent bientôt.": ["Your skills are \"self-reported\". Assessments and verification are coming soon.", "Konpetans ou yo « deklare ». Evalyasyon ak verifikasyon ap vini talè."],
    "Types de contrat": ["Contract types", "Tip kontra"], "Disponibilité": ["Availability", "Disponibilite"],
    "Je suis ouvert(e) à de nouvelles opportunités": ["I'm open to new opportunities", "Mwen ouvè pou nouvo opòtinite"],
    "Mon Profil ALO": ["My ALO Profile", "Pwofil ALO mwen"], "Profil complété à": ["Profile complete:", "Pwofil konplete a"],
    "Facultatif": ["Optional", "Opsyonèl"], "← Précédent": ["← Previous", "← Anvan"], "Passer": ["Skip", "Sote"],
    "Vérifier mon profil": ["Review my profile", "Verifye pwofil mwen"], "Suivant →": ["Next →", "Apre →"],
    "Votre Profil ALO est presque prêt !": ["Your ALO Profile is almost ready!", "Pwofil ALO ou prèske pare!"],
    "Informations personnelles": ["Personal information", "Enfòmasyon pèsonèl"],
    "Qui peut voir mon profil ?": ["Who can see my profile?", "Ki moun ki ka wè pwofil mwen?"],
    "Continuer plus tard": ["Continue later", "Kontinye pita"], "Publier mon Profil ALO": ["Publish my ALO Profile", "Pibliye Pwofil ALO mwen"],
    "Ajoutez au moins votre nom pour publier.": ["Add at least your name to publish.", "Ajoute omwen non w pou w pibliye."],
    "Votre Profil ALO est publié !": ["Your ALO Profile is published!", "Pwofil ALO ou pibliye!"],
    "Vous pouvez maintenant postuler plus vite et créer votre CV avec l’IA.": ["You can now apply faster and create your CV with AI.", "Kounye a ou ka aplike pi vit epi kreye CV ou ak IA."],
    "Vous pouvez remplir votre profil manuellement.": ["You can fill in your profile manually.", "Ou ka ranpli pwofil ou alamen."],
    "Préférences professionnelles": ["Career preferences", "Preferans pwofesyonèl"],
    "Formations et diplômes": ["Education and degrees", "Fòmasyon ak diplòm"],
    "Expériences professionnelles": ["Work experience", "Eksperyans travay"],
    "Enregistrement…": ["Saving…", "N ap anrejistre…"], "Enregistré sur cet appareil": ["Saved on this device", "Anrejistre sou aparèy sa a"], "Enregistré": ["Saved", "Anrejistre"],
    "Immédiate": ["Immediately", "Touswit"], "Dans 1 mois": ["In 1 month", "Nan 1 mwa"], "Dans 3 mois": ["In 3 months", "Nan 3 mwa"], "Pas pour le moment": ["Not right now", "Pa pou kounye a"],
    "Aucune certification pour l’instant.": ["No certifications yet.", "Poko gen sètifikasyon."], "Aucun projet pour l’instant.": ["No projects yet.", "Poko gen pwojè."],
    "Postes recherchés": ["Positions sought", "Pòs w ap chèche"], "Villes souhaitées": ["Preferred cities", "Vil ou ta renmen"], "Salaire souhaité (facultatif)": ["Expected salary (optional)", "Salè ou swete (opsyonèl)"],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Profile: switch methods, resume, import review: [English, Kreyòl]
(function () {
  const P = {
    "Continuer mon profil": ["Continue my profile", "Kontinye pwofil mwen"],
    "Votre progression est enregistrée. Reprenez où vous en étiez ou ajoutez des informations avec une autre méthode.": ["Your progress is saved. Pick up where you left off or add information with another method.", "Pwogrè w anrejistre. Kontinye kote w te rive a oswa ajoute enfòmasyon ak yon lòt metòd."],
    "ou choisissez une autre méthode :": ["or choose another method:", "oswa chwazi yon lòt metòd:"],
    "Enregistrer et continuer plus tard": ["Save and continue later", "Anrejistre epi kontinye pita"],
    "← Changer de méthode": ["← Change method", "← Chanje metòd"],
    "Vérifiez les informations extraites de votre CV": ["Review the information extracted from your CV", "Verifye enfòmasyon ki soti nan CV ou"],
    "Rien n’est ajouté ni remplacé sans votre accord. Choisissez ce que vous gardez.": ["Nothing is added or replaced without your approval. Choose what to keep.", "Anyen p ap ajoute ni ranplase san w pa dakò. Chwazi sa w kenbe."],
    "Votre profil contient déjà toutes les informations de ce CV.": ["Your profile already contains all the information from this CV.", "Pwofil ou gen tout enfòmasyon CV sa a deja."],
    "Garder l’actuel": ["Keep current", "Kenbe sa ki la a"], "Remplacer par": ["Replace with", "Ranplase ak"],
    "Déjà dans votre profil": ["Already in your profile", "Deja nan pwofil ou"], "Ajouter à mon profil": ["Add to my profile", "Ajoute nan pwofil mwen"],
    "Je reprends avec votre profil actuel. Que souhaitez-vous ajouter ou améliorer ?": ["Picking up with your current profile. What would you like to add or improve?", "M ap kontinye ak pwofil ou genyen kounye a. Kisa w ta renmen ajoute oswa amelyore?"],
    "Informations LinkedIn ajoutées à votre profil (nom, e-mail, photo). Les informations déjà présentes n’ont pas été modifiées.": ["LinkedIn information added to your profile (name, email, photo). Existing information was not changed.", "Enfòmasyon LinkedIn ajoute nan pwofil ou (non, imèl, foto). Enfòmasyon ki te la deja pa chanje."],
    "Vos informations LinkedIn sont déjà dans votre profil.": ["Your LinkedIn information is already in your profile.", "Enfòmasyon LinkedIn ou deja nan pwofil ou."],
    "Les informations choisies ont été ajoutées à votre profil.": ["The selected information has been added to your profile.", "Enfòmasyon ou chwazi yo ajoute nan pwofil ou."],
    "Votre profil est en cours. Reprenez où vous en étiez.": ["Your profile is in progress. Pick up where you left off.", "Pwofil ou ap fèt. Kontinye kote w te rive a."],
  };
  for (const [fr, [en, kr]] of Object.entries(P)) { EN[fr] = en; KR[fr] = kr; }
})();

// Dashboard after profile creation + Prime d'embauche section
(() => { const T = {
  "Votre Profil ALO a été créé avec succès !": ["Your ALO Profile was created successfully!", "Pwofil ALO ou kreye avèk siksè !"],
  "Redirection vers votre espace ALO…": ["Taking you to your ALO space…", "N ap mennen ou nan espas ALO ou…"],
  "Voir mon profil": ["View my profile", "Wè pwofil mwen"],
  "Modifier mon profil": ["Edit my profile", "Modifye pwofil mwen"],
  "Continuer mon profil": ["Continue my profile", "Kontinye pwofil mwen"],
  "Profil complété à": ["Profile completed:", "Pwofil ranpli a"],
  "Votre profil n’est pas encore créé. Il n’est pas obligatoire pour postuler.": ["Your profile isn't created yet. You don't need it to apply.", "Pwofil ou poko kreye. Ou pa bezwen li pou aplike."],
  "Visibilité": ["Visibility", "Vizibilite"],
  "Ouvert(e) aux opportunités": ["Open to opportunities", "Ouvè pou opòtinite"],
  "Déclarée": ["Self-reported", "Deklare"],
  "Recommandations réussies": ["Successful referrals", "Rekòmandasyon ki reyisi"],
  "inscription(s) grâce à vos invitations": ["sign-up(s) from your invitations", "enskripsyon gras ak envitasyon ou yo"],
  "Primes en attente": ["Pending bonuses", "Prim k ap tann"],
  "Primes confirmées": ["Confirmed bonuses", "Prim ki konfime"],
  "Total des primes reçues": ["Total bonuses received", "Total prim ou resevwa"],
  "Une prime n’est confirmée qu’après vérification de l’embauche et de l’admissibilité.": ["A bonus is confirmed only after the hire and eligibility are verified.", "Yon prim konfime sèlman apre nou verifye anbochaj la ak kalifikasyon an."],
  "Inviter un ami": ["Invite a friend", "Envite yon zanmi"],
  "Mes candidatures": ["My applications", "Aplikasyon mwen yo"],
  "Brouillons en cours": ["Drafts in progress", "Bouyon k ap fèt"],
  "Mes CV": ["My CVs", "CV mwen yo"],
  "Aucun CV enregistré pour l’instant.": ["No saved CV yet.", "Pa gen CV ki anrejistre pou kounye a."],
  "Offres enregistrées": ["Saved jobs", "Djòb ki anrejistre"],
  "Aucune offre enregistrée pour le moment.": ["No saved jobs yet.", "Pa gen djòb ki anrejistre pou kounye a."],
  "Explorer les offres d’emploi": ["Explore job offers", "Gade djòb yo"],
  "Aucune candidature pour l’instant.": ["No applications yet.", "Pa gen aplikasyon pou kounye a."],
  "Découvrir les offres": ["Browse jobs", "Dekouvri djòb yo"],
  "Envoyée le": ["Sent on", "Voye le"],
  "Modifié le": ["Updated on", "Modifye le"],
  "Reprendre": ["Resume", "Reprann"],
  "Ouvrir": ["Open", "Louvri"],
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Personalization, job posting, hire declarations (update 6)
(() => { const T = {
"ALO contacte votre employeur pour confirmer l’embauche et le salaire.": [
"ALO contacts your employer to confirm the hire and the salary.",
"ALO kontakte patwon ou pou konfime anbochaj la ak salè a."
],
"ALO ne vend ni ne partage jamais vos coordonnées. Vous pouvez retirer votre accord à tout moment.": [
"ALO never sells or shares your contact details. You can withdraw your consent at any time.",
"ALO pa janm vann ni pataje kowòdone ou. Ou ka retire dakò ou nenpòt ki lè."
],
"Acceptées": [
"Accepted",
"Aksepte"
],
"Administration": [
"Administration",
"Administrasyon"
],
"Approuvée": [
"Approved",
"Apwouve"
],
"Approuvées": [
"Approved",
"Apwouve"
],
"Après votre premier salaire, ajoutez une fiche de paie ou une preuve de paiement.": [
"After your first salary, add a payslip or proof of payment.",
"Apre premye salè ou, ajoute yon fich pèman oswa yon prèv peman."
],
"Autre": [
"Other",
"Lòt"
],
"Autre (poste trouvé sur ALO)": [
"Other (job found on ALO)",
"Lòt (djòb ou jwenn sou ALO)"
],
"Basé uniquement sur les offres publiées sur ALO, pas sur l’ensemble du marché.": [
"Based only on jobs posted on ALO, not on the whole market.",
"Baze sèlman sou djòb ki pibliye sou ALO, pa sou tout mache a."
],
"Cadre supérieur(e) / dirigeant(e)": [
"Senior professional / executive",
"Kad siperyè / dirijan"
],
"Candidats avec un Profil ALO détaillé": [
"Candidates with a detailed ALO Profile",
"Kandida ki gen yon Pwofil ALO detaye"
],
"Candidature concernée": [
"Related application",
"Aplikasyon an"
],
"Certifications professionnelles": [
"Professional certifications",
"Sètifikasyon pwofesyonèl"
],
"Cette fonction sera bientôt disponible.": [
"This feature will be available soon.",
"Fonksyon sa a ap disponib byento."
],
"Commerce et vente": [
"Retail and sales",
"Komès ak lavant"
],
"Compétences demandées": [
"Required skills",
"Konpetans yo mande"
],
"Compétences demandées (une par ligne)": [
"Required skills (one per line)",
"Konpetans yo mande (youn pa liy)"
],
"Connectez-vous pour déclarer votre embauche.": [
"Sign in to declare your hire.",
"Konekte pou deklare anbochaj ou."
],
"Connectez-vous pour personnaliser vos recommandations.": [
"Sign in to personalize your recommendations.",
"Konekte pou pèsonalize rekòmandasyon ou yo."
],
"Consultance": [
"Consulting",
"Konsiltasyon"
],
"Contestée": [
"Disputed",
"Konteste"
],
"Contrat ou lettre d’offre (facultatif maintenant)": [
"Contract or offer letter (optional for now)",
"Kontra oswa lèt òf (pa obligatwa kounye a)"
],
"Contrat ou lettre d’offre": [
"Contract or offer letter",
"Kontra oswa lèt òf"
],
"Date de début": [
"Start date",
"Dat ou kòmanse"
],
"Date limite": [
"Deadline",
"Dat limit"
],
"Date limite de candidature (facultatif)": [
"Application deadline (optional)",
"Dat limit pou aplike (pa obligatwa)"
],
"Devise": [
"Currency",
"Lajan"
],
"Domaine professionnel": [
"Professional field",
"Domèn pwofesyonèl"
],
"Début de carrière": [
"Early-career professional",
"Kòmansman karyè"
],
"Déclarer mon embauche": [
"Declare my hire",
"Deklare anbochaj mwen"
],
"Déclarez votre embauche pour demander votre Prime d’embauche ALO. La prime est versée après vérification de votre premier salaire.": [
"Declare your hire to request your ALO Hiring Bonus. The bonus is paid after your first salary is verified.",
"Deklare anbochaj ou pou mande Prim anbochaj ALO ou. Nou peye prim nan apre nou verifye premye salè ou."
],
"Département": [
"Department",
"Depatman"
],
"Départements": [
"Departments",
"Depatman yo"
],
"Développement international": [
"International development",
"Devlopman entènasyonal"
],
"Emploi à temps partiel": [
"Part-time employment",
"Travay tan pasyèl"
],
"Emploi à temps plein": [
"Full-time employment",
"Travay tan plen"
],
"En attente": [
"Pending",
"Ap tann"
],
"En reconversion": [
"Career transition",
"Ap chanje karyè"
],
"En vérification": [
"Under review",
"Ap verifye"
],
"Encore quelques questions pour personnaliser votre expérience…": [
"A few more questions to personalize your experience…",
"Kèk lòt kesyon pou pèsonalize eksperyans ou…"
],
"Enregistrer et revenir à mon espace": [
"Save and return to my space",
"Anrejistre epi retounen nan espas mwen"
],
"Entrepreneuriat": [
"Entrepreneurship",
"Antreprenarya"
],
"Ex. comptable, chef de projet": [
"E.g. accountant, project manager",
"Egz. kontab, chèf pwojè"
],
"Ex. devenir responsable financier d’ici trois ans": [
"E.g. become a finance manager within three years",
"Egz. vin responsab finans nan twa lane"
],
"Fichier trop volumineux (10 Mo maximum).": [
"File too large (10 MB maximum).",
"Fichye a twò gwo (10 Mo maksimòm)."
],
"Frais de publication, sans frais supplémentaires en cas d’embauche. L’équipe ALO vous contacte pour le paiement avant la mise en ligne.": [
"Posting fee, with no extra fee when you hire. The ALO team contacts you for payment before the offer goes live.",
"Frè piblikasyon, san lòt frè si w anboche. Ekip ALO a ap kontakte w pou peman an anvan òf la parèt."
],
"Freelance ou contrat": [
"Freelance or contract work",
"Freelance oswa kontra"
],
"Félicitations ! Vous avez décroché un emploi.": [
"Congratulations! You landed a job.",
"Felisitasyon! Ou jwenn yon travay."
],
"Grande entreprise": [
"Large company",
"Gwo antrepriz"
],
"Hybride": [
"Hybrid",
"Ibrid"
],
"Hôtellerie et tourisme": [
"Hospitality and tourism",
"Otelri ak touris"
],
"Indiquez le poste et l’entreprise.": [
"Enter the job title and the company.",
"Endike pòs la ak antrepriz la."
],
"Indiquez vos intérêts pour recevoir des recommandations adaptées.": [
"Tell us your interests to get tailored recommendations.",
"Endike enterè ou pou resevwa rekòmandasyon ki fèt pou ou."
],
"Informations requises": [
"Information required",
"Enfòmasyon obligatwa"
],
"Ingénierie": [
"Engineering",
"Jeni"
],
"Invitations ciblées": [
"Targeted invitations",
"Envitasyon ki sible"
],
"Invitez vos amis à rejoindre ALO et recevez une prime lorsqu’ils décrochent un emploi grâce à votre recommandation.": [
"Invite your friends to join ALO and earn a bonus when they land a job through your referral.",
"Envite zanmi w vin sou ALO epi resevwa yon prim lè yo jwenn travay gras a rekòmandasyon w."
],
"Jamais publié sans votre accord. Sert uniquement au calcul des primes d’embauche et à des statistiques anonymes sur l’emploi.": [
"Never published without your consent. Used only to calculate hiring bonuses and for anonymous employment statistics.",
"Nou pa janm pibliye l san dakò ou. Li sèvi sèlman pou kalkile prim anbochaj ak pou estatistik anonim sou travay."
],
"Je certifie que ces informations sont exactes. Une fausse déclaration entraîne le refus de la prime.": [
"I certify that this information is accurate. A false declaration means the bonus will be refused.",
"Mwen sètifye enfòmasyon sa yo egzak. Yon fo deklarasyon ap fè yo refize prim nan."
],
"Jeune diplômé(e)": [
"Recent graduate",
"Fèk gradye"
],
"J’accepte de recevoir, par ALO, des invitations d’organisations (formations, programmes, événements) qui correspondent à mes intérêts.": [
"I agree to receive, through ALO, invitations from organizations (training, programs, events) that match my interests.",
"Mwen dakò resevwa, pa mwayen ALO, envitasyon òganizasyon (fòmasyon, pwogram, evènman) ki koresponn ak enterè mwen."
],
"J’ai été embauché(e)": [
"I got hired",
"Yo anboche m"
],
"Le montant de la prime sera calculé lors de la vérification.": [
"The bonus amount will be calculated during verification.",
"N ap kalkile montan prim nan pandan verifikasyon an."
],
"Ma prime d’embauche": [
"My hiring bonus",
"Prim anbochaj mwen"
],
"Maximum par mois": [
"Maximum per month",
"Maksimòm pa mwa"
],
"Mes déclarations": [
"My declarations",
"Deklarasyon mwen yo"
],
"Mes primes d’embauche": [
"My hiring bonuses",
"Prim anbochaj mwen yo"
],
"Mes préférences": [
"My preferences",
"Preferans mwen yo"
],
"Mes recommandations": [
"My referrals",
"Rekòmandasyon mwen yo"
],
"Message de l’équipe ALO": [
"Message from the ALO team",
"Mesaj ekip ALO a"
],
"Minimum par mois": [
"Minimum per month",
"Minimòm pa mwa"
],
"Mode de travail": [
"Work arrangement",
"Fason travay"
],
"Mode de versement": [
"Payout method",
"Fason peman"
],
"Modifier mes préférences": [
"Edit my preferences",
"Modifye preferans mwen yo"
],
"Mon lien de recommandation": [
"My referral link",
"Lyen rekòmandasyon mwen"
],
"Niveau d’expérience": [
"Experience level",
"Nivo eksperyans"
],
"Nombre de postes à pourvoir": [
"Number of open positions",
"Kantite pòs ki disponib"
],
"Nous comparons les informations et les documents avant d’approuver la prime.": [
"We compare the information and documents before approving the bonus.",
"Nou konpare enfòmasyon yo ak dokiman yo anvan nou apwouve prim nan."
],
"Numéro de téléphone du compte": [
"Account phone number",
"Nimewo telefòn kont lan"
],
"Opérations et logistique": [
"Operations and logistics",
"Operasyon ak lojistik"
],
"Partout en Haïti": [
"Anywhere in Haiti",
"Nenpòt kote ann Ayiti"
],
"Pas encore d’offre très proche de vos préférences. Consultez « À découvrir » ou toutes les offres.": [
"No job closely matches your preferences yet. Check \"To discover\" or all jobs.",
"Poko gen djòb ki byen koresponn ak preferans ou. Gade « Pou dekouvri » oswa tout djòb yo."
],
"Passer le questionnaire": [
"Skip the questionnaire",
"Sote kesyonè a"
],
"Personnalisons votre expérience ALO.": [
"Let's personalize your ALO experience.",
"Ann pèsonalize eksperyans ALO ou."
],
"Personnes inscrites grâce à vous": [
"People who joined through you",
"Moun ki enskri gras a ou"
],
"Pour vous": [
"For you",
"Pou ou"
],
"Prime estimée": [
"Estimated bonus",
"Prim estime"
],
"Prime estimée, sous réserve de vérification et des plafonds du programme.": [
"Estimated bonus, subject to verification and the program's limits.",
"Prim estime, depann de verifikasyon ak limit pwogram nan."
],
"Professionnel(le) expérimenté(e)": [
"Experienced professional",
"Pwofesyonèl ki gen eksperyans"
],
"Précédent": [
"Back",
"Retounen"
],
"Quelques questions pour vous proposer des opportunités qui correspondent à votre parcours et à vos ambitions.": [
"A few questions so we can suggest opportunities that match your background and ambitions.",
"Kèk kesyon pou nou ka pwopoze w opòtinite ki koresponn ak pakou w ak anbisyon w."
],
"Question": [
"Question",
"Kesyon"
],
"Recommandé pour vous :": [
"Recommended for you:",
"Rekòmande pou ou:"
],
"Refusées": [
"Declined",
"Refize"
],
"Rejetée": [
"Rejected",
"Rejte"
],
"Rien de nouveau pour l’instant.": [
"Nothing new for now.",
"Anyen nouvo pou kounye a."
],
"Récapitulatif avant publication": [
"Summary before posting",
"Rezime anvan piblikasyon"
],
"Récompenses approuvées": [
"Approved rewards",
"Rekonpans ki apwouve"
],
"Récompenses en attente": [
"Pending rewards",
"Rekonpans k ap tann"
],
"Récompenses versées": [
"Rewards paid",
"Rekonpans ki peye"
],
"Répondre (2 minutes)": [
"Answer (2 minutes)",
"Reponn (2 minit)"
],
"Salaire mensuel convenu": [
"Agreed monthly salary",
"Salè mansyèl nou dakò a"
],
"Salaire mensuel souhaité en HTG (facultatif)": [
"Desired monthly salary in HTG (optional)",
"Salè mansyèl ou swete an HTG (pa obligatwa)"
],
"Salaire prévu (confidentiel)": [
"Planned salary (confidential)",
"Salè ki prevwa (konfidansyèl)"
],
"Salaires annoncés dans vos domaines": [
"Advertised salaries in your fields",
"Salè yo anonse nan domèn ou yo"
],
"Suivant": [
"Next",
"Swivan"
],
"Sur": [
"On",
"Sou"
],
"Sur site": [
"On site",
"Sou plas"
],
"Terminer": [
"Finish",
"Fini"
],
"Type d’entreprise": [
"Company type",
"Kalite antrepriz"
],
"Télétravail": [
"Remote",
"Travay a distans"
],
"Un autre domaine à explorer :": [
"Another field to explore:",
"Yon lòt domèn pou eksplore:"
],
"Une récompense n’est approuvée qu’après vérification de l’embauche et de l’admissibilité. Le salaire de la personne recommandée n’est jamais affiché.": [
"A reward is approved only after the hire and eligibility are verified. The referred person's salary is never shown.",
"Nou apwouve yon rekonpans sèlman apre nou verifye anbochaj la ak kalifikasyon an. Nou pa janm montre salè moun ou rekòmande a."
],
"Versée": [
"Paid",
"Peye"
],
"Versées": [
"Paid",
"Peye"
],
"Villes ou communes (facultatif)": [
"Cities or communes (optional)",
"Vil oswa komin (pa obligatwa)"
],
"Voir toutes les offres": [
"See all jobs",
"Wè tout djòb yo"
],
"Vos intérêts et objectifs servent à personnaliser vos recommandations. Toutes les offres restent accessibles.": [
"Your interests and goals are used to personalize your recommendations. All jobs remain available.",
"Enterè ak objektif ou sèvi pou pèsonalize rekòmandasyon ou yo. Tout djòb yo rete disponib."
],
"Vos objectifs de carrière": [
"Your career goals",
"Objektif karyè ou"
],
"Votre prime ALO est en attente de vérification.": [
"Your ALO bonus is awaiting verification.",
"Prim ALO ou ap tann verifikasyon."
],
"Votre salaire reste confidentiel : seule l’équipe de vérification ALO y a accès. Il n’est jamais montré à la personne qui vous a recommandé(e).": [
"Your salary stays confidential: only the ALO verification team can see it. It is never shown to the person who referred you.",
"Salè ou rete konfidansyèl: se sèlman ekip verifikasyon ALO a ki ka wè l. Nou pa janm montre l moun ki te rekòmande w la."
],
"Votre évolution": [
"Your growth",
"Evolisyon ou"
],
"Vous avez déjà déclaré cette embauche.": [
"You have already declared this hire.",
"Ou deja deklare anbochaj sa a."
],
"Vous avez été embauché(e) grâce à ALO ? Déclarez votre embauche pour demander votre prime.": [
"Hired through ALO? Declare your hire to request your bonus.",
"Yo anboche w gras a ALO? Deklare anbochaj ou pou mande prim ou."
],
"Vous pourrez modifier vos préférences à tout moment.": [
"You can change your preferences at any time.",
"W ap ka modifye preferans ou nenpòt ki lè."
],
"correspond au poste que vous recherchez": [
"matches the job you are looking for",
"koresponn ak pòs w ap chèche a"
],
"correspond à vos compétences en": [
"matches your skills in",
"koresponn ak konpetans ou nan"
],
"correspond à votre intérêt pour": [
"matches your interest in",
"koresponn ak enterè ou pou"
],
"embauches vérifiées": [
"verified hires",
"anbochaj ki verifye"
],
"et": [
"and",
"ak"
],
"jusqu’à": [
"up to",
"jiska"
],
"poste": [
"position",
"pòs"
],
"postes": [
"positions",
"pòs"
],
"postes à pourvoir": [
"open positions",
"pòs ki disponib"
],
"pour le premier poste": [
"for the first position",
"pou premye pòs la"
],
"sous réserve de vérification": [
"subject to verification",
"depann de verifikasyon"
],
"À découvrir": [
"To discover",
"Pou dekouvri"
],
"Économie": [
"Savings",
"Ekonomi"
],
"Étudiant(e)": [
"Student",
"Etidyan"
],
"Évolution de carrière": [
"Career advancement",
"Avansman nan karyè"
],
"à votre préférence pour": [
"your preference for",
"preferans ou pou"
],
"Stages et premiers emplois": [
"Internships and first jobs",
"Estaj ak premye travay"
],
"Les offres ouvertes aux débutants.": [
"Jobs open to beginners.",
"Djòb ki ouvè pou debitan."
],
"À partir de votre Profil ALO, sans rien inventer.": [
"From your ALO Profile, without inventing anything.",
"Apati Pwofil ALO ou, san envante anyen."
],
"Adapter mon CV à une offre": [
"Tailor my CV to a job",
"Adapte CV mwen pou yon djòb"
],
"Mettez en avant ce qui compte pour le poste visé.": [
"Highlight what matters for the target job.",
"Mete aksan sou sa ki konte pou pòs ou vize a."
],
"Postes de direction": [
"Leadership positions",
"Pòs direksyon"
],
"Offres pour profils expérimentés.": [
"Jobs for experienced profiles.",
"Djòb pou pwofil ki gen eksperyans."
],
"Exploration confidentielle": [
"Confidential exploration",
"Eksplorasyon konfidansyèl"
],
"Réglez la visibilité de votre profil sur Privé ou Recruteurs.": [
"Set your profile visibility to Private or Recruiters.",
"Mete vizibilite pwofil ou sou Prive oswa Rekritè."
],
"Formations": [
"Training",
"Fòmasyon"
],
"Programmes pour bien démarrer votre carrière.": [
"Programs to start your career well.",
"Pwogram pou byen kòmanse karyè ou."
],
"Faites reconnaître vos compétences.": [
"Get your skills recognized.",
"Fè yo rekonèt konpetans ou."
],
"Missions de consultance": [
"Consulting assignments",
"Misyon konsiltasyon"
],
"Conseils de carrière": [
"Career guidance",
"Konsèy karyè"
],
"Missions courtes pour experts.": [
"Short assignments for experts.",
"Misyon kout pou ekspè."
],
"Des repères pour la prochaine étape.": [
"Guidance for your next step.",
"Repè pou pwochen etap la."
],
"Où en êtes-vous dans votre carrière ?": [
"Where are you in your career?",
"Ki kote ou ye nan karyè ou?"
],
"Quels domaines professionnels vous intéressent ?": [
"Which professional fields interest you?",
"Ki domèn pwofesyonèl ki enterese w?"
],
"Plusieurs choix possibles.": [
"You can choose several.",
"Ou ka chwazi plizyè."
],
"Quelles opportunités recherchez-vous ?": [
"What opportunities are you looking for?",
"Ki opòtinite w ap chèche?"
],
"Où souhaitez-vous travailler ?": [
"Where would you like to work?",
"Ki kote ou ta renmen travay?"
],
"Quelles sont vos attentes professionnelles ?": [
"What are your career expectations?",
"Ki atant pwofesyonèl ou?"
],
"Tout est facultatif.": [
"Everything is optional.",
"Anyen pa obligatwa."
],
"Étape de carrière": [
"Career stage",
"Etap karyè"
],
"Domaines": [
"Fields",
"Domèn"
],
"Opportunités": [
"Opportunities",
"Opòtinite"
],
"Lieux": [
"Locations",
"Kote"
],
"Embauche déclarée": [
"Hire declared",
"Anbochaj deklare"
],
"Confirmation de l’employeur": [
"Employer confirmation",
"Konfimasyon patwon an"
],
"Premier salaire reçu": [
"First salary received",
"Premye salè resevwa"
],
"Vérification ALO": [
"ALO verification",
"Verifikasyon ALO"
],
"Prime versée": [
"Bonus paid",
"Prim peye"
],
"Ajouter mon contrat": [
"Add my contract",
"Ajoute kontra mwen"
],
"Ajouter ma fiche de paie": [
"Add my payslip",
"Ajoute fich pèman mwen"
],
"Grandes entreprises": [
"Large companies",
"Gwo antrepriz"
]
};
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Employer dashboard (update 7)
(() => { const T = {
"Ajouter des postes": [
"Add positions",
"Ajoute pòs"
],
"Candidatures reçues": [
"Applications received",
"Aplikasyon resevwa"
],
"Confidentiel : sert uniquement à vérifier la Prime d’embauche du candidat. Jamais publié, jamais montré à d’autres personnes.": [
"Confidential: used only to verify the candidate's Hiring Bonus. Never published, never shown to anyone else.",
"Konfidansyèl: li sèvi sèlman pou verifye Prim anbochaj kandida a. Nou pa janm pibliye l, nou pa janm montre l lòt moun."
],
"Confirmer la demande": [
"Confirm the request",
"Konfime demann nan"
],
"Confirmer l’embauche": [
"Confirm the hire",
"Konfime anbochaj la"
],
"Connectez-vous pour accéder à votre espace employeur.": [
"Sign in to access your employer space.",
"Konekte pou antre nan espas anplwayè ou."
],
"Connectez-vous pour publier vos offres et suivre vos candidatures.": [
"Sign in to post your jobs and follow your applications.",
"Konekte pou pibliye djòb ou yo epi swiv aplikasyon yo."
],
"Connectez-vous pour publier votre offre et suivre vos candidatures.": [
"Sign in to post your job and follow your applications.",
"Konekte pou pibliye djòb ou epi swiv aplikasyon yo."
],
"Créer mon espace employeur": [
"Create my employer space",
"Kreye espas anplwayè mwen"
],
"Créez votre espace employeur": [
"Create your employer space",
"Kreye espas anplwayè ou"
],
"Demande envoyée": [
"Request sent",
"Demann voye"
],
"Document indisponible.": [
"Document unavailable.",
"Dokiman an pa disponib."
],
"Documents": [
"Documents",
"Dokiman"
],
"Embauche confirmée": [
"Hire confirmed",
"Anbochaj konfime"
],
"Embauche confirmée. Merci ! Le candidat pourra demander sa Prime d’embauche ALO.": [
"Hire confirmed. Thank you! The candidate can now request their ALO Hiring Bonus.",
"Anbochaj konfime. Mèsi! Kandida a ka mande Prim anbochaj ALO li."
],
"Embauches confirmées": [
"Confirmed hires",
"Anbochaj konfime"
],
"En ligne": [
"Live",
"An liy"
],
"En vérification": [
"Under review",
"Ap verifye"
],
"Espace employeur": [
"Employer space",
"Espas anplwayè"
],
"Exemple : aucun fichier réel.": [
"Sample: no real file.",
"Egzanp: pa gen vrè fichye."
],
"Expirée": [
"Expired",
"Ekspire"
],
"Fermer cette offre ? Elle ne sera plus visible et n’acceptera plus de candidatures.": [
"Close this job? It will no longer be visible or accept applications.",
"Fèmen djòb sa a? Li p ap parèt ankò e li p ap aksepte aplikasyon ankò."
],
"Fermer l’offre": [
"Close the job",
"Fèmen djòb la"
],
"Fermée": [
"Closed",
"Fèmen"
],
"Frais supplémentaires": [
"Additional fee",
"Frè anplis"
],
"Informations de l’entreprise": [
"Company information",
"Enfòmasyon sou antrepriz la"
],
"Je confirme avoir embauché cette personne à ces conditions.": [
"I confirm I hired this person on these terms.",
"Mwen konfime mwen anboche moun sa a nan kondisyon sa yo."
],
"Les postes sont ajoutés à l’offre après paiement. Le montant final est confirmé par l’équipe ALO.": [
"Positions are added to the job after payment. The final amount is confirmed by the ALO team.",
"N ap ajoute pòs yo nan djòb la apre peman. Ekip ALO a konfime montan final la."
],
"L’équipe ALO vous contacte pour le paiement.": [
"The ALO team will contact you for payment.",
"Ekip ALO a ap kontakte w pou peman an."
],
"Mes offres": [
"My jobs",
"Djòb mwen yo"
],
"Message": [
"Message",
"Mesaj"
],
"Modifier les informations": [
"Edit information",
"Modifye enfòmasyon yo"
],
"Montant": [
"Amount",
"Montan"
],
"Nom de l’entreprise": [
"Company name",
"Non antrepriz la"
],
"Offres en ligne": [
"Live jobs",
"Djòb an liy"
],
"Paiement en attente": [
"Payment pending",
"Peman ap tann"
],
"Payée": [
"Paid",
"Peye"
],
"Personne à contacter": [
"Contact person",
"Moun pou kontakte"
],
"Postes supplémentaires": [
"Additional positions",
"Pòs anplis"
],
"Postes à pourvoir": [
"Open positions",
"Pòs ki disponib"
],
"Publiez vos offres, suivez les candidatures et confirmez vos embauches au même endroit.": [
"Post your jobs, follow applications and confirm your hires in one place.",
"Pibliye djòb ou yo, swiv aplikasyon yo epi konfime anbochaj ou yo nan menm kote a."
],
"Publiée le": [
"Posted on",
"Pibliye le"
],
"Reçue le": [
"Received on",
"Resevwa le"
],
"Réponses à vos questions": [
"Answers to your questions",
"Repons pou kesyon ou yo"
],
"Statut": [
"Status",
"Estati"
],
"Suivre mon offre dans l’espace employeur": [
"Follow my job in the employer space",
"Swiv djòb mwen nan espas anplwayè a"
],
"Tous les postes de cette offre sont pourvus. Ajoutez un poste pour confirmer une autre embauche.": [
"All positions for this job are filled. Add a position to confirm another hire.",
"Tout pòs djòb sa a ranpli. Ajoute yon pòs pou konfime yon lòt anbochaj."
],
"Toutes": [
"All",
"Tout"
],
"Un compte employeur gratuit est nécessaire pour publier, suivre vos candidatures et confirmer vos embauches.": [
"A free employer account is needed to post, follow your applications and confirm your hires.",
"Ou bezwen yon kont anplwayè gratis pou pibliye, swiv aplikasyon yo epi konfime anbochaj ou yo."
],
"Voir les candidatures": [
"View applications",
"Wè aplikasyon yo"
],
"Vous n’avez pas encore publié d’offre.": [
"You haven't posted a job yet.",
"Ou poko pibliye okenn djòb."
],
"candidatures": [
"applications",
"aplikasyon"
],
"en attente de paiement": [
"awaiting payment",
"ap tann peman"
],
"expire le": [
"expires on",
"ekspire le"
],
"nouvelles": [
"new",
"nouvo"
],
"postes pourvus": [
"positions filled",
"pòs ranpli"
],
"à consulter": [
"to review",
"pou gade"
]
};
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Employer types and organization size (update 8)
(() => { const T = {
"Organisations internationales": [
"International organizations",
"Òganizasyon entènasyonal"
],
"Organisation internationale": [
"International organization",
"Òganizasyon entènasyonal"
],
"Type d’employeur": [
"Employer type",
"Kalite anplwayè"
],
"Taille de l’organisation": [
"Organization size",
"Gwosè òganizasyon an"
],
"Nombre d’employés": [
"Number of employees",
"Kantite anplwaye"
],
"1 à 9 employés": [
"1 to 9 employees",
"1 a 9 anplwaye"
],
"10 à 49 employés": [
"10 to 49 employees",
"10 a 49 anplwaye"
],
"50 à 249 employés": [
"50 to 249 employees",
"50 a 249 anplwaye"
],
"250 à 999 employés": [
"250 to 999 employees",
"250 a 999 anplwaye"
],
"1 000 employés ou plus": [
"1,000 employees or more",
"1 000 anplwaye oswa plis"
],
"Entreprise ou organisation": [
"Company or organization",
"Antrepriz oswa òganizasyon"
],
"Nom de l’entreprise ou de l’organisation": [
"Company or organization name",
"Non antrepriz la oswa òganizasyon an"
],
"Informations de l’employeur": [
"Employer information",
"Enfòmasyon sou anplwayè a"
],
"PME · Grandes entreprises · Organisations internationales": [
"SMEs · Large companies · International organizations",
"PME · Gwo antrepriz · Òganizasyon entènasyonal"
],
"Recrutez pour vos programmes.": [
"Recruit for your programs.",
"Rekrite pou pwogram ou yo."
],
"En toute transparence.": [
"With full transparency.",
"Avèk tout transparans."
],
"Agences des Nations unies, ONG internationales, agences de coopération et fondations : publiez vos offres d’emploi et de consultance, recevez des candidatures structurées et gardez une trace claire de chaque étape de sélection.": [
"UN agencies, international NGOs, cooperation agencies and foundations: post job and consulting offers, receive structured applications and keep a clear record of every selection step.",
"Ajans Nasyonzini, ONG entènasyonal, ajans koperasyon ak fondasyon: pibliye òf travay ak konsiltasyon ou yo, resevwa aplikasyon ki byen òganize epi kenbe yon tras klè sou chak etap seleksyon."
],
"Plusieurs postes dans une même offre": [
"Several positions in one job post",
"Plizyè pòs nan yon sèl òf"
],
"Pensé pour les recrutements de projets": [
"Designed for project recruitment",
"Fèt pou rekritman pwojè"
],
"Offres d’emploi, de stage et de consultance": [
"Job, internship and consulting offers",
"Òf travay, estaj ak konsiltasyon"
],
"Ciblage par département et par commune": [
"Targeting by department and commune",
"Sib pa depatman ak pa komin"
],
"Documents demandés aux candidats (diplômes, références)": [
"Documents requested from candidates (degrees, references)",
"Dokiman yo mande kandida yo (diplòm, referans)"
],
"Suivi de chaque candidature, du dépôt à l’embauche": [
"Follow each application, from submission to hire",
"Swiv chak aplikasyon, depi depo jiska anbochaj"
],
"Dossiers complets, faciles à archiver pour vos audits": [
"Complete files, easy to archive for your audits",
"Dosye konplè, fasil pou achive pou odit ou yo"
],
"Salaires confidentiels, jamais publiés sans votre accord": [
"Confidential salaries, never published without your consent",
"Salè konfidansyèl, nou pa janm pibliye yo san dakò ou"
],
"Vous êtes une entreprise ?": [
"Are you a company?",
"Èske ou se yon antrepriz?"
],
"Voir l’offre Grandes entreprises": [
"See the Large companies offer",
"Gade òf Gwo antrepriz yo"
],
"Une organisation internationale ou une ONG ?": [
"An international organization or an NGO?",
"Yon òganizasyon entènasyonal oswa yon ONG?"
],
"Voir l’offre Organisations internationales": [
"See the International organizations offer",
"Gade òf Òganizasyon entènasyonal yo"
]
};
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Recruitment packages, pricing page, Mon forfait, administration (update 8)
(() => { const T = {
"1 offre": [
"1 job post",
"1 òf"
],
"Acceptée": [
"Accepted",
"Aksepte"
],
"Accès réservé à l’équipe ALO.": [
"Reserved for the ALO team.",
"Rezève pou ekip ALO a."
],
"Actif": [
"Active",
"Aktif"
],
"Ajouter une remise": [
"Add a discount",
"Ajoute yon rabè"
],
"Annulée": [
"Cancelled",
"Anile"
],
"Aucun frais lorsque vous embauchez": [
"No fee when you hire",
"Pa gen frè lè w anboche"
],
"Aucun paiement en ligne pour l’instant : l’équipe ALO vous contacte pour le paiement et la facture.": [
"No online payment for now: the ALO team contacts you for payment and the invoice.",
"Pa gen peman sou entènèt pou kounye a: ekip ALO a ap kontakte w pou peman an ak fakti a."
],
"Aucun paiement pour l’instant.": [
"No payments yet.",
"Pa gen peman pou kounye a."
],
"Aucune commande pour l’instant.": [
"No orders yet.",
"Pa gen kòmand pou kounye a."
],
"Aucune demande pour l’instant.": [
"No requests yet.",
"Pa gen demann pou kounye a."
],
"Aucune formule pour l’instant. Chaque offre publiée crée sa propre formule ALO Essential ou Professional.": [
"No package yet. Each job you post creates its own ALO Essential or Professional package.",
"Pa gen fòmil pou kounye a. Chak òf ou pibliye kreye pwòp fòmil ALO Essential oswa Professional li."
],
"Aucune offre.": [
"No job posts.",
"Pa gen òf."
],
"Aucune remise pour l’instant.": [
"No discounts yet.",
"Pa gen rabè pou kounye a."
],
"Avec ALO Institutional": [
"With ALO Institutional",
"Avèk ALO Institutional"
],
"Campagne de recrutement ciblée": [
"Targeted recruitment campaign",
"Kanpay rekritman ki sible"
],
"Campagnes de recrutement ciblées": [
"Targeted recruitment campaigns",
"Kanpay rekritman ki sible"
],
"Certaines options sont sur devis : l’équipe ALO vous enverra le montant final.": [
"Some options are quoted: the ALO team will send you the final amount.",
"Kèk opsyon se sou devi: ekip ALO a ap voye montan final la ba ou."
],
"Choisissez votre formule, le nombre d’offres et de postes, puis les outils dont vous avez besoin. Le total se met à jour automatiquement.": [
"Choose your package, the number of job posts and positions, then the tools you need. The total updates automatically.",
"Chwazi fòmil ou, kantite òf ak pòs, epi zouti ou bezwen yo. Total la mete tèt li ajou otomatikman."
],
"Circuits de validation institutionnels": [
"Institutional approval workflows",
"Sikwi validasyon enstitisyonèl"
],
"Collaboration en équipe": [
"Team collaboration",
"Kolaborasyon an ekip"
],
"Commande enregistrée. L’équipe ALO vous contacte pour le paiement.": [
"Order saved. The ALO team will contact you for payment.",
"Kòmand anrejistre. Ekip ALO a ap kontakte w pou peman an."
],
"Commander cette formule": [
"Order this package",
"Kòmande fòmil sa a"
],
"Commandes et paiements": [
"Orders and payments",
"Kòmand ak peman"
],
"Commencez à 49 $ US. Ajoutez des offres, des postes et des outils selon vos besoins.": [
"Start at US$49. Add job posts, positions and tools as you need them.",
"Kòmanse a 49 $ US. Ajoute òf, pòs ak zouti selon bezwen ou."
],
"Compte institutionnel avec plusieurs recruteurs": [
"Institutional account with several recruiters",
"Kont enstitisyonèl ak plizyè rekritè"
],
"Connectez-vous avec un compte administrateur.": [
"Sign in with an administrator account.",
"Konekte ak yon kont administratè."
],
"Consultances et termes de référence (TdR)": [
"Consultancies and terms of reference (ToR)",
"Konsiltasyon ak tèm referans (TdR)"
],
"Date": [
"Date",
"Dat"
],
"Demander un devis": [
"Request a quote",
"Mande yon devi"
],
"Demandes de devis": [
"Quote requests",
"Demann devi"
],
"Description de poste rédigée avec l’IA": [
"AI-written job description",
"Deskripsyon pòs ekri ak IA"
],
"Devis demandé": [
"Quote requested",
"Devi mande"
],
"Devis envoyé": [
"Quote sent",
"Devi voye"
],
"Devis, factures et facturation sur contrat": [
"Quotes, invoices and contract-based billing",
"Devi, fakti ak faktirasyon sou kontra"
],
"Données sur l’emploi en Haïti (bientôt)": [
"Employment data for Haiti (coming soon)",
"Done sou travay ann Ayiti (byento)"
],
"Données sur l’emploi en Haïti, dès leur disponibilité": [
"Employment data for Haiti, as soon as available",
"Done sou travay ann Ayiti, depi yo disponib"
],
"Durée de publication prolongée": [
"Extended posting duration",
"Dire piblikasyon pwolonje"
],
"Durée de publication restante": [
"Remaining posting time",
"Tan piblikasyon ki rete"
],
"Durée prolongée": [
"Extended duration",
"Dire pwolonje"
],
"Décrivez votre besoin": [
"Describe your needs",
"Dekri bezwen ou"
],
"Employeur": [
"Employer",
"Anplwayè"
],
"En cours": [
"In progress",
"Ap fèt"
],
"Enregistré.": [
"Saved.",
"Anrejistre."
],
"Envoyer ma demande": [
"Send my request",
"Voye demann mwen"
],
"Erreur.": [
"Error.",
"Erè."
],
"Ex. 5 postes ou plus": [
"E.g. 5 positions or more",
"Egz. 5 pòs oswa plis"
],
"Exemple : la demande n’a pas été envoyée.": [
"Sample: the request was not sent.",
"Egzanp: demann nan pa t voye."
],
"Exemple : rien n’a été enregistré.": [
"Sample: nothing was saved.",
"Egzanp: anyen pa t anrejistre."
],
"Facturation sur devis et contrat": [
"Quote and contract-based billing",
"Faktirasyon sou devi ak kontra"
],
"Facture": [
"Invoice",
"Fakti"
],
"Formule": [
"Package",
"Fòmil"
],
"Formule actuelle": [
"Current package",
"Fòmil aktyèl"
],
"Formules": [
"Packages",
"Fòmil yo"
],
"Grilles d’évaluation": [
"Evaluation matrices",
"Griy evalyasyon"
],
"Grilles d’évaluation des candidats": [
"Candidate evaluation matrices",
"Griy evalyasyon kandida yo"
],
"Inclus": [
"Included",
"Enkli"
],
"Inclus dans votre forfait": [
"Included in your package",
"Enkli nan fòmil ou"
],
"Jours": [
"Days",
"Jou"
],
"Jours de publication restants": [
"Posting days left",
"Jou piblikasyon ki rete"
],
"Merci ! Votre demande de devis a bien été envoyée. L’équipe ALO vous répond sous deux jours ouvrables.": [
"Thank you! Your quote request was sent. The ALO team will reply within two business days.",
"Mèsi! Demann devi ou a voye. Ekip ALO a ap reponn ou nan de jou travay."
],
"Mon forfait": [
"My package",
"Fòmil mwen"
],
"Non": [
"No",
"Non"
],
"Nos formules": [
"Our packages",
"Fòmil nou yo"
],
"Nos solutions de recrutement": [
"Our recruitment solutions",
"Solisyon rekritman nou yo"
],
"Nouvelle": [
"New",
"Nouvo"
],
"ONG, fondations, organisations internationales, agences de développement et institutions publiques : publiez vos offres d’emploi et de consultance, recevez des candidatures structurées et gardez une trace claire de chaque étape de sélection.": [
"NGOs, foundations, international organizations, development agencies and public institutions: post job and consulting offers, receive structured applications and keep a clear record of every selection step.",
"ONG, fondasyon, òganizasyon entènasyonal, ajans devlopman ak enstitisyon piblik: pibliye òf travay ak konsiltasyon ou yo, resevwa aplikasyon ki byen òganize epi kenbe yon tras klè sou chak etap seleksyon."
],
"Offre mise en avant": [
"Featured job listing",
"Òf ki mete an avan"
],
"Offres": [
"Job posts",
"Òf"
],
"Offres disponibles": [
"Job posts available",
"Òf disponib"
],
"Offres d’emploi": [
"Job posts",
"Òf travay"
],
"Offres d’emploi prévues": [
"Planned job posts",
"Òf travay ki prevwa"
],
"Offres d’emploi supplémentaires": [
"Additional job posts",
"Lòt òf travay anplis"
],
"Offres à valider": [
"Job posts to approve",
"Òf pou valide"
],
"Offres, postes et durée sur mesure": [
"Custom job posts, positions and duration",
"Òf, pòs ak dire sou mezi"
],
"Options": [
"Options",
"Opsyon"
],
"Organisation ou institution": [
"Organization or institution",
"Òganizasyon oswa enstitisyon"
],
"Organisations & Institutions": [
"Organizations & Institutions",
"Òganizasyon & Enstitisyon"
],
"Outils de votre formule": [
"Tools in your package",
"Zouti nan fòmil ou"
],
"Outils et services": [
"Tools and services",
"Zouti ak sèvis"
],
"PME · Grandes entreprises · Organisations & Institutions": [
"SMEs · Large companies · Organizations & Institutions",
"PME · Gwo antrepriz · Òganizasyon & Enstitisyon"
],
"Paiement": [
"Payment",
"Peman"
],
"Paiements et factures": [
"Payments and invoices",
"Peman ak fakti"
],
"Pas de paiement en ligne pour l’instant : l’équipe ALO vous contacte pour le paiement et vous envoie la facture.": [
"No online payment for now: the ALO team contacts you for payment and sends you the invoice.",
"Pa gen peman sou entènèt pou kounye a: ekip ALO a ap kontakte w pou peman an epi l ap voye fakti a ba ou."
],
"Passer à ALO Professional": [
"Upgrade to ALO Professional",
"Pase nan ALO Professional"
],
"Personnaliser ma formule": [
"Customize my package",
"Pèsonalize fòmil mwen"
],
"Planification des entretiens": [
"Interview scheduling",
"Planifikasyon entèvyou"
],
"Plusieurs offres, une consultance ou un besoin institutionnel ?": [
"Several job posts, a consultancy or an institutional need?",
"Plizyè òf, yon konsiltasyon oswa yon bezwen enstitisyonèl?"
],
"Plusieurs postes possibles dans une même offre": [
"Several positions possible in one job post",
"Plizyè pòs posib nan yon sèl òf"
],
"Plusieurs recruteurs": [
"Multiple recruiters",
"Plizyè rekritè"
],
"Plusieurs évaluateurs et circuits de validation": [
"Multiple reviewers and approval workflows",
"Plizyè evalyatè ak sikwi validasyon"
],
"Postes": [
"Positions",
"Pòs"
],
"Postes couverts utilisés": [
"Covered positions used",
"Pòs kouvri ki itilize"
],
"Postes supplémentaires dans une même offre": [
"Additional positions in one job post",
"Pòs anplis nan yon sèl òf"
],
"Postes à pourvoir au total": [
"Total positions to fill",
"Total pòs pou ranpli"
],
"Pour les recrutements multiples, les consultances et les besoins institutionnels : termes de référence, propositions techniques et financières, grilles d’évaluation, plusieurs évaluateurs, rapports, facturation sur devis et contrat.": [
"For multiple hires, consultancies and institutional needs: terms of reference, technical and financial proposals, evaluation matrices, multiple reviewers, reports, quote and contract-based billing.",
"Pou rekritman miltip, konsiltasyon ak bezwen enstitisyonèl: tèm referans, pwopozisyon teknik ak finansye, griy evalyasyon, plizyè evalyatè, rapò, faktirasyon sou devi ak kontra."
],
"Prix ($ US)": [
"Price (US$)",
"Pri ($ US)"
],
"Prix en dollars US": [
"Prices in US dollars",
"Pri an dola ameriken"
],
"Prix vide = « Sur devis ». Les modifications s’appliquent immédiatement sur le site.": [
"Empty price = \"Quote\". Changes apply immediately on the site.",
"Pri vid = « Sou devi ». Chanjman yo aplike touswit sou sit la."
],
"Propositions techniques et financières": [
"Technical and financial proposals",
"Pwopozisyon teknik ak finansye"
],
"Présélection des candidats par l’IA": [
"AI candidate screening",
"Preseleksyon kandida ak IA"
],
"Quand une commande passe à « Payée », ses offres sont marquées payées automatiquement.": [
"When an order is set to \"Paid\", its job posts are marked paid automatically.",
"Lè yon kòmand pase « Peye », òf li yo make peye otomatikman."
],
"Rapports de recrutement": [
"Recruitment reports",
"Rapò rekritman"
],
"Rapports et résultats d’évaluation téléchargeables": [
"Downloadable reports and evaluation results",
"Rapò ak rezilta evalyasyon pou telechaje"
],
"Recrutement de consultants (termes de référence)": [
"Consultant recruitment (terms of reference)",
"Rekritman konsiltan (tèm referans)"
],
"Recrutement de projet": [
"Project recruitment",
"Rekritman pwojè"
],
"Recrutement par projet": [
"Project-based recruitment",
"Rekritman pa pwojè"
],
"Refusée": [
"Declined",
"Refize"
],
"Remise": [
"Discount",
"Rabè"
],
"Remise (%)": [
"Discount (%)",
"Rabè (%)"
],
"Remises sur volume": [
"Volume discounts",
"Rabè sou volim"
],
"Réponse de l’équipe ALO sous deux jours ouvrables.": [
"Reply from the ALO team within two business days.",
"Repons ekip ALO a nan de jou travay."
],
"Sans abonnement mensuel": [
"No monthly subscription",
"San abònman chak mwa"
],
"Sans abonnement · aucun frais en cas d’embauche": [
"No subscription · no fee when you hire",
"San abònman · pa gen frè lè w anboche"
],
"Sans prix, une option est proposée « sur devis ». Sans prix, les offres et postes supplémentaires coûtent le prix de la formule.": [
"Without a price, an option is offered \"on quote\". Without a price, additional job posts and positions cost the package price.",
"San pri, yon opsyon pwopoze « sou devi ». San pri, lòt òf ak pòs anplis koute pri fòmil la."
],
"Services souhaités": [
"Services needed",
"Sèvis ou bezwen"
],
"Services supplémentaires": [
"Additional services",
"Sèvis anplis"
],
"Statistiques de recrutement": [
"Recruitment analytics",
"Estatistik rekritman"
],
"Statistiques de recrutement avancées": [
"Advanced recruitment analytics",
"Estatistik rekritman avanse"
],
"Sur devis": [
"On quote",
"Sou devi"
],
"Sur devis, avec facturation sur devis et contrat plutôt qu’un paiement en ligne immédiat.": [
"On quote, with quote and contract-based billing instead of immediate online payment.",
"Sou devi, ak faktirasyon sou devi ak kontra olye yon peman touswit sou entènèt."
],
"S’applique à": [
"Applies to",
"Aplike pou"
],
"Tarifs et options": [
"Prices and options",
"Pri ak opsyon"
],
"Total estimé": [
"Estimated total",
"Total estime"
],
"Une ONG, une fondation, une organisation internationale ou une institution publique ?": [
"An NGO, a foundation, an international organization or a public institution?",
"Yon ONG, yon fondasyon, yon òganizasyon entènasyonal oswa yon enstitisyon piblik?"
],
"Unité": [
"Unit",
"Inite"
],
"Utiliser mon forfait": [
"Use my package",
"Itilize fòmil mwen"
],
"Voir Mon forfait": [
"See My package",
"Gade Fòmil mwen"
],
"Voir Organisations & Institutions": [
"See Organizations & Institutions",
"Gade Òganizasyon & Enstitisyon"
],
"Voir nos solutions de recrutement": [
"See our recruitment solutions",
"Gade solisyon rekritman nou yo"
],
"Votre formule": [
"Your package",
"Fòmil ou"
],
"offre": [
"job post",
"òf"
],
"offre la plus proche de l’expiration": [
"job post closest to expiring",
"òf ki pi pre pou ekspire"
],
"offre supplémentaire": [
"additional job post",
"òf anplis"
],
"offre(s) restante(s)": [
"job post(s) left",
"òf ki rete"
],
"options sur devis": [
"options on quote",
"opsyon sou devi"
],
"par poste": [
"per position",
"pa pòs"
],
"par tranche de 15 jours": [
"per 15-day block",
"pa tranch 15 jou"
],
"poste supplémentaire": [
"additional position",
"pòs anplis"
],
"poste(s)": [
"position(s)",
"pòs"
],
"sur devis": [
"on quote",
"sou devi"
],
"toutes les formules sont ouvertes à tous les employeurs.": [
"every package is open to every employer.",
"tout fòmil yo louvri pou tout anplwayè."
],
"À partir de": [
"From",
"Apati"
],
"À partir de 149 $ US": [
"From US$149",
"Apati 149 $ US"
],
"À partir de 49 $ US": [
"From US$49",
"Apati 49 $ US"
],
"Recruter avec ALO": [
"Recruit with ALO",
"Rekrite ak ALO"
],
"Administration": [
"Administration",
"Administrasyon"
]
};
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Employer dashboard 2.0 (update 9)
(() => { const T = {
"(100 % recommandé par étape)": [
"(100% recommended per stage)",
"(100 % rekòmande pa etap)"
],
"Ajouter des outils": [
"Add tools",
"Ajoute zouti"
],
"Ajouter la note": [
"Add note",
"Ajoute nòt la"
],
"Ajouter un critère": [
"Add a criterion",
"Ajoute yon kritè"
],
"Ajouter une note pour l’équipe": [
"Add a note for the team",
"Ajoute yon nòt pou ekip la"
],
"Ajouter une étape": [
"Add a stage",
"Ajoute yon etap"
],
"Ajoutez des compétences demandées à vos prochaines offres pour mieux trier les candidatures.": [
"Add required skills to your next job posts to sort applications better.",
"Ajoute konpetans ou mande nan pwochen òf ou yo pou w ka triye aplikasyon yo pi byen."
],
"Ajoutez des responsabilités et des compétences à l’offre pour obtenir des questions.": [
"Add responsibilities and skills to the job post to get questions.",
"Ajoute responsablite ak konpetans nan òf la pou w jwenn kesyon."
],
"Aller aux évaluations": [
"Go to evaluations",
"Ale nan evalyasyon yo"
],
"Améliorer la description du poste": [
"Improve the job description",
"Amelyore deskripsyon pòs la"
],
"Analyse des candidatures": [
"Application analysis",
"Analiz aplikasyon yo"
],
"Analyse fondée uniquement sur les informations fournies par le candidat et sur les critères de votre offre. Rien n’est inventé et aucun candidat n’est écarté automatiquement.": [
"Analysis based only on the information the candidate provided and your job post's criteria. Nothing is invented and no candidate is rejected automatically.",
"Analiz ki baze sèlman sou enfòmasyon kandida a bay ak kritè òf ou a. Anyen pa envante e okenn kandida pa elimine otomatikman."
],
"Annulé": [
"Cancelled",
"Anile"
],
"Appliquez des critères pondérés et consolidez les notes de votre comité.": [
"Apply weighted criteria and consolidate your committee's scores.",
"Aplike kritè ki gen pwa epi rasanble nòt komite ou a."
],
"Assistant ALO": [
"ALO Assistant",
"Asistan ALO"
],
"Assistant de rédaction d’offres": [
"Job description assistant",
"Asistan pou ekri òf"
],
"Au moins la moitié des critères": [
"At least half the criteria",
"Omwen mwatye kritè yo"
],
"Aucun entretien prévu.": [
"No interviews scheduled.",
"Pa gen entèvyou ki prevwa."
],
"Aucun profil visible ne correspond encore à": [
"No visible profile matches yet",
"Poko gen pwofil vizib ki koresponn ak"
],
"Aucun signal d’alerte : candidatures reçues, examen à jour et délai suffisant.": [
"No warning signs: applications received, reviews up to date and enough time left.",
"Pa gen siyal alèt: aplikasyon resevwa, egzamen ajou e tan ase."
],
"Aucune formule": [
"No package",
"Pa gen fòmil"
],
"Aucune grille pour l’instant.": [
"No matrix yet.",
"Pa gen griy pou kounye a."
],
"Aucune information sur": [
"No information about",
"Pa gen enfòmasyon sou"
],
"Aucune note pour l’instant.": [
"No notes yet.",
"Pa gen nòt pou kounye a."
],
"Bonjour": [
"Hello",
"Bonjou"
],
"Bonjour.": [
"Hello.",
"Bonjou."
],
"Calculé uniquement à partir de vos offres et des candidatures reçues sur ALO.": [
"Calculated only from your job posts and the applications received on ALO.",
"Kalkile sèlman apati òf ou yo ak aplikasyon ou resevwa sou ALO."
],
"Calendrier": [
"Timeline",
"Kalandriye"
],
"Candidat": [
"Candidate",
"Kandida"
],
"Candidats présélectionnés": [
"Shortlisted candidates",
"Kandida preseleksyone"
],
"Candidats à évaluer": [
"Candidates to evaluate",
"Kandida pou evalye"
],
"Candidature": [
"Application",
"Aplikasyon"
],
"Candidatures": [
"Applications",
"Aplikasyon"
],
"Candidatures reçues par semaine": [
"Applications received per week",
"Aplikasyon resevwa chak semèn"
],
"Ce que disent vos chiffres": [
"What your numbers say",
"Sa chif ou yo di"
],
"Cette fonctionnalité est disponible avec": [
"This feature is available with",
"Fonksyon sa a disponib avèk"
],
"Cette fonctionnalité est disponible en option.": [
"This feature is available as an add-on.",
"Fonksyon sa a disponib an opsyon."
],
"Cette offre n’a pas de compétences demandées : ajoutez-en pour obtenir une analyse.": [
"This job post has no required skills: add some to get an analysis.",
"Òf sa a pa gen konpetans li mande: ajoute kèk pou w jwenn yon analiz."
],
"Chaque étape a un type, qui détermine ce que voit le candidat. Il faut au moins une étape « Nouvelle », « Embauché » et « Non retenu ».": [
"Each stage has a type, which decides what the candidate sees. You need at least one \"New\", \"Hired\" and \"Not selected\" stage.",
"Chak etap gen yon kalite ki deside sa kandida a wè. Ou bezwen omwen yon etap « Nouvo », « Anboche » ak « Pa chwazi »."
],
"Choisir des candidats": [
"Choose candidates",
"Chwazi kandida"
],
"Circuits d’approbation": [
"Approval workflows",
"Sikwi apwobasyon"
],
"Classez les candidatures selon vos critères obligatoires.": [
"Rank applications by your mandatory criteria.",
"Klase aplikasyon yo selon kritè obligatwa ou yo."
],
"Cochez 2 à 4 candidats dans l’onglet Candidatures pour les comparer.": [
"Tick 2 to 4 candidates in the Applications tab to compare them.",
"Make 2 a 4 kandida nan onglè Aplikasyon pou konpare yo."
],
"Commentaire (facultatif)": [
"Comment (optional)",
"Kòmantè (pa obligatwa)"
],
"Comparaison des candidats": [
"Candidate comparison",
"Konparezon kandida"
],
"Comparer": [
"Compare",
"Konpare"
],
"Comparer les candidats": [
"Compare candidates",
"Konpare kandida yo"
],
"Comparez 4 candidats au maximum.": [
"Compare 4 candidates at most.",
"Konpare 4 kandida maksimòm."
],
"Comparez vos candidats plus facilement.": [
"Compare your candidates more easily.",
"Konpare kandida ou yo pi fasil."
],
"Comprenez ce qui fonctionne dans vos recrutements.": [
"Understand what works in your recruitment.",
"Konprann sa ki mache nan rekritman ou yo."
],
"Correspond à": [
"Matches",
"Koresponn ak"
],
"Critère": [
"Criterion",
"Kritè"
],
"Critères de l’offre": [
"Job post criteria",
"Kritè òf la"
],
"Critères remplis": [
"Criteria met",
"Kritè ranpli"
],
"Date et heure": [
"Date and time",
"Dat ak lè"
],
"Dernier poste": [
"Latest position",
"Dènye pòs"
],
"Donnez un exemple concret où vous avez utilisé": [
"Give a concrete example where you used",
"Bay yon egzanp konkrè kote ou te itilize"
],
"Données sur l’emploi": [
"Employment data",
"Done sou travay"
],
"Déclaration de conflit d’intérêts": [
"Conflict of interest declaration",
"Deklarasyon konfli enterè"
],
"Déclarez d’abord l’absence de conflit d’intérêts dans l’onglet Évaluations de l’offre.": [
"First declare you have no conflict of interest in the job post's Evaluations tab.",
"Deklare dabò ou pa gen konfli enterè nan onglè Evalyasyon òf la."
],
"Découvrez des professionnels qui ont choisi d’être visibles par les recruteurs.": [
"Discover professionals who chose to be visible to recruiters.",
"Dekouvri pwofesyonèl ki chwazi pou rekritè wè yo."
],
"Découvrir cette fonctionnalité": [
"Discover this feature",
"Dekouvri fonksyon sa a"
],
"Décrivez votre expérience pour": [
"Describe your experience with",
"Dekri eksperyans ou pou"
],
"Définissez d’abord la grille d’évaluation.": [
"First set up the evaluation matrix.",
"Defini griy evalyasyon an dabò."
],
"Délai moyen d’embauche": [
"Average time to hire",
"Tan mwayen pou anboche"
],
"E-mail du collègue": [
"Colleague's email",
"Imèl kolèg la"
],
"Embauché": [
"Hired",
"Anboche"
],
"En attente > 7 j": [
"Waiting > 7 days",
"Ap tann > 7 j"
],
"Enregistrer la grille": [
"Save the matrix",
"Anrejistre griy la"
],
"Enregistrer les étapes": [
"Save stages",
"Anrejistre etap yo"
],
"Enregistrer mon évaluation": [
"Save my evaluation",
"Anrejistre evalyasyon mwen"
],
"Entretien planifié.": [
"Interview scheduled.",
"Entèvyou planifye."
],
"Entretiens": [
"Interviews",
"Entèvyou"
],
"Entretiens passés ou annulés": [
"Past or cancelled interviews",
"Entèvyou ki pase oswa anile"
],
"Entretiens réalisés": [
"Interviews completed",
"Entèvyou ki fèt"
],
"Entretiens à venir": [
"Upcoming interviews",
"Entèvyou k ap vini"
],
"Envisager une campagne ciblée": [
"Consider a targeted campaign",
"Konsidere yon kanpay ki sible"
],
"Examiner les nouvelles candidatures": [
"Review new applications",
"Egzamine nouvo aplikasyon yo"
],
"Expire le": [
"Expires on",
"Ekspire le"
],
"Exporter le calendrier (CSV)": [
"Export the timeline (CSV)",
"Ekspòte kalandriye a (CSV)"
],
"Exporter les candidatures (CSV)": [
"Export applications (CSV)",
"Ekspòte aplikasyon yo (CSV)"
],
"Exporter les résultats d’évaluation (CSV)": [
"Export evaluation results (CSV)",
"Ekspòte rezilta evalyasyon yo (CSV)"
],
"Exportez l’activité, les évaluations et les délais de recrutement.": [
"Export activity, evaluations and recruitment timelines.",
"Ekspòte aktivite, evalyasyon ak delè rekritman yo."
],
"Expérience déclarée": [
"Stated experience",
"Eksperyans deklare"
],
"Fait": [
"Done",
"Fèt"
],
"Faites valider chaque étape par les bonnes personnes.": [
"Have each step approved by the right people.",
"Fè bon moun yo valide chak etap."
],
"Financier": [
"Financial",
"Finansye"
],
"Format": [
"Format",
"Fòma"
],
"Gestion des offres": [
"Job management",
"Jesyon òf yo"
],
"Gestion par département et par projet": [
"Department and project management",
"Jesyon pa depatman ak pa pwojè"
],
"Glissez une carte vers une autre colonne, ou ouvrez le candidat pour changer d’étape.": [
"Drag a card to another column, or open the candidate to change stage.",
"Trennen yon kat nan yon lòt kolòn, oswa louvri kandida a pou chanje etap."
],
"Grille d’évaluation": [
"Evaluation matrix",
"Griy evalyasyon"
],
"Grille enregistrée.": [
"Matrix saved.",
"Griy anrejistre."
],
"Grilles pondérées, déclarations de conflit d’intérêts et notes indépendantes, offre par offre.": [
"Weighted matrices, conflict of interest declarations and independent scores, job by job.",
"Griy ak pwa, deklarasyon konfli enterè ak nòt endepandan, òf pa òf."
],
"Il faut au moins une étape « Nouvelle », « Embauché » et « Non retenu ».": [
"You need at least one \"New\", \"Hired\" and \"Not selected\" stage.",
"Ou bezwen omwen yon etap « Nouvo », « Anboche » ak « Pa chwazi »."
],
"Inclus dans toutes les formules": [
"Included in every package",
"Enkli nan tout fòmil yo"
],
"Indicateurs utilisés : nombre de candidatures, critères déclarés dans l’offre, délais d’examen et date d’expiration.": [
"Indicators used: number of applications, criteria stated in the job post, review times and expiry date.",
"Endikatè yo itilize: kantite aplikasyon, kritè ki nan òf la, delè egzamen ak dat ekspirasyon."
],
"Invitation en attente": [
"Invitation pending",
"Envitasyon ap tann"
],
"Invitation enregistrée. Votre collègue y accède en se connectant avec cette adresse.": [
"Invitation saved. Your colleague gets access by signing in with this address.",
"Envitasyon anrejistre. Kolèg ou a ap gen aksè lè l konekte ak adrès sa a."
],
"Inviter": [
"Invite",
"Envite"
],
"Invitez vos collègues à examiner et évaluer les candidats.": [
"Invite your colleagues to review and evaluate candidates.",
"Envite kolèg ou yo pou egzamine ak evalye kandida yo."
],
"Je n’ai aucun conflit d’intérêts": [
"I have no conflict of interest",
"Mwen pa gen okenn konfli enterè"
],
"Jours en ligne": [
"Days online",
"Jou an liy"
],
"J’ai un conflit d’intérêts": [
"I have a conflict of interest",
"Mwen gen yon konfli enterè"
],
"Langues non précisées": [
"Languages not specified",
"Lang pa presize"
],
"Lecture seule": [
"Read-only",
"Lekti sèlman"
],
"Les candidats présélectionnés apparaîtront ici.": [
"Shortlisted candidates will appear here.",
"Kandida preseleksyone yo ap parèt la a."
],
"Les notes sont visibles par les membres de votre équipe, jamais par le candidat.": [
"Notes are visible to your team members, never to the candidate.",
"Manm ekip ou ka wè nòt yo, men kandida a pa janm wè yo."
],
"Lieu ou lien": [
"Place or link",
"Kote oswa lyen"
],
"Liste": [
"List",
"Lis"
],
"L’offre expire dans": [
"The job post expires in",
"Òf la ekspire nan"
],
"Marquer comme fait": [
"Mark as done",
"Make li fèt"
],
"Mentionne": [
"Mentions",
"Mansyone"
],
"Mentionné": [
"Mentioned",
"Mansyone"
],
"Moyenne pondérée des notes de chaque évaluateur (0 à 5). Les évaluateurs ne voient pas les notes des autres.": [
"Weighted average of each evaluator's scores (0 to 5). Evaluators do not see each other's scores.",
"Mwayèn ak pwa nòt chak evalyatè (0 a 5). Evalyatè yo pa wè nòt lòt yo."
],
"Non mentionné": [
"Not mentioned",
"Pa mansyone"
],
"Non retenu": [
"Not selected",
"Pa chwazi"
],
"Note du comité": [
"Committee score",
"Nòt komite a"
],
"Notes de 0 à 5. Votre évaluation reste indépendante : les autres évaluateurs ne la voient pas.": [
"Scores from 0 to 5. Your evaluation stays independent: other evaluators do not see it.",
"Nòt 0 a 5. Evalyasyon ou rete endepandan: lòt evalyatè yo pa wè l."
],
"Notes internes (facultatif)": [
"Internal notes (optional)",
"Nòt entèn (pa obligatwa)"
],
"Notez au moins un critère.": [
"Score at least one criterion.",
"Bay nòt pou omwen yon kritè."
],
"Nouvelle étape": [
"New stage",
"Nouvo etap"
],
"Nouvelles candidatures": [
"New applications",
"Nouvo aplikasyon"
],
"Obligatoire avant de noter les candidats.": [
"Required before scoring candidates.",
"Obligatwa anvan w bay kandida yo nòt."
],
"Offre introuvable.": [
"Job post not found.",
"Nou pa jwenn òf la."
],
"Offres d’emploi actives": [
"Active job posts",
"Òf travay aktif"
],
"Organisez vos recrutements par département ou par projet.": [
"Organize your recruitment by department or project.",
"Òganize rekritman ou yo pa depatman oswa pa pwojè."
],
"Oui": [
"Yes",
"Wi"
],
"Parlez-en au propriétaire du compte.": [
"Talk to the account owner.",
"Pale ak pwopriyetè kont lan."
],
"Pas encore assez d’activité pour en tirer des enseignements.": [
"Not enough activity yet to draw conclusions.",
"Poko gen ase aktivite pou tire leson."
],
"Pas encore noté par vous": [
"Not scored by you yet",
"Ou poko bay nòt"
],
"Performance de vos recrutements": [
"Your recruitment performance",
"Pèfòmans rekritman ou yo"
],
"Personnaliser les étapes": [
"Customize stages",
"Pèsonalize etap yo"
],
"Planifier": [
"Schedule",
"Planifye"
],
"Planifier un entretien": [
"Schedule an interview",
"Planifye yon entèvyou"
],
"Planifiez et suivez vos entretiens au même endroit.": [
"Schedule and track your interviews in one place.",
"Planifye epi swiv entèvyou ou yo nan menm kote a."
],
"Plus récentes": [
"Most recent",
"Pi resan"
],
"Poids (%)": [
"Weight (%)",
"Pwa (%)"
],
"Points forts": [
"Strengths",
"Pwen fò"
],
"Points à vérifier": [
"Points to check",
"Pwen pou verifye"
],
"Posez vos questions sur vos recrutements.": [
"Ask questions about your recruitment.",
"Poze kesyon sou rekritman ou yo."
],
"Postes couverts disponibles": [
"Covered positions available",
"Pòs kouvri ki disponib"
],
"Postes pourvus": [
"Positions filled",
"Pòs ranpli"
],
"Pour indiquer une embauche, ouvrez le candidat et utilisez « Confirmer l’embauche ».": [
"To record a hire, open the candidate and use \"Confirm the hire\".",
"Pou endike yon anbochaj, louvri kandida a epi itilize « Konfime anbochaj la »."
],
"Première candidature": [
"First application",
"Premye aplikasyon"
],
"Profil confidentiel": [
"Confidential profile",
"Pwofil konfidansyèl"
],
"Profils à examiner": [
"Profiles to review",
"Pwofil pou egzamine"
],
"Prolonger la durée de publication": [
"Extend the posting duration",
"Pwolonje dire piblikasyon an"
],
"Propriétaire du compte": [
"Account owner",
"Pwopriyetè kont lan"
],
"Précisez brièvement la nature du conflit d’intérêts :": [
"Briefly describe the conflict of interest:",
"Presize rapidman ki kalite konfli enterè a ye:"
],
"Présélection": [
"Shortlist",
"Preseleksyon"
],
"Présélection avancée": [
"Advanced screening",
"Preseleksyon avanse"
],
"Présélection de base": [
"Basic screening",
"Preseleksyon debaz"
],
"Présélectionnés": [
"Shortlisted",
"Preseleksyone"
],
"Prévenez le candidat par téléphone, WhatsApp ou e-mail. Son statut passe à « Entretien ».": [
"Let the candidate know by phone, WhatsApp or email. Their status changes to \"Interview\".",
"Avèti kandida a pa telefòn, WhatsApp oswa imèl. Estati li pase « Entèvyou »."
],
"Prévu": [
"Scheduled",
"Prevwa"
],
"Publiez une offre pour découvrir des talents correspondants.": [
"Post a job to discover matching talent.",
"Pibliye yon òf pou dekouvri talan ki koresponn."
],
"Quelle est votre expérience avec": [
"What is your experience with",
"Ki eksperyans ou genyen ak"
],
"Questions aux candidats": [
"Questions for candidates",
"Kesyon pou kandida yo"
],
"Questions suggérées pour l’entretien": [
"Suggested interview questions",
"Kesyon pwopoze pou entèvyou a"
],
"Rapports": [
"Reports",
"Rapò"
],
"Rapports institutionnels": [
"Institutional reports",
"Rapò enstitisyonèl"
],
"Rechercher un candidat": [
"Search for a candidate",
"Chèche yon kandida"
],
"Recrutement": [
"Recruitment",
"Rekritman"
],
"Recrutements actifs": [
"Active recruitments",
"Rekritman aktif"
],
"Recruteur": [
"Recruiter",
"Rekritè"
],
"Repères sur le marché de l’emploi en Haïti.": [
"Insights on the job market in Haiti.",
"Repè sou mache travay ann Ayiti."
],
"Retirer": [
"Remove",
"Retire"
],
"Retirer ce membre de l’équipe ?": [
"Remove this team member?",
"Retire manm sa a nan ekip la?"
],
"Rien d’urgent. Vos recrutements sont à jour.": [
"Nothing urgent. Your recruitment is up to date.",
"Anyen ijan. Rekritman ou yo ajou."
],
"Rédigez et améliorez vos offres d’emploi.": [
"Write and improve your job posts.",
"Ekri epi amelyore òf travay ou yo."
],
"Résultats consolidés": [
"Consolidated results",
"Rezilta rasanble"
],
"Santé de ce recrutement": [
"Health of this recruitment",
"Sante rekritman sa a"
],
"Service": [
"Service",
"Sèvis"
],
"Seulement": [
"Only",
"Sèlman"
],
"Statistiques": [
"Analytics",
"Estatistik"
],
"Suggestions": [
"Suggestions",
"Sijesyon"
],
"Suivi des candidatures": [
"Application tracking",
"Swivi aplikasyon yo"
],
"Sur place": [
"On site",
"Sou plas"
],
"Tableau": [
"Board",
"Tablo"
],
"Tableau de bord": [
"Dashboard",
"Tablo de bò"
],
"Talents": [
"Talent",
"Talan"
],
"Talents à découvrir": [
"Talent to discover",
"Talan pou dekouvri"
],
"Technique": [
"Technical",
"Teknik"
],
"Total des poids": [
"Total weight",
"Total pwa"
],
"Touchez les professionnels qui correspondent à vos besoins.": [
"Reach the professionals who match your needs.",
"Rive jwenn pwofesyonèl ki koresponn ak bezwen ou yo."
],
"Tous": [
"All",
"Tout"
],
"Tous les critères obligatoires": [
"All mandatory criteria",
"Tout kritè obligatwa yo"
],
"Toutes les formules incluent : consulter les candidatures et leurs documents, gérer les étapes, contacter les candidats, suivre les embauches et gérer vos offres.": [
"Every package includes: viewing applications and their documents, managing stages, contacting candidates, tracking hires and managing your job posts.",
"Tout fòmil yo gen: gade aplikasyon yo ak dokiman yo, jere etap yo, kontakte kandida yo, swiv anbochaj yo epi jere òf ou yo."
],
"Toutes les offres": [
"All job posts",
"Tout òf yo"
],
"Toutes les étapes": [
"All stages",
"Tout etap yo"
],
"Toutes mes offres": [
"All my job posts",
"Tout òf mwen yo"
],
"Trier": [
"Sort",
"Triye"
],
"Téléphone": [
"Phone",
"Telefòn"
],
"Un paiement est en attente pour publier vos offres.": [
"A payment is pending to publish your job posts.",
"Gen yon peman k ap tann pou pibliye òf ou yo."
],
"Uniquement des Profils ALO publiés, ouverts aux opportunités et visibles par les recruteurs. Aucune coordonnée n’est partagée.": [
"Only published ALO Profiles, open to opportunities and visible to recruiters. No contact details are shared.",
"Sèlman Pwofil ALO ki pibliye, ki ouvè pou opòtinite e rekritè ka wè. Okenn kowòdone pa pataje."
],
"Visioconférence": [
"Video call",
"Videyo konferans"
],
"Voici ce qui se passe dans vos recrutements aujourd’hui.": [
"Here is what is happening in your recruitment today.",
"Men sa k ap pase nan rekritman ou yo jodi a."
],
"Voir tout": [
"See all",
"Wè tout"
],
"Vos recrutements": [
"Your recruitments",
"Rekritman ou yo"
],
"Votre collègue se connecte à alo.ht avec cette adresse e-mail : l’invitation est acceptée automatiquement. Seul le propriétaire voit la facturation.": [
"Your colleague signs in to alo.ht with this email address: the invitation is accepted automatically. Only the owner sees billing.",
"Kolèg ou a konekte sou alo.ht ak adrès imèl sa a: envitasyon an aksepte otomatikman. Se sèlman pwopriyetè a ki wè faktirasyon."
],
"Votre formule actuelle": [
"Your current package",
"Fòmil aktyèl ou"
],
"Votre note": [
"Your score",
"Nòt ou"
],
"Votre offre": [
"Your job post",
"Òf ou"
],
"Votre priorité aujourd’hui": [
"Your priority today",
"Priyorite ou jodi a"
],
"Vous": [
"You",
"Ou"
],
"Vous avez déclaré n’avoir aucun conflit d’intérêts pour cette offre.": [
"You declared having no conflict of interest for this job post.",
"Ou deklare ou pa gen okenn konfli enterè pou òf sa a."
],
"Vous avez déclaré un conflit d’intérêts : vous ne pouvez pas noter les candidats de cette offre.": [
"You declared a conflict of interest: you cannot score this job post's candidates.",
"Ou deklare yon konfli enterè: ou pa ka bay kandida òf sa a nòt."
],
"Voyez en un coup d’œil ce qui correspond à votre offre et ce qu’il faut vérifier.": [
"See at a glance what matches your job post and what to check.",
"Wè rapidman sa ki koresponn ak òf ou a ak sa pou verifye."
],
"Vue d’ensemble": [
"Overview",
"Apèsi"
],
"Vérifier si les critères obligatoires sont trop restrictifs": [
"Check whether the mandatory criteria are too restrictive",
"Verifye si kritè obligatwa yo twò sevè"
],
"an(s)": [
"year(s)",
"lane"
],
"an(s) d’expérience déclarée": [
"year(s) of stated experience",
"lane eksperyans deklare"
],
"attention requise": [
"attention needed",
"bezwen atansyon"
],
"attire des candidats qualifiés": [
"attracts qualified candidates",
"atire kandida ki kalifye"
],
"au moins": [
"at least",
"omwen"
],
"candidat(s) présélectionné(s)": [
"shortlisted candidate(s)",
"kandida preseleksyone"
],
"candidat(s) présélectionné(s) n’ont pas reçu de réponse depuis 5 jours.": [
"shortlisted candidate(s) have had no reply for 5 days.",
"kandida preseleksyone poko resevwa repons depi 5 jou."
],
"candidature(s) attendent depuis plus de 3 jours.": [
"application(s) have been waiting more than 3 days.",
"aplikasyon ap tann depi plis pase 3 jou."
],
"candidature(s) en": [
"application(s) in",
"aplikasyon nan"
],
"candidatures attendent depuis plus d’une semaine à l’étape d’examen.": [
"applications have been waiting over a week at the review stage.",
"aplikasyon ap tann depi plis pase yon semèn nan etap egzamen."
],
"candidatures reçues, mais seulement": [
"applications received, but only",
"aplikasyon resevwa, men sèlman"
],
"cette sem.": [
"this wk.",
"semèn sa a"
],
"compétences recherchées": [
"required skills",
"konpetans yo chèche"
],
"consulte les candidatures, ajoute des notes et évalue avec la grille.": [
"views applications, adds notes and scores with the matrix.",
"gade aplikasyon yo, ajoute nòt epi evalye ak griy la."
],
"consulte sans rien modifier.": [
"views without changing anything.",
"gade san chanje anyen."
],
"critères": [
"criteria",
"kritè"
],
"des": [
"of the",
"nan"
],
"en": [
"in",
"nan"
],
"entretien(s) prévu(s) dans les prochaines 48 heures.": [
"interview(s) scheduled in the next 48 hours.",
"entèvyou prevwa nan pwochen 48 è yo."
],
"expire dans": [
"expires in",
"ekspire nan"
],
"gère les offres, les candidats, les entretiens et les embauches.": [
"manages job posts, candidates, interviews and hires.",
"jere òf, kandida, entèvyou ak anbochaj."
],
"j": [
"d",
"j"
],
"les fichiers s’ouvrent dans Excel ou Google Sheets.": [
"files open in Excel or Google Sheets.",
"fichye yo louvri nan Excel oswa Google Sheets."
],
"nouvelle(s) candidature(s) attendent votre examen.": [
"new application(s) are waiting for your review.",
"nouvo aplikasyon ap tann ou egzamine yo."
],
"poste disponible": [
"position available",
"pòs disponib"
],
"postes disponibles": [
"positions available",
"pòs disponib"
],
"recrutement(s) confirmé(s)": [
"confirmed hire(s)",
"anbochaj konfime"
],
"reçoit peu de candidatures": [
"receives few applications",
"resevwa ti kras aplikasyon"
],
"répondent à tous les critères déclarés.": [
"meet all the stated criteria.",
"ranpli tout kritè yo deklare."
],
"« Mentionné » signifie que le candidat cite ce critère dans sa candidature. À vérifier en entretien.": [
"\"Mentioned\" means the candidate cites this criterion in their application. To be checked in the interview.",
"« Mansyone » vle di kandida a site kritè sa a nan aplikasyon li. Pou verifye nan entèvyou."
],
"À examiner": [
"To review",
"Pou egzamine"
],
"Élargir la zone géographique": [
"Widen the geographic area",
"Elaji zòn jeyografik la"
],
"Équipe": [
"Team",
"Ekip"
],
"Étape": [
"Stage",
"Etap"
],
"Étapes de votre processus": [
"Your process stages",
"Etap pwosesis ou"
],
"Étapes enregistrées.": [
"Stages saved.",
"Etap yo anrejistre."
],
"Évaluateur": [
"Evaluator",
"Evalyatè"
],
"Évaluateurs": [
"Evaluators",
"Evalyatè"
],
"Évaluation enregistrée.": [
"Evaluation saved.",
"Evalyasyon anrejistre."
],
"Évaluation financière": [
"Financial evaluation",
"Evalyasyon finansye"
],
"Évaluation technique": [
"Technical evaluation",
"Evalyasyon teknik"
],
"Évaluations": [
"Evaluations",
"Evalyasyon"
],
"Évaluer": [
"Evaluate",
"Evalye"
],
"Évaluez les compétences techniques et professionnelles.": [
"Evaluate technical and professional skills.",
"Evalye konpetans teknik ak pwofesyonèl."
],
"Événement": [
"Event",
"Evènman"
],
"Avec ALO Institutional": [
"With ALO Institutional",
"Avèk ALO Institutional"
],
"Inclus · bientôt": [
"Included · coming soon",
"Enkli · byento"
]
};
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Employer dashboard 2.0 — panel tabs
(() => { const T = { "Analyse": ["Analysis", "Analiz"], "Évaluation": ["Evaluation", "Evalyasyon"], "Profil": ["Profile", "Pwofil"], "Notes": ["Notes", "Nòt"], "Entretien": ["Interview", "Entèvyou"] };
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Page titles, job categories and small words (language switch)
(() => { const T = {
  "Administration": ["Administration", "Administrasyon"], "Connexion": ["Sign in", "Konekte"], "Créer mon CV": ["Create my CV", "Kreye CV mwen"],
  "Espace employeur": ["Employer space", "Espas anplwayè"], "Grandes entreprises": ["Large companies", "Gwo antrepriz"], "Ma prime d’embauche": ["My hiring bonus", "Prim anbochaj mwen"],
  "Mes préférences": ["My preferences", "Preferans mwen yo"], "Mon Profil ALO": ["My ALO Profile", "Pwofil ALO mwen"], "Mon espace": ["My space", "Espas mwen"],
  "Nos solutions de recrutement": ["Our recruitment solutions", "Solisyon rekritman nou yo"], "Offre d'emploi": ["Job offer", "Òf travay"], "Offres d'emploi": ["Jobs", "Djòb"],
  "Organisations & Institutions": ["Organizations & Institutions", "Òganizasyon & Enstitisyon"], "PME": ["SMEs", "PME"], "Postuler": ["Apply", "Aplike"],
  "Prime d'embauche": ["Hiring bonus", "Prim anbochaj"], "Profil ALO": ["ALO Profile", "Pwofil ALO"], "Publier une offre": ["Post a job", "Pibliye yon òf"],
  "Talents et emplois en Haïti": ["Talent and jobs in Haiti", "Talan ak travay ann Ayiti"], "À propos": ["About", "Konsènan nou"],
  "Commerce": ["Retail", "Komès"], "Santé": ["Health", "Sante"], "Transport": ["Transport", "Transpò"], "Bureau": ["Office", "Biwo"], "Éducation": ["Education", "Edikasyon"],
  "Service client": ["Customer service", "Sèvis kliyan"], "Construction": ["Construction", "Konstriksyon"], "Technologie": ["Technology", "Teknoloji"],
  "Hôtellerie": ["Hospitality", "Otelri"], "Autre": ["Other", "Lòt"], "Langue": ["Language", "Lang"], "sur": ["of", "sou"],
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Account menu and sign-out
(() => { const T = { "Connecté(e) en tant que": ["Signed in as", "Konekte kòm"], "Déconnexion…": ["Signing out…", "N ap dekonekte…"],
  "Vous êtes déconnecté(e).": ["You are signed out.", "Ou dekonekte."], "Mon espace": ["My space", "Espas mwen"], "Mon Profil ALO": ["My ALO Profile", "Pwofil ALO mwen"] };
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Step-by-step job posting form
(() => { const T = {
"Votre entreprise": [
"Your organization",
"Antrepriz ou"
],
"Qui recrute ? Ces informations sont reprises automatiquement pour vos prochaines offres.": [
"Who is hiring? This information is reused automatically for your next job posts.",
"Kiyès k ap anboche? Enfòmasyon sa yo ap reparèt otomatikman pou pwochen òf ou yo."
],
"Le poste": [
"The position",
"Pòs la"
],
"Un intitulé clair attire les bons candidats.": [
"A clear job title attracts the right candidates.",
"Yon tit klè atire bon kandida yo."
],
"Type de contrat": [
"Contract type",
"Kalite kontra"
],
"Lieu et dates": [
"Location and dates",
"Kote ak dat"
],
"Où se trouve le poste, et jusqu’à quand recevez-vous des candidatures ?": [
"Where is the position, and until when do you accept applications?",
"Ki kote pòs la ye, e jiska kilè w ap resevwa aplikasyon?"
],
"Description": [
"Description",
"Deskripsyon"
],
"Écrivez une idée par ligne : les listes sont plus faciles à lire pour les candidats.": [
"Write one idea per line: lists are easier for candidates to read.",
"Ekri yon lide pa liy: lis yo pi fasil pou kandida yo li."
],
"Présentez l’entreprise, l’équipe et la mission du poste.": [
"Introduce the organization, the team and the role's mission.",
"Prezante antrepriz la, ekip la ak misyon pòs la."
],
"Elles servent à trier les candidatures et à trouver les bons profils.": [
"They are used to sort applications and find the right profiles.",
"Yo sèvi pou triye aplikasyon yo epi jwenn bon pwofil yo."
],
"Salaire": [
"Salary",
"Salè"
],
"Confidentiel par défaut. Il sert au calcul des primes d’embauche et à des statistiques anonymes sur l’emploi.": [
"Confidential by default. Used to calculate hiring bonuses and for anonymous employment statistics.",
"Konfidansyèl pa defo. Li sèvi pou kalkile prim anbochaj ak pou estatistik anonim sou travay."
],
"Afficher ce salaire sur l’offre (les offres avec salaire reçoivent souvent plus de candidatures)": [
"Show this salary on the job post (posts with a salary often get more applications)",
"Montre salè sa a sou òf la (òf ki gen salè souvan resevwa plis aplikasyon)"
],
"Candidatures": [
"Applications",
"Aplikasyon"
],
"Comment les candidats vous joignent, et ce que vous voulez recevoir.": [
"How candidates reach you, and what you want to receive.",
"Kijan kandida yo jwenn ou, ak sa ou vle resevwa."
],
"Formule et publication": [
"Package and publishing",
"Fòmil ak piblikasyon"
],
"Champ obligatoire": [
"Required field",
"Chan obligatwa"
],
"ajoutez quelques mots de plus.": [
"add a few more words.",
"ajoute kèk mo anplis."
],
"vérifiez cette valeur.": [
"check this value.",
"verifye valè sa a."
],
"Jusqu’à": [
"Up to",
"Jiska"
],
"Affiché sur l’offre": [
"Shown on the job post",
"Parèt sou òf la"
],
"Non affiché sur l’offre": [
"Not shown on the job post",
"Pa parèt sou òf la"
],
"Vérifiez votre offre": [
"Check your job post",
"Verifye òf ou"
],
"Brouillon enregistré": [
"Draft saved",
"Bouyon anrejistre"
],
"Au moins 10 caractères": [
"At least 10 characters",
"Omwen 10 karaktè"
],
"Publier une autre offre": [
"Post another job",
"Pibliye yon lòt òf"
],
"Ex. Caissier / Caissière": [
"E.g. Cashier",
"Egz. Kesye / Kesyè"
],
"Modifier": [
"Edit",
"Modifye"
]
};
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

(() => { const T = { "Changer": ["Change", "Chanje"] }; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Navigation and opportunities
(() => { const T = { "Trouver une opportunité": ["Find an opportunity", "Jwenn yon opòtinite"], "Recruter": ["Hire", "Rekrite"], "Tarifs": ["Pricing", "Pri"],
  "Toutes les opportunités": ["All opportunities", "Tout opòtinite yo"], "Votre prochaine opportunité commence ici.": ["Your next opportunity starts here.", "Pwochen opòtinite ou kòmanse isit la."],
  "Explorer les opportunités": ["Explore opportunities", "Gade opòtinite yo"], "Toutes": ["All", "Tout"], "Emplois": ["Jobs", "Travay"], "Consultances": ["Consultancies", "Konsiltasyon"],
  "Stages": ["Internships", "Estaj"], "Missions de projet": ["Project assignments", "Misyon pwojè"], "opportunité": ["opportunity", "opòtinite"], "opportunités": ["opportunities", "opòtinite"],
  "Touchez « Enregistrer » sur une offre pour la retrouver ici.": ["Tap \"Save\" on a job to find it here.", "Peze « Anrejistre » sou yon òf pou w jwenn li isit la."],
  "Aucune opportunité ne correspond à vos filtres.": ["No opportunity matches your filters.", "Okenn opòtinite pa koresponn ak filt ou yo."],
  "Essayez un autre mot, une autre ville ou retirez un filtre.": ["Try another word, another city or remove a filter.", "Eseye yon lòt mo, yon lòt vil oswa retire yon filt."],
  "Les premières opportunités arrivent bientôt.": ["The first opportunities are coming soon.", "Premye opòtinite yo ap rive byento."],
  "ALO est en cours de lancement. Créez votre Profil ALO dès maintenant : vous serez prêt(e) à postuler dès la publication des premières offres.": ["ALO is launching. Create your ALO Profile now: you'll be ready to apply as soon as the first offers are published.", "ALO ap lanse. Kreye Pwofil ALO ou kounye a: w ap pare pou aplike depi premye òf yo pibliye."],
  "Type d’opportunité": ["Opportunity type", "Kalite opòtinite"], "Navigation principale": ["Main navigation", "Navigasyon prensipal"] };
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Homepage (4 sections)
(() => { const T = {
  "Emplois · Consultances · Stages · Missions de projet": ["Jobs · Consultancies · Internships · Project assignments", "Travay · Konsiltasyon · Estaj · Misyon pwojè"],
  "Des opportunités en Haïti, consultables sans compte. Postulez en quelques minutes avec votre Profil ALO.": ["Opportunities in Haiti, open to browse without an account. Apply in minutes with your ALO Profile.", "Opòtinite ann Ayiti ou ka gade san kont. Aplike nan kèk minit ak Pwofil ALO ou."],
  "Que cherchez-vous ?": ["What are you looking for?", "Kisa w ap chèche?"], "Métier ou mot-clé": ["Job or keyword", "Metye oswa mo kle"], "Ex. comptable, chauffeur, développeur": ["E.g. accountant, driver, developer", "Egz. kontab, chofè, devlopè"],
  "Ex. Port-au-Prince": ["E.g. Port-au-Prince", "Egz. Pòtoprens"], "Rechercher": ["Search", "Chèche"], "Comment ça marche": ["How it works", "Kijan sa mache"],
  "Cherchez par métier, ville ou type de contrat.": ["Search by job, city or contract type.", "Chèche pa metye, vil oswa kalite kontra."],
  "Envoyez votre candidature avec votre Profil ALO.": ["Send your application with your ALO Profile.", "Voye aplikasyon ou ak Pwofil ALO ou."],
  "Prime d’embauche : jusqu’à 5 % du premier salaire mensuel, sur les emplois éligibles.": ["Hiring bonus: up to 5% of the first monthly salary, on eligible jobs.", "Prim anbochaj: jiska 5 % nan premye salè mansyèl, sou travay ki kalifye."],
  "Programme en préparation": ["Program in preparation", "Pwogram an preparasyon"], "Voir les conditions": ["See the conditions", "Gade kondisyon yo"],
  "Votre parcours, prêt pour votre prochaine opportunité.": ["Your background, ready for your next opportunity.", "Pakou w, pare pou pwochen opòtinite ou."],
  "Rassemblez vos expériences et vos compétences dans votre Profil ALO pour postuler plus facilement.": ["Bring your experience and skills together in your ALO Profile to apply more easily.", "Mete eksperyans ak konpetans ou ansanm nan Pwofil ALO ou pou aplike pi fasil."],
  "Présentez votre expérience.": ["Present your experience.", "Prezante eksperyans ou."], "Réutilisez votre profil pour vos candidatures.": ["Reuse your profile for your applications.", "Reitilize pwofil ou pou aplikasyon ou yo."],
  "Suivez vos candidatures au même endroit.": ["Track your applications in one place.", "Swiv aplikasyon ou yo nan menm kote a."], "Exemple": ["Sample", "Egzanp"],
  "Exemple de Profil ALO": ["Sample ALO Profile", "Egzanp Pwofil ALO"], "Exemple : avec le Profil ALO, en une minute": ["Sample: with the ALO Profile, in one minute", "Egzanp: ak Pwofil ALO, nan yon minit"],
  "Recrutez plus simplement.": ["Hire more simply.", "Rekrite pi fasil."], "Publiez une offre en quelques minutes, à partir de 49 $ US.": ["Post a job in minutes, from US$49.", "Pibliye yon òf nan kèk minit, apati 49 $ US."],
  "Suivez chaque candidature, de la réception à l’embauche.": ["Follow each application, from receipt to hire.", "Swiv chak aplikasyon, depi li rive jiska anbochaj."],
  "Voyez quels critères de votre offre chaque candidat remplit.": ["See which of your job's criteria each candidate meets.", "Wè ki kritè nan òf ou chak kandida ranpli."],
  "Exemple de suivi des candidatures": ["Sample application tracking", "Egzanp swivi aplikasyon"],
  "Chaque critère indique s’il est mentionné dans la candidature. La décision vous appartient.": ["Each criterion shows whether it is mentioned in the application. The decision is yours.", "Chak kritè montre si yo mansyone l nan aplikasyon an. Desizyon an se pou ou."],
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Hiring bonus conditions
(() => { const T = { "Sur les emplois éligibles.": ["On eligible jobs.", "Sou travay ki kalifye."], "Conditions de la Prime d’embauche": ["Hiring bonus conditions", "Kondisyon Prim anbochaj la"],
  "Aucune prime n’est versée pour le moment.": ["No bonus is paid yet.", "Pa gen okenn prim ki peye pou kounye a."],
  "La prime concerne les offres d’emploi salarié éligibles publiées sur ALO. Les consultances, stages et missions de projet n’en bénéficient pas, sauf règles publiées plus tard.": ["The bonus applies to eligible salaried job offers published on ALO. Consultancies, internships and project assignments are not included, unless rules are published later.", "Prim nan konsène òf travay salarye ki kalifye e ki pibliye sou ALO. Konsiltasyon, estaj ak misyon pwojè pa ladan, sof si yo pibliye lòt règ pita."],
  "Elle n’est versée qu’après vérification de l’embauche par l’employeur et du premier salaire reçu.": ["It is paid only after the employer confirms the hire and the first salary received is verified.", "Yo peye l sèlman apre patwon an konfime anbochaj la e yo verifye premye salè ou resevwa a."],
  "Le montant peut atteindre 5 % du premier salaire mensuel et peut être plafonné.": ["The amount can reach 5% of the first monthly salary and may be capped.", "Montan an ka rive 5 % nan premye salè mansyèl la e li ka gen yon limit."],
  "La personne qui vous a recommandé(e) peut aussi recevoir une récompense. Son montant ne dépend pas de votre salaire et votre salaire ne lui est jamais communiqué.": ["The person who referred you may also receive a reward. Its amount does not depend on your salary, and your salary is never shared with them.", "Moun ki te rekòmande w la ka resevwa yon rekonpans tou. Montan an pa depann de salè ou, e yo pa janm di l salè ou."],
  "Les règles détaillées (emplois éligibles, mode de calcul, plafonds, délais et moyens de versement, recommandations, cas particuliers) seront publiées ici avec un exemple chiffré avant le lancement du programme.": ["Detailed rules (eligible jobs, calculation, caps, payment timing and methods, referrals, special cases) will be published here with a worked example before the program launches.", "Règ detaye yo (travay ki kalifye, kalkil, limit, delè ak fason peman, rekòmandasyon, ka espesyal) ap pibliye isit la ak yon egzanp chif anvan pwogram nan lanse."] };
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Pricing comparison
(() => { const T = { "Comparer les formules": ["Compare packages", "Konpare fòmil yo"], "Fonctionnalité": ["Feature", "Fonksyon"], "Inclus": ["Included", "Enkli"], "Option": ["Add-on", "Opsyon"], "Bientôt": ["Coming soon", "Byento"],
  "« Inclus » : disponible dans la formule. « Option » : à ajouter, au prix indiqué ou sur devis. « Bientôt » : prévu, pas encore disponible — jamais facturé avant sa disponibilité.": ["\"Included\": available in the package. \"Add-on\": can be added, at the listed price or on quote. \"Coming soon\": planned, not yet available — never charged before it is.", "« Enkli »: disponib nan fòmil la. « Opsyon »: pou ajoute, nan pri ki endike a oswa sou devi. « Byento »: prevwa, poko disponib — nou pa janm fè w peye l anvan li disponib."],
  "Sous-total chiffré": ["Priced subtotal", "Sou-total ki gen pri"], "À chiffrer sur devis": ["To be priced on quote", "Pou fikse pri sou devi"],
  "Total non confirmé : l’équipe ALO vous enverra le montant final avant tout paiement.": ["Total not confirmed: the ALO team will send you the final amount before any payment.", "Total la poko konfime: ekip ALO a ap voye montan final la ba ou anvan nenpòt peman."],
  "Total": ["Total", "Total"], "bientôt": ["coming soon", "byento"], "Non inclus": ["Not included", "Pa enkli"] };
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Employer audience pages
(() => { const T = {
  "Publiez votre offre en quelques minutes et recevez des candidatures claires, à partir de 49 $ US.": ["Post your job in minutes and receive clear applications, from US$49.", "Pibliye òf ou nan kèk minit epi resevwa aplikasyon klè, apati 49 $ US."],
  "Une offre en ligne en quelques minutes, sans abonnement.": ["A job online in minutes, no subscription.", "Yon òf an liy nan kèk minit, san abònman."],
  "Chaque candidature avec l’expérience et les compétences du candidat.": ["Every application with the candidate's experience and skills.", "Chak aplikasyon ak eksperyans ak konpetans kandida a."],
  "Un suivi simple, de la réception à l’embauche.": ["Simple tracking, from receipt to hire.", "Yon swivi senp, depi li rive jiska anbochaj."],
  "Plusieurs postes, plusieurs recruteurs, un seul espace pour suivre chaque recrutement.": ["Several positions, several recruiters, one space to follow every recruitment.", "Plizyè pòs, plizyè rekritè, yon sèl espas pou swiv chak rekritman."],
  "Plusieurs postes dans une même offre.": ["Several positions in one job post.", "Plizyè pòs nan yon sèl òf."], "Votre équipe RH collabore sur chaque candidature.": ["Your HR team collaborates on every application.", "Ekip RH ou travay ansanm sou chak aplikasyon."],
  "Entretiens, comparaisons et statistiques au même endroit.": ["Interviews, comparisons and analytics in one place.", "Entèvyou, konparezon ak estatistik nan menm kote a."],
  "ONG, fondations, organisations internationales, agences de développement et institutions publiques : des recrutements documentés, du dépôt à la décision.": ["NGOs, foundations, international organizations, development agencies and public institutions: documented recruitment, from submission to decision.", "ONG, fondasyon, òganizasyon entènasyonal, ajans devlopman ak enstitisyon piblik: rekritman dokimante, depi depo jiska desizyon."],
  "Offres d’emploi, de stage et de consultance.": ["Job, internship and consulting offers.", "Òf travay, estaj ak konsiltasyon."],
  "Grilles d’évaluation pondérées et déclarations de conflit d’intérêts.": ["Weighted evaluation matrices and conflict of interest declarations.", "Griy evalyasyon ak pwa ak deklarasyon konfli enterè."],
  "Devis, facturation sur contrat et rapports exportables.": ["Quotes, contract billing and exportable reports.", "Devi, faktirasyon sou kontra ak rapò pou ekspòte."],
  "ou publier une offre": ["or post a job", "oswa pibliye yon òf"], "Voir les tarifs et la comparaison": ["See pricing and comparison", "Gade pri yo ak konparezon an"],
  "Formules à partir de 49 $ US · sans abonnement · aucun frais en cas d’embauche.": ["Packages from US$49 · no subscription · no fee when you hire.", "Fòmil apati 49 $ US · san abònman · pa gen frè lè w anboche."],
  "Vous êtes aussi :": ["You might also be:", "Ou ka se tou:"], "Votre équipe": ["Your team", "Ekip ou"],
  "3 évaluateurs · notes indépendantes · conflits d’intérêts déclarés": ["3 evaluators · independent scores · conflicts of interest declared", "3 evalyatè · nòt endepandan · konfli enterè deklare"],
  "Expérience pertinente": ["Relevant experience", "Eksperyans ki koresponn"], "Qualifications techniques": ["Technical qualifications", "Kalifikasyon teknik"], "Méthodologie": ["Methodology", "Metodoloji"], "Exigences linguistiques": ["Language requirements", "Egzijans lang"] };
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

// Help, privacy, terms
(() => { const T = {
"Chercheurs d’emploi": [
"Job seekers",
"Moun k ap chèche travay"
],
"Faut-il un compte pour voir les offres ?": [
"Do I need an account to see the jobs?",
"Èske m bezwen yon kont pou m wè òf yo?"
],
"Non. Toutes les opportunités sont consultables sans compte. Un compte gratuit est nécessaire pour postuler, enregistrer des offres et suivre vos candidatures.": [
"No. Every opportunity can be viewed without an account. A free account is needed to apply, save jobs and track your applications.",
"Non. Ou ka gade tout opòtinite yo san kont. Ou bezwen yon kont gratis pou aplike, anrejistre òf epi swiv aplikasyon ou yo."
],
"Comment créer mon Profil ALO ?": [
"How do I create my ALO Profile?",
"Kijan pou m kreye Pwofil ALO mwen?"
],
"Choisissez « Créer mon Profil ALO », créez votre compte avec votre e-mail ou LinkedIn, puis importez votre CV, laissez-vous guider ou remplissez le profil vous-même. Il est enregistré automatiquement.": [
"Choose \"Create my ALO Profile\", create your account with your email or LinkedIn, then import your CV, follow the guide or fill in the profile yourself. It is saved automatically.",
"Chwazi « Kreye Pwofil ALO mwen », kreye kont ou ak imèl ou oswa LinkedIn, epi enpòte CV ou, swiv gid la oswa ranpli pwofil la ou menm. Li anrejistre otomatikman."
],
"Comment suivre mes candidatures ?": [
"How do I track my applications?",
"Kijan pou m swiv aplikasyon mwen yo?"
],
"Dans « Mon espace » : chaque candidature affiche son statut (envoyée, consultée, entretien, retenue ou non retenue).": [
"In \"My space\": each application shows its status (sent, viewed, interview, selected or not selected).",
"Nan « Espas mwen »: chak aplikasyon montre estati li (voye, gade, entèvyou, chwazi oswa pa chwazi)."
],
"Comment me déconnecter ?": [
"How do I sign out?",
"Kijan pou m dekonekte?"
],
"Ouvrez le menu « Mon espace » en haut de la page, puis « Se déconnecter ». Sur téléphone, le bouton se trouve en bas du menu.": [
"Open the \"My space\" menu at the top of the page, then \"Sign out\". On a phone, the button is at the bottom of the menu.",
"Louvri meni « Espas mwen » anwo paj la, epi « Dekonekte ». Sou telefòn, bouton an anba meni an."
],
"Employeurs": [
"Employers",
"Anplwayè"
],
"Comment publier une offre ?": [
"How do I post a job?",
"Kijan pou m pibliye yon òf?"
],
"Choisissez « Publier une offre », suivez les étapes et vérifiez le récapitulatif. L’équipe ALO vérifie chaque offre avant sa mise en ligne.": [
"Choose \"Post a job\", follow the steps and check the summary. The ALO team reviews every job before it goes live.",
"Chwazi « Pibliye yon òf », swiv etap yo epi verifye rezime a. Ekip ALO a verifye chak òf anvan li parèt."
],
"Comment se passe le paiement ?": [
"How does payment work?",
"Kijan peman an fèt?"
],
"Il n’y a pas encore de paiement en ligne : l’équipe ALO vous contacte pour le paiement et vous envoie la facture. Aucun frais n’est facturé lorsque vous embauchez.": [
"There is no online payment yet: the ALO team contacts you for payment and sends you the invoice. No fee is charged when you hire.",
"Poko gen peman sou entènèt: ekip ALO a ap kontakte w pou peman an epi l ap voye fakti a ba ou. Pa gen frè lè w anboche."
],
"Quelle formule choisir ?": [
"Which package should I choose?",
"Ki fòmil pou m chwazi?"
],
"Comparez les formules sur la page « Tarifs ». Pour plusieurs offres, une consultance ou un besoin institutionnel, demandez un devis.": [
"Compare packages on the \"Pricing\" page. For several jobs, a consultancy or an institutional need, request a quote.",
"Konpare fòmil yo sou paj « Pri ». Pou plizyè òf, yon konsiltasyon oswa yon bezwen enstitisyonèl, mande yon devi."
],
"Prime d’embauche": [
"Hiring bonus",
"Prim anbochaj"
],
"La prime est-elle déjà disponible ?": [
"Is the bonus available yet?",
"Èske prim nan deja disponib?"
],
"Non. Le programme est en préparation et aucune prime n’est versée pour le moment. Les conditions détaillées seront publiées avant son lancement.": [
"No. The program is in preparation and no bonus is paid yet. Detailed conditions will be published before it launches.",
"Non. Pwogram nan an preparasyon e pa gen okenn prim ki peye pou kounye a. Kondisyon detaye yo ap pibliye anvan li lanse."
],
"Une question ?": [
"A question?",
"Ou gen yon kesyon?"
],
"Écrire à l’équipe ALO": [
"Write to the ALO team",
"Ekri ekip ALO a"
],
"Version provisoire": [
"Provisional version",
"Vèsyon pwovizwa"
],
"Ce texte sera complété et validé avant le lancement officiel.": [
"This text will be completed and validated before the official launch.",
"Tèks sa a ap konplete e valide anvan lansman ofisyèl la."
],
"Les informations que nous recueillons": [
"The information we collect",
"Enfòmasyon nou ranmase"
],
"Votre e-mail et, si vous utilisez LinkedIn, votre nom et votre photo. Les informations de votre Profil ALO et de vos candidatures (expériences, formations, compétences, documents envoyés). Pour les employeurs : les informations de l’entreprise et des offres.": [
"Your email and, if you use LinkedIn, your name and photo. The information in your ALO Profile and your applications (experience, education, skills, documents sent). For employers: company and job information.",
"Imèl ou e, si w itilize LinkedIn, non ou ak foto ou. Enfòmasyon nan Pwofil ALO ou ak aplikasyon ou yo (eksperyans, fòmasyon, konpetans, dokiman ou voye). Pou anplwayè: enfòmasyon sou antrepriz la ak òf yo."
],
"Pour la Prime d’embauche, lorsqu’elle sera lancée : le salaire déclaré, les justificatifs d’embauche et de salaire, et le numéro utilisé pour le versement.": [
"For the hiring bonus, once launched: the declared salary, proof of hire and salary, and the number used for payment.",
"Pou Prim anbochaj la, lè l lanse: salè ou deklare, prèv anbochaj ak salè, ak nimewo pou peman an."
],
"Qui peut voir vos informations": [
"Who can see your information",
"Kiyès ki ka wè enfòmasyon ou"
],
"Un employeur ne voit que les candidatures envoyées à ses propres offres. Votre Profil ALO n’est visible par les recruteurs que si vous l’avez choisi (« Public » ou « Recruteurs »), et jamais avec vos coordonnées.": [
"An employer only sees applications sent to their own jobs. Recruiters can see your ALO Profile only if you chose it (\"Public\" or \"Recruiters\"), and never with your contact details.",
"Yon anplwayè wè sèlman aplikasyon ki voye pou pwòp òf li. Rekritè ka wè Pwofil ALO ou sèlman si w chwazi sa (« Piblik » oswa « Rekritè »), e jamè ak kowòdone ou."
],
"Les salaires et justificatifs ne sont accessibles qu’à l’équipe de vérification ALO. Ils ne sont jamais publiés et jamais montrés à la personne qui vous a recommandé(e).": [
"Salaries and proofs are only accessible to the ALO verification team. They are never published and never shown to the person who referred you.",
"Se sèlman ekip verifikasyon ALO a ki ka wè salè ak prèv yo. Nou pa janm pibliye yo e nou pa janm montre yo moun ki te rekòmande w la."
],
"ALO ne vend pas vos données. Les invitations d’organisations ne vous sont envoyées que si vous les avez acceptées dans « Mes préférences ».": [
"ALO does not sell your data. Invitations from organizations are sent to you only if you accepted them in \"My preferences\".",
"ALO pa vann done ou. Envitasyon òganizasyon yo voye ba ou sèlman si w aksepte yo nan « Preferans mwen yo »."
],
"Vos droits": [
"Your rights",
"Dwa ou"
],
"Vous pouvez consulter et modifier votre profil à tout moment. Pour obtenir une copie de vos données ou demander leur suppression, écrivez à l’équipe ALO.": [
"You can view and edit your profile at any time. To get a copy of your data or ask for it to be deleted, write to the ALO team.",
"Ou ka gade epi modifye pwofil ou nenpòt ki lè. Pou jwenn yon kopi done ou oswa mande pou yo efase, ekri ekip ALO a."
],
"Le site enregistre sur votre appareil votre langue et vos brouillons. Ces brouillons sont effacés lorsque vous vous déconnectez.": [
"The site saves your language and drafts on your device. These drafts are erased when you sign out.",
"Sit la anrejistre lang ou ak bouyon ou sou aparèy ou. Bouyon sa yo efase lè w dekonekte."
],
"Conditions d’utilisation": [
"Terms of use",
"Kondisyon itilizasyon"
],
"Utiliser ALO": [
"Using ALO",
"Itilize ALO"
],
"ALO met en relation des personnes qui cherchent une opportunité et des employeurs en Haïti. La consultation des offres est gratuite et ne demande pas de compte.": [
"ALO connects people looking for an opportunity with employers in Haiti. Browsing jobs is free and requires no account.",
"ALO mete moun k ap chèche yon opòtinite an kontak ak anplwayè ann Ayiti. Gade òf yo gratis e ou pa bezwen kont."
],
"Vous vous engagez à fournir des informations exactes. Les compétences et expériences d’un profil sont déclarées par la personne elle-même, sauf mention contraire.": [
"You agree to provide accurate information. The skills and experience in a profile are declared by the person themselves, unless stated otherwise.",
"Ou dakò bay enfòmasyon egzak. Se moun nan menm ki deklare konpetans ak eksperyans nan yon pwofil, sof si yo di lòt bagay."
],
"Les offres doivent correspondre à de vrais postes et respecter la loi. L’équipe ALO peut refuser ou retirer une offre.": [
"Jobs must be real positions and comply with the law. The ALO team may refuse or remove a job.",
"Òf yo dwe koresponn ak vrè pòs e respekte lalwa. Ekip ALO a ka refize oswa retire yon òf."
],
"Les formules sont des frais de publication et de services, sans abonnement. Aucun frais n’est facturé en cas d’embauche. Les montants marqués « sur devis » sont confirmés par écrit avant tout paiement.": [
"Packages are posting and service fees, with no subscription. No fee is charged when you hire. Amounts marked \"on quote\" are confirmed in writing before any payment.",
"Fòmil yo se frè piblikasyon ak sèvis, san abònman. Pa gen frè lè w anboche. Montan ki make « sou devi » konfime alekri anvan nenpòt peman."
],
"Le programme est en préparation. Ses conditions seront publiées avant son lancement ; une embauche ne donne pas automatiquement droit à une prime.": [
"The program is in preparation. Its conditions will be published before it launches; a hire does not automatically entitle you to a bonus.",
"Pwogram nan an preparasyon. Kondisyon li yo ap pibliye anvan li lanse; yon anbochaj pa bay dwa otomatikman pou yon prim."
],
"Aide": [
"Help",
"Èd"
],
"Confidentialité": [
"Privacy",
"Konfidansyalite"
]
};
  for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

(() => { const T = { "Agent(e) service client": ["Customer service agent", "Ajan sèvis kliyan"] }; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

(() => { const T = {
"Impossible de charger votre espace employeur. Vérifiez votre connexion internet, puis réessayez.": [
"We couldn't load your employer workspace. Check your internet connection, then try again.",
"Nou pa t ka chaje espas anplwayè ou a. Verifye koneksyon entènèt ou, epi eseye ankò."
],
"Réessayer": [
"Try again",
"Eseye ankò"
],
"vos offres": [
"your job posts",
"òf ou yo"
],
"votre forfait": [
"your plan",
"fòfè ou"
],
"les entretiens": [
"interviews",
"entèvyou yo"
],
"les candidatures": [
"applications",
"aplikasyon yo"
],
"votre équipe": [
"your team",
"ekip ou"
],
"mentionnent tous les critères déclarés.": [
"mention all the stated criteria.",
"mansyone tout kritè ki deklare yo."
],
"Envoi en cours…": [
"Sending…",
"N ap voye…"
],
"Aller à": [
"Go to",
"Ale nan"
],
"Certaines informations n’ont pas pu être chargées": [
"Some information could not be loaded",
"Gen kèk enfòmasyon ki pa t ka chaje"
],
"Vérifiez votre connexion internet.": [
"Check your internet connection.",
"Verifye koneksyon entènèt ou."
],
"Offres actives": [
"Active job posts",
"Òf ki aktif"
],
"Aucune offre active pour l’instant.": [
"No active job posts yet.",
"Pa gen òf ki aktif pou kounye a."
],
"Afficher moins": [
"Show less",
"Montre mwens"
],
"Voir les autres actions": [
"See other actions",
"Wè lòt aksyon yo"
],
"Critères mentionnés": [
"Criteria mentioned",
"Kritè ki mansyone"
],
"critères mentionnés": [
"criteria mentioned",
"kritè ki mansyone"
],
"Mentionne tous les critères": [
"Mentions all criteria",
"Mansyone tout kritè yo"
],
"attire des candidats qui mentionnent vos critères": [
"attracts candidates who mention your criteria",
"atire kandida ki mansyone kritè ou yo"
],
"Mentionnent au moins la moitié des critères": [
"Mention at least half the criteria",
"Mansyone omwen mwatye kritè yo"
],
"Mentionne": [
"Mentions",
"Mansyone"
],
"« Mentionné » signifie que le candidat cite ce critère dans sa candidature. Ce n’est pas une vérification.": [
"“Mentioned” means the candidate cites this criterion in their application. It is not a verification.",
"« Mansyone » vle di kandida a site kritè sa a nan aplikasyon li. Se pa yon verifikasyon."
],
"Aucun candidat ne correspond à ces filtres.": [
"No candidate matches these filters.",
"Okenn kandida pa koresponn ak filt sa yo."
],
"Effacer les filtres": [
"Clear filters",
"Efase filt yo"
],
"Retour aux candidats": [
"Back to candidates",
"Retounen nan kandida yo"
],
"Brouillon conservé — pas encore partagé avec l’équipe.": [
"Draft kept — not yet shared with the team.",
"Bouyon an konsève — li poko pataje ak ekip la."
],
"L’étape n’a pas pu être modifiée.": [
"The stage could not be changed.",
"Etap la pa t ka chanje."
],
"Les notes n’ont pas pu être chargées.": [
"Notes could not be loaded.",
"Nòt yo pa t ka chaje."
],
"Informations à jour.": [
"Information up to date.",
"Enfòmasyon yo ajou."
],
"Informations enregistrées.": [
"Information saved.",
"Enfòmasyon yo anrejistre."
],
"Cette embauche était déjà confirmée.": [
"This hire was already confirmed.",
"Anbochaj sa a te deja konfime."
],
"Embauche confirmée.": [
"Hire confirmed.",
"Anbochaj konfime."
],
"Note ajoutée.": [
"Note added.",
"Nòt ajoute."
]
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

(() => { const T = {
"Fonctionnalités": [
"Features",
"Fonksyonalite"
],
"Toutes les fonctionnalités": [
"All features",
"Tout fonksyonalite yo"
],
"Ce que vous pouvez faire sur alo.ht aujourd’hui, et ce qui arrive bientôt.": [
"What you can do on alo.ht today, and what is coming soon.",
"Sa ou ka fè sou alo.ht jodi a, ak sa k ap vini byento."
],
"Candidats": [
"Candidates",
"Kandida"
],
"Employeurs": [
"Employers",
"Anplwayè"
],
"L’IA chez ALO": [
"AI at ALO",
"IA nan ALO"
],
"Trouver": [
"Find",
"Jwenn"
],
"Consulter les opportunités sans compte": [
"Browse opportunities without an account",
"Gade opòtinite yo san kont"
],
"Rechercher par métier, ville ou type de contrat": [
"Search by job, city or contract type",
"Chèche pa metye, vil oswa kalite kontra"
],
"Enregistrer des opportunités": [
"Save opportunities",
"Anrejistre opòtinite"
],
"Recevoir des opportunités recommandées selon vos préférences": [
"Get opportunities recommended from your preferences",
"Resevwa opòtinite yo rekòmande dapre preferans ou"
],
"Votre Profil ALO": [
"Your ALO Profile",
"Pwofil ALO ou"
],
"Créer votre profil en 7 sections guidées, enregistré automatiquement": [
"Build your profile in 7 guided sections, saved automatically",
"Kreye pwofil ou an 7 seksyon gide, ki anrejistre otomatikman"
],
"Postuler avec votre profil, sans tout ressaisir": [
"Apply with your profile, without retyping everything",
"Aplike ak pwofil ou, san ou pa retape tout bagay"
],
"Choisir si les recruteurs peuvent voir votre profil": [
"Choose whether recruiters can see your profile",
"Chwazi si rekritè yo ka wè pwofil ou"
],
"Créer un CV à partir de votre profil": [
"Create a CV from your profile",
"Kreye yon CV apati pwofil ou"
],
"Se connecter avec LinkedIn (nom, photo et e-mail seulement)": [
"Sign in with LinkedIn (name, photo and email only)",
"Konekte ak LinkedIn (non, foto ak imèl sèlman)"
],
"Suivre": [
"Track",
"Swiv"
],
"Suivre l’étape de chacune de vos candidatures": [
"Track the stage of each of your applications",
"Swiv etap chak aplikasyon ou"
],
"Déclarer votre embauche": [
"Report your hire",
"Deklare anbochaj ou"
],
"Toutes les formules": [
"All packages",
"Tout fòmil yo"
],
"En option": [
"Optional",
"An opsyon"
],
"Comment ça fonctionne": [
"How it works",
"Kijan sa mache"
],
"Gratuit pour les candidats.": [
"Free for candidates.",
"Gratis pou kandida yo."
],
"Jusqu’à 5 % du premier salaire mensuel, sur les emplois éligibles.": [
"Up to 5% of the first monthly salary, on eligible jobs.",
"Jiska 5 % premye salè mansyèl la, sou djòb ki kalifye yo."
],
"Formules à partir de 49 $ US, sans abonnement. Chaque outil indique la formule qui l’inclut.": [
"Packages from US$49, no subscription. Each tool shows which package includes it.",
"Fòmil apati 49 $ US, san abònman. Chak zouti montre ki fòmil ki genyen li."
],
"L’IA aide à rédiger et à organiser. Elle n’invente jamais d’expérience, de diplôme ou de chiffre, et elle ne décide jamais à la place d’une personne.": [
"AI helps write and organize. It never invents experience, degrees or figures, and it never decides in a person's place.",
"IA ede ekri ak òganize. Li pa janm envante eksperyans, diplòm oswa chif, e li pa janm deside nan plas yon moun."
],
"Assistant IA pour le CV": [
"AI CV assistant",
"Asistan IA pou CV"
],
"Reformule, réorganise et corrige votre CV, ou l’adapte à une offre.": [
"Rewords, reorganizes and corrects your CV, or tailors it to a job.",
"Refòmile, reòganize epi korije CV ou, oswa adapte l ak yon òf."
],
"Ce qu’il utilise": [
"What it uses",
"Sa li itilize"
],
"Ce qu’il produit": [
"What it produces",
"Sa li bay"
],
"Ce qu’elle utilise": [
"What it uses",
"Sa li itilize"
],
"Ce qu’elle produit": [
"What it produces",
"Sa li bay"
],
"Ses limites": [
"Its limits",
"Limit li"
],
"Uniquement les informations de votre CV ou de votre Profil ALO, et l’offre si vous l’ajoutez.": [
"Only the information in your CV or ALO Profile, and the job post if you add it.",
"Sèlman enfòmasyon ki nan CV ou oswa Pwofil ALO ou, ak òf la si w ajoute l."
],
"Des propositions de texte. Vous choisissez de les garder, de les modifier ou de les ignorer.": [
"Text suggestions. You choose to keep, edit or ignore them.",
"Pwopozisyon tèks. Se ou ki chwazi kenbe yo, chanje yo oswa kite yo."
],
"Il peut se tromper : relisez toujours avant d’envoyer. Il n’ajoute rien que vous n’avez pas écrit.": [
"It can make mistakes: always reread before sending. It adds nothing you didn't write.",
"Li ka fè erè: toujou reli anvan ou voye. Li pa ajoute anyen ou pa t ekri."
],
"Les informations que vous saisissez sur le poste.": [
"The information you enter about the position.",
"Enfòmasyon ou antre sou pòs la."
],
"Une proposition de description, que vous relisez et modifiez avant de publier.": [
"A suggested description, which you reread and edit before publishing.",
"Yon pwopozisyon deskripsyon, ou reli epi chanje anvan ou pibliye."
],
"Il n’invente ni salaire, ni avantage, ni exigence que vous n’avez pas indiqués.": [
"It never invents a salary, benefit or requirement you didn't give.",
"Li pa envante ni salè, ni avantaj, ni egzijans ou pa t bay."
],
"Indique quels critères de votre offre chaque candidat mentionne.": [
"Shows which criteria from your job post each candidate mentions.",
"Montre ki kritè nan òf ou chak kandida mansyone."
],
"Les compétences demandées dans votre offre et ce que le candidat a écrit dans sa candidature.": [
"The skills requested in your job post and what the candidate wrote in their application.",
"Konpetans ou mande nan òf ou ak sa kandida a ekri nan aplikasyon li."
],
"Pour chaque critère : « Mentionné » ou « Non mentionné », avec des points à vérifier en entretien.": [
"For each criterion: “Mentioned” or “Not mentioned”, with points to check in the interview.",
"Pou chak kritè: « Mansyone » oswa « Pa mansyone », ak pwen pou verifye nan entèvyou."
],
"C’est une comparaison de mots, pas une IA : un synonyme peut être manqué, et « mentionné » ne veut pas dire vérifié. Aucun candidat n’est écarté automatiquement.": [
"It is a word comparison, not AI: a synonym can be missed, and “mentioned” does not mean verified. No candidate is rejected automatically.",
"Se yon konparezon mo, se pa IA: yon sinonim ka pase, e « mansyone » pa vle di verifye. Pa gen okenn kandida yo retire otomatikman."
],
"Publier et suivre": [
"Post and track",
"Pibliye epi swiv"
],
"Trier et analyser": [
"Sort and analyze",
"Triye epi analize"
],
"Entretiens et décisions": [
"Interviews and decisions",
"Entèvyou ak desizyon"
],
"Équipe et rapports": [
"Team and reports",
"Ekip ak rapò"
],
"Diffusion et données": [
"Reach and data",
"Difizyon ak done"
],
"Réduire": [
"Show less",
"Redwi"
],
"Voir les": [
"See the",
"Wè"
],
"fonctionnalités": [
"features",
"fonksyonalite yo"
],
"dont": [
"including",
"ladan yo"
],
"bientôt": [
"coming soon",
"byento"
],
"par offre": [
"per job post",
"pou chak òf"
],
"Prix": [
"Price",
"Pri"
],
"Offres et durée": [
"Job posts and duration",
"Òf ak dire"
],
"Sur mesure": [
"Tailored",
"Sou mezi"
],
"Comparer les formules en détail": [
"Compare packages in detail",
"Konpare fòmil yo an detay"
],
"Voir toutes les actions": [
"See all actions",
"Wè tout aksyon yo"
],
"Voir tout ce que vous pouvez faire": [
"See everything you can do",
"Wè tout sa ou ka fè"
],
"Créez votre profil en 7 sections guidées, enregistré automatiquement.": [
"Build your profile in 7 guided sections, saved automatically.",
"Kreye pwofil ou an 7 seksyon gide, ki anrejistre otomatikman."
],
"Recevez des opportunités recommandées selon vos préférences.": [
"Get opportunities recommended from your preferences.",
"Resevwa opòtinite yo rekòmande dapre preferans ou."
],
"Enregistrez les opportunités qui vous intéressent.": [
"Save the opportunities that interest you.",
"Anrejistre opòtinite ki enterese w yo."
],
"Choisissez si les recruteurs peuvent voir votre profil.": [
"Choose whether recruiters can see your profile.",
"Chwazi si rekritè yo ka wè pwofil ou."
],
"Créez un CV à partir de votre profil.": [
"Create a CV from your profile.",
"Kreye yon CV apati pwofil ou."
],
"Déclarez votre embauche pour la Prime d’embauche.": [
"Report your hire for the Hiring Bonus.",
"Deklare anbochaj ou pou Prim anbochaj la."
],
"Découvrir toutes les fonctionnalités": [
"Discover all features",
"Dekouvri tout fonksyonalite yo"
],
"Voyez quels critères de votre offre chaque candidat mentionne.": [
"See which criteria from your job post each candidate mentions.",
"Wè ki kritè nan òf ou chak kandida mansyone."
]
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

(() => { const T = {
"Publiez une offre et suivez vos candidatures.": [
"Post a job and track your applications.",
"Pibliye yon òf epi swiv aplikasyon ou yo."
],
"Triez, comparez et organisez vos entretiens en équipe.": [
"Sort, compare and organize your interviews as a team.",
"Triye, konpare epi òganize entèvyou ou yo an ekip."
],
"Évaluez en comité, avec grilles et rapports.": [
"Evaluate as a committee, with scoring grids and reports.",
"Evalye an komite, ak griy ak rapò."
],
"Tout ce qu’inclut": [
"Everything in",
"Tout sa ki nan"
],
"plus :": [
"plus:",
"plis:"
],
"Inclus :": [
"Includes:",
"Gen ladan:"
],
"Présélection": [
"Screening",
"Preseleksyon"
],
"Rédaction d’offres": [
"Job writing",
"Ekri òf"
],
"Tri par critères": [
"Sort by criteria",
"Triye pa kritè"
],
"Entretiens": [
"Interviews",
"Entèvyou"
],
"Comparaison": [
"Comparison",
"Konparezon"
],
"Travail en équipe": [
"Teamwork",
"Travay an ekip"
],
"Statistiques": [
"Analytics",
"Estatistik"
],
"Rapports": [
"Reports",
"Rapò"
],
"Départements et projets": [
"Departments and projects",
"Depatman ak pwojè"
]
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

(() => { const T = {
"Taxes éventuelles : confirmées par ALO avant tout paiement.": [
"Any taxes: confirmed by ALO before payment.",
"Taks si genyen: ALO konfime yo anvan nenpòt peman."
],
"Déjà inclus": [
"Already included",
"Deja ladan"
],
"Montants en dollars US.": [
"Amounts in US dollars.",
"Montan yo an dola ameriken."
],
"jours de publication par offre": [
"days of publication per job post",
"jou piblikasyon pou chak òf"
],
"Paiement unique. Aucun renouvellement automatique.": [
"One-time payment. No automatic renewal.",
"Yon sèl peman. Pa gen renouvèlman otomatik."
],
"Choisi": [
"Selected",
"Chwazi"
],
"jours": [
"days",
"jou"
],
"Voir toutes les fonctionnalités": [
"See all features",
"Wè tout fonksyonalite yo"
],
"Durée de publication": [
"Publication period",
"Dire piblikasyon"
],
"Inclus, bientôt disponible": [
"Included, coming soon",
"Ladan, ap disponib byento"
],
"Aucune option payante n’est cochée d’avance. « Sur devis » : le montant vous est confirmé avant tout paiement.": [
"No paid option is preselected. “On quote”: the amount is confirmed to you before any payment.",
"Pa gen okenn opsyon peye ki deja tcheke. « Sou devi »: yo konfime montan an anvan nenpòt peman."
],
"Connectez-vous ou créez votre compte employeur pour continuer. Votre sélection est conservée.": [
"Sign in or create your employer account to continue. Your selection is kept.",
"Konekte oswa kreye kont anplwayè ou pou kontinye. Seleksyon ou konsève."
],
"Seul le propriétaire du compte employeur peut passer une commande. Partagez ce lien avec lui ou elle.": [
"Only the employer account owner can place an order. Share this link with them.",
"Se sèlman pwopriyetè kont anplwayè a ki ka pase yon kòmand. Pataje lyen sa a avè l."
],
"Le contact des achats est une autre personne": [
"The procurement contact is someone else",
"Kontak acha a se yon lòt moun"
],
"Référence interne ou numéro de bon de commande (facultatif)": [
"Internal reference or purchase order number (optional)",
"Referans entèn oswa nimewo bon kòmand (si ou vle)"
],
"Mode d’achat": [
"Purchasing option",
"Fason pou achte"
],
"Besoin d’un dossier fournisseur ?": [
"Need a supplier file?",
"Ou bezwen yon dosye founisè?"
],
"Documents demandés par votre service des achats": [
"Documents requested by your procurement team",
"Dokiman sèvis acha ou mande"
],
"Ex. attestation fiscale, statuts, coordonnées bancaires certifiées": [
"E.g. tax certificate, articles of incorporation, certified bank details",
"Egz. sètifika fiskal, estati, kowòdone bank sètifye"
],
"Date de paiement souhaitée": [
"Requested payment date",
"Dat peman ou ta renmen"
],
"Conditions souhaitées (facultatif)": [
"Requested terms (optional)",
"Kondisyon ou ta renmen (si ou vle)"
],
"Ex. paiement à 30 jours": [
"E.g. payment within 30 days",
"Egz. peman nan 30 jou"
],
"Raison de la demande": [
"Reason for the request",
"Rezon demann nan"
],
"Bon de commande ou justificatif (facultatif, PDF ou image)": [
"Purchase order or supporting document (optional, PDF or image)",
"Bon kòmand oswa prèv (si ou vle, PDF oswa imaj)"
],
"Payer": [
"Pay",
"Peye"
],
"Obtenir mon devis": [
"Get my quote",
"Jwenn devi mwen"
],
"Choisissez un mode d’achat": [
"Choose a purchasing option",
"Chwazi yon fason pou achte"
],
"Voir mes achats et factures": [
"See my purchases and invoices",
"Wè acha ak fakti mwen yo"
],
"Nouvelle commande": [
"New order",
"Nouvo kòmand"
],
"Commande enregistrée": [
"Order saved",
"Kòmand anrejistre"
],
"Pour régler votre commande, faites un virement bancaire avec la référence ci-dessous.": [
"To pay for your order, make a bank transfer with the reference below.",
"Pou peye kòmand ou, fè yon transfè labank ak referans ki anba a."
],
"Ensuite, publiez votre offre : elle est vérifiée par l’équipe ALO avant sa mise en ligne, et sa durée de publication commence le jour où elle est en ligne.": [
"Then post your job: the ALO team reviews it before it goes live, and its publication period starts the day it is live.",
"Apre sa, pibliye òf ou: ekip ALO verifye l anvan li parèt, e dire piblikasyon an kòmanse jou li parèt la."
],
"Votre devis est prêt pour validation interne.": [
"Your quote is ready for internal approval.",
"Devi ou pare pou validasyon anndan òganizasyon ou."
],
"Référence": [
"Reference",
"Referans"
],
"Télécharger le devis": [
"Download the quote",
"Telechaje devi a"
],
"Une fois le devis validé, ajoutez votre bon de commande ou le devis approuvé dans « Achats et factures ». L’équipe ALO l’examine, puis le paiement suit le processus convenu. Les services sont activés après le paiement confirmé.": [
"Once the quote is approved, add your purchase order or the approved quote in “Purchases and invoices”. The ALO team reviews it, then payment follows the agreed process. Services are activated after confirmed payment.",
"Lè devi a valide, ajoute bon kòmand ou oswa devi apwouve a nan « Acha ak fakti ». Ekip ALO egzamine l, apre sa peman an swiv pwosesis yo dakò a. Sèvis yo aktive apre peman an konfime."
],
"Demande reçue.": [
"Request received.",
"Nou resevwa demann nan."
],
"Aucun paiement différé n’est accordé avant validation par ALO.": [
"No deferred payment is granted before ALO approves it.",
"Pa gen okenn peman pita ki akòde anvan ALO valide l."
],
"L’équipe ALO examine votre demande. Elle peut l’accepter avec des conditions précises, vous demander des informations ou proposer un paiement avant activation. Vous suivez la réponse dans « Achats et factures ».": [
"The ALO team reviews your request. It may accept it with specific terms, ask you for information, or offer payment before activation. You follow the answer in “Purchases and invoices”.",
"Ekip ALO egzamine demann ou. Li ka aksepte l ak kondisyon klè, mande w enfòmasyon, oswa pwopoze peman anvan aktivasyon. Ou swiv repons lan nan « Acha ak fakti »."
],
"Récapitulatif": [
"Summary",
"Rezime"
],
"Retour": [
"Back",
"Retounen"
],
"Continuer": [
"Continue",
"Kontinye"
],
"Indiquez le nom de l’entreprise ou de l’organisation.": [
"Enter the company or organization name.",
"Antre non antrepriz la oswa òganizasyon an."
],
"Indiquez la personne responsable de la facturation.": [
"Enter the person responsible for billing.",
"Antre moun ki responsab faktirasyon an."
],
"Indiquez un e-mail de facturation valide.": [
"Enter a valid billing email.",
"Antre yon imèl faktirasyon ki valab."
],
"Indiquez un e-mail valide pour le contact des achats.": [
"Enter a valid email for the procurement contact.",
"Antre yon imèl valab pou kontak acha a."
],
"Choisissez un mode d’achat.": [
"Choose a purchasing option.",
"Chwazi yon fason pou achte."
],
"Le montant doit d’abord être confirmé par devis.": [
"The amount must first be confirmed by quote.",
"Fòk montan an konfime pa devi anvan."
],
"Indiquez la date de paiement souhaitée.": [
"Enter the requested payment date.",
"Antre dat peman ou ta renmen an."
],
"Indiquez la raison de la demande.": [
"Enter the reason for the request.",
"Antre rezon demann nan."
],
"Le fichier dépasse 10 Mo.": [
"The file is larger than 10 MB.",
"Fichye a depase 10 Mo."
],
"Votre sélection est conservée.": [
"Your selection is kept.",
"Seleksyon ou konsève."
],
"Une commande attend une action de votre part.": [
"An order is waiting for your action.",
"Gen yon kòmand k ap tann yon aksyon nan men w."
],
"Achats et factures": [
"Purchases and invoices",
"Acha ak fakti"
],
"Solde à régler": [
"Balance due",
"Balans pou peye"
],
"Envoyer un document ne valide pas la commande, n’active pas les services et ne vaut pas paiement : l’équipe ALO l’examine d’abord.": [
"Sending a document does not approve the order, activate services or count as payment: the ALO team reviews it first.",
"Voye yon dokiman pa valide kòmand lan, pa aktive sèvis yo e se pa yon peman: ekip ALO egzamine l anvan."
],
"Ajouter un document": [
"Add a document",
"Ajoute yon dokiman"
],
"Voir la facture": [
"View the invoice",
"Wè fakti a"
],
"Commande": [
"Order",
"Kòmand"
],
"Contacter ALO": [
"Contact ALO",
"Kontakte ALO"
],
"utilisée(s)": [
"used",
"itilize"
],
"couvert(s)": [
"covered",
"kouvri"
],
"Bon de commande": [
"Purchase order",
"Bon kòmand"
],
"Échéance": [
"Due date",
"Dat limit"
],
"document(s) envoyé(s)": [
"document(s) sent",
"dokiman voye"
],
"Conditions de paiement différé proposées par ALO": [
"Deferred payment terms offered by ALO",
"Kondisyon peman pita ALO pwopoze"
],
"Solde maximum autorisé": [
"Maximum balance allowed",
"Balans maksimòm otorize"
],
"Cet accord concerne uniquement cette commande. Il n’autorise pas d’autres achats sans paiement.": [
"This agreement covers this order only. It does not authorize other purchases without payment.",
"Akò sa a se pou kòmand sa a sèlman. Li pa otorize lòt acha san peman."
],
"J’accepte ces conditions au nom de mon organisation.": [
"I accept these terms on behalf of my organization.",
"Mwen aksepte kondisyon sa yo nan non òganizasyon mwen."
],
"Accepter et activer les services": [
"Accept and activate services",
"Aksepte epi aktive sèvis yo"
],
"Votre réponse": [
"Your answer",
"Repons ou"
],
"Envoyer la réponse": [
"Send the answer",
"Voye repons lan"
],
"Type de document": [
"Document type",
"Kalite dokiman"
],
"Devis approuvé": [
"Approved quote",
"Devi apwouve"
],
"Dossier fournisseur": [
"Supplier file",
"Dosye founisè"
],
"Justificatif": [
"Supporting document",
"Prèv"
],
"Autre": [
"Other",
"Lòt"
],
"Fichier (PDF ou image, 10 Mo maximum)": [
"File (PDF or image, 10 MB maximum)",
"Fichye (PDF oswa imaj, 10 Mo maksimòm)"
],
"Envoyer le document": [
"Send the document",
"Voye dokiman an"
],
"Annuler la commande": [
"Cancel the order",
"Anile kòmand lan"
],
"Services non activés": [
"Services not activated",
"Sèvis yo poko aktive"
],
"Commandes, devis, paiements et factures": [
"Orders, quotes, payments and invoices",
"Kòmand, devi, peman ak fakti"
],
"Annuler cette commande ? Elle ne pourra pas être réutilisée.": [
"Cancel this order? It cannot be reused.",
"Anile kòmand sa a? Ou p ap ka itilize l ankò."
],
"Commande annulée.": [
"Order cancelled.",
"Kòmand anile."
],
"Choisissez un fichier.": [
"Choose a file.",
"Chwazi yon fichye."
],
"Document envoyé. L’équipe ALO l’examine.": [
"Document sent. The ALO team is reviewing it.",
"Dokiman voye. Ekip ALO ap egzamine l."
],
"Conditions acceptées. Vos services sont actifs.": [
"Terms accepted. Your services are active.",
"Kondisyon yo aksepte. Sèvis ou yo aktif."
],
"Écrivez votre réponse.": [
"Write your answer.",
"Ekri repons ou."
],
"Réponse envoyée à l’équipe ALO.": [
"Answer sent to the ALO team.",
"Repons voye bay ekip ALO."
],
"Devis": [
"Quote",
"Devi"
],
"Document introuvable ou accès réservé au propriétaire du compte employeur.": [
"Document not found, or access limited to the employer account owner.",
"Nou pa jwenn dokiman an, oswa se pwopriyetè kont anplwayè a sèlman ki ka wè l."
],
"Devis / facture pro forma": [
"Quote / pro forma invoice",
"Devi / fakti pwofòma"
],
"Facture": [
"Invoice",
"Fakti"
],
"Imprimer ou enregistrer en PDF": [
"Print or save as PDF",
"Enprime oswa anrejistre an PDF"
],
"Plateforme de recrutement en Haïti": [
"Recruitment platform in Haiti",
"Platfòm rekritman ann Ayiti"
],
"version": [
"version",
"vèsyon"
],
"Date d’émission": [
"Issue date",
"Dat emisyon"
],
"Client": [
"Client",
"Kliyan"
],
"NIF": [
"Tax ID",
"NIF"
],
"Référence interne / bon de commande": [
"Internal reference / purchase order",
"Referans entèn / bon kòmand"
],
"Service": [
"Service",
"Sèvis"
],
"Quantité": [
"Quantity",
"Kantite"
],
"Montant": [
"Amount",
"Montan"
],
"Taxes et frais": [
"Taxes and fees",
"Taks ak frè"
],
"À confirmer par l’équipe ALO avant paiement": [
"To be confirmed by the ALO team before payment",
"Ekip ALO ap konfime anvan peman"
],
"Payée le": [
"Paid on",
"Peye le"
],
"Validité": [
"Validity",
"Validite"
],
"jusqu’au": [
"until",
"jiska"
],
"indiquée par l’équipe ALO à l’envoi du devis": [
"stated by the ALO team when the quote is sent",
"ekip ALO ap endike l lè yo voye devi a"
],
"Paiement": [
"Payment",
"Peman"
],
"par virement bancaire, en indiquant la référence": [
"by bank transfer, quoting the reference",
"pa transfè labank, ak referans lan"
],
"Activation": [
"Activation",
"Aktivasyon"
],
"les services sont activés après réception du paiement confirmée par ALO, sauf paiement différé approuvé par écrit par ALO.": [
"services are activated once ALO confirms receipt of payment, unless ALO has approved deferred payment in writing.",
"sèvis yo aktive lè ALO konfime li resevwa peman an, sof si ALO apwouve yon peman pita alekri."
],
"Publication": [
"Publication",
"Piblikasyon"
],
"chaque offre est vérifiée par l’équipe ALO avant sa mise en ligne ; sa durée de publication commence le jour où elle est en ligne.": [
"each job post is reviewed by the ALO team before it goes live; its publication period starts the day it is live.",
"ekip ALO verifye chak òf anvan li parèt; dire piblikasyon an kòmanse jou li parèt la."
],
"Conditions particulières": [
"Special terms",
"Kondisyon espesyal"
],
"Questions sur ce document": [
"Questions about this document",
"Kesyon sou dokiman sa a"
],
"En retard depuis le": [
"Overdue since",
"An reta depi"
],
"Rien dans cette file.": [
"Nothing in this queue.",
"Pa gen anyen nan lis sa a."
],
"Ce client a": [
"This client has",
"Kliyan sa a gen"
],
"de services actifs non payés": [
"of active, unpaid services",
"sèvis aktif ki poko peye"
],
"facture(s) en retard": [
"overdue invoice(s)",
"fakti an reta"
],
"Vérifiez avant tout nouvel achat sans paiement.": [
"Check before any new purchase without payment.",
"Verifye anvan nenpòt nouvo acha san peman."
],
"Facturation": [
"Billing",
"Faktirasyon"
],
"Achats": [
"Procurement",
"Acha"
],
"Dossier fournisseur demandé": [
"Supplier file requested",
"Dosye founisè yo mande"
],
"Paiement différé demandé": [
"Deferred payment requested",
"Peman pita yo mande"
],
"Conditions approuvées": [
"Approved terms",
"Kondisyon apwouve"
],
"acceptées le": [
"accepted on",
"aksepte le"
],
"pas encore acceptées": [
"not yet accepted",
"poko aksepte"
],
"Aucun document.": [
"No documents.",
"Pa gen dokiman."
],
"valable jusqu’au": [
"valid until",
"valab jiska"
],
"Aucun devis émis.": [
"No quote issued.",
"Pa gen devi ki emèt."
],
"Voir le document": [
"View the document",
"Wè dokiman an"
],
"Actions": [
"Actions",
"Aksyon"
],
"Information demandée": [
"Information requested",
"Enfòmasyon yo mande"
],
"Solde maximum (facultatif)": [
"Maximum balance (optional)",
"Balans maksimòm (si ou vle)"
],
"Conditions": [
"Terms",
"Kondisyon"
],
"Motif (visible par le client)": [
"Reason (visible to the client)",
"Rezon (kliyan an ap wè l)"
],
"Montant ($ US)": [
"Amount (US$)",
"Montan ($ US)"
],
"N° de facture": [
"Invoice no.",
"Nimewo fakti"
],
"Remboursement total": [
"Full refund",
"Ranbousman total"
],
"Historique": [
"History",
"Istorik"
],
"Aucun événement.": [
"No events.",
"Pa gen evènman."
],
"Services actifs": [
"Services active",
"Sèvis aktif"
],
"Confirmer cette action ?": [
"Confirm this action?",
"Konfime aksyon sa a?"
],
"Demande de paiement différé refusée. Vous pouvez régler la commande avant l’activation des services.": [
"Deferred payment request declined. You can pay for the order before services are activated.",
"Yo refize demann peman pita a. Ou ka peye kòmand lan anvan sèvis yo aktive."
],
"Commande refusée. Contactez l’équipe ALO pour en savoir plus.": [
"Order declined. Contact the ALO team to learn more.",
"Yo refize kòmand lan. Kontakte ekip ALO pou konnen plis."
],
"ALO a besoin d’une information complémentaire": [
"ALO needs more information",
"ALO bezwen plis enfòmasyon"
],
"Services suspendus. Contactez l’équipe ALO.": [
"Services suspended. Contact the ALO team.",
"Sèvis yo sispann. Kontakte ekip ALO."
],
"Commande terminée.": [
"Order completed.",
"Kòmand fini."
],
"Commande remboursée.": [
"Order refunded.",
"Kòmand ranbouse."
],
"Vos services sont actifs. Paiement reçu.": [
"Your services are active. Payment received.",
"Sèvis ou yo aktif. Nou resevwa peman an."
],
"Vos services sont actifs. Votre facture est en retard depuis le": [
"Your services are active. Your invoice has been overdue since",
"Sèvis ou yo aktif. Fakti ou an reta depi"
],
"Vos services sont actifs. Votre facture est payable le": [
"Your services are active. Your invoice is due on",
"Sèvis ou yo aktif. Fakti ou dwe peye le"
],
"ALO vérifie la réception de votre paiement.": [
"ALO is checking receipt of your payment.",
"ALO ap verifye si li resevwa peman ou."
],
"Le paiement n’a pas abouti. Votre commande est conservée : vous pouvez réessayer.": [
"The payment did not go through. Your order is kept: you can try again.",
"Peman an pa pase. Kòmand ou konsève: ou ka eseye ankò."
],
"ALO a approuvé un paiement différé. Acceptez les conditions pour activer vos services.": [
"ALO approved a deferred payment. Accept the terms to activate your services.",
"ALO apwouve yon peman pita. Aksepte kondisyon yo pou aktive sèvis ou yo."
],
"ALO examine votre demande de paiement différé.": [
"ALO is reviewing your deferred payment request.",
"ALO ap egzamine demann peman pita ou."
],
"ALO prépare votre devis.": [
"ALO is preparing your quote.",
"ALO ap prepare devi ou."
],
"ALO examine les documents envoyés.": [
"ALO is reviewing the documents sent.",
"ALO ap egzamine dokiman yo voye yo."
],
"Votre commande est validée. Réglez-la pour activer vos services.": [
"Your order is approved. Pay for it to activate your services.",
"Kòmand ou valide. Peye l pou aktive sèvis ou yo."
],
"En attente de votre paiement. Indiquez la référence": [
"Waiting for your payment. Quote the reference",
"N ap tann peman ou. Mete referans lan"
],
"Référence à indiquer": [
"Reference to quote",
"Referans pou mete"
],
"Montant exact": [
"Exact amount",
"Montan egzak"
],
"L’équipe ALO vous envoie les coordonnées bancaires par e-mail avec votre référence.": [
"The ALO team emails you the bank details with your reference.",
"Ekip ALO ap voye kowòdone bank lan ba ou pa imèl ak referans ou."
],
"Votre commande reste « en attente de paiement » jusqu’à ce que l’équipe ALO confirme la réception du virement. Une capture d’écran du virement ne vaut pas confirmation.": [
"Your order stays “awaiting payment” until the ALO team confirms receipt of the transfer. A screenshot of the transfer does not count as confirmation.",
"Kòmand ou rete « ap tann peman » jiskaske ekip ALO konfime li resevwa transfè a. Yon kapti ekran transfè a pa yon konfimasyon."
],
"Étape suivante : payer maintenant, obtenir un devis pour validation interne ou demander un paiement différé.": [
"Next step: pay now, get a quote for internal approval, or request deferred payment.",
"Pwochen etap: peye kounye a, jwenn yon devi pou validasyon anndan, oswa mande yon peman pita."
],
"Payer maintenant": [
"Pay now",
"Peye kounye a"
],
"Devis pour validation": [
"Quote for approval",
"Devi pou validasyon"
],
"Paiement différé": [
"Deferred payment",
"Peman pita"
],
"Soumise": [
"Submitted",
"Soumèt"
],
"En cours d’examen": [
"Under review",
"Y ap egzamine l"
],
"Approuvée": [
"Approved",
"Apwouve"
],
"Refusée": [
"Declined",
"Refize"
],
"Annulée": [
"Cancelled",
"Anile"
],
"Non payée": [
"Unpaid",
"Poko peye"
],
"Vérification en cours": [
"Being verified",
"Y ap verifye"
],
"Payée": [
"Paid",
"Peye"
],
"Échec du paiement": [
"Payment failed",
"Peman an echwe"
],
"Partiellement remboursée": [
"Partially refunded",
"Ranbouse an pati"
],
"Remboursée": [
"Refunded",
"Ranbouse"
],
"Non activés": [
"Not activated",
"Poko aktive"
],
"Actifs": [
"Active",
"Aktif"
],
"Terminés": [
"Completed",
"Fini"
],
"Suspendus": [
"Suspended",
"Sispann"
],
"Approbation": [
"Approval",
"Apwobasyon"
],
"Services": [
"Services",
"Sèvis"
],
"Virement bancaire": [
"Bank transfer",
"Transfè labank"
],
"Carte bancaire": [
"Bank card",
"Kat bank"
],
"MonCash": [
"MonCash",
"MonCash"
],
"NatCash": [
"NatCash",
"NatCash"
],
"Votre commande": [
"Your order",
"Kòmand ou"
],
"Votre organisation": [
"Your organization",
"Òganizasyon ou"
],
"Paiement maintenant, par virement bancaire.": [
"Payment now, by bank transfer.",
"Peman kounye a, pa transfè labank."
],
"Services activés dès que l’équipe ALO confirme la réception du paiement.": [
"Services activated as soon as the ALO team confirms receipt of payment.",
"Sèvis yo aktive depi ekip ALO konfime li resevwa peman an."
],
"Paiement après la validation interne de votre devis.": [
"Payment after your quote is approved internally.",
"Peman apre devi ou valide anndan òganizasyon ou."
],
"Services activés après le paiement confirmé.": [
"Services activated after confirmed payment.",
"Sèvis yo aktive apre peman an konfime."
],
"Paiement à la date convenue, si ALO accepte votre demande.": [
"Payment on the agreed date, if ALO accepts your request.",
"Peman nan dat yo dakò a, si ALO aksepte demann ou."
],
"Services activés après l’accord d’ALO et l’acceptation des conditions.": [
"Services activated after ALO's approval and acceptance of the terms.",
"Sèvis yo aktive apre ALO dakò e ou aksepte kondisyon yo."
],
"Réglez la commande par virement bancaire. Vos services sont activés dès la confirmation du paiement.": [
"Pay for the order by bank transfer. Your services are activated as soon as payment is confirmed.",
"Peye kòmand lan pa transfè labank. Sèvis ou yo aktive depi peman an konfime."
],
"Disponible une fois le montant confirmé par devis.": [
"Available once the amount is confirmed by quote.",
"Disponib lè montan an konfime pa devi."
],
"Obtenir un devis pour validation": [
"Get a quote for approval",
"Jwenn yon devi pou validasyon"
],
"Téléchargez un devis aux prix standards pour votre validation interne, puis renvoyez le bon de commande ou le devis approuvé.": [
"Download a quote at standard prices for your internal approval, then send back the purchase order or approved quote.",
"Telechaje yon devi ak pri nòmal pou validasyon anndan ou, epi voye bon kòmand lan oswa devi apwouve a."
],
"Demander un paiement différé": [
"Request deferred payment",
"Mande yon peman pita"
],
"Votre organisation souhaite régler après activation des services ? Demandez un paiement différé, soumis à l’accord d’ALO.": [
"Does your organization want to pay after services are activated? Request deferred payment, subject to ALO's approval.",
"Òganizasyon ou vle peye apre sèvis yo aktive? Mande yon peman pita, ALO dwe dakò."
],
"Personne responsable de la facturation": [
"Person responsible for billing",
"Moun ki responsab faktirasyon"
],
"E-mail de facturation": [
"Billing email",
"Imèl faktirasyon"
],
"Adresse de facturation": [
"Billing address",
"Adrès faktirasyon"
],
"Numéro d’identification fiscale (NIF), si nécessaire": [
"Tax ID number (NIF), if required",
"Nimewo idantifikasyon fiskal (NIF), si sa nesesè"
],
"Contact des achats": [
"Procurement contact",
"Kontak acha"
],
"E-mail du contact des achats": [
"Procurement contact email",
"Imèl kontak acha"
],
"À traiter": [
"To handle",
"Pou trete"
],
"Virements à vérifier": [
"Transfers to verify",
"Transfè pou verifye"
],
"Impayés et retards": [
"Unpaid and overdue",
"Poko peye ak an reta"
],
"Toutes": [
"All",
"Tout"
],
"Demander une information": [
"Request information",
"Mande yon enfòmasyon"
],
"Approuver le paiement différé": [
"Approve deferred payment",
"Apwouve peman pita a"
],
"Approuver la commande": [
"Approve the order",
"Apwouve kòmand lan"
],
"Refuser et proposer le paiement avant activation": [
"Decline and offer payment before activation",
"Refize epi pwopoze peman anvan aktivasyon"
],
"Refuser": [
"Decline",
"Refize"
],
"Émettre une nouvelle version du devis": [
"Issue a new version of the quote",
"Emèt yon nouvo vèsyon devi a"
],
"Confirmer le paiement reçu": [
"Confirm payment received",
"Konfime peman resevwa"
],
"Paiement non reçu ou échoué": [
"Payment not received or failed",
"Peman pa rive oswa echwe"
],
"Changer l’échéance": [
"Change the due date",
"Chanje dat limit la"
],
"Enregistrer un remboursement": [
"Record a refund",
"Anrejistre yon ranbousman"
],
"Réactiver les services": [
"Reactivate services",
"Reaktive sèvis yo"
],
"Suspendre les services": [
"Suspend services",
"Sispann sèvis yo"
],
"Marquer comme terminée": [
"Mark as completed",
"Make l kòm fini"
],
"Ajouter une note interne": [
"Add an internal note",
"Ajoute yon nòt entèn"
],
"Analyse et tri des candidatures": [
"Application analysis and sorting",
"Analiz ak triyaj aplikasyon"
],
"Il y a": [
"There is",
"Gen"
]
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();

(() => { const T = {
"Ajouter les responsabilités et les qualifications (facultatif)": [
"Add responsibilities and qualifications (optional)",
"Ajoute responsablite ak kalifikasyon yo (si ou vle)"
],
"Questions, documents et avantages (facultatif)": [
"Questions, documents and benefits (optional)",
"Kesyon, dokiman ak avantaj (si ou vle)"
],
"Un numéro WhatsApp (8 chiffres ou plus) ou une adresse e-mail.": [
"A WhatsApp number (8 digits or more) or an email address.",
"Yon nimewo WhatsApp (8 chif oswa plis) oswa yon adrès imèl."
],
"Indiquez un numéro WhatsApp (8 chiffres ou plus) ou une adresse e-mail.": [
"Enter a WhatsApp number (8 digits or more) or an email address.",
"Antre yon nimewo WhatsApp (8 chif oswa plis) oswa yon adrès imèl."
],
"Le maximum doit être supérieur ou égal au minimum.": [
"The maximum must be at least the minimum.",
"Maksimòm nan dwe pi gwo oswa egal ak minimòm nan."
],
"Choisissez une date à venir.": [
"Choose a future date.",
"Chwazi yon dat k ap vini."
],
"/ mois": [
"/ month",
"/ mwa"
],
"Paiement unique, sans frais en cas d’embauche. Après l’envoi, réglez la commande par virement avec sa référence, dans « Achats et factures ».": [
"One-time payment, no fee when you hire. After sending, pay for the order by transfer with its reference, in “Purchases and invoices”.",
"Yon sèl peman, pa gen frè lè w anboche. Apre ou voye l, peye kòmand lan pa transfè ak referans li, nan « Acha ak fakti »."
],
"Votre forfait couvre encore": [
"Your plan still covers",
"Fòfè ou kouvri ankò"
],
"Réduisez le nombre de postes ou décochez « Utiliser mon forfait ».": [
"Reduce the number of positions or untick “Use my plan”.",
"Diminye kantite pòs yo oswa retire tchek « Itilize fòfè mwen »."
],
"Référence de commande": [
"Order reference",
"Referans kòmand"
],
"Réglez la commande par virement en indiquant cette référence. L’équipe ALO vérifie l’offre et confirme le paiement ; ce sont deux étapes séparées.": [
"Pay for the order by transfer, quoting this reference. The ALO team reviews the job post and confirms the payment; these are two separate steps.",
"Peye kòmand lan pa transfè, ak referans sa a. Ekip ALO verifye òf la epi konfime peman an; se de etap separe."
],
"Cette offre utilise votre forfait : aucun paiement supplémentaire.": [
"This job post uses your plan: no extra payment.",
"Òf sa a itilize fòfè ou: pa gen lòt peman."
],
"Payer ou suivre ma commande": [
"Pay or track my order",
"Peye oswa swiv kòmand mwen"
],
"Votre candidature est prête, préremplie avec votre profil. Vérifiez-la, puis envoyez-la.": [
"Your application is ready, filled in from your profile. Check it, then send it.",
"Aplikasyon ou pare, li ranpli ak pwofil ou. Verifye l, epi voye l."
],
"PDF, Word ou photo prise avec votre téléphone.": [
"PDF, Word or a photo taken with your phone.",
"PDF, Word oswa yon foto ou pran ak telefòn ou."
],
"facultatif": [
"optional",
"si ou vle"
],
"Télétravail": [
"Remote",
"Teletravay"
]
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {
"Taux": [
"Rates",
"To"
],
"Estimation — taux à confirmer.": [
"Estimate: rates to be confirmed.",
"Estimasyon: to yo poko konfime."
],
"Les taux affichés sont en cours de vérification par l’équipe ALO. Votre fiche de paie fait foi.": [
"The rates shown are being checked by the ALO team. Your payslip is what counts.",
"Ekip ALO ap verifye to yo. Se fich peman ou ki konte."
],
"Ex. 45 000": [
"E.g. 45,000",
"Egz. 45 000"
],
"Taux du jour (HTG pour 1 USD)": [
"Today's rate (HTG for 1 USD)",
"To jodi a (HTG pou 1 USD)"
],
"À quoi ça sert ?": [
"What is it for?",
"Pou kisa li sèvi?"
],
"Salaire net estimé par mois": [
"Estimated take-home pay per month",
"Salè nèt estime pa mwa"
],
"par an": [
"per year",
"pa ane"
],
"retenues": [
"deductions",
"retni"
],
"Salaire brut": [
"Gross salary",
"Salè brit"
],
"Votre salaire est dans la tranche non imposée.": [
"Your salary is in the tax-free bracket.",
"Salè ou nan tranch ki pa peye taks la."
],
"du salaire brut": [
"of gross salary",
"nan salè brit la"
],
"Total des retenues": [
"Total deductions",
"Total retni"
],
"Salaire net": [
"Take-home pay",
"Salè nèt"
],
"Comment l’impôt est calculé": [
"How the tax is calculated",
"Kijan yo kalkile taks la"
],
"Le salaire de l’année est découpé en tranches. Chaque tranche a son propre taux ; seule la partie du salaire dans une tranche est imposée à ce taux.": [
"The year's salary is split into brackets. Each bracket has its own rate; only the part of the salary inside a bracket is taxed at that rate.",
"Yo koupe salè ane a an tranch. Chak tranch gen pwòp to li; se sèlman pati salè ki nan tranch lan ki peye to sa a."
],
"Tranche annuelle": [
"Yearly bracket",
"Tranch pa ane"
],
"Impôt par an": [
"Tax per year",
"Taks pa ane"
],
"plus de": [
"over",
"plis pase"
],
"Revenu annuel imposable": [
"Taxable yearly income",
"Revni pa ane ki peye taks"
],
"impôt annuel": [
"yearly tax",
"taks pa ane"
],
"Non compris : le 13e mois (boni), les primes, les avantages en nature et les retenues propres à votre employeur (prêt, mutuelle…).": [
"Not included: the 13th month (bonus), other bonuses, benefits in kind and deductions specific to your employer (loan, health plan…).",
"Sa pa ladan: 13yèm mwa (bonis), lòt prim, avantaj an nati ak retni patwon ou fè (prè, asirans…)."
],
"Transport par jour (aller-retour)": [
"Daily transport (round trip)",
"Transpò pa jou (ale-retou)"
],
"Ex. 250": [
"E.g. 250",
"Egz. 250"
],
"Jours de travail par mois": [
"Working days per month",
"Jou travay pa mwa"
],
"Avantages par mois (repas, transport payé…)": [
"Monthly benefits (meals, paid transport…)",
"Avantaj pa mwa (manje, transpò peye…)"
],
"Il vous reste par mois": [
"Left each month",
"Sa k rete w chak mwa"
],
"Les deux offres vous laissent le même montant chaque mois.": [
"Both offers leave you the same amount each month.",
"De òf yo kite w menm kantite lajan chak mwa."
],
"vous laisse": [
"leaves you",
"kite w"
],
"de plus par mois": [
"more per month",
"plis pa mwa"
],
"soit": [
"or",
"sa fè"
],
"Indiquez le salaire brut des deux offres pour les comparer.": [
"Enter the gross salary of both offers to compare them.",
"Antre salè brit de òf yo pou konpare yo."
],
"Le salaire n’est pas tout : pensez aussi au type de contrat, aux horaires, à l’assurance et aux possibilités d’évolution.": [
"Salary isn't everything: also think about the contract, hours, insurance and room to grow.",
"Salè a pa tout: panse tou ak kalite kontra a, lè travay, asirans ak posiblite pou avanse."
],
"Mes outils": [
"My tools",
"Zouti mwen"
],
"Pour décider avec les bons chiffres.": [
"Decide with the right numbers.",
"Pou deside ak bon chif yo."
],
"Taux salariaux": [
"Salary rates",
"To salè"
],
"Utilisés par les outils « Salaire net » et « Comparer deux offres » des candidats. Tant que « Taux confirmés » n’est pas coché, les résultats affichent « Estimation — taux à confirmer ».": [
"Used by the candidates' “Take-home pay” and “Compare two offers” tools. Until “Rates confirmed” is ticked, results show “Estimate: rates to be confirmed”.",
"Zouti « Salè nèt » ak « Konpare de òf » kandida yo itilize yo. Toutotan « To konfime » pa tcheke, rezilta yo ap montre « Estimasyon: to yo poko konfime »."
],
"Exercice fiscal": [
"Fiscal year",
"Ane fiskal"
],
"Taux HTG pour 1 USD (facultatif)": [
"HTG rate for 1 USD (optional)",
"To HTG pou 1 USD (si ou vle)"
],
"Taux confirmés": [
"Rates confirmed",
"To konfime"
],
"Source (loi de finances, circulaire…)": [
"Source (finance law, circular…)",
"Sous (lwa finans, sikilè…)"
],
"Barème de l’impôt sur le revenu (par an)": [
"Income tax brackets (per year)",
"Tranch taks sou revni (pa ane)"
],
"sans limite": [
"no limit",
"san limit"
],
"Ajouter une tranche": [
"Add a bracket",
"Ajoute yon tranch"
],
"Cotisations retenues sur le salaire": [
"Contributions deducted from salary",
"Kotizasyon yo retire sou salè"
],
"Déductible de l’impôt": [
"Tax-deductible",
"Yo retire l sou taks"
],
"Ajouter une cotisation": [
"Add a contribution",
"Ajoute yon kotizasyon"
],
"Enregistrer les taux": [
"Save rates",
"Anrejistre to yo"
],
"Seule la dernière tranche peut être sans limite.": [
"Only the last bracket can have no limit.",
"Se sèlman dènye tranch lan ki ka san limit."
],
"Combien vous recevez vraiment, après l’impôt et les cotisations.": [
"What you really receive, after tax and contributions.",
"Konbyen ou resevwa vre, apre taks ak kotizasyon."
],
"Comparer deux offres": [
"Compare two offers",
"Konpare de òf"
],
"Ce qu’il vous reste chaque mois avec chaque offre, transport compris.": [
"What you have left each month with each offer, transport included.",
"Sa k rete w chak mwa ak chak òf, transpò ladan."
],
"Impôt de l’État sur le salaire. L’employeur le retient chaque mois et le verse à la DGI. Il est calculé par tranches sur le salaire de l’année : plus le salaire est élevé, plus la part imposée est grande.": [
"State tax on salary. The employer withholds it each month and pays it to the DGI. It is calculated by brackets on the year's salary: the higher the salary, the larger the share taxed.",
"Taks Leta sou salè. Patwon an retni l chak mwa epi peye l bay DGI. Yo kalkile l pa tranch sou salè ane a: plis salè a wo, plis pati ki peye taks la gran."
],
"Cotisation pour votre pension de retraite à l’Office National d’Assurance-Vieillesse. Votre employeur verse aussi sa propre part.": [
"Contribution to your retirement pension at the National Old-Age Insurance Office (ONA). Your employer also pays its own share.",
"Kotizasyon pou pansyon retrèt ou nan Ofis Nasyonal Asirans Vyeyès (ONA). Patwon ou peye pa li tou."
],
"Assurance maladie et maternité de l’OFATMA. Elle peut couvrir des soins, selon les conditions de l’office.": [
"OFATMA health and maternity insurance. It can cover care, under the office's conditions.",
"Asirans maladi ak matènite OFATMA. Li ka kouvri swen, dapre kondisyon ofis la."
],
"Contribution versée au fonds des mairies et des collectivités territoriales.": [
"Contribution paid to the fund for town halls and local authorities.",
"Kontribisyon yo peye nan fon meri ak kolektivite teritoryal yo."
],
"ONA — assurance vieillesse": [
"ONA: old-age insurance",
"ONA: asirans vyeyès"
],
"OFATMA — assurance maladie et maternité": [
"OFATMA: health and maternity insurance",
"OFATMA: asirans maladi ak matènite"
],
"CFGDCT — contribution aux collectivités territoriales": [
"CFGDCT: local authorities contribution",
"CFGDCT: kontribisyon pou kolektivite teritoryal"
],
"Barème de l’impôt sur le revenu et cotisations sociales des salariés (à confirmer par un comptable).": [
"Income tax brackets and employee social contributions (to be confirmed by an accountant).",
"Tranch taks sou revni ak kotizasyon sosyal anplwaye yo (yon kontab dwe konfime)."
],
"Salaire brut par mois": [
"Gross salary per month",
"Salè brit pa mwa"
],
"Offre A": [
"Offer A",
"Òf A"
],
"Offre B": [
"Offer B",
"Òf B"
],
"L’offre A": [
"Offer A",
"Òf A"
],
"L’offre B": [
"Offer B",
"Òf B"
],
"Impôt sur le revenu": [
"Income tax",
"Taks sou revni"
],
"Indiquez le taux du jour pour convertir en gourdes.": [
"Enter today's rate to convert to gourdes.",
"Antre to jodi a pou konvèti an goud."
],
"Indiquez votre salaire brut mensuel : le calcul se fait tout de suite.": [
"Enter your gross monthly salary: the result appears right away.",
"Antre salè brit ou pa mwa: rezilta a parèt touswit."
],
"Transport": [
"Transport",
"Transpò"
],
"Avantages": [
"Benefits",
"Avantaj"
]
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {
"Salarié(e)": [
"Employee",
"Anplwaye"
],
"Consultant(e) ou contractuel(le)": [
"Consultant or contract worker",
"Konsiltan oswa kontraktyèl"
],
"Montant brut du contrat par mois": [
"Gross contract amount per month",
"Montan brit kontra a pa mwa"
],
"Allocations par mois (facultatif)": [
"Allowances per month (optional)",
"Alokasyon pa mwa (si ou vle)"
],
"Primes, indemnités…": [
"Bonuses, allowances…",
"Prim, endemnite…"
],
"Taux de référence BRH du": [
"BRH reference rate of",
"To referans BRH"
],
"Converti au taux de référence de la BRH, sauf si vous indiquez un autre taux.": [
"Converted at the BRH reference rate, unless you enter another rate.",
"Konvèti ak to referans BRH a, sof si ou mete yon lòt to."
],
"Montant brut": [
"Gross amount",
"Montan brit"
],
"Allocations": [
"Allowances",
"Alokasyon"
],
"Acompte sur contrat": [
"Contract tax advance",
"Avans sou kontra"
],
"du montant brut": [
"of the gross amount",
"nan montan brit la"
],
"IRI — impôt sur le revenu": [
"IRI: income tax",
"IRI: taks sou revni"
],
"Retenue sur allocations": [
"Deduction on allowances",
"Retni sou alokasyon"
],
"des allocations": [
"of allowances",
"nan alokasyon yo"
],
"Au-delà de 1 000 000 HTG par an, le barème n’a pas encore été vérifié : le résultat peut être sous-estimé.": [
"Above 1,000,000 HTG per year, the brackets have not been verified yet: the result may be too low.",
"Pi wo pase 1 000 000 HTG pa ane, yo poko verifye tranch yo: rezilta a ka twò ba."
],
"Non compris : le 13e mois (boni) et les retenues propres à votre employeur (prêt, assurance…).": [
"Not included: the 13th month (bonus) and deductions specific to your employer (loan, insurance…).",
"Sa pa ladan: 13yèm mwa (bonis) ak retni patwon ou fè (prè, asirans…)."
],
"Avantages non imposés par mois (repas, transport payé…)": [
"Untaxed monthly benefits (meals, paid transport…)",
"Avantaj pa mwa ki pa peye taks (manje, transpò peye…)"
],
"Impôt sur le revenu individuel. L’employeur le retient chaque mois et le verse à la DGI. Il est calculé par tranches sur le salaire de l’année : plus le salaire est élevé, plus la part imposée est grande.": [
"Individual income tax. The employer withholds it each month and pays it to the DGI. It is calculated by brackets on the year's salary: the higher the salary, the larger the share taxed.",
"Taks sou revni endividyèl. Patwon an retni l chak mwa epi peye l bay DGI. Yo kalkile l pa tranch sou salè ane a: plis salè a wo, plis pati ki peye taks la gran."
],
"Cotisation pour votre pension de vieillesse à l’Office National d’Assurance-Vieillesse (ONA). Votre employeur verse aussi sa part.": [
"Contribution to your old-age pension at the National Old-Age Insurance Office (ONA). Your employer also pays its share.",
"Kotizasyon pou pansyon vyeyès ou nan Ofis Nasyonal Asirans Vyeyès (ONA). Patwon ou peye pa li tou."
],
"Contribution de 1 % du salaire brut, retenue chaque mois.": [
"A 1% contribution on the gross salary, withheld each month.",
"Yon kontribisyon 1 % sou salè brit la, yo retni chak mwa."
],
"Les allocations (primes, indemnités) ne sont pas ajoutées au salaire pour l’impôt : une retenue fixe s’applique dessus.": [
"Allowances (bonuses, indemnities) are not added to the salary for income tax: a flat deduction applies to them.",
"Yo pa mete alokasyon yo (prim, endemnite) sou salè a pou taks: yon retni fiks aplike sou yo."
],
"Pour un contrat de consultance ou de prestation : un acompte d’impôt est retenu sur le montant brut, à la place de l’IRI et des cotisations.": [
"For a consultancy or service contract: a tax advance is withheld on the gross amount, instead of IRI and contributions.",
"Pou yon kontra konsiltasyon oswa sèvis: yo retni yon avans taks sou montan brit la, olye IRI ak kotizasyon yo."
],
"Barème vérifié sur des fiches de paie réelles jusqu’à 1 000 000 HTG par an (à confirmer par un comptable).": [
"Brackets checked on real payslips up to 1,000,000 HTG per year (to be confirmed by an accountant).",
"Tranch verifye sou vrè fich peman jiska 1 000 000 HTG pa ane (yon kontab dwe konfime)."
],
"Date du taux BRH": [
"BRH rate date",
"Dat to BRH"
],
"Retenue sur allocations (%)": [
"Deduction on allowances (%)",
"Retni sou alokasyon (%)"
],
"Acompte sur contrat (%)": [
"Contract tax advance (%)",
"Avans sou kontra (%)"
],
"Taux de référence BRH (HTG pour 1 USD)": [
"BRH reference rate (HTG for 1 USD)",
"To referans BRH (HTG pou 1 USD)"
]
}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Estimation": ["Estimate", "Estimasyon"], "Salaire net par mois": ["Take-home pay per month", "Salè nèt pa mwa"], "Votre fiche de paie fait foi.": ["Your payslip is what counts.", "Se fich peman ou ki konte."], "Comment c’est calculé": ["How it's calculated", "Kijan yo kalkile l"], "Taux BRH utilisé si vous n’en indiquez pas d’autre.": ["BRH rate used unless you enter another.", "Se to BRH a yo itilize si ou pa mete yon lòt."]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Pas encore d’offre proche de vos préférences.": ["No offer close to your preferences yet.", "Poko gen òf ki pre preferans ou."], "Pour commencer": ["Get started", "Pou kòmanse"], "Postuler à une offre": ["Apply for a job", "Aplike pou yon òf"], "Avec votre Profil ALO, en quelques minutes.": ["With your ALO Profile, in a few minutes.", "Ak Pwofil ALO ou, nan kèk minit."], "Voir les offres": ["See offers", "Wè òf yo"], "Créer mon CV": ["Create my CV", "Kreye CV mwen"], "À partir de votre Profil ALO.": ["From your ALO Profile.", "Apati Pwofil ALO ou."], "Créer": ["Create", "Kreye"], "Recommander un talent": ["Recommend a talent", "Rekòmande yon talan"], "Partagez votre lien avec une personne qui cherche un emploi.": ["Share your link with someone looking for a job.", "Pataje lyen ou ak yon moun k ap chèche travay."], "Mon lien": ["My link", "Lyen mwen"], "Déclarez votre embauche pour la Prime d’embauche.": ["Report your hire for the Hiring Bonus.", "Deklare anbochaj ou pou Prim anbochaj la."], "Déclarer": ["Report", "Deklare"], "net par mois": ["net per month", "nèt pa mwa"], "Entrez deux salaires bruts.": ["Enter two gross salaries.", "Antre de salè brit."], "Même salaire net.": ["Same take-home pay.", "Menm salè nèt."], "net par mois, avant transport": ["net per month, before transport", "nèt pa mwa, anvan transpò"], "Voir le détail": ["See the details", "Wè detay yo"], "Ajouter le transport et comparer": ["Add transport and compare", "Ajoute transpò epi konpare"], "B": ["B", "B"], "A": ["A", "A"]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Toutes les villes": ["All cities", "Tout vil yo"], "Villes": ["Cities", "Vil"], "Rechercher une ville": ["Search a city", "Chèche yon vil"], "Effacer": ["Clear", "Efase"], "Valider": ["Apply", "Valide"], "Ajouter": ["Add", "Ajoute"], "Assurance de l’OFATMA, retenue par certains employeurs seulement : activez-la si elle figure sur votre fiche de paie.": ["OFATMA insurance, withheld by some employers only: switch it on if it is on your payslip.", "Asirans OFATMA, se kèk patwon sèlman ki retni l: aktive l si li sou fich peman ou."], "Consultant(e)": ["Consultant", "Konsiltan"], "Taux (HTG pour 1 USD)": ["Rate (HTG for 1 USD)", "To (HTG pou 1 USD)"], "non appliqué": ["not applied", "pa aplike"], "Barème à vérifier au-delà de 1 000 000 HTG par an.": ["Brackets to be checked above 1,000,000 HTG per year.", "Tranch yo poko verifye pi wo pase 1 000 000 HTG pa ane."], "Autres retenues": ["Other deductions", "Lòt retni"], "Touchez un interrupteur pour retirer ou ajouter une retenue, selon votre fiche de paie.": ["Tap a switch to remove or add a deduction, as on your payslip.", "Peze yon bouton pou retire oswa ajoute yon retni, dapre fich peman ou."], "Non compris : le 13e mois (boni).": ["Not included: the 13th month (bonus).", "Sa pa ladan: 13yèm mwa (bonis)."], "Allocations par mois": ["Allowances per month", "Alokasyon pa mwa"], "Autres retenues par mois": ["Other deductions per month", "Lòt retni pa mwa"], "Prêt, assurance…": ["Loan, insurance…", "Prè, asirans…"], "Entrez un salaire brut.": ["Enter a gross salary.", "Antre yon salè brit."], "Transport par jour": ["Transport per day", "Transpò pa jou"], "Jours par mois": ["Days per month", "Jou pa mwa"], "Avantages par mois": ["Benefits per month", "Avantaj pa mwa"], "repas, transport payé…": ["meals, paid transport…", "manje, transpò peye…"], "Meilleure offre": ["Better offer", "Pi bon òf"], "vous reste par mois": ["left each month", "rete w chak mwa"], "Net": ["Net", "Nèt"], "Différence": ["Difference", "Diferans"], "par mois": ["per month", "pa mwa"], "Calculé avec les retenues que vous avez choisies dans « Salaire net ».": ["Calculated with the deductions you chose in “Take-home pay”.", "Kalkile ak retni ou chwazi nan « Salè nèt »."]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Toutes les offres": ["All offers", "Tout òf yo"], "Modifier": ["Edit", "Modifye"]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Jusqu’à 5 % du premier salaire": ["Up to 5% of the first salary", "Jiska 5 % premye salè a"], "Emploi": ["Job", "Travay"], "Emplois salariés seulement": ["Salaried jobs only", "Travay salarye sèlman"], "Contrôle": ["Check", "Kontwòl"], "Après vérification": ["After verification", "Apre verifikasyon"], "Privé": ["Private", "Prive"], "Votre salaire reste privé": ["Your salary stays private", "Salè ou rete prive"]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Les primes sont soumises aux conditions d’admissibilité, de vérification et aux plafonds applicables.": ["Bonuses are subject to eligibility and verification conditions and to the applicable caps.", "Prim yo depann de kondisyon kalifikasyon, verifikasyon ak limit ki aplike yo."], "Une embauche ne donne pas automatiquement droit à une prime : elle doit respecter les conditions de la page Prime d’embauche.": ["A hire does not automatically entitle you to a bonus: it must meet the conditions on the Hiring Bonus page.", "Yon anbochaj pa bay dwa otomatikman pou yon prim: li dwe respekte kondisyon ki sou paj Prim anbochaj la."]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Tableau de bord": ["Dashboard", "Tablo"], "Profil ALO": ["ALO Profile", "Pwofil ALO"], "Préférences": ["Preferences", "Preferans"], "Compte": ["Account", "Kont"]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Vérifier un contrat": ["Check a contract", "Verifye yon kontra"], "Les points à lire avant de signer.": ["What to read before you sign.", "Sa pou li anvan ou siyen."], "Les points à lire avant de signer : poste, salaire, période d’essai, préavis…": ["What to read before you sign: job, salary, probation, notice…", "Sa pou li anvan ou siyen: pòs, salè, peryòd esè, preyavi…"], "points vérifiés": ["points checked", "pwen verifye"], "Points vérifiés": ["Points checked", "Pwen verifye"], "Ouvrir la liste": ["Open the checklist", "Louvri lis la"], "Tout est vérifié.": ["Everything is checked.", "Tout bagay verifye."], "Cochez chaque point en lisant le contrat.": ["Tick each point as you read the contract.", "Tcheke chak pwen pandan w ap li kontra a."], "Calculer mon salaire net": ["Calculate my take-home pay", "Kalkile salè nèt mwen"], "Un doute ? Demandez des précisions par écrit avant de signer. Ce guide ne remplace pas l’avis d’un juriste.": ["In doubt? Ask for details in writing before signing. This guide does not replace a lawyer's advice.", "Ou gen dout? Mande presizyon alekri anvan ou siyen. Gid sa a pa ranplase konsèy yon avoka."], "Tout décocher": ["Untick all", "Retire tout tchek"], "Le poste": ["The job", "Pòs la"], "L’argent": ["The money", "Lajan an"], "Le temps": ["Time", "Tan an"], "La fin du contrat": ["End of the contract", "Fen kontra a"], "Intitulé et missions": ["Title and duties", "Tit ak travay"], "Le poste et les tâches correspondent à ce qui a été annoncé.": ["The job and tasks match what was announced.", "Pòs la ak travay yo koresponn ak sa yo te anonse."], "Type de contrat": ["Contract type", "Kalite kontra"], "Durée déterminée, indéterminée ou consultance : c’est écrit clairement, avec les dates.": ["Fixed-term, permanent or consultancy: it is written clearly, with the dates.", "Dire fiks, san limit oswa konsiltasyon: sa ekri klè, ak dat yo."], "Lieu et horaires": ["Place and hours", "Kote ak lè travay"], "Le lieu de travail, les jours et les heures sont précisés, ainsi que le télétravail s’il y en a.": ["The workplace, days and hours are stated, and remote work if any.", "Kote travay la, jou ak lè yo presize, ak teletravay si genyen."], "Salaire brut mensuel": ["Gross monthly salary", "Salè brit pa mwa"], "Le montant, la devise et la date de paiement sont écrits.": ["The amount, currency and payment date are written.", "Montan an, lajan an ak dat peman an ekri."], "Retenues": ["Deductions", "Retni"], "Vous savez ce qui sera retenu (impôt, cotisations) et ce qu’il vous restera.": ["You know what will be deducted (tax, contributions) and what you will take home.", "Ou konnen sa yo pral retni (taks, kotizasyon) ak sa k ap rete w."], "Allocations et avantages": ["Allowances and benefits", "Alokasyon ak avantaj"], "Transport, repas, assurance, 13e mois : ce qui est promis figure dans le contrat.": ["Transport, meals, insurance, 13th month: what was promised is in the contract.", "Transpò, manje, asirans, 13yèm mwa: sa yo te pwomèt nan kontra a."], "Date de début": ["Start date", "Dat kòmansman"], "La date de début est la même que celle convenue.": ["The start date is the one agreed.", "Dat kòmansman an se sa nou te dakò a."], "Période d’essai": ["Probation period", "Peryòd esè"], "Sa durée et ses conditions sont indiquées.": ["Its length and conditions are stated.", "Dire li ak kondisyon li yo endike."], "Congés": ["Leave", "Konje"], "Le nombre de jours de congé et la façon de les prendre sont précisés.": ["The number of leave days and how to take them are stated.", "Kantite jou konje ak fason pou pran yo presize."], "Préavis et rupture": ["Notice and termination", "Preyavi ak revokasyon"], "Le délai de préavis et les conditions de fin du contrat sont écrits.": ["The notice period and termination conditions are written.", "Delè preyavi a ak kondisyon pou fini kontra a ekri."], "Clauses particulières": ["Special clauses", "Kloz espesyal"], "Confidentialité, exclusivité ou non-concurrence : lisez-les et demandez des précisions si besoin.": ["Confidentiality, exclusivity or non-compete: read them and ask for details if needed.", "Konfidansyalite, eksklizivite oswa non-konkirans: li yo epi mande presizyon si sa nesesè."], "Signatures et copie": ["Signatures and copy", "Siyati ak kopi"], "Le contrat est signé par les deux parties et vous gardez un exemplaire.": ["The contract is signed by both parties and you keep a copy.", "Toude pati yo siyen kontra a epi ou kenbe yon kopi."]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"En ce moment sur alo.ht": ["Right now on alo.ht", "Kounye a sou alo.ht"], "Emplois, consultances, stages et missions de projet, publiés par des employeurs en Haïti.": ["Jobs, consultancies, internships and project assignments, posted by employers in Haiti.", "Travay, konsiltasyon, estaj ak misyon pwojè, patwon ann Ayiti pibliye."], "opportunités en ligne": ["opportunities online", "opòtinite an liy"], "En direct": ["Live", "An dirèk"], "Bonjour Marie-Jeanne, êtes-vous disponible jeudi pour un entretien ?": ["Hello Marie-Jeanne, are you available on Thursday for an interview?", "Bonjou Marie-Jeanne, èske ou disponib jedi pou yon entèvyou?"]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Créons votre Profil ALO.": ["Let's build your ALO Profile.", "Ann kreye Pwofil ALO ou."], "Votre profil est prêt.": ["Your profile is ready.", "Pwofil ou pare."], "Votre profil avance bien.": ["Your profile is coming along.", "Pwofil ou ap avanse byen."], "candidatures": ["applications", "aplikasyon"], "candidature": ["application", "aplikasyon"], "enregistrées": ["saved", "anrejistre"], "Vues par l’employeur": ["Seen by the employer", "Patwon an wè l"], "Entretiens": ["Interviews", "Entèvyou"], "Retenues": ["Selected", "Chwazi"]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
(() => { const T = {"Cette offre passera par une nouvelle commande.": ["This offer will go through a new order.", "Òf sa a ap pase nan yon nouvo kòmand."], "Budget": ["Budget", "Bidjè"], "Organisation": ["Organization", "Òganizasyon"], "Opportunité": ["Opportunity", "Opòtinite"], "Intitulé": ["Title", "Tit"], "Mission de projet": ["Project assignment", "Misyon pwojè"], "Description et critères": ["Description and criteria", "Deskripsyon ak kritè"], "Livrables attendus (un par ligne)": ["Expected deliverables (one per line)", "Livrab yo atann (youn pa liy)"], "Livrables attendus": ["Expected deliverables", "Livrab yo atann"], "Conditions et candidatures": ["Terms and applications", "Kondisyon ak aplikasyon"], "Honoraires par jour": ["Daily fee", "Onorè pa jou"], "Budget total": ["Total budget", "Bidjè total"], "Durée": ["Duration", "Dire"], "semaines": ["weeks", "semèn"], "Afficher la rémunération sur l’offre": ["Show the pay on the offer", "Montre reminerasyon an sou òf la"], "Questions et documents demandés (facultatif)": ["Questions and requested documents (optional)", "Kesyon ak dokiman yo mande (si ou vle)"], "Aperçu et validation": ["Preview and confirm", "Apèsi ak validasyon"], "Allocation de stage (facultatif)": ["Internship allowance (optional)", "Alokasyon estaj (si ou vle)"], "Salaire mensuel": ["Monthly salary", "Salè pa mwa"], "Honoraires": ["Fees", "Onorè"], "Minimum par jour": ["Minimum per day", "Minimòm pa jou"], "Maximum par jour": ["Maximum per day", "Maksimòm pa jou"], "Budget du projet": ["Project budget", "Bidjè pwojè a"], "Budget minimum": ["Minimum budget", "Bidjè minimòm"], "Budget maximum (facultatif)": ["Maximum budget (optional)", "Bidjè maksimòm (si ou vle)"], "/ jour": ["/ day", "/ jou"], "Publier et continuer vers le paiement": ["Publish and continue to payment", "Pibliye epi kontinye pou peye"], "Votre offre est enregistrée.": ["Your offer is saved.", "Òf ou anrejistre."], "Elle sera mise en ligne après vérification par l’équipe ALO et l’activation de votre formule.": ["It goes online after the ALO team checks it and your package is activated.", "L ap parèt an liy apre ekip ALO a verifye l epi fòmil ou aktive."], "autres fonctionnalités": ["more features", "lòt fonksyonalite"], "autre fonctionnalité": ["more feature", "lòt fonksyonalite"], "Dont": ["Including", "Ladan yo"], "À définir": ["To be decided", "Pou nou deside"], "limité à": ["capped at", "limite a"], "Emploi salarié éligible, obtenu après une candidature envoyée sur alo.ht.": ["An eligible salaried job, obtained after applying on alo.ht.", "Yon travay salarye ki kalifye, ou jwenn apre ou aplike sou alo.ht."], "par embauche": ["per hire", "pa anbochaj"], "Confirmation de l’embauche par l’employeur, puis votre première fiche de paie.": ["The employer confirms the hire, then your first payslip.", "Patwon an konfime anbochaj la, apre sa premye fich pè ou."], "jours après la vérification": ["days after verification", "jou apre verifikasyon"], "Calcul": ["Calculation", "Kalkil"], "Admissibilité": ["Eligibility", "Kalifikasyon"], "Plafond": ["Cap", "Plafon"], "Délai de versement": ["Payout time", "Delè peman"], "Mode de versement": ["Payout method", "Fason peman"], "Récompense de la personne qui recommande": ["Reward for the person who refers", "Rekonpans pou moun ki rekòmande a"], "Premier salaire mensuel": ["First monthly salary", "Premye salè pa mwa"], "Ce qui est inclus (quantité, durée ou usage)": ["What is included (quantity, duration or usage)", "Sa ki ladan l (kantite, dire oswa itilizasyon)"], "Les options standard ont un prix fixe et précisent ce qui est inclus. Sans prix approuvé, elles affichent « Prix à confirmer ». Seuls les services sur mesure sont « sur devis ».": ["Standard extras have a fixed price and state what is included. Without an approved price they show “Price to be confirmed”. Only custom services are “on quote”.", "Opsyon estanda yo gen yon pri fiks epi yo di sa ki ladan yo. San pri apwouve, yo montre « Pri pou konfime ». Se sèlman sèvis sou mezi ki « sou devi »."], "option(s) standard sans prix approuvé": ["standard extra(s) without an approved price", "opsyon estanda san pri apwouve"], "Ces conditions sont publiées sur la page « Recommander un talent ». Laissez vide ce qui n’est pas encore décidé : la page affiche « À définir ».": ["These terms are published on the “Refer a talent” page. Leave empty what is not decided yet: the page shows “To be decided”.", "Kondisyon sa yo parèt sou paj « Rekòmande yon talan ». Kite vid sa ki poko deside: paj la ap montre « Pou nou deside »."], "Pourcentage du premier salaire mensuel": ["Percentage of the first monthly salary", "Pousantaj premye salè pa mwa"], "Plafond par embauche (HTG)": ["Cap per hire (HTG)", "Plafon pa anbochaj (HTG)"], "Délai de versement (jours après la vérification)": ["Payout time (days after verification)", "Delè peman (jou apre verifikasyon)"], "Récompense de la personne qui recommande (HTG)": ["Reward for the person who refers (HTG)", "Rekonpans pou moun ki rekòmande a (HTG)"], "Modes de versement (séparés par des virgules)": ["Payout methods (comma-separated)", "Fason peman (separe ak vigil)"], "Ex. virement bancaire": ["E.g. bank transfer", "Egz. transfè labank"], "Publier ces conditions": ["Publish these terms", "Pibliye kondisyon sa yo"], "Prix à confirmer": ["Price to be confirmed", "Pri pou konfime"], "1 offre de plus, même durée de publication que la formule": ["1 more offer, same publication time as the package", "1 òf anplis, menm dire piblikasyon ak fòmil la"], "1 poste de plus à pourvoir dans la même offre": ["1 more position in the same offer", "1 pòs anplis nan menm òf la"], "15 jours de publication en plus pour une offre": ["15 more days of publication for one offer", "15 jou piblikasyon anplis pou yon òf"], "Pour 1 offre, pendant toute sa durée de publication": ["For 1 offer, for its whole publication time", "Pou 1 òf, pandan tout dire piblikasyon li"], "1 offre mise en avant pendant toute sa durée de publication": ["1 offer featured for its whole publication time", "1 òf mete devan pandan tout dire piblikasyon li"], "Service sur mesure, chiffré sur devis": ["Custom service, priced on quote", "Sèvis sou mezi, pri sou devi"]}; for (const [fr, [en, kr]] of Object.entries(T)) { if (!(fr in EN)) EN[fr] = en; if (!(fr in KR)) KR[fr] = kr; } })();
window.ALO_I18N = { KR, EN };
})();
