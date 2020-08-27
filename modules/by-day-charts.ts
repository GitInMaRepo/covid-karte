import { getElementOrThrow } from './helpers';

import 'moment';
import 'chartjs-plugin-zoom';
import chartjs from 'chart.js';


export function loadAndDisplayDailyInfections() {
    const data =
    {"objectIdFieldName":"ObjectId","uniqueIdField":{"name":"ObjectId","isSystemMaintained":true},"globalIdFieldName":"","fields":[{"name":"GesamtFall","type":"esriFieldTypeDouble","alias":"GesamtFall","sqlType":"sqlTypeFloat","domain":null,"defaultValue":null},{"name":"Refdatum","type":"esriFieldTypeDate","alias":"Referenzdatum","sqlType":"sqlTypeOther","length":0,"domain":null,"defaultValue":null},{"name":"IstErkrankungsbeginn","type":"esriFieldTypeInteger","alias":"IstErkrankungsbeginn","sqlType":"sqlTypeOther","domain":null,"defaultValue":null}],"features":[{"attributes":{"GesamtFall":7,"Refdatum":1598400000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":621,"Refdatum":1598400000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":958,"Refdatum":1598313600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":34,"Refdatum":1598313600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":923,"Refdatum":1598227200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":93,"Refdatum":1598227200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":366,"Refdatum":1598140800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":139,"Refdatum":1598140800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":149,"Refdatum":1598054400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":604,"Refdatum":1598054400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1068,"Refdatum":1597968000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":219,"Refdatum":1597968000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":999,"Refdatum":1597881600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":279,"Refdatum":1597881600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1049,"Refdatum":1597795200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":365,"Refdatum":1597795200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":479,"Refdatum":1597708800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":927,"Refdatum":1597708800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":465,"Refdatum":1597622400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":969,"Refdatum":1597622400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":324,"Refdatum":1597536000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":392,"Refdatum":1597536000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":428,"Refdatum":1597449600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":447,"Refdatum":1597449600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":812,"Refdatum":1597363200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":478,"Refdatum":1597363200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":881,"Refdatum":1597276800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":509,"Refdatum":1597276800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":933,"Refdatum":1597190400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":509,"Refdatum":1597190400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":474,"Refdatum":1597104000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":714,"Refdatum":1597104000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":622,"Refdatum":1597017600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":562,"Refdatum":1597017600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":388,"Refdatum":1596931200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":200,"Refdatum":1596931200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":416,"Refdatum":1596844800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":385,"Refdatum":1596844800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":434,"Refdatum":1596758400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":590,"Refdatum":1596758400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":402,"Refdatum":1596672000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":660,"Refdatum":1596672000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":419,"Refdatum":1596585600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":597,"Refdatum":1596585600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":513,"Refdatum":1596499200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":408,"Refdatum":1596499200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":488,"Refdatum":1596412800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":398,"Refdatum":1596412800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":183,"Refdatum":1596326400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":369,"Refdatum":1596326400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":293,"Refdatum":1596240000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":384,"Refdatum":1596240000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":355,"Refdatum":1596153600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":498,"Refdatum":1596153600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":327,"Refdatum":1596067200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":381,"Refdatum":1596067200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":353,"Refdatum":1595980800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":418,"Refdatum":1595980800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":369,"Refdatum":1595894400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":346,"Refdatum":1595894400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":419,"Refdatum":1595808000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":236,"Refdatum":1595808000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":153,"Refdatum":1595721600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":285,"Refdatum":1595721600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":303,"Refdatum":1595635200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":279,"Refdatum":1595635200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":368,"Refdatum":1595548800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":365,"Refdatum":1595548800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":305,"Refdatum":1595462400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":338,"Refdatum":1595462400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":380,"Refdatum":1595376000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":296,"Refdatum":1595376000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":233,"Refdatum":1595289600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":353,"Refdatum":1595289600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":364,"Refdatum":1595203200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":232,"Refdatum":1595203200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":266,"Refdatum":1595116800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":117,"Refdatum":1595116800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":244,"Refdatum":1595030400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":244,"Refdatum":1595030400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":296,"Refdatum":1594944000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":233,"Refdatum":1594944000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":263,"Refdatum":1594857600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":237,"Refdatum":1594857600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":293,"Refdatum":1594771200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":282,"Refdatum":1594771200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":259,"Refdatum":1594684800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":210,"Refdatum":1594684800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":157,"Refdatum":1594598400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":305,"Refdatum":1594598400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":164,"Refdatum":1594512000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":65,"Refdatum":1594512000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":200,"Refdatum":1594425600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":145,"Refdatum":1594425600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":237,"Refdatum":1594339200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":225,"Refdatum":1594339200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":200,"Refdatum":1594252800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":183,"Refdatum":1594252800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":175,"Refdatum":1594166400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":219,"Refdatum":1594166400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":197,"Refdatum":1594080000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":177,"Refdatum":1594080000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":156,"Refdatum":1593993600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":197,"Refdatum":1593993600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":146,"Refdatum":1593907200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":85,"Refdatum":1593907200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":148,"Refdatum":1593820800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":135,"Refdatum":1593820800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":180,"Refdatum":1593734400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":224,"Refdatum":1593734400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":225,"Refdatum":1593648000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":171,"Refdatum":1593648000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":228,"Refdatum":1593561600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":202,"Refdatum":1593561600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":224,"Refdatum":1593475200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":232,"Refdatum":1593475200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":213,"Refdatum":1593388800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":236,"Refdatum":1593388800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":146,"Refdatum":1593302400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":118,"Refdatum":1593302400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":151,"Refdatum":1593216000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":176,"Refdatum":1593216000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":220,"Refdatum":1593129600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":284,"Refdatum":1593129600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":286,"Refdatum":1593043200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":199,"Refdatum":1593043200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":245,"Refdatum":1592956800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":229,"Refdatum":1592956800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":191,"Refdatum":1592870400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":308,"Refdatum":1592870400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":233,"Refdatum":1592784000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":277,"Refdatum":1592784000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":168,"Refdatum":1592697600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":179,"Refdatum":1592697600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":207,"Refdatum":1592611200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":241,"Refdatum":1592611200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":428,"Refdatum":1592524800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":290,"Refdatum":1592524800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":325,"Refdatum":1592438400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":226,"Refdatum":1592438400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":331,"Refdatum":1592352000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":366,"Refdatum":1592352000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":698,"Refdatum":1592265600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":257,"Refdatum":1592265600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":113,"Refdatum":1592179200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":283,"Refdatum":1592179200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":157,"Refdatum":1592092800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":102,"Refdatum":1592092800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":188,"Refdatum":1592006400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":156,"Refdatum":1592006400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":185,"Refdatum":1591920000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":179,"Refdatum":1591920000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":174,"Refdatum":1591833600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":127,"Refdatum":1591833600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":268,"Refdatum":1591747200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":218,"Refdatum":1591747200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":198,"Refdatum":1591660800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":204,"Refdatum":1591660800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":153,"Refdatum":1591574400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":217,"Refdatum":1591574400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":77,"Refdatum":1591488000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":106,"Refdatum":1591488000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":116,"Refdatum":1591401600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":157,"Refdatum":1591401600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":209,"Refdatum":1591315200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":171,"Refdatum":1591315200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":258,"Refdatum":1591228800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":185,"Refdatum":1591228800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":209,"Refdatum":1591142400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":255,"Refdatum":1591142400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":119,"Refdatum":1591056000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":220,"Refdatum":1591056000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":172,"Refdatum":1590969600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":68,"Refdatum":1590969600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":74,"Refdatum":1590883200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":133,"Refdatum":1590883200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":186,"Refdatum":1590796800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":157,"Refdatum":1590796800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":190,"Refdatum":1590710400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":192,"Refdatum":1590710400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":232,"Refdatum":1590624000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":202,"Refdatum":1590624000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":276,"Refdatum":1590537600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":254,"Refdatum":1590537600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":229,"Refdatum":1590451200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":340,"Refdatum":1590451200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":190,"Refdatum":1590364800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":265,"Refdatum":1590364800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":116,"Refdatum":1590278400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":175,"Refdatum":1590278400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":164,"Refdatum":1590192000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":191,"Refdatum":1590192000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":213,"Refdatum":1590105600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":227,"Refdatum":1590105600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":217,"Refdatum":1590019200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":192,"Refdatum":1590019200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":324,"Refdatum":1589932800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":386,"Refdatum":1589932800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":318,"Refdatum":1589846400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":214,"Refdatum":1589846400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":277,"Refdatum":1589760000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":355,"Refdatum":1589760000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":200,"Refdatum":1589673600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":199,"Refdatum":1589673600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":210,"Refdatum":1589587200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":298,"Refdatum":1589587200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":348,"Refdatum":1589500800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":360,"Refdatum":1589500800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":375,"Refdatum":1589414400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":245,"Refdatum":1589414400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":301,"Refdatum":1589328000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":395,"Refdatum":1589328000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":325,"Refdatum":1589241600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":305,"Refdatum":1589241600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":369,"Refdatum":1589155200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":309,"Refdatum":1589155200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":301,"Refdatum":1589068800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":144,"Refdatum":1589068800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":325,"Refdatum":1588982400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":285,"Refdatum":1588982400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":429,"Refdatum":1588896000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":384,"Refdatum":1588896000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":407,"Refdatum":1588809600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":444,"Refdatum":1588809600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":413,"Refdatum":1588723200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":499,"Refdatum":1588723200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":422,"Refdatum":1588636800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":463,"Refdatum":1588636800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":536,"Refdatum":1588550400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":286,"Refdatum":1588550400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":169,"Refdatum":1588464000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":427,"Refdatum":1588464000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":260,"Refdatum":1588377600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":420,"Refdatum":1588377600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":479,"Refdatum":1588291200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":384,"Refdatum":1588291200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":538,"Refdatum":1588204800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":591,"Refdatum":1588204800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":503,"Refdatum":1588118400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":580,"Refdatum":1588118400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":564,"Refdatum":1588032000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":533,"Refdatum":1588032000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":700,"Refdatum":1587945600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":470,"Refdatum":1587945600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":268,"Refdatum":1587859200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":518,"Refdatum":1587859200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":617,"Refdatum":1587772800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":516,"Refdatum":1587772800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":711,"Refdatum":1587686400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":749,"Refdatum":1587686400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":798,"Refdatum":1587600000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":778,"Refdatum":1587600000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":805,"Refdatum":1587513600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":914,"Refdatum":1587513600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":711,"Refdatum":1587427200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":817,"Refdatum":1587427200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":581,"Refdatum":1587340800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1039,"Refdatum":1587340800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":798,"Refdatum":1587254400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":495,"Refdatum":1587254400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":932,"Refdatum":1587168000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":716,"Refdatum":1587168000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1080,"Refdatum":1587081600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1117,"Refdatum":1587081600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1007,"Refdatum":1586995200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1144,"Refdatum":1586995200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1287,"Refdatum":1586908800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":922,"Refdatum":1586908800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":762,"Refdatum":1586822400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1299,"Refdatum":1586822400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1271,"Refdatum":1586736000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":525,"Refdatum":1586736000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1313,"Refdatum":1586649600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":589,"Refdatum":1586649600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1351,"Refdatum":1586563200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":978,"Refdatum":1586563200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":959,"Refdatum":1586476800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1603,"Refdatum":1586476800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1886,"Refdatum":1586390400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1410,"Refdatum":1586390400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1459,"Refdatum":1586304000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1995,"Refdatum":1586304000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2117,"Refdatum":1586217600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1345,"Refdatum":1586217600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2453,"Refdatum":1586131200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1044,"Refdatum":1586131200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1908,"Refdatum":1586044800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":724,"Refdatum":1586044800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2150,"Refdatum":1585958400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1119,"Refdatum":1585958400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1670,"Refdatum":1585872000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2737,"Refdatum":1585872000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1568,"Refdatum":1585785600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2684,"Refdatum":1585785600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":3002,"Refdatum":1585699200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1469,"Refdatum":1585699200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1440,"Refdatum":1585612800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2545,"Refdatum":1585612800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":3399,"Refdatum":1585526400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":951,"Refdatum":1585526400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2352,"Refdatum":1585440000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":695,"Refdatum":1585440000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2982,"Refdatum":1585353600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":967,"Refdatum":1585353600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":3198,"Refdatum":1585267200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1265,"Refdatum":1585267200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":3068,"Refdatum":1585180800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1214,"Refdatum":1585180800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1100,"Refdatum":1585094400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":3462,"Refdatum":1585094400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":3121,"Refdatum":1585008000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":908,"Refdatum":1585008000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":750,"Refdatum":1584921600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":4209,"Refdatum":1584921600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2936,"Refdatum":1584835200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":470,"Refdatum":1584835200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":3543,"Refdatum":1584748800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":681,"Refdatum":1584748800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":800,"Refdatum":1584662400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":4401,"Refdatum":1584662400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":3761,"Refdatum":1584576000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":832,"Refdatum":1584576000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":819,"Refdatum":1584489600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":4324,"Refdatum":1584489600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":697,"Refdatum":1584403200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":4230,"Refdatum":1584403200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":486,"Refdatum":1584316800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":4996,"Refdatum":1584316800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":265,"Refdatum":1584230400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":3772,"Refdatum":1584230400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":3647,"Refdatum":1584144000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":246,"Refdatum":1584144000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":3590,"Refdatum":1584057600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":309,"Refdatum":1584057600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":212,"Refdatum":1583971200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2956,"Refdatum":1583971200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":146,"Refdatum":1583884800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":2667,"Refdatum":1583884800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2137,"Refdatum":1583798400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":121,"Refdatum":1583798400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1691,"Refdatum":1583712000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":77,"Refdatum":1583712000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":19,"Refdatum":1583625600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1085,"Refdatum":158365600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":802,"Refdatum":1583539200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":18,"Refdatum":1583539200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":47,"Refdatum":1583452800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":633,"Refdatum":1583452800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":30,"Refdatum":1583366400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":414,"Refdatum":1583366400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":36,"Refdatum":1583280000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":376,"Refdatum":1583280000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":276,"Refdatum":1583193600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":23,"Refdatum":1583193600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":285,"Refdatum":1583107200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":7,"Refdatum":1583107200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":11,"Refdatum":1583020800000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":216,"Refdatum":1583020800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":188,"Refdatum":1582934400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":4,"Refdatum":1582934400000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":207,"Refdatum":1582848000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":10,"Refdatum":1582848000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":159,"Refdatum":1582761600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":3,"Refdatum":1582761600000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":153,"Refdatum":1582675200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":104,"Refdatum":1582588800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":65,"Refdatum":1582502400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":45,"Refdatum":1582416000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":23,"Refdatum":1582329600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":16,"Refdatum":1582243200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":26,"Refdatum":1582156800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":9,"Refdatum":1582070400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":10,"Refdatum":1581984000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":9,"Refdatum":1581897600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":5,"Refdatum":1581811200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":11,"Refdatum":1581724800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":6,"Refdatum":1581638400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":5,"Refdatum":1581552000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":4,"Refdatum":1581465600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1581379200000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":1,"Refdatum":1581379200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":6,"Refdatum":1581292800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2,"Refdatum":1581206400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2,"Refdatum":1581033600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2,"Refdatum":1580860800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1580774400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2,"Refdatum":1580688000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1580688000000,"IstErkrankungsbeginn":0}},{"attributes":{"GesamtFall":4,"Refdatum":1580601600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":3,"Refdatum":1580428800000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":5,"Refdatum":1580342400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1580256000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1580169600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2,"Refdatum":1580083200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1579910400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1579824000000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2,"Refdatum":1579737600000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1579478400000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":2,"Refdatum":1579219200000,"IstErkrankungsbeginn":1}},{"attributes":{"GesamtFall":1,"Refdatum":1579046400000,"IstErkrankungsbeginn":1}}]};

    const features = [...data.features];
    features.sort((a,b) => a.attributes.Refdatum - b.attributes.Refdatum);

    const labels = new Set<number>();
    const erkrankung: {[key: number]: number} = {};
    const melde: {[key: number]: number}  = {};

    for(const {attributes} of features) {
        labels.add(attributes.Refdatum);
        if(attributes.IstErkrankungsbeginn === 1) {
            erkrankung[attributes.Refdatum] = attributes.GesamtFall;
        }else {
            melde[attributes.Refdatum] = attributes.GesamtFall;
        }
    }

    const sortedLabels = Array.from(labels);
    sortedLabels.sort((a,b) => a-b);

    const values: [{x: number, y: number}, {x: number, y: number}][] = [];
    for(const label of sortedLabels) {
        values.push([
            {x: label, y: erkrankung[label] === undefined ? 0 : erkrankung[label]},
            {x: label, y: melde[label] === undefined ? 0 : melde[label]},
        ])
    }


    const ctx = getElementOrThrow<HTMLCanvasElement>('canvas');
    const myChart = new chartjs.Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [
                {
                label: 'Erkrankungsdatum ',
                data: values.map(value => value[0]),
                backgroundColor: '#004da8',
                stack: 'stack0',
                borderWidth: 0,
                barPercentage: 1,
                categoryPercentage: 1,
            },{
                label: 'Meldedatum ',
                data: values.map(value => value[1]),
                backgroundColor: '#f5bd45',
                stack: 'stack0',
                borderWidth: 0,
                barPercentage: 1,
                categoryPercentage: 1
            }
        ]
        },
        options: {
            legend: {
                display: false,
            },
            animation: {
                duration: 0 // general animation time
            },
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'month',
                        },
                        ticks: {
                            min: '2020-03'
                        },
                        stacked: true,
                        gridLines: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            borderDash: [5]
                        }
                    }
                ],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        borderDash: [5]
                    }
                    
                }]
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'x'
                    },
                    zoom: {
                        enabled: true,

                        rangeMin: {
                            x: new Date(2020, 2)
                        },

                        rangeMax: {
                            x: new Date()
                        },

                        mode: 'x'
                    }
                }
            }
        },
    });
}